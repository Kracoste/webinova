// ============================================
// TYPES - Définitions TypeScript centralisées
// ============================================

/** Lien de navigation */
export interface NavLink {
  label: string;
  href: string;
}

/** Package/Offre de service */
export interface ServicePackage {
  id: string;
  name: string;
  description: string;
  price: string;
  priceNote?: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
}

/** Témoignage client */
export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

/** Réalisation / Projet du portfolio */
export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  url?: string;
  technologies: string[];
}

/** Étape du processus */
export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

/** Question FAQ */
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

/** Statistique */
export interface Stat {
  id: string;
  value: string;
  label: string;
}

/** Données du formulaire de contact */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget?: string;
  message: string;
}

/** Réponse API générique */
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

/** Metadata SEO pour une page */
export interface PageSEO {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
}

/** Article de blog */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  readingTime: number;
}
