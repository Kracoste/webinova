"use client";

import { useState } from "react";
import Link from "next/link";
import { Section, SectionHeader, Icon } from "@/components/ui";
import { FAQ_ITEMS, COMPANY } from "@/data/constants";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section id="faq" background="white">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            centered={false}
            className="mb-8"
            subtitle="FAQ"
            title={
              <>
                Vos questions, <span className="serif-accent gradient-text">mes réponses</span>
              </>
            }
            description="Tout ce qu'on me demande avant de se lancer. Une autre question ? Appelez-moi, c'est le plus simple."
          />
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              data-track="faq_appel"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[var(--color-secondary)] px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <Icon name="phone" size={16} />
              {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              data-track="faq_devis"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-[var(--color-gray-300)] px-5 text-sm font-semibold text-[var(--color-secondary)] transition-colors hover:border-[var(--color-secondary)]"
            >
              Écrire un message
            </Link>
          </div>
        </div>

        <div className="divide-y divide-[var(--color-gray-200)] border-y border-[var(--color-gray-200)]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id}>
                <h3 className="text-base tracking-normal">
                  <button
                    type="button"
                    className="group flex w-full items-center gap-5 py-6 text-left"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${item.id}`}
                  >
                    <span className="font-mono text-xs text-[var(--color-gray-400)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "flex-1 text-lg font-semibold tracking-[-0.02em] transition-colors",
                        isOpen ? "text-[var(--color-primary)]" : "text-[var(--color-secondary)] group-hover:text-[var(--color-primary)]"
                      )}
                    >
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                        isOpen
                          ? "rotate-45 border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                          : "border-[var(--color-gray-200)] text-[var(--color-gray-500)]"
                      )}
                      aria-hidden="true"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-${item.id}`}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-out-expo)]",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                  aria-hidden={!isOpen}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pl-10 pr-14 leading-relaxed text-[var(--color-gray-600)]">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
