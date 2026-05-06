import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "solid-cream" | "outline-navy" | "outline-cream";
  className?: string;
};

const variants = {
  solid: "btn-solid",
  "solid-cream": "btn-solid-cream",
  "outline-navy": "btn-outline-navy",
  "outline-cream": "btn-outline-cream",
};

export const Button = ({ children, href, onClick, variant = "solid", className }: ButtonProps) => {
  const classes = cn("btn-base", variants[variant], className);

  if (href) {
    return (
      <Link to={href} className={classes}>
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      <span>{children}</span>
    </button>
  );
};
