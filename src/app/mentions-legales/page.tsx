import { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui";
import { COMPANY } from "@/data/constants";

export const metadata: Metadata = {
  title: "Mentions Légales - Éditeur et Hébergeur du Site | Webonia",
  description:
    "Consultez les mentions légales du site Webonia : informations sur l'éditeur Hugo Allou, l'hébergeur Vercel, la propriété intellectuelle et les conditions d'utilisation. Agence web à Bressuire.",
  keywords: [
    "mentions légales",
    "éditeur site web",
    "hébergeur site",
    "webonia mentions",
    "informations légales agence web",
  ],
  openGraph: {
    title: "Mentions Légales | Webonia - Agence Web Bressuire",
    description:
      "Informations légales sur l'éditeur, l'hébergeur et les conditions d'utilisation du site Webonia.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://webonia.fr/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return (
    <main>
      <Section background="white" className="pt-32">
        <SectionHeader
          title="Mentions Légales"
          description="Toutes les informations légales concernant le site internet Webonia, agence de création web basée à Bressuire"
        />

        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 rounded-xl p-6 mb-12">
            <p className="text-[var(--color-gray-600)] leading-relaxed">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la 
              confiance dans l&apos;économie numérique (LCEN), nous mettons à disposition des 
              visiteurs du site <strong>webonia.fr</strong> les présentes mentions légales. 
              La connexion et la navigation sur ce site impliquent l&apos;acceptation intégrale 
              et sans réserve des présentes mentions.
            </p>
          </div>

          {/* Éditeur du site */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">1</span>
              Éditeur du site internet
            </h2>
            <div className="bg-[var(--color-gray-50)] p-8 rounded-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-[var(--color-gray-600)] mb-3">
                    <span className="font-semibold text-[var(--color-secondary)]">Nom de l&apos;entreprise :</span><br />
                    {COMPANY.name}
                  </p>
                  <p className="text-[var(--color-gray-600)] mb-3">
                    <span className="font-semibold text-[var(--color-secondary)]">Statut juridique :</span><br />
                    Auto-entrepreneur (Micro-entreprise)
                  </p>
                  <p className="text-[var(--color-gray-600)] mb-3">
                    <span className="font-semibold text-[var(--color-secondary)]">Responsable de publication :</span><br />
                    Hugo Allou
                  </p>
                  <p className="text-[var(--color-gray-600)]">
                    <span className="font-semibold text-[var(--color-secondary)]">SIRET :</span><br />
                    En cours d&apos;immatriculation
                  </p>
                </div>
                <div>
                  <p className="text-[var(--color-gray-600)] mb-3">
                    <span className="font-semibold text-[var(--color-secondary)]">Adresse du siège :</span><br />
                    {COMPANY.address}
                  </p>
                  <p className="text-[var(--color-gray-600)] mb-3">
                    <span className="font-semibold text-[var(--color-secondary)]">Téléphone :</span><br />
                    <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-[var(--color-primary)] hover:underline">
                      {COMPANY.phone}
                    </a>
                  </p>
                  <p className="text-[var(--color-gray-600)]">
                    <span className="font-semibold text-[var(--color-secondary)]">Email de contact :</span><br />
                    <a href={`mailto:${COMPANY.email}`} className="text-[var(--color-primary)] hover:underline">
                      {COMPANY.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <p className="text-[var(--color-gray-600)] mt-4 leading-relaxed">
              {COMPANY.name} est une agence web spécialisée dans la création de sites internet 
              professionnels, le développement d&apos;applications web sur-mesure et l&apos;optimisation 
              du référencement naturel (SEO). Nous accompagnons les entreprises, artisans et 
              indépendants dans leur transformation digitale depuis Bressuire, dans les Deux-Sèvres.
            </p>
          </section>

          {/* Hébergeur */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">2</span>
              Hébergement du site
            </h2>
            <div className="bg-[var(--color-gray-50)] p-8 rounded-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-[var(--color-gray-600)] mb-3">
                    <span className="font-semibold text-[var(--color-secondary)]">Hébergeur :</span><br />
                    Vercel Inc.
                  </p>
                  <p className="text-[var(--color-gray-600)] mb-3">
                    <span className="font-semibold text-[var(--color-secondary)]">Adresse :</span><br />
                    340 S Lemon Ave #4133<br />
                    Walnut, CA 91789, États-Unis
                  </p>
                </div>
                <div>
                  <p className="text-[var(--color-gray-600)] mb-3">
                    <span className="font-semibold text-[var(--color-secondary)]">Site web :</span><br />
                    <a
                      href="https://vercel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-primary)] hover:underline"
                    >
                      https://vercel.com
                    </a>
                  </p>
                  <p className="text-[var(--color-gray-600)]">
                    <span className="font-semibold text-[var(--color-secondary)]">Contact :</span><br />
                    privacy@vercel.com
                  </p>
                </div>
              </div>
            </div>
            <p className="text-[var(--color-gray-600)] mt-4 leading-relaxed">
              Le site webonia.fr est hébergé sur l&apos;infrastructure cloud de Vercel, une plateforme 
              reconnue pour sa fiabilité, sa rapidité et sa sécurité. Vercel garantit une disponibilité 
              optimale du site grâce à son réseau de distribution de contenu (CDN) mondial et ses 
              protocoles de sécurité avancés (HTTPS, protection DDoS).
            </p>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">3</span>
              Propriété intellectuelle et droits d&apos;auteur
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                L&apos;ensemble du contenu présent sur le site webonia.fr est protégé par le droit 
                d&apos;auteur et les lois françaises et internationales relatives à la propriété 
                intellectuelle. Cela inclut, de manière non exhaustive :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Les textes, articles et contenus rédactionnels</li>
                <li>Les photographies, illustrations et éléments graphiques</li>
                <li>Le logo et l&apos;identité visuelle de {COMPANY.name}</li>
                <li>La structure et l&apos;architecture du site</li>
                <li>Le code source et les développements techniques</li>
                <li>Les bases de données et leur contenu</li>
              </ul>
              <p>
                Toute reproduction, représentation, modification, publication, transmission, 
                dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé 
                que ce soit, et sur quelque support que ce soit est interdite sans l&apos;autorisation 
                écrite préalable de {COMPANY.name}.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                <p className="text-amber-800">
                  <strong>⚠️ Avertissement :</strong> Toute exploitation non autorisée du site ou 
                  de l&apos;un quelconque de ses éléments sera considérée comme constitutive d&apos;une 
                  contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 
                  et suivants du Code de la Propriété Intellectuelle.
                </p>
              </div>
            </div>
          </section>

          {/* Limitation de responsabilité */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">4</span>
              Limitation de responsabilité
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                {COMPANY.name} s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des 
                informations diffusées sur ce site. Cependant, nous ne pouvons garantir 
                l&apos;exactitude, la précision, l&apos;exhaustivité ou l&apos;actualité des informations 
                mises à disposition.
              </p>
              <p>
                En conséquence, {COMPANY.name} décline toute responsabilité :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pour toute imprécision, inexactitude ou omission portant sur les informations disponibles</li>
                <li>Pour tous dommages résultant d&apos;une intrusion frauduleuse d&apos;un tiers</li>
                <li>Pour tout dommage, direct ou indirect, résultant de l&apos;accès ou de l&apos;utilisation du site</li>
                <li>Pour l&apos;interruption ou le dysfonctionnement du site, quelle qu&apos;en soit la cause</li>
                <li>Pour les éventuels virus qui pourraient infecter l&apos;équipement informatique de l&apos;utilisateur</li>
              </ul>
              <p>
                L&apos;utilisateur est seul responsable de l&apos;utilisation qu&apos;il fait du contenu 
                du site et des conséquences qui en découlent.
              </p>
            </div>
          </section>

          {/* Liens hypertextes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">5</span>
              Liens hypertextes et sites externes
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <h3 className="font-semibold text-[var(--color-secondary)] text-lg">Liens sortants</h3>
              <p>
                Le site webonia.fr peut contenir des liens hypertextes vers d&apos;autres sites 
                internet ou ressources externes. Ces liens sont fournis à titre informatif et 
                ne signifient pas que {COMPANY.name} approuve ou contrôle le contenu de ces sites.
              </p>
              <p>
                {COMPANY.name} n&apos;est pas responsable du contenu des sites vers lesquels 
                pointent ces liens et ne saurait être tenu responsable des éventuels dommages 
                ou préjudices résultant de leur utilisation.
              </p>
              
              <h3 className="font-semibold text-[var(--color-secondary)] text-lg mt-6">Liens entrants</h3>
              <p>
                Tout site internet est autorisé à établir un lien vers le site webonia.fr, 
                sous réserve de ne pas utiliser la technique du « framing » ou toute autre 
                technique visant à masquer l&apos;origine du contenu, et de ne pas porter 
                atteinte à l&apos;image de {COMPANY.name}.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">6</span>
              Utilisation des cookies
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                Le site webonia.fr utilise des cookies techniques strictement nécessaires 
                au bon fonctionnement du site. Ces cookies ne collectent aucune donnée 
                personnelle et ne nécessitent pas votre consentement préalable.
              </p>
              <p>
                Pour plus d&apos;informations sur l&apos;utilisation des cookies et la gestion 
                de vos données personnelles, veuillez consulter notre{" "}
                <a href="/confidentialite" className="text-[var(--color-primary)] hover:underline font-medium">
                  Politique de Confidentialité
                </a>.
              </p>
            </div>
          </section>

          {/* Droit applicable */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">7</span>
              Droit applicable et juridiction compétente
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de 
                litige relatif à l&apos;interprétation ou à l&apos;exécution des présentes, et à 
                défaut d&apos;accord amiable, les tribunaux français seront seuls compétents.
              </p>
              <p>
                Pour toute question relative aux présentes mentions légales, vous pouvez 
                nous contacter à l&apos;adresse suivante :{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-[var(--color-primary)] hover:underline font-medium">
                  {COMPANY.email}
                </a>
              </p>
            </div>
          </section>

          {/* Crédits */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">8</span>
              Crédits et remerciements
            </h2>
            <div className="bg-[var(--color-gray-50)] p-8 rounded-xl">
              <div className="space-y-3 text-[var(--color-gray-600)]">
                <p>
                  <span className="font-semibold text-[var(--color-secondary)]">Conception et développement :</span>{" "}
                  {COMPANY.name} - Hugo Allou
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-secondary)]">Technologies utilisées :</span>{" "}
                  Next.js, React, TypeScript, Tailwind CSS
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-secondary)]">Icônes :</span>{" "}
                  Heroicons, Lucide Icons
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-secondary)]">Images :</span>{" "}
                  Unsplash (licence libre de droits)
                </p>
              </div>
            </div>
          </section>

          {/* Date de mise à jour */}
          <div className="text-center pt-8 border-t border-[var(--color-gray-200)]">
            <p className="text-[var(--color-gray-400)] text-sm">
              Dernière mise à jour des mentions légales : <strong>Janvier 2026</strong>
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
