import { cn } from "@/lib/utils";
import { COMPANY } from "@/data/constants";

interface LogoMarkProps {
  className?: string;
  /** id unique du dégradé SVG si plusieurs logos sont présents sur la page */
  gradientId?: string;
}

/** Monogramme W dans un carré arrondi en dégradé */
export function LogoMark({ className, gradientId = "logo-gradient" }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-8 w-8", className)} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5b7bff" />
          <stop offset="0.55" stopColor="#6d5dfc" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill={`url(#${gradientId})`} />
      <path
        d="M8 10.5l3.3 11 4.7-8 4.7 8 3.3-11"
        fill="none"
        stroke="#fff"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  gradientId?: string;
}

export function Logo({ className, gradientId }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 font-semibold tracking-[-0.03em]", className)}>
      <LogoMark gradientId={gradientId} />
      <span className="text-[1.3rem] leading-none">{COMPANY.name}</span>
    </span>
  );
}
