import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Veuillez indiquer votre nom"),
  email: z.string().email("Adresse email invalide"),
  company: z.string().optional(),
  phone: z
    .string()
    .optional()
    .transform((value) => value?.trim() || undefined),
  message: z
    .string()
    .min(20, "Votre message doit contenir au moins 20 caractères"),
});

export type ContactPayload = z.infer<typeof contactSchema>;
