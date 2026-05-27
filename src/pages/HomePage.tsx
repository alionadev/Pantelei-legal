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

const WhatsAppIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.61 2 2.2 6.4 2.2 11.82c0 1.73.45 3.42 1.31 4.91L2 22l5.42-1.42a9.8 9.8 0 0 0 4.6 1.17h.01c5.42 0 9.82-4.4 9.82-9.82a9.75 9.75 0 0 0-2.8-7.02Zm-7.02 15.17h-.01a8.14 8.14 0 0 1-4.15-1.14l-.3-.18-3.21.84.86-3.13-.2-.32a8.13 8.13 0 0 1-1.26-4.33c0-4.5 3.67-8.17 8.19-8.17 2.18 0 4.22.84 5.76 2.39a8.1 8.1 0 0 1 2.39 5.78c0 4.5-3.68 8.16-8.17 8.16Zm4.48-6.12c-.25-.13-1.47-.73-1.69-.81-.23-.08-.39-.13-.56.12-.16.24-.65.81-.79.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.25-.74-.66-1.24-1.47-1.39-1.72-.15-.24-.02-.38.11-.51.11-.11.25-.29.38-.43.13-.15.17-.25.25-.41.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.4-.41-.56-.41h-.48c-.17 0-.43.06-.66.31-.23.24-.87.85-.87 2.08 0 1.23.89 2.41 1.01 2.58.12.16 1.75 2.67 4.23 3.75.59.26 1.06.42 1.42.54.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.19-.06-.1-.22-.16-.47-.29Z" />
  </svg>
);

export const HomePage = () => {
  const { locale, t } = useLocale();
  const heroResponseNote = locale === "ru" ? "Ответим в течение дня" : "Răspundem în termen de 24 de ore";
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
              <a href="tel:+40757296443" className="hero-contact-icon" aria-label="Phone">
                <Phone className="h-4 w-4" />
              </a>
              <a href="viber://chat?number=%2B40757296443" className="hero-contact-icon" aria-label="Viber">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href="https://t.me/" className="hero-contact-icon" aria-label="Telegram">
                <Send className="h-4 w-4" />
              </a>
            </div>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
        <a
          href="https://wa.me/40757296443"
          target="_blank"
          rel="noreferrer"
          className="hero-mobile-contact-toggle"
          aria-label="Open WhatsApp"
        >
          <WhatsAppIcon className="h-7 w-7" />
        </a>
        <div className="container-x grid items-center gap-10 py-10 lg:min-h-[68vh] lg:grid-cols-[minmax(340px,0.48fr)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(420px,0.52fr)_minmax(0,0.96fr)] xl:gap-12 2xl:grid-cols-[minmax(460px,0.56fr)_minmax(0,0.92fr)] 2xl:gap-14">
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
              <h1 className="w-full max-w-none text-[clamp(28px,8vw,72px)] font-medium leading-[0.96] tracking-[-0.035em] text-navy sm:text-[clamp(32px,5.8vw,72px)]">
                {locale === "ru" ? (
                  <>
                    Юридическая поддержка
                    <span className="block">в&nbsp;Румынии</span>
                  </>
                ) : (
                  t.hero.titleTop
                )}
                <span className="accent-serif mt-3 block w-full text-[clamp(20px,6vw,46px)] leading-[1.02] tracking-[-0.02em] text-navy/92 sm:text-[clamp(22px,4vw,46px)]">
                  {t.hero.titleBottom}
                </span>
              </h1>
            </div>
            <p className="mt-6 max-w-[58ch] text-[15px] leading-[1.62] text-ink/72 sm:mt-8 sm:text-[clamp(16px,1.35vw,18px)] sm:leading-[1.68]">
                {t.hero.description}
            </p>
            <div className="mt-10">
              <Button href={withLocalePath(locale, "/contact")} variant="solid-navy">
                  {t.hero.primaryCta}
              </Button>
              <div className="mt-3 text-[12px] uppercase tracking-[0.16em] text-navy/52">
                {heroResponseNote}
              </div>
            </div>
            <div className={cn("hero-highlights mt-10", ready && "is-ready")}>
              {t.hero.highlights.map((item, index) => (
                <div
                  key={item}
                  className="hero-highlight-chip"
                  style={{
                    animationDelay: `${2.02 + index * 0.14}s`,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      <section id="for-whom" className="section-y bg-paper">
        <div className="container-x">
          <SectionHeading eyebrow="" title={t.forWhom.title} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
            {t.forWhom.cards.map((card, index) => (
              <article
                key={card.title}
                data-reveal="true"
                style={{
                  transitionDelay: `${60 + index * 60}ms`,
                  transform: `translateY(${cardParallax[index]}px)`,
                }}
                className={`relative overflow-hidden p-6 sm:p-8 md:min-h-[320px] ${
                  index === 0
                    ? "bg-navy text-cream"
                    : index === 1
                      ? "bg-cream text-ink"
                      : "border-l border-navy/12 bg-[hsl(var(--cream)/0.32)] text-ink"
                }`}
              >
                <div className="relative">
                  <h3 className="card-title mt-2">{card.title}</h3>
                  <div className={`mt-6 h-px w-full ${index === 0 ? "bg-cream/16" : "bg-navy/12"}`} />
                  <ul className="mt-5 space-y-3.5">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className={`grid grid-cols-[26px_minmax(0,1fr)] items-start gap-3 ${
                          index === 0 ? "text-cream/82" : "text-ink/82"
                        }`}
                      >
                        <span className="mt-[0.42em] flex items-center gap-1.5" aria-hidden="true">
                          <span
                            className={`h-[5px] w-[5px] rounded-full ${
                              index === 0 ? "bg-navy" : "bg-navy/58"
                            }`}
                          />
                          <span
                            className={`h-px w-4 ${
                              index === 0 ? "bg-cream" : "bg-navy/20"
                            }`}
                          />
                        </span>
                        <span className="body-copy">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative scroll-mt-28 overflow-hidden bg-paper text-ink">
        <div className="container-x relative grid gap-8 2xl:grid-cols-[minmax(360px,420px)_minmax(0,1fr)] 2xl:gap-14">
          <div data-reveal="true" className="bg-navy p-7 text-cream sm:p-8 md:p-10 2xl:sticky 2xl:top-28 2xl:h-fit 2xl:min-h-[360px]">
            <div className="eyebrow text-cream/62">{t.servicesHome.eyebrow}</div>
            <h2 className="mt-6 w-full max-w-none text-[clamp(28px,3.4vw,52px)] font-medium leading-[1.02] tracking-[-0.028em] text-cream">
              {servicesPanel.title}
            </h2>
            <p className="mt-6 max-w-none text-[15px] leading-[1.75] text-cream/76 sm:text-[16px]">
              {servicesPanel.text}
            </p>
          </div>
          <ol>
            {practiceData.map((practice, index) => (
              <li key={practice.slug} data-reveal="true" style={{ transitionDelay: `${60 + index * 45}ms` }} className="py-5 md:py-6">
                <Link to={withLocalePath(locale, `/servicii/${practice.slug}`)} className="group">
                  <div className="mb-4 h-[2px] w-full bg-navy/20 overflow-hidden">
                    <div className="h-full w-0 bg-navy transition-all duration-500 ease-out group-hover:w-full" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_32px] md:items-center md:gap-6">
                    <div className="min-w-0">
                      <div className="text-[clamp(24px,2.8vw,38px)] font-medium leading-[1.08] tracking-[-0.026em] text-navy/70 transition duration-300 group-hover:text-navy">
                        {practice.title[locale]}
                      </div>
                      <div className="mt-3 max-w-[68ch] text-[15px] leading-[1.68] text-navy/70 sm:text-[16px]">
                        {practice.intro[locale]}
                      </div>
                    </div>
                    <div className="flex items-center justify-end md:self-center">
                      <ArrowRight className="h-5 w-5 shrink-0 text-navy/70 transition duration-300 group-hover:text-navy group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-x grid gap-10 xl:grid-cols-[minmax(280px,0.95fr)_minmax(0,1.05fr)]">
          <div data-reveal="true" style={{ transitionDelay: "60ms" }}>
            <div className="p-3">
              <img
                src={aboutPortraitSrc}
                alt="Aliona Pantelei"
                className="aspect-[4/5] w-full object-cover"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = "/portrait-placeholder.svg";
                }}
              />
            </div>
          </div>
          <div data-reveal="true" style={{ transitionDelay: "120ms" }} className="border-t-2 border-navy pt-8 xl:border-l-2 xl:border-t-0 xl:pl-[clamp(24px,3vw,56px)] xl:pt-0">
            <h2 className="section-title w-full max-w-none">
              {t.aboutSnippet.title}
            </h2>
            <p className="body-copy mt-8 max-w-2xl text-ink/82">{t.aboutSnippet.text}</p>
            <div className="mt-10 grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
              {t.aboutPage.values.map((value) => (
                <div
                  key={value}
                  className="bg-cream px-4 py-5 text-center text-[clamp(18px,2vw,22px)] font-medium leading-[1.18] tracking-[-0.02em] text-navy sm:px-5 sm:py-6"
                >
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
        <div className="container-x grid gap-12 xl:grid-cols-[minmax(260px,0.9fr)_minmax(0,1.1fr)]">
          <SectionHeading eyebrow={t.whyUs.eyebrow} title={t.whyUs.title} />
          <div className="space-y-6">
            {t.whyUs.items.map((item, index) => (
              <div key={item.title} data-reveal="true" style={{ transitionDelay: `${60 + index * 60}ms` }} className="pb-6">
                <div className="flex gap-4 sm:gap-5">
                  <div className="w-12 shrink-0 font-serif text-[36px] italic leading-none text-navy/60">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="title-sm text-navy">{item.title}</h3>
                    <p className="body-copy-sm mt-4 max-w-2xl text-ink/82">{item.text}</p>
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
          <div className="grid items-center gap-6 py-6 lg:grid-cols-[220px_minmax(0,1fr)]">
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
