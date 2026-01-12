"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, COMPANY } from "@/data/constants";
import { LinkButton } from "@/components/ui";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile quand on redimensionne
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
          aria-label={`${COMPANY.name} - Accueil`}
        >
          <span className="gradient-text">{COMPANY.name}</span>
        </Link>

        {/* Navigation Desktop */}
        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.slice(0, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--color-gray-600)] hover:text-[var(--color-primary)] font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <LinkButton href="/contact" variant="primary" size="md">
            Demander un devis
          </LinkButton>
        </div>

        {/* Menu Burger Mobile */}
        <button
          type="button"
          className="lg:hidden p-2 text-[var(--color-gray-700)] hover:text-[var(--color-primary)]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <Icon name={isMenuOpen ? "close" : "menu"} size={24} />
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-white border-t border-[var(--color-gray-200)] shadow-lg",
          "transition-all duration-300 ease-out overflow-hidden",
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container py-6" aria-label="Navigation mobile">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-[var(--color-gray-700)] hover:text-[var(--color-primary)] font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-[var(--color-gray-200)]">
            <LinkButton
              href="/contact"
              variant="primary"
              fullWidth
              onClick={() => setIsMenuOpen(false)}
            >
              Demander un devis
            </LinkButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
