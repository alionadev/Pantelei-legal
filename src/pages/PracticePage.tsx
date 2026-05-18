import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { practiceData } from "../data/practiceData";
import { useLocale } from "../hooks/useLocale";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Accordion } from "../components/ui/Accordion";
import { SharedCta } from "../components/sections/SharedCta";

const practiceHeroPills = {
  "drept-civil": {
    ro: ["Din 3 zile lucrătoare", "SRL, PFA, sucursală"],
    ru: ["От 3 рабочих дней", "SRL, PFA, филиал"],
  },
  "drept-comercial": {
    ro: ["Suport recurent", "Contracte, negocieri, revizuire"],
    ru: ["Постоянная поддержка", "Договоры, переговоры, ревью"],
  },
  "drept-imobiliar": {
    ro: ["Dosar complet", "Permis, rezidență, cetățenie"],
    ru: ["Полный пакет", "ВНЖ, резиденция, гражданство"],
  },
  "dreptul-familiei": {
    ro: ["Verificare înainte de semnare", "Achiziții, due diligence, tranzacții"],
    ru: ["Проверка до подписания", "Покупка, due diligence, сделка"],
  },
  "drept-fiscal": {
    ro: ["Pregătire rapidă", "Acte, traduceri, corespondență"],
    ru: ["Быстрая подготовка", "Документы, переводы, переписка"],
  },
} as const;

export const PracticePage = () => {
  const { slug } = useParams();
  const { locale, t } = useLocale();
  const practice = practiceData.find((item) => item.slug === slug) ?? practiceData[0];
  const heroPills = practiceHeroPills[practice.slug][locale];
  const processSectionTitle = locale === "ru" ? "Этапы работы" : "Etapele colaborării";
  const faqSectionTitle = locale === "ru" ? "Частые вопросы" : "Întrebări frecvente";
  const heroRef = useRef<HTMLElement | null>(null);
  const introRef = useRef<HTMLParagraphElement | null>(null);
  const summaryRef = useRef<HTMLParagraphElement | null>(null);
  const [introFill, setIntroFill] = useState(0);
  const [summaryFill, setSummaryFill] = useState(0);

  const parseProcessStep = (step: string) => {
    const match = step.match(/^([^\.]+)(?:\.\s*(.+))?$/);
    return {
      title: match?.[1]?.trim() ?? step,
      description: match?.[2]?.trim() ?? "",
    };
  };

  useEffect(() => {
    const getCenterFillProgress = (element: HTMLElement | null, viewportFactor = 0.56, travelFactor = 0.24) => {
      if (!element) return 0;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const triggerLine = viewportHeight * viewportFactor;
      const travelDistance = Math.max(rect.height + viewportHeight * travelFactor, 1);

      return Math.min(Math.max((triggerLine - rect.top) / travelDistance, 0), 1);
    };

    const updateFill = () => {
      const section = heroRef.current;
      if (!section) return;

      setIntroFill(getCenterFillProgress(introRef.current, 0.56, 0.28));
      setSummaryFill(getCenterFillProgress(summaryRef.current, 0.58, 0.34));
    };

    updateFill();
    window.addEventListener("scroll", updateFill, { passive: true });
    window.addEventListener("resize", updateFill);

    return () => {
      window.removeEventListener("scroll", updateFill);
      window.removeEventListener("resize", updateFill);
    };
  }, []);

  return (
    <>
      <section ref={heroRef} className="relative overflow-hidden bg-paper px-0 pb-[clamp(40px,5vw,72px)] pt-[clamp(56px,8vw,104px)] text-ink lg:pt-[34vh]">
        <div className="container-x relative grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:grid-rows-[auto_auto] lg:items-start lg:gap-20">
          <div data-reveal="true" className="max-w-none lg:pr-8 lg:row-start-1 lg:col-start-1">
            <div className="mb-7 flex flex-wrap gap-3 lg:mb-8">
              {heroPills.map((pill) => (
                <div key={pill} className="bg-cream px-4 py-3 text-[11px] uppercase tracking-[0.14em] text-navy/78">
                  {pill}
                </div>
              ))}
            </div>
            <h1
              className="w-full max-w-none font-serif text-[clamp(58px,7.2vw,122px)] leading-[0.9] tracking-[-0.03em] text-ink lg:w-[40vw]"
            >
              {practice.title[locale]}
            </h1>
            <p
              ref={introRef}
              className="mt-10 w-full max-w-none text-[clamp(22px,2.35vw,34px)] font-semibold leading-[1.24] practice-fill-text-diagonal lg:mt-12 lg:w-[40vw]"
              style={{ ["--fill-progress" as string]: `${introFill * 100}%` }}
            >
              {practice.intro[locale]}
            </p>
          </div>

          <div data-reveal="true" style={{ transitionDelay: "90ms" }} className="grid gap-8 lg:row-start-2 lg:col-start-2 lg:pl-[max(2vw,1rem)]">
            <p
              ref={summaryRef}
              className="w-full max-w-none text-[16px] leading-[1.75] practice-fill-text-diagonal lg:ml-auto lg:w-[40vw] lg:text-[15px]"
              style={{ ["--fill-progress" as string]: `${summaryFill * 100}%` }}
            >
              {practice.summary[locale]}
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-x grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div data-reveal="true">
            <h2 className="w-full max-w-none font-serif text-[clamp(44px,6vw,84px)] leading-[0.94] tracking-[-0.03em] text-navy">
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
        <div className="container-x">
          <SectionHeading eyebrow={t.practicePage.processTitle} title={processSectionTitle} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:items-stretch">
            {practice.process[locale].map((step, index) => {
              const { title, description } = parseProcessStep(step);
              return (
                <article
                  key={step}
                  data-reveal="true"
                  style={{ transitionDelay: `${60 + index * 60}ms` }}
                  className="group overflow-hidden rounded-3xl border border-navy/12 bg-paper p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(36,55,105,0.08)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="eyebrow text-navy/58">{locale === "ru" ? "Этап" : "Etapa"}</span>
                    <span className="font-serif text-[32px] italic leading-none text-navy/70">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="h-1 w-14 rounded-full bg-navy/10" />
                    <h3 className="font-serif text-[24px] leading-[1.2] text-navy">{title}.</h3>
                    {description ? (
                      <p className="text-[16px] leading-[1.75] text-ink/84">{description}</p>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-x">
          <SectionHeading eyebrow={t.practicePage.faqTitle} title={faqSectionTitle} />
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
