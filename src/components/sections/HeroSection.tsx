import Image from "next/image";
import { LinkButton } from "@/components/ui";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#fafafa] -z-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[var(--color-primary)]/8 rounded-full blur-3xl -z-10" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-accent)]/6 rounded-full blur-3xl -z-10" aria-hidden="true" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Colonne texte */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse" />
              Concepteur de sites internet · Bressuire (79)
            </div>

            <h1 className="mb-6 animate-fade-in stagger-1">
              Des sites web qui{" "}
              <span className="gradient-text">convertissent</span>{" "}
              vos visiteurs en clients
            </h1>

            <p className="text-lg md:text-xl text-[var(--color-gray-600)] mb-10 leading-relaxed animate-fade-in stagger-2">
              Je conçois des sites performants, élégants et optimisés pour le SEO — pour que votre entreprise soit visible et génère des résultats concrets.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in stagger-3">
              <LinkButton href="/contact" variant="primary" size="lg">
                Demander un devis gratuit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </LinkButton>
              <LinkButton href="/realisations" variant="outline" size="lg">
                Voir mes réalisations
              </LinkButton>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-fade-in stagger-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face", alt: "Cliente satisfaite" },
                    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face", alt: "Client satisfait" },
                    { src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=face", alt: "Cliente satisfaite" },
                    { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face", alt: "Client satisfait" },
                  ].map((avatar) => (
                    <Image key={avatar.src} src={avatar.src} alt={avatar.alt} width={36} height={36} className="rounded-full border-2 border-white object-cover" />
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-[var(--color-gray-500)] mt-0.5">+50 clients satisfaits</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne mockup */}
          <div className="relative hidden lg:block animate-fade-in stagger-2">
            {/* Carte flottante haut-gauche */}
            <div className="absolute -left-6 top-12 bg-white rounded-xl shadow-xl p-4 z-10 flex items-center gap-3 animate-fade-in stagger-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[var(--color-gray-400)]">Trafic ce mois</p>
                <p className="text-sm font-bold text-[var(--color-secondary)]">+184%</p>
              </div>
            </div>

            {/* Carte flottante bas-droite */}
            <div className="absolute -right-4 bottom-16 bg-white rounded-xl shadow-xl p-4 z-10 flex items-center gap-3 animate-fade-in stagger-4">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[var(--color-gray-400)]">Site livré</p>
                <p className="text-sm font-bold text-[var(--color-secondary)]">En 3 semaines</p>
              </div>
            </div>

            {/* Mockup navigateur */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-[var(--color-gray-200)]">
              {/* Barre navigateur */}
              <div className="bg-[var(--color-gray-100)] px-4 py-3 flex items-center gap-2 border-b border-[var(--color-gray-200)]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-[var(--color-gray-400)] ml-2">
                  www.lantunes.fr
                </div>
              </div>
              {/* Screenshot du vrai projet */}
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://api.microlink.io/?url=https%3A%2F%2Fwww.lantunes.fr&screenshot=true&meta=false&embed=screenshot.url"
                  alt="Aperçu du site L'Antunes réalisé par Webinova"
                  fill
                  className="object-cover object-top"
                  unoptimized
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
