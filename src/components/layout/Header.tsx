"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Magnetic } from "@/components/ui/Magnetic";
import { Menu, X, FileDown, Command, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  activeSection?: string;
}

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#contact", label: "Contact" },
];

export function Header({ activeSection = "" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const triggerCommandPalette = () => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "k",
        metaKey: true,
        bubbles: true,
      })
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass-nav shadow-lg shadow-black/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand / Monogram */}
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
          aria-label="Abdurrahman Portfolio Home"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-full overflow-hidden border border-white/15 dark:border-white/20 light:border-zinc-300 transition-colors group-hover:border-indigo-500/60 shadow-sm">
            <Image
              src="/images/profile/abdurrahman-avatar.png"
              alt="Abdurrahman"
              width={36}
              height={36}
              className="object-cover"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-display font-semibold text-sm tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 leading-tight">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-500 leading-tight">
              React & React Native
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.03] dark:bg-white/[0.03] light:bg-zinc-200/50 border border-white/10 dark:border-white/10 light:border-zinc-300/80 backdrop-blur-md"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30"
                    : "text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-900 hover:bg-white/[0.06] light:hover:bg-zinc-300/60"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions (Status, Cmd+K, Theme, Resume) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Status Indicator (Available) */}
          <div
            className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-[11px] font-mono text-emerald-400 dark:text-emerald-300 light:text-emerald-700"
            title="Available for select opportunities"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="truncate max-w-[140px]">Available</span>
          </div>

          {/* Command Palette Trigger */}
          <button
            onClick={triggerCommandPalette}
            type="button"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10 dark:border-white/10 light:border-zinc-300 bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors"
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
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg border border-white/10 dark:border-white/15 light:border-zinc-300 bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Full-Screen / Elegant Slide Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] z-50 bg-[#050505]/95 dark:bg-[#050505]/95 light:bg-white/95 backdrop-blur-2xl border-t border-white/10 dark:border-white/10 light:border-zinc-200 p-6 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 dark:border-white/10 light:border-zinc-200">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Navigation
              </span>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Available for work</span>
              </div>
            </div>

            <nav className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between text-2xl font-display font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800 hover:text-indigo-400 transition-colors py-2 border-b border-white/[0.04] dark:border-white/[0.04] light:border-zinc-100"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-zinc-500">
                      0{idx + 1}
                    </span>
                    <span>{link.label}</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-zinc-500" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 dark:border-white/10 light:border-zinc-200 space-y-3">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-indigo-600 text-white font-medium text-sm shadow-lg shadow-indigo-600/20"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pt-2">
              <span>{personalInfo.company}</span>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  triggerCommandPalette();
                }}
                className="underline hover:text-white"
              >
                Search (⌘K)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

