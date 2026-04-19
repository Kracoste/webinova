import Link from "next/link";
import { COMPANY, FOOTER_LINKS } from "@/data/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-secondary)] text-white">
      {/* Section principale */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* Branding + accroche */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block text-2xl font-bold gradient-text mb-3">
              {COMPANY.name}
            </Link>
            <p className="text-[var(--color-gray-400)] leading-relaxed mb-6 max-w-xs">
              Concepteur de sites web indépendant à {COMPANY.city}. Je transforme vos idées en sites qui convertissent.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-[var(--color-gray-400)] hover:text-white transition-colors">
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="text-[var(--color-gray-400)] hover:text-white transition-colors">
                {COMPANY.email}
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gray-400)] mb-5">Navigation</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[var(--color-gray-400)] hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[var(--color-gray-400)] hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones + CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gray-400)] mb-5">Zones d&apos;intervention</h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
              {FOOTER_LINKS.zones.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[var(--color-gray-400)] hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Demander un devis
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[var(--color-gray-500)] text-xs">
            © {currentYear} {COMPANY.name}. Tous droits réservés.
          </p>
          <ul className="flex items-center gap-5 text-xs">
            {FOOTER_LINKS.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[var(--color-gray-500)] hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
