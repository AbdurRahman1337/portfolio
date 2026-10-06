"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const prefersReducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const duration = 900; // ms
    const interval = 20; // ms
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 200);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [prefersReducedMotion, onComplete]);

  if (prefersReducedMotion || isFinished) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[999] bg-[#050505] flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Profile Avatar emblem with glowing ring */}
        <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900/90 border border-white/15 shadow-2xl shadow-indigo-500/20 overflow-hidden p-0.5">
          <Image
            src="/images/profile/abdurrahman-avatar.png"
            alt="Abdurrahman"
            width={64}
            height={64}
            priority
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 rounded-2xl border border-indigo-500/40 animate-pulse pointer-events-none" />
        </div>

        {/* Progress Bar & percentage */}
        <div className="w-36 flex flex-col items-center gap-2">
          <div className="w-full h-[2px] bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between w-full text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
            <span>Abdurrahman</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
