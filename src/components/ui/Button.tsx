import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glow";
  size?: "sm" | "md" | "lg" | "icon";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-1.5",
      md: "text-sm px-4 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5 font-medium",
      icon: "p-2.5 rounded-full",
    };

    const variantStyles = {
      primary:
        "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 border border-indigo-400/20",
      secondary:
        "bg-white/[0.08] hover:bg-white/[0.12] text-zinc-100 dark:text-zinc-100 border border-white/10 dark:hover:border-white/20 light:bg-zinc-100 light:hover:bg-zinc-200 light:text-zinc-800 light:border-zinc-300",
      outline:
        "bg-transparent hover:bg-white/[0.05] text-zinc-300 dark:text-zinc-300 border border-white/15 dark:hover:border-white/30 light:text-zinc-700 light:border-zinc-300 light:hover:bg-zinc-100",
      ghost:
        "bg-transparent hover:bg-white/[0.06] text-zinc-300 hover:text-white dark:text-zinc-400 dark:hover:text-zinc-100 light:text-zinc-600 light:hover:text-zinc-900 light:hover:bg-zinc-100",
      glow:
        "bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] border border-indigo-400/30",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

