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
      <section className="relative overflow-hidden bg-paper section-y text-ink">
        <Watermark value="IV" className="right-8 top-6 hidden md:block text-[clamp(280px,32vw,520px)] text-navy/4" />
        <div className="container-x relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div data-reveal="true" className="max-w-4xl">
            <h1 className="max-w-[10ch] font-serif text-[clamp(54px,7vw,108px)] leading-[0.92] tracking-[-0.03em] text-navy">
              {practice.title[locale]}
            </h1>
            <div className="mt-8 h-px w-[140px] bg-navy/72" />
            <p className="mt-8 max-w-3xl text-[clamp(22px,2.2vw,34px)] leading-[1.28] text-ink/46">
              {practice.intro[locale]}
            </p>
          </div>

          <div data-reveal="true" style={{ transitionDelay: "90ms" }} className="grid gap-8 lg:pt-[clamp(100px,12vw,180px)]">
            <div className="min-h-[320px] bg-cream" />
            <p className="max-w-xl text-[17px] leading-[1.8] text-ink/78">{practice.summary[locale]}</p>
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-x grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div data-reveal="true">
            <div className="eyebrow text-navy/58">{t.practicePage.servicesTitle}</div>
            <h2 className="mt-6 max-w-[8ch] font-serif text-[clamp(44px,6vw,84px)] leading-[0.94] tracking-[-0.03em] text-navy">
              {locale === "ru" ? "Что входит" : "Ce include"}
            </h2>
          </div>
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
