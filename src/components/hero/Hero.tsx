"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { soundFx } from "@/lib/sound";
import { HeroVisual } from "./HeroVisual";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { WorldStatus } from "@/components/ui/WorldStatus";
import { BookingModal } from "@/components/contact/BookingModal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import {
  ArrowDownRight,
  FileDown,
  ExternalLink,
  Calendar,
  Sparkles,
} from "lucide-react";

export function Hero() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const resumeLink = socialLinks.find((l) => l.name === "Resume")?.url || "#";
  const githubLink = socialLinks.find((l) => l.name === "GitHub")?.url || "#";
  const linkedinLink = socialLinks.find((l) => l.name === "LinkedIn")?.url || "#";

  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    soundFx.playClick();
    const workEl = document.getElementById("work");
    if (workEl) {
      workEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="hero"
        aria-label="Introduction"
        className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-radial-gradient-hero"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Hero Typography & Call-To-Actions (Col 1-7) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-start z-10"
            >
              {/* Live World Status & Global Availability Pill */}
              <div className="mb-6 flex items-center gap-3">
                <WorldStatus showOverlap={true} />
              </div>

              {/* Dominant Editorial Heading with Linear Gradient */}
              <h1 className="font-display font-bold text-hero-display text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-tight mb-4">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-white via-zinc-100 to-indigo-300 dark:from-white dark:via-zinc-100 dark:to-indigo-300 light:from-zinc-900 light:via-indigo-950 light:to-indigo-600 bg-clip-text text-transparent">
                  {personalInfo.name}.
                </span>
              </h1>

              {/* Core Value Proposition Statement */}
              <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-zinc-200 dark:text-zinc-200 light:text-zinc-800 leading-snug tracking-tight mb-6 max-w-2xl">
                {personalInfo.heroStatement}
              </p>

              {/* Supporting Context & Affiliation */}
              <p className="text-base sm:text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed max-w-xl mb-8">
                {personalInfo.heroSupporting}{" "}
                <a
                  href={personalInfo.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-indigo-400 hover:text-indigo-300 dark:text-indigo-400 dark:hover:text-indigo-300 light:text-indigo-600 light:hover:text-indigo-700 underline decoration-indigo-400/40 hover:decoration-indigo-400 transition-colors"
                  data-cursor="open"
                >
                  <span>{personalInfo.company}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>

              {/* CTA Buttons with Spring Magnetic Controls */}
              <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
                <Magnetic strength={0.25}>
                  <Button
                    size="lg"
                    variant="primary"
                    onClick={handleScrollToWork}
                    className="w-full sm:w-auto shadow-lg shadow-indigo-600/25 group relative overflow-hidden"
                    data-cursor="view"
                  >
                    <span>View Selected Work</span>
                    <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                  </Button>
                </Magnetic>

                <Magnetic strength={0.25}>
                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playPop(1200);
                      setBookingOpen(true);
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-medium text-indigo-200 bg-indigo-600/15 hover:bg-indigo-600/25 border border-indigo-500/35 hover:border-indigo-400/50 transition-all shadow-sm group"
                  >
                    <Calendar className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                    <span>Book Intro Call</span>
                  </button>
                </Magnetic>

                <Magnetic strength={0.25}>
                  <a
                    href={resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-base font-medium text-zinc-200 dark:text-zinc-200 light:text-zinc-800 bg-white/[0.05] dark:bg-white/[0.05] light:bg-zinc-100 hover:bg-white/[0.12] light:hover:bg-zinc-200 border border-white/10 dark:border-white/15 light:border-zinc-300 transition-colors shadow-sm"
                    aria-label="Download Abdurrahman's Resume"
                  >
                    <FileDown className="w-4 h-4 text-indigo-400" />
                    <span>Resume</span>
                  </a>
                </Magnetic>

                {/* Social links row */}
                <div className="flex items-center gap-2 pt-2 sm:pt-0">
                  <Magnetic strength={0.2}>
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub profile"
                      data-cursor="open"
                      onClick={() => soundFx.playClick()}
                      className="p-3.5 rounded-xl border border-white/10 dark:border-white/15 light:border-zinc-300 bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 text-zinc-400 hover:text-white dark:hover:text-white light:text-zinc-600 light:hover:text-zinc-900 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </Magnetic>
                  <Magnetic strength={0.2}>
                    <a
                      href={linkedinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile"
                      data-cursor="open"
                      onClick={() => soundFx.playClick()}
                      className="p-3.5 rounded-xl border border-white/10 dark:border-white/15 light:border-zinc-300 bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 text-zinc-400 hover:text-white dark:hover:text-white light:text-zinc-600 light:hover:text-zinc-900 transition-colors"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </Magnetic>
                </div>
              </div>

              {/* Global Engineering Stats Bar (Bento-style items) */}
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 dark:border-white/10 light:border-zinc-200">
                {personalInfo.globalStats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.08, duration: 0.5 }}
                    className="p-3.5 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-200 hover:border-indigo-500/40 transition-colors"
                  >
                    <div className="font-display font-bold text-lg sm:text-xl text-indigo-400">
                      {stat.value}
                    </div>
                    <div className="text-xs font-mono text-zinc-200 dark:text-zinc-200 light:text-zinc-800 font-medium">
                      {stat.label}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500 truncate">
                      {stat.detail}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Signature Interactive Visual (Col 8-12) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              <div className="w-full relative aspect-square max-w-[460px] mx-auto rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/[0.03] to-transparent border border-white/15 dark:border-white/15 light:border-zinc-300/80 shadow-2xl backdrop-blur-xl">
                <div className="w-full h-full rounded-[22px] bg-black/60 dark:bg-black/60 light:bg-white/40 overflow-hidden relative flex items-center justify-center">
                  <HeroVisual />

                  {/* Floating Technical Overlay Cards */}
                  <div className="absolute top-4 left-4 z-30 px-3 py-1.5 rounded-xl bg-black/80 dark:bg-black/80 light:bg-white/95 border border-white/15 dark:border-white/15 light:border-zinc-300 text-[11px] font-mono text-zinc-200 dark:text-zinc-200 light:text-zinc-800 shadow-xl backdrop-blur-md flex items-center gap-2">
                    <div className="relative w-5 h-5 rounded-full overflow-hidden border border-indigo-400/40">
                      <Image
                        src="/images/profile/abdurrahman-avatar.png"
                        alt="Abdurrahman"
                        width={20}
                        height={20}
                        className="object-cover"
                      />
                    </div>
                    <span>TechNext • Fullstack UI</span>
                  </div>

                  <div className="absolute bottom-4 right-4 z-30 px-3 py-1.5 rounded-xl bg-black/80 dark:bg-black/80 light:bg-white/90 border border-white/15 dark:border-white/15 light:border-zinc-300 text-[11px] font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-700 shadow-xl backdrop-blur-md flex items-center gap-2">
                    <span className="text-emerald-400">●</span>
                    <span>App Store Deployed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Booking Modal */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
