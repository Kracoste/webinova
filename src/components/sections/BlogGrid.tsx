"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Section, Badge } from "@/components/ui";
import type { BlogPost } from "@/types";

interface BlogGridProps {
  posts: Omit<BlogPost, "content">[];
}

const categories = ["Tous", "Business", "SEO", "Design", "Performance", "Technique", "Légal"];

function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

export function BlogGrid({ posts }: BlogGridProps) {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredPosts = activeCategory === "Tous" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <>
      {/* Catégories */}
      <Section background="white" className="!pt-0 !pb-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-[var(--color-gray-100)] text-[var(--color-gray-600)] hover:bg-[var(--color-gray-200)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      {/* Message si aucun article */}
      {filteredPosts.length === 0 && (
        <Section background="white" className="!pt-0">
          <div className="text-center py-12">
            <p className="text-[var(--color-gray-500)] text-lg">
              Aucun article dans cette catégorie pour le moment.
            </p>
          </div>
        </Section>
      )}

      {/* Article à la une */}
      {featuredPost && (
        <Section background="white" className="!pt-0">
          <article className="group bg-[var(--color-gray-50)] rounded-2xl overflow-hidden md:flex">
            {/* Image */}
            <div className="md:w-1/2 aspect-[16/10] md:aspect-auto relative">
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Contenu */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="primary">{featuredPost.category}</Badge>
                <span className="text-sm text-[var(--color-gray-400)]">
                  {formatDate(featuredPost.publishedAt)}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-secondary)] mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
              </h2>
              <p className="text-[var(--color-gray-600)] mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--color-gray-500)]">
                  Par {featuredPost.author} · {featuredPost.readingTime} min de
                  lecture
                </span>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="text-[var(--color-primary)] font-semibold hover:underline"
                >
                  Lire l&apos;article →
                </Link>
              </div>
            </div>
          </article>
        </Section>
      )}

      {/* Grille d'articles */}
      {otherPosts.length > 0 && (
        <Section background="gray">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-xl overflow-hidden border border-[var(--color-gray-200)] hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" size="sm">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-[var(--color-gray-400)]">
                      {formatDate(post.publishedAt)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-secondary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-[var(--color-gray-500)] text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--color-gray-400)]">
                      {post.readingTime} min
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[var(--color-primary)] font-medium hover:underline"
                    >
                      Lire →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
