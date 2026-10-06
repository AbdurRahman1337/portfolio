"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  technologies,
  technologyCategories,
} from "@/data/technologies";
import { soundFx } from "@/lib/sound";
import { TechMarquee } from "./TechMarquee";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredTechnologies = useMemo(() => {
    if (selectedCategory === "All") return technologies;
    return technologies.filter((t) => t.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (cat: string) => {
    soundFx.playPop(1100);
    setSelectedCategory(cat);
  };

  return (
    <section
      id="stack"
      aria-label="Technical Stack"
      className="py-24 sm:py-32 relative border-t border-white/5 dark:border-white/5 light:border-zinc-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <MotionReveal>
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

            {/* Category Filter Tabs with sliding pill indicator */}
            <div className="flex flex-wrap items-center gap-1 p-1 rounded-2xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-200/60 border border-white/10 dark:border-white/10 light:border-zinc-300 w-fit">
              {technologyCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryChange(cat)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors ${
                    selectedCategory === cat
                      ? "text-white font-semibold"
                      : "text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-900"
                  }`}
                >
                  {selectedCategory === cat && (
                    <motion.div
                      layoutId="techCategoryPill"
                      className="absolute inset-0 bg-indigo-600 rounded-xl shadow-md shadow-indigo-600/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>

      {/* Marquee Banner */}
      <div className="mb-14">
        <TechMarquee />
      </div>

      {/* Interactive Grid of Technologies (Bento 3-col items) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {filteredTechnologies.map((tech, idx) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
              >
                <SpotlightCard
                  enableTilt={true}
                  className={`p-6 flex flex-col justify-between group h-full ${
                    tech.highlight
                      ? "border-indigo-500/30 hover:border-indigo-500/60 shadow-lg shadow-indigo-500/5"
                      : "border-white/10 dark:border-white/10 light:border-zinc-300 hover:border-white/25"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse-subtle" />
                        <h3 className="font-display font-bold text-lg text-zinc-100 dark:text-zinc-100 light:text-zinc-900 group-hover:text-indigo-300 transition-colors">
                          {tech.name}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] dark:bg-white/[0.05] light:bg-zinc-100 text-zinc-400 border border-white/5">
                        {tech.category}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed mb-4">
                      {tech.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 dark:border-white/5 light:border-zinc-100">
                    <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-500 light:text-zinc-400 block truncate">
                      Application: {tech.context}
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
