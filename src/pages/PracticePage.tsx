import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { practiceData } from "../data/practiceData";
import { useLocale } from "../hooks/useLocale";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Accordion } from "../components/ui/Accordion";
import { SharedCta } from "../components/sections/SharedCta";

const practiceHeroImages: Record<string, string> = {
  "drept-civil": "/23fc3aa844165b7355390b5f9c6a3c2b.jpg",
  "drept-comercial": "/d25aa2d3cbae9612aa358be39e16c951.jpg",
  "drept-imobiliar": "/23fc3aa844165b7355390b5f9c6a3c2b.jpg",
  "dreptul-familiei": "/d25aa2d3cbae9612aa358be39e16c951.jpg",
  "drept-fiscal": "/23fc3aa844165b7355390b5f9c6a3c2b.jpg",
};

const loremHeroPills = ["Lorem ipsum", "Dolor sit amet"];
const loremHeroTitle = "Lorem ipsum dolor sit amet\nConsectetur adipiscing elit";
const loremHeroDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
const loremIncludedDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.\nUt labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud exercitation.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.";
const loremServices = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore.",
  "Ut enim ad minim veniam quis nostrud exercitation.",
  "Duis aute irure dolor in reprehenderit in voluptate.",
  "Excepteur sint occaecat cupidatat non proident.",
];
const loremProcess = [
  {
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
  },
  {
    title: "Dolor sit amet",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    title: "Consectetur elit",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
  {
    title: "Sed do eiusmod",
    description: "Excepteur sint occaecat cupidatat non proident sunt in culpa.",
  },
];
const loremFaq = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    question: "Consectetur adipiscing elit?",
    answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    question: "Sed do eiusmod tempor?",
    answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export const PracticePage = () => {
  const { slug } = useParams();
  const { locale } = useLocale();
  const practice = practiceData.find((item) => item.slug === slug) ?? practiceData[0];
  const heroImageSrc = practiceHeroImages[practice.slug] ?? "/23fc3aa844165b7355390b5f9c6a3c2b.jpg";
  const heroRef = useRef<HTMLElement | null>(null);
  const introRef = useRef<HTMLParagraphElement | null>(null);
  const [introFill, setIntroFill] = useState(0);

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
          <div className="grid w-full max-w-none gap-8 xl:grid-cols-[minmax(0,50%)_minmax(0,50%)] xl:items-center xl:gap-0">
            <div data-reveal="true" className="contents xl:block xl:pr-[clamp(40px,5vw,96px)]">
              <div className="order-1 hidden flex-wrap gap-3 xl:mb-8 xl:flex">
                {loremHeroPills.map((pill) => (
                  <div key={pill} className="bg-cream px-4 py-3 text-[11px] uppercase tracking-[0.14em] text-navy/78">
                    {pill}
                  </div>
                ))}
              </div>
              <h1 className="order-1 w-full max-w-none whitespace-pre-line text-[clamp(42px,13vw,72px)] font-medium leading-[0.98] tracking-[-0.02em] text-ink xl:display-title">
                {loremHeroTitle}
              </h1>
              <div className="order-2 h-[4px] w-full bg-navy xl:hidden" />
              <p
                ref={introRef}
                className="order-3 w-full max-w-none whitespace-pre-line practice-fill-text-diagonal text-[16px] leading-[1.55] text-ink/84 xl:mt-10"
                style={{ ["--fill-progress" as string]: `${introFill * 100}%` }}
              >
                {loremHeroDescription}
              </p>
            </div>

            <div
              data-reveal="true"
              style={{
                transitionDelay: "160ms",
              }}
              className="order-4 relative ml-auto w-full max-w-[min(100%,720px)] overflow-hidden bg-cream xl:order-none xl:h-[min(68vh,760px)] xl:min-h-[460px]"
              aria-hidden="true"
            >
              <div className="absolute inset-0 z-10 bg-navy/10 mix-blend-multiply" />
              <img
                src={heroImageSrc}
                alt=""
                className="aspect-[4/5] w-full object-cover object-center grayscale contrast-110 xl:h-full xl:aspect-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-x grid gap-10 xl:grid-cols-2 xl:gap-14 2xl:gap-16">
          <div data-reveal="true" className="xl:pr-[clamp(32px,4vw,72px)]">
            <h2 className="section-title w-full max-w-none text-navy">
              Lorem ipsum
            </h2>
            <p className="body-copy mt-8 w-full max-w-none whitespace-pre-line text-ink/72">
              {loremIncludedDescription}
            </p>
          </div>
          <div className="space-y-0">
            {loremServices.map((service, index) => (
              <div
                key={service}
                data-reveal="true"
                style={{ transitionDelay: `${60 + index * 50}ms` }}
                className="grid grid-cols-[34px_minmax(0,1fr)] items-start gap-4 border-b border-navy/12 py-5 first:pt-0 sm:grid-cols-[40px_minmax(0,1fr)] sm:gap-5"
              >
                <span className="eyebrow pt-1 text-navy/46">{String(index + 1).padStart(2, "0")}</span>
                <p className="body-copy text-ink/84">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-x">
          <SectionHeading eyebrow="Lorem ipsum" title="Lorem ipsum dolor sit amet" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 xl:items-stretch">
            {loremProcess.map((step, index) => (
                <article
                  key={step.title}
                  data-reveal="true"
                  style={{ transitionDelay: `${60 + index * 60}ms` }}
                  className="group overflow-hidden rounded-3xl border border-navy/12 bg-paper p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(36,55,105,0.08)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="eyebrow text-navy/58">Lorem</span>
                    <span className="text-[32px] italic leading-none text-navy/70">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="h-1 w-14 rounded-full bg-navy/10" />
                    <h3 className="title-sm text-navy">{step.title}.</h3>
                    <p className="body-copy text-ink/84">{step.description}</p>
                  </div>
                </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-x">
          <SectionHeading eyebrow="Lorem ipsum" title="Lorem ipsum dolor sit amet" />
          <div className="mt-12">
            <Accordion items={loremFaq} />
          </div>
        </div>
      </section>

      <SharedCta locale={locale} eyebrow="Lorem ipsum" title="Lorem ipsum dolor sit amet" button="Lorem ipsum" />
    </>
  );
};
