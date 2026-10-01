import Image from "next/image";
import { LinkButton, Icon } from "@/components/ui";
import { WaveField, HeroScene } from "@/components/motion";
import { COMPANY } from "@/data/constants";

const CLIENT_LOGOS = [
  { src: "/images/clients/lantunes-logo.webp", alt: "L'Antunes", width: 478, height: 226, className: "h-9" },
  { src: "/images/clients/atelier-lbf-logo.webp", alt: "Atelier LBF", width: 865, height: 288, className: "h-9" },
  { src: "/images/clients/esyloads-logo.webp", alt: "EsyLoads", width: 800, height: 151, className: "h-5" },
];

export function HeroSection() {
  const phoneHref = `tel:${COMPANY.phone.replace(/\s/g, "")}`;

  return (
    <section className="grain relative isolate overflow-hidden bg-[var(--night-900)] pb-20 pt-32 text-white md:pb-28 lg:pt-40">
      {/* Arrière-plan : lueurs, grille, particules 3D */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="animate-aurora absolute -left-[10%] -top-[20%] h-[70vh] w-[60vw] rounded-full bg-[radial-gradient(closest-side,rgba(36,71,224,0.55),transparent)] blur-3xl" />
        <div
          className="animate-aurora absolute -right-[10%] top-[10%] h-[60vh] w-[50vw] rounded-full bg-[radial-gradient(closest-side,rgba(109,93,252,0.4),transparent)] blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
        <div className="bg-grid-dark mask-radial absolute inset-0 opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-[62%]">
          <WaveField />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--night-900)] to-transparent" />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          {/* Texte */}
          <div className="relative z-10 text-center lg:text-left">
            <div className="animate-fade-in mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] py-1.5 pl-2 pr-4 text-sm text-white/75 backdrop-blur">
              <span className="rounded-full bg-[linear-gradient(135deg,var(--color-primary),var(--color-accent))] px-2.5 py-0.5 text-xs font-semibold text-white">
                79
              </span>
              {`Créateur de sites web à ${COMPANY.city}`}
              <span className="hidden sm:inline">{" & Deux-Sèvres"}</span>
            </div>

            <h1 className="animate-fade-in stagger-1 mb-6 text-white">
              Création de sites internet qui vous{" "}
              <span className="serif-accent gradient-text-light">apportent des clients</span>
            </h1>

            <p className="animate-fade-in stagger-2 mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/65 md:text-xl lg:mx-0">
              Sites vitrines, e-commerce et refontes pour artisans, commerçants et TPE.
              Un design sur-mesure, rapide sur mobile et pensé pour Google&nbsp;— dès 500&nbsp;€.
            </p>

            <div className="animate-fade-in stagger-3 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <LinkButton href="/contact" variant="white" size="lg" data-track="hero_devis" className="w-full sm:w-auto">
                Obtenir mon devis gratuit
                <Icon name="arrow-right" size={18} className="transition-transform group-hover/btn:translate-x-1" />
              </LinkButton>
              <LinkButton href={phoneHref} variant="glass" size="lg" data-track="hero_appel" className="w-full sm:w-auto">
                <Icon name="phone" size={18} />
                {COMPANY.phone}
              </LinkButton>
            </div>

            <ul className="animate-fade-in stagger-4 mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/55 lg:justify-start">
              {["Réponse sous 48h", "Devis sans engagement", "Hébergement inclus la 1re année"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Icon name="check" size={16} className="text-[var(--color-cyan)]" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Vrais clients */}
            <div className="animate-fade-in stagger-5 mt-12 border-t border-white/[0.08] pt-8">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                Ils m&apos;ont confié leur site
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 lg:justify-start">
                {CLIENT_LOGOS.map((logo) => (
                  <Image
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className={`${logo.className} w-auto opacity-60 brightness-0 invert transition-opacity hover:opacity-100`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Scène 3D */}
          <div className="animate-fade-in stagger-2 relative">
            <HeroScene />
          </div>
        </div>
      </div>
    </section>
  );
}
