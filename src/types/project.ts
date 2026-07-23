// mAli v1.0 — Proje tip tanımları

export interface ProjectLiveUrl {
  label?: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  images?: string[];
  technologies: string[];
  category: string;
  liveUrl?: string;
  liveUrls?: ProjectLiveUrl[];
  githubUrl?: string;
  featured?: boolean;
  published: boolean;
  content: string;
}

export interface ProjectMeta {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  images?: string[];
  technologies: string[];
  category: string;
  liveUrl?: string;
  liveUrls?: ProjectLiveUrl[];
  githubUrl?: string;
  featured?: boolean;
  published: boolean;
}

export interface ProjectCategory {
  slug: string;
  title: string;
  description: string;
}
