import { ChangeEvent, FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Clock3 } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useLocale } from "../hooks/useLocale";
import { formatPhoneInput } from "../lib/utils";

const initialForm = { name: "", email: "", phone: "", subject: "", message: "" };

export const ContactPage = () => {
  const { t } = useLocale();
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

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
    <section className="section-y bg-cream">
      <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div data-reveal="true">
          <SectionHeading eyebrow={t.contactPage.eyebrow} title={t.contactPage.title} />
          <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-ink/82">{t.contactPage.description}</p>
          <form onSubmit={onSubmit} className="mt-10 grid gap-5">
            <input required value={form.name} onChange={onChange("name")} placeholder={t.contactPage.form.name} className="field" />
            <div className="grid gap-5 md:grid-cols-2">
              <input required type="email" value={form.email} onChange={onChange("email")} placeholder={t.contactPage.form.email} className="field" />
              <input required value={form.phone} onChange={onChange("phone")} placeholder={t.contactPage.form.phone} className="field" />
            </div>
            <input required value={form.subject} onChange={onChange("subject")} placeholder={t.contactPage.form.subject} className="field" />
            <textarea required value={form.message} onChange={onChange("message")} placeholder={t.contactPage.form.message} className="field min-h-[180px]" />
            <button type="submit" className="btn-base btn-solid w-fit">
              {t.contactPage.form.submit}
            </button>
            {submitted ? <p className="text-[15px] leading-[1.7] text-navy/78">{t.labels.success}</p> : null}
          </form>
        </div>
        <div className="space-y-6" data-reveal="true" style={{ transitionDelay: "120ms" }}>
          <article className="border border-navy/12 bg-paper p-8">
            <div className="eyebrow text-navy/58">{t.contactPage.blockTitle}</div>
            <div className="double-rule mt-6" />
            <div className="mt-6 space-y-5">
              {[Phone, Mail, MapPin, Clock3].map((Icon, index) => {
                const values = ["+40 757 296 443", "pantelei.legaladviser@gmail.com", "București, România", "Lun–Vin 9:00–18:00"];
                return (
                  <div key={values[index]} className="flex items-start gap-4 border-b border-navy/10 pb-5">
                    <Icon className="mt-1 h-5 w-5 text-navy/72" />
                    <span className="text-[17px] leading-[1.7] text-ink/82">{values[index]}</span>
                  </div>
                );
              })}
            </div>
          </article>
          <div className="border border-navy/12 p-3">
            <img src="/map-placeholder.svg" alt="București map placeholder" className="aspect-[4/3] w-full border border-navy/12 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
