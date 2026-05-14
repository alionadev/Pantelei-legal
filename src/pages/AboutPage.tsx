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

  useEffect(() => {
    const updateProgress = () => {
      const element = contentRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const total = Math.max(rect.height - viewportHeight * 0.72, 1);
      const next = Math.min(Math.max((viewportHeight * 0.14 - rect.top) / total, 0), 1);
      setProgress(next);
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
      <div className="container-x px-0 py-[clamp(36px,6vw,112px)] lg:max-w-[75vw] lg:ml-auto lg:mr-0">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
          <aside className="w-full lg:sticky lg:top-[76px] lg:w-[35%] lg:flex-none xl:w-[35%]">
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
                <div className="font-serif text-[clamp(34px,2.8vw,48px)] italic leading-[0.94] tracking-[-0.02em]">Aliona Pantelei</div>
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
                      <a href="mailto:pantelei.legaladviser@gmail.com" className="mt-2 block break-all text-[15px] text-cream/88">
                        pantelei.legaladviser@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-[18px_minmax(0,1fr)] gap-4">
                    <MapPin className="mt-1 h-4 w-4 text-cream/66" />
                    <div>
                      <div className="eyebrow text-cream/48">{t.labels.address}</div>
                      <div className="mt-2 text-[15px] leading-[1.72] text-cream/88">{t.footer.address}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div ref={contentRef} className="relative min-w-0 flex-1 overflow-hidden px-5 lg:max-w-[980px] lg:px-0 xl:max-w-[1100px]">
            <div
              className="fixed left-0 right-0 z-30 bg-paper px-5 pb-5 pt-2 transition-[top] duration-300 lg:left-auto lg:right-auto lg:w-[calc(100%-40%-5.5rem)] lg:px-0 lg:pb-8 lg:pt-2 lg:top-[76px] xl:w-[calc(100%-38%-6.5rem)]"
              style={isMobileViewport ? { top: `${mobileProgressTop}px` } : undefined}
            >
              <div className="eyebrow text-navy/66">On this page</div>
              <div className="mt-1 text-[20px] leading-none text-navy">{t.aboutPage.eyebrow}</div>
              <div className="mt-4 h-[2px] w-full bg-navy/16">
                <div className="h-full bg-navy transition-[width] duration-150 ease-out" style={{ width: `${progress * 100}%` }} />
              </div>
            </div>

            <div className="space-y-10 pt-[124px] lg:space-y-20 lg:pt-[108px]">
              <section data-reveal="true">
                <h1 className="max-w-[12ch] font-serif text-[clamp(50px,4.8vw,86px)] leading-[0.98] tracking-[-0.02em] text-navy">
                  {t.aboutPage.title}
                </h1>
                <p className="mt-6 max-w-[48ch] text-[clamp(22px,2vw,31px)] leading-[1.56] text-ink/84 lg:mt-10 lg:leading-[1.62]">
                  {t.aboutPage.bio}
                </p>
              </section>

              <section data-reveal="true" style={{ transitionDelay: "60ms" }} className="border-t-2 border-navy/18 pt-7 lg:pt-12">
                <div className="eyebrow text-navy/66">{t.aboutPage.educationTitle}</div>
                <div className="mt-5 grid gap-3 lg:mt-8 lg:gap-6">
                  {t.aboutPage.education.map((item) => (
                    <article key={item} className="border-l-[4px] border-navy bg-navy/5 px-4 py-4 lg:px-7 lg:py-6">
                      <p className="max-w-[54ch] text-[19px] leading-[1.58] text-ink/84 lg:text-[22px] lg:leading-[1.64]">{item}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section data-reveal="true" style={{ transitionDelay: "120ms" }} className="border-t-2 border-navy/18 pt-7 lg:pt-12">
                <div className="eyebrow text-navy/66">{t.aboutPage.valuesTitle}</div>
                <div className="mt-5 flex flex-wrap gap-2.5 lg:mt-8 lg:gap-4">
                  {t.aboutPage.values.map((value) => (
                    <div key={value} className="border-l-[4px] border-navy bg-navy/6 px-4 py-3.5 text-[16px] font-medium text-navy lg:px-6 lg:py-5 lg:text-[19px]">
                      {value}
                    </div>
                  ))}
                </div>
              </section>

              <section data-reveal="true" style={{ transitionDelay: "180ms" }} className="border-t-2 border-navy/18 pt-7 lg:pt-12">
                <div className="eyebrow text-navy/66">{t.aboutPage.experienceTitle}</div>
                <div className="mt-5 border-l-[5px] border-navy pl-4 lg:mt-8 lg:pl-7">
                  <p className="max-w-[38ch] font-serif text-[clamp(28px,2.8vw,50px)] italic leading-[1.12] text-navy lg:leading-[1.18]">
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
