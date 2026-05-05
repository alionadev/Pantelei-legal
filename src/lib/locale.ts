import type { Locale } from "./types";

export const locales: Locale[] = ["ro", "ru"];
export const defaultLocale: Locale = "ro";

export const localePrefix = (locale: Locale) => (locale === "ru" ? "/ru" : "");

export const stripLocalePrefix = (pathname: string) =>
  pathname === "/ru" ? "/" : pathname.replace(/^\/ru(?=\/|$)/, "") || "/";

export const getLocaleFromPath = (pathname: string): Locale =>
  pathname === "/ru" || pathname.startsWith("/ru/") ? "ru" : "ro";

export const withLocalePath = (locale: Locale, pathname: string) => {
  const cleanPath = stripLocalePrefix(pathname);
  return `${localePrefix(locale)}${cleanPath === "/" ? "" : cleanPath}` || "/";
};

export const isRouteActive = (currentPath: string, targetPath: string) => {
  const current = stripLocalePrefix(currentPath);
  return current === targetPath || (targetPath !== "/" && current.startsWith(targetPath));
};
