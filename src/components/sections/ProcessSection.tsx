import { Section, SectionHeader, Icon, ScrollReveal, type IconName } from "@/components/ui";
import { PROCESS_STEPS } from "@/data/constants";

const DURATIONS = ["Appel offert", "Vous validez la maquette", "Site vitrine : 2 à 4 sem.", "Formation & support"];

export function ProcessSection() {
  return (
    <Section id="process" background="gray" className="overflow-hidden">
      <SectionHeader
        subtitle="Méthode"
        title={
          <>
            De l&apos;idée au site en ligne, <span className="serif-accent gradient-text">en 4 étapes</span>
          </>
        }
        description="Un processus simple, sans jargon. Vous validez chaque étape avant de passer à la suivante."
      />

      <ScrollReveal className="relative">
        {/* Ligne de progression qui se dessine */}
        <div className="absolute left-0 right-0 top-8 hidden h-px bg-[var(--color-gray-200)] lg:block" aria-hidden="true">
          <div className="draw-x h-full w-full bg-[linear-gradient(90deg,var(--color-primary),var(--color-accent),var(--color-cyan))]" />
        </div>
        <div className="absolute bottom-0 left-8 top-0 w-px bg-[var(--color-gray-200)] lg:hidden" aria-hidden="true">
          <div className="draw-y h-full w-full bg-[linear-gradient(180deg,var(--color-primary),var(--color-accent),var(--color-cyan))]" />
        </div>

        <ol className="relative grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <li key={step.id} className="relative flex gap-6 lg:block">
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-gray-200)] bg-white text-[var(--color-primary)] shadow-[var(--shadow-md)] lg:mb-8">
                <Icon name={step.icon as IconName} size={26} />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-secondary)] font-mono text-[11px] font-semibold text-white">
                  {index + 1}
                </span>
              </div>

              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-primary)]">
                  {DURATIONS[index]}
                </p>
                <h3 className="mb-3 text-2xl">{step.title}</h3>
                <p className="leading-relaxed text-[var(--color-gray-500)]">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </ScrollReveal>
    </Section>
  );
}
