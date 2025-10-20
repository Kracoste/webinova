import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="border-b border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 section-padding sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="space-y-8">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-[54px]">
            Webinova, créateur de sites internet en Next.js / TypeScript.
          </h1>
          <p className="max-w-xl text-base text-zinc-600 sm:text-lg">
            Webinova concepteur de sites , bâtis sur Next.js et TypeScript. Nous pilotons le cadrage, le contenu et le développement pour que votre présence en ligne inspire confiance dès le premier chargement.
          </p>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Button href="/devis" className="sm:min-w-[200px]">
              Planifier mon diagnostic gratuit
            </Button>
            <Button href="/about" variant="secondary">
              Découvrir l&apos;approche Webinova
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-sm font-semibold text-zinc-900">
                86
              </span>
              <span>Sites vitrines livrés à des entrepreneurs et indépendants</span>
            </div>
            <div>
              Besoin d&apos;un accompagnement spécifique ?
              <a className="ml-2 font-semibold text-zinc-900" href="tel:+33685643340">
                06 85 64 33 40
              </a>
            </div>
          </div>
        </div>
        <div className="relative hidden h-full min-h-[360px] w-full lg:flex">
          <div className="relative flex w-full flex-col justify-between gap-8 rounded-[36px] border border-zinc-200 bg-white p-8 shadow-[0_30px_70px_rgba(17,17,17,0.12)]">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">Processus</p>
              <p className="text-lg font-semibold text-zinc-900">
                Brief express · maquette figée · développement Next.js
              </p>
              <p className="text-sm text-zinc-600">
                Chaque phase est cadrée avec un document de synthèse et une validation conjointe.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="surface-card space-y-2 p-5">
                <p className="text-3xl font-semibold text-zinc-900">97%</p>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Satisfaction client</p>
              </div>
              <div className="surface-card space-y-2 p-5">
                <p className="text-3xl font-semibold text-zinc-900">15 jours</p>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Délai moyen</p>
              </div>
            </div>
            <div className="surface-card flex items-center justify-between px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Suivi</p>
                <p className="text-sm text-zinc-600">Support et évolutions inclus pendant 12 mois.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
