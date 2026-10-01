import { LinkButton, Icon } from "@/components/ui";
import { WaveField } from "@/components/motion";
import { COMPANY } from "@/data/constants";

export function CTASection() {
  return (
    <section className="px-3 py-3 sm:px-4 sm:py-4">
      <div className="grain relative isolate overflow-hidden rounded-[32px] bg-[var(--night-900)] px-6 py-24 text-white md:py-32">
        {/* Décor */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="animate-aurora absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,rgba(36,71,224,0.6),transparent)] blur-2xl" />
          <div className="bg-grid-dark mask-radial absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 h-[55%] opacity-80">
            <WaveField />
          </div>
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-white">
            Prêt à recevoir plus de <span className="serif-accent gradient-text-light">demandes de clients</span> ?
          </h2>

          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl">
            Expliquez-moi votre projet en 2 minutes. Vous recevez un devis clair et gratuit sous 48h,
            sans aucun engagement.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LinkButton href="/contact" variant="white" size="lg" data-track="cta_devis" className="w-full sm:w-auto">
              Demander mon devis gratuit
              <Icon name="arrow-right" size={18} className="transition-transform group-hover/btn:translate-x-1" />
            </LinkButton>
            <LinkButton
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              variant="glass"
              size="lg"
              data-track="cta_appel"
              className="w-full sm:w-auto"
            >
              <Icon name="phone" size={18} />
              {COMPANY.phone}
            </LinkButton>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/50">
            {["Devis gratuit", "Réponse sous 48h", "Sans engagement"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Icon name="check" size={16} className="text-[var(--color-cyan)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
