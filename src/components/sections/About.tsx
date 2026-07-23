"use client";

// mAli v1.0 — About (Hakkımda) Section
// Görsel + metin bloğu ve ardından skills alanı


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/shared";
import Skills from "./Skills";

const rotatingWords = ["Öğreniyorum", "Uyguluyorum", "Geliştiriyorum"];

export default function About() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="about">
      <div className="space-y-20 md:space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative group w-72 md:w-full max-w-sm aspect-[4/5]">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/5">
                <img
                  src="/images/about/mali-profil.png"
                  alt="mAli profil fotoğrafı"
                  width={400}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-full rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-8 md:p-10 space-y-6 shadow-2xl shadow-black/20 flex flex-col justify-center">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#eaa03c]/30 to-transparent" />

              <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3 flex-wrap">
                <span>Sürekli</span>
                <span className="relative inline-flex h-[1.2em] w-[7em] md:w-[8.5em] overflow-hidden">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={rotatingWords[wordIndex]}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-100%" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute left-0 top-0 text-[#eaa03c]"
                    >
                      {rotatingWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Yolculuğum milenyumun başında, bozuk bir bilgisayar kasasının &ldquo;hediye&rdquo; edilmesiyle başladı. Merakım beni önce donanıma, sonra HTML ve CSS ile web&apos;in temellerine, ardından fotoğrafçılık ve temel sanat eğitimiyle görsel üretimin dünyasına taşıdı. Bir süre odağım görsel üretim olsa da teknolojiyle kurduğum bağ beni yeniden yazılıma getirdi.
              </p>
              <p className="text-white/60 text-base md:text-lg leading-relaxed">
                Bugün freelance projelerde yer alıyor; tasarım, üretim ve yazılımın kesiştiği noktada çalışıyorum. Süreçlerimi ve deneyimlerimi ise blog yazılarımda paylaşmaya çalışıyorum.
              </p>
            </div>
          </motion.div>
        </div>

        <Skills embedded />
      </div>
    </SectionWrapper>
  );
}
