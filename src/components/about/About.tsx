"use client";

import React from "react";
import { personalInfo } from "@/data/profile";
import { PortraitFrame } from "./PortraitFrame";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { CheckCircle2, ExternalLink } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      aria-label="About Abdurrahman"
      className="py-24 sm:py-32 relative border-t border-white/5 dark:border-white/5 light:border-zinc-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait Frame Composition (lg:col-span-5) */}
          <MotionReveal
            direction="left"
            className="lg:col-span-5 order-2 lg:order-1 flex justify-center"
          >
            <PortraitFrame />
          </MotionReveal>

          {/* Right Column: Editorial Narrative & Competencies (lg:col-span-7) */}
          <MotionReveal
            direction="right"
            className="lg:col-span-7 order-1 lg:order-2 space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-indigo-400 uppercase tracking-widest">
                03 / About
              </span>
              <div className="h-px w-8 bg-indigo-500/40" />
            </div>

            <h2 className="font-display font-bold text-section-title text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-tight">
              Engineering interfaces that feel as good as they function.
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed font-normal">
              {personalInfo.about.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Company Link Callout */}
            <div className="p-4 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-300 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse-subtle" />
                <div className="text-xs font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                  Currently building software at{" "}
                  <span className="font-semibold text-indigo-400 dark:text-indigo-400 light:text-indigo-600">
                    {personalInfo.company}
                  </span>
                </div>
              </div>
              <a
                href={personalInfo.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open"
                className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors"
              >
                <span>Visit Company</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Qualitative Capability Badges (Bento 2x2 layout) */}
            <div className="pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3 font-semibold">
                Core Engineering Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalInfo.qualitativeStrengths.map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-200 hover:border-indigo-500/40 transition-colors flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span className="text-xs font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600 pl-6">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
