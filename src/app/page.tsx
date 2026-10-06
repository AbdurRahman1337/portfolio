"use client";

import React, { useEffect, useState } from "react";
import { Preloader } from "@/components/layout/Preloader";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/hero/Hero";
import { SelectedWork } from "@/components/projects/SelectedWork";
import { GlobalWorkflow } from "@/components/workflow/GlobalWorkflow";
import { UiLab } from "@/components/lab/UiLab";
import { About } from "@/components/about/About";
import { TechStack } from "@/components/stack/TechStack";
import { Experience } from "@/components/experience/Experience";
import { Philosophy } from "@/components/philosophy/Philosophy";
import { Ecosystem } from "@/components/ecosystem/Ecosystem";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/layout/Footer";

// Mapping secondary/sub-sections to main navbar items
const sectionToNavMap: Record<string, string> = {
  hero: "hero",
  work: "work",
  process: "process",
  lab: "lab",
  about: "about",
  stack: "stack",
  experience: "experience",
  philosophy: "experience",
  ecosystem: "stack",
  contact: "contact",
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      // 1. Bottom of page check (ensures contact is always highlighted at the end)
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveSection("contact");
        return;
      }

      // 2. Very top of page check (hero)
      if (window.scrollY < 140) {
        setActiveSection("hero");
        return;
      }

      // 3. Check section positions from bottom to top
      const orderedSectionIds = [
        "contact",
        "ecosystem",
        "philosophy",
        "experience",
        "stack",
        "about",
        "lab",
        "process",
        "work",
      ];

      for (const id of orderedSectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If section top has entered the upper 35% of the viewport
          if (rect.top <= window.innerHeight * 0.35) {
            const mapped = sectionToNavMap[id] || id;
            setActiveSection(mapped);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative bg-tech-grid selection:bg-indigo-500/30">
      {/* Fast entrance preloader */}
      <Preloader />

      {/* Floating Sticky Glass Navigation */}
      <Header
        activeSection={activeSection}
        onSectionSelect={(section) => setActiveSection(section)}
      />

      {/* Main Single-Page Storytelling Content */}
      <main className="flex-1">
        <Hero />
        <SelectedWork />
        <GlobalWorkflow />
        <UiLab />
        <About />
        <TechStack />
        <Experience />
        <Philosophy />
        <Ecosystem />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
