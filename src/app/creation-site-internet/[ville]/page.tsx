import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Section,
  SectionHeader,
  Card,
  CardTitle,
  CardContent,
  LinkButton,
  Icon,
  Badge,
} from "@/components/ui";
import { CTASection, FAQSection, PricingSection } from "@/components/sections";
import {
  generatePageMetadata,
  generateCityServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/seo";
import { SERVICE_AREAS, COMPANY, FAQ_ITEMS } from "@/data/constants";

type Params = { ville: string };

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://webonia.fr";

export async function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({ ville: area.slug }));
}

function getCity(slug: string) {
  return SERVICE_AREAS.find((area) => area.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { ville } = await params;
  const city = getCity(ville);
  if (!city) return {};

  return generatePageMetadata({
    title: `Création de Site Internet à ${city.name} – ${COMPANY.name} | Dès 500€`,
    description: `Création de sites internet à ${city.name} (${city.postalCode}). Site vitrine dès 700€, refonte dès 500€, e-commerce sur-mesure. Créateur web local en ${city.department}. Devis gratuit sous 48h.`,
    keywords: [
      `création site internet ${city.name}`,
      `création site web ${city.name}`,
      `créateur site internet ${city.name}`,
      `concepteur site web ${city.name}`,
      `agence web ${city.name}`,
      `développeur web ${city.name}`,
      `site vitrine ${city.name}`,
      `site e-commerce ${city.name}`,
      `refonte site internet ${city.name}`,
      `référencement SEO ${city.name}`,
      `création site artisan ${city.name}`,
      `création site TPE ${city.name}`,
      `création site commerçant ${city.name}`,
    ],
    path: `/creation-site-internet/${city.slug}`,
  });
}

export default async function CityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { ville } = await params;
  const city = getCity(ville);
  if (!city) notFound();

  const pageUrl = `${BASE_URL}/creation-site-internet/${city.slug}`;

  const cityFAQ = [
    {
      question: `Combien coûte la création d'un site internet à ${city.name} ?`,
      answer: `Chez Webonia, nos tarifs à ${city.name} débutent à 500 € pour une refonte, 700 € pour un site vitrine professionnel et 5 000 € pour un site e-commerce. Chaque devis est gratuit et adapté à votre projet spécifique.`,
    },
    {
      question: `Quels types d'entreprises accompagnez-vous à ${city.name} ?`,
      answer: `Nous créons des sites internet pour les TPE, artisans, commerçants, professions libérales et PME de ${city.name} et ${city.department}. Chaque projet est sur-mesure et adapté au secteur d'activité.`,
    },
    {
      question: `Intervenez-vous physiquement à ${city.name} ?`,
      answer: `Oui, Webonia est basé à Bressuire et se déplace régulièrement à ${city.name} et dans toute la région. Les échanges peuvent aussi se faire en visio pour plus de flexibilité.`,
    },
    {
      question: `Combien de temps pour créer un site internet à ${city.name} ?`,
      answer: `Un site vitrine est livré en 2 à 4 semaines, une refonte en 2 à 3 semaines, et un site e-commerce en 6 à 12 semaines. Un planning précis est défini dès le début du projet.`,
    },
    {
      question: `Mon site sera-t-il bien référencé à ${city.name} ?`,
      answer: `Oui, tous nos sites incluent une optimisation SEO local ciblée sur ${city.name} : balises géolocalisées, données structurées LocalBusiness, intégration Google Maps, optimisation Google Business Profile et contenus orientés recherche locale.`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCityServiceSchema(city)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: BASE_URL },
              {
                name: "Création de site internet",
                url: `${BASE_URL}/services`,
              },
              { name: city.name, url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(cityFAQ)),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--color-gray-50)] to-white">
        <div className="container text-center">
          <Badge variant="primary" className="mb-4">
            {city.department}
          </Badge>
          <h1 className="mb-6">
            Création de site internet à{" "}
            <span className="gradient-text">{city.name}</span>
          </h1>
          <p className="text-xl text-[var(--color-gray-600)] max-w-3xl mx-auto">
            Webonia accompagne les entreprises, artisans et commerçants de{" "}
            {city.name} ({city.postalCode}) dans la création de leur site
            internet professionnel. Sites vitrines, e-commerce et refontes
            optimisés pour le référencement local.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <LinkButton href="/contact" variant="primary" size="lg">
              Demander un devis gratuit
            </LinkButton>
            <LinkButton href="/realisations" variant="outline" size="lg">
              Voir nos réalisations
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Pourquoi Webonia à [ville] */}
      <Section background="white">
        <SectionHeader
          subtitle={`Votre créateur web à ${city.name}`}
          title={`Pourquoi choisir Webonia à ${city.name} ?`}
          description={`Un créateur de sites internet local, réactif et à l'écoute des entreprises de ${city.department}.`}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Créateur local",
              description: `Basé à Bressuire, je me déplace à ${city.name} pour des échanges en direct et un suivi personnalisé de votre projet.`,
              icon: "search" as const,
            },
            {
              title: "Référencement local",
              description: `Votre site est optimisé pour apparaître sur Google quand vos clients cherchent vos services à ${city.name}.`,
              icon: "rocket" as const,
            },
            {
              title: "Sur-mesure & évolutif",
              description: `Fini les templates génériques. Votre site reflète votre identité et évolue avec vos besoins à ${city.name}.`,
              icon: "palette" as const,
            },
          ].map((item) => (
            <Card key={item.title} padding="lg" hover>
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                <Icon name={item.icon} size={28} className="text-white" />
              </div>
              <CardTitle as="h2">{item.title}</CardTitle>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contexte local */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6 text-center">
            Un site internet adapté au marché de {city.name}
          </h2>
          <div className="prose max-w-none text-[var(--color-gray-700)] space-y-4">
            <p>
              À <strong>{city.name}</strong> ({city.postalCode},{" "}
              {city.department}), la concurrence locale est réelle. Qu&apos;il
              s&apos;agisse d&apos;un artisan, d&apos;un commerçant ou
              d&apos;une TPE, avoir un site internet professionnel et bien
              référencé est aujourd&apos;hui essentiel pour se démarquer.
            </p>
            <p>
              Webonia conçoit des sites internet pensés pour les entreprises de{" "}
              {city.name} : design moderne, chargement rapide, mobile-friendly
              et surtout optimisés pour le <strong>SEO local</strong>. Votre
              objectif ? Apparaître dans les premiers résultats Google lorsque
              vos prospects cherchent vos services à {city.name}.
            </p>
            <p>
              Chaque projet commence par une analyse de votre marché local,
              votre concurrence et vos objectifs. Nous définissons ensemble la
              meilleure stratégie pour transformer votre site en véritable
              outil commercial à {city.name}.
            </p>
            <h3 className="mt-8">
              Nos services de création de site à {city.name}
            </h3>
            <ul className="space-y-2">
              <li>
                <strong>Site vitrine à {city.name}</strong> – Idéal pour les
                artisans, professions libérales et TPE souhaitant afficher leur
                expertise.
              </li>
              <li>
                <strong>Site e-commerce à {city.name}</strong> – Pour vendre
                vos produits en ligne avec une boutique performante et
                sécurisée.
              </li>
              <li>
                <strong>Refonte de site à {city.name}</strong> – Modernisez
                votre site existant pour améliorer design, performances et
                référencement.
              </li>
              <li>
                <strong>Référencement SEO local à {city.name}</strong> –
                Optimisation Google Business Profile, contenus géolocalisés et
                stratégie de mots-clés locaux.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <PricingSection />

      {/* FAQ spécifique ville */}
      <Section background="white">
        <SectionHeader
          subtitle="Questions fréquentes"
          title={`Création de site internet à ${city.name} : vos questions`}
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {cityFAQ.map((item, i) => (
            <Card key={i} padding="md">
              <CardTitle as="h3">{item.question}</CardTitle>
              <CardContent>
                <p>{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Maillage interne vers autres villes */}
      <Section background="gray">
        <SectionHeader
          title="Nous intervenons aussi dans ces villes"
          description="Création de sites internet dans toute la région."
        />
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {SERVICE_AREAS.filter((a) => a.slug !== city.slug).map((area) => (
            <a
              key={area.slug}
              href={`/creation-site-internet/${area.slug}`}
              className="px-5 py-2 bg-white border border-[var(--color-gray-200)] rounded-full hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition"
            >
              Création de site internet à {area.name}
            </a>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
