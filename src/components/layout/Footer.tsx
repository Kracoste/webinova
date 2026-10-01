import Link from "next/link";
import { COMPANY, FOOTER_LINKS, LEGAL, SERVICE_AREAS } from "@/data/constants";
import { Logo } from "@/components/ui";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneHref = `tel:${COMPANY.phone.replace(/\s/g, "")}`;

  return (
    <footer className="grain relative isolate overflow-hidden bg-[var(--night-950)] pb-24 text-white lg:pb-0">
      <div
        className="absolute left-1/2 top-0 -z-10 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(36,71,224,0.35),transparent)] blur-2xl"
        aria-hidden="true"
      />

      <div className="container pt-20">
        {/* Accroche */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/[0.08] pb-14 md:flex-row md:items-end">
          <p className="max-w-2xl text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-white md:text-5xl">
            Un projet en tête ?{" "}
            <span className="serif-accent gradient-text-light">Parlons-en.</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              data-track="footer_devis"
              className="btn-shine inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 font-semibold text-[var(--color-secondary)] transition-transform hover:-translate-y-0.5"
            >
              Demander un devis
              <Icon name="arrow-right" size={16} />
            </Link>
            <a
              href={phoneHref}
              data-track="footer_appel"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-6 font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Icon name="phone" size={16} />
              {COMPANY.phone}
            </a>
          </div>
        </div>

        {/* Colonnes */}
        <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr]">
          <div>
            <Link href="/" className="inline-block" aria-label={`${COMPANY.name} - Accueil`}>
              <Logo gradientId="logo-footer" />
            </Link>
            <p className="mt-5 max-w-xs leading-relaxed text-white/50">
              Concepteur de sites web indépendant à {COMPANY.city}. Des sites sur-mesure qui
              transforment vos visiteurs en clients.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a href={`mailto:${COMPANY.email}`} className="text-white/60 transition-colors hover:text-white">
                {COMPANY.email}
              </a>
              <span className="text-white/40">{COMPANY.address}</span>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Services</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Webonia</h3>
            <ul className="space-y-3">
              {[{ label: "Réalisations", href: "/realisations" }, ...FOOTER_LINKS.company].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Création de site internet à
            </h3>
            <ul className="flex flex-wrap gap-2">
              {SERVICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/creation-site-internet/${area.slug}`}
                    className="inline-block rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/65 transition-colors hover:border-white/30 hover:text-white"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] py-6 md:flex-row">
          <p className="text-xs text-white/40">
            © {currentYear} {COMPANY.name} · {LEGAL.owner} EI · SIRET {LEGAL.siret}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-5 text-xs">
            {FOOTER_LINKS.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/40 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Logo géant en filigrane */}
      <div
        className="pointer-events-none select-none overflow-hidden text-center text-[22vw] font-semibold leading-[0.8] tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.08)] mask-fade-b"
        aria-hidden="true"
      >
        {COMPANY.name}
      </div>
    </footer>
  );
}
