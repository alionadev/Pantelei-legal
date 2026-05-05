import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

type Item = {
  question: string;
  answer: string;
};

export const Accordion = ({ items, inverse = false }: { items: Item[]; inverse?: boolean }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("divide-y", inverse ? "divide-cream/20" : "divide-navy/15")}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="py-5">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={cn(
                "flex w-full items-start justify-between gap-8 text-left transition duration-300",
                inverse ? "text-cream" : "text-navy",
              )}
            >
              <span className="font-serif text-[clamp(24px,3vw,34px)] italic leading-tight">{item.question}</span>
              <ChevronDown className={cn("mt-2 h-5 w-5 shrink-0 transition duration-300", isOpen ? "rotate-180" : "")} />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className={cn("max-w-3xl text-[17px] leading-[1.7]", inverse ? "text-cream/82" : "text-ink/82")}>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
