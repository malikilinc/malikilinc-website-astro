"use client";

// mAli v1.0 — Hero Section
// Video sadece bu section içinde. Tam viewport yüksekliği.

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768 && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Poster Image — LCP Optimization */}
      <img
        src="/images/hero-poster.webp"
        alt="mAli Hero Background"
        width={1920}
        height={1080}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Video Background — Desktop only to maximize mobile PageSpeed */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/images/hero-poster.webp"
        className="hidden md:block absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/malihero.webm" type="video/webm" />
        <source src="/malihero.mp4" type="video/mp4" />
      </video>

      {/* Koyu Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Alt gradient geçiş — video'dan section'lara yumuşak geçiş */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-background/70 to-background" />

      {/* İçerik */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end px-4 pb-18 text-center md:pb-40 lg:pb-12">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="text-base md:text-xl text-white/70 max-w-2xl mb-8 leading-relaxed"
        >
          Eskiden bir milyoncuydu, şimdilerde her şeyci.
        </motion.p>
      </div>
    </section>
  );
}
