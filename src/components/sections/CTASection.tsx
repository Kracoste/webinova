import { Section, LinkButton } from "@/components/ui";
import { COMPANY } from "@/data/constants";

export function CTASection() {
  return (
    <Section background="white" className="relative overflow-hidden">
      {/* Background decoratif */}
      <div
        className="absolute inset-0 gradient-bg opacity-95"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
        <h2 className="text-white mb-6">
          Prêt à donner vie à votre projet web ?
        </h2>

        <p className="text-white/80 text-xl mb-10 leading-relaxed">
          Discutons de votre projet et créons ensemble le site web qui fera
          décoller votre activité. Devis gratuit sous 48h.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <LinkButton
            href="/contact"
            variant="outline"
            size="lg"
            className="!bg-white !text-[var(--color-primary)] !border-white hover:!bg-[var(--color-gray-100)]"
          >
            Demander un devis gratuit
          </LinkButton>

          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-white/80 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            ou appelez-nous : {COMPANY.phone}
          </a>
        </div>

        {/* Réassurance */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Devis gratuit sans engagement
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Réponse sous 48h
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Support réactif
          </span>
        </div>
      </div>
    </Section>
  );
}
