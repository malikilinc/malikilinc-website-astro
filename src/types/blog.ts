// mAli v1.0 — Blog tip tanımları

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // "MM/YYYY" formatı
  image: string;
  category: string; // categories.ts'deki slug
  tags: string[];
  published: boolean;
  readingTime: number; // dakika
  content: string; // MDX ham içerik
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
  published: boolean;
  readingTime: number;
}

export interface BlogCategory {
  slug: string;
  title: string;
  description: string;
}
