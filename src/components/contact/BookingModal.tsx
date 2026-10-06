"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/sound";
import { personalInfo } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import {
  X,
  Calendar,
  Clock,
  Globe2,
  Video,
  Check,
  ArrowRight,
  Send,
} from "lucide-react";
import confetti from "canvas-confetti";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<"slot" | "details" | "confirmed">("slot");
  const [selectedDuration, setSelectedDuration] = useState<"15" | "30">("30");
  const [selectedTimezone, setSelectedTimezone] = useState("US Eastern (EST/EDT)");
  const [selectedDay, setSelectedDay] = useState("Tomorrow");
  const [clientEmail, setClientEmail] = useState("");
  const [clientName, setClientName] = useState("");
  const [projectScope, setProjectScope] = useState("");

  if (!isOpen) return null;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientEmail || !clientName) return;

    soundFx.playSuccess();
    try {
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#6366f1", "#a855f7", "#10b981"],
      });
    } catch {}

    setStep("confirmed");
  };

  const handleClose = () => {
    soundFx.playPop(800);
    onClose();
    setTimeout(() => setStep("slot"), 300);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Schedule a Global Intro Call"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-3xl bg-[#0b0c12] dark:bg-[#0b0c12] light:bg-white border border-white/15 dark:border-white/15 light:border-zinc-300 shadow-2xl p-6 sm:p-8 overflow-hidden text-zinc-100 dark:text-zinc-100 light:text-zinc-900"
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-72 h-36 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 dark:border-white/10 light:border-zinc-200 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-lg sm:text-xl tracking-tight">
                Schedule a 1-on-1 Intro Call
              </h2>
              <p className="text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-500">
                Direct with Abdurrahman • React & React Native Engineer
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Timezone & Slot Selection */}
        {step === "slot" && (
          <div className="space-y-6 relative z-10">
            {/* Quick Overview Pill */}
            <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-indigo-300">
                <Video className="w-4 h-4 text-indigo-400" />
                <span>Google Meet / Zoom Video Call</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Overlapping US/EU Working Hours</span>
              </div>
            </div>

            {/* Timezone Selector */}
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1.5 flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Your Timezone</span>
              </label>
              <select
                value={selectedTimezone}
                onChange={(e) => setSelectedTimezone(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-300 text-sm focus:outline-none focus:border-indigo-500 font-mono"
              >
                <option value="US Eastern (EST/EDT)">US Eastern (EST/EDT • New York, Miami)</option>
                <option value="US Pacific (PST/PDT)">US Pacific (PST/PDT • San Francisco, Seattle)</option>
                <option value="US Central (CST/CDT)">US Central (CST/CDT • Chicago, Austin)</option>
                <option value="Western Europe (GMT/BST)">Western Europe (GMT/BST • London, Dublin)</option>
                <option value="Central Europe (CET/CEST)">Central Europe (CET/CEST • Berlin, Paris, Amsterdam)</option>
                <option value="Middle East (GST)">Middle East (GST • Dubai, Abu Dhabi)</option>
                <option value="Australia (AEST)">Australia (AEST • Sydney, Melbourne)</option>
                <option value="Other / Async">Other / Prefer Async Loom & Email</option>
              </select>
            </div>

            {/* Duration Selector */}
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-purple-400" />
                <span>Call Duration</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedDuration("15")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedDuration === "15"
                      ? "bg-indigo-600/20 border-indigo-500 text-indigo-300 font-bold"
                      : "bg-white/[0.03] border-white/10 text-zinc-400 hover:border-white/20"
                  }`}
                >
                  <div className="font-display font-semibold text-sm text-zinc-100">15-Min Quick Intro</div>
                  <div className="text-[11px] font-mono text-zinc-400 mt-0.5">High-level fit & tech stack alignment</div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedDuration("30")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedDuration === "30"
                      ? "bg-indigo-600/20 border-indigo-500 text-indigo-300 font-bold"
                      : "bg-white/[0.03] border-white/10 text-zinc-400 hover:border-white/20"
                  }`}
                >
                  <div className="font-display font-semibold text-sm text-zinc-100">30-Min Architecture Deep-Dive</div>
                  <div className="text-[11px] font-mono text-zinc-400 mt-0.5">Product roadmap & delivery scoping</div>
                </button>
              </div>
            </div>

            {/* Day Availability Grid */}
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                Preferred Timeline
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                {["Today / Urgently", "Tomorrow", "Next 2–3 Days"].map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={`py-2 px-3 rounded-xl border text-center transition-all ${
                      selectedDay === day
                        ? "bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30 border-indigo-500"
                        : "bg-white/[0.03] border-white/10 text-zinc-400 hover:text-white"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  soundFx.playClick(1100);
                  setStep("details");
                }}
                className="gap-2"
              >
                <span>Continue to Details</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Client Info Form */}
        {step === "details" && (
          <form onSubmit={handleConfirm} className="space-y-4 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 border border-white/10 text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">
                  Your Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="e.g. sarah@startup.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 border border-white/10 text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">
                Project Overview or Key Goal
              </label>
              <textarea
                rows={3}
                value={projectScope}
                onChange={(e) => setProjectScope(e.target.value)}
                placeholder="e.g. We need a fast React Native MVP or high-polish web dashboard with real-time streaming..."
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 border border-white/10 text-sm focus:outline-none focus:border-indigo-500 resize-none"
              />
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
              <span>{selectedDuration} min • {selectedTimezone}</span>
              <span className="text-indigo-400">{selectedDay}</span>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep("slot")}
                className="text-xs font-mono text-zinc-400 hover:text-white"
              >
                ← Back
              </button>

              <Button type="submit" variant="primary" size="md" className="gap-2">
                <Send className="w-4 h-4" />
                <span>Confirm & Send Invite Request</span>
              </Button>
            </div>
          </form>
        )}

        {/* Step 3: Confirmed Screen */}
        {step === "confirmed" && (
          <div className="py-8 text-center space-y-4 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>

            <h3 className="font-display font-bold text-2xl text-zinc-100">
              Intro Request Received!
            </h3>

            <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-medium">{clientName}</span>. Abdurrahman will review your details and send a direct calendar invite to <span className="text-indigo-400 font-mono">{clientEmail}</span> within a few hours.
            </p>

            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 max-w-sm mx-auto text-xs font-mono text-zinc-400">
              Need immediate async response? Email directly at: <br />
              <span className="text-white font-semibold">{personalInfo.email}</span>
            </div>

            <Button variant="secondary" size="sm" onClick={handleClose}>
              Back to Portfolio
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

