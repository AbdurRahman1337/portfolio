"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { soundFx } from "@/lib/sound";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { SoundToggle } from "@/components/theme/SoundToggle";
import { RecruiterModal } from "@/components/recruiter/RecruiterModal";
import { Magnetic } from "@/components/ui/Magnetic";
import { Menu, X, FileDown, Command, ArrowUpRight, Zap } from "lucide-react";

interface HeaderProps {
  activeSection?: string;
  onSectionSelect?: (section: string) => void;
}

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#lab", label: "Lab" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header({ activeSection = "", onSectionSelect }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [recruiterOpen, setRecruiterOpen] = useState(false);
  const resumeLink = socialLinks.find((l) => l.name === "Resume")?.url || "#";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    soundFx.playClick();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");

    // Immediately trigger active button state
    if (onSectionSelect) {
      onSectionSelect(targetId);
    }

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 76;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  const triggerCommandPalette = () => {
    soundFx.playPop(1200);
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "k",
        metaKey: true,
        bubbles: true,
      })
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-2.5 glass-nav shadow-lg shadow-black/20"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand / Monogram */}
          <Link
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                soundFx.playClick();
                if (onSectionSelect) onSectionSelect("hero");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
            aria-label="Abdurrahman Portfolio Home"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full overflow-hidden border border-white/15 dark:border-white/20 light:border-zinc-300 transition-colors group-hover:border-indigo-500/60 shadow-sm">
              <Image
                src="/images/profile/abdurrahman-avatar.png"
                alt="Abdurrahman"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-semibold text-sm tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 leading-tight">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-500 leading-tight">
                React & React Native
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-200/60 border border-white/10 dark:border-white/10 light:border-zinc-300/80 backdrop-blur-md"
          >
            {navLinks.map((link) => {
              const linkId = link.href.replace("#", "");
              const isActive = activeSection === linkId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1 text-xs font-mono transition-all duration-200 rounded-full ${
                    isActive
                      ? "bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/40 ring-1 ring-indigo-400/50"
                      : "text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-900 hover:bg-white/[0.08] light:hover:bg-zinc-200"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Actions (Recruiter Mode, Sound, Cmd+K, Theme, Resume) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Recruiter Quick Scan Button */}
            <button
              type="button"
              onClick={() => {
                soundFx.playPop(1200);
                setRecruiterOpen(true);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-indigo-500/15 border border-indigo-500/30 hover:border-indigo-400 text-xs font-mono font-medium text-indigo-300 dark:text-indigo-300 light:text-indigo-700 shadow-sm transition-all"
              title="Open 60-second Recruiter Quick-Scan"
            >
              <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-300 animate-pulse" />
              <span className="hidden sm:inline">Recruiter Scan</span>
              <span className="sm:hidden">TL;DR</span>
            </button>

            {/* Sound FX Toggle */}
            <SoundToggle />

            {/* Command Palette Trigger */}
            <button
              onClick={triggerCommandPalette}
              type="button"
              className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10 dark:border-white/10 light:border-zinc-300 bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors"
              title="Search commands (⌘K / Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5" />
              <span>⌘K</span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Resume Button */}
            <Magnetic strength={0.2}>
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-zinc-100 dark:text-zinc-100 light:text-zinc-800 bg-white/[0.08] dark:bg-white/[0.08] light:bg-zinc-100 hover:bg-white/[0.14] light:hover:bg-zinc-200 border border-white/15 dark:border-white/15 light:border-zinc-300 rounded-lg transition-all shadow-sm"
                aria-label="Download or view Abdurrahman's Resume"
              >
                <FileDown className="w-3.5 h-3.5 text-indigo-400" />
                <span>Resume</span>
              </a>
            </Magnetic>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen((prev) => !prev);
              }}
              className="lg:hidden p-2 rounded-lg border border-white/10 dark:border-white/15 light:border-zinc-300 bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Full-Screen Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[56px] z-50 bg-[#050505]/95 dark:bg-[#050505]/95 light:bg-white/95 backdrop-blur-2xl border-t border-white/10 dark:border-white/10 light:border-zinc-200 p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6 pt-2">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 dark:border-white/10 light:border-zinc-200">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Navigation
                </span>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for work</span>
                </div>
              </div>

              <nav className="flex flex-col space-y-2">
                {navLinks.map((link, idx) => {
                  const linkId = link.href.replace("#", "");
                  const isActive = activeSection === linkId;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between text-lg font-display font-semibold transition-colors py-3 px-4 rounded-2xl border ${
                        isActive
                          ? "bg-indigo-600/20 border-indigo-500/40 text-indigo-300 shadow-md shadow-indigo-500/10"
                          : "border-white/5 text-zinc-300 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs font-mono ${
                            isActive ? "text-indigo-400 font-bold" : "text-zinc-500"
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <span>{link.label}</span>
                      </div>
                      <ArrowUpRight
                        className={`w-4 h-4 ${
                          isActive ? "text-indigo-400" : "text-zinc-500"
                        }`}
                      />
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-zinc-200 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setRecruiterOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm shadow-lg shadow-indigo-600/20"
              >
                <Zap className="w-4 h-4 fill-amber-300 text-amber-300" />
                <span>Open Recruiter Quick-Scan</span>
              </button>

              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.06] text-zinc-200 border border-white/10 font-medium text-sm"
              >
                <FileDown className="w-4 h-4 text-indigo-400" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Recruiter Modal */}
      <RecruiterModal
        isOpen={recruiterOpen}
        onClose={() => setRecruiterOpen(false)}
      />
    </>
  );
}
