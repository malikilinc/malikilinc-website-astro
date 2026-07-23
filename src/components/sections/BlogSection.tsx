// mAli v1.0 — BlogSection bileşeni (Ana sayfa)
// 3×2 grid (masaüstü), tek sütun (mobil)
// Son 3 veya 6 yazı

import { getCategoryBySlug } from "@/data/categories";
import { Clock } from "lucide-react";

export interface BlogPostItem {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  readingTime?: number;
}

interface BlogSectionProps {
  posts: BlogPostItem[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section id="blog" className="py-24 md:py-32 px-4 md:px-8 relative section-glow-top">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Blog
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Yazılım, freelance süreçler ve günlük deneyimlerim
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-white/40 text-lg">Henüz blog yazısı yok.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => {
              const category = getCategoryBySlug(post.category);
              return (
                <a key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="group rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer h-full flex flex-col">
                    {/* Görsel */}
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

                    {/* İçerik */}
                    <div className="p-5 flex flex-col flex-1">
                      {/* Kategori + Okuma süresi */}
                      <div className="flex items-center gap-3 mb-3">
                        {category && (
                          <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent border border-accent/30">
                            {category.title}
                          </span>
                        )}
                        {post.readingTime && (
                          <span className="flex items-center gap-1 text-xs text-white/40">
                            <Clock className="h-3 w-3" />
                            {post.readingTime} dk okuma
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-white/60 text-sm line-clamp-2 flex-1">
                        {post.description}
                      </p>
                    </div>
                  </article>
                </a>
              );
            })}
          </div>
        )}

        {/* Tüm yazıları gör butonu */}
        {posts.length > 0 && (
          <div className="text-center mt-10">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 text-sm font-medium"
            >
              Tüm Yazıları Gör
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
