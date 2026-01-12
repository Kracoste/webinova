import Link from "next/link";
import { LinkButton } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container text-center">
        <div className="max-w-lg mx-auto">
          {/* 404 */}
          <div className="text-[150px] md:text-[200px] font-bold leading-none gradient-text mb-4">
            404
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-secondary)] mb-4">
            Page introuvable
          </h1>

          <p className="text-[var(--color-gray-600)] mb-8">
            Oups ! La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LinkButton href="/" variant="primary">
              Retour à l&apos;accueil
            </LinkButton>
            <LinkButton href="/contact" variant="outline">
              Contactez-nous
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
