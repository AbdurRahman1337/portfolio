"use client";

import React, { useState, useMemo } from "react";
import {
  technologies,
  technologyCategories,
} from "@/data/technologies";
import { TechMarquee } from "./TechMarquee";

export function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredTechnologies = useMemo(() => {
    if (selectedCategory === "All") return technologies;
    return technologies.filter((t) => t.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="stack"
      aria-label="Technical Stack"
      className="py-24 sm:py-32 relative border-t border-white/5 dark:border-white/5 light:border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-semibold text-indigo-400 uppercase tracking-widest">
                04 / Technical Expertise
              </span>
              <div className="h-px w-8 bg-indigo-500/40" />
            </div>
            <h2 className="font-display font-bold text-section-title text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-tight">
              Technical Stack & Tooling.
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-2 max-w-xl">
              Production technologies, frameworks, and architecture patterns used daily across web and mobile development.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-200/60 border border-white/10 dark:border-white/10 light:border-zinc-300 w-fit">
            {technologyCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="mb-14">
        <TechMarquee />
      </div>

      {/* Interactive Grid of Technologies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.name}
              className={`p-6 rounded-2xl bg-[#0a0a0e] dark:bg-[#0a0a0e] light:bg-white border transition-all duration-300 flex flex-col justify-between group ${
                tech.highlight
                  ? "border-indigo-500/25 hover:border-indigo-500/50 shadow-lg shadow-indigo-500/5"
                  : "border-white/10 dark:border-white/10 light:border-zinc-300 hover:border-white/20"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    <h3 className="font-display font-bold text-lg text-zinc-100 dark:text-zinc-100 light:text-zinc-900 group-hover:text-indigo-300 transition-colors">
                      {tech.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] dark:bg-white/[0.05] light:bg-zinc-100 text-zinc-400">
                    {tech.category}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed mb-4">
                  {tech.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 dark:border-white/5 light:border-zinc-100">
                <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-500 light:text-zinc-400 block">
                  Application: {tech.context}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

