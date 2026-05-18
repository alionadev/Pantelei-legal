export const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const RUSSIAN_SHORT_WORDS = /(^|[\s(«"—])([АаВвИиКкОоСсУу])\s+/g;

export const applyRussianTypography = <T>(value: T): T => {
  if (typeof value === "string") {
    return value.replace(RUSSIAN_SHORT_WORDS, "$1$2\u00A0") as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => applyRussianTypography(item)) as T;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, applyRussianTypography(item)]),
    ) as T;
  }

  return value;
};

export const formatPhoneInput = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (!digits) return "";

  const normalized = digits.startsWith("40") ? digits : `40${digits.startsWith("0") ? digits.slice(1) : digits}`;
  const parts = [normalized.slice(0, 2), normalized.slice(2, 5), normalized.slice(5, 8), normalized.slice(8, 11)].filter(Boolean);
  return `+${parts.join(" ")}`;
};
