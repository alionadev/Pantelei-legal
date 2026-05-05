import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { useLocale } from "../../hooks/useLocale";
import { useReveal } from "../../hooks/useReveal";
import { useEffect } from "react";

export const Layout = () => {
  const { locale, pathname, switchLocale, t } = useLocale();
  const location = useLocation();
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

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navigation locale={locale} pathname={pathname} switchLocale={switchLocale} nav={t.nav} />
      <main>
        <Outlet />
      </main>
      <Footer locale={locale} nav={t.nav} footer={t.footer} />
    </div>
  );
};
