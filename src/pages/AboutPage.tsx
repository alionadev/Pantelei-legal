import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLocale } from "../hooks/useLocale";

export const AboutPage = () => {
  const { t } = useLocale();
  const portraitSrc = "/aliona-office.png";
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

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

  return (
    <section className="bg-paper pb-[clamp(72px,8vw,120px)] pt-[clamp(18px,2.5vw,28px)]">
      <div className="container-x">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
          <aside className="w-full lg:sticky lg:top-[92px] lg:w-[320px] lg:flex-none xl:w-[360px]">
            <div className="overflow-hidden bg-paper">
              <img
                src={portraitSrc}
                alt="Aliona Pantelei"
                className="aspect-[0.9] w-full object-cover object-center"
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

          <div ref={contentRef} className="min-w-0 flex-1 lg:max-w-[980px] xl:max-w-[1100px]">
            <div className="sticky top-[76px] z-20 bg-paper/96 pb-8 pt-2 backdrop-blur">
              <div className="eyebrow text-navy/66">On this page</div>
              <div className="mt-1 text-[20px] leading-none text-navy">{t.aboutPage.eyebrow}</div>
              <div className="mt-5 h-[2px] w-full bg-navy/16">
                <div className="h-full bg-navy transition-[width] duration-150 ease-out" style={{ width: `${progress * 100}%` }} />
              </div>
            </div>

            <div className="space-y-16 lg:space-y-20">
              <section data-reveal="true">
                <h1 className="max-w-[12ch] font-serif text-[clamp(50px,4.8vw,86px)] leading-[0.98] tracking-[-0.02em] text-navy">
                  {t.aboutPage.title}
                </h1>
                <p className="mt-10 max-w-[48ch] text-[clamp(24px,2vw,31px)] leading-[1.62] text-ink/84">
                  {t.aboutPage.bio}
                </p>
              </section>

              <section data-reveal="true" style={{ transitionDelay: "60ms" }} className="border-t-2 border-navy/18 pt-10 lg:pt-12">
                <div className="eyebrow text-navy/66">{t.aboutPage.educationTitle}</div>
                <div className="mt-8 grid gap-6">
                  {t.aboutPage.education.map((item) => (
                    <article key={item} className="border-l-[4px] border-navy bg-navy/5 px-6 py-6 lg:px-7">
                      <p className="max-w-[54ch] text-[22px] leading-[1.64] text-ink/84">{item}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section data-reveal="true" style={{ transitionDelay: "120ms" }} className="border-t-2 border-navy/18 pt-10 lg:pt-12">
                <div className="eyebrow text-navy/66">{t.aboutPage.valuesTitle}</div>
                <div className="mt-8 flex flex-wrap gap-4">
                  {t.aboutPage.values.map((value) => (
                    <div key={value} className="border-l-[4px] border-navy bg-navy/6 px-6 py-5 text-[19px] font-medium text-navy">
                      {value}
                    </div>
                  ))}
                </div>
              </section>

              <section data-reveal="true" style={{ transitionDelay: "180ms" }} className="border-t-2 border-navy/18 pt-10 lg:pt-12">
                <div className="eyebrow text-navy/66">{t.aboutPage.experienceTitle}</div>
                <div className="mt-8 border-l-[5px] border-navy pl-7">
                  <p className="max-w-[38ch] font-serif text-[clamp(36px,3vw,50px)] italic leading-[1.18] text-navy">
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
