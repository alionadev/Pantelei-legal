import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { practiceData } from "../data/practiceData";
import { useLocale } from "../hooks/useLocale";
import { withLocalePath } from "../lib/locale";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Watermark } from "../components/ui/Watermark";
import { SharedCta } from "../components/sections/SharedCta";

const partners = ["Ionescu & Partners", "Nestor Advisory", "Bucharest Estates", "Forum Tax Desk", "Arbiter House"];

export const HomePage = () => {
  const { locale, t } = useLocale();
  const heroPortraitSrc = "/aliona-portrait-main.png";
  const aboutPortraitSrc = "/aliona-office.png";

  return (
    <>
      <section className="relative h-[calc(100svh-68px)] overflow-hidden bg-navy text-cream">
        <div className="paper-grain" />
        <div className="container-x grid h-full items-center gap-10 py-8 lg:grid-cols-[minmax(0,1.18fr)_minmax(460px,0.82fr)] lg:gap-12 lg:py-10 xl:grid-cols-[minmax(0,1.24fr)_minmax(560px,0.76fr)]">
          <div className="relative z-10 flex h-full flex-col justify-center" data-reveal="true" style={{ transitionDelay: "60ms" }}>
            <div className="flex items-center gap-4">
              <div className="eyebrow text-cream/74">{t.hero.eyebrow}</div>
              <span className="h-px w-9 bg-cream/40" />
            </div>
            <div className="mt-10">
              <h1 className="font-serif text-[clamp(54px,6vw,108px)] leading-[0.9] tracking-[-0.02em]">
                <span className="block">{t.hero.titleTop}</span>
                <span className="mt-3 block font-light italic opacity-90">{t.hero.titleBottom}</span>
              </h1>
            </div>
            <div className="mt-10 w-full">
              <div className="double-rule-cream w-[120px]" />
              <p className="mt-8 text-[16px] leading-[1.72] text-cream/82 lg:text-[17px]">
                {t.hero.description}
              </p>
              <div className="mt-8 grid gap-0 border-y border-cream/16 md:grid-cols-3">
                {t.hero.highlights.map((item, index) => (
                  <div
                    key={item}
                    className={`px-0 py-5 text-[clamp(20px,1.8vw,26px)] font-serif leading-[1.28] text-cream/90 ${
                      index < 2 ? "md:border-r md:border-cream/16 md:pr-6" : ""
                    } ${index > 0 ? "md:pl-6" : ""}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={withLocalePath(locale, "/contact")} variant="solid-cream">
                  {t.hero.primaryCta}
                </Button>
                <Button href={`${withLocalePath(locale, "/")}#services`} variant="outline-cream">
                  {t.hero.secondaryCta}
                </Button>
              </div>
            </div>
          </div>
          <div className="relative z-10 hidden h-full items-center justify-end lg:flex" data-reveal="true" style={{ transitionDelay: "120ms" }}>
            <div className="w-full max-w-[820px]">
              <div className="relative aspect-[4/5] max-h-[80vh] overflow-hidden border border-cream/24 p-3">
                <img
                  src={heroPortraitSrc}
                  alt="Aliona Pantelei"
                  className="h-full w-full object-cover object-center grayscale-[6%]"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = "/portrait-placeholder.svg";
                  }}
                />
                <div className="photo-overlay" />
                <div className="absolute bottom-0 left-0 bg-cream px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-navy">
                  {t.hero.portraitTag}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section className="section-y bg-paper">
        <div className="container-x">
          <SectionHeading eyebrow={t.forWhom.eyebrow} title={t.forWhom.title} />
          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {t.forWhom.cards.map((card, index) => (
              <article
                key={card.title}
                data-reveal="true"
                style={{ transitionDelay: `${60 + index * 60}ms` }}
                className={`relative min-h-[380px] overflow-hidden border p-8 ${index === 0 ? "border-navy bg-navy text-cream" : index === 1 ? "border-navy/14 bg-cream text-ink" : "border-navy/12 bg-paper text-ink"}`}
              >
                <Watermark value={card.roman} className={`right-2 top-1 text-[280px] ${index === 0 ? "text-cream/6" : "text-navy/5"}`} />
                <div className="relative">
                  <div className={`eyebrow ${index === 0 ? "text-cream/58" : "text-navy/52"}`}>{card.roman}</div>
                  <h3 className="mt-8 font-serif text-[36px] italic leading-none">{card.title}</h3>
                  <div className={`mt-8 h-px w-full ${index === 0 ? "bg-cream/16" : "bg-navy/12"}`} />
                  <div className="mt-6 space-y-4">
                    {card.items.map((item) => (
                      <div key={item} className={`border-b pb-4 text-[16px] ${index === 0 ? "border-cream/12 text-cream/82" : "border-navy/10 text-ink/82"}`}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-y relative scroll-mt-28 overflow-hidden bg-navy text-cream">
        <div className="paper-grain" />
        <Watermark value="II" className="bottom-[-40px] left-0 hidden md:block text-[clamp(320px,34vw,560px)] text-cream/5" />
        <div className="container-x relative">
          <SectionHeading eyebrow={t.servicesHome.eyebrow} title={t.servicesHome.title} inverse />
          <ol className="mt-14">
            {practiceData.map((practice, index) => (
              <li key={practice.slug} data-reveal="true" style={{ transitionDelay: `${60 + index * 45}ms` }} className="border-b border-cream/22 py-8 md:py-9">
                <Link to={withLocalePath(locale, `/servicii/${practice.slug}`)} className="group grid gap-6 md:grid-cols-[80px_1fr_auto] md:items-center">
                  <div className="font-serif text-[60px] italic leading-none text-cream/60">{["I", "II", "III", "IV", "V"][index]}</div>
                  <div className="font-serif text-[clamp(28px,3.4vw,44px)] italic leading-none">{practice.title[locale]}</div>
                  <div className="flex items-center justify-between gap-6 md:justify-end">
                    <div className="max-w-md text-[11px] uppercase tracking-[0.18em] text-cream/68 md:text-right">{practice.summary[locale]}</div>
                    <ArrowRight className="h-5 w-5 transition duration-300 group-hover:translate-x-2" />
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-x grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div data-reveal="true" style={{ transitionDelay: "60ms" }}>
            <div className="border border-navy/12 p-3">
              <img
                src={aboutPortraitSrc}
                alt="Aliona Pantelei"
                className="aspect-[4/5] w-full border border-navy/12 object-cover"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = "/portrait-placeholder.svg";
                }}
              />
            </div>
          </div>
          <div data-reveal="true" style={{ transitionDelay: "120ms" }} className="border-l-2 border-navy pl-[clamp(24px,3vw,56px)]">
            <div className="eyebrow text-navy/62">{t.aboutSnippet.eyebrow}</div>
            <h2 className="mt-6 max-w-3xl font-serif text-[clamp(42px,5vw,74px)] italic leading-[1.02] tracking-[-0.015em]">
              {t.aboutSnippet.title}
            </h2>
            <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-ink/82">{t.aboutSnippet.text}</p>
            <div className="mt-10">
              <Button href={withLocalePath(locale, "/despre-aliona")} variant="outline-navy">
                {t.aboutSnippet.cta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow={t.whyUs.eyebrow} title={t.whyUs.title} />
          <div className="space-y-6">
            {t.whyUs.items.map((item, index) => (
              <div key={item.title} data-reveal="true" style={{ transitionDelay: `${60 + index * 60}ms` }} className="border-b border-navy/12 pb-6">
                <div className="flex gap-5">
                  <div className="w-12 shrink-0 font-serif text-[36px] italic leading-none text-navy/60">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="font-serif text-[26px] italic leading-none text-navy">{item.title}</h3>
                    <p className="mt-4 max-w-2xl text-[15px] leading-[1.75] text-ink/82">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-x">
          <div className="double-rule" />
          <div className="grid items-center gap-6 py-6 md:grid-cols-[260px_1fr]">
            <div className="eyebrow text-navy/66">{t.labels.collaboration}</div>
            <div className="overflow-hidden border-x border-navy/12 py-4">
              <div className="marquee-track">
                {[...partners, ...partners].map((partner, index) => (
                  <span key={`${partner}-${index}`} className="marquee-item">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="double-rule" />
        </div>
      </section>

      <SharedCta locale={locale} eyebrow={t.cta.eyebrow} title={t.cta.title} button={t.cta.button} />
    </>
  );
};
