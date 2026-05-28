import { Button } from "../components/ui/Button";
import { useLocale } from "../hooks/useLocale";
import { withLocalePath } from "../lib/locale";

export const NotFoundPage = () => {
  const { locale, t } = useLocale();

  return (
    <section className="section-y flex min-h-[70vh] items-center justify-center bg-paper">
      <div className="container-x text-center">
        <div className="accent-serif text-[clamp(200px,34vw,400px)] leading-none text-navy/5">404</div>
        <div className="-mt-20 eyebrow text-navy/58">{t.notFound.eyebrow}</div>
        <h1 className="display-title mt-6 text-navy">{t.notFound.title}</h1>
        <p className="body-copy mx-auto mt-6 max-w-xl text-ink/82">{t.notFound.description}</p>
        <div className="mt-10 flex justify-center">
          <Button href={withLocalePath(locale, "/")} variant="outline-navy">
            {t.notFound.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};
