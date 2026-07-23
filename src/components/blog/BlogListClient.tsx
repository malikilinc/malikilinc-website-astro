"use client";

// mAli v1.0 — Blog listeleme client bileşeni

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock } from "lucide-react";
import type { BlogPostMeta, BlogCategory } from "@/types/blog";

interface BlogListClientProps {
  posts: BlogPostMeta[];
  categories: BlogCategory[];
}

export default function BlogListClient({
  posts,
  categories,
}: BlogListClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? posts.filter((post) => post.category === activeCategory)
    : posts;

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

      {/* Blog Kartları */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeCategory || "all"}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-100"
        >
          {filteredPosts.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <p className="text-white/40 text-lg">
                Bu kategoride henüz yazı bulunmuyor.
              </p>
            </div>
          ) : (
            filteredPosts.map((post) => {
              const category = categories.find(
                (c) => c.slug === post.category
              );
              return (
                <a key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="group rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer h-full flex flex-col">
                    {post.image && (
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    )}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {category && (
                          <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent border border-accent/30">
                            {category.title}
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-xs text-white/40">
                          <Clock className="h-3 w-3" />
                          {post.readingTime} dk okuma
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-white/60 text-sm line-clamp-2 flex-1">
                        {post.description}
                      </p>
                      <div className="mt-3 text-xs text-white/30">
                        {post.date}
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
