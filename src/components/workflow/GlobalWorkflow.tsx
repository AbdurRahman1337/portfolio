"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { soundFx } from "@/lib/sound";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MotionReveal } from "@/components/ui/MotionReveal";
import {
  Compass,
  Layers,
  Zap,
  Rocket,
  CheckCircle2,
  Gauge,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";

export function GlobalWorkflow() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const workflowSteps = [
    {
      number: "01",
      icon: <Compass className="w-5 h-5 text-indigo-400" />,
      title: "Discovery & Architecture Spec",
      timeframe: "Week 1",
      tagline: "Aligning product goals, data flow & UI wireframes",
      description:
        "Deep-dive into your requirements, edge cases, user journeys, and technical constraints. I produce strict TypeScript schemas, state architecture diagrams, and interactive Figma/code scaffolding so no time is wasted during development.",
      deliverables: [
        "Component & State Machine Spec",
        "API Contracts & Strict TS Types",
        "Design System Token Sync",
      ],
    },
    {
      number: "02",
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      timeframe: "Weeks 1–2",
      title: "Interactive Prototype & Sprints",
      tagline: "Rapid weekly iterations with live preview links",
      description:
        "Building core user flows with live Vercel deployments and Expo EAS preview channels. You test real builds on iOS, Android, and Web with complete transparency, regular async Loom updates, and bi-weekly syncs.",
      deliverables: [
        "Live Vercel Preview Environments",
        "Expo Internal TestFlight / APK Builds",
        "Async Loom Walkthroughs",
      ],
    },
    {
      number: "03",
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
      timeframe: "Weeks 2–3",
      title: "60 FPS Polish & Performance QA",
      tagline: "Hardware-accelerated gesture physics & zero-jank lists",
      description:
        "Profiling render cycles, optimizing FlashList memory bounds, eliminating layout shift, and integrating robust caching with TanStack Query. Every interaction feels tactile, responsive, and native.",
      deliverables: [
        "60 FPS Gesture & Animation Profiling",
        "Offline-First Sync & Optimistic UI",
        "Strict Accessibility & Contrast Audit",
      ],
    },
    {
      number: "04",
      icon: <Rocket className="w-5 h-5 text-emerald-400" />,
      timeframe: "Week 4 / Launch",
      title: "Store Submission, CI/CD & Scale",
      tagline: "Production launch with automated deployment pipelines",
      description:
        "Managing Apple App Store & Google Play Store submission review compliance, setting up GitHub Actions automated testing, and handing over comprehensive documentation with 30-day post-launch warranty.",
      deliverables: [
        "App Store & Google Play Publishing",
        "GitHub Actions CI/CD Pipeline",
        "30-Day Post-Launch Technical Warranty",
      ],
    },
  ];

  return (
    <section
      id="process"
      aria-label="Global Client Delivery Process"
      className="py-24 sm:py-32 relative border-t border-white/5 dark:border-white/5 light:border-zinc-200 bg-radial-gradient-hero scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs font-semibold text-indigo-400 uppercase tracking-widest">
                  04 / Global Execution
                </span>
                <div className="h-px w-8 bg-indigo-500/40" />
              </div>
              <h2 className="font-display font-bold text-section-title text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-tight">
                How I Deliver for Global Clients.
              </h2>
              <p className="text-base sm:text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-2 max-w-2xl">
                A transparent, battle-tested 4-phase agile delivery framework engineered for high-velocity international founders, startups, and remote engineering teams.
              </p>
            </div>

            {/* Quick SLA / Trust Badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <div className="px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                <span>&lt; 24h Async Response SLA</span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Milestone Reliability</span>
              </div>
            </div>
          </div>
        </MotionReveal>

        {/* 4 Interactive Process Step Cards (Bento-style 4 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard
                  enableTilt={true}
                  onClick={() => {
                    soundFx.playClick(900 + idx * 100);
                    setActiveStep(idx);
                  }}
                  className={`p-6 cursor-pointer flex flex-col justify-between space-y-5 transition-all h-full ${
                    isActive
                      ? "border-indigo-500/60 ring-1 ring-indigo-500/40 shadow-xl shadow-indigo-500/15"
                      : "hover:border-white/20"
                  }`}
                >
                  <div>
                    {/* Top Step Number & Timeframe */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-2xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 border border-white/10">
                        {step.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-semibold">
                          {step.timeframe}
                        </span>
                        <span className="font-mono text-sm font-bold text-zinc-500">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="font-display font-bold text-lg text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs font-mono text-indigo-400/90 mb-3">
                      {step.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-3 border-t border-white/5 dark:border-white/5 light:border-zinc-200 space-y-1.5">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                      Key Outputs:
                    </span>
                    {step.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-1.5 text-[11px] text-zinc-300 dark:text-zinc-300 light:text-zinc-700"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Global Client Collaboration Promise Banner */}
        <MotionReveal delay={0.2}>
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-black border border-indigo-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-1 text-center lg:text-left z-10">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-indigo-300 text-xs font-mono font-semibold">
                <Gauge className="w-4 h-4 text-cyan-400" />
                <span>THE GLOBAL CLIENT GUARANTEE</span>
              </div>
              <h4 className="font-display font-bold text-lg sm:text-xl text-zinc-100">
                Zero communication blackouts. 100% deterministic code.
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
                You get clear daily standup messages, structured PRs with visual test recordings, and direct WhatsApp/Slack communication during your business day.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 z-10">
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <div className="text-lg font-bold font-display text-emerald-400">&lt; 4h</div>
                <div className="text-[10px] font-mono text-zinc-400">Avg Slack Response</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <div className="text-lg font-bold font-display text-indigo-400">100%</div>
                <div className="text-[10px] font-mono text-zinc-400">On-Time Milestones</div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
