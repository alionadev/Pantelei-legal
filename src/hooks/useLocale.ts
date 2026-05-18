import { useLocation, useNavigate } from "react-router-dom";
import { getLocaleFromPath, withLocalePath } from "../lib/locale";
import type { Locale } from "../lib/types";
import { translations } from "../data/translations";
import { applyRussianTypography } from "../lib/utils";

export const useLocale = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locale = getLocaleFromPath(location.pathname);

  const switchLocale = (nextLocale: Locale) => {
    navigate(withLocalePath(nextLocale, location.pathname));
  };

  const t = locale === "ru" ? applyRussianTypography(translations[locale]) : translations[locale];

  return {
    locale,
    t,
    pathname: location.pathname,
    switchLocale,
  };
};
