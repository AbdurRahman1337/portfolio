"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { soundFx } from "@/lib/sound";
import { ProjectCard } from "./ProjectCard";
import { CaseStudyModal } from "./CaseStudyModal";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { Smartphone, Globe, LayoutGrid, List } from "lucide-react";

export function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "mobile">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [layoutMode, setLayoutMode] = useState<"bento" | "list">("bento");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    if (activeFilter === "web")
      return projects.filter((p) => p.platformType === "web" || p.platformType === "both");
    if (activeFilter === "mobile")
      return projects.filter((p) => p.platformType === "mobile" || p.platformType === "both");
    return projects;
  }, [activeFilter]);

  const handleFilter = (filter: "all" | "web" | "mobile") => {
    soundFx.playPop(1000);
    setActiveFilter(filter);
  };

  const toggleLayout = (mode: "bento" | "list") => {
    soundFx.playClick();
    setLayoutMode(mode);
  };

  return (
    <section
      id="work"
      aria-label="Selected Work"
      className="py-24 sm:py-32 relative border-t border-white/5 dark:border-white/5 light:border-zinc-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs font-semibold text-indigo-400 uppercase tracking-widest">
                  02 / Selected Work
                </span>
                <div className="h-px w-8 bg-indigo-500/40" />
              </div>
              <h2 className="font-display font-bold text-section-title text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-tight">
                Selected Work.
              </h2>
              <p className="text-base sm:text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-2 max-w-xl">
                A selection of products and experiences engineered across web and mobile platforms.
              </p>
            </div>

            {/* Controls Bar: Filters & Layout Switcher */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Filter Tabs with animated sliding indicator */}
              <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-200/60 border border-white/10 dark:border-white/10 light:border-zinc-300">
                <button
                  type="button"
                  onClick={() => handleFilter("all")}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors ${
                    activeFilter === "all"
                      ? "text-white"
                      : "text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-900"
                  }`}
                >
                  {activeFilter === "all" && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-indigo-600 rounded-xl shadow-md shadow-indigo-600/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">All ({projects.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleFilter("web")}
                  className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors ${
                    activeFilter === "web"
                      ? "text-white"
                      : "text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-900"
                  }`}
                >
                  {activeFilter === "web" && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-indigo-600 rounded-xl shadow-md shadow-indigo-600/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Globe className="w-3.5 h-3.5 relative z-10" />
                  <span className="relative z-10">Web</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleFilter("mobile")}
                  className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors ${
                    activeFilter === "mobile"
                      ? "text-white"
                      : "text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-900"
                  }`}
                >
                  {activeFilter === "mobile" && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-indigo-600 rounded-xl shadow-md shadow-indigo-600/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Smartphone className="w-3.5 h-3.5 relative z-10" />
                  <span className="relative z-10">React Native</span>
                </button>
              </div>

              {/* View Layout Toggle (Bento Grid vs List) */}
              <div className="hidden sm:flex items-center gap-1 p-1 rounded-2xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-200/60 border border-white/10 dark:border-white/10 light:border-zinc-300">
                <button
                  type="button"
                  onClick={() => toggleLayout("bento")}
                  aria-label="Bento Grid View"
                  className={`p-1.5 rounded-xl transition-colors ${
                    layoutMode === "bento"
                      ? "bg-white/15 text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                  title="Bento Grid Layout"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => toggleLayout("list")}
                  aria-label="Detailed List View"
                  className={`p-1.5 rounded-xl transition-colors ${
                    layoutMode === "list"
                      ? "bg-white/15 text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                  title="List Layout"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </MotionReveal>

        {/* Projects Layout */}
        <AnimatePresence mode="wait">
          {layoutMode === "bento" ? (
            <motion.div
              key="bento"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Flagship Hero Card (Item 0) */}
              {filteredProjects.length > 0 && (
                <ProjectCard
                  project={filteredProjects[0]}
                  index={0}
                  isFeaturedBento={true}
                  onOpenCaseStudy={(p) => setSelectedProject(p)}
                />
              )}

              {/* Secondary Bento Grid (Items 1..N) */}
              {filteredProjects.length > 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {filteredProjects.slice(1).map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index + 1}
                      isCompactBento={true}
                      onOpenCaseStudy={(p) => setSelectedProject(p)}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 sm:space-y-12"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onOpenCaseStudy={(p) => setSelectedProject(p)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
