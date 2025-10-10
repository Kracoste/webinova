# Webinova — site vitrine Next.js

Projet Next.js 15 + TypeScript développé pour présenter l'offre unique de Webinova : un forfait de création de site vitrine sobre et professionnel.

## Démarrage rapide

```bash
npm install
npm run dev
# http://localhost:3000
```

### Scripts disponibles

- `npm run dev` : lance le serveur de développement.
- `npm run build` : compile l'application pour la production.
- `npm run start` : démarre le serveur en mode production.
- `npm run lint` : exécute ESLint.

## Structure principale

- `src/app` : pages App Router (`/`, `/about`, `/devis`, API `/api/contact`).
- `src/components` : composants UI réutilisables et sections de page.
- `src/lib` : données statiques, utilitaires et helpers (envoi d'emails, validation…).
- `src/hooks` : hooks React client (ex. animation des compteurs).

## Contenu dynamique

- Réalisations affichées sur la page d'accueil : `src/lib/data.ts`.
  Remplacez les URLs `https://example.com/...` par vos références réelles.
- Statistiques du compteur : également dans `src/lib/data.ts`.
  Mettez à jour les valeurs `value` et `suffix` selon vos indicateurs.
- Coordonnées (téléphone/email) utilisées dans plusieurs composants (`Header`, `Footer`, `ContactDetails`, `CallToAction`). Pensez à les modifier pour refléter vos informations client.

## Formulaire devis → email

L'API `/api/contact` envoie les demandes via SMTP (Nodemailer). Définissez les variables d'environnement suivantes (ex. fichier `.env.local`) :

```bash
SMTP_HOST=smtp.votrefournisseur.com
SMTP_PORT=465
SMTP_USER=utilisateur@votredomaine.fr
SMTP_PASS=motdepasse
SMTP_SECURE=true        # optionnel, true pour 465
CONTACT_RECIPIENT=contact@webinova.fr
MAIL_FROM=contact@webinova.fr  # optionnel, sinon SMTP_USER est utilisé
```

Redémarrez le serveur après modification. En local, vous pouvez tester avec des services comme [Mailtrap](https://mailtrap.io/) ou [Ethereal Email](https://ethereal.email/).

Le schéma de validation du formulaire se trouve dans `src/lib/validation/contact.ts` (Zod). Ajustez les règles selon vos besoins.

## Déploiement

L'application peut être déployée sur Vercel ou tout hébergeur compatible Node.js. Sur Vercel, ajoutez les variables d'environnement via *Project Settings → Environment Variables*.

## Personnalisation design

Le design repose sur Tailwind CSS v4. Vous pouvez ajuster les couleurs, les espacements ou ajouter de nouveaux composants en éditant les fichiers de `src/components` et les variables définies dans `src/app/globals.css`.

---

Pour toute question ou évolution (nouvelle offre, variantes multi-pages, blog, etc.), ouvrez une issue afin de planifier la prochaine itération.
