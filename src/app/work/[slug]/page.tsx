import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/Icons";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Smartphone,
  Globe,
  Layers,
  Cpu,
  CheckCircle2,
  AlertCircle,
  BookOpen,
} from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Abdurrahman",
    };
  }

  return {
    title: `${project.title} — Case Study | Abdurrahman`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study | Abdurrahman`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <div className="flex flex-col min-h-screen relative bg-tech-grid selection:bg-indigo-500/30">
      <Header />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb navigation */}
          <div className="mb-8">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Projects</span>
            </Link>
          </div>

          {/* Project Title & Metadata Header */}
          <div className="space-y-6 pb-8 border-b border-white/10 dark:border-white/10 light:border-zinc-200">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-widest">
                {project.number} / 05
              </span>
              <div className="h-4 w-px bg-white/20" />
              <Badge variant="primary" className="text-xs">
                {project.platform}
              </Badge>
              {project.badge && (
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono font-medium text-emerald-400">
                  {project.badge}
                </span>
              )}
              <span className="text-xs font-mono text-zinc-500">
                {project.year}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-indigo-300 dark:text-indigo-300 light:text-indigo-600 max-w-3xl leading-snug">
              {project.tagline}
            </p>

            <p className="text-base text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed max-w-3xl font-normal">
              {project.description}
            </p>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.appStoreUrl && (
                <a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors shadow-lg shadow-emerald-600/25"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>View on App Store</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.liveUrl && !project.appStoreUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-lg shadow-indigo-600/25"
                >
                  <Globe className="w-4 h-4" />
                  <span>Launch Live Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] dark:bg-white/[0.06] light:bg-zinc-100 hover:bg-white/[0.12] text-zinc-200 dark:text-zinc-200 light:text-zinc-800 border border-white/10 dark:border-white/15 light:border-zinc-300 text-xs font-medium transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Source Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Quantitative Metrics Bar */}
          <div className="py-8">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-4 font-semibold">
              Key Engineering Metrics & Quantitative Impact
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#0b0c10] dark:bg-[#0b0c10] light:bg-white border border-white/10 dark:border-white/10 light:border-zinc-300"
                >
                  <div className="text-2xl sm:text-3xl font-display font-bold text-indigo-400 mb-1">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800">
                    {m.label}
                  </div>
                  {m.detail && (
                    <div className="text-[10px] font-mono text-zinc-500 mt-1">
                      {m.detail}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Deep Case Study Sections */}
          <div className="space-y-12 py-4">
            {/* 1. Project Overview */}
            <div className="space-y-4">
              <h2 className="text-lg font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-2 font-bold">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <span>Executive Overview & Problem Statement</span>
              </h2>
              <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-200">
                <p className="text-base sm:text-lg text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed font-normal">
                  {project.caseStudy.overview}
                </p>
              </div>
            </div>

            {/* 2. Architecture & Role */}
            <div className="space-y-4">
              <h2 className="text-lg font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-2 font-bold">
                <Cpu className="w-5 h-5 text-indigo-400" />
                <span>Architecture & Engineering Implementation</span>
              </h2>
              <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-200 space-y-4">
                <p className="text-base text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed">
                  {project.caseStudy.architecture}
                </p>
                <div className="pt-3 border-t border-white/5 dark:border-white/5 light:border-zinc-200 text-xs sm:text-sm text-indigo-300 dark:text-indigo-300 light:text-indigo-700 font-mono">
                  Role: {project.caseStudy.roleDetails}
                </div>
              </div>
            </div>

            {/* 3. Features & Technical Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-200 space-y-4">
                <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-2 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Key Features</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                  {project.caseStudy.keyFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-indigo-400 mt-0.5">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-200 space-y-4">
                <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-2 font-bold">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  <span>Technical Highlights</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                  {project.caseStudy.technicalHighlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4. Technologies & Tools */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                Technology Stack & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-xs font-mono text-indigo-300 dark:text-indigo-300 light:text-indigo-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 5. Challenges & Learnings */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-200 space-y-6">
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2 font-bold">
                  <AlertCircle className="w-4 h-4" />
                  <span>Engineering Challenges</span>
                </h4>
                <p className="text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed">
                  {project.caseStudy.challenges}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/5 dark:border-white/5 light:border-zinc-200">
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 flex items-center gap-2 font-bold">
                  <BookOpen className="w-4 h-4" />
                  <span>Key Takeaways & Learnings</span>
                </h4>
                <p className="text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed">
                  {project.caseStudy.learnings}
                </p>
              </div>
            </div>
          </div>

          {/* Previous / Next Project Navigation Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 dark:border-white/10 light:border-zinc-200 flex items-center justify-between">
            <Link
              href={`/work/${prevProject.slug}`}
              className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <div>
                <span className="text-[10px] text-zinc-500 block">PREVIOUS</span>
                <span className="font-semibold text-zinc-200">{prevProject.title}</span>
              </div>
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors text-right group"
            >
              <div>
                <span className="text-[10px] text-zinc-500 block">NEXT</span>
                <span className="font-semibold text-zinc-200">{nextProject.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
