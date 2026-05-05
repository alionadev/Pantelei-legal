import { Accordion } from "../components/ui/Accordion";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useLocale } from "../hooks/useLocale";

export const FaqPage = () => {
  const { t } = useLocale();

  return (
    <section className="section-y bg-paper">
      <div className="container-x">
        <SectionHeading eyebrow={t.faqPage.eyebrow} title={t.faqPage.title} />
        <div className="mt-12">
          <Accordion items={t.faqPage.items.map((item) => ({ question: item.q, answer: item.a }))} />
        </div>
      </div>
    </section>
  );
};
