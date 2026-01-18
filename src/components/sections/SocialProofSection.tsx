"use client";

import { useEffect } from "react";
import { Section, SectionHeader } from "@/components/ui";
import { STATS } from "@/data/constants";

export function SocialProofSection() {
  // Charger le script Trustindex
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/loader.js?7578d6e62662519cd9466c5b90d";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup si nécessaire
      const existingScript = document.querySelector(
        'script[src*="trustindex.io"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

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

      {/* Widget Trustindex - Le script injecte automatiquement le widget ici */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl" id="trustindex-widget" />
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
