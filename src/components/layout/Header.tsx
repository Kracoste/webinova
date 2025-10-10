import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-lg font-semibold text-zinc-900">
            W
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold uppercase tracking-[0.28em] text-zinc-900">
              Webinova
            </span>
            <span className="text-xs font-medium text-zinc-500">
              Studio digital pour entreprises ambitieuses
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-10 text-sm font-medium text-zinc-500 lg:flex">
          <Link href="/" className="transition-colors hover:text-zinc-900">
            Accueil
          </Link>
          <Link href="/about" className="transition-colors hover:text-zinc-900">
            À propos
          </Link>
          <Link href="/devis" className="transition-colors hover:text-zinc-900">
            Devis & Contact
          </Link>
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <div className="hidden flex-col text-right text-xs font-medium text-zinc-500 md:flex">
            <span>Parlez avec nous</span>
            <a className="text-sm font-semibold text-zinc-900" href="tel:+33123456789">
              01 23 45 67 89
            </a>
          </div>
          <Button href="/devis" className="whitespace-nowrap">
            Demander un devis
          </Button>
        </div>
        <Button href="/devis" className="sm:hidden">
          Devis
        </Button>
      </div>
    </header>
  );
}
