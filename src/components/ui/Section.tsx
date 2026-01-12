import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "gradient";
}

const backgroundStyles = {
  white: "bg-white",
  gray: "bg-[var(--color-gray-50)]",
  gradient: "bg-gradient-to-b from-white to-[var(--color-gray-50)]",
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
      className={cn("section", backgroundStyles[background], className)}
    >
      <div className="container">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      {subtitle && (
        <span className="inline-block text-[var(--color-primary)] font-semibold text-sm uppercase tracking-wider mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="mb-4">{title}</h2>
      {description && (
        <p className="text-lg max-w-3xl mx-auto">{description}</p>
      )}
    </div>
  );
}
