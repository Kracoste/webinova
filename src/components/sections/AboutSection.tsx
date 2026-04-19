import { ScrollReveal } from "@/components/ui";
import { COMPANY } from "@/data/constants";

export function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Photo + décorations */}
          <ScrollReveal className="relative flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Cercle décoratif */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20" aria-hidden="true" />
              {/* Initiales en attendant une vraie photo */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white text-6xl font-bold">
                HA
              </div>
              {/* Badge expérience */}
              <div className="absolute -right-4 top-8 bg-white rounded-xl shadow-lg px-4 py-3 text-center">
                <p className="text-2xl font-bold gradient-text">5+</p>
                <p className="text-xs text-[var(--color-gray-500)]">ans d&apos;expérience</p>
              </div>
              {/* Badge projets */}
              <div className="absolute -left-4 bottom-8 bg-white rounded-xl shadow-lg px-4 py-3 text-center">
                <p className="text-2xl font-bold gradient-text">50+</p>
                <p className="text-xs text-[var(--color-gray-500)]">projets livrés</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Texte */}
          <div>
            <ScrollReveal>
              <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest mb-3">
                Qui suis-je ?
              </p>
              <h2 className="mb-6">
                Hugo Allou,{" "}
                <span className="gradient-text">concepteur web</span>{" "}
                indépendant
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p className="text-[var(--color-gray-600)] mb-5 leading-relaxed">
                Basé à {COMPANY.city}, je crée des sites internet sur-mesure pour les artisans, commerçants et TPE qui veulent une présence en ligne qui travaille vraiment pour eux.
              </p>
              <p className="text-[var(--color-gray-600)] mb-8 leading-relaxed">
                Mon approche : comprendre votre métier, vos clients, vos objectifs — et livrer un site qui convertit, pas juste un joli design.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Next.js", "TypeScript", "Tailwind CSS", "SEO", "Performance"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium rounded-full">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Signature SVG */}
              <div className="flex items-center gap-4">
                <svg viewBox="0 0 200 60" className="w-40 h-14 text-[var(--color-secondary)]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-label="Signature Hugo Allou">
                  <path d="M10 45 Q20 10 35 30 Q45 45 55 20" />
                  <path d="M55 20 Q65 5 75 35 Q80 45 90 25" />
                  <path d="M105 40 Q115 15 125 38 Q128 42 132 38" />
                  <path d="M140 38 Q150 12 160 38 Q163 44 168 38" />
                  <path d="M10 52 Q100 54 190 50" strokeOpacity="0.3" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-secondary)]">Hugo Allou</p>
                  <p className="text-sm text-[var(--color-gray-400)]">Concepteur web indépendant</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
