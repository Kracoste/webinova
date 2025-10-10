export function Footer() {
  return (
    <footer className="border-t border-transparent bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-md space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-zinc-400">
            Webinova
          </p>
          <p className="text-2xl font-semibold tracking-tight">
            Nous façonnons des expériences web sobres et mémorables pour les entreprises locales.
          </p>
        </div>
        <div className="grid w-full gap-4 text-sm text-zinc-300 sm:grid-cols-2 lg:w-auto">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Téléphone
            </p>
            <a href="tel:+33123456789" className="text-base font-semibold text-white hover:text-zinc-200">
              01 23 45 67 89
            </a>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Email
            </p>
            <a href="mailto:contact@webinova.fr" className="text-base font-semibold text-white hover:text-zinc-200">
              contact@webinova.fr
            </a>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Adresse
            </p>
            <p>Studio Webinova · 11 rue de la République · Lyon</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Disponibilités
            </p>
            <p>Lundi — Vendredi · 9h00 → 18h30</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} Webinova. Tous droits réservés.
      </div>
    </footer>
  );
}
