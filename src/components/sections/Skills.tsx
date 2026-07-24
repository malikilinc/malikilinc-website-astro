"use client";

// mAli v1.0 — Skills (Yetenekler) Section
// Experience Database + Tools Inventory
// Referans: antonmanaev.name skills bölümü

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared";
import { Brain, Wrench } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiSupabase,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiDavinciresolve,
  SiFigma,
  SiFramer,
  SiAstro,
  SiNeon,
} from "react-icons/si";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { VscVscodeInsiders } from "react-icons/vsc";

/* ═══════════════════════════════════════════
   Custom SVG İkon Bileşenleri
   ═══════════════════════════════════════════ */

interface CustomIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
  role?: string;
  title?: string;
}

function CursorIcon({ className, style, title, ...props }: CustomIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} {...props}>
      {title && <title>{title}</title>}
      <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
    </svg>
  );
}

function AntigravityIcon({ className, style, title, ...props }: CustomIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} {...props}>
      {title && <title>{title}</title>}
      <path d="m19.94,20.59c1.09.82,2.73.27,1.23-1.23-4.5-4.36-3.55-16.36-9.14-16.36S7.39,15,2.89,19.36c-1.64,1.64.14,2.05,1.23,1.23,4.23-2.86,3.95-7.91,7.91-7.91s3.68,5.05,7.91,7.91Z" />
    </svg>
  );
}

function BootstrapIcon({ className, style, title, ...props }: CustomIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} {...props}>
      {title && <title>{title}</title>}
      <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z" />
    </svg>
  );
}

/* ═══════════════════════════════════════════
   Experience Database — Veri
   ═══════════════════════════════════════════ */

interface SkillItem {
  label: string;
  primary?: boolean;
}

interface CategoryData {
  title: string;
  color: string;
  skills: SkillItem[];
}

const categories: CategoryData[] = [
  {
    title: "FRONTEND",
    color: "#22d3ee",
    skills: [
      { label: "React", primary: true },
      { label: "Astro" },
      { label: "TypeScript" },
      { label: "JavaScript" },
      { label: "Tailwind" },
      { label: "Bootstrap" },
      { label: "HTML" },
      { label: "CSS" },
    ],
  },
  {
    title: "BACKEND",
    color: "#f87171",
    skills: [
      { label: "Node.js", primary: true },
      { label: "Next.js" },
      { label: "Neon" },
      { label: "Supabase" },
      { label: "PostgreSQL" },
    ],
  },
  {
    title: "DEVOPS",
    color: "#fbbf24",
    skills: [
      { label: "Git", primary: true },
      { label: "GitHub" },
      { label: "Vercel" },
      { label: "Netlify" },
    ],
  },
  {
    title: "GÖRSEL",
    color: "#c084fc",
    skills: [
      { label: "Photoshop", primary: true },
      { label: "İllüstratör" },
      { label: "Da Vinci" },
      { label: "Figma" },
    ],
  },
];

/* ═══════════════════════════════════════════
   Tools Inventory — Veri
   ═══════════════════════════════════════════ */

type AnyIcon = IconType | React.ComponentType<CustomIconProps>;

interface ToolItem {
  name: string;
  icon: AnyIcon;
  color: string;
}

const allTools: ToolItem[] = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: BootstrapIcon, color: "#563D7C" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Neon", icon: SiNeon, color: "#34D59A" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Astro", icon: SiAstro, color: "#FF5D01" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
  { name: "Photoshop", icon: DiPhotoshop, color: "#31A8FF" },
  { name: "İllüstratör", icon: DiIllustrator, color: "#FF9A00" },
  { name: "Da Vinci", icon: SiDavinciresolve, color: "#E8544E" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "VS Code", icon: VscVscodeInsiders, color: "#007ACC" },
  { name: "Cursor", icon: CursorIcon, color: "#ffffff" },
  { name: "Antigravity", icon: AntigravityIcon, color: "#007ACC" },
  { name: "Framer", icon: SiFramer, color: "#0055FF" },
];

/* ═══════════════════════════════════════════
   Ana Bileşen
   ═══════════════════════════════════════════ */

interface SkillsProps {
  embedded?: boolean;
}

export default function Skills({ embedded = false }: SkillsProps) {
  const content = (
    <>
      <ExperienceDatabase />
      <ToolsInventory />
    </>
  );

  if (embedded) {
    return <div className="space-y-16 md:space-y-20">{content}</div>;
  }

  return (
    <SectionWrapper id="skills">
      {content}
    </SectionWrapper>
  );
}

/* ═══════════════════════════════════════════
   Experience Database
   ═══════════════════════════════════════════ */

function ExperienceDatabase() {
  return (
    <div className="relative">
      {/* ── Desktop: 3-sütun grid ── */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-x-12 items-center">
        {/* Sol sütun — Frontend (üst) + DevOps (alt) */}
        <div className="flex flex-col justify-center gap-16 py-8">
          <CategoryBlock category={categories[0]} align="right" index={0} />
          <CategoryBlock category={categories[2]} align="right" index={2} />
        </div>

        {/* Merkez daire */}
        <CenterCircle />

        {/* Sağ sütun — Backend (üst) + Görsel (alt) */}
        <div className="flex flex-col justify-center gap-16 py-8">
          <CategoryBlock category={categories[1]} align="left" index={1} />
          <CategoryBlock category={categories[3]} align="left" index={3} />
        </div>
      </div>

      {/* ── Mobil: dikey yerleşim ── */}
      <div className="md:hidden space-y-10">
        <CenterCircle />
        {categories.map((cat, i) => (
          <CategoryBlock
            key={cat.title}
            category={cat}
            align="center"
            index={i}
          />
        ))}
      </div>

      {/* ── Dekoratif bağlantı noktaları (sadece masaüstü) ── */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <div className="absolute top-[18%] left-[48%] w-2 h-2 rounded-full bg-emerald-400/50" />
        <div className="absolute bottom-[25%] right-[46%] w-1.5 h-1.5 rounded-full bg-cyan-400/40" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Merkez Daire
   ═══════════════════════════════════════════ */

function CenterCircle() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex items-center justify-center py-6"
    >
      <div className="relative w-44 h-44 md:w-52 md:h-52">
        {/* Dış parlama */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/5 blur-2xl scale-150" />

        {/* Ana daire kenarlık */}
        <div className="absolute inset-0 rounded-full border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent" />

        {/* İç halka */}
        <div className="absolute inset-3 rounded-full border border-white/[0.05]" />

        {/* Yörünge noktası 1 — saat yönü */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
        </motion.div>

        {/* Yörünge noktası 2 — ters yön, yavaş */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
        </motion.div>

        {/* İçerik */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <Brain className="w-10 h-10 md:w-12 md:h-12 text-white/50 mb-3" />
          <span className="text-white font-semibold text-base md:text-lg tracking-[0.15em]">
            DENEYİM
          </span>
          <span className="text-white/40 text-[10px] md:text-xs tracking-[0.3em] mt-0.5">
            ARAÇLARIM
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   Kategori Bloğu
   ═══════════════════════════════════════════ */

function CategoryBlock({
  category,
  align,
  index,
}: {
  category: CategoryData;
  align: "left" | "right" | "center";
  index: number;
}) {
  const justifyMap = {
    right: "justify-end",
    center: "justify-center",
    left: "justify-start",
  };
  const textAlignMap = {
    right: "text-right",
    center: "text-center",
    left: "text-left",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="space-y-3"
    >
      {/* Yetenek pilleri */}
      <div className={`flex flex-wrap gap-2 ${justifyMap[align]}`}>
        {category.skills.map((skill, i) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.04 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-white/80 text-sm hover:bg-white/[0.08] hover:border-white/20 transition-colors duration-200 cursor-default"
          >
            {skill.primary && (
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: category.color }}
              />
            )}
            <span>{skill.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Kategori başlığı */}
      <p
        className={`text-[10px] font-mono tracking-[0.25em] uppercase ${textAlignMap[align]}`}
        style={{ color: category.color }}
      >
        {category.title}
      </p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   Tools Inventory
   ═══════════════════════════════════════════ */

function ToolsInventory() {
  const doubled = [...allTools, ...allTools];

  return (
    <div className="mt-20 md:mt-28">
      {/* Başlık */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-3 mb-10"
      >
        <Wrench className="w-4 h-4 text-[#f87171]" />
        <span className="text-xs font-mono tracking-[0.25em] text-white/50 uppercase">
          Kullandığım Araçlar
        </span>
      </motion.div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden pt-4">
        {/* Sol-sağ gradient maskeleri */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

        {/* Kayan satır */}
        <div
          className="flex gap-5 md:gap-8 pb-10 hover:[animation-play-state:paused]"
          style={{
            animation: "marquee 45s linear infinite",
            width: "max-content",
          }}
        >
          {doubled.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <div
                key={`${tool.name}-${i}`}
                className="relative flex-shrink-0 group py-2"
              >
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:border-white/20 group-hover:bg-white/[0.08]">
                  <Icon
                    className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300 tool-icon"
                    style={{ color: tool.color }}
                    aria-label={tool.name}
                    title={tool.name}
                    role="img"
                  />
                </div>
                <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[10px] text-white/60 whitespace-nowrap opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none font-mono">
                  {tool.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
