"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";

interface SpotlightGroupProps {
  children: ReactNode;
  className?: string;
}

/**
 * Transmet la position de la souris aux cartes `.spotlight` enfants
 * (variables --mx / --my) pour afficher un halo lumineux qui suit le curseur.
 */
export function SpotlightGroup({ children, className }: SpotlightGroupProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    ref.current.querySelectorAll<HTMLElement>(".spotlight").forEach((card) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
  };

  return (
    <div ref={ref} onPointerMove={handleMove} className={className}>
      {children}
    </div>
  );
}
