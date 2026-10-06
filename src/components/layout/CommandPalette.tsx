"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { useTheme } from "@/components/theme/ThemeProvider";
import { personalInfo } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { soundFx } from "@/lib/sound";
import { RecruiterModal } from "@/components/recruiter/RecruiterModal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import {
  Search,
  FolderGit2,
  User,
  Briefcase,
  Layers,
  Sparkles,
  Mail,
  FileText,
  Sun,
  Moon,
  ExternalLink,
  Copy,
  Check,
  X,
  Volume2,
  VolumeX,
  Zap,
  Cpu,
} from "lucide-react";

interface CommandItem {
  id: string;
  title: string;
  category: "Projects" | "Navigation" | "Actions" | "External Links";
  icon: React.ReactNode;
  action: () => void;
  keywords: string[];
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [recruiterOpen, setRecruiterOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Keyboard shortcut Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        soundFx.playPop(1200);
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const scrollTo = (id: string) => {
    soundFx.playClick();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    soundFx.playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  const items: CommandItem[] = useMemo(
    () => [
      {
        id: "action-recruiter",
        title: "Open Recruiter Quick-Scan (60-sec TL;DR)",
        category: "Actions",
        icon: <Zap className="w-4 h-4 text-amber-400" />,
        action: () => {
          soundFx.playPop(1200);
          setIsOpen(false);
          setRecruiterOpen(true);
        },
        keywords: ["recruiter", "summary", "tldr", "quick", "scan", "skills", "hire"],
      },
      {
        id: "proj-summarizer",
        title: "Summarizer — AI Book & Voice Discussion App (App Store)",
        category: "Projects",
        icon: <Sparkles className="w-4 h-4 text-purple-400" />,
        action: () => scrollTo("work"),
        keywords: ["summarizer", "ai", "book", "voice room", "audio", "streak", "react native", "app store"],
      },
      {
        id: "proj-slateapp",
        title: "SlateApp — Automated AI Presentation Deck Generator",
        category: "Projects",
        icon: <Layers className="w-4 h-4 text-indigo-400" />,
        action: () => scrollTo("work"),
        keywords: ["slateapp", "presentation", "slides", "ai", "deck", "templates", "react"],
      },
      {
        id: "proj-rideshare",
        title: "RideShare — Multi-Modal Vehicle & Driver Mobility App",
        category: "Projects",
        icon: <FolderGit2 className="w-4 h-4 text-cyan-400" />,
        action: () => scrollTo("work"),
        keywords: ["rideshare", "taxi", "wagon", "bus", "driver", "passenger", "maps", "react native"],
      },
      {
        id: "proj-resume",
        title: "Resume Generator — Interactive Resume & PDF Builder",
        category: "Projects",
        icon: <FileText className="w-4 h-4 text-amber-400" />,
        action: () => scrollTo("work"),
        keywords: ["resume", "generator", "builder", "cv", "pdf", "styling", "react"],
      },
      {
        id: "proj-ai-study",
        title: "AI Study Assistant — RAG PDF Intelligence & Quiz System",
        category: "Projects",
        icon: <Sparkles className="w-4 h-4 text-emerald-400" />,
        action: () => scrollTo("work"),
        keywords: ["ai study assistant", "rag", "vector db", "pdf", "quiz", "embeddings", "react"],
      },
      {
        id: "nav-work",
        title: "Go to Selected Work",
        category: "Navigation",
        icon: <FolderGit2 className="w-4 h-4 text-indigo-400" />,
        action: () => scrollTo("work"),
        keywords: ["projects", "work", "apps", "react", "portfolio"],
      },
      {
        id: "nav-about",
        title: "Go to About Me",
        category: "Navigation",
        icon: <User className="w-4 h-4 text-indigo-400" />,
        action: () => scrollTo("about"),
        keywords: ["about", "bio", "background", "abdurrahman"],
      },
      {
        id: "nav-stack",
        title: "Go to Tech Stack",
        category: "Navigation",
        icon: <Layers className="w-4 h-4 text-indigo-400" />,
        action: () => scrollTo("stack"),
        keywords: ["skills", "stack", "technologies", "typescript", "react native"],
      },
      {
        id: "nav-experience",
        title: "Go to Professional Experience",
        category: "Navigation",
        icon: <Briefcase className="w-4 h-4 text-indigo-400" />,
        action: () => scrollTo("experience"),
        keywords: ["experience", "technext", "career", "history"],
      },
      {
        id: "nav-lab",
        title: "Go to Interactive UI Lab (Micro-Demos)",
        category: "Navigation",
        icon: <Cpu className="w-4 h-4 text-indigo-400" />,
        action: () => scrollTo("lab"),
        keywords: ["lab", "playground", "demos", "spring", "audio", "streaming", "experiments"],
      },
      {
        id: "nav-philosophy",
        title: "Go to Development Philosophy",
        category: "Navigation",
        icon: <Sparkles className="w-4 h-4 text-indigo-400" />,
        action: () => scrollTo("philosophy"),
        keywords: ["philosophy", "principles", "mindset", "architecture"],
      },
      {
        id: "nav-contact",
        title: "Go to Contact",
        category: "Navigation",
        icon: <Mail className="w-4 h-4 text-indigo-400" />,
        action: () => scrollTo("contact"),
        keywords: ["contact", "hire", "email", "message"],
      },
      {
        id: "action-copy-email",
        title: copied ? "Email Copied to Clipboard!" : "Copy Email Address",
        category: "Actions",
        icon: copied ? (
          <Check className="w-4 h-4 text-emerald-400" />
        ) : (
          <Copy className="w-4 h-4 text-zinc-400" />
        ),
        action: copyEmail,
        keywords: ["copy", "email", "address", "contact"],
      },
      {
        id: "action-sound",
        title: soundFx.getMuted() ? "Enable Interface Sounds" : "Mute Interface Sounds",
        category: "Actions",
        icon: soundFx.getMuted() ? (
          <Volume2 className="w-4 h-4 text-indigo-400" />
        ) : (
          <VolumeX className="w-4 h-4 text-zinc-400" />
        ),
        action: () => {
          soundFx.toggleMute();
          setIsOpen(false);
        },
        keywords: ["sound", "audio", "mute", "unmute", "effects"],
      },
      {
        id: "action-theme",
        title: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
        category: "Actions",
        icon:
          theme === "dark" ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-400" />
          ),
        action: () => {
          soundFx.playPop(1000);
          toggleTheme();
          setIsOpen(false);
        },
        keywords: ["theme", "dark", "light", "mode", "toggle"],
      },
      {
        id: "ext-resume",
        title: "View Resume (CV PDF)",
        category: "External Links",
        icon: <FileText className="w-4 h-4 text-zinc-400" />,
        action: () => {
          soundFx.playClick();
          setIsOpen(false);
          window.open(socialLinks.find((l) => l.name === "Resume")?.url || "#", "_blank");
        },
        keywords: ["resume", "cv", "pdf", "download"],
      },
      {
        id: "ext-github",
        title: "Open GitHub Profile",
        category: "External Links",
        icon: <GithubIcon className="w-4 h-4 text-zinc-400" />,
        action: () => {
          soundFx.playClick();
          setIsOpen(false);
          window.open(socialLinks.find((l) => l.name === "GitHub")?.url || "#", "_blank");
        },
        keywords: ["github", "code", "repos", "repositories"],
      },
      {
        id: "ext-linkedin",
        title: "Open LinkedIn Profile",
        category: "External Links",
        icon: <LinkedinIcon className="w-4 h-4 text-zinc-400" />,
        action: () => {
          soundFx.playClick();
          setIsOpen(false);
          window.open(socialLinks.find((l) => l.name === "LinkedIn")?.url || "#", "_blank");
        },
        keywords: ["linkedin", "connect", "social", "network"],
      },
      {
        id: "ext-technext",
        title: "Visit TechNext Website",
        category: "External Links",
        icon: <ExternalLink className="w-4 h-4 text-indigo-400" />,
        action: () => {
          soundFx.playClick();
          setIsOpen(false);
          window.open("https://technext96.com/", "_blank");
        },
        keywords: ["technext", "technext96", "company", "employer"],
      },
    ],
    [theme, copied, toggleTheme]
  );

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.keywords.some((k) => k.toLowerCase().includes(q))
    );
  }, [items, query]);

  const handleKeyDownInMenu = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      soundFx.playClick(1400, 0.015);
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      soundFx.playClick(1400, 0.015);
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Command Palette"
          className="fixed inset-0 z-[120] flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-xl rounded-2xl bg-[#0e0e12] light:bg-white border border-white/15 dark:border-white/15 light:border-zinc-300 shadow-2xl shadow-black/80 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search header */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 dark:border-white/10 light:border-zinc-200">
              <Search className="w-5 h-5 text-zinc-400" />
              <input
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDownInMenu}
                placeholder="Type a command or search sections..."
                className="flex-1 bg-transparent text-sm text-zinc-100 dark:text-zinc-100 light:text-zinc-900 placeholder:text-zinc-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-zinc-900"
                aria-label="Close command palette"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filteredItems.length === 0 ? (
                <div className="py-8 text-center text-sm text-zinc-500">
                  No matching commands found.
                </div>
              ) : (
                <div className="space-y-1">
                  {filteredItems.map((item, index) => {
                    const isSelected = index === selectedIndex;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={item.action}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm transition-colors ${
                          isSelected
                            ? "bg-indigo-600/20 text-indigo-200 border border-indigo-500/30 dark:bg-indigo-600/20 dark:text-indigo-200 light:bg-indigo-50 light:text-indigo-900 light:border-indigo-200"
                            : "text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:bg-white/[0.04] light:hover:bg-zinc-100 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 rounded-md bg-white/[0.05] dark:bg-white/[0.05] light:bg-zinc-200">
                            {item.icon}
                          </div>
                          <span className="font-medium">{item.title}</span>
                        </div>
                        <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-500 light:text-zinc-400">
                          {item.category}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer info */}
            <div className="px-4 py-2.5 border-t border-white/10 dark:border-white/10 light:border-zinc-200 bg-white/[0.02] flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <div className="flex items-center gap-3">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>ESC Close</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative w-4 h-4 rounded-full overflow-hidden border border-indigo-400/40">
                  <Image
                    src="/images/profile/abdurrahman-avatar.png"
                    alt="Abdurrahman"
                    width={16}
                    height={16}
                    className="object-cover"
                  />
                </div>
                <span>Abdurrahman • TechNext</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recruiter Scan Modal */}
      <RecruiterModal
        isOpen={recruiterOpen}
        onClose={() => setRecruiterOpen(false)}
      />
    </>
  );
}
