export type PortfolioItem = {
  name: string;
  description: string;
  url: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    name: "Atelier Nova",
    description: "Studio de design intérieur - site vitrine élégant et responsive.",
    url: "https://example.com/atelier-nova",
  },
  {
    name: "Boulangerie Lune",
    description: "Artisan boulanger avec prise de commandes en ligne simplifiée.",
    url: "https://example.com/boulangerie-lune",
  },
  {
    name: "Cabinet Dr. Morel",
    description: "Cabinet médical avec présentation de l'équipe et des services.",
    url: "https://example.com/cabinet-morel",
  },
];

export const metrics = [
  {
    id: "projects",
    label: "Sites livrés",
    suffix: "+",
    value: 86,
  },
  {
    id: "satisfaction",
    label: "Taux de satisfaction",
    suffix: "%",
    value: 97,
  },
  {
    id: "rating",
    label: "Note moyenne Google",
    suffix: "/5",
    value: 4.9,
  },
];
