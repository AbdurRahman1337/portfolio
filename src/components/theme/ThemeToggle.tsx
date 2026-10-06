"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "./ThemeProvider";
import { soundFx } from "@/lib/sound";
import { Sun, Moon } from "lucide-react";

function subscribeMounted() {
  return () => {};
}

function getClientMounted() {
  return true;
}

function getServerMounted() {
  return false;
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribeMounted, getClientMounted, getServerMounted);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-full border border-white/10 ${className}`} />
    );
  }

  const handleToggle = () => {
    soundFx.playPop(1000);
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 border border-white/10 dark:border-white/15 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] light:border-zinc-300 light:bg-zinc-100 light:hover:bg-zinc-200 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${className}`}
    >
      <Sun
        className={`w-4 h-4 transition-all duration-300 ${
          theme === "light"
            ? "rotate-0 scale-100 opacity-100 text-amber-500"
            : "-rotate-90 scale-0 opacity-0 absolute"
        }`}
      />
      <Moon
        className={`w-4 h-4 transition-all duration-300 ${
          theme === "dark"
            ? "rotate-0 scale-100 opacity-100 text-indigo-400"
            : "rotate-90 scale-0 opacity-0 absolute"
        }`}
      />
    </button>
  );
}
