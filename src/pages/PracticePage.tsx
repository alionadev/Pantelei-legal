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
      <section ref={heroRef} className="relative overflow-hidden bg-paper px-0 pb-[clamp(40px,5vw,72px)] pt-[clamp(56px,8vw,104px)] text-ink">
        <div className="container-x">
          <div className="max-w-[1680px]">
          <div data-reveal="true" className="max-w-none">
            <div className="mb-7 flex flex-wrap gap-3 lg:mb-8">
              {heroPills.map((pill) => (
                <div key={pill} className="bg-cream px-4 py-3 text-[11px] uppercase tracking-[0.14em] text-navy/78">
                  {pill}
                </div>
              ))}
            </div>
            <h1 className="display-title w-full max-w-none text-ink xl:max-w-[17ch] 2xl:max-w-[18ch]">
              {practice.title[locale]}
            </h1>
            <p
              ref={introRef}
              className="lead-copy mt-8 w-full max-w-none font-semibold practice-fill-text-diagonal lg:mt-10 xl:max-w-[42ch] 2xl:max-w-[46ch]"
              style={{ ["--fill-progress" as string]: `${introFill * 100}%` }}
            >
              {practice.intro[locale]}
            </p>
            <p
              ref={summaryRef}
              data-reveal="true"
              style={{
                transitionDelay: "90ms",
                ["--fill-progress" as string]: `${summaryFill * 100}%`,
              }}
              className="body-copy mt-8 w-full max-w-none practice-fill-text-diagonal text-ink/80 lg:mt-10 xl:ml-auto xl:max-w-[46ch] 2xl:max-w-[52ch]"
            >
              {practice.summary[locale]}
            </p>
          </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-x grid gap-8 2xl:grid-cols-[minmax(260px,0.56fr)_minmax(0,1.44fr)] 2xl:gap-12">
          <div data-reveal="true">
            <h2 className="section-title w-full max-w-none text-navy">
              {locale === "ru" ? "Что входит" : "Ce include"}
            </h2>
          </div>
          <div className="space-y-3">
            {practice.services[locale].map((service, index) => (
              <div
                key={service}
                data-reveal="true"
                style={{ transitionDelay: `${60 + index * 50}ms` }}
                className="grid grid-cols-[34px_minmax(0,1fr)] items-start gap-4 border-b border-navy/12 pb-3.5 sm:grid-cols-[40px_minmax(0,1fr)] sm:gap-5 sm:pb-4"
              >
                <span className="font-serif text-[30px] italic leading-none text-navy/60 sm:text-[34px]">{String(index + 1).padStart(2, "0")}</span>
                <p className="body-copy text-ink/84">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-x">
          <SectionHeading eyebrow={t.practicePage.processTitle} title={processSectionTitle} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 xl:items-stretch">
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
                    <h3 className="title-sm text-navy">{title}.</h3>
                    {description ? (
                      <p className="body-copy text-ink/84">{description}</p>
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
