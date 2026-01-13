import { Section, SectionHeader, Card, LinkButton, Badge, Icon } from "@/components/ui";
import { SERVICE_PACKAGES } from "@/data/constants";

export function PricingSection() {
  return (
    <Section id="offres" background="gray">
      <SectionHeader
        subtitle="Nos offres"
        title="Des solutions adaptées à chaque projet"
        description="Choisissez l'offre qui correspond à vos besoins. Tous nos sites sont livrés clé en main, optimisés pour le SEO et la performance."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICE_PACKAGES.map((pkg) => (
          <Card
            key={pkg.id}
            className={`flex flex-col ${
              pkg.highlighted
                ? "border-2 border-[var(--color-primary)] relative"
                : ""
            }`}
            padding="lg"
          >
            {pkg.highlighted && (
              <Badge
                variant="primary"
                className="absolute -top-3 left-1/2 -translate-x-1/2"
              >
                Le plus populaire
              </Badge>
            )}

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-2">
                {pkg.name}
              </h3>
              <p className="text-[var(--color-gray-500)] text-sm mb-4">
                {pkg.description}
              </p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-[var(--color-secondary)]">
                  {pkg.price}
                </span>
              </div>
              {pkg.priceNote && (
                <p className="text-[var(--color-gray-400)] text-sm mt-2">
                  {pkg.priceNote}
                </p>
              )}
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon
                    name="check"
                    size={20}
                    className="text-[var(--color-success)] mt-0.5 flex-shrink-0"
                  />
                  <span className="text-[var(--color-gray-600)]">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <LinkButton
                href="/contact"
                variant={pkg.highlighted ? "primary" : "outline"}
                fullWidth
              >
                {pkg.ctaLabel}
              </LinkButton>
            </div>
          </Card>
        ))}
      </div>

      {/* Note de réassurance */}
      <p className="text-center text-[var(--color-gray-500)] mt-10">
        Vous avez un projet spécifique ?{" "}
        <a
          href="/contact"
          className="text-[var(--color-primary)] font-medium hover:underline"
        >
          Contactez-nous pour un devis personnalisé
        </a>
      </p>
    </Section>
  );
}
