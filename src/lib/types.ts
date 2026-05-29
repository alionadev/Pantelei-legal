export type Locale = "ro" | "ru";

export type PracticeSlug =
  | "drept-civil"
  | "drept-comercial"
  | "drept-imobiliar"
  | "dreptul-familiei"
  | "drept-fiscal";

export type Practice = {
  slug: PracticeSlug;
  title: Record<Locale, string>;
  intro: Record<Locale, string>;
  summary: Record<Locale, string>;
  includedDescription: Record<Locale, string>;
  services: Record<Locale, string[]>;
  process: Record<Locale, string[]>;
  faq: Array<{
    question: Record<Locale, string>;
    answer: Record<Locale, string>;
  }>;
};

export type BlogPost = {
  slug: string;
  category: "civil" | "comercial" | "fiscal";
  date: string;
  readTime: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  content: Record<Locale, string>;
  related: string[];
};
