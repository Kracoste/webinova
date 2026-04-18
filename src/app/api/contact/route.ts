import { NextResponse } from "next/server";
import type { ContactFormData, ApiResponse } from "@/types";
import { isValidEmail, isValidFrenchPhone } from "@/lib/utils";

// Rate limiting simple en mémoire (se réinitialise au redémarrage du serveur)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 heure

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string[]>;
}

function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string[]> = {};

  // Nom requis
  if (!data.name?.trim()) {
    errors.name = ["Le nom est requis"];
  } else if (data.name.trim().length < 2) {
    errors.name = ["Le nom doit contenir au moins 2 caractères"];
  }

  // Email requis et valide
  if (!data.email?.trim()) {
    errors.email = ["L'email est requis"];
  } else if (!isValidEmail(data.email)) {
    errors.email = ["L'email n'est pas valide"];
  }

  // Téléphone optionnel mais valide si fourni
  if (data.phone && !isValidFrenchPhone(data.phone)) {
    errors.phone = ["Le numéro de téléphone n'est pas valide"];
  }

  // Type de projet requis
  if (!data.projectType?.trim()) {
    errors.projectType = ["Veuillez sélectionner un type de projet"];
  }

  // Message requis
  if (!data.message?.trim()) {
    errors.message = ["Le message est requis"];
  } else if (data.message.trim().length < 20) {
    errors.message = ["Le message doit contenir au moins 20 caractères"];
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Envoie un email via Resend (placeholder)
 * À configurer avec votre clé API Resend
 */
async function sendEmail(data: ContactFormData): Promise<boolean> {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  // Si pas de clé API, on simule l'envoi (mode développement)
  if (!RESEND_API_KEY) {
    console.log("📧 [DEV] Email simulé:", {
      to: process.env.CONTACT_EMAIL || "webonia@outlook.fr",
      from: "onboarding@resend.dev",
      subject: `Nouvelle demande de contact - ${data.projectType}`,
      data,
    });
    // Simulation d'un délai
    await new Promise((resolve) => setTimeout(resolve, 500));
    return true;
  }

  // Envoi réel via Resend
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || "Webinova <contact@webonia.fr>",
        to: process.env.CONTACT_EMAIL || "contact@webonia.fr",
        reply_to: data.email,
        subject: `Nouvelle demande de contact - ${data.projectType}`,
        html: `
          <h2>Nouvelle demande de contact</h2>
          <p><strong>Nom :</strong> ${escapeHtml(data.name)}</p>
          <p><strong>Email :</strong> ${escapeHtml(data.email)}</p>
          ${data.phone ? `<p><strong>Téléphone :</strong> ${escapeHtml(data.phone)}</p>` : ""}
          ${data.company ? `<p><strong>Entreprise :</strong> ${escapeHtml(data.company)}</p>` : ""}
          <p><strong>Type de projet :</strong> ${escapeHtml(data.projectType)}</p>
          ${data.budget ? `<p><strong>Budget :</strong> ${escapeHtml(data.budget)}</p>` : ""}
          <h3>Message :</h3>
          <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Resend error:", JSON.stringify(error, null, 2));
      console.error("Resend status:", response.status);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Email send error:", error);
    return false;
  }
}

export async function POST(request: Request): Promise<NextResponse<ApiResponse>> {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, message: "Trop de demandes. Veuillez réessayer dans une heure." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const data: ContactFormData = {
      name: body.name ?? "",
      email: body.email ?? "",
      phone: body.phone ?? "",
      company: body.company ?? "",
      projectType: body.projectType ?? "",
      budget: body.budget ?? "",
      message: body.message ?? "",
    };

    // Validation
    const validation = validateContactForm(data);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Veuillez corriger les erreurs du formulaire",
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    // Envoi de l'email
    const emailSent = await sendEmail(data);
    if (!emailSent) {
      return NextResponse.json(
        {
          success: false,
          message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Votre message a bien été envoyé. Nous vous répondrons sous 48h.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Une erreur inattendue est survenue.",
      },
      { status: 500 }
    );
  }
}
