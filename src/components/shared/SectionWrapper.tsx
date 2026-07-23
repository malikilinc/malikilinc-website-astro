"use client";

// mAli v1.0 — SectionWrapper bileşeni
// Ortak section sarmalayıcı: scroll-triggered animasyon, padding, max-width

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  className,
  containerClassName,
  id,
  ...props
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("py-24 md:py-32 px-4 md:px-8 relative section-glow-top opacity-100", className)}
      {...props}
    >
      <div className={cn("max-w-6xl mx-auto", containerClassName)}>
        {children}
      </div>
    </motion.section>
  );
}
