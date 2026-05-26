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
        <div className="max-w-[760px]">
          <SectionHeading eyebrow={t.blogPage.eyebrow} title={t.blogPage.title} />
        </div>
        <div className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:mt-12 sm:flex-wrap sm:gap-3 sm:px-0">
          {categories.map((category) => (
            <button
              key={category.key}
              type="button"
              onClick={() => setActiveCategory(category.key)}
              aria-pressed={activeCategory === category.key}
              className={`btn-base blog-filter-btn ${activeCategory === category.key ? "blog-filter-active" : "blog-filter-idle"}`}
            >
              <span>{category.label}</span>
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 xl:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              data-reveal="true"
              style={{ transitionDelay: `${60 + index * 60}ms` }}
              className="flex flex-col border border-navy/12 bg-cream p-5 sm:p-8"
            >
              <div className="flex flex-col gap-2 border-b border-navy/12 pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pb-5">
                <span className="eyebrow text-navy/58">{t.blogPage.categories[post.category]}</span>
                <span className="eyebrow text-navy/42">{post.date}</span>
              </div>
              <h2 className="card-title mt-5 text-navy sm:mt-8">
                {post.title[locale]}
              </h2>
              <p className="body-copy-sm mt-4 flex-1 text-ink/82 sm:mt-6 sm:text-[16px]">
                {post.excerpt[locale]}
              </p>
              <div className="mt-6 flex items-center justify-between gap-4 sm:mt-8">
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
