"use client";

import React, { useSyncExternalStore } from "react";
import { soundFx } from "@/lib/sound";
import { Volume2, VolumeX } from "lucide-react";

function subscribe(callback: () => void) {
  window.addEventListener("sound-mute-change", callback);
  return () => window.removeEventListener("sound-mute-change", callback);
}

function getSnapshot(): boolean {
  return soundFx.getMuted();
}

function getServerSnapshot(): boolean {
  return false;
}

export function SoundToggle() {
  const muted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const handleToggle = () => {
    const nextMuted = soundFx.toggleMute();
    if (!nextMuted) {
      soundFx.playPop(1000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={muted ? "Enable interface sound effects" : "Mute interface sound effects"}
      title={muted ? "Sound Effects: OFF (Click to unmute)" : "Sound Effects: ON (Click to mute)"}
      className={`p-2 rounded-lg border transition-all ${
        muted
          ? "border-white/10 dark:border-white/10 light:border-zinc-300 bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 text-zinc-500 hover:text-zinc-300"
          : "border-indigo-500/30 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20"
      }`}
    >
      {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
    </button>
  );
}

