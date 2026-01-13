import { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui";
import { COMPANY } from "@/data/constants";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente (CGV) - Prestations Web | Webonia",
  description:
    "Consultez les CGV de Webonia : tarifs création de sites web (500€ à 5000€), modalités de paiement, délais de réalisation, garanties et conditions contractuelles pour nos prestations web.",
  keywords: [
    "CGV agence web",
    "conditions générales vente",
    "tarifs création site",
    "contrat prestation web",
    "devis site internet",
  ],
  openGraph: {
    title: "Conditions Générales de Vente | Webonia - Création Web",
    description:
      "Tarifs, délais, modalités de paiement et conditions contractuelles pour la création de votre site web.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://webonia.fr/cgv",
  },
};

export default function CGVPage() {
  return (
    <main>
      <Section background="white" className="pt-32">
        <SectionHeader
          title="Conditions Générales de Vente"
          description="Conditions contractuelles applicables à toutes nos prestations de création de sites web, refonte et développement d'applications"
        />

        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 rounded-xl p-6 mb-12">
            <p className="text-[var(--color-gray-600)] leading-relaxed">
              Les présentes Conditions Générales de Vente (CGV) régissent l&apos;ensemble des 
              relations contractuelles entre <strong>{COMPANY.name}</strong>, auto-entrepreneur 
              spécialisé dans la création de sites internet et le développement web, et ses 
              clients professionnels ou particuliers. Toute commande de prestation implique 
              l&apos;acceptation pleine et entière des présentes CGV.
            </p>
          </div>

          {/* Sommaire */}
          <div className="bg-[var(--color-gray-50)] p-6 rounded-xl mb-12">
            <h3 className="font-bold text-[var(--color-secondary)] mb-4">📋 Sommaire des articles</h3>
            <ol className="grid md:grid-cols-2 gap-2 text-[var(--color-gray-600)] text-sm">
              <li><a href="#article1" className="hover:text-[var(--color-primary)]">1. Définitions</a></li>
              <li><a href="#article2" className="hover:text-[var(--color-primary)]">2. Services proposés</a></li>
              <li><a href="#article3" className="hover:text-[var(--color-primary)]">3. Devis et commande</a></li>
              <li><a href="#article4" className="hover:text-[var(--color-primary)]">4. Tarifs et paiement</a></li>
              <li><a href="#article5" className="hover:text-[var(--color-primary)]">5. Délais de réalisation</a></li>
              <li><a href="#article6" className="hover:text-[var(--color-primary)]">6. Obligations du Client</a></li>
              <li><a href="#article7" className="hover:text-[var(--color-primary)]">7. Obligations du Prestataire</a></li>
              <li><a href="#article8" className="hover:text-[var(--color-primary)]">8. Validation et livraison</a></li>
              <li><a href="#article9" className="hover:text-[var(--color-primary)]">9. Propriété intellectuelle</a></li>
              <li><a href="#article10" className="hover:text-[var(--color-primary)]">10. Garantie et maintenance</a></li>
              <li><a href="#article11" className="hover:text-[var(--color-primary)]">11. Responsabilité</a></li>
              <li><a href="#article12" className="hover:text-[var(--color-primary)]">12. Résiliation</a></li>
              <li><a href="#article13" className="hover:text-[var(--color-primary)]">13. Force majeure</a></li>
              <li><a href="#article14" className="hover:text-[var(--color-primary)]">14. Droit applicable</a></li>
            </ol>
          </div>

          {/* Article 1 - Définitions */}
          <section id="article1" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">1</span>
              Définitions
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                Dans le cadre des présentes Conditions Générales de Vente, les termes 
                suivants sont définis comme suit :
              </p>
              <div className="bg-[var(--color-gray-50)] p-6 rounded-xl space-y-4">
                <div className="border-l-4 border-[var(--color-primary)] pl-4">
                  <p className="font-bold text-[var(--color-secondary)]">« Le Prestataire »</p>
                  <p>{COMPANY.name}, représenté par Hugo Allou, auto-entrepreneur domicilié à {COMPANY.address}.</p>
                </div>
                <div className="border-l-4 border-[var(--color-primary)] pl-4">
                  <p className="font-bold text-[var(--color-secondary)]">« Le Client »</p>
                  <p>Toute personne physique ou morale, professionnelle ou particulière, passant commande d&apos;une prestation auprès du Prestataire.</p>
                </div>
                <div className="border-l-4 border-[var(--color-primary)] pl-4">
                  <p className="font-bold text-[var(--color-secondary)]">« La Prestation »</p>
                  <p>L&apos;ensemble des services de création web, développement, refonte ou maintenance commandés par le Client.</p>
                </div>
                <div className="border-l-4 border-[var(--color-primary)] pl-4">
                  <p className="font-bold text-[var(--color-secondary)]">« Le Devis »</p>
                  <p>Document écrit détaillant la nature des prestations, leur prix et les délais estimés de réalisation.</p>
                </div>
                <div className="border-l-4 border-[var(--color-primary)] pl-4">
                  <p className="font-bold text-[var(--color-secondary)]">« Le Livrable »</p>
                  <p>Le résultat final de la prestation (site web, application, maquettes, etc.) livré au Client.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Article 2 - Services */}
          <section id="article2" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">2</span>
              Services proposés
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                {COMPANY.name} propose les prestations de services numériques suivantes, 
                réalisées sur-mesure selon les besoins spécifiques de chaque client :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[var(--color-gray-50)] p-6 rounded-xl">
                  <h3 className="font-bold text-[var(--color-secondary)] mb-3 flex items-center gap-2">
                    <span className="text-[var(--color-primary)]">🏠</span> Sites vitrines
                  </h3>
                  <ul className="text-sm space-y-1">
                    <li>• Présentation de l&apos;entreprise</li>
                    <li>• Pages services et réalisations</li>
                    <li>• Formulaire de contact</li>
                    <li>• Design responsive mobile</li>
                    <li>• Optimisation SEO de base</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-gray-50)] p-6 rounded-xl">
                  <h3 className="font-bold text-[var(--color-secondary)] mb-3 flex items-center gap-2">
                    <span className="text-[var(--color-primary)]">🛒</span> Sites e-commerce
                  </h3>
                  <ul className="text-sm space-y-1">
                    <li>• Catalogue produits complet</li>
                    <li>• Panier et tunnel d&apos;achat</li>
                    <li>• Paiement en ligne sécurisé</li>
                    <li>• Gestion des stocks</li>
                    <li>• Back-office administration</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-gray-50)] p-6 rounded-xl">
                  <h3 className="font-bold text-[var(--color-secondary)] mb-3 flex items-center gap-2">
                    <span className="text-[var(--color-primary)]">🔄</span> Refonte de sites
                  </h3>
                  <ul className="text-sm space-y-1">
                    <li>• Audit de l&apos;existant</li>
                    <li>• Nouveau design moderne</li>
                    <li>• Migration du contenu</li>
                    <li>• Amélioration des performances</li>
                    <li>• Conservation du référencement</li>
                  </ul>
                </div>
                
                <div className="bg-[var(--color-gray-50)] p-6 rounded-xl">
                  <h3 className="font-bold text-[var(--color-secondary)] mb-3 flex items-center gap-2">
                    <span className="text-[var(--color-primary)]">⚙️</span> Applications web
                  </h3>
                  <ul className="text-sm space-y-1">
                    <li>• Développement sur-mesure</li>
                    <li>• Tableaux de bord</li>
                    <li>• Outils métier spécifiques</li>
                    <li>• Intégrations API</li>
                    <li>• Applications PWA</li>
                  </ul>
                </div>
              </div>
              
              <p className="mt-4">
                Chaque prestation est personnalisée et fait l&apos;objet d&apos;un devis détaillé 
                précisant les fonctionnalités incluses.
              </p>
            </div>
          </section>

          {/* Article 3 - Devis et commande */}
          <section id="article3" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">3</span>
              Devis et processus de commande
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <h3 className="font-semibold text-[var(--color-secondary)] text-lg">3.1 Établissement du devis</h3>
              <p>
                Tout projet débute par une phase de découverte gratuite permettant de 
                comprendre les besoins du Client. À l&apos;issue de cette phase, un devis 
                détaillé est établi comprenant :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>La description précise des prestations</li>
                <li>Le planning prévisionnel de réalisation</li>
                <li>Le prix total de la prestation</li>
                <li>Les modalités de paiement</li>
                <li>Les conditions de révision éventuelles</li>
              </ul>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-4">
                <p className="text-amber-800">
                  <strong>⏱️ Validité du devis :</strong> Tout devis est valable <strong>30 jours</strong> 
                  {" "}à compter de sa date d&apos;émission. Passé ce délai, le Prestataire se réserve 
                  le droit de réviser les conditions.
                </p>
              </div>
              
              <h3 className="font-semibold text-[var(--color-secondary)] text-lg mt-6">3.2 Acceptation et commande</h3>
              <p>
                La commande est considérée comme ferme et définitive après réunion des 
                conditions suivantes :
              </p>
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <div className="flex-1 bg-[var(--color-gray-50)] p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                  <p className="font-semibold text-[var(--color-secondary)]">Signature du devis</p>
                  <p className="text-sm mt-1">Avec la mention « Bon pour accord »</p>
                </div>
                <div className="flex-1 bg-[var(--color-gray-50)] p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                  <p className="font-semibold text-[var(--color-secondary)]">Versement de l&apos;acompte</p>
                  <p className="text-sm mt-1">50% du montant total</p>
                </div>
                <div className="flex-1 bg-[var(--color-gray-50)] p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                  <p className="font-semibold text-[var(--color-secondary)]">Réception des éléments</p>
                  <p className="text-sm mt-1">Contenus et accès nécessaires</p>
                </div>
              </div>
            </div>
          </section>

          {/* Article 4 - Tarifs */}
          <section id="article4" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">4</span>
              Tarifs et modalités de paiement
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <h3 className="font-semibold text-[var(--color-secondary)] text-lg">4.1 Grille tarifaire indicative</h3>
              <p>
                Les tarifs ci-dessous sont donnés à titre indicatif. Le prix définitif 
                est fixé dans le devis en fonction des spécificités du projet.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-[var(--color-gray-50)] p-6 rounded-xl text-center border-2 border-transparent hover:border-[var(--color-primary)] transition-colors">
                  <p className="text-sm text-[var(--color-gray-500)] mb-2">À partir de</p>
                  <p className="text-4xl font-bold text-[var(--color-primary)]">500 €</p>
                  <p className="font-semibold text-[var(--color-secondary)] mt-2">Refonte de site</p>
                  <p className="text-sm mt-2">Modernisation d&apos;un site existant</p>
                </div>
                
                <div className="bg-[var(--color-primary)]/5 p-6 rounded-xl text-center border-2 border-[var(--color-primary)]">
                  <p className="text-sm text-[var(--color-gray-500)] mb-2">À partir de</p>
                  <p className="text-4xl font-bold text-[var(--color-primary)]">700 €</p>
                  <p className="font-semibold text-[var(--color-secondary)] mt-2">Site Vitrine</p>
                  <p className="text-sm mt-2">Site professionnel complet</p>
                </div>
                
                <div className="bg-[var(--color-gray-50)] p-6 rounded-xl text-center border-2 border-transparent hover:border-[var(--color-primary)] transition-colors">
                  <p className="text-sm text-[var(--color-gray-500)] mb-2">À partir de</p>
                  <p className="text-4xl font-bold text-[var(--color-primary)]">5 000 €</p>
                  <p className="font-semibold text-[var(--color-secondary)] mt-2">Site E-commerce</p>
                  <p className="text-sm mt-2">Boutique en ligne complète</p>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800">
                  <strong>ℹ️ TVA non applicable</strong> - Article 293 B du CGI (régime auto-entrepreneur). 
                  Les prix indiqués sont nets à payer.
                </p>
              </div>
              
              <h3 className="font-semibold text-[var(--color-secondary)] text-lg mt-6">4.2 Modalités de paiement</h3>
              <p>Le règlement s&apos;effectue selon l&apos;échéancier suivant :</p>
              
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[var(--color-secondary)] text-white">
                      <th className="p-4 text-left rounded-tl-lg">Échéance</th>
                      <th className="p-4 text-left">Montant</th>
                      <th className="p-4 text-left rounded-tr-lg">Moment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[var(--color-gray-50)]">
                      <td className="p-4 border-b border-[var(--color-gray-200)] font-semibold">Acompte</td>
                      <td className="p-4 border-b border-[var(--color-gray-200)]"><strong className="text-[var(--color-primary)]">50%</strong></td>
                      <td className="p-4 border-b border-[var(--color-gray-200)]">À la signature du devis</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Solde</td>
                      <td className="p-4"><strong className="text-[var(--color-primary)]">50%</strong></td>
                      <td className="p-4">À la livraison du projet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 className="font-semibold text-[var(--color-secondary)] text-lg mt-6">4.3 Moyens de paiement acceptés</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Virement bancaire</strong> (coordonnées fournies sur la facture)</li>
                <li><strong>PayPal</strong> (frais éventuels à la charge du Client)</li>
              </ul>
              
              <h3 className="font-semibold text-[var(--color-secondary)] text-lg mt-6">4.4 Retard de paiement</h3>
              <p>
                En cas de retard de paiement, des pénalités de retard seront appliquées 
                au taux de 3 fois le taux d&apos;intérêt légal en vigueur, conformément à 
                l&apos;article L.441-10 du Code de commerce. Une indemnité forfaitaire de 
                40 € pour frais de recouvrement sera également due.
              </p>
            </div>
          </section>

          {/* Article 5 - Délais */}
          <section id="article5" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">5</span>
              Délais de réalisation
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                Les délais de réalisation sont indicatifs et communiqués dans le devis. 
                Ils dépendent de la complexité du projet et de la réactivité du Client.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-[var(--color-gray-50)] p-6 rounded-xl text-center">
                  <div className="text-4xl mb-3">🔄</div>
                  <p className="font-bold text-[var(--color-secondary)]">Refonte</p>
                  <p className="text-2xl font-bold text-[var(--color-primary)] mt-2">1 à 3 semaines</p>
                </div>
                <div className="bg-[var(--color-gray-50)] p-6 rounded-xl text-center">
                  <div className="text-4xl mb-3">🏠</div>
                  <p className="font-bold text-[var(--color-secondary)]">Site Vitrine</p>
                  <p className="text-2xl font-bold text-[var(--color-primary)] mt-2">2 à 4 semaines</p>
                </div>
                <div className="bg-[var(--color-gray-50)] p-6 rounded-xl text-center">
                  <div className="text-4xl mb-3">🛒</div>
                  <p className="font-bold text-[var(--color-secondary)]">E-commerce</p>
                  <p className="text-2xl font-bold text-[var(--color-primary)] mt-2">4 à 8 semaines</p>
                </div>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-amber-800">
                  <strong>⚠️ Important :</strong> Le délai de réalisation commence à compter de la 
                  réception de l&apos;acompte ET de tous les éléments nécessaires au projet 
                  (textes, images, accès, etc.). Tout retard dans la fourniture de ces éléments 
                  par le Client reportera d&apos;autant la date de livraison.
                </p>
              </div>
            </div>
          </section>

          {/* Article 6 - Obligations Client */}
          <section id="article6" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">6</span>
              Obligations du Client
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                Pour le bon déroulement du projet, le Client s&apos;engage à :
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-[var(--color-gray-50)] rounded-lg">
                  <span className="w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                  <div>
                    <strong className="text-[var(--color-secondary)]">Fournir les contenus</strong>
                    <p className="text-sm mt-1">Transmettre tous les textes, images, logos et documents nécessaires dans les délais convenus et dans un format exploitable.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-[var(--color-gray-50)] rounded-lg">
                  <span className="w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                  <div>
                    <strong className="text-[var(--color-secondary)]">Désigner un interlocuteur unique</strong>
                    <p className="text-sm mt-1">Nommer une personne référente habilitée à prendre les décisions et valider les étapes du projet.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-[var(--color-gray-50)] rounded-lg">
                  <span className="w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                  <div>
                    <strong className="text-[var(--color-secondary)]">Valider dans les délais</strong>
                    <p className="text-sm mt-1">Approuver les maquettes et développements dans un délai raisonnable (7 jours ouvrés maximum).</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-[var(--color-gray-50)] rounded-lg">
                  <span className="w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                  <div>
                    <strong className="text-[var(--color-secondary)]">Respecter les échéances de paiement</strong>
                    <p className="text-sm mt-1">Régler les factures selon les modalités prévues dans le devis.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-[var(--color-gray-50)] rounded-lg">
                  <span className="w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">5</span>
                  <div>
                    <strong className="text-[var(--color-secondary)]">Garantir les droits sur les contenus</strong>
                    <p className="text-sm mt-1">S&apos;assurer de détenir les droits d&apos;utilisation sur tous les éléments fournis (textes, photos, logos, etc.).</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Article 7 - Obligations Prestataire */}
          <section id="article7" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">7</span>
              Obligations du Prestataire
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                {COMPANY.name} s&apos;engage à :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 p-5 rounded-xl">
                  <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                    ✓ Qualité de réalisation
                  </h4>
                  <p className="text-green-700 text-sm">
                    Livrer un site conforme au devis, fonctionnel et optimisé selon les standards du web.
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 p-5 rounded-xl">
                  <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                    ✓ Respect des délais
                  </h4>
                  <p className="text-green-700 text-sm">
                    Respecter les délais convenus, sauf retard imputable au Client ou cas de force majeure.
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 p-5 rounded-xl">
                  <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                    ✓ Communication régulière
                  </h4>
                  <p className="text-green-700 text-sm">
                    Informer le Client de l&apos;avancement du projet et des éventuelles difficultés rencontrées.
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 p-5 rounded-xl">
                  <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                    ✓ Confidentialité
                  </h4>
                  <p className="text-green-700 text-sm">
                    Traiter de manière confidentielle toutes les informations communiquées par le Client.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Article 8 - Validation et livraison */}
          <section id="article8" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">8</span>
              Validation et livraison
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <h3 className="font-semibold text-[var(--color-secondary)] text-lg">8.1 Processus de validation</h3>
              <p>
                Le projet fait l&apos;objet de validations à chaque étape clé :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Validation du cahier des charges et des maquettes</li>
                <li>Validation du design graphique</li>
                <li>Validation des développements sur environnement de préproduction</li>
                <li>Recette finale avant mise en ligne</li>
              </ul>
              
              <div className="bg-[var(--color-gray-50)] p-4 rounded-lg my-4">
                <p>
                  <strong>Délai de validation :</strong> Sans retour du Client sous 7 jours ouvrés 
                  après présentation d&apos;une étape, celle-ci sera considérée comme validée tacitement.
                </p>
              </div>
              
              <h3 className="font-semibold text-[var(--color-secondary)] text-lg mt-6">8.2 Révisions incluses</h3>
              <p>
                Le devis précise le nombre de révisions incluses. Au-delà, les modifications 
                supplémentaires feront l&apos;objet d&apos;un devis complémentaire.
              </p>
              
              <h3 className="font-semibold text-[var(--color-secondary)] text-lg mt-6">8.3 Livraison</h3>
              <p>
                La livraison s&apos;effectue par la mise en ligne du site sur le nom de domaine 
                du Client. Un procès-verbal de livraison est signé par les deux parties, 
                déclenchant le paiement du solde.
              </p>
            </div>
          </section>

          {/* Article 9 - Propriété intellectuelle */}
          <section id="article9" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">9</span>
              Propriété intellectuelle
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <h3 className="font-semibold text-[var(--color-secondary)] text-lg">9.1 Transfert de propriété</h3>
              <p>
                À complet paiement de la prestation, le Client devient propriétaire du 
                site web réalisé. Il dispose des droits d&apos;exploitation, de reproduction 
                et de modification du livrable final.
              </p>
              
              <h3 className="font-semibold text-[var(--color-secondary)] text-lg mt-6">9.2 Éléments techniques</h3>
              <p>
                Les éléments suivants restent la propriété du Prestataire ou de leurs 
                éditeurs respectifs :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Les bibliothèques et frameworks open source utilisés (sous licence)</li>
                <li>Les outils et méthodes de développement génériques</li>
                <li>Les templates et composants réutilisables créés par le Prestataire</li>
              </ul>
              
              <h3 className="font-semibold text-[var(--color-secondary)] text-lg mt-6">9.3 Droit de référence</h3>
              <div className="bg-[var(--color-gray-50)] p-4 rounded-lg">
                <p>
                  Sauf mention contraire écrite du Client, {COMPANY.name} se réserve le droit 
                  de mentionner le site réalisé dans son portfolio et ses communications 
                  commerciales (site web, réseaux sociaux, documents commerciaux).
                </p>
              </div>
            </div>
          </section>

          {/* Article 10 - Garantie */}
          <section id="article10" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">10</span>
              Garantie et maintenance
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <h3 className="font-semibold text-[var(--color-secondary)] text-lg">10.1 Garantie de correction</h3>
              <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                <p className="text-green-800">
                  <strong>✓ Garantie 30 jours :</strong> {COMPANY.name} offre une garantie de 
                  30 jours à compter de la livraison pour corriger tout dysfonctionnement 
                  technique du site (bugs, erreurs d&apos;affichage, fonctionnalités défaillantes).
                </p>
              </div>
              
              <p className="mt-4">
                Cette garantie ne couvre pas :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Les modifications demandées après validation</li>
                <li>Les problèmes liés à l&apos;hébergement non fourni par le Prestataire</li>
                <li>Les dysfonctionnements causés par des interventions du Client ou de tiers</li>
                <li>Les évolutions des navigateurs ou systèmes d&apos;exploitation</li>
              </ul>
              
              <h3 className="font-semibold text-[var(--color-secondary)] text-lg mt-6">10.2 Maintenance (optionnelle)</h3>
              <p>
                Au-delà de la période de garantie, {COMPANY.name} propose des contrats de 
                maintenance optionnels incluant les mises à jour de sécurité, les sauvegardes 
                régulières et le support technique. Les conditions sont détaillées dans un 
                contrat spécifique.
              </p>
            </div>
          </section>

          {/* Article 11 - Responsabilité */}
          <section id="article11" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">11</span>
              Limitation de responsabilité
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                La responsabilité de {COMPANY.name} est expressément limitée comme suit :
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  La responsabilité du Prestataire ne peut être engagée qu&apos;en cas de 
                  faute prouvée et pour les seuls dommages directs.
                </li>
                <li>
                  En aucun cas, le Prestataire ne pourra être tenu responsable des 
                  dommages indirects (perte de chiffre d&apos;affaires, perte de clients, 
                  atteinte à l&apos;image, etc.).
                </li>
                <li>
                  Le montant des dommages et intérêts pouvant être réclamés au Prestataire 
                  est plafonné au montant total de la prestation.
                </li>
                <li>
                  Le Prestataire n&apos;est pas responsable des contenus fournis par le 
                  Client, notamment en cas de violation de droits de propriété intellectuelle.
                </li>
              </ul>
            </div>
          </section>

          {/* Article 12 - Résiliation */}
          <section id="article12" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">12</span>
              Résiliation et annulation
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <h3 className="font-semibold text-[var(--color-secondary)] text-lg">12.1 Résiliation par le Client</h3>
              <p>
                En cas d&apos;annulation par le Client après le versement de l&apos;acompte :
              </p>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg my-4">
                <ul className="text-amber-800 space-y-2">
                  <li>• L&apos;acompte de 50% reste acquis au Prestataire à titre de dédommagement.</li>
                  <li>• Si le travail réalisé dépasse 50% du projet, le Client devra régler 
                  le prorata du travail effectivement réalisé.</li>
                </ul>
              </div>
              
              <h3 className="font-semibold text-[var(--color-secondary)] text-lg mt-6">12.2 Résiliation par le Prestataire</h3>
              <p>
                Le Prestataire se réserve le droit de résilier le contrat en cas de :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Non-paiement de l&apos;acompte ou d&apos;une facture après mise en demeure</li>
                <li>Manquement grave du Client à ses obligations</li>
                <li>Fourniture de contenus illicites ou contraires aux bonnes mœurs</li>
              </ul>
            </div>
          </section>

          {/* Article 13 - Force majeure */}
          <section id="article13" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">13</span>
              Force majeure
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                Aucune des parties ne pourra être tenue responsable de l&apos;inexécution 
                totale ou partielle de ses obligations si cette inexécution est due à 
                un cas de force majeure.
              </p>
              <p>
                Sont considérés comme cas de force majeure les événements imprévisibles, 
                irrésistibles et extérieurs aux parties, notamment :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Catastrophes naturelles (séismes, inondations, tempêtes)</li>
                <li>Guerres, émeutes, actes de terrorisme</li>
                <li>Pandémies et crises sanitaires</li>
                <li>Grèves générales</li>
                <li>Pannes majeures des réseaux de télécommunication</li>
              </ul>
              <p className="mt-4">
                La partie invoquant la force majeure devra en informer l&apos;autre partie 
                dans les 48 heures suivant la survenance de l&apos;événement.
              </p>
            </div>
          </section>

          {/* Article 14 - Droit applicable */}
          <section id="article14" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-[var(--color-secondary)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center text-lg font-bold">14</span>
              Droit applicable et litiges
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)] leading-relaxed">
              <p>
                Les présentes Conditions Générales de Vente sont soumises au droit français.
              </p>
              <p>
                En cas de litige relatif à l&apos;interprétation ou à l&apos;exécution des 
                présentes CGV, les parties s&apos;engagent à rechercher en priorité une 
                solution amiable.
              </p>
              <p>
                À défaut d&apos;accord amiable dans un délai de 30 jours à compter de la 
                première réclamation écrite, le litige sera porté devant les tribunaux 
                compétents du ressort de Bressuire ou de Niort.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <div className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 rounded-xl p-8">
              <h2 className="text-xl font-bold text-[var(--color-secondary)] mb-4">
                📞 Une question sur nos CGV ?
              </h2>
              <p className="text-[var(--color-gray-600)] mb-4">
                Si vous avez des questions concernant ces conditions générales de vente 
                ou souhaitez obtenir un devis personnalisé, n&apos;hésitez pas à nous contacter :
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
                >
                  Demander un devis gratuit
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="inline-flex items-center justify-center gap-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-lg hover:bg-[var(--color-primary)]/5 transition-colors"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </section>

          {/* Date de mise à jour */}
          <div className="text-center pt-8 border-t border-[var(--color-gray-200)]">
            <p className="text-[var(--color-gray-400)] text-sm">
              Dernière mise à jour des Conditions Générales de Vente : <strong>Janvier 2026</strong>
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
