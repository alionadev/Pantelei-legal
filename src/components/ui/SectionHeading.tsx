import { cn } from "../../lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export const SectionHeading = ({ eyebrow, title, align = "left", inverse = false }: SectionHeadingProps) => (
  <div className={cn(align === "center" ? "text-center" : "", inverse ? "text-cream" : "text-ink")}>
    <h2 className="max-w-7xl m-auto font-serif text-[clamp(42px,6vw,88px)] italic leading-[0.98] tracking-[-0.015em]">
      {title}
    </h2>
    <div className={cn("mt-8", align === "center" ? "mx-auto" : "", inverse ? "double-rule-cream" : "double-rule")} />
  </div>
);
