"use client";

import React, { useState } from "react";
import { philosophies } from "@/data/philosophy";


export function Philosophy() {
  const [activeHover, setActiveHover] = useState<string | null>(null);

  return (
    <section
      id="philosophy"
      aria-label="Development Philosophy"
      className="py-24 sm:py-32 relative border-t border-white/5 dark:border-white/5 light:border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold text-indigo-400 uppercase tracking-widest">
              06 / Engineering Mindset
            </span>
            <div className="h-px w-8 bg-indigo-500/40" />
          </div>
          <h2 className="font-display font-bold text-section-title text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-tight">
            Development Philosophy.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-2 max-w-xl">
            Five engineering principles that guide how I architect, build, and deliver software.
          </p>
        </div>

        {/* Philosophy List / Cards */}
        <div className="space-y-4 sm:space-y-6">
          {philosophies.map((item) => {
            const isHovered = activeHover === item.number;
            return (
              <div
                key={item.number}
                onMouseEnter={() => setActiveHover(item.number)}
                onMouseLeave={() => setActiveHover(null)}
                className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 border ${
                  isHovered
                    ? "bg-[#0f0f16] dark:bg-[#0f0f16] light:bg-white border-indigo-500/40 shadow-xl shadow-indigo-500/5 -translate-y-0.5"
                    : "bg-[#09090c] dark:bg-[#09090c] light:bg-zinc-50 border-white/10 dark:border-white/10 light:border-zinc-200"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Number & Title */}
                  <div className="lg:col-span-4 flex items-baseline gap-4">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-indigo-400">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
                        {item.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {item.keywords.map((kw) => (
                          <span
                            key={kw}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-200/70 text-zinc-400"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Statement & Detailed Explanation */}
                  <div className="lg:col-span-8 space-y-2">
                    <p className="text-base sm:text-lg font-display font-medium text-zinc-200 dark:text-zinc-200 light:text-zinc-800">
                      &ldquo;{item.statement}&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-normal">
                      {item.explanation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

