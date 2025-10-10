import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "inverted";
  className?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

type Props = ButtonProps | LinkProps;

const baseStyles =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-800 disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base";

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-black text-white hover:-translate-y-px hover:bg-zinc-900 active:translate-y-0 px-6 py-2.5 shadow-[0_12px_24px_rgba(0,0,0,0.2)]",
  secondary:
    "border border-zinc-300 text-zinc-900 hover:bg-zinc-100 px-6 py-2.5",
  inverted:
    "bg-white text-zinc-900 hover:bg-zinc-100 px-6 py-2.5 shadow-[0_16px_30px_rgba(17,17,17,0.16)]",
};

export function Button(props: Props) {
  if ("href" in props) {
    const { children, variant = "primary", className, href, ...linkRest } =
      props as LinkProps;
    const classes = cn(baseStyles, variants[variant], className);

    if (!href) {
      throw new Error("Le composant Button avec lien requiert un href valide.");
    }

    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  const { children, variant = "primary", className, ...rest } = props;
  const classes = cn(baseStyles, variants[variant], className);

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
