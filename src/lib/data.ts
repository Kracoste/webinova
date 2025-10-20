export type PortfolioItem = {
  name: string;
  description: string;
  url: string;
  image: string;
  imageAlt: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    name: "Restaurant Antunes",
    description:
      "Site vitrine de lantunes.fr : menu de saison, présentation de la maison et informations pratiques.",
    url: "https://www.lantunes.fr",
    image: "/portfolio/lantunes.png",
    imageAlt: "Aperçu du site lantunes.fr affiché sur un écran d'ordinateur",
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
