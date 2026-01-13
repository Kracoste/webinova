import { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui";
import { COMPANY } from "@/data/constants";

export const metadata: Metadata = {
  title: "Politique de Confidentialité RGPD - Protection des Données | Webonia",
  description:
    "Découvrez comment Webonia protège vos données personnelles conformément au RGPD. Informations sur la collecte, l'utilisation, la conservation de vos données et vos droits.",
  keywords: [
    "politique confidentialité",
    "RGPD",
    "protection données personnelles",
    "vie privée",
    "cookies",
    "droits utilisateurs",
  ],
  openGraph: {
    title: "Politique de Confidentialité RGPD | Webonia",
    description:
      "Comment nous protégeons vos données personnelles. Vos droits RGPD expliqués clairement.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://webonia.fr/confidentialite",
  },
};

export default function ConfidentialitePage() {
  return (
    <main>
      <Section background="white" className="pt-32">
        <SectionHeader
          title="Politique de Confidentialité"
          description="Comment nous collectons, utilisons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD)"
        />

        <div className="max-w-4xl mx-auto">
          {/* Introduction RGPD */}
          <div className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-secondary)] mb-2">Notre engagement pour votre vie privée</h3>
                <p className="text-[var(--color-gray-600)] leading-relaxed">
                  Chez {COMPANY.name}, la protection de vos données personnelles est une priorité absolue. 
                  Cette politique de confidentialité vous informe de manière transparente sur la façon 
                  dont nous collectons, utilisons et protégeons vos informations, conformément au 
                  Règlement Général sur la Protection des Données (RGPD) du 27 avril 2016 et à la 
                  loi Informatique et Libertés du 6 janvier 1978 modifiée.
                </p>
              </div>
            </div>
          </div>

          {/* Sommaire */}
          <div className="bg-[var(--color-gray-50)] p-6 rounded-xl mb-12">
            <h3 className="font-bold text-[var(--color-secondary)] mb-4">📋 Sommaire</h3>
            <ol className="grid md:grid-cols-2 gap-2 text-[var(--color-gray-600)]">
              <li><a href="#responsable" className="hover:text-[var(--color-primary)]">1. Responsable du traitement</a></li>
              <li><a href="#donnees" className="hover:text-[var(--color-primary)]">2. Données collectées</a></li>
              <li><a href="#finalites" className="hover:text-[var(--color-primary)]">3. Finalités du traitement</a></li>
              <li><a href="#base-legale" className="hover:text-[var(--color-primary)]">4. Base légale</a></li>
              <li><a href="#conservation" className="hover:text-[var(--color-primary)]">5. Durée de conservation</a></li>
              <li><a href="#destinataires" className="hover:text-[var(--color-primary)]">6. Destinataires</a></li>
              <li><a href="#droits" className="hover:text-[var(--color-primary)]">7. Vos droits RGPD</a></li>
              <li><a href="#cookies" className="hover:text-[var(--color-primary)]">8. Cookies et traceurs</a></li>
              <li><a href="#securite" className="hover:text-[var(--color-primary)]">9. Sécurité des données</a></li>
              <li><a href="#reclamation" className="hover:text-[var(--color-primary)]">10. Réclamation CNIL</a></li>
            </ol>
          </div>

          {/* 1. Responsable du traitement */}
          <section id="responsable" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">1</span>
              Responsable du traitement des données
            </h2>
            <div className="bg-[var(--color-gray-50)] p-8 rounded-xl">
              <p className="text-[var(--color-gray-600)] mb-4">
                Le responsable du traitement de vos données personnelles est :
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-[var(--color-gray-600)] mb-3">
                    <span className="font-semibold text-[var(--color-secondary)]">Entreprise :</span><br />
                    {COMPANY.name}
                  </p>
                  <p className="text-[var(--color-gray-600)] mb-3">
                    <span className="font-semibold text-[var(--color-secondary)]">Représentant légal :</span><br />
                    Hugo Allou
                  </p>
                </div>
                <div>
                  <p className="text-[var(--color-gray-600)] mb-3">
                    <span className="font-semibold text-[var(--color-secondary)]">Adresse :</span><br />
                    {COMPANY.address}
                  </p>
                  <p className="text-[var(--color-gray-600)]">
                    <span className="font-semibold text-[var(--color-secondary)]">Email DPO :</span><br />
                    <a href={`mailto:${COMPANY.email}`} className="text-[var(--color-primary)] hover:underline">
                      {COMPANY.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Données collectées */}
          <section id="donnees" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">2</span>
              Données personnelles collectées
            </h2>
            <div className="space-y-6 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                Dans le cadre de notre activité, nous sommes amenés à collecter différentes 
                catégories de données personnelles. Voici le détail des informations que nous 
                pouvons être amenés à traiter :
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[var(--color-gray-50)] p-6 rounded-xl">
                  <h3 className="font-bold text-[var(--color-secondary)] mb-3 flex items-center gap-2">
                    <span className="text-[var(--color-primary)]">👤</span> Données d&apos;identification
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Nom et prénom</li>
                    <li>• Adresse email</li>
                    <li>• Numéro de téléphone</li>
                    <li>• Nom de l&apos;entreprise (le cas échéant)</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-gray-50)] p-6 rounded-xl">
                  <h3 className="font-bold text-[var(--color-secondary)] mb-3 flex items-center gap-2">
                    <span className="text-[var(--color-primary)]">📊</span> Données de navigation
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Adresse IP (anonymisée)</li>
                    <li>• Type de navigateur</li>
                    <li>• Pages visitées</li>
                    <li>• Durée de la visite</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-gray-50)] p-6 rounded-xl">
                  <h3 className="font-bold text-[var(--color-secondary)] mb-3 flex items-center gap-2">
                    <span className="text-[var(--color-primary)]">💼</span> Données de projet
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Description de votre projet</li>
                    <li>• Type de site souhaité</li>
                    <li>• Budget estimé</li>
                    <li>• Délais souhaités</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-gray-50)] p-6 rounded-xl">
                  <h3 className="font-bold text-[var(--color-secondary)] mb-3 flex items-center gap-2">
                    <span className="text-[var(--color-primary)]">📝</span> Données contractuelles
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Historique des échanges</li>
                    <li>• Devis et factures</li>
                    <li>• Contrats signés</li>
                    <li>• Documents de projet</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800">
                  <strong>✓ Notre engagement :</strong> Nous ne collectons que les données 
                  strictement nécessaires à la réalisation de nos services. Nous appliquons 
                  le principe de minimisation des données imposé par le RGPD.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Finalités */}
          <section id="finalites" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">3</span>
              Finalités du traitement
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                Vos données personnelles sont collectées et traitées pour les finalités 
                suivantes, chacune étant clairement définie et justifiée :
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-[var(--color-gray-50)] rounded-lg">
                  <span className="text-2xl">📧</span>
                  <div>
                    <h4 className="font-semibold text-[var(--color-secondary)]">Gestion des demandes de contact</h4>
                    <p className="text-sm mt-1">Répondre à vos questions, demandes de devis et prises de rendez-vous via notre formulaire de contact.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-[var(--color-gray-50)] rounded-lg">
                  <span className="text-2xl">🛠️</span>
                  <div>
                    <h4 className="font-semibold text-[var(--color-secondary)]">Réalisation des prestations</h4>
                    <p className="text-sm mt-1">Exécuter nos services de création de sites web, de refonte et de développement web.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-[var(--color-gray-50)] rounded-lg">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h4 className="font-semibold text-[var(--color-secondary)]">Amélioration de nos services</h4>
                    <p className="text-sm mt-1">Analyser la fréquentation du site et optimiser l&apos;expérience utilisateur.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-[var(--color-gray-50)] rounded-lg">
                  <span className="text-2xl">⚖️</span>
                  <div>
                    <h4 className="font-semibold text-[var(--color-secondary)]">Obligations légales</h4>
                    <p className="text-sm mt-1">Respecter nos obligations comptables, fiscales et légales.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Base légale */}
          <section id="base-legale" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">4</span>
              Base légale du traitement
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                Conformément au RGPD, tout traitement de données personnelles doit reposer 
                sur une base légale. Voici les bases légales sur lesquelles nous fondons 
                nos traitements :
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[var(--color-secondary)] text-white">
                      <th className="p-4 text-left rounded-tl-lg">Traitement</th>
                      <th className="p-4 text-left rounded-tr-lg">Base légale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[var(--color-gray-50)]">
                      <td className="p-4 border-b border-[var(--color-gray-200)]">Formulaire de contact</td>
                      <td className="p-4 border-b border-[var(--color-gray-200)]"><strong>Consentement</strong> (article 6.1.a RGPD)</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-[var(--color-gray-200)]">Exécution des prestations</td>
                      <td className="p-4 border-b border-[var(--color-gray-200)]"><strong>Contrat</strong> (article 6.1.b RGPD)</td>
                    </tr>
                    <tr className="bg-[var(--color-gray-50)]">
                      <td className="p-4 border-b border-[var(--color-gray-200)]">Facturation et comptabilité</td>
                      <td className="p-4 border-b border-[var(--color-gray-200)]"><strong>Obligation légale</strong> (article 6.1.c RGPD)</td>
                    </tr>
                    <tr>
                      <td className="p-4">Statistiques de visite</td>
                      <td className="p-4"><strong>Intérêt légitime</strong> (article 6.1.f RGPD)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 5. Conservation */}
          <section id="conservation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">5</span>
              Durée de conservation des données
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                Vos données personnelles sont conservées pendant une durée limitée et 
                proportionnée à la finalité du traitement :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[var(--color-gray-50)] p-6 rounded-xl border-l-4 border-[var(--color-primary)]">
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2">📨 Demandes de contact</h4>
                  <p className="text-2xl font-bold text-[var(--color-primary)]">3 ans</p>
                  <p className="text-sm mt-1">À compter du dernier contact</p>
                </div>
                
                <div className="bg-[var(--color-gray-50)] p-6 rounded-xl border-l-4 border-[var(--color-primary)]">
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2">👥 Données clients</h4>
                  <p className="text-2xl font-bold text-[var(--color-primary)]">5 ans</p>
                  <p className="text-sm mt-1">Après la fin de la relation commerciale</p>
                </div>
                
                <div className="bg-[var(--color-gray-50)] p-6 rounded-xl border-l-4 border-[var(--color-primary)]">
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2">📄 Documents comptables</h4>
                  <p className="text-2xl font-bold text-[var(--color-primary)]">10 ans</p>
                  <p className="text-sm mt-1">Obligation légale (Code de commerce)</p>
                </div>
                
                <div className="bg-[var(--color-gray-50)] p-6 rounded-xl border-l-4 border-[var(--color-primary)]">
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2">🍪 Données de navigation</h4>
                  <p className="text-2xl font-bold text-[var(--color-primary)]">13 mois</p>
                  <p className="text-sm mt-1">Maximum recommandé par la CNIL</p>
                </div>
              </div>
              
              <p className="mt-4">
                À l&apos;expiration de ces délais, vos données sont définitivement supprimées 
                ou anonymisées de manière irréversible.
              </p>
            </div>
          </section>

          {/* 6. Destinataires */}
          <section id="destinataires" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">6</span>
              Destinataires des données
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                Vos données personnelles sont destinées exclusivement à {COMPANY.name}. 
                Elles ne sont <strong>jamais vendues, louées ou échangées</strong> avec des tiers 
                à des fins commerciales.
              </p>
              
              <p>Elles peuvent être transmises aux catégories de destinataires suivantes :</p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-[var(--color-gray-50)] rounded-lg">
                  <span className="w-10 h-10 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center">🖥️</span>
                  <div>
                    <strong className="text-[var(--color-secondary)]">Hébergeur (Vercel)</strong>
                    <p className="text-sm">Pour l&apos;hébergement sécurisé du site web</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-[var(--color-gray-50)] rounded-lg">
                  <span className="w-10 h-10 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center">📧</span>
                  <div>
                    <strong className="text-[var(--color-secondary)]">Service d&apos;envoi d&apos;emails (Resend)</strong>
                    <p className="text-sm">Pour la gestion des emails de contact</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <p className="text-blue-800">
                  <strong>ℹ️ Note :</strong> Ces sous-traitants sont soumis aux mêmes obligations 
                  de confidentialité et de sécurité que nous, conformément au RGPD. Des contrats 
                  de sous-traitance encadrent strictement l&apos;utilisation de vos données.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Vos droits */}
          <section id="droits" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">7</span>
              Vos droits sur vos données personnelles
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                Conformément au RGPD, vous disposez de droits étendus sur vos données 
                personnelles. Voici l&apos;ensemble de vos droits et comment les exercer :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[var(--color-gray-50)] p-5 rounded-xl">
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2 flex items-center gap-2">
                    <span className="text-[var(--color-primary)]">👁️</span> Droit d&apos;accès
                  </h4>
                  <p className="text-sm">Obtenir la confirmation que vos données sont traitées et en recevoir une copie complète.</p>
                </div>
                
                <div className="bg-[var(--color-gray-50)] p-5 rounded-xl">
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2 flex items-center gap-2">
                    <span className="text-[var(--color-primary)]">✏️</span> Droit de rectification
                  </h4>
                  <p className="text-sm">Corriger des données inexactes ou compléter des données incomplètes.</p>
                </div>
                
                <div className="bg-[var(--color-gray-50)] p-5 rounded-xl">
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2 flex items-center gap-2">
                    <span className="text-[var(--color-primary)]">🗑️</span> Droit à l&apos;effacement
                  </h4>
                  <p className="text-sm">Demander la suppression de vos données (&quot;droit à l&apos;oubli&quot;).</p>
                </div>
                
                <div className="bg-[var(--color-gray-50)] p-5 rounded-xl">
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2 flex items-center gap-2">
                    <span className="text-[var(--color-primary)]">⏸️</span> Droit à la limitation
                  </h4>
                  <p className="text-sm">Geler temporairement l&apos;utilisation de certaines données.</p>
                </div>
                
                <div className="bg-[var(--color-gray-50)] p-5 rounded-xl">
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2 flex items-center gap-2">
                    <span className="text-[var(--color-primary)]">📦</span> Droit à la portabilité
                  </h4>
                  <p className="text-sm">Recevoir vos données dans un format structuré et réutilisable.</p>
                </div>
                
                <div className="bg-[var(--color-gray-50)] p-5 rounded-xl">
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2 flex items-center gap-2">
                    <span className="text-[var(--color-primary)]">🚫</span> Droit d&apos;opposition
                  </h4>
                  <p className="text-sm">Vous opposer à tout moment au traitement de vos données.</p>
                </div>
              </div>
              
              <div className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 rounded-xl p-6 mt-6">
                <h4 className="font-bold text-[var(--color-secondary)] mb-3">📩 Comment exercer vos droits ?</h4>
                <p className="mb-4">
                  Pour exercer l&apos;un de ces droits, envoyez-nous votre demande accompagnée 
                  d&apos;une copie de votre pièce d&apos;identité à :
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`mailto:${COMPANY.email}?subject=Exercice de mes droits RGPD`}
                    className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {COMPANY.email}
                  </a>
                </div>
                <p className="text-sm mt-4 text-[var(--color-gray-500)]">
                  Nous nous engageons à répondre à votre demande dans un délai d&apos;un mois. 
                  Ce délai peut être prolongé de deux mois pour les demandes complexes.
                </p>
              </div>
            </div>
          </section>

          {/* 8. Cookies */}
          <section id="cookies" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">8</span>
              Cookies et technologies de suivi
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                Notre site utilise des cookies, petits fichiers texte stockés sur votre 
                appareil lors de votre visite. Voici les différents types de cookies que 
                nous utilisons :
              </p>
              
              <div className="space-y-4">
                <div className="border border-green-200 bg-green-50 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">ACTIFS</span>
                    <h4 className="font-bold text-green-800">Cookies techniques (strictement nécessaires)</h4>
                  </div>
                  <p className="text-green-700 text-sm">
                    Ces cookies sont indispensables au fonctionnement du site. Ils ne collectent 
                    aucune donnée personnelle et ne nécessitent pas votre consentement.
                  </p>
                </div>
                
                <div className="border border-gray-200 bg-white p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-gray-400 text-white text-xs font-bold rounded-full">NON UTILISÉS</span>
                    <h4 className="font-bold text-[var(--color-secondary)]">Cookies publicitaires</h4>
                  </div>
                  <p className="text-sm">
                    Nous n&apos;utilisons <strong>aucun cookie publicitaire</strong> ni de ciblage 
                    sur notre site.
                  </p>
                </div>
                
                <div className="border border-gray-200 bg-white p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-gray-400 text-white text-xs font-bold rounded-full">NON UTILISÉS</span>
                    <h4 className="font-bold text-[var(--color-secondary)]">Cookies de réseaux sociaux</h4>
                  </div>
                  <p className="text-sm">
                    Nous n&apos;intégrons pas de boutons de partage avec tracking de réseaux sociaux.
                  </p>
                </div>
              </div>
              
              <h3 className="font-bold text-[var(--color-secondary)] text-lg mt-6">
                Comment gérer les cookies ?
              </h3>
              <p>
                Vous pouvez à tout moment configurer votre navigateur pour accepter ou 
                refuser les cookies. Voici les liens vers les pages d&apos;aide des principaux 
                navigateurs :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">Microsoft Edge</a></li>
              </ul>
            </div>
          </section>

          {/* 9. Sécurité */}
          <section id="securite" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">9</span>
              Sécurité des données
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                La sécurité de vos données est notre priorité. Nous mettons en œuvre 
                les mesures techniques et organisationnelles appropriées pour protéger 
                vos informations personnelles :
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-6 bg-[var(--color-gray-50)] rounded-xl">
                  <div className="w-16 h-16 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2">Chiffrement HTTPS</h4>
                  <p className="text-sm">Toutes les communications sont chiffrées via SSL/TLS</p>
                </div>
                
                <div className="text-center p-6 bg-[var(--color-gray-50)] rounded-xl">
                  <div className="w-16 h-16 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2">Protection DDoS</h4>
                  <p className="text-sm">Infrastructure protégée contre les attaques</p>
                </div>
                
                <div className="text-center p-6 bg-[var(--color-gray-50)] rounded-xl">
                  <div className="w-16 h-16 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2">Sauvegardes</h4>
                  <p className="text-sm">Sauvegardes régulières et redondantes</p>
                </div>
              </div>
            </div>
          </section>

          {/* 10. Réclamation CNIL */}
          <section id="reclamation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">10</span>
              Réclamation auprès de la CNIL
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                Si vous estimez, après nous avoir contactés, que vos droits sur vos données 
                ne sont pas respectés, vous pouvez introduire une réclamation auprès de la 
                Commission Nationale de l&apos;Informatique et des Libertés (CNIL) :
              </p>
              
              <div className="bg-[var(--color-gray-50)] p-6 rounded-xl">
                <p className="mb-2"><strong>CNIL</strong></p>
                <p>3 Place de Fontenoy - TSA 80715</p>
                <p>75334 PARIS CEDEX 07</p>
                <p className="mt-3">
                  <a
                    href="https://www.cnil.fr/fr/plaintes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:underline font-medium"
                  >
                    www.cnil.fr/fr/plaintes →
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Date de mise à jour */}
          <div className="text-center pt-8 border-t border-[var(--color-gray-200)]">
            <p className="text-[var(--color-gray-400)] text-sm">
              Dernière mise à jour de la politique de confidentialité : <strong>Janvier 2026</strong>
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
