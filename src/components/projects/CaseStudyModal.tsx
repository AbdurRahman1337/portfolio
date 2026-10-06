"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/Icons";
import {
  X,
  ExternalLink,
  Layers,
  Cpu,
  CheckCircle2,
  AlertCircle,
  BookOpen,
} from "lucide-react";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl bg-[#0d0d12] light:bg-white border border-white/15 dark:border-white/15 light:border-zinc-300 shadow-2xl shadow-black/90 overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 dark:border-white/10 light:border-zinc-200 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-semibold text-indigo-400">
              {project.number}
            </span>
            <div className="h-4 w-px bg-white/20" />
            <Badge variant="primary" className="text-xs">
              {project.platform}
            </Badge>
            {project.badge && (
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-medium text-emerald-400">
                {project.badge}
              </span>
            )}
            <span className="hidden sm:inline text-xs font-mono text-zinc-500">
              {project.year}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="p-2 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-zinc-100 hover:bg-white/[0.1] light:hover:bg-zinc-200 text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Title and Tagline */}
          <div>
            <h2
              id="case-study-title"
              className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-tight mb-2"
            >
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-indigo-300/90 dark:text-indigo-300 light:text-indigo-600 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Quick Action Links if available */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors shadow-md shadow-emerald-600/20"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View on App Store</span>
              </a>
            )}
            {project.liveUrl && !project.appStoreUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-md shadow-indigo-600/20"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo / App</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] dark:bg-white/[0.06] light:bg-zinc-100 hover:bg-white/[0.12] light:hover:bg-zinc-200 text-zinc-200 dark:text-zinc-200 light:text-zinc-800 border border-white/10 dark:border-white/15 light:border-zinc-300 text-xs font-medium transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          {/* Key Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-200 text-xs">
            <div>
              <span className="block font-mono text-zinc-500 mb-1">ROLE</span>
              <span className="font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800">
                {project.role}
              </span>
            </div>
            <div>
              <span className="block font-mono text-zinc-500 mb-1">PLATFORM</span>
              <span className="font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800">
                {project.platform}
              </span>
            </div>
            <div>
              <span className="block font-mono text-zinc-500 mb-1">YEAR</span>
              <span className="font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800">
                {project.year}
              </span>
            </div>
          </div>

          {/* Section 1: Overview */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-600 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span>Project Overview</span>
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed">
              {project.caseStudy.overview}
            </p>
          </div>

          {/* Section 2: Architecture & Engineering */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-600 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span>Architecture & Engineering Role</span>
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed mb-3">
              {project.caseStudy.architecture}
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 italic">
              Responsibilities: {project.caseStudy.roleDetails}
            </p>
          </div>

          {/* Section 3: Key Features & Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-200">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Key Features</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                {project.caseStudy.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-200">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Technical Highlights</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                {project.caseStudy.technicalHighlights.map((high, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>{high}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 4: Technologies Used */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="default" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Section 5: Engineering Challenges & Learnings */}
          <div className="space-y-4 pt-4 border-t border-white/10 dark:border-white/10 light:border-zinc-200">
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400/90 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span>Engineering Challenges</span>
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">
                {project.caseStudy.challenges}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Key Takeaways & Learnings</span>
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">
                {project.caseStudy.learnings}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 dark:border-white/10 light:border-zinc-200 bg-white/[0.02] flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-500">
            Abdurrahman Portfolio • Case Study
          </span>
          <Button size="sm" variant="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
