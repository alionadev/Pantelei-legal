import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { useLocale } from "../../hooks/useLocale";
import { useReveal } from "../../hooks/useReveal";
import { useEffect, useState } from "react";
import { withLocalePath } from "../../lib/locale";

const WhatsAppIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.61 2 2.2 6.4 2.2 11.82c0 1.73.45 3.42 1.31 4.91L2 22l5.42-1.42a9.8 9.8 0 0 0 4.6 1.17h.01c5.42 0 9.82-4.4 9.82-9.82a9.75 9.75 0 0 0-2.8-7.02Zm-7.02 15.17h-.01a8.14 8.14 0 0 1-4.15-1.14l-.3-.18-3.21.84.86-3.13-.2-.32a8.13 8.13 0 0 1-1.26-4.33c0-4.5 3.67-8.17 8.19-8.17 2.18 0 4.22.84 5.76 2.39a8.1 8.1 0 0 1 2.39 5.78c0 4.5-3.68 8.16-8.17 8.16Zm4.48-6.12c-.25-.13-1.47-.73-1.69-.81-.23-.08-.39-.13-.56.12-.16.24-.65.81-.79.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.25-.74-.66-1.24-1.47-1.39-1.72-.15-.24-.02-.38.11-.51.11-.11.25-.29.38-.43.13-.15.17-.25.25-.41.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.4-.41-.56-.41h-.48c-.17 0-.43.06-.66.31-.23.24-.87.85-.87 2.08 0 1.23.89 2.41 1.01 2.58.12.16 1.75 2.67 4.23 3.75.59.26 1.06.42 1.42.54.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.19-.06-.1-.22-.16-.47-.29Z" />
  </svg>
);

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
      <a
        href="https://wa.me/40757296443"
        target="_blank"
        rel="noreferrer"
        className="fixed-contact-strip"
        aria-label="WhatsApp +40 757 296 443"
      >
        <span>+40 757 296 443 (WhatsApp)</span>
        <WhatsAppIcon className="h-4 w-4" />
      </a>
      <a
        href={withLocalePath(locale, "/")}
        className="fixed left-0 top-0 z-[80] hidden h-screen w-[clamp(72px,8vw,120px)] items-start justify-center pt-[18px] xl:flex"
        aria-label="Pantelei Legal"
      >
        <div className={logoCollapsed ? "origin-top scale-[0.78] transition duration-300" : "origin-top scale-100 transition duration-300"}>
          <div className="vertical-hero-title text-navy/88">PANTELEI LEGAL</div>
        </div>
      </a>
      <Navigation locale={locale} pathname={pathname} switchLocale={switchLocale} nav={t.nav} />
      <div className="xl:mx-[clamp(72px,8vw,120px)]">
        <main className="pt-[128px]">
          <Outlet />
        </main>
        <Footer locale={locale} nav={t.nav} footer={t.footer} />
      </div>
    </div>
  );
};
