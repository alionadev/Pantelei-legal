import { useState } from "react";
import { useLocale } from "../hooks/useLocale";

export const AboutPage = () => {
  const { locale, t } = useLocale();
  const portraitSrc = "/aliona-office.png";
  const [representativeExpanded, setRepresentativeExpanded] = useState(false);
  const visibleRepresentativeItems = representativeExpanded
    ? t.aboutPage.representativeItems
    : t.aboutPage.representativeItems.slice(0, 4);
  const hasMoreRepresentativeItems = t.aboutPage.representativeItems.length > visibleRepresentativeItems.length;
  const representativeToggleLabel = representativeExpanded
    ? locale === "ru" ? "Свернуть" : "Mai puține detalii"
    : t.aboutPage.representativeMore;

  const addressUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.footer.address)}`;

  return (
    <section className="bg-paper">
      <div className="w-full py-[clamp(24px,5vw,96px)] xl:px-[clamp(20px,5vw,80px)]">
        <div className="flex flex-col gap-7 xl:flex-row xl:items-start xl:gap-10 2xl:gap-14">
          <aside className="w-full xl:sticky xl:top-[76px] xl:w-[32%] xl:flex-none 2xl:w-[31%]">
            <div className="overflow-hidden bg-paper aspect-[3/4] xl:aspect-[4/3]">
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
              <div className="px-6 py-7 md:px-9 md:py-10">
                <div className="text-[36px] font-medium leading-[0.96] tracking-[-0.02em] sm:text-[42px] md:text-[52px]">Aliona Pantelei</div>
                <div className="mt-4 text-[12px] font-bold uppercase tracking-[0.12em] text-[#2f92ff] md:text-[16px]">{t.aboutPage.eyebrow}</div>
              </div>

              <div className="border-t border-cream/14 px-6 py-7 md:px-9 md:py-10">
                <div className="space-y-6 md:space-y-7">
                  <div className="grid grid-cols-[88px_minmax(0,1fr)] items-end gap-x-4 gap-y-2 sm:grid-cols-[108px_minmax(0,1fr)]">
                    <div className="body-copy text-cream/86">{t.labels.email}</div>
                    <a href="mailto:pantelei.legaladviser@gmail.com" className="body-copy block break-all border-b border-[#2f92ff]/55 pb-1 text-cream">
                      pantelei.legaladviser@gmail.com
                    </a>
                  </div>

                  <div className="grid grid-cols-[88px_minmax(0,1fr)] items-end gap-x-4 gap-y-2 sm:grid-cols-[108px_minmax(0,1fr)]">
                    <div className="body-copy text-cream/86">{t.labels.phone}</div>
                    <a href="tel:+40757296443" className="body-copy block border-b border-[#2f92ff]/55 pb-1 text-cream">
                      +40 757 296 443
                    </a>
                  </div>

                  <div className="grid grid-cols-[88px_minmax(0,1fr)] items-end gap-x-4 gap-y-2 sm:grid-cols-[108px_minmax(0,1fr)]">
                    <div className="body-copy text-cream/86">{t.labels.address}</div>
                    <a
                      href={addressUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="body-copy block border-b border-[#2f92ff]/55 pb-1 text-cream hover:text-cream"
                    >
                      {t.footer.address}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="relative min-w-0 flex-1 overflow-hidden px-5 md:px-8 xl:px-0">
            <div className="space-y-10 xl:space-y-20">
              <section id="overview" data-reveal="true">
                <h3 className="title-sm text-navy">
                  {t.aboutPage.title}
                </h3>
                <p className="body-copy mt-6 w-full max-w-none text-ink/84 xl:mt-10">
                  {t.aboutPage.bio}
                </p>
              </section>

              <section id="expertise" data-reveal="true" style={{ transitionDelay: "40ms" }} className="border-t-2 border-navy/18 pt-7 xl:pt-12">
                <div className="space-y-9 xl:space-y-12">
                  <div>
                    <h3 className="text-[18px] font-medium leading-[1.3] text-navy">{t.aboutPage.expertiseTitle}</h3>
                    <div className="mt-5 flex flex-wrap gap-1.5 xl:mt-7">
                      {t.aboutPage.expertiseTags.map((tag) => (
                        <div key={tag} className="body-copy-sm bg-navy/10 px-4 py-3 text-ink xl:px-5 xl:py-3.5">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[18px] font-medium leading-[1.3] text-navy">{t.aboutPage.industriesTitle}</h3>
                    <div className="mt-5 flex flex-wrap gap-1.5 xl:mt-7">
                      {t.aboutPage.industriesTags.map((tag) => (
                        <div key={tag} className="body-copy-sm bg-navy/10 px-4 py-3 text-ink xl:px-5 xl:py-3.5">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section id="representative" data-reveal="true" style={{ transitionDelay: "50ms" }} className="border-t-2 border-navy/18 pt-7 xl:pt-12">
                <h2 className="text-[18px] font-medium leading-[1.3] text-navy">{t.aboutPage.representativeTitle}</h2>
                <div className="mt-8 xl:mt-12">
                  <h3 className="text-[18px] font-medium leading-[1.3] text-navy">{t.aboutPage.representativeEyebrow}</h3>
                  <div className="mt-7 space-y-5 pl-1.5 xl:mt-9 xl:space-y-6 xl:pl-2">
                    {visibleRepresentativeItems.map((item) => (
                      <div key={item} className="grid grid-cols-[18px_minmax(0,1fr)] gap-4 sm:gap-5">
                        <span className="mt-[0.56em] h-2 w-2 rotate-45 bg-navy/80" />
                        <p className="body-copy text-ink/84">{item}</p>
                      </div>
                    ))}
                  </div>
                  {(hasMoreRepresentativeItems || representativeExpanded) && (
                    <button
                      type="button"
                      aria-expanded={representativeExpanded}
                      onClick={() => setRepresentativeExpanded((value) => !value)}
                      className="eyebrow mt-8 inline-flex items-center gap-5 font-bold text-navy/88"
                    >
                      <span className="text-[34px] font-normal leading-none">{representativeExpanded ? "−" : "+"}</span>
                      <span>{representativeToggleLabel}</span>
                    </button>
                  )}
                </div>
              </section>

              <section id="education" data-reveal="true" style={{ transitionDelay: "60ms" }} className="border-t-2 border-navy/18 pt-7 xl:pt-12">
                <h2 className="text-[18px] font-medium leading-[1.3] text-navy">{t.aboutPage.educationTitle}</h2>
                <div className="mt-5 grid gap-3 xl:mt-8 xl:gap-6">
                  {t.aboutPage.education.map((item) => (
                    <article key={item} className="border-l-[4px] border-navy bg-navy/5 px-4 py-4 xl:px-7 xl:py-6">
                      <p className="body-copy max-w-[54ch] text-ink/84">{item}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section id="values" data-reveal="true" style={{ transitionDelay: "120ms" }} className="border-t-2 border-navy/18 pt-7 xl:pt-12">
                <h2 className="text-[18px] font-medium leading-[1.3] text-navy">{t.aboutPage.valuesTitle}</h2>
                <div className="mt-5 flex flex-wrap gap-2.5 xl:mt-8 xl:gap-4">
                  {t.aboutPage.values.map((value) => (
                    <div key={value} className="body-copy border-l-[4px] border-navy bg-navy/6 px-4 py-3.5 font-medium text-navy xl:px-6 xl:py-5">
                      {value}
                    </div>
                  ))}
                </div>
              </section>

              <section id="experience" data-reveal="true" style={{ transitionDelay: "180ms" }} className="border-t-2 border-navy/18 pt-7 xl:pt-12">
                <h2 className="text-[18px] font-medium leading-[1.3] text-navy">{t.aboutPage.experienceTitle}</h2>
                <div className="mt-5 border-l-[5px] border-navy pl-4 xl:mt-8 xl:pl-7">
                  <p className="accent-serif max-w-[38ch] text-[16px] leading-[1.5] text-navy">
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
