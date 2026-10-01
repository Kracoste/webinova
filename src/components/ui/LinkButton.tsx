import Link from "next/link";
import { forwardRef, type AnchorHTMLAttributes } from "react";
import { buttonClasses, type ButtonVariant, type ButtonSize } from "./buttonStyles";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  external?: boolean;
}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      className,
      href,
      variant = "primary",
      size = "md",
      fullWidth = false,
      external = false,
      children,
      ...props
    },
    ref
  ) => {
    const classes = buttonClasses({ variant, size, fullWidth, className });

    // Liens externes, tel: et mailto: ne passent pas par le routeur Next
    if (external || /^(https?:|tel:|mailto:)/.test(href)) {
      return (
        <a
          ref={ref}
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link ref={ref} href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
);

LinkButton.displayName = "LinkButton";

export { LinkButton, type LinkButtonProps };
