import { LinkButton } from "@/components/ui";
import { COMPANY } from "@/data/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[var(--color-gray-50)] via-white to-blue-50 -z-10"
        aria-hidden="true"
      />

      {/* Decorative elements */}
      <div
        className="absolute top-20 right-0 w-[600px] h-[600px] bg-[var(--color-primary)]/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-accent)]/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse" />
            Agence web créative basée à Bréssuire
          </div>

          {/* Titre principal */}
          <h1 className="mb-6 animate-fade-in stagger-1">
            Des sites web qui{" "}
            <span className="gradient-text">convertissent</span>{" "}
            vos visiteurs en clients
          </h1>

          {/* Sous-titre */}
          <p className="text-xl md:text-2xl text-[var(--color-gray-600)] mb-10 max-w-2xl mx-auto animate-fade-in stagger-2">
            {COMPANY.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in stagger-3">
            <LinkButton href="/contact" variant="primary" size="lg">
              Demander un devis gratuit
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </LinkButton>
            <LinkButton href="/realisations" variant="outline" size="lg">
              Voir nos réalisations
            </LinkButton>
          </div>

          {/* Social proof rapide */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-[var(--color-gray-500)] animate-fade-in stagger-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-gray-300)] to-[var(--color-gray-400)] border-2 border-white"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="font-medium">+150 clients satisfaits</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-[var(--color-gray-300)]" />
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="font-medium ml-1">4.9/5 sur Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
