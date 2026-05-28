import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "solid-cream" | "solid-navy" | "outline-navy" | "outline-cream";
  className?: string;
  icon?: ReactNode;
};

const variants = {
  solid: "btn-solid",
  "solid-cream": "btn-solid-cream",
  "solid-navy": "btn-solid-navy",
  "outline-navy": "btn-outline-navy",
  "outline-cream": "btn-outline-cream",
};

export const Button = ({ children, href, onClick, variant = "solid", className, icon }: ButtonProps) => {
  const classes = cn("btn-base", variants[variant], className);
  const buttonIcon = icon ?? <ArrowRight className="h-4 w-4 shrink-0" />;

  if (href) {
    return (
      <Link to={href} className={classes}>
        <span>{children}</span>
        {buttonIcon}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      <span>{children}</span>
      {buttonIcon}
    </button>
  );
};
