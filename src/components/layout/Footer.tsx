import Link from "next/link";
import { COMPANY, FOOTER_LINKS } from "@/data/constants";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-secondary)] text-white">
      {/* Section principale */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Colonne 1 : À propos */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-block text-2xl font-bold mb-4 gradient-text"
            >
              {COMPANY.name}
            </Link>
            <p className="text-[var(--color-gray-400)] mb-6 leading-relaxed">
              {COMPANY.description}
            </p>
          </div>

          {/* Colonne 2 : Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Services</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-gray-400)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Entreprise */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Entreprise</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-gray-400)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon
                  name="location"
                  size={20}
                  className="text-[var(--color-primary)] mt-0.5 flex-shrink-0"
                />
                <span className="text-[var(--color-gray-400)]">
                  {COMPANY.address}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-[var(--color-gray-400)] hover:text-white transition-colors"
                >
                  <Icon
                    name="phone"
                    size={20}
                    className="text-[var(--color-primary)]"
                  />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-[var(--color-gray-400)] hover:text-white transition-colors"
                >
                  <Icon
                    name="mail"
                    size={20}
                    className="text-[var(--color-primary)]"
                  />
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[var(--color-gray-400)] text-sm">
              © {currentYear} {COMPANY.name}. Tous droits réservés.
            </p>
            <ul className="flex items-center gap-6 text-sm">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-gray-400)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
