"use client";

// mAli v1.0 — Proje listeleme client bileşeni

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { ProjectMeta, ProjectCategory } from "@/types/project";
import { ProjectMedia } from "@/components/shared/ProjectMedia";

interface ProjectsListClientProps {
  projects: ProjectMeta[];
  categories: ProjectCategory[];
}

export default function ProjectsListClient({
  projects,
  categories,
}: ProjectsListClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProjects = (
    activeCategory
      ? projects.filter((project) => project.category === activeCategory)
      : projects
  ).sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

  return (
    <>
      {/* Kategori Filtreleme */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
            activeCategory === null
              ? "bg-accent text-white border border-accent/50"
              : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white"
          }`}
        >
          Tümü
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveCategory(cat.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeCategory === cat.slug
                ? "bg-accent text-white border border-accent/50"
                : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Proje Kartları */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeCategory || "all"}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-100"
        >
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <p className="text-white/40 text-lg">
                Bu kategoride henüz proje bulunmuyor.
              </p>
            </div>
          ) : (
            filteredProjects.map((project) => {
              const category = categories.find(
                (c) => c.slug === project.category
              );
              return (
                <a key={project.slug} href={`/projects/${project.slug}`}>
                  <article className="group rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer h-full flex flex-col">
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
                    <div className="p-5 flex flex-col flex-1">
                      {/* Kategori */}
                      <div className="flex items-center gap-3 mb-3">
                        {category && (
                          <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent border border-accent/30">
                            {category.title}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-white/60 text-sm line-clamp-2 flex-1">
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
                  </article>
                </a>
              );
            })
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
