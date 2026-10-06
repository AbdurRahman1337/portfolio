"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  radius: number;
}

export function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Generate geometric node grid
    const numPoints = Math.min(Math.floor((width * height) / 10000), 36);
    const points: Point[] = [];

    for (let i = 0; i < numPoints; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      points.push({
        x,
        y,
        originX: x,
        originY: y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 1,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let isHovered = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    if (containerRef.current) {
      containerRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    let time = 0;
    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle orbital ring in center
      const centerX = width * 0.5;
      const centerY = height * 0.5;
      const ringRadius = Math.min(width, height) * 0.38;

      ctx.beginPath();
      ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(99, 102, 241, 0.12)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw second tilted ellipse
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(time * 0.12);
      ctx.beginPath();
      ctx.ellipse(0, 0, ringRadius * 1.1, ringRadius * 0.58, Math.PI / 4, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(168, 85, 247, 0.14)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // Update and draw node constellation
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (isHovered) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            p.x -= (dx / dist) * force * 1.5;
            p.y -= (dy / dist) * force * 1.5;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(165, 180, 252, 0.75)";
        ctx.fill();

        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="relative w-full h-full min-h-[360px] md:min-h-[440px] flex items-center justify-center overflow-hidden"
    >
      {/* Central glowing ambient halo behind portrait */}
      <div className="absolute pointer-events-none w-64 h-64 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute pointer-events-none w-48 h-48 rounded-full bg-purple-600/20 blur-2xl" />

      {/* Prominent High-Resolution Portrait Display */}
      <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1 bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-transparent shadow-2xl shadow-indigo-600/30">
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 bg-zinc-950">
          <Image
            src="/images/profile/abdurrahman-hero.png"
            alt="Abdurrahman — React & React Native Developer"
            fill
            sizes="(max-width: 640px) 220px, 260px"
            priority
            className="object-cover object-top hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle vignette over photo edge */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none" />
        </div>
      </div>

      {/* Interactive Canvas Constellation Layer over and around portrait */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block pointer-events-none z-20 opacity-90"
      />
    </div>
  );
}
