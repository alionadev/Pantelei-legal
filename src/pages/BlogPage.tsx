import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { blogData } from "../data/blogData";
import { useLocale } from "../hooks/useLocale";
import { SectionHeading } from "../components/ui/SectionHeading";
import { withLocalePath } from "../lib/locale";

export const BlogPage = () => {
  const { locale, t } = useLocale();
  const [activeCategory, setActiveCategory] = useState<"all" | "civil" | "comercial" | "fiscal">("all");

  const posts = useMemo(
    () => blogData.filter((post) => activeCategory === "all" || post.category === activeCategory),
    [activeCategory],
  );

  const categories = [
    { key: "all", label: t.labels.allCategories },
    { key: "civil", label: t.blogPage.categories.civil },
    { key: "comercial", label: t.blogPage.categories.comercial },
    { key: "fiscal", label: t.blogPage.categories.fiscal },
  ] as const;

  return (
    <section className="section-y bg-paper">
      <div className="container-x">
        <SectionHeading eyebrow={t.blogPage.eyebrow} title={t.blogPage.title} />
        <div className="mt-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.key}
              type="button"
              onClick={() => setActiveCategory(category.key)}
              className={`btn-base ${activeCategory === category.key ? "btn-solid" : "btn-outline-navy"}`}
            >
              {category.label}
            </button>
          ))}
        </div>
        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {posts.map((post, index) => (
            <article key={post.slug} data-reveal="true" style={{ transitionDelay: `${60 + index * 60}ms` }} className="flex flex-col border border-navy/12 bg-cream p-8">
              <div className="flex items-center justify-between gap-4 border-b border-navy/12 pb-5">
                <span className="eyebrow text-navy/58">{t.blogPage.categories[post.category]}</span>
                <span className="eyebrow text-navy/42">{post.date}</span>
              </div>
              <h2 className="mt-8 font-serif text-[40px] italic leading-none text-navy">{post.title[locale]}</h2>
              <p className="mt-6 flex-1 text-[17px] leading-[1.7] text-ink/82">{post.excerpt[locale]}</p>
              <div className="mt-8 flex items-center justify-between">
                <span className="eyebrow text-navy/52">{post.readTime}</span>
                <Link to={withLocalePath(locale, `/blog/${post.slug}`)} className="editorial-link text-navy">
                  {t.labels.readMore}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
