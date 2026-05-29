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
  const heroResponseNote = locale === "ru" ? "Ответим в течение 24 часов" : "Răspundem în termen de 24 de ore";
  const servicesPanel = {
    title: locale === "ru" ? "Услуги и сопровождение" : "Practici și asistență juridică",
    text:
      locale === "ru"
        ? "Юридическая поддержка для частных клиентов, предпринимателей и компаний в Румынии: от запуска бизнеса и иммиграционных процедур до сделок с недвижимостью и подготовки документов."
        : "Asistență juridică pentru clienți privați, antreprenori și companii în România: de la lansarea afacerii și proceduri de imigrare până la tranzacții imobiliare și documentație completă.",
  };
  const heroPortraitSrc = "/aliona-portrait-main.png";
  const aboutPortraitSrc = "/aliona-office.png";
  const [ready, setReady] = useState(false);
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    setReady(true);
    const onScroll = () => {
      const scrollY = window.scrollY;
      setParallax(scrollY * 0.08);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section className="relative flex min-h-[68vh] items-center overflow-hidden bg-paper text-ink lg:-mx-[10vw] lg:w-[calc(100%+20vw)] lg:px-[10vw]">
        <div className={cn("hero-reveal-curtain", ready && "is-ready")}>
          <div className="hero-reveal-scroll" aria-label="Hero quick actions">
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
            <a href="#for-whom" aria-label="Scroll to next section">
              <ArrowDown className="h-5 w-5" />
            </a>
          </div>
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
        <div className="container-x grid items-center gap-8 py-6 sm:gap-10 sm:py-8 lg:min-h-[68vh] lg:grid-cols-2 lg:gap-12 lg:py-10 2xl:gap-16">
          <div
            className={cn(
              "relative hidden w-full justify-start md:flex",
              ready ? "scale-100 opacity-100" : "scale-[0.3] opacity-0",
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-full" style={{ transform: `translateY(${parallax}px)` }}>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
                <img
                  src={heroPortraitSrc}
                  alt="Aliona Pantelei"
                  className="h-full w-full scale-[1.35] object-cover object-[50%_36%]"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = "/portrait-placeholder.svg";
                  }}
                />
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
              <div className="relative w-full aspect-[7/8] overflow-hidden bg-cream">
                <img
                  src={heroPortraitSrc}
                  alt="Aliona Pantelei"
                  className="h-full w-full scale-[1.9] object-cover object-[52%_32%]"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = "/portrait-placeholder.svg";
                  }}
                />
              </div>
            </div>
            <div className="mt-2 sm:mt-4">
              <h1 className="w-full max-w-none text-navy text-[30px] leading-[1.04] sm:text-[36px] lg:text-[72px] lg:leading-[0.98]">
                {t.hero.titleTop}
                <span className="accent-serif mt-2 block w-full text-[32px] leading-[1.04] text-navy/92 sm:mt-3 sm:text-[40px] lg:text-[44px] lg:leading-[1.02]">
                  {t.hero.titleBottom}
                </span>
              </h1>
            </div>
            <p className="mt-5 max-w-[58ch] whitespace-pre-line text-[16px] leading-[1.5] text-ink/80 sm:mt-7 sm:text-[17px] lg:body-copy">
                {t.hero.description}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={withLocalePath(locale, "/contact")} variant="solid-navy" icon={<WhatsAppIcon className="h-5 w-5 shrink-0" />}>
                  {t.hero.primaryCta}
              </Button>
              <Button href={withLocalePath(locale, "/brief")} variant="outline-navy">
                  {t.hero.briefCta}
              </Button>
            </div>
            <div className="eyebrow mt-3 text-navy/52">
                {heroResponseNote}
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
          <SectionHeading eyebrow={t.forWhom.eyebrow} title={t.forWhom.title} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
            {t.forWhom.cards.map((card, index) => (
              <article
                key={card.title}
                className={`relative overflow-hidden p-6 sm:p-8 md:min-h-[320px] ${
                  index === 0
                    ? "bg-navy text-cream"
                    : index === 1
                      ? "bg-cream text-ink"
                      : "border-l border-navy/12 bg-[hsl(var(--cream)/0.32)] text-ink"
                }`}
              >
                <div className="relative">
                  <h3 className="mt-2 text-[24px] leading-[1.12] sm:text-[27px] md:text-[30px]">{card.title}</h3>
                  <div className={`mt-6 h-px w-full ${index === 0 ? "bg-cream/16" : "bg-navy/12"}`} />
                  <ul className="mt-5 space-y-3.5">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className={`grid grid-cols-[18px_minmax(0,1fr)] items-start gap-4 ${
                          index === 0 ? "text-cream/82" : "text-ink/82"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-[0.64em] block h-1.5 w-1.5 shrink-0 rotate-45 ${
                            index === 0 ? "bg-cream" : "bg-navy"
                          }`}
                        />
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

      <section id="services" className="relative scroll-mt-28 overflow-visible bg-paper text-ink">
        <div className="container-x relative grid gap-8 py-[clamp(48px,6vw,96px)] xl:grid-cols-2 xl:items-start xl:gap-12 2xl:gap-16">
          <div className="xl:sticky xl:top-[96px] xl:self-start">
            <div className="bg-navy p-8 text-cream sm:p-10 md:p-12">
              <div className="eyebrow text-cream/62">{t.servicesHome.eyebrow}</div>
              <h2 className="mt-7 w-full max-w-[14ch] text-[26px] leading-[1.08] text-cream sm:text-[30px] lg:section-title">
                {servicesPanel.title}
              </h2>
              <p className="body-copy mt-8 max-w-[62ch] text-cream/78">
                {servicesPanel.text}
              </p>
            </div>
          </div>
          <ol className="w-full">
            {practiceData.map((practice, index) => (
              <li
                key={practice.slug}
                data-reveal="true"
                style={{ transitionDelay: `${60 + index * 45}ms` }}
                className={index === 0 ? "pb-5 pt-2 md:pb-6 md:pt-3" : "py-5 md:py-6"}
              >
                <Link to={withLocalePath(locale, `/servicii/${practice.slug}`)} className="group">
                  <div className="mb-5 h-[2px] w-full bg-navy/20 overflow-hidden md:mb-4">
                    <div className="h-full w-0 bg-navy transition-all duration-500 ease-out group-hover:w-full" />
                  </div>
                  <div className="grid grid-cols-[minmax(0,1fr)_20px] items-end gap-3 md:gap-4">
                    <div className="min-w-0">
                      <div className="max-w-[18ch] text-[24px] leading-[1.12] text-navy/82 transition duration-300 group-hover:text-navy sm:text-[27px] md:text-[30px]">
                        {practice.title[locale]}
                      </div>
                      <div className="body-copy mt-2.5 max-w-[72ch] text-navy/72 md:mt-3">
                        {practice.intro[locale]}
                      </div>
                    </div>
                    <div className="flex items-end justify-end pb-1">
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
        <div className="container-x grid gap-10 xl:grid-cols-2 xl:items-center">
          <div data-reveal="true" style={{ transitionDelay: "60ms" }}>
            <div className="mx-auto aspect-square w-full max-w-[560px] overflow-hidden p-2 xl:max-w-none">
              <img
                src={aboutPortraitSrc}
                alt="Aliona Pantelei"
                className="h-full w-full scale-[1.6] object-cover object-center"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = "/portrait-placeholder.svg";
                }}
              />
            </div>
          </div>
          <div
            data-reveal="true"
            style={{ transitionDelay: "120ms" }}
            className="border-t-2 border-navy pt-8 xl:flex xl:min-h-[560px] xl:items-center xl:border-l-2 xl:border-t-0 xl:pl-[clamp(24px,3vw,56px)] xl:pt-0"
          >
            <div className="w-full">
            <h2 className="section-title w-full max-w-none">
              {t.aboutSnippet.title}
            </h2>
            <p className="body-copy mt-8 max-w-[78ch] text-ink/82">{t.aboutSnippet.text}</p>
            <div className="mt-6 grid gap-3 xl:grid-cols-3">
              {t.hero.highlights.map((value) => (
                <div key={value} className="border-l-[4px] border-navy bg-[#ececef] px-4 py-2.5 text-[14px] font-medium leading-[1.25] text-navy xl:px-5 xl:py-3 xl:text-[15px]">
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
        </div>
      </section>

      <section className="section-y -mx-[10vw] w-[calc(100%+20vw)] bg-cream px-[10vw] text-navy">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[minmax(300px,0.9fr)_minmax(0,1.35fr)] lg:gap-16 xl:gap-20">
            <div>
              <h2 className="section-title font-medium text-navy">
                {t.whyUs.title}
              </h2>
              <div className="mt-8 h-[7px] w-full border-y border-navy" />
            </div>
            <ol className="space-y-10 lg:space-y-12">
              {t.whyUs.items.slice(0, 3).map((item, index) => (
                <li
                  key={item.title}
                  data-reveal="true"
                  style={{ transitionDelay: `${60 + index * 60}ms` }}
                  className="grid grid-cols-[52px_minmax(0,1fr)] items-start gap-5 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-6"
                >
                  <span className="section-title font-medium italic text-navy">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="title-sm min-w-0 break-words font-medium text-navy [overflow-wrap:anywhere]">
                      {item.title}
                    </h3>
                    <p className="body-copy mt-5 min-w-0 break-words text-navy/78 [overflow-wrap:anywhere]">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
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
