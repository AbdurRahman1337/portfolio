"use client";

import React from "react";
import { technologies } from "@/data/technologies";

export function TechMarquee() {
  const marqueeItems = [...technologies, ...technologies];

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-white/5 dark:border-white/5 light:border-zinc-200 bg-white/[0.01]">
      {/* Gradient masks for smooth fade on sides */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#050505] dark:from-[#050505] light:from-[#f8fafc] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#050505] dark:from-[#050505] light:from-[#f8fafc] to-transparent z-10" />

      <div className="animate-marquee flex items-center gap-6">
        {marqueeItems.map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-300 whitespace-nowrap text-xs font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-700"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span className="font-semibold text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
              {tech.name}
            </span>
            <span className="text-zinc-500 text-[10px]">/ {tech.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

