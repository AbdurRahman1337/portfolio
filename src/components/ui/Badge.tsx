import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "outline" | "glow" | "status";
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-white/[0.05] text-zinc-300 border-white/10 dark:text-zinc-300 light:text-zinc-700 light:bg-zinc-200/60 light:border-zinc-300",
    primary:
      "bg-indigo-500/10 text-indigo-400 border-indigo-500/25 dark:text-indigo-300 light:text-indigo-600 light:bg-indigo-50 light:border-indigo-200",
    outline:
      "bg-transparent text-zinc-400 border-white/10 dark:text-zinc-400 light:text-zinc-600 light:border-zinc-300",
    glow:
      "bg-indigo-500/10 text-indigo-300 border-indigo-500/30 shadow-[0_0_12px_rgba(99,102,241,0.2)]",
    status:
      "bg-emerald-500/10 text-emerald-400 border-emerald-500/25 dark:text-emerald-300 light:text-emerald-700 light:bg-emerald-50 light:border-emerald-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-full border transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

