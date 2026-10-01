import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "white" | "glass";
export type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "btn-shine text-white bg-[linear-gradient(135deg,var(--color-primary),var(--color-accent))] shadow-[var(--shadow-glow)] hover:shadow-[0_14px_50px_-8px_rgb(36_71_224/0.7)] hover:-translate-y-0.5",
  secondary:
    "btn-shine bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-light)] hover:-translate-y-0.5",
  outline:
    "border border-[var(--color-gray-300)] bg-white/60 text-[var(--color-secondary)] hover:border-[var(--color-secondary)] hover:bg-white",
  ghost:
    "text-[var(--color-gray-600)] hover:text-[var(--color-primary)] hover:bg-[var(--color-gray-100)]",
  white:
    "btn-shine bg-white text-[var(--color-secondary)] shadow-[0_10px_40px_-10px_rgb(255_255_255/0.45)] hover:-translate-y-0.5",
  glass:
    "border border-white/15 bg-white/[0.06] text-white backdrop-blur-md hover:bg-white/[0.12] hover:border-white/25",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-7 text-base",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}) {
  return cn(
    "group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-[-0.01em]",
    "transition-all duration-300 ease-[var(--ease-out-expo)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    className
  );
}
