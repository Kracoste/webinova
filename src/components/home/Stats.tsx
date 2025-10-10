"use client";

import { useEffect, useRef, useState } from "react";
import { metrics } from "@/lib/data";
import { useCountUp } from "@/hooks/useCountUp";

function Metric({
  label,
  value,
  suffix,
  active,
}: (typeof metrics)[number] & { active: boolean }) {
  const animatedValue = useCountUp(active ? value : 0);
  const displayValue = suffix === "/5" ? animatedValue.toFixed(1) : Math.round(animatedValue);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_16px_36px_rgba(0,0,0,0.2)] backdrop-blur">
      <p className="text-4xl font-semibold text-white">
        {displayValue}
        <span className="ml-1 text-lg font-normal text-zinc-300">{suffix}</span>
      </p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 section-padding sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-zinc-900/30 bg-zinc-900 text-white">
          <div className="grid gap-12 p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">
                Indicateurs
              </p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Clarté, confiance et performance guident chaque livraison.
              </h2>
              <p className="text-sm text-zinc-300 sm:text-base">
                Nous suivons vos résultats (trafic, demandes, conversions) et ajustons si nécessaire. L&apos;objectif : un site durable, simple à maintenir et efficace pour votre activité.
              </p>
            </div>
            <div ref={containerRef} className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <Metric key={metric.id} {...metric} active={active} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
