"use client";

import { useState } from "react";
import { Section, SectionHeader, Icon } from "@/components/ui";
import { FAQ_ITEMS } from "@/data/constants";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section id="faq" background="white">
      <SectionHeader
        subtitle="FAQ"
        title="Questions fréquentes"
        description="Retrouvez les réponses aux questions les plus courantes sur nos services."
      />

      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="border border-[var(--color-gray-200)] rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  className={cn(
                    "w-full flex items-center justify-between p-5 text-left",
                    "transition-colors duration-200",
                    isOpen
                      ? "bg-[var(--color-gray-50)]"
                      : "bg-white hover:bg-[var(--color-gray-50)]"
                  )}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${item.id}`}
                >
                  <span className="font-semibold text-[var(--color-secondary)] pr-4">
                    {item.question}
                  </span>
                  <Icon
                    name="chevron-down"
                    size={20}
                    className={cn(
                      "text-[var(--color-gray-400)] transition-transform duration-200 flex-shrink-0",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                <div
                  id={`faq-${item.id}`}
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    isOpen ? "max-h-96" : "max-h-0"
                  )}
                  aria-hidden={!isOpen}
                >
                  <div className="p-5 pt-0 text-[var(--color-gray-600)] leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Question supplémentaire */}
        <div className="mt-10 text-center p-6 bg-[var(--color-gray-50)] rounded-xl">
          <p className="text-[var(--color-gray-600)] mb-4">
            Vous avez une autre question ?
          </p>
          <a
            href="/contact"
            className="text-[var(--color-primary)] font-semibold hover:underline inline-flex items-center gap-2"
          >
            Contactez-nous
            <Icon name="arrow-right" size={16} />
          </a>
        </div>
      </div>
    </Section>
  );
}
