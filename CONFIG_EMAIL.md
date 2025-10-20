# Configuration de l'envoi d'emails pour Webinova

## ✅ Configuration terminée

Le système d'envoi d'emails est maintenant configuré. Les demandes de devis arriveront directement dans votre boîte mail **webiinova@gmail.com**.

## 🔧 Configuration Outlook/Microsoft 365 requise

### ⚠️ IMPORTANT : Erreur d'authentification

Si vous recevez l'erreur "Authentication unsuccessful, basic authentication is disabled", suivez ces étapes :

### Option 1 : Créer un mot de passe d'application (RECOMMANDÉ)

1. **Activer la vérification en deux étapes** :
   - Allez sur https://account.microsoft.com/security
   - Cliquez sur "Options de sécurité avancées"
   - Activez "Vérification en deux étapes" si ce n'est pas déjà fait

2. **Créer un mot de passe d'application** :
   - Allez sur https://account.microsoft.com/security
   - Cliquez sur "Options de sécurité avancées"
   - Trouvez "Mots de passe d'application"
   - Cliquez sur "Créer un mot de passe d'application"
   - Donnez-lui un nom comme "Webinova Website"
   - **Copiez le mot de passe généré**

3. **Mettre à jour le fichier `.env.local`** :
   - Ouvrez le fichier `.env.local`
   - Remplacez la valeur de `SMTP_PASS` par le mot de passe d'application
   - Exemple : `SMTP_PASS=xxxxxxxxxxxx`

### Option 2 : Activer l'authentification de base (moins sécurisé)

1. Allez sur https://outlook.live.com/mail/0/options/mail/accounts
2. Cherchez "Synchronisation POP et IMAP" 
3. Activez "Autoriser les applications moins sécurisées"

4. **Redémarrer le serveur** :
   ```bash
   cd /Users/hugoallou/Webinova/webinova-site
   npm run dev
   ```

## 📧 Comment ça fonctionne

Quand quelqu'un remplit le formulaire de devis sur votre site :
1. Le formulaire envoie les données à l'API `/api/contact`
2. L'API valide les données avec Zod
3. Un email est envoyé via Gmail SMTP à **webiinova@gmail.com**
4. Vous recevez l'email avec toutes les informations du client

### Format de l'email reçu :
- **Sujet** : `Demande de devis — [Nom du client]`
- **De** : `Webinova <webiinova@gmail.com>`
- **Répondre à** : Email du client (pour répondre facilement)
- **Contenu** : Nom, Email, Entreprise, Téléphone, Message

## 🔒 Sécurité

- Le fichier `.env.local` est ignoré par Git (ne sera jamais publié)
- Utilisez toujours un mot de passe d'application si possible
- Les mots de passe d'application peuvent être révoqués à tout moment

## ⚠️ Important

Ne partagez jamais votre fichier `.env.local` ou vos mots de passe d'application !
