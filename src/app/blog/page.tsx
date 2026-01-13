import type { Metadata } from "next";
import { Section, Badge } from "@/components/ui";
import { BlogGrid } from "@/components/sections";
import { generatePageMetadata } from "@/lib/seo";
import type { BlogPost } from "@/types";

export const metadata: Metadata = generatePageMetadata({
  title: "Blog - Conseils & Actualités Web",
  description:
    "Conseils, tutoriels et actualités sur la création de sites web, le SEO, le design et le marketing digital. Restez informé avec Webonia.",
  keywords: [
    "blog création site web",
    "conseils SEO",
    "actualités web design",
    "tutoriels développement",
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

      {/* Newsletter */}
      <Section background="white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4">Restez informé</h2>
          <p className="text-[var(--color-gray-600)] mb-8">
            Recevez nos derniers articles et conseils directement dans votre
            boîte mail. Pas de spam, promis !
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg border border-[var(--color-gray-300)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              S&apos;abonner
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}
