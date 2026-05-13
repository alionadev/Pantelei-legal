import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { useLocale } from "../../hooks/useLocale";
import { useReveal } from "../../hooks/useReveal";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withLocalePath } from "../../lib/locale";

export const Layout = () => {
  const { locale, pathname, switchLocale, t } = useLocale();
  const location = useLocation();
  const [logoCollapsed, setLogoCollapsed] = useState(false);
  useReveal(location.pathname);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const target = document.getElementById(id);
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.siteTitle;
  }, [locale, t.siteTitle]);

  useEffect(() => {
    const onScroll = () => setLogoCollapsed(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Link
        to={withLocalePath(locale, "/")}
        className="fixed left-0 top-0 z-40 hidden h-screen w-[10vw] items-start justify-center pt-[18px] lg:flex"
        aria-label="Pantelei Legal"
      >
        <div className={logoCollapsed ? "origin-top scale-[0.78] transition duration-300" : "origin-top scale-100 transition duration-300"}>
          <div className="vertical-hero-title text-navy/88">PANTELEI LEGAL</div>
        </div>
      </Link>
      <Navigation locale={locale} pathname={pathname} switchLocale={switchLocale} nav={t.nav} />
      <div className="lg:mx-[10vw]">
        <main className="pt-[84px]">
          <Outlet />
        </main>
        <Footer locale={locale} nav={t.nav} footer={t.footer} />
      </div>
    </div>
  );
};
