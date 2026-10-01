import type { Metadata } from "next";
import { CTASection, ProjectsGrid, BenefitsSection, PageHero } from "@/components/sections";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Réalisations – Portfolio Sites Internet Créés à Bressuire",
  description:
    "Découvrez les sites internet créés par Webonia pour des TPE, artisans et commerçants de Bressuire, Niort, La Rochelle et Deux-Sèvres. Sites vitrines, e-commerce et refontes.",
  keywords: [
    "portfolio création site Bressuire",
    "réalisations sites internet Deux-Sèvres",
    "exemples sites web Niort",
    "projets web artisans",
    "sites créés Webonia",
  ],
  path: "/realisations",
});

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Mes <span className="serif-accent gradient-text-light">réalisations</span>
          </>
        }
        description="Une sélection de sites conçus pour mes clients. Chaque projet est unique et pensé sur-mesure pour leur métier."
      />

      {/* Filtres + Grille de projets */}
      <ProjectsGrid />

      <BenefitsSection />

      <CTASection />
    </>
  );
}
