// mAli v1.0 — MDX yardımcı fonksiyonları

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { BlogPost, BlogPostMeta } from "@/types/blog";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

/**
 * Tüm yayınlanmış blog yazılarının meta verilerini döndürür.
 * Tarihe göre azalan sırada sıralanır.
 */
export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts: BlogPostMeta[] = files
    .map((filename) => {
      const slug = filename.replace(/\.(md|mdx)$/, "");
      const filePath = path.join(BLOG_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      const stats = readingTime(content);

      return {
        slug,
        title: data.title || "",
        description: data.description || "",
        date: data.date || "",
        image: data.image || "",
        category: data.category || "",
        tags: data.tags || [],
        published: data.published ?? false,
        readingTime: Math.ceil(stats.minutes),
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => {
      // "MM/YYYY" formatını karşılaştır
      const [aMonth, aYear] = a.date.split("/").map(Number);
      const [bMonth, bYear] = b.date.split("/").map(Number);
      if (aYear !== bYear) return bYear - aYear;
      return bMonth - aMonth;
    });

  return posts;
}

/**
 * Belirli bir slug'a ait blog yazısını döndürür.
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    image: data.image || "",
    category: data.category || "",
    tags: data.tags || [],
    published: data.published ?? false,
    readingTime: Math.ceil(stats.minutes),
    content,
  };
}

/**
 * Belirli bir kategoriye ait yazıları döndürür.
 */
export function getPostsByCategory(categorySlug: string): BlogPostMeta[] {
  return getAllPosts().filter((post) => post.category === categorySlug);
}

/**
 * Tüm slug'ları döndürür (generateStaticParams için).
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.(md|mdx)$/.test(f))
    .map((f) => f.replace(/\.(md|mdx)$/, ""));
}

/**
 * En son N yazıyı döndürür.
 */
export function getLatestPosts(count: number = 6): BlogPostMeta[] {
  return getAllPosts().slice(0, count);
}
