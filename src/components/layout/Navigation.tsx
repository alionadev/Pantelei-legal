import { Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { practiceData } from "../../data/practiceData";
import { blogData } from "../../data/blogData";
import { isRouteActive, withLocalePath } from "../../lib/locale";
import { cn } from "../../lib/utils";
import type { Locale } from "../../lib/types";

type NavigationProps = {
  locale: Locale;
  pathname: string;
  switchLocale: (locale: Locale) => void;
  nav: Record<string, string>;
  ctaLabel: string;
};

const navItems = [
  { labelKey: "about", href: "/despre-aliona" },
  { labelKey: "services", href: "/#services" },
  { labelKey: "blog", href: "/blog" },
  { labelKey: "faq", href: "/faq" },
  { labelKey: "contact", href: "/contact" },
];

export const Navigation = ({ locale, pathname, switchLocale, nav, ctaLabel }: NavigationProps) => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesAnchor = `${withLocalePath(locale, "/")}#services`;
  const latestPosts = blogData.slice(0, 3);

  return (
    <header className="sticky top-0 z-50 border-b border-cream/15 bg-navy text-cream">
      <div className="container-x flex h-[68px] items-center justify-between gap-5">
        <Link to={withLocalePath(locale, "/")} className="text-[13px] uppercase tracking-[0.22em] text-cream transition duration-300 hover:opacity-80">
          Pantelei Legal
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) =>
            item.labelKey === "services" ? (
              <div key={item.labelKey} className="group relative">
                <Link
                  to={servicesAnchor}
                  className={cn("nav-link", isRouteActive(pathname, "/servicii") && "opacity-100")}
                >
                  {nav[item.labelKey]}
                </Link>
                <div className="pointer-events-none absolute left-0 top-full pt-5 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="grid w-[min(980px,calc(100vw-80px))] grid-cols-[1.15fr_0.85fr] border border-cream/15 bg-navy">
                    <div className="p-6">
                      <div className="eyebrow text-cream/70">{nav.servicesEyebrow}</div>
                      <div className="mt-4 space-y-3">
                        {practiceData.map((practice, index) => (
                          <Link
                            key={practice.slug}
                            to={withLocalePath(locale, `/servicii/${practice.slug}`)}
                            className="group/item flex items-center justify-between border-b border-cream/12 pb-3 text-cream/86 transition duration-300 hover:text-cream"
                          >
                            <div>
                              <div className="text-[11px] uppercase tracking-[0.18em] text-cream/52">{String(index + 1).padStart(2, "0")}</div>
                              <div className="mt-1 font-serif text-[30px] italic leading-none">{practice.title[locale]}</div>
                            </div>
                            <ChevronRight className="h-4 w-4 transition duration-300 group-hover/item:translate-x-1" />
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="border-l border-cream/12 p-6">
                      <Link
                        to={withLocalePath(locale, "/contact")}
                        className="block min-h-full border border-cream/14 bg-cream/6 p-6 transition duration-300 hover:bg-cream/10"
                      >
                        <div className="eyebrow text-cream/58">{nav.contact}</div>
                        <h3 className="mt-5 max-w-xs font-serif text-[38px] italic leading-none text-cream">{nav.servicesPromptTitle}</h3>
                        <p className="mt-5 max-w-sm text-[16px] leading-[1.7] text-cream/78">{nav.servicesPromptText}</p>
                        <span className="editorial-link mt-8 text-cream">
                          {nav.servicesPromptCta}
                        </span>
                        <div className="mt-8 border-t border-cream/12 pt-5">
                          <p className="text-[15px] leading-[1.7] text-cream/62">
                            +40 757 296 443 · pantelei.legaladviser@gmail.com
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : item.labelKey === "blog" ? (
              <div key={item.labelKey} className="group relative">
                <Link
                  to={withLocalePath(locale, item.href)}
                  className={cn("nav-link", isRouteActive(pathname, item.href) && "opacity-100")}
                >
                  {nav[item.labelKey]}
                </Link>
                <div className="pointer-events-none absolute left-0 top-full pt-5 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="w-[min(560px,calc(100vw-80px))] border border-cream/15 bg-navy">
                    <div className="p-6">
                      <div className="eyebrow text-cream/62">{nav.latestPosts}</div>
                      <div className="mt-5 space-y-4">
                        {latestPosts.map((post) => (
                          <Link
                            key={post.slug}
                            to={withLocalePath(locale, `/blog/${post.slug}`)}
                            className="block border border-cream/12 bg-cream/5 p-5 transition duration-300 hover:bg-cream/10"
                          >
                            <div className="flex items-center justify-between gap-4 border-b border-cream/12 pb-4">
                              <span className="eyebrow text-cream/44">{post.date}</span>
                              <span className="eyebrow text-cream/52">{post.readTime}</span>
                            </div>
                            <div className="mt-4 font-serif text-[30px] italic leading-none text-cream">{post.title[locale]}</div>
                            <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-cream/74">{post.excerpt[locale]}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.labelKey}
                to={withLocalePath(locale, item.href)}
                className={cn("nav-link", isRouteActive(pathname, item.href) && "opacity-100")}
              >
                {nav[item.labelKey]}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <a href="tel:+40757296443" className="nav-link">
            +40 757 296 443
          </a>
          <Link to={withLocalePath(locale, "/contact")} className="btn-base btn-solid-cream px-6 py-3">
            {ctaLabel}
          </Link>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em]">
            <button type="button" onClick={() => switchLocale("ro")} className={cn("transition duration-300", locale === "ro" ? "opacity-100" : "opacity-50 hover:opacity-80")}>
              RO
            </button>
            <span className="opacity-35">/</span>
            <button type="button" onClick={() => switchLocale("ru")} className={cn("transition duration-300", locale === "ru" ? "opacity-100" : "opacity-50 hover:opacity-80")}>
              RU
            </button>
          </div>
        </div>
        <button type="button" onClick={() => setOpen((value) => !value)} className="lg:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div className={cn("overflow-hidden border-t border-cream/12 bg-navy transition-all duration-300 lg:hidden", open ? "max-h-[80vh]" : "max-h-0")}>
        <div className="container-x py-6">
          <div className="space-y-4">
            {navItems.map((item) =>
              item.labelKey === "services" ? (
                <div key={item.labelKey}>
                  <div className="flex items-center justify-between gap-4">
                    <Link to={servicesAnchor} className="nav-link block" onClick={() => setOpen(false)}>
                      {nav.services}
                    </Link>
                    <button type="button" onClick={() => setServicesOpen((value) => !value)} className="nav-link flex items-center gap-2">
                      <span>{nav.servicesEyebrow}</span>
                      <ChevronRight className={cn("h-4 w-4 transition duration-300", servicesOpen ? "rotate-90" : "")} />
                    </button>
                  </div>
                  <div className={cn("grid transition-all duration-300", servicesOpen ? "grid-rows-[1fr] pt-3" : "grid-rows-[0fr]")}>
                    <div className="overflow-hidden">
                      <div className="space-y-3 border-l border-cream/15 pl-4">
                        {practiceData.map((practice) => (
                          <Link
                            key={practice.slug}
                            to={withLocalePath(locale, `/servicii/${practice.slug}`)}
                            className="block text-[16px] text-cream/82"
                            onClick={() => setOpen(false)}
                          >
                            {practice.title[locale]}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.labelKey} to={withLocalePath(locale, item.href)} className="nav-link block" onClick={() => setOpen(false)}>
                  {nav[item.labelKey]}
                </Link>
              ),
            )}
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-cream/12 pt-5">
            <a href="tel:+40757296443" className="nav-link">
              +40 757 296 443
            </a>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em]">
              <button type="button" onClick={() => switchLocale("ro")} className={locale === "ro" ? "opacity-100" : "opacity-55"}>
                RO
              </button>
              <button type="button" onClick={() => switchLocale("ru")} className={locale === "ru" ? "opacity-100" : "opacity-55"}>
                RU
              </button>
            </div>
          </div>
          <div className="mt-5">
            <Link to={withLocalePath(locale, "/contact")} className="btn-base btn-solid-cream w-full justify-center" onClick={() => setOpen(false)}>
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
