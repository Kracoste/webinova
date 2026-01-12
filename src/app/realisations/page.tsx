import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui";
import { Badge } from "@/components/ui";
import { CTASection, ProjectsGrid } from "@/components/sections";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Nos Réalisations - Portfolio de Sites Web",
  description:
    "Découvrez notre portfolio de sites web : sites vitrines, e-commerce et applications web réalisés pour nos clients. Inspirez-vous de nos créations.",
  keywords: [
    "portfolio agence web",
    "réalisations sites web",
    "exemples sites internet",
    "projets web",
  ],
  path: "/realisations",
});

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--color-gray-50)] to-white">
        <div className="container text-center">
          <Badge variant="primary" className="mb-4">
            Portfolio
          </Badge>
          <h1 className="mb-6">
            Nos <span className="gradient-text">réalisations</span>
          </h1>
          <p className="text-xl text-[var(--color-gray-600)] max-w-3xl mx-auto">
            Découvrez une sélection de projets web que nous avons réalisés pour
            nos clients. Chaque projet est unique et conçu sur-mesure.
          </p>
        </div>
      </section>

      {/* Filtres + Grille de projets */}
      <ProjectsGrid />

      {/* Stats */}
      <Section background="gray">
        <SectionHeader
          subtitle="En chiffres"
          title="Des résultats concrets"
          description="Nos projets génèrent de la valeur mesurable pour nos clients."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "150+", label: "Projets livrés" },
            { value: "95%", label: "Clients satisfaits" },
            { value: "+200%", label: "Trafic moyen généré" },
            { value: "48h", label: "Délai de réponse" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <p className="text-[var(--color-gray-500)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
