/**
 * Script de test pour vérifier la configuration email
 * Usage: npm run test:email
 */

import { sendContactEmail } from "./src/lib/mailer";

async function testEmail() {
  console.log("🧪 Test d'envoi d'email...\n");

  try {
    await sendContactEmail({
      name: "Test Webinova",
      email: "test@example.com",
      company: "Test Company",
      phone: "+33 6 12 34 56 78",
      message: "Ceci est un email de test pour vérifier la configuration SMTP.",
    });

    console.log("✅ Email envoyé avec succès !");
    console.log("📧 Vérifiez votre boîte mail webiinova@gmail.com\n");
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi de l'email:");
    console.error(error);
    console.log("\n💡 Vérifiez votre fichier .env.local");
    process.exit(1);
  }
}

testEmail();
