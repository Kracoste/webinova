"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

interface TiltProps {
  children: ReactNode;
  className?: string;
  /** Classes de l'élément incliné (ex. arrondi, pour que le reflet le suive) */
  innerClassName?: string;
  /** Inclinaison maximale en degrés */
  max?: number;
  /** Reflet lumineux qui suit la souris */
  glare?: boolean;
}

/**
 * Incline son contenu en 3D selon la position de la souris.
 * Désactivé automatiquement au doigt (pointerType !== "mouse").
 */
export function Tilt({ children, className, innerClassName, max = 8, glare = true }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty("--tilt-x", `${(0.5 - py) * max * 2}deg`);
      el.style.setProperty("--tilt-y", `${(px - 0.5) * max * 2}deg`);
      el.style.setProperty("--glare-x", `${px * 100}%`);
      el.style.setProperty("--glare-y", `${py * 100}%`);
      el.style.setProperty("--glare-o", "1");
    });
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
    el.style.setProperty("--glare-o", "0");
  };

  return (
    <div className={cn("[perspective:1200px]", className)}>
      <div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        className={cn(
          "relative h-full preserve-3d transition-transform duration-500 ease-[var(--ease-out-expo)] will-change-transform",
          innerClassName
        )}
        style={{ transform: "rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))" }}
      >
        {children}
        {glare && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500"
            style={{
              opacity: "var(--glare-o, 0)",
              background:
                "radial-gradient(600px circle at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255,255,255,0.16), transparent 40%)",
            }}
          />
        )}
      </div>
    </div>
  );
}
