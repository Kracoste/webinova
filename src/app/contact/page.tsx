import type { Metadata } from "next";
import { ContactFormSection, FAQSection, PageHero } from "@/components/sections";
import { generatePageMetadata } from "@/lib/seo";
import { Icon } from "@/components/ui";
import { COMPANY } from "@/data/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact – Devis Gratuit Création Site Internet à Bressuire",
  description:
    "Contactez Webonia à Bressuire pour un devis gratuit sous 48h. Téléphone 06 85 64 33 40, email webonia@outlook.fr. Création de sites internet en Deux-Sèvres.",
  keywords: [
    "devis site internet gratuit Bressuire",
    "contact créateur site web Bressuire",
    "contact agence web Deux-Sèvres",
    "devis création site web Niort",
    "devis site vitrine La Rochelle",
  ],
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Un projet ? <span className="serif-accent gradient-text-light">Parlons-en.</span>
          </>
        }
        description="Remplissez le formulaire ci-dessous ou appelez-moi directement. Devis personnalisé sous 48h, gratuit et sans engagement."
      >
        <a
          href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
          data-track="contact_hero_appel"
          className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 font-semibold text-white backdrop-blur transition-colors hover:bg-white/[0.12]"
        >
          <Icon name="phone" size={18} />
          {COMPANY.phone}
        </a>
      </PageHero>

      <ContactFormSection />
      <FAQSection />
    </>
  );
}
