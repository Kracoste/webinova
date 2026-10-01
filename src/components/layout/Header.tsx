"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, COMPANY } from "@/data/constants";
import { LinkButton, Logo } from "@/components/ui";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const phoneHref = `tel:${COMPANY.phone.replace(/\s/g, "")}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile quand on redimensionne ou avec Échap
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={cn(
          "mx-auto flex max-w-[1200px] items-center justify-between rounded-2xl border py-2 pl-4 pr-2 text-white transition-all duration-500",
          isScrolled || isMenuOpen
            ? "border-white/10 bg-[var(--night-900)]/85 shadow-[0_16px_50px_-12px_rgba(5,8,20,0.6)] backdrop-blur-xl"
            : "border-white/[0.07] bg-[var(--night-900)]/55 backdrop-blur-md"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="rounded-lg transition-opacity hover:opacity-85"
          aria-label={`${COMPANY.name} - Accueil`}
        >
          <Logo gradientId="logo-header" />
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {NAV_LINKS.slice(1, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "rounded-full px-4 py-2 text-[15px] font-medium transition-colors",
                isActive(link.href)
                  ? "bg-white/10 text-white"
                  : "text-white/65 hover:bg-white/[0.06] hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions Desktop */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={phoneHref}
            data-track="header_appel"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-[15px] font-medium text-white/80 transition-colors hover:text-white"
          >
            <Icon name="phone" size={16} />
            {COMPANY.phone}
          </a>
          <LinkButton href="/contact" variant="white" size="sm" data-track="header_devis">
            Devis gratuit
            <Icon name="arrow-right" size={16} className="transition-transform group-hover/btn:translate-x-0.5" />
          </LinkButton>
        </div>

        {/* Mobile : appel direct + burger */}
        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={phoneHref}
            data-track="header_appel"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:bg-white/10 hover:text-white"
            aria-label={`Appeler le ${COMPANY.phone}`}
          >
            <Icon name="phone" size={20} />
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:bg-white/10 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <Icon name={isMenuOpen ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        id="mobile-menu"
        className={cn(
          "mx-auto mt-2 max-w-[1200px] overflow-hidden rounded-2xl border border-white/10 bg-[var(--night-900)]/95 text-white shadow-2xl backdrop-blur-xl lg:hidden",
          "transition-all duration-500 ease-[var(--ease-out-expo)]",
          isMenuOpen ? "max-h-[520px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        )}
        inert={!isMenuOpen}
      >
        <nav className="p-3" aria-label="Navigation mobile">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                className={cn(
                  "transition-all duration-500 ease-[var(--ease-out-expo)]",
                  isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                )}
                style={{ transitionDelay: isMenuOpen ? `${80 + i * 40}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-medium transition-colors",
                    isActive(link.href) ? "bg-white/10 text-white" : "text-white/75 hover:bg-white/5"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                  <Icon name="arrow-right" size={18} className="text-white/30" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
            <LinkButton href={phoneHref} variant="glass" data-track="menu_appel" onClick={() => setIsMenuOpen(false)}>
              <Icon name="phone" size={18} />
              Appeler
            </LinkButton>
            <LinkButton href="/contact" variant="white" data-track="menu_devis" onClick={() => setIsMenuOpen(false)}>
              Devis gratuit
            </LinkButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
