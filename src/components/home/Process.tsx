const steps = [
  {
    title: "1. Découverte",
    description:
      "Atelier de cadrage pour comprendre vos objectifs, vos clients et votre positionnement.",
  },
  {
    title: "2. Design & rédaction",
    description:
      "Création des maquettes et optimisation du contenu pour convertir vos visiteurs.",
  },
  {
    title: "3. Mise en ligne & suivi",
    description:
      "Intégration, tests, formation et accompagnement post-lancement pendant 12 mois.",
  },
];

export function Process() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 section-padding sm:px-6 lg:px-8">
        <div className="surface-card overflow-hidden p-10 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
                Méthodologie
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                Un accompagnement lisible du diagnostic à la mise en ligne.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-zinc-600 sm:text-base">
              Nous avançons étape par étape, avec des points réguliers et des livrables concrets. Vous gardez le contrôle tout en vous concentrant sur votre activité.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white px-6 py-8 shadow-[0_24px_48px_rgba(17,17,17,0.08)]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
                  {step.title}
                </span>
                <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
                  {step.description}
                </p>
                <span className="absolute -right-6 -top-6 text-7xl font-bold text-zinc-100">
                  {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
