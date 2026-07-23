"use client";

import { useId } from "react";
import { motion, type Variants } from "framer-motion";
import { BookOpen, User, Wrench, Rocket, ChevronRight, ArrowLeft } from "lucide-react";
import { socialLinks } from "@/data/social";

export interface BioPostItem {
  slug: string;
  title: string;
}

interface BioClientProps {
  latestPosts: BioPostItem[];
}

function TextAnimate({ 
  children, 
  className, 
  duration = 0.8,
  stagger = 0.025
}: { 
  children: string; 
  className?: string; 
  duration?: number;
  stagger?: number;
}) {
  const baseId = useId();
  const lines = children.split("\n");
  let charCount = 0;

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 16,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: duration,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <span className={className}>
      {lines.map((line, lineIdx) => {
        const lineChars = Array.from(line);
        return (
          <span key={`${baseId}-line-${lineIdx}`} className="block">
            {lineChars.map((char, charIdx) => {
              const delay = stagger * charCount;
              charCount++;
              return (
                <motion.span
                  key={`${baseId}-line-${lineIdx}-char-${charIdx}`}
                  variants={childVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay }}
                  className="inline-block whitespace-pre"
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}

export default function BioClient({ latestPosts }: BioClientProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-20 pb-12 px-4 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Effect */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at top, rgba(255, 184, 0, 0.06) 0%, rgba(10, 10, 10, 1) 60%)"
        }}
      />
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none z-0" />

      {/* Floating Home Button */}
      <div className="absolute top-6 left-6 z-20">
        <a
          href="/"
          className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-xs text-white/60 hover:text-white"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Ana Sayfa</span>
        </a>
      </div>

      {/* Main Content Container */}
      <main className="w-full max-w-md flex flex-col items-center gap-8 z-10 relative">
        {/* Header Section */}
        <header className="flex flex-col items-center text-center gap-4 w-full">
          <div className="w-[120px] h-[120px] rounded-full border-2 border-[#FFB800] overflow-hidden bg-white/5 relative shadow-xl">
            <img
              src="/images/about/mali-profil-bio.png"
              alt="mAli Profil Fotoğrafı"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-lg md:text-xl font-bold text-[#FFB800] max-w-[280px] leading-snug tracking-wide">
            <TextAnimate duration={1.2}>
              {"Eskiden bir milyoncuydu,\nşimdilerde her şeyci."}
            </TextAnimate>
          </h1>
        </header>

        {/* Dynamic content sections */}
        <section className="w-full flex flex-col gap-8">
          {/* Son Yazılar */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xs font-semibold text-white/30 uppercase tracking-widest px-1">
              Son Yazılar
            </h2>
            <div className="flex flex-col gap-2">
              {latestPosts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bio-blog-item bio-animated-border group flex items-center justify-between p-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 relative z-10">
                    <BookOpen className="w-5 h-5 text-[#FFB800]" />
                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors line-clamp-1">
                      {post.title}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-[#FFB800] transition-colors relative z-10 shrink-0" />
                </a>
              ))}
              {latestPosts.length === 0 && (
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-center text-sm text-white/40">
                  Henüz yazı eklenmemiş.
                </div>
              )}
            </div>
          </div>

          {/* Menü Bağlantıları */}
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="/blog"
                className="bio-menu-item bio-animated-border group flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5 text-white/40 group-hover:text-white transition-colors relative z-10 shrink-0" />
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors relative z-10">
                  Blog
                </span>
              </a>
              <a
                href="/about"
                className="bio-menu-item bio-animated-border group flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <User className="w-5 h-5 text-white/40 group-hover:text-white transition-colors relative z-10 shrink-0" />
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors relative z-10">
                  Hakkımda
                </span>
              </a>
              <a
                href="/services"
                className="bio-menu-item bio-animated-border group flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Wrench className="w-5 h-5 text-white/40 group-hover:text-white transition-colors relative z-10 shrink-0" />
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors relative z-10">
                  Hizmetler
                </span>
              </a>
              <a
                href="/projects"
                className="bio-menu-item bio-animated-border group flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Rocket className="w-5 h-5 text-white/40 group-hover:text-white transition-colors relative z-10 shrink-0" />
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors relative z-10">
                  Projeler
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="w-full mt-6 flex flex-col items-center text-center pb-6 relative">
          <div className="flex justify-center gap-4 mb-8 relative z-10">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-white/40 hover:text-white p-2 rounded-lg hover:bg-white/[0.06] transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon className="h-[18px] w-[18px] group-hover:text-[#FFB800] transition-colors" />
                  <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/10 backdrop-blur-md text-white text-xs rounded-md whitespace-nowrap opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none border border-white/5">
                    {social.label}
                  </span>
                </a>
              );
            })}
          </div>

          <p className="font-sans text-sm text-white/50 max-w-xs mb-10 relative z-10 leading-relaxed">
            Bu web sitesi; ben, keyfim ve kahyamın müştereken işlettiği, kişisel deneyimlerimi paylaştığım bir alandır.
          </p>

          <div className="w-full border-t border-white/[0.06] mb-8 relative z-10" />

          <div className="relative mb-6 overflow-hidden w-full select-none pointer-events-none z-0 animate-fade-in" aria-hidden="true">
            <div className="flex justify-center">
              <span className="footer-watermark text-[7rem] sm:text-[8rem] font-black leading-none tracking-tighter">
                mAli
              </span>
            </div>
          </div>

          <div className="w-full text-center relative z-10">
            <p className="text-white/30 text-xs">
              © {currentYear} mAli. Tüm hakları saklıdır.
            </p>
          </div>
        </footer>
      </main>

      <div
        className="absolute bottom-0 left-0 w-full h-[350px] pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 30% 125% at 50% 100%, rgba(234,160,60,0.25) 0%, rgba(200,120,40,0.12) 30%, rgba(160,80,30,0.05) 55%, transparent 80%)",
        }}
      />
    </div>
  );
}
