import { ChangeEvent, FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Clock3 } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useLocale } from "../hooks/useLocale";
import { formatPhoneInput } from "../lib/utils";

const initialForm = { name: "", email: "", phone: "", subject: "", message: "" };
type ContactRow = {
  icon: typeof Phone | typeof Mail | typeof MapPin | typeof Clock3;
  value: string;
  href?: string;
  external?: boolean;
};

export const ContactPage = () => {
  const { t } = useLocale();
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const consultationImageSrc = "/aliona-consultation.png";
  const contactRows: ContactRow[] = [
    { icon: Phone, value: "+40 757 296 443", href: "tel:+40757296443" },
    { icon: Mail, value: "pantelei.legaladviser@gmail.com", href: "mailto:pantelei.legaladviser@gmail.com" },
    { icon: MapPin, value: "București, România", href: "https://www.google.com/maps/search/?api=1&query=Bucure%C8%99ti%2C%20Rom%C3%A2nia", external: true },
    { icon: Clock3, value: "Lun–Vin 9:00–18:00" },
  ];

  const onChange = (field: keyof typeof initialForm) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = field === "phone" ? formatPhoneInput(event.target.value) : event.target.value;
    setForm((current) => ({ ...current, [field]: value }));
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section className="bg-cream py-[clamp(36px,5vw,72px)] lg:min-h-[calc(100vh-84px)] lg:flex lg:items-center">
      <div className="container-x grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
        <div data-reveal="true">
          <SectionHeading eyebrow={t.contactPage.eyebrow} title={t.contactPage.title} />
          <p className="mt-5 max-w-2xl text-[16px] leading-[1.65] text-ink/82 lg:mt-6">{t.contactPage.description}</p>
          <form onSubmit={onSubmit} className="mt-7 grid gap-4 lg:mt-8">
            <input required value={form.name} onChange={onChange("name")} placeholder={t.contactPage.form.name} className="field py-3.5" />
            <div className="grid gap-4 md:grid-cols-2">
              <input required type="email" value={form.email} onChange={onChange("email")} placeholder={t.contactPage.form.email} className="field" />
              <input required value={form.phone} onChange={onChange("phone")} placeholder={t.contactPage.form.phone} className="field" />
            </div>
            <input required value={form.subject} onChange={onChange("subject")} placeholder={t.contactPage.form.subject} className="field py-3.5" />
            <textarea required value={form.message} onChange={onChange("message")} placeholder={t.contactPage.form.message} className="field min-h-[140px] lg:min-h-[128px]" />
            <button type="submit" className="btn-base btn-solid-navy w-fit">
              {t.contactPage.form.submit}
            </button>
            {submitted ? <p className="text-[15px] leading-[1.7] text-navy/78">{t.labels.success}</p> : null}
          </form>
        </div>
        <div className="space-y-4 lg:space-y-5" data-reveal="true" style={{ transitionDelay: "120ms" }}>
          <div>
            <img
              src={consultationImageSrc}
              alt="Aliona Pantelei during a client consultation"
              className="aspect-[4/3] w-full object-cover"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = "/map-placeholder.svg";
              }}
            />
          </div>
          <article className="border border-navy/12 bg-paper p-6 lg:p-7">
            <div className="eyebrow text-navy/58">{t.contactPage.blockTitle}</div>
            <div className="double-rule mt-4" />
            <div className="mt-5 space-y-4">
              {contactRows.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className="mt-1 h-5 w-5 text-navy/72" />
                    <span className="text-[16px] leading-[1.65] text-ink/82">{item.value}</span>
                  </>
                );
                return (
                  item.href ? (
                    <a
                      key={item.value}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className="flex items-start gap-4 border-b border-navy/10 pb-4 transition duration-300 hover:text-navy"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.value} className="flex items-start gap-4 border-b border-navy/10 pb-4">
                      {content}
                    </div>
                  )
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
