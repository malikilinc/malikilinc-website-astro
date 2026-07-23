// mAli v1.0 — Proje kategorileri
// Proje içerikleri src/content/projects altındaki MDX dosyalarından okunur

import type { ProjectCategory } from "@/types/project";

export const projectCategories: ProjectCategory[] = [
  {
    slug: "web-gelistirme",
    title: "Web Geliştirme",
    description: "Modern web uygulamaları ve siteler",
  },
  {
    slug: "e-ticaret",
    title: "E-Ticaret",
    description: "E-ticaret platformları ve çözümleri",
  },
  {
    slug: "gorsel-tasarim",
    title: "Görsel Tasarım",
    description: "UI/UX tasarımları ve görsel içerikler",
  },
];

export function getProjectCategoryBySlug(slug: string): ProjectCategory | undefined {
  return projectCategories.find((cat) => cat.slug === slug);
}
