import { useParams } from "react-router-dom";
import { practiceData } from "../data/practiceData";
import { useLocale } from "../hooks/useLocale";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Accordion } from "../components/ui/Accordion";
import { SharedCta } from "../components/sections/SharedCta";
import { Watermark } from "../components/ui/Watermark";

export const PracticePage = () => {
  const { slug } = useParams();
  const { locale, t } = useLocale();
  const practice = practiceData.find((item) => item.slug === slug) ?? practiceData[0];

  return (
    <>
      <section className="relative overflow-hidden bg-navy section-y text-cream">
        <div className="paper-grain" />
        <Watermark value="IV" className="right-8 top-0 hidden md:block text-[clamp(280px,32vw,520px)] text-cream/5" />
        <div className="container-x relative">
          <div className="max-w-5xl" data-reveal="true">
            <div className="eyebrow text-cream/65">{t.practicePage.eyebrow}</div>
            <h1 className="mt-6 font-serif text-[clamp(56px,8vw,110px)] italic leading-[0.98] tracking-[-0.015em]">
              {practice.title[locale]}
            </h1>
            <div className="double-rule-cream mt-8 w-[120px]" />
            <p className="mt-8 max-w-3xl text-[18px] leading-[1.7] text-cream/84">{practice.intro[locale]}</p>
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow={t.practicePage.servicesTitle} title={practice.summary[locale]} />
          <div className="space-y-4">
            {practice.services[locale].map((service, index) => (
              <div key={service} data-reveal="true" style={{ transitionDelay: `${60 + index * 50}ms` }} className="flex items-start gap-5 border-b border-navy/12 pb-4">
                <span className="font-serif text-[34px] italic leading-none text-navy/60">{String(index + 1).padStart(2, "0")}</span>
                <p className="pt-1 text-[17px] leading-[1.7] text-ink/84">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow={t.practicePage.processTitle} title={practice.title[locale]} />
          <div className="space-y-6">
            {practice.process[locale].map((step, index) => (
              <article key={step} data-reveal="true" style={{ transitionDelay: `${60 + index * 60}ms` }} className="border border-navy/12 bg-paper p-8">
                <div className="eyebrow text-navy/58">{String(index + 1).padStart(2, "0")}</div>
                <p className="mt-4 font-serif text-[32px] italic leading-none text-navy">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-x">
          <SectionHeading eyebrow={t.practicePage.faqTitle} title={practice.title[locale]} />
          <div className="mt-12">
            <Accordion
              items={practice.faq.map((item) => ({
                question: item.question[locale],
                answer: item.answer[locale],
              }))}
            />
          </div>
        </div>
      </section>

      <SharedCta locale={locale} eyebrow={t.cta.eyebrow} title={t.cta.title} button={t.practicePage.cta} />
    </>
  );
};
