"use client";

import React from "react";
import { motion } from "framer-motion";
import { socialLinks } from "@/data/social";
import { GithubIcon } from "@/components/ui/Icons";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MotionReveal } from "@/components/ui/MotionReveal";
import {
  GitBranch,
  ShieldCheck,
  Smartphone,
  Gauge,
  ExternalLink,
} from "lucide-react";

export function Ecosystem() {
  const githubLink = socialLinks.find((l) => l.name === "GitHub")?.url || "#";

  const workflowPractices = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
      title: "Strict TypeScript Safety",
      description:
        "Utilizing comprehensive interface definitions and strict compiler settings to eliminate runtime bugs at build time.",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-purple-400" />,
      title: "Cross-Platform Parity",
      description:
        "Building React Native apps with unified state management and platform-tuned native feel for iOS and Android.",
    },
    {
      icon: <Gauge className="w-5 h-5 text-cyan-400" />,
      title: "Performance & Render Hygiene",
      description:
        "Structuring component boundaries to avoid wasteful re-renders, optimize list virtualization, and keep JS bundles lean.",
    },
    {
      icon: <GitBranch className="w-5 h-5 text-emerald-400" />,
      title: "Clean Branching & PR Hygiene",
      description:
        "Following clear commit messages, structured feature branches, and collaborative pull request workflows.",
    },
  ];

  return (
    <section
      id="ecosystem"
      aria-label="Developer Ecosystem"
      className="py-24 sm:py-32 relative border-t border-white/5 dark:border-white/5 light:border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs font-semibold text-indigo-400 uppercase tracking-widest">
                  07 / Ecosystem
                </span>
                <div className="h-px w-8 bg-indigo-500/40" />
              </div>
              <h2 className="font-display font-bold text-section-title text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-tight">
                Developer Ecosystem.
              </h2>
              <p className="text-base sm:text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-2 max-w-xl">
                Engineering standards, collaboration practices, and open source tooling.
              </p>
            </div>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-zinc-100 hover:bg-white/[0.1] light:hover:bg-zinc-200 border border-white/10 dark:border-white/15 light:border-zinc-300 text-xs font-mono text-zinc-200 dark:text-zinc-200 light:text-zinc-800 transition-colors w-fit"
            >
              <GithubIcon className="w-4 h-4 text-indigo-400" />
              <span>View GitHub Repositories</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
            </a>
          </div>
        </MotionReveal>

        {/* 4 Architecture & Workflow Cards (Bento 4 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowPractices.map((practice, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <SpotlightCard
                enableTilt={true}
                className="p-6 flex flex-col justify-between space-y-4 hover:border-indigo-500/40 transition-all h-full"
              >
                <div className="p-3 rounded-2xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 border border-white/5 w-fit">
                  {practice.icon}
                </div>

                <div>
                  <h3 className="font-display font-bold text-base text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-2">
                    {practice.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-normal">
                    {practice.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 dark:border-white/5 light:border-zinc-100">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    Practice 0{idx + 1}
                  </span>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
