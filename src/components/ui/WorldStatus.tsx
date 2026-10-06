"use client";

import React, { useEffect, useState } from "react";
import { Clock, Globe } from "lucide-react";

interface WorldStatusProps {
  className?: string;
  showOverlap?: boolean;
}

export function WorldStatus({ className = "", showOverlap = false }: WorldStatusProps) {
  const [utcTime, setUtcTime] = useState<string>("");
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setUtcTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "UTC",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
      setLocalTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {/* Live availability pill with pulsing radar */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-50 border border-emerald-500/25 dark:border-emerald-500/30 light:border-emerald-200 text-xs font-mono text-emerald-400 dark:text-emerald-400 light:text-emerald-700 shadow-sm backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="font-semibold tracking-tight">Available for Global Contracts</span>
      </div>

      {/* Real-time World Clock */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 border border-white/10 dark:border-white/15 light:border-zinc-300 text-xs font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-700 backdrop-blur-md">
        <Clock className="w-3.5 h-3.5 text-indigo-400" />
        <span>{utcTime || "12:00:00"} UTC</span>
        <span className="text-zinc-600 dark:text-zinc-500">•</span>
        <Globe className="w-3.5 h-3.5 text-purple-400" />
        <span className="text-zinc-400 dark:text-zinc-400 light:text-zinc-500">Local: {localTime || "--:--"}</span>
      </div>

      {showOverlap && (
        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[11px] font-mono text-indigo-300">
          <span>⚡ 4–6h Overlap with US & Europe Teams</span>
        </div>
      )}
    </div>
  );
}

