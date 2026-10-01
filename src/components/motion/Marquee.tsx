import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /** Durée d'un tour complet, en secondes */
  duration?: number;
  reverse?: boolean;
}

/**
 * Bandeau qui défile en boucle. Le contenu est dupliqué
 * (la copie est masquée aux lecteurs d'écran) pour un raccord invisible.
 */
export function Marquee({ children, className, duration = 40, reverse = false }: MarqueeProps) {
  return (
    <div className={cn("marquee relative overflow-hidden mask-fade-x", className)}>
      <div
        className="marquee-track"
        data-reverse={reverse}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
