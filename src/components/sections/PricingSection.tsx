import { Section, SectionHeader, LinkButton, Icon, ScrollReveal } from "@/components/ui";
import { Tilt } from "@/components/motion";
import { SERVICE_PACKAGES } from "@/data/constants";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <Section id="offres" background="night" className="grain isolate overflow-hidden">
      {/* Décor */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-grid-dark mask-radial absolute inset-0" />
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(36,71,224,0.35),transparent)] blur-2xl" />
      </div>

      <SectionHeader
        dark
        subtitle="Tarifs"
        title={
          <>
            Des prix clairs, <span className="serif-accent gradient-text-light">sans mauvaise surprise</span>
          </>
        }
        description="Tous les sites sont livrés clé en main : design sur-mesure, adaptés au mobile, optimisés pour Google, avec l'hébergement inclus la première année."
      />

      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 lg:gap-8">
        {SERVICE_PACKAGES.map((pkg, i) => (
          <ScrollReveal key={pkg.id} delay={(i % 3) as 0 | 1 | 2} className="h-full">
            <Tilt max={5} className="h-full" innerClassName="rounded-3xl">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-8",
                  pkg.highlighted
                    ? "border-beam bg-[linear-gradient(160deg,rgba(36,71,224,0.35),rgba(109,93,252,0.18)_45%,rgba(255,255,255,0.03))] shadow-[0_40px_100px_-30px_rgba(36,71,224,0.6)] md:-my-4 md:py-12"
                    : "glass-dark"
                )}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-8 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--color-secondary)] shadow-lg">
                    Le plus demandé
                  </span>
                )}

                <h3 className="mb-2 text-xl text-white">{pkg.name}</h3>
                <p className="mb-8 text-sm leading-relaxed text-white/55">{pkg.description}</p>

                <div className="mb-8 flex items-baseline gap-2">
                  <span className="text-sm text-white/50">dès</span>
                  <span className="text-5xl font-semibold tracking-[-0.04em] text-white">{pkg.price}</span>
                </div>

                <ul className="mb-10 flex-grow space-y-3.5">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          pkg.highlighted ? "bg-white text-[var(--color-primary)]" : "bg-white/10 text-[var(--color-cyan)]"
                        )}
                      >
                        <Icon name="check" size={12} />
                      </span>
                      <span className="text-sm text-white/75">{feature}</span>
                    </li>
                  ))}
                </ul>

                <LinkButton
                  href="/contact"
                  variant={pkg.highlighted ? "white" : "glass"}
                  fullWidth
                  data-track={`pricing_${pkg.id}`}
                >
                  {pkg.ctaLabel}
                  <Icon name="arrow-right" size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </LinkButton>
              </div>
            </Tilt>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-14">
        <div className="glass-dark mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl px-6 py-5 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-4">
            <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[var(--color-cyan)] sm:flex">
              <Icon name="shield" size={20} />
            </span>
            <p className="text-sm text-white/70">
              <span className="font-semibold text-white">Maintenance & sécurité dès 49 €/mois.</span>{" "}
              Mises à jour, sauvegardes et support : vous n&apos;avez à vous occuper de rien.
            </p>
          </div>
          <LinkButton href="/contact" variant="glass" size="sm" className="shrink-0" data-track="pricing_sur_mesure">
            Projet sur-mesure
          </LinkButton>
        </div>
      </ScrollReveal>
    </Section>
  );
}
