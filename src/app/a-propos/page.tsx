import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeader, Badge, Icon } from "@/components/ui";
import { CTASection } from "@/components/sections";
import { generatePageMetadata } from "@/lib/seo";
import { COMPANY, STATS } from "@/data/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "À Propos - Notre Agence Web",
  description:
    "Découvrez Webonia, fondée par Hugo Allou, expert en développement web et création de sites performants.",
  keywords: [
    "agence web",
    "Hugo Allou développeur",
    "création sites internet",
  ],
  path: "/a-propos",
});

const founder = {
  name: "Hugo Allou",
  role: "Fondateur & Développeur Web",
  bio: "Passionné par le développement web et les technologies modernes, je crée des sites web performants et sur-mesure pour accompagner les entreprises dans leur transformation digitale.",
};

const values = [
  {
    title: "Excellence",
    description:
      "Nous ne livrons que des projets dont nous sommes fiers. Chaque détail compte.",
    icon: "star" as const,
  },
  {
    title: "Transparence",
    description:
      "Communication claire, devis détaillés, pas de mauvaise surprise. Vous savez toujours où en est votre projet.",
    icon: "check" as const,
  },
  {
    title: "Accompagnement",
    description:
      "Nous vous guidons de A à Z et restons disponibles après la livraison pour vous accompagner.",
    icon: "rocket" as const,
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--color-gray-50)] to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">
              À propos
            </Badge>
            <h1 className="mb-6">
              Une équipe <span className="gradient-text">passionnée</span> à
              votre service
            </h1>
            <p className="text-xl text-[var(--color-gray-600)]">
              Nous sommes une équipe de développeurs, designers et experts
              marketing unis par une mission : créer des sites web qui génèrent
              des résultats concrets pour nos clients.
            </p>
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-wider mb-3 block">
              Notre histoire
            </span>
            <h2 className="mb-6">
              Depuis 2019, nous aidons les entreprises à réussir en ligne
            </h2>
            <div className="space-y-4 text-lg text-[var(--color-gray-600)]">
              <p>
                Webonia est née d&apos;une conviction simple : trop d&apos;entreprises
                se retrouvent avec des sites web qui ne convertissent pas, mal
                référencés, ou difficiles à maintenir.
              </p>
              <p>
                Ma mission est de changer cela en proposant des sites web
                pensés pour la performance : rapides, bien référencés, et surtout
                conçus pour transformer vos visiteurs en clients.
              </p>
              <p>
                Aujourd&apos;hui, j&apos;ai accompagné de nombreuses entreprises dans
                leur transformation digitale, avec un engagement total pour leur réussite.
              </p>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative aspect-[4/3] bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 rounded-2xl overflow-hidden">
            <Image
              src="/web1.webp"
              alt="Équipe Webonia"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section background="gray">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <p className="text-[var(--color-gray-500)] font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Nos valeurs */}
      <Section background="white">
        <SectionHeader
          subtitle="Nos valeurs"
          title="Ce qui guide notre travail"
          description="Des principes simples qui font la différence dans chaque projet."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="text-center p-8 rounded-xl bg-[var(--color-gray-50)] hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center">
                <Icon name={value.icon} size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-3">
                {value.title}
              </h3>
              <p className="text-[var(--color-gray-600)]">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* L'équipe */}
      <Section id="equipe" background="gray">
        <SectionHeader
          subtitle="Fondateur"
          title="L'expert derrière vos projets"
          description="Un développeur passionné dédié à la réussite de votre projet web."
        />

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
            {/* Avatar placeholder */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center">
              <span className="text-4xl font-bold text-white">
                {founder.name.charAt(0)}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-secondary)] mb-2">
              {founder.name}
            </h3>
            <p className="text-[var(--color-primary)] text-base font-medium mb-4">
              {founder.role}
            </p>
            <p className="text-[var(--color-gray-500)]">{founder.bio}</p>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
