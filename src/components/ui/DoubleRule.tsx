import { cn } from "../../lib/utils";

export const DoubleRule = ({ inverse = false, className = "" }: { inverse?: boolean; className?: string }) => (
  <div className={cn(inverse ? "double-rule-cream" : "double-rule", className)} />
);
