import { SectionHeading } from "../components/ui/SectionHeading";
import { SharedCta } from "../components/sections/SharedCta";
import { useLocale } from "../hooks/useLocale";
import { Watermark } from "../components/ui/Watermark";

export const AboutPage = () => {
  const { locale, t } = useLocale();

  return (
    <>
      <section className="relative overflow-hidden bg-paper section-y">
        <Watermark value="III" className="right-6 top-8 hidden md:block text-[clamp(260px,34vw,520px)] text-navy/5" />
        <div className="container-x grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div data-reveal="true" style={{ transitionDelay: "60ms" }}>
            <div className="border border-navy/12 p-3">
              <img src="/portrait-placeholder.svg" alt="Aliona Pantelei" className="aspect-[4/5] w-full border border-navy/12 object-cover" />
            </div>
          </div>
          <div data-reveal="true" style={{ transitionDelay: "120ms" }}>
            <SectionHeading eyebrow={t.aboutPage.eyebrow} title={t.aboutPage.title} />
            <p className="mt-10 max-w-2xl text-[17px] leading-[1.7] text-ink/82">{t.aboutPage.bio}</p>
          </div>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <article data-reveal="true" className="border border-navy/12 p-8">
            <div className="eyebrow text-navy/60">{t.aboutPage.educationTitle}</div>
            <div className="double-rule mt-6" />
            <div className="mt-6 space-y-4 text-[17px] leading-[1.7] text-ink/82">
              {t.aboutPage.education.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>
          <article data-reveal="true" style={{ transitionDelay: "90ms" }} className="border border-navy/12 p-8 bg-paper">
            <div className="eyebrow text-navy/60">{t.aboutPage.valuesTitle}</div>
            <div className="double-rule mt-6" />
            <div className="mt-6 space-y-4">
              {t.aboutPage.values.map((value, index) => (
                <div key={value} className="flex items-center gap-4 border-b border-navy/10 pb-4">
                  <span className="font-serif text-[34px] italic leading-none text-navy/58">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-[17px] text-ink/84">{value}</span>
                </div>
              ))}
            </div>
          </article>
          <article data-reveal="true" style={{ transitionDelay: "180ms" }} className="border border-navy/12 bg-navy p-8 text-cream">
            <div className="eyebrow text-cream/58">{t.aboutPage.experienceTitle}</div>
            <div className="double-rule-cream mt-6" />
            <p className="mt-6 text-[17px] leading-[1.7] text-cream/82">{t.aboutPage.experience}</p>
          </article>
        </div>
      </section>

      <SharedCta locale={locale} eyebrow={t.cta.eyebrow} title={t.cta.title} button={t.cta.button} />
    </>
  );
};
