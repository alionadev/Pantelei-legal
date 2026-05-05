import { useLocation, useNavigate } from "react-router-dom";
import { getLocaleFromPath, withLocalePath } from "../lib/locale";
import type { Locale } from "../lib/types";
import { translations } from "../data/translations";

export const useLocale = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locale = getLocaleFromPath(location.pathname);

  const switchLocale = (nextLocale: Locale) => {
    navigate(withLocalePath(nextLocale, location.pathname));
  };

  return {
    locale,
    t: translations[locale],
    pathname: location.pathname,
    switchLocale,
  };
};
