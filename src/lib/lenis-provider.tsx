"use client";

// mAli v1.0 — Lenis smooth scroll provider

import { useEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  const scrollToCurrentTarget = () => {
    const hash = window.location.hash;

    if (hash) {
      const element = document.querySelector(hash);

      if (element instanceof HTMLElement) {
        lenisRef.current?.scrollTo(element, { immediate: true });
        return;
      }
    }

    lenisRef.current?.scrollTo(0, { immediate: true });
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  useEffect(() => {
    // Mobil dokunmatik cihazlarda Lenis'i pasif tutarak CPU ve batarya tasarrufu sağla
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      orientation: "vertical" as const,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    const frame = window.requestAnimationFrame(() => {
      scrollToCurrentTarget();
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      scrollToCurrentTarget();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return <>{children}</>;
}

