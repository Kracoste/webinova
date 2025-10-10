import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mailer";
import { contactSchema } from "@/lib/validation/contact";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      const message = parsed.error.issues[0]?.message ?? "Données invalides";
      return NextResponse.json({ success: false, error: message }, { status: 400 });
    }

    await sendContactEmail(parsed.data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] Failed to process contact form:", error);
    const message =
      error instanceof Error ? error.message : "Une erreur inconnue est survenue.";

    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json(
    {
      success: false,
      error: "Veuillez utiliser une requête POST pour soumettre le formulaire.",
    },
    { status: 405 },
  );
}
