// mAli v1.0 — Portfolio Section
// Verileri props ile alır, animasyonlar PortfolioClient'a devredilir

import { SectionWrapper } from "@/components/shared";
import type { ProjectMeta } from "@/types/project";
import PortfolioClient from "./PortfolioClient";

interface PortfolioProps {
  projects: ProjectMeta[];
}

export default function Portfolio({ projects }: PortfolioProps) {
  return (
    <SectionWrapper id="portfolio">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Portfolyo
        </h2>
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
          Üzerinde çalıştığım projelerden bazıları
        </p>
      </div>

      <PortfolioClient projects={projects} />

      {/* Tüm çalışmaları gör butonu */}
      {projects.length > 0 && (
        <div className="text-center mt-10">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 text-sm font-medium"
          >
            Tüm Çalışmalarımı Gör
          </a>
        </div>
      )}
    </SectionWrapper>
  );
}
