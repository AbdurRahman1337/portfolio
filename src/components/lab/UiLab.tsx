"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { soundFx } from "@/lib/sound";
import { Badge } from "@/components/ui/Badge";
import { MotionReveal } from "@/components/ui/MotionReveal";
import {
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  Smartphone,
  Volume2,
  Code2,
  CheckCircle2,
} from "lucide-react";

export function UiLab() {
  const [activeTab, setActiveTab] = useState<"spring" | "audio" | "streaming">("spring");

  return (
    <section
      id="lab"
      aria-label="Interactive UI Lab"
      className="py-24 sm:py-32 relative border-t border-white/5 dark:border-white/5 light:border-zinc-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs font-semibold text-indigo-400 uppercase tracking-widest">
                  07 / Interactive UI Lab
                </span>
                <div className="h-px w-8 bg-indigo-500/40" />
              </div>
              <h2 className="font-display font-bold text-section-title text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-tight">
                UI Engineering Lab.
              </h2>
              <p className="text-base sm:text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-2 max-w-xl">
                Live interactive micro-demos demonstrating gesture physics, audio synthesis, and streaming state mechanics.
              </p>
            </div>

            {/* Interactive Lab Tabs with animated layoutId indicator */}
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-200/60 border border-white/10 dark:border-white/10 light:border-zinc-300 w-fit">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("spring");
                  soundFx.playPop(900);
                }}
                className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors ${
                  activeTab === "spring"
                    ? "text-white"
                    : "text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-900"
                }`}
              >
                {activeTab === "spring" && (
                  <motion.div
                    layoutId="labTabIndicator"
                    className="absolute inset-0 bg-indigo-600 rounded-xl shadow-md shadow-indigo-600/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Smartphone className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10">Spring Sheet</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("audio");
                  soundFx.playPop(1100);
                }}
                className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors ${
                  activeTab === "audio"
                    ? "text-white"
                    : "text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-900"
                }`}
              >
                {activeTab === "audio" && (
                  <motion.div
                    layoutId="labTabIndicator"
                    className="absolute inset-0 bg-indigo-600 rounded-xl shadow-md shadow-indigo-600/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Volume2 className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10">Audio Spectrum</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("streaming");
                  soundFx.playPop(1300);
                }}
                className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors ${
                  activeTab === "streaming"
                    ? "text-white"
                    : "text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-900"
                }`}
              >
                {activeTab === "streaming" && (
                  <motion.div
                    layoutId="labTabIndicator"
                    className="absolute inset-0 bg-indigo-600 rounded-xl shadow-md shadow-indigo-600/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Sparkles className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10">Token Streamer</span>
              </button>
            </div>
          </div>
        </MotionReveal>

        {/* Active Playground Container */}
        <MotionReveal delay={0.1}>
          <div className="rounded-3xl bg-[#090a0f]/90 dark:bg-[#090a0f]/90 light:bg-white/90 backdrop-blur-xl border border-white/10 dark:border-white/10 light:border-zinc-300 p-6 sm:p-10 shadow-2xl overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {activeTab === "spring" && <SpringSheetPlayground />}
                {activeTab === "audio" && <AudioSpectrumPlayground />}
                {activeTab === "streaming" && <TokenStreamerPlayground />}
              </motion.div>
            </AnimatePresence>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

/* 1. Spring Sheet / Gesture Physics Playground */
function SpringSheetPlayground() {
  const [sheetPosition, setSheetPosition] = useState<"collapsed" | "half" | "expanded">("half");
  const [tension, setTension] = useState(170);
  const [friction, setFriction] = useState(26);

  const getTranslateY = () => {
    switch (sheetPosition) {
      case "collapsed":
        return "translate-y-48";
      case "half":
        return "translate-y-20";
      case "expanded":
        return "translate-y-0";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-6 space-y-6">
        <div className="flex items-center gap-2">
          <Badge variant="primary" className="text-xs font-mono">
            React Native / Reanimated Gesture Physics
          </Badge>
          <span className="text-xs font-mono text-zinc-500">60 FPS Spring</span>
        </div>

        <h3 className="font-display font-bold text-2xl sm:text-3xl text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
          Interactive Bottom Sheet Drawer
        </h3>

        <p className="text-sm sm:text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-normal">
          Simulating fluid mobile spring kinematics. Click snap points or drag the handle to trigger real-time spring interpolation curves.
        </p>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-medium">
            Snap Positions
          </span>
          <div className="flex gap-2">
            {(["collapsed", "half", "expanded"] as const).map((pos) => (
              <button
                key={pos}
                type="button"
                onClick={() => {
                  setSheetPosition(pos);
                  soundFx.playClick(1000);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors capitalize ${
                  sheetPosition === pos
                    ? "bg-indigo-600 text-white font-semibold"
                    : "bg-white/[0.05] dark:bg-white/[0.05] light:bg-zinc-100 text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-zinc-900"
                }`}
              >
                {pos} Snap
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4 p-4 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-200 text-xs font-mono">
          <div className="flex items-center justify-between">
            <span className="text-zinc-400">Spring Stiffness (Tension): {tension}</span>
            <input
              type="range"
              min={80}
              max={300}
              value={tension}
              onChange={(e) => setTension(Number(e.target.value))}
              className="w-32 accent-indigo-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-zinc-400">Damping (Friction): {friction}</span>
            <input
              type="range"
              min={10}
              max={50}
              value={friction}
              onChange={(e) => setFriction(Number(e.target.value))}
              className="w-32 accent-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 flex justify-center">
        <div className="w-[280px] aspect-[9/18] rounded-[36px] p-3 bg-gradient-to-b from-zinc-700 via-zinc-900 to-black border-[3px] border-zinc-700/80 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="w-24 h-4 rounded-full bg-black mx-auto mb-2 flex items-center justify-center">
            <span className="text-[8px] font-mono text-zinc-400">9:41 AM</span>
          </div>

          <div className="absolute inset-x-3 top-10 bottom-3 rounded-[24px] bg-[#0d131a] p-3 flex flex-col justify-between overflow-hidden">
            <div className="space-y-1.5 text-center pt-4">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 mx-auto flex items-center justify-center text-indigo-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-zinc-200">Ride Tracking Active</div>
              <div className="text-[10px] text-zinc-400">Driver approaching pickup</div>
            </div>

            <div
              style={{
                transitionTimingFunction: `cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
                transitionDuration: `${Math.max(250, 600 - tension + friction * 4)}ms`,
              }}
              className={`w-full bg-[#161824] border border-white/15 rounded-2xl p-3 text-zinc-200 shadow-2xl transition-transform duration-300 ${getTranslateY()}`}
            >
              <div
                onClick={() => {
                  setSheetPosition((prev) =>
                    prev === "collapsed" ? "half" : prev === "half" ? "expanded" : "collapsed"
                  );
                  soundFx.playClick(1100);
                }}
                className="w-10 h-1 rounded-full bg-zinc-500 mx-auto mb-3 cursor-pointer hover:bg-indigo-400 transition-colors"
              />

              <div className="flex items-center justify-between text-[10px] font-mono text-indigo-400 mb-2">
                <span>Trip #8491</span>
                <span>$14.50</span>
              </div>

              <div className="text-xs font-bold text-white mb-1">Toyota Prius • Cyan Hybrid</div>
              <div className="text-[9px] text-zinc-400 mb-3">Driver: Marcus (★ 4.98)</div>

              <div className="space-y-1.5 text-[9px] font-mono text-zinc-300">
                <div className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" /> Turn left on Market St
                </div>
                <div className="text-zinc-400">ETA: 3 min (0.8 mi)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 2. Audio Spectrum & Tone Synthesizer */
function AudioSpectrumPlayground() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [frequency, setFrequency] = useState(440);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let phase = 0;

    const render = () => {
      const w = (canvas.width = canvas.parentElement?.clientWidth || 400);
      const h = (canvas.height = 140);
      ctx.clearRect(0, 0, w, h);

      if (isPlaying) {
        phase += 0.08;
      }

      ctx.beginPath();
      ctx.moveTo(0, h / 2);

      const waveFreq = (frequency / 440) * 0.04;
      const amplitude = isPlaying ? 35 : 5;

      for (let x = 0; x < w; x++) {
        const y = h / 2 + Math.sin(x * waveFreq + phase) * amplitude * Math.sin(x * 0.015);
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = isPlaying ? "#818cf8" : "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 2.5;
      ctx.stroke();

      if (isPlaying) {
        ctx.beginPath();
        ctx.moveTo(0, h / 2);
        for (let x = 0; x < w; x++) {
          const y = h / 2 + Math.sin(x * waveFreq * 1.5 - phase) * (amplitude * 0.6);
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = "rgba(168, 85, 247, 0.45)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, frequency]);

  const togglePlayback = () => {
    if (isPlaying) {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
          oscRef.current.disconnect();
        } catch {}
        oscRef.current = null;
      }
      setIsPlaying(false);
      soundFx.playPop(700);
    } else {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!audioCtxRef.current && AudioCtx) {
          audioCtxRef.current = new AudioCtx();
        }
        if (audioCtxRef.current) {
          if (audioCtxRef.current.state === "suspended") {
            audioCtxRef.current.resume();
          }
          const osc = audioCtxRef.current.createOscillator();
          const gain = audioCtxRef.current.createGain();

          osc.type = "sine";
          osc.frequency.setValueAtTime(frequency, audioCtxRef.current.currentTime);
          gain.gain.setValueAtTime(0.04, audioCtxRef.current.currentTime);

          osc.connect(gain);
          gain.connect(audioCtxRef.current.destination);

          osc.start();
          oscRef.current = osc;
          setIsPlaying(true);
        }
      } catch {
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
          oscRef.current.disconnect();
        } catch {}
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-6 space-y-6">
        <div className="flex items-center gap-2">
          <Badge variant="primary" className="text-xs font-mono">
            Web Audio API • Real-Time DSP
          </Badge>
          <span className="text-xs font-mono text-zinc-500">Audio Session</span>
        </div>

        <h3 className="font-display font-bold text-2xl sm:text-3xl text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
          Audio Frequency Visualizer
        </h3>

        <p className="text-sm sm:text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-normal">
          Powering features like background podcast summaries and WebRTC multi-peer voice rooms in the Summarizer application.
        </p>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={togglePlayback}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs transition-all ${
              isPlaying
                ? "bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/30"
                : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30"
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isPlaying ? "Pause Synthesizer" : "Synthesize Frequency Tone"}</span>
          </button>
        </div>

        <div className="space-y-2 p-4 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-zinc-50 border border-white/10 text-xs font-mono">
          <div className="flex items-center justify-between">
            <span className="text-zinc-400">Tone Frequency: {frequency} Hz</span>
            <input
              type="range"
              min={220}
              max={880}
              step={10}
              value={frequency}
              onChange={(e) => {
                const val = Number(e.target.value);
                setFrequency(val);
                if (oscRef.current && audioCtxRef.current) {
                  oscRef.current.frequency.setValueAtTime(val, audioCtxRef.current.currentTime);
                }
              }}
              className="w-36 accent-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="lg:col-span-6">
        <div className="rounded-2xl bg-[#0e0e14] border border-white/10 p-4 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${isPlaying ? "bg-emerald-400 animate-pulse" : "bg-zinc-600"}`} />
              <span>Canvas 60fps Waveform</span>
            </span>
            <span>{frequency} Hz Pure Sine</span>
          </div>

          <div className="relative w-full h-[140px] bg-black/40 rounded-xl overflow-hidden flex items-center justify-center">
            <canvas ref={canvasRef} className="w-full h-full block" />
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
            <div className="p-2 rounded-lg bg-white/5 text-zinc-300">
              <div className="text-indigo-400 font-bold">&lt; 50ms</div>
              <div className="text-zinc-500">Latency</div>
            </div>
            <div className="p-2 rounded-lg bg-white/5 text-zinc-300">
              <div className="text-purple-400 font-bold">16-bit</div>
              <div className="text-zinc-500">Sampling</div>
            </div>
            <div className="p-2 rounded-lg bg-white/5 text-zinc-300">
              <div className="text-emerald-400 font-bold">WebRTC</div>
              <div className="text-zinc-500">Protocol</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 3. AI Token Streamer & JSON Parser Simulator */
function TokenStreamerPlayground() {
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamSpeed, setStreamSpeed] = useState<"fast" | "realistic" | "turbo">("fast");
  const [streamIndex, setStreamIndex] = useState(0);

  const sampleJsonTokens = [
    "{",
    '\n  "slideTitle":',
    ' "Mobile Architecture at Scale",',
    '\n  "topic":',
    ' "React Native & AI Integration",',
    '\n  "bulletPoints": [',
    '\n    "1. Bridge-free JSI communications",',
    '\n    "2. Sub-50ms token stream parser",',
    '\n    "3. Zero-layout-shift slide container"',
    "\n  ],",
    '\n  "generationStatus":',
    ' "COMPLETE"',
    "\n}",
  ];

  useEffect(() => {
    if (!isStreaming) return;

    const delay = streamSpeed === "turbo" ? 25 : streamSpeed === "fast" ? 60 : 130;
    const interval = setInterval(() => {
      setStreamIndex((prev) => {
        if (prev >= sampleJsonTokens.length) {
          setIsStreaming(false);
          soundFx.playSuccess();
          return prev;
        }
        soundFx.playClick(1400);
        return prev + 1;
      });
    }, delay);

    return () => clearInterval(interval);
  }, [isStreaming, streamSpeed, sampleJsonTokens.length]);

  const handleStartStream = () => {
    setStreamIndex(0);
    setIsStreaming(true);
    soundFx.playPop(1200);
  };

  const handleReset = () => {
    setIsStreaming(false);
    setStreamIndex(0);
    soundFx.playPop(800);
  };

  const currentStreamedText = sampleJsonTokens.slice(0, streamIndex).join("");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-6 space-y-6">
        <div className="flex items-center gap-2">
          <Badge variant="primary" className="text-xs font-mono">
            Incremental LLM Parser
          </Badge>
          <span className="text-xs font-mono text-zinc-500">Structured Streaming</span>
        </div>

        <h3 className="font-display font-bold text-2xl sm:text-3xl text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
          Real-Time Token Stream Parser
        </h3>

        <p className="text-sm sm:text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-normal">
          Simulating how SlateApp and AI Study Assistant parse streamed chunks progressively into live UI components with zero layout flicker.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleStartStream}
            disabled={isStreaming}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium text-xs shadow-lg shadow-indigo-600/30 transition-all"
          >
            <Play className="w-4 h-4" />
            <span>{isStreaming ? "Streaming Tokens..." : "Start Token Stream"}</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-zinc-300 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-zinc-400">Stream Speed:</span>
          {(["turbo", "fast", "realistic"] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => {
                setStreamSpeed(s);
                soundFx.playClick(900);
              }}
              className={`px-2.5 py-1 rounded-md capitalize transition-colors ${
                streamSpeed === s
                  ? "bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 font-bold"
                  : "bg-white/5 text-zinc-400 hover:text-white"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-6">
        <div className="rounded-2xl bg-[#0c0d14] border border-white/10 p-4 space-y-3 font-mono text-xs shadow-xl">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-zinc-400">
            <span className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-indigo-400" />
              <span>Structured JSON Buffer</span>
            </span>
            <span className="text-[10px] text-indigo-400">
              {streamIndex} / {sampleJsonTokens.length} Tokens
            </span>
          </div>

          <pre className="p-3 bg-black/60 rounded-xl text-emerald-400 font-mono text-[11px] leading-relaxed overflow-x-auto min-h-[170px] whitespace-pre-wrap">
            {currentStreamedText}
            {isStreaming && <span className="inline-block w-2 h-3.5 bg-emerald-400 animate-pulse ml-0.5" />}
            {streamIndex === 0 && !isStreaming && (
              <span className="text-zinc-600 font-mono italic">
                Click &ldquo;Start Token Stream&rdquo; to simulate live parsing...
              </span>
            )}
          </pre>
        </div>
      </div>
    </div>
  );
}
