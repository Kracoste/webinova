"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { contactSchema, type ContactPayload } from "@/lib/validation/contact";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries()) as ContactPayload;

    const parseResult = contactSchema.safeParse(payload);

    if (!parseResult.success) {
      setError(parseResult.error.issues[0]?.message ?? "Un champ est invalide.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parseResult.data),
      });

      if (!response.ok) {
        throw new Error("Une erreur est survenue. Merci de réessayer.");
      }

      event.currentTarget.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inattendue.");
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const fieldStyles =
    "rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm shadow-[0_12px_24px_rgba(17,17,17,0.08)] focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/15";

  return (
    <form onSubmit={handleSubmit} className="surface-card space-y-6 p-8">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
          Démarrer un projet
        </p>
        <h2 className="text-2xl font-semibold text-zinc-900">
          Décrivez votre besoin pour recevoir un plan d’action personnalisé.
        </h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-zinc-700">
            Nom complet *
          </label>
          <input id="name" name="name" type="text" required placeholder="Ex. Julie Martin" className={fieldStyles} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Email professionnel *
          </label>
          <input id="email" name="email" type="email" required placeholder="vous@entreprise.fr" className={fieldStyles} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-sm font-medium text-zinc-700">
            Entreprise (optionnel)
          </label>
          <input id="company" name="company" type="text" placeholder="Nom de votre structure" className={fieldStyles} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-zinc-700">
            Téléphone (optionnel)
          </label>
          <input id="phone" name="phone" type="tel" placeholder="06 12 34 56 78" className={fieldStyles} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-zinc-700">
          Parlez-nous de votre projet *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Expliquez-nous votre activité, vos besoins et vos objectifs."
          className={fieldStyles}
        />
      </div>
      {error && <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>}
      {status === "success" && (
        <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          Merci ! Nous revenons vers vous sous 24h avec une proposition détaillée.
        </p>
      )}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-zinc-500">
          En cliquant sur « Envoyer », vous acceptez que Webinova vous contacte par email ou téléphone.
        </p>
        <Button type="submit" disabled={status === "loading"} className="sm:w-auto">
          {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
        </Button>
      </div>
    </form>
  );
}
