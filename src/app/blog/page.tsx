import type { Metadata } from "next";
import { Section, Badge } from "@/components/ui";
import { BlogGrid } from "@/components/sections";
import { generatePageMetadata } from "@/lib/seo";
import type { BlogPost } from "@/types";

export const metadata: Metadata = generatePageMetadata({
  title: "Blog – Conseils Création Site Internet & SEO à Bressuire",
  description:
    "Conseils d'expert sur la création de sites internet, le SEO local, le webdesign et le marketing digital pour les entreprises de Bressuire et Deux-Sèvres.",
  keywords: [
    "blog création site internet",
    "conseils SEO local Bressuire",
    "blog webdesign Deux-Sèvres",
    "tutoriel création site web",
    "blog marketing digital Niort",
  ],
  path: "/blog",
});

const blogPosts: Omit<BlogPost, "content">[] = [
  {
    id: "1",
    slug: "pourquoi-site-web-indispensable-2024",
    title: "Pourquoi un site web est indispensable en 2024",
    excerpt:
      "Découvrez pourquoi avoir un site web professionnel est devenu incontournable pour toute entreprise, quelle que soit sa taille.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    author: "Hugo Allou",
    publishedAt: "2024-01-15",
    category: "Business",
    tags: ["site web", "entreprise", "digital"],
    readingTime: 5,
  },
  {
    id: "2",
    slug: "seo-bases-bien-referencer-site",
    title: "SEO : les bases pour bien référencer son site",
    excerpt:
      "Les fondamentaux du référencement naturel expliqués simplement pour améliorer la visibilité de votre site sur Google.",
    coverImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop",
    author: "Hugo Allou",
    publishedAt: "2024-01-08",
    category: "SEO",
    tags: ["SEO", "référencement", "Google"],
    readingTime: 8,
  },
  {
    id: "3",
    slug: "tendances-web-design-2024",
    title: "Les tendances web design à suivre en 2024",
    excerpt:
      "Minimalisme, dark mode, micro-interactions... Découvrez les tendances qui vont marquer le web design cette année.",
    coverImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
    author: "Hugo Allou",
    publishedAt: "2024-01-02",
    category: "Design",
    tags: ["design", "tendances", "UI/UX"],
    readingTime: 6,
  },
  {
    id: "4",
    slug: "vitesse-chargement-impact-conversion",
    title: "Vitesse de chargement : l'impact sur vos conversions",
    excerpt:
      "Chaque seconde compte ! Comprenez l'impact de la performance sur vos ventes et comment optimiser votre site.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    author: "Hugo Allou",
    publishedAt: "2023-12-20",
    category: "Performance",
    tags: ["performance", "vitesse", "conversion"],
    readingTime: 7,
  },
  {
    id: "5",
    slug: "choisir-cms-wordpress-vs-sur-mesure",
    title: "WordPress vs Site sur-mesure : que choisir ?",
    excerpt:
      "Comparaison détaillée pour vous aider à choisir la meilleure solution technique pour votre projet web.",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    author: "Hugo Allou",
    publishedAt: "2023-12-15",
    category: "Technique",
    tags: ["WordPress", "développement", "CMS"],
    readingTime: 10,
  },
  {
    id: "6",
    slug: "rgpd-conformite-site-web",
    title: "RGPD : votre site est-il conforme ?",
    excerpt:
      "Checklist complète pour mettre votre site en conformité avec le RGPD et éviter les sanctions.",
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
    author: "Hugo Allou",
    publishedAt: "2023-12-10",
    category: "Légal",
    tags: ["RGPD", "conformité", "données personnelles"],
    readingTime: 6,
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--color-gray-50)] to-white">
        <div className="container text-center">
          <Badge variant="primary" className="mb-4">
            Blog
          </Badge>
          <h1 className="mb-6">
            Conseils & <span className="gradient-text">actualités</span>
          </h1>
          <p className="text-xl text-[var(--color-gray-600)] max-w-3xl mx-auto">
            Retrouvez nos articles sur la création de sites web, le SEO, le
            design et le marketing digital.
          </p>
        </div>
      </section>

      {/* Blog Grid avec filtres */}
      <BlogGrid posts={blogPosts} />

      {/* CTA Contact */}
      <Section background="white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4">Un projet en tête ?</h2>
          <p className="text-[var(--color-gray-600)] mb-8">
            Discutons de votre projet web et voyons comment nous pouvons vous aider à développer votre présence en ligne.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Demander un devis gratuit
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </Section>
    </>
  );
}
