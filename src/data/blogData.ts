import type { BlogPost } from "../lib/types";

export const blogData: BlogPost[] = [
  {
    slug: "clauze-esentiale-intr-un-contract-comercial",
    category: "comercial",
    date: "2026-03-12",
    readTime: "5 min",
    title: {
      ro: "Clauzele esențiale într-un contract comercial bine apărat",
      ru: "Ключевые условия в коммерческом договоре с надёжной защитой",
    },
    excerpt: {
      ro: "Unde apar cele mai scumpe neclarități și cum pot fi prevenite înainte de semnare.",
      ru: "Где возникают самые дорогие неясности и как предотвратить их до подписания.",
    },
    content: {
      ro: `## De ce formularea contează

Un contract comercial nu e doar o formalitate. În practică, diferența dintre o clauză elegantă și una utilă apare exact când relația se tensionează.

## Patru puncte care nu trebuie tratate generic

- obiectul precis al obligațiilor;
- termenele și mecanismul de acceptare;
- răspunderea pentru întârziere;
- modul de încetare și efectele după încetare.

## O disciplină simplă

Înainte de semnare, merită testat textul pe trei scenarii: întârziere, neexecutare parțială și ieșire din relație. Dacă documentul răspunde calm și clar la toate trei, baza e solidă.`,
      ru: `## Почему формулировка имеет значение

Коммерческий договор не сводится к формальности. На практике разница между красивой и рабочей формулировкой проявляется именно тогда, когда отношения обостряются.

## Четыре пункта, которые нельзя описывать общими словами

- точный предмет обязательств;
- сроки и механизм приёмки;
- ответственность за просрочку;
- порядок прекращения и последствия после прекращения.

## Простая дисциплина

До подписания полезно проверить текст на трёх сценариях: просрочка, частичное неисполнение и выход из отношений. Если документ спокойно и ясно отвечает на все три, база надёжна.`,
    },
    related: ["riscuri-la-achizitia-unui-imobil", "cum-se-pregateste-o-contestatie-fiscala"],
  },
  {
    slug: "riscuri-la-achizitia-unui-imobil",
    category: "civil",
    date: "2026-02-18",
    readTime: "6 min",
    title: {
      ro: "Riscuri juridice la achiziția unui imobil în București",
      ru: "Юридические риски при покупке недвижимости в Бухаресте",
    },
    excerpt: {
      ro: "Titlul, sarcinile și promisiunile bilaterale trebuie citite înainte de entuziasm.",
      ru: "Титул, обременения и предварительные договоры нужно анализировать раньше, чем эмоции.",
    },
    content: {
      ro: `## Ce se verifică înainte de orice

Primul pas nu este negocierea prețului, ci verificarea titlului și a istoricului documentelor.

## Zone clasice de vulnerabilitate

- diferențe între situația factuală și acte;
- obligații asumate prin promisiuni anterioare;
- sarcini sau litigii insuficient analizate.

## Concluzie

O verificare juridică discretă înainte de semnare costă incomparabil mai puțin decât corectarea unei tranzacții construite grăbit.`,
      ru: `## Что проверяется в первую очередь

Первый шаг — не торг по цене, а проверка титула и истории документов.

## Классические зоны уязвимости

- расхождение между фактической ситуацией и актами;
- обязательства из ранее подписанных предварительных договоров;
- обременения или споры, которые были оценены поверхностно.

## Вывод

Сдержанная юридическая проверка до подписания стоит несопоставимо меньше, чем исправление поспешно построенной сделки.`,
    },
    related: ["clauze-esentiale-intr-un-contract-comercial", "cum-se-pregateste-o-contestatie-fiscala"],
  },
  {
    slug: "cum-se-pregateste-o-contestatie-fiscala",
    category: "fiscal",
    date: "2026-01-29",
    readTime: "4 min",
    title: {
      ro: "Cum se pregătește o contestație fiscală fără pași inutili",
      ru: "Как подготовить налоговую жалобу без лишних шагов",
    },
    excerpt: {
      ro: "Cronologia documentelor și disciplina argumentelor fac diferența din primele pagini.",
      ru: "Хронология документов и дисциплина аргументации решают исход с первых страниц.",
    },
    content: {
      ro: `## De la reacție la strategie

După primirea actului fiscal, tentația este răspunsul imediat. În realitate, ordinea documentelor și delimitarea exactă a criticilor contează mai mult decât viteza aparentă.

## Elementele unei contestații credibile

- identificarea clară a actului contestat;
- separarea faptelor de interpretări;
- trimiterea punctuală la probe;
- cerere coerentă privind soluția urmărită.

## Ce ajută cu adevărat

O contestație bună nu ridică tonul. Ridică standardul argumentării.`,
      ru: `## От реакции к стратегии

После получения налогового акта хочется ответить немедленно. На практике порядок документов и точное разграничение доводов важнее, чем видимая скорость.

## Элементы убедительной жалобы

- чёткая идентификация обжалуемого акта;
- разделение фактов и интерпретаций;
- точные ссылки на доказательства;
- последовательное требование по желаемому результату.

## Что действительно помогает

Хорошая жалоба не повышает тон. Она повышает стандарт аргументации.`,
    },
    related: ["clauze-esentiale-intr-un-contract-comercial", "riscuri-la-achizitia-unui-imobil"],
  },
];
