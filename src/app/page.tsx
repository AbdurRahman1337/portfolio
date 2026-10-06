"use client";

import React, { useEffect, useState } from "react";
import { Preloader } from "@/components/layout/Preloader";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/hero/Hero";
import { SelectedWork } from "@/components/projects/SelectedWork";
import { About } from "@/components/about/About";
import { TechStack } from "@/components/stack/TechStack";
import { Experience } from "@/components/experience/Experience";
import { Philosophy } from "@/components/philosophy/Philosophy";
import { Ecosystem } from "@/components/ecosystem/Ecosystem";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const sectionIds = [
      "hero",
      "work",
      "about",
      "stack",
      "experience",
      "philosophy",
      "ecosystem",
      "contact",
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative bg-tech-grid selection:bg-indigo-500/30">
      {/* Fast entrance preloader */}
      <Preloader />

      {/* Floating Sticky Glass Navigation */}
      <Header activeSection={activeSection} />

      {/* Main Single-Page Storytelling Content */}
      <main className="flex-1">
        <Hero />
        <SelectedWork />
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
