import type { Metadata } from "next";
import { Section, SectionHeader, Card, CardTitle, CardContent, LinkButton, Icon, Badge } from "@/components/ui";
import { CTASection } from "@/components/sections";
import { generatePageMetadata, generateServiceSchema } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Nos Services de Création de Sites Web",
  description:
    "Découvrez nos services de création de sites web : sites vitrines, e-commerce, applications web sur-mesure. Solutions adaptées à chaque budget et besoin.",
  keywords: [
    "création site vitrine",
    "création site e-commerce",
    "application web",
    "refonte site internet",
    "développement web sur-mesure",
  ],
  path: "/services",
});

const services = [
  {
    id: "vitrine",
    title: "Site Vitrine",
    description:
      "Présentez votre activité avec un site web professionnel et moderne qui inspire confiance à vos visiteurs.",
    features: [
      "Design sur-mesure responsive",
      "Optimisation SEO incluse",
      "Formulaire de contact",
      "Intégration Google Analytics",
      "Formation à la gestion",
    ],
    price: "À partir de 700 €",
    icon: "palette" as const,
  },
  {
    id: "ecommerce",
    title: "Site E-commerce",
    description:
      "Vendez vos produits en ligne avec une boutique performante, sécurisée et facile à gérer.",
    features: [
      "Catalogue produits illimité",
      "Paiement sécurisé",
      "Gestion des stocks",
      "Click & Collect possible",
      "Tableau de bord complet",
    ],
    price: "À partir de 5 000 €",
    icon: "rocket" as const,
  },
  {
    id: "webapp",
    title: "Application Web",
    description:
      "Développez une application web sur-mesure pour digitaliser vos processus métier.",
    features: [
      "Développement sur-mesure",
      "Interface intuitive",
      "API et intégrations",
      "Sécurité renforcée",
      "Maintenance incluse",
    ],
    price: "Sur devis",
    icon: "code" as const,
  },
  {
    id: "refonte",
    title: "Refonte de Site",
    description:
      "Modernisez votre site existant pour améliorer son design, ses performances et son référencement.",
    features: [
      "Audit complet de l'existant",
      "Nouveau design moderne",
      "Migration des contenus",
      "Amélioration des performances",
      "Optimisation SEO",
    ],
    price: "À partir de 500 €",
    icon: "search" as const,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD pour les services */}
      {services.map((service) => (
        <script
          key={service.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateServiceSchema(
                service.title,
                service.description,
                service.price
              )
            ),
          }}
        />
      ))}

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--color-gray-50)] to-white">
        <div className="container text-center">
          <Badge variant="primary" className="mb-4">
            Nos services
          </Badge>
          <h1 className="mb-6">
            Des solutions web <span className="gradient-text">sur-mesure</span>
          </h1>
          <p className="text-xl text-[var(--color-gray-600)] max-w-3xl mx-auto">
            Que vous ayez besoin d&apos;un site vitrine, d&apos;une boutique en ligne ou d&apos;une
            application web, nous créons des solutions adaptées à vos objectifs.
          </p>
        </div>
      </section>

      {/* Services */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id} id={service.id} padding="lg" hover>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <Icon name={service.icon} size={28} className="text-white" />
                </div>
                <div>
                  <CardTitle as="h2">{service.title}</CardTitle>
                  <p className="text-[var(--color-primary)] font-semibold mt-1">
                    {service.price}
                  </p>
                </div>
              </div>

              <CardContent>
                <p className="mb-6">{service.description}</p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Icon
                        name="check"
                        size={18}
                        className="text-[var(--color-success)]"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <LinkButton href="/contact" variant="outline" fullWidth>
                  Demander un devis
                </LinkButton>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Avantages */}
      <Section background="gray">
        <SectionHeader
          subtitle="Pourquoi nous choisir"
          title="Notre valeur ajoutée"
          description="Ce qui nous différencie et garantit le succès de votre projet web."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Expertise technique",
              description:
                "Technologies modernes, code propre et performant pour des sites rapides et évolutifs.",
            },
            {
              title: "Accompagnement personnalisé",
              description:
                "Un interlocuteur dédié qui vous guide de la conception au lancement et au-delà.",
            },
            {
              title: "Résultats garantis",
              description:
                "Sites optimisés pour la conversion et le référencement, avec des résultats mesurables.",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-[var(--color-primary)]">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-3">
                {item.title}
              </h3>
              <p className="text-[var(--color-gray-600)]">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
