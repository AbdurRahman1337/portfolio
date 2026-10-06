"use client";

import React, { useState, useMemo } from "react";
import { projects, Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { CaseStudyModal } from "./CaseStudyModal";
import { Smartphone, Globe } from "lucide-react";

export function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "mobile">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    if (activeFilter === "web")
      return projects.filter((p) => p.platformType === "web" || p.platformType === "both");
    if (activeFilter === "mobile")
      return projects.filter((p) => p.platformType === "mobile" || p.platformType === "both");
    return projects;
  }, [activeFilter]);

  return (
    <section
      id="work"
      aria-label="Selected Work"
      className="py-24 sm:py-32 relative border-t border-white/5 dark:border-white/5 light:border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
              A selection of products and experiences I&apos;ve helped build across web and mobile platforms.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-200/60 border border-white/10 dark:border-white/10 light:border-zinc-300 w-fit">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeFilter === "all"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-900"
              }`}
            >
              All (5)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("web")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeFilter === "web"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-900"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Web</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("mobile")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeFilter === "mobile"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-900"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>React Native</span>
            </button>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-8 sm:space-y-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenCaseStudy={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

