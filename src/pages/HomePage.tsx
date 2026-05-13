import { ArrowDown, ArrowRight, MessageCircle, Phone, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { practiceData } from "../data/practiceData";
import { useLocale } from "../hooks/useLocale";
import { withLocalePath } from "../lib/locale";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Watermark } from "../components/ui/Watermark";
import { SharedCta } from "../components/sections/SharedCta";

const partners = ["Ionescu & Partners", "Nestor Advisory", "Bucharest Estates", "Forum Tax Desk", "Arbiter House"];

export const HomePage = () => {
  const { locale, t } = useLocale();
  const servicesPanel =
    locale === "ru"
      ? {
          title: "Практики и сопровождение",
          text: "Юридическая поддержка для частных клиентов, предпринимателей и компаний в Румынии: от запуска бизнеса и иммиграционных процедур до сделок с недвижимостью и подготовки документов.",
        }
      : {
          title: "Practici și asistență juridică",
          text: "Asistență juridică pentru clienți privați, antreprenori și companii în România: de la lansarea afacerii și proceduri de imigrare până la tranzacții imobiliare și documentație completă.",
        };
  const heroPortraitSrc = "/aliona-portrait-main.png";
  const aboutPortraitSrc = "/aliona-office.png";
  const [ready, setReady] = useState(false);
  const [parallax, setParallax] = useState(0);
  const [cardParallax, setCardParallax] = useState([0, 0, 0]);

  useEffect(() => {
    setReady(true);
    const onScroll = () => {
      const scrollY = window.scrollY;
      setParallax(scrollY * 0.08);
      setCardParallax([scrollY * -0.02, scrollY * -0.015, scrollY * -0.01]);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section className="relative flex min-h-[68vh] items-center overflow-hidden bg-paper text-ink lg:-mx-[10vw] lg:w-[calc(100%+20vw)] lg:px-[10vw]">
        <div className={cn("hero-reveal-curtain", ready && "is-ready")}>
          <a href="#for-whom" className="hero-reveal-scroll" aria-label="Scroll to next section">
            <div className="hero-contact-icons">
              <span className="hero-contact-icon" aria-label="Phone">
                <Phone className="h-4 w-4" />
              </span>
              <span className="hero-contact-icon" aria-label="Viber">
                <MessageCircle className="h-4 w-4" />
              </span>
              <span className="hero-contact-icon" aria-label="Telegram">
                <Send className="h-4 w-4" />
              </span>
            </div>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
        <div className="container-x grid items-center gap-10 py-10 md:min-h-[68vh] md:grid-cols-[40%_minmax(0,1fr)] md:gap-16">
          <div
            className={cn(
              "relative hidden justify-start md:flex",
              ready ? "scale-100 opacity-100" : "scale-[0.3] opacity-0",
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex w-full items-stretch gap-8">
              <div className="w-full" style={{ transform: `translateY(${parallax}px)` }}>
                <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                  <img
                    src={heroPortraitSrc}
                    alt="Aliona Pantelei"
                    className="h-full w-full object-cover object-center"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = "/portrait-placeholder.svg";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={cn(
              "w-full transition-all duration-[800ms] ease-out",
              ready ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
            )}
          >
            <div className="mb-8 lg:hidden">
              <div className="relative mx-auto aspect-[4/5] max-w-[420px] overflow-hidden bg-cream">
                <img
                  src={heroPortraitSrc}
                  alt="Aliona Pantelei"
                  className="h-full w-full object-cover object-center"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = "/portrait-placeholder.svg";
                  }}
                />
              </div>
            </div>
            <div className="mt-6">
              <h1 className="font-serif text-[clamp(54px,6vw,100px)] italic font-light leading-[0.94] tracking-[-0.03em] text-navy">
                {t.hero.titleTop}
                <span className="mt-3 block text-[clamp(42px,4.8vw,78px)] italic font-light tracking-[-0.025em] text-navy/92">
                  {t.hero.titleBottom}
                </span>
              </h1>
            </div>
            <p className="mt-8 text-[18px] leading-[1.72] text-ink/72">
                {t.hero.description}
            </p>
            <div className="mt-10">
              <Button href={withLocalePath(locale, "/contact")} variant="solid">
                  {t.hero.primaryCta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      

      <section id="for-whom" className="section-y bg-paper">
        <div className="container-x">
          <SectionHeading eyebrow="" title={t.forWhom.title} />
          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {t.forWhom.cards.map((card, index) => (
              <article
                key={card.title}
                data-reveal="true"
                style={{
                  transitionDelay: `${60 + index * 60}ms`,
                  transform: `translateY(${cardParallax[index]}px)`,
                }}
                className={`relative min-h-[380px] overflow-hidden p-8 ${index === 0 ? "bg-navy text-cream" : index === 1 ? "bg-cream text-ink" : "bg-paper text-ink"}`}
              >
                <div className="relative">
                  <h3 className="mt-2 font-serif text-[36px] italic leading-none">{card.title}</h3>
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

      <section id="services" className="section-y relative scroll-mt-28 overflow-hidden bg-paper text-ink">
        <div className="container-x relative grid gap-8 lg:grid-cols-[40%_minmax(0,1fr)] lg:gap-16">
          <div data-reveal="true" className="bg-navy p-8 text-cream md:p-10 xl:sticky xl:top-28 xl:h-fit xl:min-h-[360px]">
            <div className="eyebrow text-cream/62">{t.servicesHome.eyebrow}</div>
            <h2 className="mt-7 max-w-[16ch] font-serif text-[clamp(34px,4vw,58px)] italic leading-[0.98] tracking-[-0.02em] text-cream">
              {servicesPanel.title}
            </h2>
            <p className="mt-8 max-w-[52ch] text-[16px] leading-[1.72] text-cream/76">{servicesPanel.text}</p>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {practiceData.map((practice, index) => (
              <li
                key={practice.slug}
                data-reveal="true"
                style={{ transitionDelay: `${60 + index * 45}ms` }}
                className="border border-navy/12 bg-paper p-8 transition duration-300 hover:border-navy/20 hover:bg-cream/8"
              >
                <Link to={withLocalePath(locale, `/servicii/${practice.slug}`)} className="group flex h-full flex-col justify-between gap-8">
                  <div>
                    <div className="font-serif text-[clamp(32px,4vw,54px)] italic leading-[0.96] text-navy service-title-gradient">
                      {practice.title[locale]}
                    </div>
                    <p className="mt-5 max-w-[44ch] text-[17px] leading-[1.78] text-navy/70">
                      {practice.intro[locale]}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4 text-navy/60 transition duration-300 group-hover:text-navy">
                    <span className="text-[13px] uppercase tracking-[0.18em] font-medium">
                      {t.labels.readMore}
                    </span>
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
            <h2 className="max-w-4xl font-serif text-[clamp(42px,5vw,74px)] leading-[1.02] tracking-[-0.015em]">
              {t.aboutSnippet.title}
            </h2>
            <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-ink/82">{t.aboutSnippet.text}</p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {t.aboutPage.values.map((value) => (
                <div key={value} className="border border-navy/12 bg-cream px-5 py-6 text-center font-serif text-[22px] leading-[1.35] text-navy">
                  {value}
                </div>
              ))}
            </div>
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
