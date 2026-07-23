import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    image: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    published: z.boolean().default(true),
    readingTime: z.number().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string().optional(),
    description: z.string(),
    image: z.string(),
    images: z.array(z.string()).optional(),
    technologies: z.array(z.string()).default([]),
    category: z.string(),
    liveUrl: z.string().optional(),
    liveUrls: z.array(z.object({
      label: z.string().optional(),
      url: z.string(),
    })).optional(),
    githubUrl: z.string().optional(),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
  }),
});

export const collections = { blog, projects };
