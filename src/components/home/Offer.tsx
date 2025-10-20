import { Button } from "@/components/ui/Button";

const inclusions = [
  "Design d'interface exclusif et responsive",
  "Développement Next.js optimisé SEO et performance",
  "Configuration des formulaires, analytics et sécurité",
  "Support et évolutions pendant 12 mois",
];

const forfaitExtras = [
  "1 à 2 pages structurées pour convaincre et rassurer",
  "Performances Core Web Vitals conformes",
  "Livraison en 15 à 20 jours ouvrés",
];

export function Offer() {
  return (
    <section id="offre">
      <div className="mx-auto max-w-6xl px-4 section-padding sm:px-6 lg:px-8">
        <div className="surface-card overflow-hidden p-10 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                  Votre site vitrine, pensé pour durer.
                </h2>
              </div>
              <p className="max-w-xl text-base text-zinc-600 sm:text-lg">
                Nous clarifions votre discours, dessinons une interface personnalisée et intégrons votre contenu sur une base technique fiable. 
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {inclusions.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-3xl border border-zinc-200 bg-white p-4">
                    <span className="mt-1 text-sm font-semibold text-zinc-900">—</span>
                    <p className="text-sm text-zinc-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative isolate overflow-hidden rounded-[34px] bg-zinc-900 p-8 text-white sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">
                Forfait vitrine
              </p>
              <p className="mt-6 text-5xl font-semibold">699 € TTC</p>
              <div className="mt-8 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-300">
                  Inclus dans votre forfait
                </p>
                <ul className="space-y-3 text-sm text-zinc-200">
                  {forfaitExtras.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <Button href="/devis" className="mt-8 w-full justify-center" variant="inverted">
                Démarrer mon projet
              </Button>
              <p className="mt-4 text-xs text-zinc-400">
                Projet spécifique (extranet, catalogue, e-commerce) ? Écrivons-nous : webiinova@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
