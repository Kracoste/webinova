"use client";

import { Section, SectionHeader, Card, Icon } from "@/components/ui";
import { TESTIMONIALS, STATS } from "@/data/constants";

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

      {/* Témoignages */}
      <SectionHeader
        subtitle="Témoignages"
        title="Ce que nos clients disent de nous"
        description="Découvrez les retours de nos clients sur leur expérience avec Webonia."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial) => (
          <Card key={testimonial.id} hover padding="lg">
            {/* Étoiles */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Icon
                  key={i}
                  name="star"
                  size={20}
                  className="text-amber-400 fill-amber-400"
                />
              ))}
            </div>

            {/* Citation */}
            <blockquote className="text-[var(--color-gray-600)] mb-6 leading-relaxed">
              &ldquo;{testimonial.content}&rdquo;
            </blockquote>

            {/* Auteur */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white font-bold"
                aria-hidden="true"
              >
                {testimonial.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-[var(--color-secondary)]">
                  {testimonial.author}
                </p>
                <p className="text-sm text-[var(--color-gray-500)]">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </Card>
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
