import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import { withLocalePath } from "../../lib/locale";
import type { Locale } from "../../lib/types";
import { cn } from "../../lib/utils";

const items = [
  { icon: Phone, value: "+40 757 296 443", href: "tel:+40757296443" },
  { icon: Mail, value: "pantelei.legaladviser@gmail.com", href: "mailto:pantelei.legaladviser@gmail.com" },
  { icon: MapPin, value: "București, România", href: "https://www.google.com/maps/search/?api=1&query=Bucure%C8%99ti%2C%20Rom%C3%A2nia" },
  { icon: Clock3, value: "Lun–Vin 9:00–18:00" },
];

export const SharedCta = ({
  locale,
  eyebrow,
  title,
  button,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  button: string;
}) => (
  <section className="section-y bg-navy text-cream">
    <div className="container-x">
      <SectionHeading eyebrow={eyebrow} title={title} align="center" inverse />
      <div className="mt-12 grid border border-cream/16 md:grid-cols-2 2xl:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          const isEmail = item.value.includes("@");
          const cardClasses = cn(
            "flex min-h-[170px] flex-col justify-center gap-4 p-6 sm:p-8",
            "border-cream/14",
            index > 0 && "border-t",
            index % 2 === 1 && "md:border-l md:border-t-0",
            index >= 2 && "md:border-t",
            index >= 1 && "2xl:border-l 2xl:border-t-0",
          );
          const content = (
            <>
              <Icon className="h-8 w-8 text-cream/76" />
              <div className="eyebrow text-cream/55">Contact</div>
              <div
                className={`text-[clamp(16px,2vw,24px)] font-medium leading-[1.2] tracking-[-0.02em] ${
                  isEmail ? "text-[clamp(14px,1.55vw,20px)] leading-[1.26] [overflow-wrap:anywhere]" : ""
                }`}
              >
                {item.value}
              </div>
            </>
          );
          return (
            item.href ? (
              <a
                key={item.value}
                href={item.href}
                target={item.icon === MapPin ? "_blank" : undefined}
                rel={item.icon === MapPin ? "noreferrer" : undefined}
                className={cn(cardClasses, "transition duration-300 hover:bg-cream/6")}
              >
                {content}
              </a>
            ) : (
              <div key={item.value} className={cardClasses}>
                {content}
              </div>
            )
          );
        })}
      </div>
      <div className="mt-12 flex justify-center">
        <Button href={withLocalePath(locale, "/contact")} variant="solid-cream">
          {button}
        </Button>
      </div>
    </div>
  </section>
);
