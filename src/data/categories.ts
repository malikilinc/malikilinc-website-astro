// mAli v1.0 — Blog kategorileri
// Yeni kategori eklemek için bu diziye obje ekleyin.
// UI otomatik olarak güncellenecektir.

import type { BlogCategory } from "@/types/blog";

export const categories: BlogCategory[] = [
  {
    slug: "yazilim-sureci",
    title: "Yazılım Süreci",
    description: "Yazılım geliştirme süreçleri, araçlar ve deneyimler",
  },
  {
    slug: "freelance-surec",
    title: "Freelance Süreç",
    description: "Freelance çalışma deneyimleri ve süreç yönetimi",
  },
  {
    slug: "gunluk",
    title: "Günlük",
    description: "Günlük düşünceler ve notlar",
  },
];

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return categories.find((cat) => cat.slug === slug);
}
