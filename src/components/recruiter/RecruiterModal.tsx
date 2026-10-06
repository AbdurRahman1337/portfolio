"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { projects } from "@/data/projects";
import { soundFx } from "@/lib/sound";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";
import {
  Zap,
  X,
  FileDown,
  Copy,
  Check,
} from "lucide-react";

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RecruiterModal({ isOpen, onClose }: RecruiterModalProps) {
  const [copied, setCopied] = useState(false);
  const resumeLink = socialLinks.find((l) => l.name === "Resume")?.url || "#";
  const githubLink = socialLinks.find((l) => l.name === "GitHub")?.url || "#";
  const linkedinLink = socialLinks.find((l) => l.name === "LinkedIn")?.url || "#";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    soundFx.playSuccess();
    try {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.7 },
        colors: ["#6366f1", "#a855f7", "#38bdf8"],
      });
    } catch {}
    setTimeout(() => setCopied(false), 2200);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Recruiter Quick Scan"
      className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-[#0c0d12] light:bg-white border border-indigo-500/30 shadow-2xl shadow-indigo-500/10 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 px-6 py-3.5 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 fill-amber-300 text-amber-300 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest font-bold">
              Recruiter Quick-Scan (60-Second TL;DR)
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/20 transition-colors text-white/90"
            aria-label="Close recruiter scan"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Candidate Profile Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 dark:border-white/10 light:border-zinc-200">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-indigo-500/40 shrink-0">
                <Image
                  src="/images/profile/abdurrahman-avatar.png"
                  alt="Abdurrahman"
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
                  {personalInfo.name}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-0.5">
                  <span className="text-xs font-mono font-medium text-indigo-400">
                    React & React Native Developer
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-xs font-mono text-zinc-400">
                    TechNext
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 w-fit">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Select Roles</span>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-200 text-center">
              <span className="font-display font-bold text-xl sm:text-2xl text-indigo-400">
                5+
              </span>
              <span className="block text-[11px] font-mono text-zinc-400 mt-0.5">
                Flagship Apps
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-200 text-center">
              <span className="font-display font-bold text-xl sm:text-2xl text-purple-400">
                1 App Store
              </span>
              <span className="block text-[11px] font-mono text-zinc-400 mt-0.5">
                Live Production Title
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-200 text-center">
              <span className="font-display font-bold text-xl sm:text-2xl text-emerald-400">
                100%
              </span>
              <span className="block text-[11px] font-mono text-zinc-400 mt-0.5">
                TypeScript Strict
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-200 text-center">
              <span className="font-display font-bold text-xl sm:text-2xl text-cyan-400">
                60 FPS
              </span>
              <span className="block text-[11px] font-mono text-zinc-400 mt-0.5">
                Native UI & Gestures
              </span>
            </div>
          </div>

          {/* Primary Engineering Competencies */}
          <div className="space-y-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
              Core Tech Stack & Ecosystem
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                "React 19 / 18",
                "React Native",
                "Expo & Native Modules",
                "TypeScript",
                "Next.js App Router",
                "Tailwind CSS",
                "WebRTC / Real-Time Voice",
                "RESTful APIs & Async State",
                "Vector DB / RAG",
                "Git & CI/CD Hygiene",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 dark:text-indigo-300 light:text-indigo-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Shipped Highlights List */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
              Shipped Production Highlights
            </span>
            <div className="space-y-2">
              {projects.slice(0, 3).map((p) => (
                <div
                  key={p.id}
                  className="p-3.5 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-zinc-200 dark:text-zinc-200 light:text-zinc-800">
                        {p.title}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                        {p.platform}
                      </span>
                      {p.badge && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                      {p.tagline}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                      {p.metrics[0].value} {p.metrics[0].label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Direct Actions Footer */}
          <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-zinc-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-lg shadow-indigo-600/25 transition-all"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-zinc-100 hover:bg-white/[0.1] light:hover:bg-zinc-200 border border-white/10 dark:border-white/10 light:border-zinc-300 text-xs font-mono text-zinc-200 dark:text-zinc-200 light:text-zinc-800 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-indigo-400" />
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4 text-zinc-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
