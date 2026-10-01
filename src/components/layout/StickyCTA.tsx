"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY } from "@/data/constants";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

/**
 * Barre d'action fixe en bas d'écran sur mobile :
 * appel en un geste + accès direct au devis.
 * Apparaît après le premier écran pour ne pas gêner le hero.
 */
export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const onContactPage = pathname === "/contact";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden",
        "transition-all duration-500 ease-[var(--ease-out-expo)]",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      )}
      inert={!visible}
    >
      <div className="mx-auto flex max-w-md gap-2 rounded-2xl border border-white/10 bg-[var(--night-900)]/90 p-2 shadow-[0_-10px_40px_-10px_rgba(5,8,20,0.5)] backdrop-blur-xl">
        <a
          href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
          data-track="sticky_appel"
          className={cn(
            "flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 font-semibold text-white",
            onContactPage ? "flex-1" : "px-5"
          )}
        >
          <Icon name="phone" size={18} />
          {onContactPage ? COMPANY.phone : "Appeler"}
        </a>
        {!onContactPage && (
          <Link
            href="/contact"
            data-track="sticky_devis"
            className="btn-shine flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-white font-semibold text-[var(--color-secondary)]"
          >
            Devis gratuit en 48h
            <Icon name="arrow-right" size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}
