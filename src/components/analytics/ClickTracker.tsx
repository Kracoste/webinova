"use client";

import { useEffect } from "react";

type DataLayerEvent = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

/** Envoie un événement à Google Tag Manager */
export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

/**
 * Suit automatiquement les clics qui comptent pour la prospection :
 * - click_phone   : liens tel:
 * - click_email   : liens mailto:
 * - click_devis   : liens vers /contact
 * L'attribut data-track="..." précise l'emplacement (hero, header, sticky…).
 * À déclarer comme conversions dans GTM / GA4.
 */
export function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const location = link.dataset.track || "autre";

      if (href.startsWith("tel:")) {
        trackEvent("click_phone", { click_location: location });
      } else if (href.startsWith("mailto:")) {
        trackEvent("click_email", { click_location: location });
      } else if (href === "/contact" || href.startsWith("/contact#") || href.startsWith("/contact?")) {
        trackEvent("click_devis", { click_location: location });
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
