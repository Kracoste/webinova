"use client";

import { useState, type FormEvent } from "react";
import { Section, SectionHeader, Input, Textarea, Select, Button, Icon } from "@/components/ui";
import { COMPANY, PROJECT_TYPES, BUDGET_RANGES } from "@/data/constants";
import { isValidEmail, isValidFrenchPhone } from "@/lib/utils";
import type { ContactFormData, ApiResponse } from "@/types";
import { trackEvent } from "@/components/analytics/ClickTracker";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
}

export function ContactFormSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<ApiResponse | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }

    if (formData.phone && !isValidFrenchPhone(formData.phone)) {
      newErrors.phone = "Le numéro de téléphone n'est pas valide";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Veuillez sélectionner un type de projet";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Le message doit contenir au moins 20 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitResult(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result: ApiResponse = await response.json();
      setSubmitResult(result);

      if (result.success) {
        trackEvent("generate_lead", {
          project_type: formData.projectType,
          budget: formData.budget || "non précisé",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          budget: "",
          message: "",
        });
      }
    } catch {
      setSubmitResult({
        success: false,
        message: "Une erreur est survenue. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    field: keyof ContactFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const contactItems = [
    {
      icon: "phone" as const,
      label: "Téléphone",
      value: COMPANY.phone,
      href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
      track: "contact_appel",
    },
    {
      icon: "mail" as const,
      label: "Email",
      value: COMPANY.email,
      href: `mailto:${COMPANY.email}`,
      track: "contact_email",
    },
    { icon: "location" as const, label: "Adresse", value: COMPANY.address },
  ];

  return (
    <Section id="contact" background="gray" className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-radial opacity-60" aria-hidden="true" />
      <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Colonne gauche : Infos */}
        <div>
          <SectionHeader
            subtitle="Contact"
            title={
              <>
                Parlons de <span className="serif-accent gradient-text">votre projet</span>
              </>
            }
            description="Remplissez le formulaire et recevez un devis personnalisé sous 48h. C'est gratuit et sans engagement."
            centered={false}
            className="mb-10"
          />

          <ul className="space-y-3">
            {contactItems.map((item) => {
              const content = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--color-primary),var(--color-accent))] text-white shadow-[var(--shadow-glow)]">
                    <Icon name={item.icon} size={22} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-gray-400)]">
                      {item.label}
                    </span>
                    <span className="block truncate font-semibold text-[var(--color-secondary)]">{item.value}</span>
                  </span>
                </>
              );
              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      data-track={item.track}
                      className="flex items-center gap-4 rounded-2xl border border-[var(--color-gray-200)] bg-white p-4 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-2xl border border-[var(--color-gray-200)] bg-white p-4 shadow-[var(--shadow-sm)]">
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[var(--color-primary)]/15 bg-[var(--color-primary)]/[0.04] p-5">
            <Icon name="clock" size={20} className="mt-0.5 shrink-0 text-[var(--color-primary)]" />
            <p className="text-sm leading-relaxed text-[var(--color-gray-600)]">
              <span className="font-semibold text-[var(--color-secondary)]">Pressé ?</span> Un appel de quelques
              minutes suffit souvent pour vous donner une première estimation.
            </p>
          </div>
        </div>

        {/* Colonne droite : Formulaire */}
        <div className="rounded-[28px] border border-[var(--color-gray-200)] bg-white p-6 shadow-[var(--shadow-xl)] sm:p-10">
          {submitResult?.success ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[var(--color-success)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="check" size={32} className="text-[var(--color-success)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-3">
                Message envoyé !
              </h3>
              <p className="text-[var(--color-gray-600)]">
                Merci pour votre message. Nous vous répondrons sous 48h.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  label="Nom complet"
                  name="name"
                  type="text"
                  placeholder="Jean Dupont"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  error={errors.name}
                  required
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="jean@exemple.fr"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  error={errors.email}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <Input
                  label="Téléphone"
                  name="phone"
                  type="tel"
                  placeholder="06 12 34 56 78"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  error={errors.phone}
                />
                <Input
                  label="Entreprise"
                  name="company"
                  type="text"
                  placeholder="Nom de votre entreprise"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <Select
                  label="Type de projet"
                  name="projectType"
                  placeholder="Sélectionnez..."
                  options={PROJECT_TYPES.map((type) => ({
                    value: type,
                    label: type,
                  }))}
                  value={formData.projectType}
                  onChange={(e) => handleChange("projectType", e.target.value)}
                  error={errors.projectType}
                  required
                />
                <Select
                  label="Budget estimé"
                  name="budget"
                  placeholder="Sélectionnez..."
                  options={BUDGET_RANGES.map((range) => ({
                    value: range,
                    label: range,
                  }))}
                  value={formData.budget}
                  onChange={(e) => handleChange("budget", e.target.value)}
                />
              </div>

              <div className="mt-5">
                <Textarea
                  label="Décrivez votre projet"
                  name="message"
                  placeholder="Parlez-nous de votre projet, vos objectifs, vos besoins..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  error={errors.message}
                  required
                />
              </div>

              {submitResult && !submitResult.success && (
                <div className="mt-5 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {submitResult.message}
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                isLoading={isSubmitting}
                className="mt-6"
              >
                Recevoir mon devis gratuit
                <Icon name="arrow-right" size={18} />
              </Button>

              <p className="text-center text-[var(--color-gray-400)] text-sm mt-4">
                En soumettant ce formulaire, vous acceptez notre{" "}
                <a
                  href="/confidentialite"
                  className="underline hover:text-[var(--color-primary)]"
                >
                  politique de confidentialité
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
