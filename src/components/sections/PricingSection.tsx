"use client";

import { useState } from "react";
import { Section, SectionHeader, LinkButton, Badge, Icon, ScrollReveal } from "@/components/ui";
import { SERVICE_PACKAGES } from "@/data/constants";

export function PricingSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <Section id="offres" background="gray">
      <SectionHeader
        subtitle="Nos offres"
        title="Des solutions adaptées à chaque projet"
        description="Choisissez l'offre qui correspond à vos besoins. Tous nos sites sont livrés clé en main, optimisés pour le SEO et la performance."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {SERVICE_PACKAGES.map((pkg, i) => (
          <ScrollReveal key={pkg.id} delay={(i % 3) as 0 | 1 | 2 | 3}>
            <div
              onMouseEnter={() => setHoveredId(pkg.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative flex flex-col rounded-2xl p-8 h-full transition-all duration-300 ${
                pkg.highlighted
                  ? "bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white shadow-2xl scale-105"
                  : hoveredId === pkg.id
                  ? "bg-white shadow-xl -translate-y-1"
                  : "bg-white shadow-md"
              }`}
            >
              {pkg.highlighted && (
                <Badge variant="primary" className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[var(--color-primary)] shadow-md">
                  Le plus populaire
                </Badge>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${pkg.highlighted ? "text-white" : "text-[var(--color-secondary)]"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-6 ${pkg.highlighted ? "text-white/80" : "text-[var(--color-gray-500)]"}`}>
                  {pkg.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-bold ${pkg.highlighted ? "text-white" : "gradient-text"}`}>
                    {pkg.price}
                  </span>
                </div>
                {pkg.priceNote && (
                  <p className={`text-sm mt-2 ${pkg.highlighted ? "text-white/70" : "text-[var(--color-gray-400)]"}`}>
                    {pkg.priceNote}
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon
                      name="check"
                      size={18}
                      className={`mt-0.5 flex-shrink-0 ${pkg.highlighted ? "text-white" : "text-[var(--color-success)]"}`}
                    />
                    <span className={`text-sm ${pkg.highlighted ? "text-white/90" : "text-[var(--color-gray-600)]"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {pkg.highlighted ? (
                <a
                  href="/contact"
                  style={{ color: "#0f172a", backgroundColor: "#ffffff" }}
                  className="block w-full text-center px-6 py-3 font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  {pkg.ctaLabel}
                </a>
              ) : (
                <LinkButton href="/contact" variant="outline" fullWidth>
                  {pkg.ctaLabel}
                </LinkButton>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="text-center mt-12">
        <p className="text-[var(--color-gray-500)]">
          Vous avez un projet spécifique ?{" "}
          <a href="/contact" className="text-[var(--color-primary)] font-medium hover:underline">
            Contactez-moi pour un devis personnalisé
          </a>
        </p>
      </ScrollReveal>
    </Section>
  );
}
