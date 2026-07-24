// mAli v1.0 — Proje içerik yardımcı fonksiyonları

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Project, ProjectLiveUrl, ProjectMeta } from "@/types/project";

const PROJECTS_DIR = path.join(process.cwd(), "src/content/projects");

function normalizeLiveUrls(data: Record<string, unknown>): ProjectLiveUrl[] {
  const liveUrls = data.liveUrls;

  if (Array.isArray(liveUrls)) {
    return liveUrls
      .map((item) => {
        if (typeof item === "string") {
          return { url: item };
        }

        if (
          item &&
          typeof item === "object" &&
          "url" in item &&
          typeof item.url === "string"
        ) {
          return {
            label:
              "label" in item && typeof item.label === "string"
                ? item.label
                : undefined,
            url: item.url,
          };
        }

        return null;
      })
      .filter((item): item is ProjectLiveUrl => Boolean(item?.url));
  }

  return typeof data.liveUrl === "string" && data.liveUrl
    ? [{ url: data.liveUrl }]
    : [];
}

function mapProjectMeta(filename: string): ProjectMeta {
  const slug = filename.replace(/\.(md|mdx)$/, "");
  const filePath = path.join(PROJECTS_DIR, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);
  const liveUrls = normalizeLiveUrls(data);

  return {
    slug,
    title: data.title || "",
    shortDescription: data.shortDescription || "",
    description: data.description || "",
    image: data.image || "",
    images: Array.isArray(data.images) ? data.images : [],
    technologies: Array.isArray(data.technologies) ? data.technologies : [],
    category: data.category || "",
    liveUrl: liveUrls[0]?.url,
    liveUrls,
    githubUrl: data.githubUrl || undefined,
    featured: data.featured ?? false,
    published: data.published ?? false,
    order: data.order ?? 99,
  };
}

export function getAllProjects(): ProjectMeta[] {
  if (!fs.existsSync(PROJECTS_DIR)) {
    return [];
  }

  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map(mapProjectMeta)
    .filter((project) => project.published)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getProjectBySlug(slug: string): Project | null {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const liveUrls = normalizeLiveUrls(data);

  return {
    slug,
    title: data.title || "",
    shortDescription: data.shortDescription || "",
    description: data.description || "",
    image: data.image || "",
    images: Array.isArray(data.images) ? data.images : [],
    technologies: Array.isArray(data.technologies) ? data.technologies : [],
    category: data.category || "",
    liveUrl: liveUrls[0]?.url,
    liveUrls,
    githubUrl: data.githubUrl || undefined,
    featured: data.featured ?? false,
    published: data.published ?? false,
    order: data.order ?? 99,
    content,
  };
}

export function getAllProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) {
    return [];
  }

  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => /\.(md|mdx)$/.test(file))
    .map((file) => file.replace(/\.(md|mdx)$/, ""));
}

export function getFeaturedProjects(count?: number): ProjectMeta[] {
  const featuredProjects = getAllProjects().filter((project) => project.featured);

  return typeof count === "number"
    ? featuredProjects.slice(0, count)
    : featuredProjects;
}
