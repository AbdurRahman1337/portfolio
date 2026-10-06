"use client";

import React from "react";
import { personalInfo } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { ArrowUp, FileDown } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resumeLink = socialLinks.find((l) => l.name === "Resume")?.url || "#";
  const githubLink = socialLinks.find((l) => l.name === "GitHub")?.url || "#";
  const linkedinLink = socialLinks.find((l) => l.name === "LinkedIn")?.url || "#";

  return (
    <footer className="relative border-t border-white/10 dark:border-white/10 light:border-zinc-300 bg-[#040406] dark:bg-[#040406] light:bg-zinc-100 py-12 sm:py-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand & Affiliation (md:col-span-5) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-xl text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-tight">
                {personalInfo.name}
              </span>
              <span className="text-zinc-600 dark:text-zinc-600 light:text-zinc-400">/</span>
              <span className="text-xs font-mono text-indigo-400">
                React & React Native
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-sm">
              Developer at{" "}
              <a
                href={personalInfo.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 dark:text-zinc-300 light:text-zinc-900 hover:text-indigo-400 underline transition-colors"
              >
                {personalInfo.company}
              </a>
              . Focused on building production web and cross-platform mobile software.
            </p>
          </div>

          {/* Quick Links Navigation (md:col-span-4) */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono">
            <a
              href="#work"
              className="text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors"
            >
              Selected Work
            </a>
            <a
              href="#about"
              className="text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors"
            >
              About
            </a>
            <a
              href="#stack"
              className="text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors"
            >
              Tech Stack
            </a>
            <a
              href="#experience"
              className="text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors"
            >
              Experience
            </a>
            <a
              href="#philosophy"
              className="text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#contact"
              className="text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Socials & Back to Top (md:col-span-3) */}
          <div className="md:col-span-3 flex md:flex-col items-start md:items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-white/[0.04] dark:bg-white/[0.04] light:bg-white border border-white/10 dark:border-white/10 light:border-zinc-300 text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-white/[0.04] dark:bg-white/[0.04] light:bg-white border border-white/10 dark:border-white/10 light:border-zinc-300 text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
                className="p-2 rounded-lg bg-white/[0.04] dark:bg-white/[0.04] light:bg-white border border-white/10 dark:border-white/10 light:border-zinc-300 text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors"
              >
                <FileDown className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-indigo-400 transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-12 pt-6 border-t border-white/5 dark:border-white/5 light:border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div>
            Built with React & Next.js • Tailwind CSS • TypeScript
          </div>
        </div>
      </div>
    </footer>
  );
}
