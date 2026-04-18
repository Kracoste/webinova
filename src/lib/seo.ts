import type { Metadata } from "next";
import { COMPANY, SERVICE_AREAS } from "@/data/constants";

// ============================================
// SEO UTILITIES
// ============================================

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://webonia.fr";

interface GenerateMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

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
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/#business`,
    name: COMPANY.name,
    alternateName: "Webonia - Création de sites internet",
    description: COMPANY.description,
    url: BASE_URL,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    image: `${BASE_URL}/og-image.jpg`,
    logo: `${BASE_URL}/logo.png`,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Virement bancaire, Carte de crédit",
    address: {
      "@type": "PostalAddress",
      streetAddress: "16 Rue De Fayle-L'abbesse",
      addressLocality: COMPANY.city,
      postalCode: COMPANY.postalCode,
      addressRegion: COMPANY.region,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.latitude,
      longitude: COMPANY.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:30",
      },
    ],
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: area.name,
    })),
    serviceType: [
      "Création de site internet",
      "Création de site vitrine",
      "Création de site e-commerce",
      "Refonte de site internet",
      "Référencement SEO",
      "Développement web sur-mesure",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de création de sites web",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Site Vitrine",
          },
          price: "700",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Refonte de site",
          },
          price: "500",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Site E-commerce",
          },
          price: "5000",
          priceCurrency: "EUR",
        },
      ],
    },
  };
}

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
      "@type": "ProfessionalService",
      name: COMPANY.name,
      url: BASE_URL,
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: area.name,
    })),
    ...(price && {
      offers: {
        "@type": "Offer",
        price: price.replace(/[^0-9]/g, ""),
        priceCurrency: "EUR",
      },
    }),
  };
}

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
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    datePublished: article.publishedAt,
    image: article.image,
    mainEntityOfPage: article.url,
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateCityServiceSchema(city: {
  name: string;
  postalCode: string;
  latitude: number;
  longitude: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/creation-site-internet/${city.name.toLowerCase()}#business`,
    name: `${COMPANY.name} - Création de sites internet à ${city.name}`,
    description: `Création de sites internet professionnels à ${city.name}. Sites vitrines, e-commerce et refonte pour TPE, artisans et commerçants.`,
    url: BASE_URL,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "16 Rue De Fayle-L'abbesse",
      addressLocality: COMPANY.city,
      postalCode: COMPANY.postalCode,
      addressRegion: COMPANY.region,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.latitude,
      longitude: city.longitude,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      ...(city.postalCode && {
        address: {
          "@type": "PostalAddress",
          postalCode: city.postalCode,
          addressCountry: "FR",
        },
      }),
    },
  };
}
