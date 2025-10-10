import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire de Webinova, notre mission et notre approche pour créer des sites vitrines sobres et performants.",
};

export default function AboutPage() {
  return (
    <div>
      <div className="mx-auto max-w-5xl px-4 section-padding sm:px-6 lg:px-8">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
            À propos de Webinova
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
            Une équipe pluridisciplinaire dédiée à la réussite digitale des entreprises locales.
          </h1>
          <p className="max-w-3xl text-base text-zinc-600 sm:text-lg">
            Depuis 2018, nous accompagnons dirigeants, artisans et cabinets de conseil pour matérialiser leur vision en ligne. Notre approche : écouter, simplifier et traduire votre valeur en expérience digitale engageante.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface-card space-y-6 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">Notre histoire</p>
            <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
              Webinova est née d&apos;une conviction : les TPE, PME et indépendants méritent des sites web aussi soignés que ceux des grandes marques. Après des années en agence de transformation digitale, nous avons choisi d&apos;adapter ces méthodes à des projets agiles, avec une équipe resserrée et un process maîtrisé de bout en bout.
            </p>
            <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
              Nous construisons une relation long terme : une fois votre site en ligne, nous restons présents pour l&apos;optimiser, le faire évoluer et vous conseiller sur vos prochains leviers de croissance.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="surface-card space-y-4 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">Notre ADN</p>
              <ul className="space-y-3 text-sm text-zinc-700 sm:text-base">
                <li>• Transparence totale sur le process, le budget et les délais.</li>
                <li>• Exigence esthétique et technique pour des expériences fluides.</li>
                <li>• Collaboration étroite : ateliers, feedbacks guidés, livrables structurés.</li>
              </ul>
            </div>
            <div className="rounded-[32px] border border-zinc-900 bg-black p-8 text-white shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">Notre promesse</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                Offrir un site qui reflète votre professionnalisme et propulse votre activité.
              </h2>
              <p className="mt-3 text-sm text-zinc-300">
                Nous capitalisons sur des technologies modernes, une méthodologie éprouvée et une équipe accessible. Chaque projet est piloté par un binôme chef de projet / designer dédié.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Transparence",
              description:
                "Un parcours balisé, des points hebdomadaires et un espace projet partagé pour suivre chaque étape.",
            },
            {
              title: "Exigence",
              description:
                "Une direction artistique minimaliste, centrée sur la lisibilité, la hiérarchie et la performance.",
            },
            {
              title: "Accompagnement",
              description:
                "Support premium post-lancement : évolutions, optimisation SEO local et formation continue.",
            },
          ].map((value) => (
            <div
              key={value.title}
              className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white px-6 py-8 shadow-[0_24px_48px_rgba(17,17,17,0.08)]"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
                {value.title}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">{value.description}</p>
              <span className="absolute -bottom-8 right-6 text-6xl font-bold text-zinc-100">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
