"use client";

import { Section, SectionHeader } from "@/components/ui";
import { STATS, TESTIMONIALS } from "@/data/constants";

export function SocialProofSection() {
  return (
    <Section background="white">
      {/* Statistiques */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
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

      {/* Témoignages - Widget Trustindex avec vrais avis Google */}
      <SectionHeader
        subtitle="Témoignages"
        title="Ce que nos clients disent de nous"
        description="Découvrez les avis authentiques de nos clients sur Google."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-[var(--color-gray-50)] rounded-xl p-6 flex flex-col gap-4">
            <div className="flex gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-[var(--color-gray-600)] flex-1">&ldquo;{t.content}&rdquo;</p>
            <div>
              <p className="font-semibold text-[var(--color-secondary)]">{t.author}</p>
              <p className="text-sm text-[var(--color-gray-400)]">{t.role} – {t.company}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Logos clients */}
      <div className="mt-20">
        <p className="text-[var(--color-gray-400)] text-sm uppercase tracking-wider mb-12 text-center">
          Ils nous font confiance
        </p>
        <div className="flex items-center justify-center">
          <div className="flex items-start justify-between w-full max-w-5xl px-8">
            {/* L'Antunes */}
            <a
              href="https://lantunes.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all hover:scale-105 flex-1 flex justify-center -mt-6"
              aria-label="Voir le site L'Antunes"
            >
              <img 
                src="/images/lantunes2.png" 
                alt="Logo L'Antunes"
                className="h-24 md:h-32 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>

            {/* Atelier LBF */}
            <a
              href="https://atelier-lbf.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all hover:scale-105 flex-1 flex justify-center -mt-4"
              aria-label="Voir le site Atelier LBF"
            >
              <img 
                src="/images/clients/atelier-lbf-logo.png" 
                alt="Logo Atelier LBF"
                className="h-28 md:h-36 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>

            {/* EsyLoads */}
            <a
              href="https://esyloads.com/fr"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all hover:scale-105 flex-1 flex items-center justify-center h-24 md:h-32"
              aria-label="Voir le site EsyLoads"
            >
              <img 
                src="/images/clients/esyloads-logo.png" 
                alt="Logo EsyLoads"
                className="h-10 md:h-14 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
