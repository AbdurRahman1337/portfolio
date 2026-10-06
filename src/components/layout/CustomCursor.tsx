"use client";

import React, { useEffect, useState, useRef, useSyncExternalStore } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

function subscribeTouch() {
  return () => {};
}

function getIsTouchDevice() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
}

function getServerIsTouch() {
  return false;
}

export function CustomCursor() {
  const isTouchDevice = useSyncExternalStore(subscribeTouch, getIsTouchDevice, getServerIsTouch);
  const prefersReducedMotion = useReducedMotion();

  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [targetPosition, setTargetPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<"default" | "hover" | "view" | "open" | "talk">("default");
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    if (isTouchDevice || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setTargetPosition({ x: e.clientX, y: e.clientY });

      // Detect hover target attributes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      const isButton = target.closest("button") || target.closest("a");

      if (cursorAttr === "view") {
        setCursorState("view");
        setCursorText("VIEW");
      } else if (cursorAttr === "open") {
        setCursorState("open");
        setCursorText("OPEN");
      } else if (cursorAttr === "talk") {
        setCursorState("talk");
        setCursorText("TALK");
      } else if (isButton) {
        setCursorState("hover");
        setCursorText("");
      } else {
        setCursorState("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isTouchDevice, prefersReducedMotion]);

  // Smooth lerp animation for outer follower
  useEffect(() => {
    if (isTouchDevice || prefersReducedMotion) return;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      setPosition((prev) => ({
        x: lerp(prev.x, targetPosition.x, 0.18),
        y: lerp(prev.y, targetPosition.y, 0.18),
      }));
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [targetPosition, isTouchDevice, prefersReducedMotion]);

  if (isTouchDevice || prefersReducedMotion || !isVisible) {
    return null;
  }

  const isExpanded = cursorState !== "default";
  const hasText = cursorText.length > 0;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
    >
      {/* Precision center dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-indigo-400 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
        style={{
          transform: `translate3d(${targetPosition.x}px, ${targetPosition.y}px, 0)`,
          opacity: hasText ? 0 : 1,
        }}
      />

      {/* Smooth outer follower ring / bubble */}
      <div
        className={`fixed top-0 left-0 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 ${
          hasText
            ? "w-16 h-16 bg-indigo-600 text-white font-mono text-[10px] font-bold tracking-widest shadow-lg shadow-indigo-600/30 border border-indigo-400/40"
            : isExpanded
            ? "w-10 h-10 bg-indigo-500/15 border border-indigo-400/60"
            : "w-7 h-7 bg-transparent border border-white/25 dark:border-white/30 light:border-zinc-400"
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        {hasText && <span className="select-none animate-pulse-subtle">{cursorText}</span>}
      </div>
    </div>
  );
}
