import { Link, useParams } from "react-router-dom";
import { blogData } from "../data/blogData";
import { useLocale } from "../hooks/useLocale";
import { SectionHeading } from "../components/ui/SectionHeading";
import { extractHeadings, MarkdownRenderer } from "../components/ui/MarkdownRenderer";
import { withLocalePath } from "../lib/locale";

export const BlogPostPage = () => {
  const { slug } = useParams();
  const { locale, t } = useLocale();
  const post = blogData.find((item) => item.slug === slug) ?? blogData[0];
  const headings = extractHeadings(post.content[locale]);
  const related = blogData.filter((item) => post.related.includes(item.slug));

  return (
    <section className="section-y bg-paper">
      <div className="container-x">
        <div className="grid gap-8 2xl:grid-cols-[minmax(220px,0.85fr)_minmax(0,1.3fr)_minmax(220px,0.8fr)] 2xl:gap-12">
          <aside data-reveal="true">
            <div className="border border-navy/12 bg-cream p-5 xl:p-6 2xl:sticky 2xl:top-28">
              <div className="eyebrow text-navy/58">{t.labels.contents}</div>
              <div className="mt-6 space-y-3">
                {headings.map((heading) => (
                  <a key={heading.id} href={`#${heading.id}`} className="editorial-link block text-navy">
                    {heading.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
          <article data-reveal="true" style={{ transitionDelay: "90ms" }}>
            <SectionHeading eyebrow={t.blogPage.categories[post.category]} title={post.title[locale]} />
            <div className="mt-8 flex gap-6">
              <span className="eyebrow text-navy/55">{post.date}</span>
              <span className="eyebrow text-navy/45">{post.readTime}</span>
            </div>
            <div className="mt-10">
              <MarkdownRenderer content={post.content[locale]} />
            </div>
            <div className="mt-10 border-t border-navy/12 pt-6">
              <span className="eyebrow text-navy/58">{t.labels.share}</span>
              <div className="mt-4 flex gap-5">
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} className="editorial-link text-navy">
                  LinkedIn
                </a>
                <a href={`mailto:?subject=${encodeURIComponent(post.title[locale])}&body=${encodeURIComponent(window.location.href)}`} className="editorial-link text-navy">
                  Email
                </a>
              </div>
            </div>
          </article>
          <aside data-reveal="true" style={{ transitionDelay: "180ms" }}>
            <div className="border border-navy/12 bg-cream p-5 xl:p-6 2xl:sticky 2xl:top-28">
              <div className="eyebrow text-navy/58">{t.labels.related}</div>
              <div className="mt-6 space-y-6">
                {related.map((item) => (
                  <Link key={item.slug} to={withLocalePath(locale, `/blog/${item.slug}`)} className="block border-b border-navy/12 pb-5">
                    <span className="eyebrow text-navy/45">{t.blogPage.categories[item.category]}</span>
                    <div className="title-sm mt-2 text-navy">{item.title[locale]}</div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
