import Link from "next/link";
import { portfolioItems } from "@/lib/data";

export function Portfolio() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 section-padding sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
              Réalisations sélectionnées
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Des univers digitaux taillés pour la sobriété et la conversion.
            </h2>
          </div>
          <p className="max-w-lg text-sm text-zinc-600 sm:text-base">
            Chaque projet est construit autour d&apos;une ligne éditoriale claire et d&apos;une hiérarchie visuelle lisible. Nous privilégions les palettes neutres, la typographie et l&apos;espace pour créer des expériences intemporelles.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative isolate overflow-hidden rounded-[32px] border border-zinc-200 bg-white p-6 shadow-[0_24px_48px_rgba(17,17,17,0.12)] transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
                <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                <span className="text-[0.7rem] font-medium text-zinc-400">Voir le site →</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-zinc-900">{item.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
