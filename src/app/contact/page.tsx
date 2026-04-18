import type { Metadata } from "next";
import { ContactFormSection, FAQSection } from "@/components/sections";
import { generatePageMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui";

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
      <section className="pt-32 pb-8 bg-gradient-to-b from-[var(--color-gray-50)] to-white">
        <div className="container text-center">
          <Badge variant="primary" className="mb-4">
            Contact
          </Badge>
          <h1 className="mb-6">
            Parlons de votre <span className="gradient-text">projet</span>
          </h1>
          <p className="text-xl text-[var(--color-gray-600)] max-w-3xl mx-auto">
            Vous avez un projet en tête ? Remplissez le formulaire ci-dessous et
            recevez un devis personnalisé sous 48h. C&apos;est gratuit et sans
            engagement.
          </p>
        </div>
      </section>

      <ContactFormSection />
      <FAQSection />
    </>
  );
}
