import type { Metadata } from "next";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Devis & contact",
  description:
    "Demandez votre devis de site vitrine Webiinova et échangez avec notre équipe pour un accompagnement sur-mesure.",
};

export default function ContactPage() {
  return (
    <div>
      <div className="mx-auto max-w-5xl px-4 section-padding sm:px-6 lg:px-8">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
            Devis & contact
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
            -nous la création ou la refonte de votre site.
          </h1>
          <p className="max-w-3xl text-base text-zinc-600 sm:text-lg">
            Détaillez votre activité, vos objectifs et les éléments déjà existants (logo, charte, photos…). Nous vous répondons sous 24 heures avec un diagnostic et un plan d’action personnalisé.
          </p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <ContactDetails />
        </div>
      </div>
    </div>
  );
}
