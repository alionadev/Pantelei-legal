import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLocale } from "../hooks/useLocale";

export const AboutPage = () => {
  const { t } = useLocale();
  const portraitSrc = "/aliona-office.png";
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [mobileProgressTop, setMobileProgressTop] = useState(84);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const addressUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.footer.address)}`;

  useEffect(() => {
    const updateProgress = () => {
      const element = contentRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const total = Math.max(rect.height - viewportHeight * 0.72, 1);
      const next = Math.min(Math.max((viewportHeight * 0.14 - rect.top) / total, 0), 1);
      setProgress(next);
      setScrollY(window.scrollY);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const updateViewport = () => {
      setIsMobileViewport(window.innerWidth < 1024);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const updateMobileProgressPosition = () => {
      if (window.innerWidth >= 1024) {
        setMobileProgressTop(0);
        lastScroll = window.scrollY;
        return;
      }

      const current = window.scrollY;

      if (current < 24 || current < lastScroll) {
        setMobileProgressTop(84);
      } else if (current > lastScroll && current > 96) {
        setMobileProgressTop(0);
      }

      lastScroll = current;
    };

    updateMobileProgressPosition();
    window.addEventListener("scroll", updateMobileProgressPosition, { passive: true });
    window.addEventListener("resize", updateMobileProgressPosition);

    return () => {
      window.removeEventListener("scroll", updateMobileProgressPosition);
      window.removeEventListener("resize", updateMobileProgressPosition);
    };
  }, []);

  return (
    <section className="bg-paper">
      <div className="container-x py-[clamp(36px,6vw,112px)]">
        <div className="flex flex-col gap-7 xl:flex-row xl:items-start xl:gap-10 2xl:gap-14">
          <aside className="w-full xl:sticky xl:top-[76px] xl:w-[32%] xl:flex-none 2xl:w-[31%]">
            <div className="overflow-hidden bg-paper aspect-[4/3]">
              <img
                src={portraitSrc}
                alt="Aliona Pantelei"
                className="h-full w-full object-cover object-center filter grayscale"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = "/portrait-placeholder.svg";
                }}
              />
            </div>

            <div className="bg-navy text-cream">
              <div className="px-7 py-8 md:px-8 md:py-9">
                <div className="brand-mark">Aliona Pantelei</div>
                <div className="mt-3 eyebrow text-cream/58">{t.aboutPage.eyebrow}</div>
              </div>

              <div className="border-t border-cream/14 px-7 py-8 md:px-8 md:py-9">
                <div className="space-y-6">
                  <div className="grid grid-cols-[18px_minmax(0,1fr)] gap-4">
                    <Phone className="mt-1 h-4 w-4 text-cream/66" />
                    <div>
                      <div className="eyebrow text-cream/48">{t.labels.phone}</div>
                      <a href="tel:+40757296443" className="mt-2 block text-[15px] text-cream/88">
                        +40 757 296 443
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-[18px_minmax(0,1fr)] gap-4">
                    <Mail className="mt-1 h-4 w-4 text-cream/66" />
                    <div>
                      <div className="eyebrow text-cream/48">{t.labels.email}</div>
                      <a href="mailto:pantelei.legaladviser@gmail.com" className="mt-2 block text-[14px] leading-[1.5] text-cream/88 sm:text-[15px]">
                        pantelei.legaladviser@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-[18px_minmax(0,1fr)] gap-4">
                    <MapPin className="mt-1 h-4 w-4 text-cream/66" />
                    <div>
                      <div className="eyebrow text-cream/48">{t.labels.address}</div>
                      <a
                        href={addressUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 block text-[15px] leading-[1.72] text-cream/88 hover:text-cream"
                      >
                        {t.footer.address}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div ref={contentRef} className="relative min-w-0 flex-1 overflow-hidden">
            <div
              className="fixed left-0 right-0 top-0 z-30 bg-paper px-[clamp(20px,5vw,80px)] pb-0 pt-2 transition-all duration-300 ease-out xl:left-auto xl:right-auto xl:w-[calc(100%-40%-3rem)] xl:px-0 xl:pb-0 xl:pt-2 2xl:w-[calc(100%-36%-4rem)]"
              style={isMobileViewport ? { 
                top: `${mobileProgressTop}px`,
                opacity: scrollY > 240 ? 1 : 0,
                pointerEvents: scrollY > 240 ? 'auto' : 'none'
              } : {
                top: 0,
                opacity: scrollY > 240 ? 1 : 0,
                pointerEvents: scrollY > 240 ? 'auto' : 'none'
              }}
            >
              <div className="eyebrow text-navy/66">On this page</div>
              <div className="title-sm mt-1 text-navy">{t.aboutPage.eyebrow}</div>
              <div className="mt-4 h-[2px] w-full bg-navy/16">
                <div className="h-full bg-navy transition-[width] duration-150 ease-out" style={{ width: `${progress * 100}%` }} />
              </div>
            </div>

            <div className="space-y-10 pt-[124px] xl:space-y-20 xl:pt-[108px]">
              <section data-reveal="true">
                <h1 className="section-title w-full max-w-none text-balance text-navy">
                  {t.aboutPage.title}
                </h1>
                <p className="lead-copy mt-6 max-w-[48ch] text-ink/84 xl:mt-10">
                  {t.aboutPage.bio}
                </p>
              </section>

              <section data-reveal="true" style={{ transitionDelay: "60ms" }} className="border-t-2 border-navy/18 pt-7 xl:pt-12">
                <div className="eyebrow text-navy/66">{t.aboutPage.educationTitle}</div>
                <div className="mt-5 grid gap-3 xl:mt-8 xl:gap-6">
                  {t.aboutPage.education.map((item) => (
                    <article key={item} className="border-l-[4px] border-navy bg-navy/5 px-4 py-4 xl:px-7 xl:py-6">
                      <p className="body-copy max-w-[54ch] text-ink/84 sm:text-[17px] lg:text-[18px]">{item}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section data-reveal="true" style={{ transitionDelay: "120ms" }} className="border-t-2 border-navy/18 pt-7 xl:pt-12">
                <div className="eyebrow text-navy/66">{t.aboutPage.valuesTitle}</div>
                <div className="mt-5 flex flex-wrap gap-2.5 xl:mt-8 xl:gap-4">
                  {t.aboutPage.values.map((value) => (
                    <div key={value} className="border-l-[4px] border-navy bg-navy/6 px-4 py-3.5 text-[15px] font-medium text-navy sm:text-[16px] xl:px-6 xl:py-5 xl:text-[18px]">
                      {value}
                    </div>
                  ))}
                </div>
              </section>

              <section data-reveal="true" style={{ transitionDelay: "180ms" }} className="border-t-2 border-navy/18 pt-7 xl:pt-12">
                <div className="eyebrow text-navy/66">{t.aboutPage.experienceTitle}</div>
                <div className="mt-5 border-l-[5px] border-navy pl-4 xl:mt-8 xl:pl-7">
                  <p className="accent-serif max-w-[38ch] text-[clamp(24px,2.6vw,40px)] leading-[1.18] text-navy">
                    {t.aboutPage.experience}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
