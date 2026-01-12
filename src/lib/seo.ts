import type { Metadata } from "next";
import { COMPANY } from "@/data/constants";

// ============================================
// SEO UTILITIES
// ============================================

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://webinova.fr";

interface GenerateMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Génère les métadonnées SEO pour une page
 */
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = "",
  ogImage = "/og-image.jpg",
  noIndex = false,
}: GenerateMetadataOptions): Metadata {
  const fullTitle = path === "" ? title : `${title} | ${COMPANY.name}`;
  const url = `${BASE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: COMPANY.name }],
    creator: COMPANY.name,
    publisher: COMPANY.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: COMPANY.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

/**
 * Génère le JSON-LD pour LocalBusiness
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BASE_URL,
    name: COMPANY.name,
    description: COMPANY.description,
    url: BASE_URL,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Avenue du Digital",
      addressLocality: "Paris",
      postalCode: "75001",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8566,
      longitude: 2.3522,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      COMPANY.socials.linkedin,
      COMPANY.socials.twitter,
      COMPANY.socials.instagram,
    ],
    priceRange: "€€",
  };
}

/**
 * Génère le JSON-LD pour un Service
 */
export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  price?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "LocalBusiness",
      name: COMPANY.name,
      url: BASE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    ...(price && {
      offers: {
        "@type": "Offer",
        price: price.replace(/[^0-9]/g, ""),
        priceCurrency: "EUR",
      },
    }),
  };
}

/**
 * Génère le JSON-LD pour une FAQ
 */
export function generateFAQSchema(
  items: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Génère le JSON-LD pour un article de blog
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  image: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: BASE_URL,
    },
    datePublished: article.publishedAt,
    image: article.image,
    mainEntityOfPage: article.url,
  };
}
