import type { Practice } from "../lib/types";

export const practiceData: Practice[] = [
  {
    slug: "drept-civil",
    title: {
      ro: "Drept civil",
      ru: "Гражданское право",
    },
    intro: {
      ro: "Strategie juridică pentru raporturi patrimoniale, obligații și litigii care cer precizie calmă.",
      ru: "Юридическая стратегия для имущественных отношений, обязательств и споров, где важны точность и выдержка.",
    },
    summary: {
      ro: "Asistență în redactare, negociere și reprezentare pentru persoane fizice și juridice.",
      ru: "Сопровождение при подготовке документов, переговорах и представительстве интересов частных и корпоративных клиентов.",
    },
    services: {
      ro: ["Contracte civile", "Recuperare creanțe", "Despăgubiri", "Acțiuni în răspundere civilă", "Consultanță preventivă"],
      ru: ["Гражданские договоры", "Взыскание задолженности", "Возмещение убытков", "Иски о гражданской ответственности", "Превентивные консультации"],
    },
    process: {
      ro: ["Analiză documentară și evaluarea riscului", "Definirea poziției juridice", "Negociere sau reprezentare în instanță", "Monitorizare până la executare"],
      ru: ["Анализ документов и оценка рисков", "Формирование правовой позиции", "Переговоры или судебное представительство", "Сопровождение до стадии исполнения"],
    },
    faq: [
      {
        question: { ro: "Când este utilă consultația preventivă?", ru: "Когда полезна превентивная консультация?" },
        answer: {
          ro: "Înainte de semnarea unui contract sau de inițierea unui litigiu, pentru a evita costuri disproporționate.",
          ru: "До подписания договора или начала спора, чтобы избежать несоразмерных расходов.",
        },
      },
      {
        question: { ro: "Lucrați și cu companii?", ru: "Вы работаете и с компаниями?" },
        answer: {
          ro: "Da, inclusiv pentru raporturi comerciale cu componentă civilă și litigii contractuale.",
          ru: "Да, в том числе по коммерческим отношениям с гражданско-правовой составляющей и договорным спорам.",
        },
      },
    ],
  },
  {
    slug: "drept-comercial",
    title: { ro: "Drept comercial", ru: "Коммерческое право" },
    intro: {
      ro: "Suport pentru decizii comerciale bine documentate, din etapa de structurare până la dispută.",
      ru: "Поддержка выверенных коммерческих решений от этапа структурирования до урегулирования спора.",
    },
    summary: {
      ro: "Cadru juridic solid pentru societăți, antreprenori și relații contractuale complexe.",
      ru: "Надёжная правовая база для компаний, предпринимателей и сложных договорных отношений.",
    },
    services: {
      ro: ["Revizuire contracte B2B", "Negociere clauze comerciale", "Litigii între profesioniști", "Politici interne", "Due diligence contractual"],
      ru: ["Проверка B2B-договоров", "Переговоры по коммерческим условиям", "Споры между профессиональными участниками", "Внутренние политики", "Договорной due diligence"],
    },
    process: {
      ro: ["Audit juridic al relației comerciale", "Setarea priorităților de business", "Documentare și negociere", "Implementare și follow-up"],
      ru: ["Юридический аудит коммерческих отношений", "Определение бизнес-приоритетов", "Подготовка и переговоры", "Внедрение и сопровождение"],
    },
    faq: [
      {
        question: { ro: "Puteți revizui rapid un contract urgent?", ru: "Можете быстро проверить срочный договор?" },
        answer: {
          ro: "Da, în funcție de volum și complexitate, cu accent pe clauzele critice și expunerea reală.",
          ru: "Да, в зависимости от объёма и сложности, с акцентом на критические условия и фактические риски.",
        },
      },
      {
        question: { ro: "Asigurați și suport recurent?", ru: "Возможна ли постоянная поддержка?" },
        answer: {
          ro: "Da, inclusiv sub formă de consultanță continuă pentru management și operațiuni.",
          ru: "Да, в том числе в формате регулярного сопровождения для менеджмента и операционной деятельности.",
        },
      },
    ],
  },
  {
    slug: "drept-imobiliar",
    title: { ro: "Drept imobiliar", ru: "Недвижимость" },
    intro: {
      ro: "Claritate juridică în tranzacții, titluri și raporturi locative unde un detaliu poate schimba tot.",
      ru: "Юридическая ясность в сделках, вопросах титула и арендных отношениях, где одна деталь меняет всё.",
    },
    summary: {
      ro: "Asistență pentru cumpărări, vânzări, închirieri și litigii cu componentă imobiliară.",
      ru: "Сопровождение купли-продажи, аренды и споров, связанных с недвижимостью.",
    },
    services: {
      ro: ["Verificarea titlului", "Promisiuni și contracte", "Locațiuni", "Litigii imobiliare", "Asistență notarială"],
      ru: ["Проверка титула", "Предварительные и основные договоры", "Аренда", "Споры по недвижимости", "Сопровождение нотариальных сделок"],
    },
    process: {
      ro: ["Verificare documente și istoric", "Identificarea vulnerabilităților", "Structurarea tranzacției", "Asistență până la finalizare"],
      ru: ["Проверка документов и истории объекта", "Выявление уязвимостей", "Структурирование сделки", "Сопровождение до завершения"],
    },
    faq: [
      {
        question: { ro: "Verificați și promisiuni bilaterale?", ru: "Проверяете ли вы предварительные договоры?" },
        answer: {
          ro: "Da, inclusiv riscuri privind avansul, termenele și condițiile suspensive.",
          ru: "Да, включая риски по задатку, срокам и отлагательным условиям.",
        },
      },
      {
        question: { ro: "Lucrați cu investitori?", ru: "Вы работаете с инвесторами?" },
        answer: {
          ro: "Da, pentru achiziții punctuale sau portofolii mici și medii.",
          ru: "Да, по разовым приобретениям и небольшим или средним портфелям.",
        },
      },
    ],
  },
  {
    slug: "dreptul-familiei",
    title: { ro: "Dreptul familiei", ru: "Семейное право" },
    intro: {
      ro: "Abordare fermă și discretă în chestiuni personale care cer tact, structură și protecție juridică.",
      ru: "Твёрдый и деликатный подход к личным вопросам, требующим такта, структуры и правовой защиты.",
    },
    summary: {
      ro: "Sprijin în divorț, autoritate părintească, pensie de întreținere și partaj.",
      ru: "Помощь при разводе, вопросах родительских прав, алиментах и разделе имущества.",
    },
    services: {
      ro: ["Divorț și separare", "Custodie și program de legături", "Partaj", "Pensie de întreținere", "Protecție în conflicte familiale"],
      ru: ["Развод и раздельное проживание", "Опека и график общения", "Раздел имущества", "Алименты", "Защита в семейных конфликтах"],
    },
    process: {
      ro: ["Evaluare confidențială", "Stabilirea obiectivelor reale", "Negociere sau acțiune judiciară", "Protejarea interesului pe termen lung"],
      ru: ["Конфиденциальная оценка ситуации", "Определение реальных целей", "Переговоры или судебное обращение", "Защита долгосрочных интересов"],
    },
    faq: [
      {
        question: { ro: "Gestionați și divorțuri amiabile?", ru: "Вы ведёте и мирные разводы?" },
        answer: {
          ro: "Da, atunci când există spațiu pentru un acord echilibrat și sustenabil.",
          ru: "Да, когда есть пространство для сбалансированного и устойчивого соглашения.",
        },
      },
      {
        question: { ro: "Cât de confidențiale rămân discuțiile?", ru: "Насколько конфиденциальны консультации?" },
        answer: {
          ro: "Confidențialitatea este tratată ca principiu de bază, încă din primul contact.",
          ru: "Конфиденциальность рассматривается как базовый принцип уже с первого контакта.",
        },
      },
    ],
  },
  {
    slug: "drept-fiscal",
    title: { ro: "Drept fiscal", ru: "Налоговое право" },
    intro: {
      ro: "Apărare riguroasă în raport cu autoritățile fiscale și decizii documentate pentru reducerea expunerii.",
      ru: "Строгая защита в отношениях с налоговыми органами и документированные решения для снижения рисков.",
    },
    summary: {
      ro: "Consultanță și reprezentare în inspecții, contestații și conformare fiscală.",
      ru: "Консультации и представительство при проверках, обжаловании и налоговом комплаенсе.",
    },
    services: {
      ro: ["Contestații fiscale", "Asistență în inspecții", "Analiza riscului fiscal", "Poziții și opinii juridice", "Dialog cu autoritățile"],
      ru: ["Налоговые жалобы", "Сопровождение проверок", "Анализ налоговых рисков", "Юридические заключения", "Взаимодействие с органами"],
    },
    process: {
      ro: ["Revizuirea actelor fiscale", "Strategie de apărare", "Redactare contestații și puncte de vedere", "Reprezentare procedurală"],
      ru: ["Проверка налоговых актов", "Стратегия защиты", "Подготовка жалоб и правовой позиции", "Процессуальное представительство"],
    },
    faq: [
      {
        question: { ro: "Ajutați înainte de inspecție?", ru: "Помогаете до начала проверки?" },
        answer: {
          ro: "Da, prevenția este adesea mai eficientă decât corecția post-factum.",
          ru: "Да, профилактика часто эффективнее, чем исправление последствий постфактум.",
        },
      },
      {
        question: { ro: "Lucrați și pentru PFA sau IMM?", ru: "Вы работаете с ИП и малым бизнесом?" },
        answer: {
          ro: "Da, inclusiv pentru structuri antreprenoriale mici și mijlocii.",
          ru: "Да, в том числе с ИП и малыми или средними компаниями.",
        },
      },
    ],
  },
];
