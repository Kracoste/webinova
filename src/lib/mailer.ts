import nodemailer from "nodemailer";
import { getContactRecipient, getOptionalEnv, resolveMailConfig } from "@/lib/env";
import type { ContactPayload } from "@/lib/validation/contact";

let cachedTransporter: nodemailer.Transporter | null = null;
let cachedConfig: ReturnType<typeof resolveMailConfig> | null = null;

function getTransporter() {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  cachedConfig = resolveMailConfig();
  cachedTransporter = nodemailer.createTransport(cachedConfig);
  return cachedTransporter;
}

export async function sendContactEmail(payload: ContactPayload) {
  const transporter = getTransporter();
  const recipient = getContactRecipient();
  const fromAddress =
    getOptionalEnv("MAIL_FROM") ?? cachedConfig?.auth.user ?? recipient;

  const { name, email, company, phone, message } = payload;

  const html = `
    <h2>Nouveau devis Webinova</h2>
    <p><strong>Nom :</strong> ${name}</p>
    <p><strong>Email :</strong> ${email}</p>
    ${company ? `<p><strong>Entreprise :</strong> ${company}</p>` : ""}
    ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ""}
    <p><strong>Message :</strong></p>
    <p>${message.replace(/\n/g, "<br />")}</p>
  `;

  await transporter.sendMail({
    from: `Webinova <${fromAddress}>`,
    replyTo: email,
    to: recipient,
    subject: `Demande de devis — ${name}`,
    text: `Nom: ${name}\nEmail: ${email}\nEntreprise: ${company ?? "-"}\nTéléphone: ${
      phone ?? "-"
    }\n\nMessage:\n${message}`,
    html,
  });
}
