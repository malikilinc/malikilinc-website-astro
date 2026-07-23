"use client";

// mAli v1.0 — Portfolio Client bileşeni
// Masaüstü: 3 sütun grid, Mobil: tek sütun
// Framer Motion animasyonları

import { motion } from "framer-motion";
import { GlassCard } from "@/components/shared";
import { ExternalLink } from "lucide-react";
import type { ProjectMeta } from "@/types/project";
import { ProjectMedia } from "@/components/shared/ProjectMedia";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface PortfolioClientProps {
  projects: ProjectMeta[];
}

export default function PortfolioClient({ projects }: PortfolioClientProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-100"
    >
      {projects.map((project) => (
        <motion.div key={project.slug} variants={itemVariants}>
          <a href={`/projects/${project.slug}`}>
            <GlassCard className="overflow-hidden group cursor-pointer h-full">
              {/* Proje Görseli */}
              <div className="relative aspect-video overflow-hidden">
                <ProjectMedia
                  src={project.image}
                  alt={project.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Proje Bilgileri */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm line-clamp-2">
                  {project.shortDescription}
                </p>

                {/* Teknoloji etiketleri */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
}
