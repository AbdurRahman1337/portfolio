"use client";

import React from "react";
import { experiences } from "@/data/experience";
import { Badge } from "@/components/ui/Badge";
import {
  ExternalLink,
  Calendar,
  CheckCircle2,
  Building2,
} from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="py-24 sm:py-32 relative border-t border-white/5 dark:border-white/5 light:border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold text-indigo-400 uppercase tracking-widest">
              05 / Professional Experience
            </span>
            <div className="h-px w-8 bg-indigo-500/40" />
          </div>
          <h2 className="font-display font-bold text-section-title text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-tight">
            Work Experience & Timeline.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-2 max-w-xl">
            Professional development history, technical contributions, and software delivery.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 dark:border-white/10 light:border-zinc-300 space-y-12 sm:space-y-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Node Icon / Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full border transition-all ${
                  exp.isCurrent
                    ? "bg-indigo-600 border-indigo-400 shadow-lg shadow-indigo-600/30"
                    : "bg-[#050505] dark:bg-[#050505] light:bg-zinc-200 border-white/20 dark:border-white/20 light:border-zinc-400"
                }`}
              >
                {exp.isCurrent ? (
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                )}
              </div>

              {/* Experience Card */}
              <div
                className={`p-6 sm:p-8 rounded-3xl bg-[#0a0a0e] dark:bg-[#0a0a0e] light:bg-white border transition-all duration-300 ${
                  exp.isCurrent
                    ? "border-indigo-500/30 hover:border-indigo-500/50 shadow-xl shadow-indigo-500/5"
                    : "border-white/10 dark:border-white/10 light:border-zinc-300 hover:border-white/20"
                }`}
              >
                {/* Header row with role, company, period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <Badge variant="status" className="text-[10px]">
                          CURRENT ROLE
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-indigo-400 dark:text-indigo-400 light:text-indigo-600 font-medium">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                      {exp.companyUrl !== "#" && (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="open"
                          className="inline-flex items-center gap-0.5 text-xs text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-zinc-900 underline"
                        >
                          <span>Visit</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-300 text-xs font-mono text-zinc-400 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary Statement */}
                <p className="text-sm sm:text-base text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed mb-6 font-normal">
                  {exp.summary}
                </p>

                {/* Key Responsibilities list */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block">
                    Core Engineering Responsibilities
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 dark:border-white/5 light:border-zinc-100">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] dark:bg-white/[0.03] light:bg-zinc-100 text-[11px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

