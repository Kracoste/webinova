import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { Section, SectionHeader, ScrollReveal, Icon } from "@/components/ui";
import { SpotlightGroup } from "@/components/motion";
import { SERVICE_AREAS, SERVICE_PACKAGES, COMPANY } from "@/data/constants";
import { cn } from "@/lib/utils";

function BentoCard({
  title,
  description,
  children,
  className,
  delay = 0,
}: {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
}) {
  return (
    <ScrollReveal delay={delay} className={cn("h-full", className)}>
      <article className="spotlight flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--color-gray-200)] bg-white shadow-[var(--shadow-sm)] transition-shadow duration-500 hover:shadow-[var(--shadow-lg)]">
        <div className="relative flex min-h-[200px] flex-1 items-center justify-center overflow-hidden bg-[var(--color-gray-50)] bg-grid px-6 pt-8">
          {children}
        </div>
        <div className="p-7">
          <h3 className="mb-2 text-xl">{title}</h3>
          <p className="leading-relaxed text-[var(--color-gray-500)]">{description}</p>
        </div>
      </article>
    </ScrollReveal>
  );
}

/* ---------- Visuel : recherche Google ---------- */
function SerpVisual() {
  const results = [
    { site: "votre-entreprise.fr", title: "Votre métier à Bressuire – Devis gratuit", highlight: true, from: "136px" },
    { site: "annuaire-local.fr", title: "Les 10 meilleurs artisans du 79", from: "-68px" },
    { site: "concurrent.fr", title: "Accueil – Site en construction", from: "-68px" },
  ];

  return (
    <div className="mb-[-1px] w-full max-w-[460px] rounded-t-2xl border border-b-0 border-[var(--color-gray-200)] bg-white p-4 shadow-[var(--shadow-lg)]">
      <div className="mb-4 flex items-center gap-2 rounded-full border border-[var(--color-gray-200)] px-4 py-2.5">
        <Icon name="search" size={16} className="shrink-0 text-[var(--color-gray-400)]" />
        <span
          className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-[var(--color-primary)] pr-0.5 text-sm text-[var(--color-secondary)]"
          style={{ animation: "typing 8s steps(32) infinite, caret 0.8s step-end infinite" }}
        >
          création site internet bressuire
        </span>
      </div>
      <ul className="space-y-2">
        {results.map((r) => (
          <li
            key={r.site}
            className={cn(
              "relative h-[60px] rounded-xl border px-3.5 py-2.5",
              r.highlight
                ? "z-10 border-[var(--color-primary)]/30 bg-[linear-gradient(135deg,rgba(36,71,224,0.08),rgba(109,93,252,0.08))] shadow-[0_8px_24px_-8px_rgba(36,71,224,0.35)]"
                : "border-[var(--color-gray-100)] bg-white"
            )}
            style={{ animation: "serp-rise 8s var(--ease-out-expo) infinite", ["--from" as string]: r.from } as CSSProperties}
          >
            <p className="truncate text-[11px] text-[var(--color-gray-400)]">{r.site}</p>
            <p
              className={cn(
                "truncate text-sm font-medium",
                r.highlight ? "text-[var(--color-primary)]" : "text-[var(--color-gray-500)]"
              )}
            >
              {r.title}
            </p>
            {r.highlight && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)] px-2 py-0.5 text-[10px] font-semibold text-white">
                Vous
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Visuel : téléphone qui défile ---------- */
function PhoneVisual() {
  return (
    <div className="relative mb-[-40px] w-[230px]">
      <div className="absolute -inset-10 rounded-full bg-[radial-gradient(closest-side,rgba(91,123,255,0.25),transparent)]" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[34px] border-[7px] border-[var(--color-secondary)] bg-black shadow-[0_40px_60px_-20px_rgba(10,16,36,0.55)]">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
        <div className="relative aspect-[9/19] overflow-hidden bg-[#faf6f1]">
          <div
            className="absolute inset-x-0 top-0"
            style={{ animation: "phone-scroll 12s var(--ease-out-expo) infinite", ["--scroll-to" as string]: "-62%" } as CSSProperties}
          >
            <Image
              src="/images/projects/lantunes-mobile-long.webp"
              alt="Le site de L'Antunes consulté sur smartphone"
              width={390}
              height={2600}
              sizes="220px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Visuel : jauge de vitesse ---------- */
function SpeedVisual() {
  const r = 52;
  const length = 2 * Math.PI * r;
  return (
    <div className="relative mb-6 h-[140px] w-[140px]">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <defs>
          <linearGradient id="gauge-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#10b981" />
            <stop offset="1" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r={r} fill="none" stroke="var(--color-gray-200)" strokeWidth="8" />
        <circle
          className="gauge-arc"
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="url(#gauge-gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={length}
          style={{ ["--gauge-length" as string]: `${length}`, ["--gauge-target" as string]: `${length * 0.06}` } as CSSProperties}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Icon name="bolt" size={30} className="text-[var(--color-success)]" />
      </div>
    </div>
  );
}

/* ---------- Visuel : carte des villes desservies ---------- */
function MapVisual() {
  const project = (lat: number, lon: number) => ({
    x: ((lon + 1.25) / 1.15) * 250 + 25,
    y: ((47.15 - lat) / 1.05) * 170 + 15,
  });
  const home = project(COMPANY.latitude, COMPANY.longitude);
  const towns = SERVICE_AREAS.filter((a) => a.slug !== "bressuire");

  return (
    <svg viewBox="0 0 300 200" className="mb-2 h-auto w-full max-w-[320px]" role="img" aria-label="Villes desservies autour de Bressuire">
      {towns.map((t) => {
        const p = project(t.latitude, t.longitude);
        return (
          <g key={t.slug}>
            <line
              x1={home.x}
              y1={home.y}
              x2={p.x}
              y2={p.y}
              stroke="var(--color-primary)"
              strokeOpacity="0.35"
              strokeWidth="1"
              strokeDasharray="3 4"
              style={{ animation: "dash-flow 1.6s linear infinite" }}
            />
            <circle cx={p.x} cy={p.y} r="3.5" fill="white" stroke="var(--color-primary)" strokeWidth="1.5" />
            <text x={p.x} y={p.y - 8} textAnchor="middle" fontSize="9" fill="var(--color-gray-500)" fontWeight="500">
              {t.name.replace("Argenton-les-Vallées", "Argenton")}
            </text>
          </g>
        );
      })}
      <circle cx={home.x} cy={home.y} r="6" fill="var(--color-primary)" opacity="0.35" className="animate-ping-soft" style={{ transformOrigin: `${home.x}px ${home.y}px` }} />
      <circle cx={home.x} cy={home.y} r="6" fill="var(--color-primary)" stroke="white" strokeWidth="2" />
      <text x={home.x + 10} y={home.y + 4} fontSize="11" fontWeight="700" fill="var(--color-secondary)">
        Bressuire
      </text>
    </svg>
  );
}

/* ---------- Visuel : tarifs ---------- */
function PricingVisual() {
  return (
    <div className="mb-8 flex w-full max-w-[460px] flex-col gap-3">
      {SERVICE_PACKAGES.map((pkg, i) => (
        <div
          key={pkg.id}
          className={cn(
            "flex items-center justify-between rounded-2xl border bg-white px-5 py-3.5 shadow-[var(--shadow-sm)] transition-transform duration-500",
            pkg.highlighted ? "border-[var(--color-primary)]/30 translate-x-3" : "border-[var(--color-gray-200)]"
          )}
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          <span className="font-medium text-[var(--color-secondary)]">{pkg.name}</span>
          <span className="text-sm text-[var(--color-gray-500)]">
            dès <span className="text-lg font-semibold text-[var(--color-secondary)]">{pkg.price}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

/* ---------- Visuel : accompagnement ---------- */
function SupportVisual() {
  const items = ["Formation à votre site", "Support après livraison", "Maintenance dès 49 €/mois"];
  return (
    <div className="mb-8 w-full max-w-[300px] space-y-3">
      {items.map((label, i) => (
        <div key={label} className="flex items-center justify-between rounded-xl border border-[var(--color-gray-200)] bg-white px-4 py-3 shadow-[var(--shadow-sm)]">
          <span className="text-sm font-medium text-[var(--color-gray-700)]">{label}</span>
          <span
            className="relative h-5 w-9 rounded-full"
            style={{ animation: `toggle-bg 6s ease-in-out ${i * 0.4}s infinite` }}
            aria-hidden="true"
          >
            <span
              className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow"
              style={{ animation: `toggle-on 6s var(--ease-out-expo) ${i * 0.4}s infinite` }}
            />
          </span>
        </div>
      ))}
    </div>
  );
}

export function BenefitsSection() {
  return (
    <Section id="avantages" background="white" className="!pt-0">
      <SectionHeader
        subtitle="Pourquoi Webonia"
        title={
          <>
            Un site qui <span className="serif-accent gradient-text">travaille pour vous</span>, même quand vous dormez
          </>
        }
        description="Un joli site ne suffit pas. Il doit être trouvé sur Google, rassurer en quelques secondes et donner envie de vous appeler."
      />

      <SpotlightGroup className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <BentoCard
          className="lg:col-span-2"
          title="Pensé pour être trouvé sur Google"
          description="Structure, balises, données locales, vitesse : votre site est construit pour ressortir quand vos futurs clients cherchent votre métier près de chez eux."
        >
          <SerpVisual />
        </BentoCard>

        <BentoCard
          className="lg:row-span-2"
          delay={1}
          title="Parfait sur smartphone"
          description="La plupart de vos visiteurs arrivent depuis leur téléphone. Chaque page est conçue pour le pouce d'abord, l'ordinateur ensuite."
        >
          <PhoneVisual />
        </BentoCard>

        <BentoCard
          title="Rapide comme l'éclair"
          description="Un code sur-mesure, sans thème ni extensions lourdes : vos pages s'affichent instantanément."
        >
          <SpeedVisual />
        </BentoCard>

        <BentoCard
          delay={1}
          title="Un interlocuteur local"
          description={`Basé à ${COMPANY.city}, je me déplace chez vous. Pas de centre d'appel, pas de sous-traitance.`}
        >
          <MapVisual />
        </BentoCard>

        <BentoCard
          className="lg:col-span-2"
          title="Des tarifs clairs, affichés"
          description="Pas de devis flou ni de frais cachés. Vous savez dès le départ ce que vous payez, et l'hébergement est inclus la première année."
        >
          <PricingVisual />
        </BentoCard>

        <BentoCard
          delay={1}
          title="Vous n'êtes jamais seul"
          description="Je vous forme à votre site et je reste disponible après la mise en ligne."
        >
          <SupportVisual />
        </BentoCard>
      </SpotlightGroup>
    </Section>
  );
}
