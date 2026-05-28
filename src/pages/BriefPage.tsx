import { ChangeEvent, FormEvent, useState } from "react";
import { ArrowRight, Check, Clock3, FileText, Mail } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useLocale } from "../hooks/useLocale";
import { formatPhoneInput } from "../lib/utils";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  deadline: "",
  message: "",
};

export const BriefPage = () => {
  const { locale, t } = useLocale();
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (field: keyof typeof initialForm) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = field === "phone" ? formatPhoneInput(event.target.value) : event.target.value;
    setForm((current) => ({ ...current, [field]: value }));
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const subject = locale === "ru" ? "Бриф с сайта Pantelei Legal" : "Brief de pe site Pantelei Legal";
    const body = [
      `${t.briefPage.form.name}: ${form.name}`,
      `${t.briefPage.form.email}: ${form.email}`,
      `${t.briefPage.form.phone}: ${form.phone}`,
      `${t.briefPage.form.service}: ${form.service}`,
      `${t.briefPage.form.deadline}: ${form.deadline || "-"}`,
      "",
      `${t.briefPage.form.message}:`,
      form.message,
    ].join("\n");

    window.location.href = `mailto:pantelei.legaladviser@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section className="bg-paper py-[clamp(44px,6vw,88px)]">
      <div className="container-x grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.75fr)] xl:gap-10">
        <div data-reveal="true">
          <SectionHeading eyebrow={t.briefPage.eyebrow} title={t.briefPage.title} />
          <p className="body-copy mt-6 max-w-3xl text-ink/78">{t.briefPage.description}</p>

          <form onSubmit={onSubmit} className="mt-8 grid gap-4 border border-navy/12 bg-cream p-[clamp(20px,4vw,40px)]">
            <div className="grid gap-4 md:grid-cols-2">
              <input required value={form.name} onChange={onChange("name")} placeholder={t.briefPage.form.name} className="field bg-paper" />
              <input required type="email" value={form.email} onChange={onChange("email")} placeholder={t.briefPage.form.email} className="field bg-paper" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input required value={form.phone} onChange={onChange("phone")} placeholder={t.briefPage.form.phone} className="field bg-paper" />
              <select required value={form.service} onChange={onChange("service")} className="field bg-paper">
                <option value="">{t.briefPage.form.servicePlaceholder}</option>
                {t.briefPage.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <input value={form.deadline} onChange={onChange("deadline")} placeholder={t.briefPage.form.deadline} className="field bg-paper" />
            <textarea required value={form.message} onChange={onChange("message")} placeholder={t.briefPage.form.message} className="field min-h-[180px] bg-paper" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button type="submit" className="btn-base btn-solid-navy w-full sm:w-fit">
                <span>{t.briefPage.form.submit}</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </button>
              {submitted ? <p className="body-copy-sm text-navy/74">{t.briefPage.success}</p> : null}
            </div>
          </form>
        </div>

        <aside className="space-y-4 xl:pt-[clamp(82px,8vw,124px)]" data-reveal="true" style={{ transitionDelay: "120ms" }}>
          <article className="bg-navy p-[clamp(22px,4vw,34px)] text-cream">
            <div className="eyebrow text-cream/58">{locale === "ru" ? "Что указать" : "Ce să includeți"}</div>
            <div className="mt-8 space-y-6">
              {t.briefPage.notes.map((note) => (
                <div key={note} className="flex gap-4">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-cream/76" />
                  <p className="body-copy text-cream/84">{note}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="border border-navy/12 bg-cream p-[clamp(22px,4vw,34px)]">
            <div className="grid gap-5">
              <div className="flex gap-4">
                <FileText className="mt-1 h-5 w-5 shrink-0 text-navy/70" />
                <p className="body-copy text-ink/78">
                  {locale === "ru" ? "Бриф помогает не терять время на уточнение базовых вводных." : "Brief-ul reduce timpul pierdut pe clarificări de bază."}
                </p>
              </div>
              <div className="flex gap-4">
                <Clock3 className="mt-1 h-5 w-5 shrink-0 text-navy/70" />
                <p className="body-copy text-ink/78">
                  {locale === "ru" ? "После отправки можно сразу перейти к оценке сроков и формата работы." : "După trimitere, putem evalua mai repede termenii și formatul colaborării."}
                </p>
              </div>
              <a href="mailto:pantelei.legaladviser@gmail.com" className="flex gap-4 border-t border-navy/12 pt-5 transition duration-300 hover:text-navy">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-navy/70" />
                <span className="body-copy text-ink/78">pantelei.legaladviser@gmail.com</span>
              </a>
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
};
