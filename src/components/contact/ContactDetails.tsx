export function ContactDetails() {
  return (
    <div className="surface-card flex h-full flex-col justify-between gap-6 p-8">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
          Coordonnées directes
        </p>
        <h2 className="text-2xl font-semibold text-zinc-900">
          Parlons de votre prochain site.
        </h2>
        <p className="text-sm text-zinc-600 sm:text-base">
          Préférez un échange téléphonique ou une visio ? Contactez-nous directement, notre équipe vous répond dans la journée ouvrée.
        </p>
      </div>
      <div className="space-y-5 text-sm text-zinc-600">
        <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-[0_12px_24px_rgba(17,17,17,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">Téléphone</p>
          <a href="tel:+33123456789" className="mt-2 block text-lg font-semibold text-zinc-900">
            01 23 45 67 89
          </a>
          <p className="text-xs text-zinc-500">Du lundi au vendredi · 9h00 → 18h30</p>
        </div>
        <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-[0_12px_24px_rgba(17,17,17,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">Email</p>
          <a href="mailto:webinova@gmail.com" className="mt-2 block text-lg font-semibold text-zinc-900">
            webinova@gmail.com
          </a>
          <p className="text-xs text-zinc-500">
            Réponse sous 24h avec audit et plan de mise en ligne.
          </p>
        </div>
      </div>
      <div className="rounded-[28px] border border-zinc-900 bg-black p-6 text-sm text-zinc-300 shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">Projet sur-mesure ?</p>
        <p className="mt-3">
          Pour une boutique e-commerce, un portail client ou une application métier, envoyez-nous votre cahier des charges. Nous organisons un workshop dédié pour bâtir la feuille de route.
        </p>
      </div>
    </div>
  );
}
