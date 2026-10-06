"use client";

import React from "react";
import Image from "next/image";
import { personalInfo } from "@/data/profile";
import { Code2, Smartphone, Cpu } from "lucide-react";

export function PortraitFrame() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      {/* Decorative background ambient glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/25 via-purple-500/20 to-indigo-600/25 rounded-3xl blur-2xl opacity-75 pointer-events-none" />

      {/* Main Container Frame */}
      <div className="relative rounded-3xl bg-[#0e0e14] dark:bg-[#0e0e14] light:bg-zinc-100 border border-white/15 dark:border-white/15 light:border-zinc-300 p-3 sm:p-4 shadow-2xl overflow-hidden group">
        {/* Portrait Image Container */}
        <div className="relative aspect-[4/5] rounded-2xl bg-zinc-950 overflow-hidden border border-white/10 flex items-center justify-center">
          {/* Enhanced Professional Headshot */}
          <Image
            src="/images/profile/abdurrahman.png"
            alt="Abdurrahman — React & React Native Developer"
            fill
            sizes="(max-width: 640px) 100vw, 420px"
            priority
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Subtle bottom vignette gradient for contrast over text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

          {/* Top metadata pill */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-200 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Abdurrahman</span>
            </div>
            <div className="p-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-indigo-300 shadow-md">
              <Cpu className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Bottom stats / role banner over image */}
          <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-xs font-mono shadow-xl flex items-center justify-between">
            <div>
              <span className="text-zinc-400 block text-[10px] uppercase tracking-wider font-medium">ORGANIZATION</span>
              <span className="text-zinc-100 font-semibold">{personalInfo.company}</span>
            </div>
            <div className="text-right">
              <span className="text-zinc-400 block text-[10px] uppercase tracking-wider font-medium">SPECIALIZATION</span>
              <span className="text-indigo-300 font-semibold">Web & Mobile UI</span>
            </div>
          </div>
        </div>

        {/* Floating Accent Tag 1: Left */}
        <div className="absolute top-12 -left-2 sm:-left-3 px-3.5 py-2 rounded-xl bg-black/90 dark:bg-black/90 light:bg-white border border-white/15 dark:border-white/15 light:border-zinc-300 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-mono text-zinc-200 dark:text-zinc-200 light:text-zinc-800">
          <Smartphone className="w-4 h-4 text-purple-400" />
          <span>React Native & Expo</span>
        </div>

        {/* Floating Accent Tag 2: Right */}
        <div className="absolute bottom-20 -right-2 sm:-right-3 px-3.5 py-2 rounded-xl bg-black/90 dark:bg-black/90 light:bg-white border border-white/15 dark:border-white/15 light:border-zinc-300 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-mono text-zinc-200 dark:text-zinc-200 light:text-zinc-800">
          <Code2 className="w-4 h-4 text-indigo-400" />
          <span>React & TypeScript</span>
        </div>
      </div>
    </div>
  );
}
