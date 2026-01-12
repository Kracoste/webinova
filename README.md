# Webinova - Agence de Création de Sites Web

Site vitrine professionnel pour une agence web, construit avec Next.js 15, TypeScript et Tailwind CSS.

## 🚀 Stack Technique

- **Framework**: Next.js 15 (App Router)
- **Langage**: TypeScript (strict mode)
- **Styles**: Tailwind CSS v4
- **Fonts**: Geist Sans & Geist Mono
- **Email**: Resend (optionnel)

## 📁 Structure du Projet

\`\`\`
src/
├── app/                    # Routes Next.js (App Router)
│   ├── api/               # API routes
│   │   └── contact/       # Endpoint formulaire contact
│   ├── services/          # Page services
│   ├── realisations/      # Page portfolio
│   ├── a-propos/          # Page à propos
│   ├── blog/              # Page blog
│   ├── contact/           # Page contact
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── sitemap.ts         # Sitemap dynamique
│   ├── robots.ts          # Robots.txt
│   └── not-found.tsx      # Page 404
│
├── components/
│   ├── ui/                # Composants UI réutilisables
│   │   ├── Button.tsx
│   │   ├── LinkButton.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── Select.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Section.tsx
│   │   ├── Icon.tsx
│   │   └── index.ts
│   │
│   ├── sections/          # Sections de page
│   │   ├── HeroSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── SocialProofSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── ContactFormSection.tsx
│   │   └── index.ts
│   │
│   └── layout/            # Composants de layout
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── index.ts
│
├── data/
│   └── constants.ts       # Données statiques (nav, offres, FAQ, etc.)
│
├── lib/
│   ├── seo.ts             # Utilitaires SEO & JSON-LD
│   └── utils.ts           # Utilitaires généraux
│
└── types/
    └── index.ts           # Définitions TypeScript
\`\`\`

## 🛠️ Installation

\`\`\`bash
# Cloner le projet
git clone <repo-url>
cd webinova

# Installer les dépendances
npm install

# Copier les variables d'environnement
cp .env.example .env.local

# Lancer le serveur de développement
npm run dev
\`\`\`

## 📝 Configuration

### Variables d'environnement

Créez un fichier \`.env.local\` avec :

\`\`\`env
# URL du site (pour SEO)
NEXT_PUBLIC_BASE_URL=https://webinova.fr

# Clé API Resend (optionnel en dev)
RESEND_API_KEY=re_xxxxx

# Email de réception des contacts
CONTACT_EMAIL=contact@webinova.fr
\`\`\`

### Personnalisation

1. **Informations entreprise** : Modifiez \`src/data/constants.ts\`
2. **Couleurs** : Modifiez les variables CSS dans \`src/app/globals.css\`
3. **SEO** : Modifiez \`src/lib/seo.ts\` et les métadonnées de chaque page

## ✅ Checklists

### SEO
- [x] Titles et H1 uniques par page
- [x] Meta descriptions optimisées
- [x] URLs propres et sémantiques
- [x] Sitemap XML dynamique
- [x] Robots.txt
- [x] JSON-LD (LocalBusiness, FAQ, Service)
- [x] Open Graph / Twitter Cards
- [x] Canonical URLs
- [ ] Images optimisées avec next/image
- [ ] Alt text sur toutes les images

### Performance
- [x] Server Components par défaut
- [x] Client Components uniquement si nécessaire
- [x] Fonts optimisées (display: swap)
- [x] CSS minimal (Tailwind purge)
- [ ] Images en WebP/AVIF
- [ ] Lazy loading des images
- [ ] Prefetch des liens critiques

### Accessibilité
- [x] Structure sémantique HTML5
- [x] Labels sur les formulaires
- [x] Focus visible (outline)
- [x] Attributs ARIA quand nécessaire
- [x] Contrastes de couleurs suffisants
- [x] Navigation au clavier
- [x] Skip to main content (à ajouter)

## 📦 Scripts

\`\`\`bash
# Développement
npm run dev

# Build production
npm run build

# Lancer en production
npm start

# Linter
npm run lint
\`\`\`

## 🔄 Évolutions futures

### Pages à créer
- [ ] \`/realisations/[slug]\` - Détail projet
- [ ] \`/blog/[slug]\` - Détail article
- [ ] \`/mentions-legales\`
- [ ] \`/confidentialite\`
- [ ] \`/cgv\`

### Fonctionnalités
- [ ] CMS headless (Sanity, Strapi, Contentful)
- [ ] Analytics (Plausible, Umami)
- [ ] Formulaire multi-étapes
- [ ] Chat en direct
- [ ] Prise de RDV (Calendly)

## 📄 Licence

Propriétaire - Tous droits réservés

---

Développé avec ❤️ par Webinova
