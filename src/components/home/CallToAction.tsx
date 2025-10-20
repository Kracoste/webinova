import { Button } from "@/components/ui/Button";

export function CallToAction() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 section-padding sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] border border-zinc-900 bg-black px-8 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">
                Passons à l&apos;action
              </p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Confiez-nous votre site, nous le livrons avec soin et précision.
              </h2>
              <p className="text-sm text-zinc-300 sm:text-base">
                Partagez vos objectifs, nous vous envoyons un diagnostic et un devis détaillé sous 24 heures. De la structure aux contenus, nous vous accompagnons pas à pas.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/devis" variant="inverted">
                Réserver un créneau
              </Button>
              <Button
                href="tel:+33685336440"
                variant="inverted"
                className="border border-zinc-900/20 text-zinc-900 hover:bg-zinc-200/60"
              >
                06 85 33 64 40
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
