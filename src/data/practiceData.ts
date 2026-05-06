import type { Practice } from "../lib/types";

export const practiceData: Practice[] = [
  {
    slug: "drept-civil",
    title: {
      ro: "Deschidere și suport pentru afaceri",
      ru: "Открытие и сопровождение бизнеса",
    },
    intro: {
      ro: "Înregistrarea companiei în România: de la alegerea formei juridice până la obținerea certificatelor și licențelor necesare. Vă economisim timpul și vă scăpăm de birocrație.",
      ru: "Регистрация компаний в Румынии — от выбора правовой формы до получения необходимых сертификатов и лицензий. Экономим ваше время и избавляем от бюрократии.",
    },
    summary: {
      ro: "Deschiderea unei afaceri în România poate părea dificilă pentru un antreprenor străin. Cunosc toate etapele procesului, de la pregătirea documentelor până la obținerea certificatului de înregistrare. Îi ajut pe clienți să aleagă forma juridică optimă (SRL, PFA, sucursală) și rezolv toate aspectele birocratice.",
      ru: "Открытие бизнеса в Румынии может показаться сложным для иностранного предпринимателя. Я знаю все этапы процесса, от подготовки документов до получения Свидетельства о регистрации. Помогаю клиентам выбрать оптимальную правовую форму (SRL, PFA, филиал) и решаю все бюрократические вопросы.",
    },
    services: {
      ro: [
        "Înregistrarea SRL, PFA, sucursalei",
        "Obținerea CUI (cod unic de înregistrare)",
        "Deschiderea contului bancar corporativ",
        "Înregistrarea la ANAF",
        "Obținerea licențelor și autorizațiilor necesare",
        "EORI, NIF pentru comerț internațional",
        "Modificări la Registrul Comerțului",
      ],
      ru: [
        "Регистрация SRL, PFA, филиала",
        "Получение CUI (Уникальный регистрационный код)",
        "Открытие корпоративного банковского счёта",
        "Регистрация в ANAF (Налоговая)",
        "Получение необходимых лицензий и разрешений",
        "EORI, NIF для международной торговли",
        "Изменения в Торговом реестре",
      ],
    },
    process: {
      ro: [
        "Consultație. Analizăm afacerea dvs. și alegem forma juridică optimă.",
        "Pregătirea documentelor. Redactăm toate actele necesare pentru înregistrare.",
        "Depunere și înregistrare. Depunem documentele la Registrul Comerțului și obținem CUI.",
        "Finalizare. Primiți compania pregătită pentru activitate, contul bancar și înregistrarea fiscală.",
      ],
      ru: [
        "Консультация. Анализируем ваш бизнес и выбираем оптимальную правовую форму.",
        "Подготовка документов. Готовим все необходимые документы для регистрации.",
        "Подача и регистрация. Подаём документы в Торговый реестр и получаем CUI.",
        "Завершение. Вы получаете готовую к работе компанию, банковский счёт и налоговую регистрацию.",
      ],
    },
    faq: [
      {
        question: { ro: "Cât durează înregistrarea unei companii?", ru: "Сколько времени занимает регистрация компании?" },
        answer: {
          ro: "În medie, 3-7 zile lucrătoare din momentul depunerii pachetului complet de documente.",
          ru: "В среднем 3–7 рабочих дней с момента подачи полного пакета документов.",
        },
      },
      {
        question: { ro: "Care este capitalul social minim pentru SRL?", ru: "Какой минимальный уставный капитал нужен для SRL?" },
        answer: {
          ro: "În prezent, cerința este simbolică, însă structura companiei și documentele constitutive trebuie pregătite corect încă de la început.",
          ru: "Сейчас требование символическое, но структура компании и учредительные документы должны быть подготовлены корректно с самого начала.",
        },
      },
      {
        question: { ro: "Pot deschide o companie fără să mă aflu în România?", ru: "Могу ли я открыть компанию, не находясь в Румынии?" },
        answer: {
          ro: "Da, în multe situații procedura poate fi organizată prin procură și coordonare la distanță, în funcție de formatul afacerii și de documentele disponibile.",
          ru: "Да, во многих случаях процедуру можно организовать по доверенности и дистанционно, в зависимости от формата бизнеса и доступных документов.",
        },
      },
    ],
  },
  {
    slug: "drept-comercial",
    title: { ro: "Outsourcing juridic", ru: "Юридический аутсорсинг" },
    intro: {
      ro: "Suport juridic externalizat pentru companii care au nevoie de contracte clare, negocieri sigure și asistență constantă.",
      ru: "Юридический аутсорсинг для компаний, которым нужны понятные договоры, безопасные переговоры и постоянное сопровождение.",
    },
    summary: {
      ro: "Economisiți pe un jurist intern și reduceți riscurile.",
      ru: "Экономите на штатном юристе и снижаете риски.",
    },
    services: {
      ro: ["Verificare și redactare contracte", "Suport în negocieri", "Asistență juridică permanentă"],
      ru: ["Проверка и составление договоров", "Поддержка в переговорах", "Постоянное сопровождение"],
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
    title: { ro: "Servicii de imigrare", ru: "Иммиграционные услуги" },
    intro: {
      ro: "Asistență în proceduri de imigrare și cetățenie pentru persoane care se mută sau își stabilesc rezidența în România.",
      ru: "Помощь в процедурах иммиграции и получения гражданства для тех, кто переезжает или оформляет статус в Румынии.",
    },
    summary: {
      ro: "Treceți prin proces mai rapid și fără refuzuri.",
      ru: "Проходите процесс быстрее и без отказов.",
    },
    services: {
      ro: ["Permis de ședere", "Rezidență permanentă", "Cetățenie română", "Pregătirea documentelor"],
      ru: ["ВНЖ, ПМЖ", "Гражданство Румынии", "Подготовка документов"],
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
    title: { ro: "Imobiliare", ru: "Недвижимость" },
    intro: {
      ro: "Protecție juridică în achiziții imobiliare, verificări și structurarea sigură a tranzacțiilor.",
      ru: "Юридическая защита при покупке недвижимости, проверке объекта и безопасном оформлении сделки.",
    },
    summary: {
      ro: "Cumpărați imobilul în siguranță.",
      ru: "Покупаете недвижимость безопасно.",
    },
    services: {
      ro: ["Verificarea imobilului", "Redactarea contractelor", "Asistență în tranzacție"],
      ru: ["Проверка объекта", "Составление договоров", "Сопровождение сделки"],
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
    title: { ro: "Documente și traduceri", ru: "Документы и переводы" },
    intro: {
      ro: "Pregătirea documentelor juridice, traduceri legalizate și comunicare oficială fără erori.",
      ru: "Подготовка юридических документов, заверенные переводы и официальная переписка без ошибок.",
    },
    summary: {
      ro: "Toate documentele corespund cerințelor legale.",
      ru: "Все документы соответствуют требованиям законодательства.",
    },
    services: {
      ro: ["Documente juridice", "Traduceri legalizate", "Corespondență oficială"],
      ru: ["Юридические документы", "Заверенные переводы", "Официальная переписка"],
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
