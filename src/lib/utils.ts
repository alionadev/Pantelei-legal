export const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export const formatPhoneInput = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (!digits) return "";

  const normalized = digits.startsWith("40") ? digits : `40${digits.startsWith("0") ? digits.slice(1) : digits}`;
  const parts = [normalized.slice(0, 2), normalized.slice(2, 5), normalized.slice(5, 8), normalized.slice(8, 11)].filter(Boolean);
  return `+${parts.join(" ")}`;
};
