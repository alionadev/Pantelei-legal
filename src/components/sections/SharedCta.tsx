import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import { withLocalePath } from "../../lib/locale";
import type { Locale } from "../../lib/types";

const items = [
  { icon: Phone, value: "+40 757 296 443" },
  { icon: Mail, value: "pantelei.legaladviser@gmail.com" },
  { icon: MapPin, value: "București, România" },
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
      <div className="mt-14 grid divide-y divide-cream/14 border border-cream/16 md:grid-cols-2 md:divide-x xl:grid-cols-4 xl:divide-y-0">
        {items.map((item, index) => {
          const Icon = item.icon;
          const isEmail = item.value.includes("@");
          return (
            <div key={item.value} className="flex min-h-[170px] flex-col justify-center gap-4 p-8">
              <Icon className="h-8 w-8 text-cream/76" />
              <div className="eyebrow text-cream/55">Contact</div>
              <div
                className={`font-serif italic leading-[1.05] text-[clamp(22px,8vw,34px)] ${
                  isEmail ? "break-all text-[clamp(18px,6.2vw,30px)] leading-[1.12]" : ""
                }`}
              >
                {item.value}
              </div>
            </div>
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
