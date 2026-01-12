import { Section, SectionHeader, Icon, type IconName } from "@/components/ui";
import { PROCESS_STEPS } from "@/data/constants";

export function ProcessSection() {
  return (
    <Section id="process" background="gray">
      <SectionHeader
        subtitle="Notre méthode"
        title="Un processus simple et efficace"
        description="De la première prise de contact au lancement de votre site, nous vous accompagnons à chaque étape."
      />

      <div className="relative">
        {/* Ligne de connexion (desktop) */}
        <div
          className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[var(--color-gray-200)] -translate-y-1/2"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-gray-100)] h-full flex flex-col items-center text-center relative z-10">
                {/* Numéro */}
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white mb-6 shadow-lg">
                  <Icon name={step.icon as IconName} size={28} />
                </div>

                {/* Étape */}
                <span className="text-[var(--color-primary)] font-semibold text-sm mb-2">
                  Étape {step.id}
                </span>

                <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-3">
                  {step.title}
                </h3>

                <p className="text-[var(--color-gray-500)] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecteur mobile */}
              {index < PROCESS_STEPS.length - 1 && (
                <div
                  className="lg:hidden flex justify-center my-4"
                  aria-hidden="true"
                >
                  <svg
                    className="w-6 h-6 text-[var(--color-gray-300)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
