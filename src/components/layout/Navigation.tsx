import { Menu, X, ChevronDown, Globe, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isRouteActive, withLocalePath } from "../../lib/locale";
import { cn } from "../../lib/utils";
import type { Locale } from "../../lib/types";
import { blogData } from "../../data/blogData";
import { practiceData } from "../../data/practiceData";

type NavigationProps = {
  locale: Locale;
  pathname: string;
  switchLocale: (locale: Locale) => void;
  nav: {
    home: string;
    about: string;
    services: string;
    blog: string;
    contact: string;
    faq: string;
    servicesMenu: readonly string[];
  };
};

const navItems = [
  { labelKey: "home", href: "/" },
  { labelKey: "services", href: "/#services" },
  { labelKey: "about", href: "/despre-aliona" },
  { labelKey: "blog", href: "/blog" },
  { labelKey: "contact", href: "/contact" },
  { labelKey: "faq", href: "/faq" },
] as const satisfies readonly { labelKey: keyof NavigationProps["nav"]; href: string }[];

export const Navigation = ({ locale, pathname, switchLocale, nav }: NavigationProps) => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileLocaleOpen, setMobileLocaleOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "blog" | null>(null);
  const servicesAnchor = `${withLocalePath(locale, "/")}#services`;
  const latestPosts = blogData.slice(0, 3);
  const desktopBurgerVisible = collapsed || open;
  const desktopDropdownOpen = activeDropdown !== null;

  const servicesCta =
    locale === "ru"
      ? {
          title: "Не нашли то, что нужно?",
          text: "Опишите ситуацию напрямую. Если вопрос не вписывается в типовой список, это не повод откладывать контакт.",
          button: "НАПИСАТЬ",
        }
      : {
          title: "Nu ați găsit ce vă trebuie?",
          text: "Descrieți situația direct. Dacă întrebarea nu intră într-o categorie standard, asta nu înseamnă că trebuie amânată.",
          button: "SCRIEȚI-NE",
        };

  const blogPanelLabel = locale === "ru" ? "Последние статьи" : "Ultimele articole";
  const blogReadLabel = locale === "ru" ? "ЧИТАТЬ" : "CITEȘTE";
  const allServicesLabel = locale === "ru" ? "ВСЕ УСЛУГИ" : "TOATE SERVICIILE";
  const allPostsLabel = locale === "ru" ? "ВСЕ ПОСТЫ" : "TOATE ARTICOLELE";
  const servicesIntro =
    locale === "ru"
      ? {
          title: "Услуги",
          text: "Практики для частных клиентов, предпринимателей и компаний в Румынии.",
        }
      : {
          title: "Servicii",
          text: "Arii de practică pentru clienți privați, antreprenori și companii în România.",
        };
  const blogIntro =
    locale === "ru"
      ? {
          title: "Блог",
          text: "Короткие материалы о сделках, договорах, налоговых и миграционных вопросах.",
        }
      : {
          title: "Blog",
          text: "Texte scurte despre tranzacții, contracte, fiscalitate și teme de imigrare.",
        };

  useEffect(() => {
    let lastScroll = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 140 && !open) {
        setCollapsed(true);
      } else if (current < lastScroll || current < 40) {
        setCollapsed(false);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    if (open) {
      setCollapsed(false);
      setActiveDropdown(null);
      setMobileLocaleOpen(false);
    }
  }, [open]);

  const closeAll = () => {
    setOpen(false);
    setServicesOpen(false);
    setActiveDropdown(null);
    setMobileLocaleOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        className={cn(
          "fixed right-5 top-[49px] z-[70] hidden h-12 w-12 items-center justify-center bg-transparent text-navy transition-all duration-300 lg:flex",
          desktopBurgerVisible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0",
        )}
      >
        {open ? <X className="h-5 w-5 mix-blend-difference" /> : <Menu className="h-5 w-5 mix-blend-difference" />}
      </button>

      <header
        className={cn(
          "fixed inset-x-0 top-[44px] z-50 transition-transform duration-300",
          desktopDropdownOpen ? "bg-navy/98 text-cream" : "bg-transparent text-navy",
          collapsed && !open ? "-translate-y-full" : "translate-y-0",
        )}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div
          className={cn(
            "container-x flex h-[84px] items-center justify-between gap-8 transition-colors duration-300 lg:justify-end lg:px-[10vw]",
            "bg-paper text-navy",
            desktopDropdownOpen && "lg:bg-navy lg:text-cream",
          )}
        >
          <div className="flex min-w-0 items-center gap-4 lg:hidden">
            <a
              href={withLocalePath(locale, "/")}
              onClick={closeAll}
              className={cn(
                "brand-mark max-w-[calc(100vw-140px)] text-[20px] sm:text-[22px]",
                desktopDropdownOpen ? "text-cream" : "text-navy",
              )}
            >
              Aliona Pantelei
            </a>
          </div>

          <nav className="hidden items-center gap-6 xl:flex">
            {navItems.map((item) => {
              if (item.labelKey === "home") {
                return (
                  <a
                    key={item.labelKey}
                    href={withLocalePath(locale, "/")}
                    onClick={closeAll}
                    className={cn(
                      "nav-link",
                      desktopDropdownOpen ? "text-cream opacity-82 hover:opacity-100" : "text-navy",
                      isRouteActive(pathname, item.href) && "opacity-100",
                    )}
                  >
                    {nav[item.labelKey]}
                  </a>
                );
              }

              if (item.labelKey === "services") {
                return (
                  <div key={item.labelKey}>
                    <Link
                      to={servicesAnchor}
                      onClick={closeAll}
                      onMouseEnter={() => setActiveDropdown("services")}
                      className={cn(
                        "nav-link flex items-center gap-2",
                        desktopDropdownOpen ? "text-cream opacity-82 hover:opacity-100" : "text-navy",
                        isRouteActive(pathname, "/servicii") && "opacity-100",
                      )}
                    >
                      <span>{nav[item.labelKey]}</span>
                      <ChevronDown className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                );
              }

              if (item.labelKey === "blog") {
                return (
                  <div key={item.labelKey}>
                    <Link
                      to={withLocalePath(locale, item.href)}
                      onClick={closeAll}
                      onMouseEnter={() => setActiveDropdown("blog")}
                      className={cn(
                        "nav-link flex items-center gap-2",
                        desktopDropdownOpen ? "text-cream opacity-82 hover:opacity-100" : "text-navy",
                        isRouteActive(pathname, item.href) && "opacity-100",
                      )}
                    >
                      <span>{nav[item.labelKey]}</span>
                      <ChevronDown className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                );
              }

              return (
                <Link
                  key={item.labelKey}
                  to={withLocalePath(locale, item.href)}
                  onClick={closeAll}
                  className={cn(
                    "nav-link",
                    desktopDropdownOpen ? "text-cream opacity-82 hover:opacity-100" : "text-navy",
                    isRouteActive(pathname, item.href) && "opacity-100",
                  )}
                >
                  {nav[item.labelKey]}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Globe className={cn("h-4 w-4", desktopDropdownOpen ? "text-cream/68" : "text-navy/68")} />
            <div className={cn("flex items-center gap-2 text-[11px] uppercase tracking-[0.18em]", desktopDropdownOpen ? "text-cream" : "text-navy")}>
              <button type="button" onClick={() => switchLocale("ro")} className={cn("transition duration-300", locale === "ro" ? "opacity-100" : "opacity-50 hover:opacity-80")}>
                RO
              </button>
              <span className="opacity-35">/</span>
              <button type="button" onClick={() => switchLocale("ru")} className={cn("transition duration-300", locale === "ru" ? "opacity-100" : "opacity-50 hover:opacity-80")}>
                RU
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <div className="relative flex items-center">
              <button
                type="button"
                onClick={() => setMobileLocaleOpen((value) => !value)}
                aria-label="Switch language"
                className={cn("transition duration-300", desktopDropdownOpen ? "text-cream" : "text-navy")}
              >
                <Globe className={cn("h-4 w-4 transition duration-300", mobileLocaleOpen ? "scale-90 opacity-0" : "scale-100 opacity-100")} />
              </button>
              <div
                className={cn(
                  "absolute right-0 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] transition-all duration-300",
                  desktopDropdownOpen ? "text-cream" : "text-navy",
                  mobileLocaleOpen ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-2 opacity-0",
                )}
              >
                <button
                  type="button"
                  onClick={() => {
                    switchLocale("ro");
                    setMobileLocaleOpen(false);
                  }}
                  className={locale === "ro" ? "opacity-100" : "opacity-48"}
                >
                  RO
                </button>
                <span className="opacity-35">/</span>
                <button
                  type="button"
                  onClick={() => {
                    switchLocale("ru");
                    setMobileLocaleOpen(false);
                  }}
                  className={locale === "ru" ? "opacity-100" : "opacity-48"}
                >
                  RU
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className={cn(desktopDropdownOpen ? "text-cream" : "text-navy")}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "hidden overflow-hidden bg-navy text-cream transition-all duration-300 xl:block",
            desktopDropdownOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="container-x pt-8 pb-12 xl:px-[10vw] xl:pt-10 xl:pb-16">
            {activeDropdown === "services" ? (
              <div className="grid gap-0 xl:grid-cols-[minmax(220px,0.54fr)_minmax(0,0.9fr)_minmax(260px,0.7fr)]">
                <div className="border-b border-cream/14 pb-8 xl:border-b-0 xl:pr-10">
                  <h3 className="section-title text-cream">{servicesIntro.title}</h3>
                  <p className="body-copy mt-6 max-w-[28ch] text-cream/72">{servicesIntro.text}</p>
                  <Link
                    to={servicesAnchor}
                    onClick={closeAll}
                    className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-cream transition duration-300 hover:opacity-72"
                  >
                    <span>{allServicesLabel}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="border-b border-cream/14 py-8 xl:border-b-0 xl:border-l xl:border-r xl:border-cream/12 xl:px-10 xl:py-0">
                  <div className="grid gap-x-10 gap-y-2 md:grid-cols-2">
                    {practiceData.map((practice) => (
                      <Link
                        key={practice.slug}
                        to={withLocalePath(locale, `/servicii/${practice.slug}`)}
                        onClick={closeAll}
                        className="group/item border-b border-cream/12 py-4 transition duration-300 hover:opacity-72"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <span className="title-sm text-cream">{practice.title[locale]}</span>
                          <ArrowRight className="h-4 w-4 shrink-0 text-cream transition duration-300 group-hover/item:translate-x-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-8 xl:pl-10 xl:pt-0">
                  <Link
                    to={withLocalePath(locale, "/contact")}
                    onClick={closeAll}
                    className="flex h-full min-h-[248px] flex-col justify-between border border-cream/16 bg-cream/6 p-8 transition duration-300 hover:bg-cream/10"
                  >
                    <div>
                      <div className="eyebrow text-cream/58">{nav.contact}</div>
                      <h3 className="section-title mt-6 max-w-[12ch] text-cream">
                        {servicesCta.title}
                      </h3>
                      <p className="body-copy mt-6 max-w-md text-cream/72">{servicesCta.text}</p>
                    </div>
                    <div className="mt-10 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-cream">
                      <span>{servicesCta.button}</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </div>
              </div>
            ) : activeDropdown === "blog" ? (
              <div className="grid gap-0 xl:grid-cols-[minmax(220px,0.56fr)_minmax(0,1fr)]">
                <div className="border-b border-cream/14 pb-8 xl:border-b-0 xl:pr-10">
                  <h3 className="section-title text-cream">{blogIntro.title}</h3>
                  <p className="body-copy mt-6 max-w-[30ch] text-cream/72">{blogIntro.text}</p>
                  <Link
                    to={withLocalePath(locale, "/blog")}
                    onClick={closeAll}
                    className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-cream transition duration-300 hover:opacity-72"
                  >
                    <span>{allPostsLabel}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="pt-8 xl:border-l xl:border-cream/12 xl:pl-10 xl:pt-0">
                  <div className="eyebrow text-cream/58">{blogPanelLabel}</div>
                  <div className="mt-4">
                    {blogData.map((post, index) => (
                      <Link
                        key={post.slug}
                        to={withLocalePath(locale, `/blog/${post.slug}`)}
                        onClick={closeAll}
                        className={cn(
                          "group/post flex items-center justify-between gap-8 border-b border-cream/12 py-5 transition duration-300 hover:translate-x-1",
                          index === 0 ? "border-t border-cream/12" : "",
                        )}
                      >
                        <div>
                          <div className="eyebrow text-cream/48">
                            {new Intl.DateTimeFormat(locale === "ru" ? "ru-RU" : "ro-RO", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }).format(new Date(post.date))}{" "}
                            · {post.readTime}
                          </div>
                          <h4 className="title-sm mt-3 text-cream transition duration-300 group-hover/post:text-cream/72">
                            {post.title[locale]}
                          </h4>
                        </div>
                        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-cream">
                          <span>{blogReadLabel}</span>
                          <ArrowRight className="h-4 w-4 transition duration-300 group-hover/post:translate-x-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

      </header>

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[120] w-full overflow-y-auto bg-navy text-cream transition-transform duration-500 ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex min-h-dvh flex-col">
          <div className="flex h-[84px] shrink-0 items-center justify-between pl-[clamp(20px,5vw,80px)]">
            <a href={withLocalePath(locale, "/")} onClick={closeAll} className="brand-mark max-w-[calc(100vw-126px)] text-cream">
              Aliona Pantelei
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close mobile navigation"
              className="flex h-[84px] w-[84px] shrink-0 items-center justify-center bg-cream/10 text-cream"
            >
              <X className="h-8 w-8" strokeWidth={2.2} />
            </button>
          </div>

          <div className="container-x flex flex-1 flex-col justify-between pb-7 pt-7">
            <div>
              <div className="eyebrow text-cream/52">{locale === "ru" ? "Навигация" : "Navigare"}</div>
              <div className="mt-5 space-y-1">
              {navItems.map((item) =>
                item.labelKey === "services" ? (
                  <div key={item.labelKey}>
                    <div className="flex items-center justify-between gap-4 border-b border-cream/12 py-3.5">
                      <Link to={servicesAnchor} className="text-[24px] font-medium leading-[1.12] text-cream sm:text-[28px]" onClick={closeAll}>
                        {nav.services}
                      </Link>
                      <button type="button" onClick={() => setServicesOpen((value) => !value)} className="text-cream">
                        <ChevronDown className={cn("h-5 w-5 transition duration-300", servicesOpen ? "rotate-180" : "")} />
                      </button>
                    </div>
                    <div className={cn("grid transition-all duration-300", servicesOpen ? "grid-rows-[1fr] pt-3" : "grid-rows-[0fr]")}>
                      <div className="overflow-hidden">
                        <div className="space-y-2.5 border-l border-cream/12 pl-4">
                          {practiceData.map((practice) => (
                            <Link
                              key={practice.slug}
                              to={withLocalePath(locale, `/servicii/${practice.slug}`)}
                              className="block text-[15px] leading-[1.35] text-cream/76"
                              onClick={closeAll}
                            >
                              {practice.title[locale]}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  item.labelKey === "home" ? (
                    <a
                      key={item.labelKey}
                      href={withLocalePath(locale, "/")}
                      className="group flex items-center justify-between gap-6 border-b border-cream/12 py-3.5 text-[24px] font-medium leading-[1.12] text-cream transition duration-300 hover:text-cream/74 sm:text-[28px]"
                      onClick={closeAll}
                    >
                      <span>{nav[item.labelKey]}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 transition duration-300 group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <Link
                      key={item.labelKey}
                      to={withLocalePath(locale, item.href)}
                      className="group flex items-center justify-between gap-6 border-b border-cream/12 py-3.5 text-[24px] font-medium leading-[1.12] text-cream transition duration-300 hover:text-cream/74 sm:text-[28px]"
                      onClick={closeAll}
                    >
                      <span>{nav[item.labelKey]}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 transition duration-300 group-hover:translate-x-1" />
                    </Link>
                  )
                ),
              )}
              </div>
            </div>

            <div className="mt-8 border-t border-cream/12 pt-5">
              <div className="eyebrow text-cream/52">{locale === "ru" ? "Контакт" : "Contact"}</div>
              <a href="tel:+40757296443" className="mt-3 block text-[24px] font-medium leading-tight text-cream">
                +40 757 296 443
              </a>
              <a href="mailto:pantelei.legaladviser@gmail.com" className="mt-2 block text-[14px] leading-[1.35] text-cream/74">
                pantelei.legaladviser@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
