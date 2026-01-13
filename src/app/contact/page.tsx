import type { Metadata } from "next";
import { ContactFormSection, FAQSection } from "@/components/sections";
import { generatePageMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact - Demandez votre Devis Gratuit",
  description:
    "Contactez Webonia pour discuter de votre projet web. Devis gratuit sous 48h. Création de sites vitrines, e-commerce et applications web sur-mesure.",
  keywords: [
    "contact agence web",
    "devis site internet",
    "demande création site",
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
