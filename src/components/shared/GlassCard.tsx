"use client";

// mAli v1.0 — GlassCard bileşeni
// Yeniden kullanılabilir glassmorphism kart

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl",
        hover &&
          "hover:bg-white/10 hover:border-white/20 transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
