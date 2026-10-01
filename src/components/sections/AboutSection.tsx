import { ScrollReveal, Eyebrow, LinkButton, Icon } from "@/components/ui";
import { Tilt } from "@/components/motion";
import { COMPANY } from "@/data/constants";

export function AboutSection() {
  return (
    <section className="overflow-hidden bg-white py-24 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Carte portrait 3D */}
          <ScrollReveal className="relative flex justify-center">
            <div className="absolute h-[420px] w-[420px] rounded-full border border-dashed border-[var(--color-gray-200)] animate-spin-slow" aria-hidden="true">
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)] shadow-[0_0_20px_rgba(36,71,224,0.6)]" />
            </div>

            <Tilt max={10} className="relative w-full max-w-[340px]" innerClassName="rounded-[28px]">
              <div className="grain relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[var(--night-900)] p-8 text-white shadow-[var(--shadow-xl)]">
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(109,93,252,0.6),transparent)]" aria-hidden="true" />
                <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(36,71,224,0.6),transparent)]" aria-hidden="true" />
                <div className="bg-grid-dark absolute inset-0 opacity-60" aria-hidden="true" />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">Concepteur web</span>
                    <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Indépendant
                    </span>
                  </div>

                  <div className="flex h-32 w-32 items-center justify-center self-center rounded-full bg-[linear-gradient(135deg,var(--color-primary),var(--color-accent))] text-5xl font-semibold tracking-[-0.04em] shadow-[0_20px_60px_-10px_rgba(36,71,224,0.8)]">
                    HA
                  </div>

                  <div>
                    <p className="serif-accent text-4xl text-white">Hugo Allou</p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-white/55">
                      <Icon name="location" size={14} />
                      {COMPANY.city}, {COMPANY.region}
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>
          </ScrollReveal>

          {/* Texte */}
          <div>
            <ScrollReveal>
              <Eyebrow className="mb-5">Qui suis-je ?</Eyebrow>
              <h2 className="mb-6">
                Un concepteur web <span className="serif-accent gradient-text">près de chez vous</span>, pas une plateforme
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p className="mb-5 text-lg leading-relaxed text-[var(--color-gray-600)]">
                Basé à {COMPANY.city}, je crée des sites internet sur-mesure pour les artisans, commerçants et TPE
                qui veulent une présence en ligne qui travaille vraiment pour eux.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-[var(--color-gray-600)]">
                Mon approche : comprendre votre métier, vos clients, vos objectifs — et livrer un site qui convertit,
                pas juste un joli design. Vous parlez à la même personne du premier appel à la mise en ligne.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <ul className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Un seul interlocuteur",
                  "Rendez-vous chez vous ou en visio",
                  "Code sur-mesure, sans template",
                  "Le site vous appartient une fois payé",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[var(--color-gray-700)]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                      <Icon name="check" size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <LinkButton href="/a-propos" variant="outline">
                En savoir plus sur moi
                <Icon name="arrow-right" size={16} />
              </LinkButton>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
