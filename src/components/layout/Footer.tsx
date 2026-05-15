import { Link } from "react-router-dom";
import { withLocalePath } from "../../lib/locale";
import type { Locale } from "../../lib/types";

type FooterProps = {
  locale: Locale;
  nav: {
    home: string;
    about: string;
    blog: string;
    contact: string;
  };
  footer: {
    navTitle: string;
    languageTitle: string;
    address: string;
    copyright: string;
  };
};

export const Footer = ({ locale, nav, footer }: FooterProps) => (
  <footer className="bg-navy text-cream">
    <div className="container-x section-y pb-[clamp(28px,4vw,52px)]">
      <div className="double-rule-cream" />
      <div className="grid gap-10 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="eyebrow text-cream/72">Pantelei Legal</div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("București, România")}`}
            target="_blank"
            rel="noreferrer"
            className="mt-5 block max-w-md text-[17px] leading-[1.7] text-cream/82 transition duration-300 hover:text-cream"
          >
            București, România · Lun–Vin 9:00–18:00
          </a>
          <div className="mt-3 flex flex-wrap gap-x-2 text-[17px] leading-[1.7] text-cream/82">
            <a href="tel:+40757296443" className="transition duration-300 hover:text-cream">
              +40 757 296 443
            </a>
            <span className="text-cream/46">·</span>
            <a href="mailto:pantelei.legaladviser@gmail.com" className="transition duration-300 hover:text-cream">
              pantelei.legaladviser@gmail.com
            </a>
          </div>
        </div>
        <div>
          <div className="eyebrow text-cream/72">{footer.navTitle}</div>
          <div className="mt-5 flex flex-col gap-3">
            <Link to={withLocalePath(locale, "/")} className="editorial-link">
              {nav.home}
            </Link>
            <Link to={withLocalePath(locale, "/despre-aliona")} className="editorial-link">
              {nav.about}
            </Link>
            <Link to={withLocalePath(locale, "/blog")} className="editorial-link">
              {nav.blog}
            </Link>
            <Link to={withLocalePath(locale, "/contact")} className="editorial-link">
              {nav.contact}
            </Link>
          </div>
        </div>
        <div>
          <div className="eyebrow text-cream/72">{footer.languageTitle}</div>
          <div className="mt-5 flex gap-6">
            <Link className="editorial-link" to={withLocalePath("ro", "/")}>
              RO
            </Link>
            <Link className="editorial-link" to={withLocalePath("ru", "/")}>
              RU
            </Link>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(footer.address)}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 block text-[15px] leading-[1.7] text-cream/68 transition duration-300 hover:text-cream/88"
          >
            {footer.address}
          </a>
        </div>
      </div>
      <div className="double-rule-cream" />
      <p className="pt-6 text-[11px] uppercase tracking-[0.18em] text-cream/58">{footer.copyright}</p>
    </div>
  </footer>
);
