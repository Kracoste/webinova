import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "gradient" | "night";
}

const backgroundStyles = {
  white: "bg-white",
  gray: "bg-[var(--color-gray-50)]",
  gradient: "bg-gradient-to-b from-white to-[var(--color-gray-50)]",
  night: "bg-[var(--night-900)] text-white",
};

export function Section({
  children,
  className,
  id,
  background = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("section relative", backgroundStyles[background], className)}
    >
      <div className="container relative">{children}</div>
    </section>
  );
}

interface EyebrowProps {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}

/** Petit libellé en capsule au-dessus des titres */
export function Eyebrow({ children, dark = false, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]",
        dark
          ? "border-white/10 bg-white/[0.04] text-white/70"
          : "border-[var(--color-gray-200)] bg-white text-[var(--color-gray-600)] shadow-[var(--shadow-sm)]",
        className
      )}
    >
      <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
        <span className="absolute inset-0 rounded-full bg-[var(--color-primary-light)] animate-ping-soft" />
        <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--color-primary-light)]" />
      </span>
      {children}
    </span>
  );
}

interface SectionHeaderProps {
  title: ReactNode;
  subtitle?: string;
  description?: ReactNode;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-14 md:mb-16", centered && "text-center mx-auto max-w-3xl", className)}>
      {subtitle && (
        <Eyebrow dark={dark} className="mb-5">
          {subtitle}
        </Eyebrow>
      )}
      <h2 className={cn("mb-5", dark && "text-white")}>{title}</h2>
      {description && (
        <p
          className={cn(
            "text-lg leading-relaxed",
            centered && "mx-auto max-w-2xl",
            dark ? "text-white/60" : "text-[var(--color-gray-500)]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
