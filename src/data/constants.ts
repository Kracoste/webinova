import type {
  NavLink,
  ServicePackage,
  Testimonial,
  ProcessStep,
  FAQItem,
  Stat,
} from "@/types";

// ============================================
// INFORMATIONS ENTREPRISE
// ============================================

export const COMPANY = {
  name: "Webonia",
  tagline: "Création de sites internet à Bressuire (79)",
  description:
    "Webonia, créateur de sites internet à Bressuire dans les Deux-Sèvres. Sites vitrines, e-commerce et refonte pour TPE, artisans et commerçants à Bressuire, Niort, La Rochelle, Thouars, Cerizay, Cholet.",
  email: "webonia@outlook.fr",
  phone: "06 85 64 33 40",
  address: "16 Rue De Fayle-L'abbesse, 79300 Bressuire",
  city: "Bressuire",
  postalCode: "79300",
  region: "Deux-Sèvres",
  latitude: 46.8414,
  longitude: -0.4897,
} as const;

// Zones géographiques desservies (pour SEO local + pages villes)
export const SERVICE_AREAS = [
  {
    slug: "bressuire",
    name: "Bressuire",
    postalCode: "79300",
    department: "Deux-Sèvres (79)",
    latitude: 46.8414,
    longitude: -0.4897,
  },
  {
    slug: "niort",
    name: "Niort",
    postalCode: "79000",
    department: "Deux-Sèvres (79)",
    latitude: 46.3239,
    longitude: -0.4636,
  },
  {
    slug: "la-rochelle",
    name: "La Rochelle",
    postalCode: "17000",
    department: "Charente-Maritime (17)",
    latitude: 46.1603,
    longitude: -1.1511,
  },
  {
    slug: "cerizay",
    name: "Cerizay",
    postalCode: "79140",
    department: "Deux-Sèvres (79)",
    latitude: 46.8225,
    longitude: -0.6697,
  },
  {
    slug: "cholet",
    name: "Cholet",
    postalCode: "49300",
    department: "Maine-et-Loire (49)",
    latitude: 47.0597,
    longitude: -0.8787,
  },
  {
    slug: "thouars",
    name: "Thouars",
    postalCode: "79100",
    department: "Deux-Sèvres (79)",
    latitude: 46.9756,
    longitude: -0.2167,
  },
  {
    slug: "argenton-les-vallees",
    name: "Argenton-les-Vallées",
    postalCode: "79150",
    department: "Deux-Sèvres (79)",
    latitude: 46.9872,
    longitude: -0.4478,
  },
  {
    slug: "parthenay",
    name: "Parthenay",
    postalCode: "79200",
    department: "Deux-Sèvres (79)",
    latitude: 46.6483,
    longitude: -0.2461,
  },
] as const;

// ============================================
// NAVIGATION
// ============================================

export const NAV_LINKS: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  services: [
    { label: "Site Vitrine", href: "/services#vitrine" },
    { label: "Site E-commerce", href: "/services#ecommerce" },
    { label: "Application Web", href: "/services#webapp" },
    { label: "Refonte de Site", href: "/services#refonte" },
  ],
  zones: [
    { label: "Création site internet Bressuire", href: "/creation-site-internet/bressuire" },
    { label: "Création site internet Niort", href: "/creation-site-internet/niort" },
    { label: "Création site internet La Rochelle", href: "/creation-site-internet/la-rochelle" },
    { label: "Création site internet Cerizay", href: "/creation-site-internet/cerizay" },
    { label: "Création site internet Cholet", href: "/creation-site-internet/cholet" },
    { label: "Création site internet Thouars", href: "/creation-site-internet/thouars" },
    { label: "Création site internet Argenton-les-Vallées", href: "/creation-site-internet/argenton-les-vallees" },
    { label: "Création site internet Parthenay", href: "/creation-site-internet/parthenay" },
  ],
  company: [
    { label: "À propos", href: "/a-propos" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/confidentialite" },
    { label: "CGV", href: "/cgv" },
  ],
};

// ============================================
// OFFRES / PACKAGES
// ============================================

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "refonte",
    name: "Refonte de site",
    description:
      "Modernisez votre site existant avec un nouveau design et de meilleures performances.",
    price: "500 €",
    features: [
      "Analyse de l'existant",
      "Nouveau design moderne",
      "Optimisation des performances",
      "Responsive mobile",
      "Optimisation SEO de base",
      "Migration du contenu",
      "Support 30 jours",
    ],
    ctaLabel: "Choisir Refonte",
  },
  {
    id: "vitrine",
    name: "Site Vitrine",
    description:
      "Idéal pour les entrepreneurs et TPE qui souhaitent une présence en ligne professionnelle.",
    price: "700 €",
    features: [
      "Site vitrine 5 pages",
      "Design responsive sur-mesure",
      "Optimisation SEO de base",
      "Formulaire de contact",
      "Formation utilisation",
      "Support 30 jours",
    ],
    highlighted: true,
    ctaLabel: "Choisir Site Vitrine",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    description:
      "Solution complète pour vendre en ligne avec panier, paiement et gestion des stocks.",
    price: "5 000 €",
    features: [
      "Boutique en ligne complète",
      "Design premium personnalisé",
      "Panier & paiement sécurisé",
      "Gestion des produits & stocks",
      "Intégration Stripe/PayPal",
      "Optimisation SEO avancée",
      "Formation administration",
      "Support 90 jours",
    ],
    ctaLabel: "Choisir E-commerce",
  },
];

// ============================================
// TÉMOIGNAGES
// ============================================

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    author: "Marie Dupont",
    role: "Fondatrice",
    company: "Studio Créatif",
    content:
      "Webonia a transformé notre présence en ligne. Le site est magnifique, rapide et nos demandes de devis ont augmenté de 150% en 3 mois.",
    rating: 5,
  },
  {
    id: "2",
    author: "Thomas Bernard",
    role: "Directeur",
    company: "BTP Solutions",
    content:
      "Équipe professionnelle et réactive. Ils ont parfaitement compris nos besoins et livré un site qui reflète notre expertise.",
    rating: 5,
  },
  {
    id: "3",
    author: "Sophie Martin",
    role: "CEO",
    company: "EcoTech France",
    content:
      "Le meilleur investissement pour notre entreprise. Le ROI a été visible dès le premier mois avec une augmentation significative du trafic.",
    rating: 5,
  },
];

// ============================================
// STATISTIQUES
// ============================================

export const STATS: Stat[] = [
  { id: "1", value: "150+", label: "Projets réalisés" },
  { id: "2", value: "98%", label: "Clients satisfaits" },
  { id: "3", value: "5 ans", label: "D'expertise" },
  { id: "4", value: "48h", label: "Temps de réponse" },
];

// ============================================
// PROCESSUS
// ============================================

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Découverte",
    description:
      "Nous analysons vos besoins, votre marché et vos objectifs lors d'un appel stratégique gratuit.",
    icon: "search",
  },
  {
    id: 2,
    title: "Conception",
    description:
      "Nous créons les maquettes de votre site et vous présentons le design pour validation.",
    icon: "palette",
  },
  {
    id: 3,
    title: "Développement",
    description:
      "Nous développons votre site avec les meilleures technologies, optimisé pour la performance.",
    icon: "code",
  },
  {
    id: 4,
    title: "Lancement",
    description:
      "Nous mettons en ligne votre site, vous formons et restons disponibles pour le support.",
    icon: "rocket",
  },
];

// ============================================
// FAQ
// ============================================

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "1",
    question: "Combien de temps faut-il pour créer un site web ?",
    answer:
      "Le délai varie selon la complexité du projet. Un site vitrine prend généralement 2 à 4 semaines, tandis qu'un projet sur-mesure peut prendre 6 à 12 semaines. Nous vous donnons un planning précis dès le début du projet.",
  },
  {
    id: "2",
    question: "Que comprend le prix d'un site web ?",
    answer:
      "Nos tarifs incluent la conception, le développement, l'optimisation SEO de base, la mise en ligne, une formation et un support post-lancement. L'hébergement de la première année est également inclus.",
  },
  {
    id: "3",
    question: "Mon site sera-t-il bien référencé sur Google ?",
    answer:
      "Oui, tous nos sites sont construits avec les bonnes pratiques SEO : structure optimisée, vitesse de chargement, balises meta, données structurées. Nous proposons aussi des prestations SEO avancées pour maximiser votre visibilité.",
  },
  {
    id: "4",
    question: "Puis-je modifier mon site moi-même après la livraison ?",
    answer:
      "Absolument ! Nous vous formons à l'utilisation de votre site. Pour les modifications complexes, nous restons disponibles pour vous accompagner.",
  },
  {
    id: "5",
    question: "Proposez-vous la maintenance du site ?",
    answer:
      "Oui, nous proposons des contrats de maintenance incluant les mises à jour de sécurité, les sauvegardes, le monitoring et le support technique. Les tarifs commencent à 49€/mois.",
  },
  {
    id: "6",
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les virements bancaires et les cartes de crédit.",
  },
];

// ============================================
// OPTIONS FORMULAIRE
// ============================================

export const PROJECT_TYPES = [
  "Site vitrine",
  "Site e-commerce",
  "Application web",
  "Refonte de site",
  "Autre",
];

export const BUDGET_RANGES = [
  "Moins de 500 €",
  "500 € - 1 000 €",
  "1 000 € - 3 000 €",
  "3 000 € - 5 000 €",
  "Plus de 5 000 €",
];
