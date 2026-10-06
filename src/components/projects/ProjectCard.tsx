"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { soundFx } from "@/lib/sound";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/Icons";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
  ExternalLink,
  ArrowUpRight,
  Smartphone,
  Globe,
  Sparkles,
  Volume2,
  Mic,
  Flame,
  Star,
  Layers,
  MapPin,
  Car,
  FileText,
  CheckCircle2,
  BookOpen,
  Code2,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  index?: number;
  isFeaturedBento?: boolean;
  isCompactBento?: boolean;
}

export function ProjectCard({
  project,
  onOpenCaseStudy,
  index = 0,
  isFeaturedBento = false,
  isCompactBento = false,
}: ProjectCardProps) {
  const isMobile = project.platformType === "mobile";
  const [showCodePreview, setShowCodePreview] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.08, 0.3), ease: [0.16, 1, 0.3, 1] }}
    >
      <SpotlightCard
        enableTilt={true}
        className={`transition-all duration-300 hover:border-indigo-500/50 shadow-2xl overflow-hidden group ${
          isFeaturedBento
            ? "p-6 sm:p-8 lg:p-10 border-indigo-500/30"
            : isCompactBento
            ? "p-6 sm:p-7 flex flex-col justify-between"
            : "p-6 sm:p-8 lg:p-10"
        }`}
        data-cursor="view"
      >
        {/* Ambient background glow on hover */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-indigo-500/5 group-hover:bg-indigo-500/10 blur-3xl transition-all duration-500 pointer-events-none" />

        <div
          className={`grid items-center gap-8 ${
            isCompactBento
              ? "grid-cols-1"
              : "grid-cols-1 lg:grid-cols-12 lg:gap-10"
          }`}
        >
          {/* Info Column */}
          <div
            className={`flex flex-col items-start space-y-4 sm:space-y-5 z-10 ${
              isCompactBento ? "w-full" : "lg:col-span-7"
            }`}
          >
            {/* Metadata Row */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
              <span className="text-indigo-400 font-bold tracking-wider">
                {project.number} / 05
              </span>
              <span className="text-zinc-600 dark:text-zinc-600 light:text-zinc-400">•</span>
              <Badge
                variant={isMobile ? "glow" : "default"}
                className="text-[11px] font-mono flex items-center gap-1"
              >
                {isMobile ? (
                  <Smartphone className="w-3 h-3 text-purple-400" />
                ) : (
                  <Globe className="w-3 h-3 text-indigo-400" />
                )}
                <span>{project.platform}</span>
              </Badge>
              {project.badge && (
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-medium text-emerald-400">
                  {project.badge}
                </span>
              )}
              <span className="text-zinc-500 dark:text-zinc-500 light:text-zinc-400">
                {project.year}
              </span>
            </div>

            {/* Heading and Tagline */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-tight mb-1 group-hover:text-indigo-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-indigo-400/90 dark:text-indigo-400 light:text-indigo-600">
                {project.tagline}
              </p>
            </div>

            {/* Project Description */}
            <p className="text-sm sm:text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed max-w-xl">
              {project.description}
            </p>

            {/* Quantitative Metrics Highlight */}
            {project.metrics && project.metrics.length > 0 && (
              <div
                className={`w-full grid gap-2 py-1 ${
                  isCompactBento ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4"
                }`}
              >
                {project.metrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-2 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-zinc-100 border border-white/5 dark:border-white/5 light:border-zinc-200 text-center"
                  >
                    <div className="font-display font-bold text-xs sm:text-sm text-indigo-400">
                      {metric.value}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400 truncate">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Role & Key Features Summary */}
            <div className="w-full space-y-1.5 py-2 border-y border-white/5 dark:border-white/5 light:border-zinc-200 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono text-zinc-500 uppercase">Role:</span>
                <span className="font-medium text-zinc-200 dark:text-zinc-200 light:text-zinc-800">
                  {project.role}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-zinc-500 uppercase">Architecture:</span>
                <span className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 truncate">
                  {project.caseStudy.technicalHighlights[0]}
                </span>
              </div>
            </div>

            {/* Technologies Badges */}
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {project.technologies.slice(0, isCompactBento ? 4 : 6).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-300 text-[11px] font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-700"
                >
                  {tech}
                </span>
              ))}
              {isCompactBento && project.technologies.length > 4 && (
                <span className="px-2 py-1 rounded-lg bg-white/[0.02] text-[10px] font-mono text-zinc-500">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <Button
                size="sm"
                variant="primary"
                onClick={() => {
                  soundFx.playClick();
                  onOpenCaseStudy(project);
                }}
                className="group/btn"
                data-cursor="view"
              >
                <span>Quick Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Button>

              <Link
                href={`/work/${project.slug}`}
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] dark:bg-white/[0.05] light:bg-zinc-100 hover:bg-white/[0.1] light:hover:bg-zinc-200 border border-white/10 dark:border-white/10 light:border-zinc-300 text-xs font-medium text-zinc-200 dark:text-zinc-200 light:text-zinc-800 transition-colors"
                data-cursor="open"
              >
                <span>Deep Dive</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </Link>

              {project.appStoreUrl ? (
                <a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="open"
                  onClick={() => soundFx.playClick()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-medium text-emerald-400 transition-colors"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>App Store</span>
                </a>
              ) : project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="open"
                  onClick={() => soundFx.playClick()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] dark:bg-white/[0.05] light:bg-zinc-100 hover:bg-white/[0.1] light:hover:bg-zinc-200 border border-white/10 dark:border-white/10 light:border-zinc-300 text-xs font-medium text-zinc-200 dark:text-zinc-200 light:text-zinc-800 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Live Demo</span>
                </a>
              ) : null}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="open"
                  onClick={() => soundFx.playClick()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] dark:bg-white/[0.05] light:bg-zinc-100 hover:bg-white/[0.1] light:hover:bg-zinc-200 border border-white/10 dark:border-white/10 light:border-zinc-300 text-xs font-medium text-zinc-200 dark:text-zinc-200 light:text-zinc-800 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Source</span>
                </a>
              )}
            </div>
          </div>

          {/* Device Mockup Column */}
          <div
            className={`relative flex items-center justify-center ${
              isCompactBento ? "w-full pt-4" : "lg:col-span-5"
            }`}
          >
            {project.id === "summarizer" && <SummarizerMockup />}
            {project.id === "slateapp" && <SlateAppMockup />}
            {project.id === "rideshare" && <RideShareMockup />}
            {project.id === "resume-generator" && <ResumeGeneratorMockup />}
            {project.id === "ai-study-assistant" && <AIStudyAssistantMockup />}
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

/* 1. Summarizer iPhone 16 Pro Titanium Mockup */
function SummarizerMockup() {
  return (
    <div className="relative w-full max-w-[290px] aspect-[9/18.5] rounded-[42px] p-3 bg-gradient-to-b from-zinc-700 via-zinc-900 to-black border-[3px] border-zinc-600/70 shadow-2xl shadow-purple-500/15 group-hover:scale-[1.02] transition-transform duration-500">
      {/* Side buttons */}
      <div className="absolute -left-[5px] top-20 w-[3px] h-9 bg-zinc-600 rounded-l-sm" />
      <div className="absolute -left-[5px] top-32 w-[3px] h-12 bg-zinc-600 rounded-l-sm" />
      <div className="absolute -right-[5px] top-24 w-[3px] h-14 bg-zinc-600 rounded-r-sm" />

      <div className="w-full h-full rounded-[34px] bg-[#0c0d14] overflow-hidden flex flex-col justify-between p-3.5 relative border border-white/10 text-zinc-200 font-sans shadow-inner">
        {/* Dynamic Island */}
        <div className="w-28 h-5 rounded-full bg-black mx-auto mb-2 flex items-center justify-between px-2.5 border border-white/10">
          <div className="flex items-center gap-1">
            <Volume2 className="w-2.5 h-2.5 text-purple-400 animate-pulse" />
            <span className="text-[8px] font-mono text-zinc-300">Live Audio</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* Status Header */}
        <div className="flex items-center justify-between px-1 text-[10px] font-mono text-zinc-400">
          <div className="flex items-center gap-1 text-amber-400">
            <Flame className="w-3 h-3 fill-amber-400" />
            <span className="font-bold">14-Day Streak</span>
          </div>
          <div className="flex items-center gap-1 text-purple-300">
            <Star className="w-3 h-3 fill-purple-400 text-purple-400" />
            <span>Saved</span>
          </div>
        </div>

        {/* AI Book Summary Card */}
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-900/35 via-indigo-900/25 to-black border border-purple-500/30 space-y-1.5 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-mono uppercase tracking-wider text-purple-400 font-semibold flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" /> AI Book Summary
            </span>
            <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">
              Productivity
            </span>
          </div>
          <h4 className="text-xs font-bold text-zinc-100 truncate">
            Deep Work: Rules for Focused Success
          </h4>
          <p className="text-[10px] text-zinc-300 leading-snug line-clamp-2">
            Eliminating shallow distractions creates compound intellectual leverage...
          </p>
        </div>

        {/* Live Audio Player Card with Waveform */}
        <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 space-y-1.5">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-zinc-300 font-medium">Narrator Playback</span>
            <span className="font-mono text-[9px] text-indigo-400">04:18 / 14:20</span>
          </div>
          {/* Waveform graphic */}
          <div className="flex items-center gap-0.5 h-4 px-1 bg-black/40 rounded">
            {[40, 70, 30, 90, 60, 100, 45, 80, 50, 95, 70, 40, 85, 60, 30].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-indigo-500 to-purple-400 rounded-full"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="text-[8px] font-mono text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Background Audio Active
          </div>
        </div>

        {/* Voice Room Live Discussion */}
        <div className="p-2 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="p-1 rounded-full bg-indigo-500/20 text-indigo-400">
              <Mic className="w-3 h-3" />
            </div>
            <div>
              <div className="text-[9px] font-bold text-zinc-200">Live Voice Room</div>
              <div className="text-[8px] text-zinc-400">4 readers speaking now</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-indigo-600 text-white text-[9px] font-semibold">
            Join
          </span>
        </div>

        {/* Bottom Home Indicator Bar */}
        <div className="h-1 w-20 rounded-full bg-white/40 mx-auto" />
      </div>
    </div>
  );
}

/* 2. SlateApp Web Studio Mockup */
function SlateAppMockup() {
  return (
    <div className="relative w-full max-w-[440px] rounded-2xl bg-zinc-900 border border-white/15 dark:border-white/15 light:border-zinc-300 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
      {/* Browser Bar */}
      <div className="px-4 py-2.5 bg-black/70 border-b border-white/10 flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex-1 mx-2 px-3 py-0.5 rounded-md bg-white/[0.06] text-[10px] font-mono text-zinc-300 truncate flex items-center justify-between">
          <span>slateapp.ai/editor/ai-deck-studio</span>
          <span className="text-indigo-400 font-semibold">8 SLIDES READY</span>
        </div>
      </div>

      {/* Editor Content Canvas */}
      <div className="p-3.5 bg-[#0a0a0f] space-y-2.5">
        {/* Topic Input Bar */}
        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-zinc-300 truncate">
            <span className="font-mono text-indigo-400 font-semibold text-[10px]">PROMPT:</span>
            <span className="truncate text-[11px]">“AI in Mobile Systems & React Native”</span>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono text-[10px]">
            Theme: Dark Tech
          </span>
        </div>

        {/* 2 Generated Slide Cards */}
        <div className="grid grid-cols-2 gap-2">
          {/* Slide 1 */}
          <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-indigo-950/60 to-black border border-indigo-500/30 p-2.5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[9px] font-mono text-indigo-400">
              <span>SLIDE 01 / 08</span>
              <span>TITLE</span>
            </div>
            <div>
              <div className="text-[11px] font-bold text-white leading-tight mb-1">
                Next-Gen Mobile Architecture
              </div>
              <div className="h-1 w-8 bg-indigo-500 rounded" />
            </div>
            <div className="space-y-0.5 text-[8px] text-zinc-400">
              <div>• Bridging AI Models with Edge UI</div>
              <div>• 60fps Native Fluidity</div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-purple-950/60 to-black border border-purple-500/30 p-2.5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[9px] font-mono text-purple-400">
              <span>SLIDE 02 / 08</span>
              <span>METRICS</span>
            </div>
            <div className="grid grid-cols-2 gap-1 py-1">
              <div className="p-1 rounded bg-white/5 text-center">
                <div className="text-[11px] font-bold text-emerald-400">10x</div>
                <div className="text-[7px] text-zinc-400">Gen Speed</div>
              </div>
              <div className="p-1 rounded bg-white/5 text-center">
                <div className="text-[11px] font-bold text-indigo-400">100%</div>
                <div className="text-[7px] text-zinc-400">Responsive</div>
              </div>
            </div>
            <div className="text-[8px] text-zinc-400">• Automated Layout Tokens</div>
          </div>
        </div>

        {/* Action Controls Bar */}
        <div className="flex items-center justify-between pt-1 text-[10px] font-mono">
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-emerald-400">✓ AI Generation Complete</span>
          </div>
          <div className="flex gap-1.5">
            <span className="px-2 py-0.5 rounded bg-white/10 text-zinc-200 text-[10px]">
              Present (F5)
            </span>
            <span className="px-2 py-0.5 rounded bg-indigo-600 text-white font-medium text-[10px]">
              Export PDF
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 3. RideShare Mobile Mockup */
function RideShareMockup() {
  return (
    <div className="relative w-full max-w-[280px] aspect-[9/18.5] rounded-[36px] p-3 bg-gradient-to-b from-zinc-700 via-zinc-900 to-black border-[3px] border-zinc-700/80 shadow-2xl shadow-cyan-500/10 group-hover:scale-[1.02] transition-transform duration-500">
      <div className="w-full h-full rounded-[28px] bg-[#090e14] overflow-hidden flex flex-col justify-between p-3 relative border border-white/10 text-zinc-200 font-sans">
        {/* Dynamic Island */}
        <div className="w-24 h-4 rounded-full bg-black mx-auto mb-2 flex items-center justify-center">
          <span className="text-[8px] font-mono text-cyan-400">🚖 3 min away</span>
        </div>

        {/* Stylized Map View */}
        <div className="relative h-28 w-full rounded-xl bg-[#0d1622] border border-cyan-500/30 overflow-hidden p-2 flex flex-col justify-between">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />

          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path
              d="M 20 80 Q 70 30 140 60 T 230 20"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="3"
              strokeDasharray="4 2"
            />
          </svg>

          <div className="relative z-10 flex justify-between items-start">
            <span className="px-1.5 py-0.5 rounded bg-black/70 text-[8px] font-mono text-zinc-300 border border-white/10">
              📍 Current Location
            </span>
            <span className="px-1.5 py-0.5 rounded bg-cyan-600 text-[8px] font-mono text-white font-bold">
              Tech Hub
            </span>
          </div>

          <div className="relative z-10 flex items-center gap-1 text-[9px] font-mono text-cyan-300 bg-black/60 px-2 py-0.5 rounded w-fit">
            <MapPin className="w-2.5 h-2.5" /> ETA: 12 min (4.2 km)
          </div>
        </div>

        {/* Multi-Modal Vehicle Options */}
        <div className="space-y-1.5">
          <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">
            Choose Vehicle Category
          </div>
          <div className="grid grid-cols-4 gap-1 text-center text-[8px]">
            <div className="p-1 rounded-lg bg-cyan-500/20 border border-cyan-400 text-white font-bold">
              <div>🚕</div>
              <div>Taxi</div>
              <div className="text-cyan-300">$14</div>
            </div>
            <div className="p-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300">
              <div>🚐</div>
              <div>Wagon</div>
              <div className="text-zinc-400">$22</div>
            </div>
            <div className="p-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300">
              <div>🚌</div>
              <div>Bus</div>
              <div className="text-zinc-400">$3</div>
            </div>
            <div className="p-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300">
              <div>🚘</div>
              <div>Private</div>
              <div className="text-zinc-400">$18</div>
            </div>
          </div>
        </div>

        {/* Dual Account Mode & Confirm Button */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[8px] font-mono text-zinc-400 px-1">
            <span>Passenger Account</span>
            <span className="text-cyan-400 underline">Switch to Driver</span>
          </div>
          <button
            type="button"
            className="w-full py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-md shadow-cyan-600/30"
          >
            <Car className="w-3.5 h-3.5" />
            <span>Book Ride • $14.00</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* 4. Resume Generator Web Mockup */
function ResumeGeneratorMockup() {
  return (
    <div className="relative w-full max-w-[440px] rounded-2xl bg-zinc-900 border border-white/15 dark:border-white/15 light:border-zinc-300 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
      <div className="px-4 py-2.5 bg-black/60 border-b border-white/10 flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex-1 mx-2 px-3 py-0.5 rounded-md bg-white/[0.06] text-[10px] font-mono text-zinc-300 truncate flex items-center justify-between">
          <span>resumebuilder.dev/studio</span>
          <span className="text-amber-400 font-mono text-[9px]">ATS SCORE: 98/100</span>
        </div>
      </div>

      <div className="p-3 bg-[#0a0a0e] grid grid-cols-12 gap-3 min-h-[220px]">
        <div className="col-span-5 space-y-2 text-[10px]">
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 space-y-1">
            <span className="text-[9px] font-mono text-zinc-400">THEME & FONTS</span>
            <div className="flex flex-wrap gap-1">
              <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[8px]">
                Modern Tech
              </span>
              <span className="px-1.5 py-0.5 rounded bg-white/5 text-zinc-400 font-mono text-[8px]">
                Executive
              </span>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 space-y-1">
            <span className="text-[9px] font-mono text-zinc-400">SECTIONS</span>
            <div className="space-y-0.5 text-[8px] text-zinc-300">
              <div className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-2.5 h-2.5" /> Experience (3)
              </div>
              <div className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-2.5 h-2.5" /> Education (1)
              </div>
              <div className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-2.5 h-2.5" /> Tech Stack (12)
              </div>
            </div>
          </div>

          <div className="px-2 py-1 rounded bg-amber-600/20 border border-amber-500/30 text-[9px] text-amber-300 font-mono text-center">
            ⬇ PDF Export Ready
          </div>
        </div>

        <div className="col-span-7 rounded-xl bg-zinc-100 p-2.5 text-zinc-900 shadow-inner flex flex-col justify-between space-y-2">
          <div className="border-b border-zinc-300 pb-1.5">
            <div className="text-xs font-bold font-display text-zinc-900">
              Abdurrahman
            </div>
            <div className="text-[8px] font-mono text-amber-700 font-medium">
              React & React Native Developer
            </div>
          </div>

          <div className="space-y-1 text-[7px] text-zinc-700">
            <div>
              <div className="font-bold text-zinc-900 flex justify-between">
                <span>React Native Developer • TechNext</span>
                <span className="font-mono">2024 - Present</span>
              </div>
              <p className="text-zinc-600 line-clamp-1">
                Built cross-platform AI & mobile platforms with 60fps gesture navigation.
              </p>
            </div>
            <div>
              <div className="font-bold text-zinc-900 flex justify-between">
                <span>Frontend Engineer</span>
                <span className="font-mono">2023 - 2024</span>
              </div>
              <p className="text-zinc-600 line-clamp-1">
                Engineered interactive dashboards and modular TypeScript component libraries.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 pt-1 border-t border-zinc-200">
            {["React", "React Native", "TypeScript", "Tailwind"].map((s) => (
              <span
                key={s}
                className="px-1 py-0.2 rounded bg-zinc-200 text-zinc-800 text-[6px] font-mono font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* 5. AI Study Assistant Cross-Platform Mockup */
function AIStudyAssistantMockup() {
  return (
    <div className="relative w-full max-w-[440px] rounded-2xl bg-zinc-900 border border-white/15 dark:border-white/15 light:border-zinc-300 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
      <div className="px-4 py-2.5 bg-black/60 border-b border-white/10 flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex-1 mx-2 px-3 py-0.5 rounded-md bg-white/[0.06] text-[10px] font-mono text-zinc-300 truncate flex items-center justify-between">
          <span>studyaide.ai/rag-workbench</span>
          <span className="text-emerald-400 font-mono text-[9px]">VECTOR DB INDEXED</span>
        </div>
      </div>

      <div className="p-3 bg-[#0a0a0f] space-y-2 min-h-[220px]">
        <div className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 truncate">
            <FileText className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="text-[11px] font-medium text-zinc-200 truncate">
              Algorithms_Chapter4_GraphTheory.pdf
            </span>
          </div>
          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 shrink-0">
            32 Pages Indexed
          </span>
        </div>

        <div className="space-y-1.5 text-[10px]">
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 text-zinc-300 flex items-start gap-1.5">
            <span className="font-mono text-indigo-400 font-bold text-[9px]">Q:</span>
            <span>What is the complexity of Dijkstra with a binary min-heap?</span>
          </div>

          <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-950/40 to-black border border-emerald-500/30 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> RAG Answer
              </span>
              <span className="text-[8px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300">
                Citation: Page 142 [¶3]
              </span>
            </div>
            <p className="text-[10px] text-zinc-200 leading-snug">
              The time complexity is <span className="text-emerald-300 font-mono font-bold">O((V + E) log V)</span> because each vertex insertion takes logarithmic time...
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-0.5">
          <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/10 flex items-center gap-1.5 text-[9px] text-zinc-300">
            <BookOpen className="w-3 h-3 text-indigo-400" />
            <span>10-Question Quiz Generated</span>
          </div>
          <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/10 flex items-center gap-1.5 text-[9px] text-zinc-300">
            <Layers className="w-3 h-3 text-emerald-400" />
            <span>18 Key Terms Extracted</span>
          </div>
        </div>
      </div>
    </div>
  );
}
