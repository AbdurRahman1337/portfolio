"use client";

import React from "react";
import Image from "next/image";
import { personalInfo } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { HeroVisual } from "./HeroVisual";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Magnetic } from "@/components/ui/Magnetic";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import {
  ArrowDownRight,
  FileDown,
  ExternalLink,
  Sparkles,
  Smartphone,
  Globe,
  Code2,
} from "lucide-react";

export function Hero() {
  const resumeLink = socialLinks.find((l) => l.name === "Resume")?.url || "#";
  const githubLink = socialLinks.find((l) => l.name === "GitHub")?.url || "#";
  const linkedinLink = socialLinks.find((l) => l.name === "LinkedIn")?.url || "#";

  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const workEl = document.getElementById("work");
    if (workEl) {
      workEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-radial-gradient-hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Typography & Call-To-Actions (Col 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Status & Specialization Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-200/60 border border-white/10 dark:border-white/15 light:border-zinc-300 text-xs font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-700 mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse-subtle" />
              <span className="font-semibold text-indigo-400 dark:text-indigo-400 light:text-indigo-600">
                REACT • REACT NATIVE
              </span>
              <span className="text-zinc-500">/</span>
              <span>WEB & MOBILE</span>
            </div>

            {/* Dominant Editorial Heading */}
            <h1 className="font-display font-bold text-hero-display text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-tight mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-white via-zinc-100 to-indigo-300 dark:from-white dark:via-zinc-100 dark:to-indigo-300 light:from-zinc-900 light:via-indigo-950 light:to-indigo-600 bg-clip-text text-transparent">
                {personalInfo.name}.
              </span>
            </h1>

            {/* Core Professional Statement */}
            <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-zinc-200 dark:text-zinc-200 light:text-zinc-800 leading-snug tracking-tight mb-6 max-w-2xl">
              {personalInfo.heroStatement}
            </p>

            {/* Supporting Context & TechNext affiliation */}
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

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Magnetic strength={0.25}>
                <Button
                  size="lg"
                  variant="primary"
                  onClick={handleScrollToWork}
                  className="w-full sm:w-auto shadow-indigo-600/25 group"
                  data-cursor="view"
                >
                  <span>View Selected Work</span>
                  <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </Button>
              </Magnetic>

              <Magnetic strength={0.25}>
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-medium text-zinc-200 dark:text-zinc-200 light:text-zinc-800 bg-white/[0.06] dark:bg-white/[0.06] light:bg-zinc-100 hover:bg-white/[0.12] light:hover:bg-zinc-200 border border-white/10 dark:border-white/15 light:border-zinc-300 transition-colors shadow-sm"
                  aria-label="Download Abdurrahman's Resume"
                >
                  <FileDown className="w-4 h-4 text-indigo-400" />
                  <span>Resume</span>
                </a>
              </Magnetic>

              {/* Social links row */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  data-cursor="open"
                  className="p-3 rounded-lg border border-white/10 dark:border-white/15 light:border-zinc-300 bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 text-zinc-400 hover:text-white dark:hover:text-white light:text-zinc-600 light:hover:text-zinc-900 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  data-cursor="open"
                  className="p-3 rounded-lg border border-white/10 dark:border-white/15 light:border-zinc-300 bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 text-zinc-400 hover:text-white dark:hover:text-white light:text-zinc-600 light:hover:text-zinc-900 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Engineering Highlights Quick Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/10 dark:border-white/10 light:border-zinc-200 w-full">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-500 light:text-zinc-400 mr-1">
                Core Stack:
              </span>
              <Badge variant="default" className="text-[11px]">
                <Globe className="w-3 h-3 text-indigo-400" />
                <span>React</span>
              </Badge>
              <Badge variant="default" className="text-[11px]">
                <Smartphone className="w-3 h-3 text-purple-400" />
                <span>React Native</span>
              </Badge>
              <Badge variant="default" className="text-[11px]">
                <Code2 className="w-3 h-3 text-blue-400" />
                <span>TypeScript</span>
              </Badge>
              <Badge variant="default" className="text-[11px]">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Modern UI</span>
              </Badge>
            </div>
          </div>

          {/* Right Column: Signature Interactive Visual (Col 8-12) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full relative aspect-square max-w-[460px] mx-auto rounded-3xl p-1 bg-gradient-to-b from-white/10 via-white/[0.02] to-transparent border border-white/10 dark:border-white/10 light:border-zinc-300/80 shadow-2xl backdrop-blur-sm">
              <div className="w-full h-full rounded-[22px] bg-black/40 dark:bg-black/40 light:bg-white/40 overflow-hidden relative flex items-center justify-center">
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
                  <span>TechNext • Developer</span>
                </div>

                <div className="absolute bottom-4 right-4 z-30 px-3 py-1.5 rounded-xl bg-black/80 dark:bg-black/80 light:bg-white/90 border border-white/15 dark:border-white/15 light:border-zinc-300 text-[11px] font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-700 shadow-xl backdrop-blur-md flex items-center gap-2">
                  <span className="text-emerald-400">●</span>
                  <span>5 Projects Portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
