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
  { labelKey: "services", href: "/#services" },
  { labelKey: "about", href: "/despre-aliona" },
  { labelKey: "blog", href: "/blog" },
  { labelKey: "contact", href: "/contact" },
  { labelKey: "faq", href: "/faq" },
] as const;

export const Navigation = ({ locale, pathname, switchLocale, nav }: NavigationProps) => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
    }
  }, [open]);

  const closeAll = () => {
    setOpen(false);
    setServicesOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        className={cn(
          "fixed right-5 top-5 z-[70] hidden h-12 w-12 items-center justify-center bg-paper/96 text-navy backdrop-blur transition-all duration-300 lg:flex",
          desktopBurgerVisible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0",
        )}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-transform duration-300",
          desktopDropdownOpen ? "bg-navy/98 text-cream" : "bg-transparent text-navy",
          collapsed && !open ? "-translate-y-full" : "translate-y-0",
        )}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div
          className={cn(
            "container-x flex h-[84px] items-center justify-end gap-8 transition-colors duration-300 lg:px-[10vw]",
            desktopDropdownOpen ? "bg-navy text-cream" : "bg-transparent text-navy",
          )}
        >
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
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

          <button type="button" onClick={() => setOpen((value) => !value)} className="text-navy lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          className={cn(
            "hidden overflow-hidden bg-navy text-cream transition-all duration-300 lg:block",
            desktopDropdownOpen ? "max-h-[540px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="container-x py-8 lg:px-[10vw]">
            {activeDropdown === "services" ? (
              <div className="grid gap-0 lg:grid-cols-[0.54fr_0.9fr_0.7fr]">
                <div className="border-b border-cream/14 pb-8 lg:border-b-0 lg:pr-10">
                  <h3 className="font-serif text-[46px] italic leading-[0.96] text-cream">{servicesIntro.title}</h3>
                  <p className="mt-6 max-w-[28ch] text-[16px] leading-[1.75] text-cream/72">{servicesIntro.text}</p>
                  <Link
                    to={servicesAnchor}
                    onClick={closeAll}
                    className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-cream transition duration-300 hover:opacity-72"
                  >
                    <span>{allServicesLabel}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="border-b border-cream/14 py-8 lg:border-b-0 lg:border-l lg:border-r lg:border-cream/12 lg:px-10 lg:py-0">
                  <div className="grid gap-x-10 gap-y-2 md:grid-cols-2">
                    {practiceData.map((practice) => (
                      <Link
                        key={practice.slug}
                        to={withLocalePath(locale, `/servicii/${practice.slug}`)}
                        onClick={closeAll}
                        className="group/item border-b border-cream/12 py-4 transition duration-300 hover:opacity-72"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <span className="font-serif text-[24px] italic leading-none text-cream">{practice.title[locale]}</span>
                          <ArrowRight className="h-4 w-4 shrink-0 text-cream transition duration-300 group-hover/item:translate-x-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-8 lg:pl-10 lg:pt-0">
                  <Link
                    to={withLocalePath(locale, "/contact")}
                    onClick={closeAll}
                    className="flex h-full min-h-[248px] flex-col justify-between border border-cream/16 bg-cream/6 p-8 transition duration-300 hover:bg-cream/10"
                  >
                    <div>
                      <div className="eyebrow text-cream/58">{nav.contact}</div>
                      <h3 className="mt-6 max-w-[12ch] font-serif text-[48px] italic leading-[0.96] text-cream">
                        {servicesCta.title}
                      </h3>
                      <p className="mt-6 max-w-md text-[16px] leading-[1.7] text-cream/72">{servicesCta.text}</p>
                    </div>
                    <div className="mt-10 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-cream">
                      <span>{servicesCta.button}</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </div>
              </div>
            ) : activeDropdown === "blog" ? (
              <div className="grid gap-0 lg:grid-cols-[0.56fr_1fr]">
                <div className="border-b border-cream/14 pb-8 lg:border-b-0 lg:pr-10">
                  <h3 className="font-serif text-[46px] italic leading-[0.96] text-cream">{blogIntro.title}</h3>
                  <p className="mt-6 max-w-[30ch] text-[16px] leading-[1.75] text-cream/72">{blogIntro.text}</p>
                  <Link
                    to={withLocalePath(locale, "/blog")}
                    onClick={closeAll}
                    className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-cream transition duration-300 hover:opacity-72"
                  >
                    <span>{allPostsLabel}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="pt-8 lg:border-l lg:border-cream/12 lg:pl-10 lg:pt-0">
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
                          <h4 className="mt-3 font-serif text-[30px] italic leading-[1] text-cream transition duration-300 group-hover/post:text-cream/72">
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
          "fixed inset-y-0 right-0 z-[65] w-full bg-navy text-cream transition-transform duration-500 ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close mobile navigation"
          className="absolute right-5 top-5 z-[75] flex h-12 w-12 items-center justify-center text-cream"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="container-x flex min-h-screen flex-col justify-between py-8 pt-24">
          <div>
            <div className="eyebrow text-cream/52">{locale === "ru" ? "Навигация" : "Navigare"}</div>
            <div className="mt-8 space-y-3">
              {navItems.map((item) =>
                item.labelKey === "services" ? (
                  <div key={item.labelKey}>
                    <div className="flex items-center justify-between gap-4 border-b border-cream/12 py-4">
                      <Link to={servicesAnchor} className="font-serif text-[34px] italic leading-none text-cream" onClick={closeAll}>
                        {nav.services}
                      </Link>
                      <button type="button" onClick={() => setServicesOpen((value) => !value)} className="text-cream">
                        <ChevronDown className={cn("h-5 w-5 transition duration-300", servicesOpen ? "rotate-180" : "")} />
                      </button>
                    </div>
                    <div className={cn("grid transition-all duration-300", servicesOpen ? "grid-rows-[1fr] pt-3" : "grid-rows-[0fr]")}>
                      <div className="overflow-hidden">
                        <div className="space-y-3 border-l border-cream/12 pl-4">
                          {practiceData.map((practice) => (
                            <Link
                              key={practice.slug}
                              to={withLocalePath(locale, `/servicii/${practice.slug}`)}
                              className="block text-[16px] text-cream/76"
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
                  <Link
                    key={item.labelKey}
                    to={withLocalePath(locale, item.href)}
                    className="group flex items-center justify-between gap-6 border-b border-cream/12 py-4 font-serif text-[34px] italic leading-none text-cream transition duration-300 hover:text-cream/74"
                    onClick={closeAll}
                  >
                    <span>{nav[item.labelKey]}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 transition duration-300 group-hover:translate-x-1" />
                  </Link>
                ),
              )}
            </div>
          </div>

          <div className="border-t border-cream/12 pt-6">
            <div className="eyebrow text-cream/52">{locale === "ru" ? "Контакт" : "Contact"}</div>
            <a href="tel:+40757296443" className="mt-4 block font-serif text-[28px] italic leading-none text-cream">
              +40 757 296 443
            </a>
            <a href="mailto:pantelei.legaladviser@gmail.com" className="mt-3 block text-[15px] text-cream/74">
              pantelei.legaladviser@gmail.com
            </a>
            <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-cream">
              <Globe className="h-4 w-4 text-cream/68" />
              <button type="button" onClick={() => switchLocale("ro")} className={locale === "ro" ? "opacity-100" : "opacity-55 hover:opacity-80"}>
                RO
              </button>
              <span className="opacity-35">/</span>
              <button type="button" onClick={() => switchLocale("ru")} className={locale === "ru" ? "opacity-100" : "opacity-55 hover:opacity-80"}>
                RU
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
