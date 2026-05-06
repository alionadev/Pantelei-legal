import type { Locale } from "../lib/types";

export const translations = {
  ro: {
    siteTitle: "Pantelei Legal",
    nav: {
      home: "Acasă",
      about: "Despre",
      services: "Servicii",
      blog: "Blog",
      faq: "FAQ",
      contact: "Contact",
      servicesMenu: [
        "Deschidere și suport pentru afaceri",
        "Outsourcing Juridic",
        "Servicii de imigrare",
        "Imobiliare",
        "Documente și traduceri",
      ],
    },
    labels: {
      phone: "Telefon",
      email: "Email",
      address: "Adresă",
      hours: "Program",
      language: "Limbă",
      established: "EST · MMXVII · BUCUREȘTI",
      collaboration: "In Collaboration With",
      readMore: "Citește mai mult",
      related: "Articole conexe",
      share: "Distribuie",
      contents: "Cuprins",
      allCategories: "Toate categoriile",
      success: "Mesajul a fost pregătit. Veți primi un răspuns în cel mai scurt timp.",
    },
    hero: {
      eyebrow: "PANTELEI LEGAL CONSULTING · ROMÂNIA",
      titleTop: "Asistență juridică în România",
      titleBottom: "pentru afaceri și imigrare",
      description:
        "Deschiderea companiilor, permise de ședere, cetățenie și asistență pentru tranzacții, fără erori, întârzieri și riscuri.",
      primaryCta: "OBȚINEȚI O CONSULTAȚIE",
      secondaryCta: "SERVICII",
      portraitTag: "N° 01 — Aliona Pantelei",
      highlights: [
        "Lucrăm cu antreprenori și expați",
        "Asistență completă la cheie",
        "Colaborare posibilă la distanță",
      ],
    },
    
    forWhom: {
      eyebrow: "Pentru cine",
      title: "Pentru cine sunt potrivite serviciile mele",
      cards: [
        {
          roman: "I",
          title: "Antreprenorilor",
          items: ["doriți să deschideți o afacere", "aveți nevoie de un jurist externalizat", "planificați extinderea"],
        },
        {
          roman: "II",
          title: "Expaților",
          items: ["doriți să obțineți permis de ședere", "aveți nevoie de ajutor cu documentele", "vă mutați în România"],
        },
        {
          roman: "III",
          title: "Investitorilor",
          items: ["cumpărarea unui imobil", "verificare și asistență în tranzacție"],
        },
      ],
    },
    servicesHome: {
      eyebrow: "Servicii",
      title: "Cu ce vă pot ajuta",
    },
    aboutSnippet: {
      eyebrow: "Despre Aliona",
      title: "Asistență juridică pe care vă puteți baza.",
      text:
        "Mă numesc Aliona Pantelei, jurist și fondator PANTELEI LEGAL CONSULTING. Ajut antreprenori și clienți privați să soluționeze probleme juridice în România: de la înregistrarea unei afaceri până la obținerea cetățeniei și asistență în tranzacții. Sarcina mea nu este doar să pregătesc documentele, ci să vă protejez interesele și să evit riscurile. Fiecare proiect este gestionat cu atenție la detalii și cu responsabilitate deplină pentru rezultat.",
      cta: "MAI MULT DESPRE ALIONA",
    },
    whyUs: {
      eyebrow: "De ce aleg",
      title: "PANTELEI LEGAL CONSULTING",
      items: [
        {
          title: "Abordare complexă",
          text: "Analiza nu se oprește la un singur document, ci privește întreaga situație și consecințele ei practice.",
        },
        {
          title: "Lucru la cheie",
          text: "Dosarul este însoțit de la prima consultație până la rezultatul final, fără rupturi între etape.",
        },
        {
          title: "Minimizarea riscurilor juridice",
          text: "Documentele și deciziile sunt verificate astfel încât să reducă probabilitatea erorilor, refuzurilor și pierderilor.",
        },
        {
          title: "Experiență cu clienți internaționali",
          text: "Specificul cererilor venite de la expați, investitori și antreprenori care lucrează în România este bine înțeles.",
        },
      ],
    },
    cta: {
      eyebrow: "Consultație",
      title: "Obțineți o consultație pentru situația dumneavoastră",
      button: "OBȚINEȚI O CONSULTAȚIE",
    },
    footer: {
      navTitle: "Navigație",
      languageTitle: "Limbi",
      address: "București, România · Lun–Vin 9:00–18:00",
      copyright: "© 2026 Pantelei Legal. Toate drepturile rezervate.",
    },
    aboutPage: {
      eyebrow: "Despre Aliona Pantelei",
      title: "Asistență juridică pe care vă puteți baza.",
      bio:
        "Mă numesc Aliona Pantelei, jurist și fondator PANTELEI LEGAL CONSULTING. Ajut antreprenori și clienți privați să soluționeze probleme juridice în România: de la înregistrarea unei afaceri până la obținerea cetățeniei și asistență în tranzacții. Sarcina mea nu este doar să pregătesc documentele, ci să vă protejez interesele și să evit riscurile. Fiecare proiect este gestionat cu atenție la detalii și cu responsabilitate deplină pentru rezultat.",
      educationTitle: "Educație și formare",
      education: [
        "Studii juridice și formare continuă în drept civil, comercial și fiscal.",
        "Actualizare constantă privind practica instanțelor și modificările legislative relevante.",
      ],
      valuesTitle: "Valori de lucru",
      values: ["Abordare individuală", "Condiții transparente", "Asistență în toate etapele"],
      experienceTitle: "Experiență practică",
      experience:
        "Experiența acumulată include consultanță pentru persoane private, antreprenori și companii, în dosare care au cerut atât finețe de redactare, cât și fermitate procedurală.",
    },
    faqPage: {
      eyebrow: "Întrebări frecvente",
      title: "Răspunsuri concise pentru întrebările care apar înainte de primul contact.",
      items: [
        {
          q: "Cum are loc prima consultație?",
          a: "După stabilirea contactului, se clarifică pe scurt contextul, documentele necesare și obiectivul realist al discuției.",
        },
        {
          q: "Oferiți și consultanță online?",
          a: "Da, atunci când natura mandatului permite o analiză eficientă la distanță.",
        },
        {
          q: "Ce documente trebuie pregătite?",
          a: "Documentele relevante pentru situație: contracte, corespondență, notificări, acte fiscale sau hotărâri, după caz.",
        },
        {
          q: "Lucrați în regim de urgență?",
          a: "Pentru situațiile sensibile în timp se poate stabili un calendar accelerat, în funcție de disponibilitate și volum.",
        },
      ],
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Trimiteți contextul pe scurt. Strategia începe cu o formulare exactă.",
      description:
        "Pentru o primă evaluare, sunt utile câteva repere clare: natura situației, termenul relevant și documentele deja existente.",
      form: {
        name: "Nume",
        email: "Email",
        phone: "Telefon",
        subject: "Subiect",
        message: "Mesaj",
        submit: "TRIMITE MESAJUL",
      },
      blockTitle: "Date de contact",
    },
    blogPage: {
      eyebrow: "Jurnal juridic",
      title: "Articole scurte, scrise cu aceeași economie de gesturi ca și practica juridică.",
      categories: {
        civil: "Civil",
        comercial: "Comercial",
        fiscal: "Fiscal",
      },
    },
    notFound: {
      eyebrow: "404",
      title: "Pagina căutată nu a fost găsită.",
      description: "Adresa poate fi incompletă sau conținutul a fost mutat într-o altă secțiune.",
      cta: "ÎNAPOI ACASĂ",
    },
    practicePage: {
      eyebrow: "Serviciu",
      servicesTitle: "Ce este inclus în serviciu",
      processTitle: "Cum decurge colaborarea",
      faqTitle: "Întrebări frecvente",
      cta: "CONSULTAȚIE",
    },
  },
  ru: {
    siteTitle: "Pantelei Legal",
    nav: {
      home: "Главная",
      about: "Despre",
      services: "Практики",
      blog: "Блог",
      faq: "FAQ",
      contact: "Контакты",
      servicesMenu: [
        "Открытие и сопровождение бизнеса",
        "Outsourcing Juridic",
        "Иммиграционные услуги",
        "Недвижимость",
        "Документы и переводы",
      ],
    },
    labels: {
      phone: "Телефон",
      email: "Email",
      address: "Адрес",
      hours: "Часы работы",
      language: "Язык",
      established: "EST · MMXVII · BUCUREȘTI",
      collaboration: "In Collaboration With",
      readMore: "Читать далее",
      related: "Похожие статьи",
      share: "Поделиться",
      contents: "Содержание",
      allCategories: "Все категории",
      success: "Сообщение подготовлено. Ответ будет направлен в ближайшее время.",
    },
    hero: {
      eyebrow: "PANTELEI LEGAL CONSULTING · РУМЫНИЯ",
      titleTop: "Юридическая поддержка в Румынии",
      titleBottom: "для бизнеса и иммиграции",
      description:
        "Открытие компаний, ВНЖ, гражданство и сопровождение сделок — без ошибок, задержек и рисков.",
      primaryCta: "ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ",
      secondaryCta: "УСЛУГИ",
      portraitTag: "N° 01 — Aliona Pantelei",
      highlights: [
        "Работаем с предпринимателями и экспатами",
        "Полное сопровождение под ключ",
        "Возможна работа дистанционно",
      ],
    },
    stats: [
      { roman: "I", value: "200+", label: "Дел" },
      { roman: "II", value: "150+", label: "Клиентов" },
      { roman: "III", value: "8+", label: "Лет" },
    ],
    forWhom: {
      eyebrow: "Для кого",
      title: "Кому подойдут мои услуги",
      cards: [
        {
          roman: "I",
          title: "Предпринимателям",
          items: ["хотите открыть бизнес", "нужен юрист на аутсорсе", "планируете масштабирование"],
        },
        {
          roman: "II",
          title: "Экспатам",
          items: ["хотите получить ВНЖ", "нужна помощь с документами", "переезжаете в Румынию"],
        },
        {
          roman: "III",
          title: "Инвесторам",
          items: ["покупка недвижимости", "проверка и сопровождение"],
        },
      ],
    },
    servicesHome: {
      eyebrow: "Услуги",
      title: "Чем я могу вам помочь",
    },
    aboutSnippet: {
      eyebrow: "Об Алёне",
      title: "Юридическая поддержка, на которую можно опереться.",
      text:
        "Меня зовут Алёна Пантелей — юрист и основатель PANTELEI LEGAL CONSULTING. Я помогаю предпринимателям и частным клиентам решать юридические вопросы в Румынии: от регистрации бизнеса до получения гражданства и сопровождения сделок. Моя задача — не просто оформить документы, а защитить ваши интересы и избежать рисков. Каждый проект ведётся с вниманием к деталям и полной ответственностью за результат.",
      cta: "ПОДРОБНЕЕ ОБ АЛЁНЕ",
    },
    whyUs: {
      eyebrow: "Почему выбирают",
      title: "PANTELEI LEGAL CONSULTING",
      items: [
        {
          title: "Комплексный подход",
          text: "Задача рассматривается не изолированно, а вместе со всеми её правовыми и практическими последствиями.",
        },
        {
          title: "Работа «под ключ»",
          text: "Сопровождение идёт от первой консультации до финального результата, без разрыва этапов.",
        },
        {
          title: "Минимизация юридических рисков",
          text: "Документы и решения проверяются так, чтобы снизить вероятность ошибок, отказов и потерь.",
        },
        {
          title: "Опыт работы с иностранными клиентами",
          text: "Понимаю специфику задач экспатов, инвесторов и предпринимателей, которые работают в Румынии.",
        },
      ],
    },
    cta: {
      eyebrow: "Консультация",
      title: "Получите консультацию по вашему вопросу",
      button: "ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ",
    },
    footer: {
      navTitle: "Навигация",
      languageTitle: "Языки",
      address: "București, România · Lun–Vin 9:00–18:00",
      copyright: "© 2026 Pantelei Legal. Все права защищены.",
    },
    aboutPage: {
      eyebrow: "Об Алёне Пантелей",
      title: "Юридическая поддержка, на которую можно опереться.",
      bio:
        "Меня зовут Алёна Пантелей — юрист и основатель PANTELEI LEGAL CONSULTING. Я помогаю предпринимателям и частным клиентам решать юридические вопросы в Румынии: от регистрации бизнеса до получения гражданства и сопровождения сделок. Моя задача — не просто оформить документы, а защитить ваши интересы и избежать рисков. Каждый проект ведётся с вниманием к деталям и полной ответственностью за результат.",
      educationTitle: "Образование и развитие",
      education: [
        "Юридическое образование и постоянное углубление в гражданское, коммерческое и налоговое право.",
        "Регулярное обновление знаний по судебной практике и актуальным законодательным изменениям.",
      ],
      valuesTitle: "Рабочие принципы",
      values: ["Индивидуальный подход", "Прозрачные условия", "Сопровождение на всех этапах"],
      experienceTitle: "Практический опыт",
      experience:
        "Накопленный опыт включает сопровождение частных клиентов, предпринимателей и компаний по вопросам, где требовались и точность формулировок, и процессуальная твёрдость.",
    },
    faqPage: {
      eyebrow: "Частые вопросы",
      title: "Краткие ответы на вопросы, которые возникают до первого обращения.",
      items: [
        {
          q: "Как проходит первая консультация?",
          a: "После установления контакта кратко уточняются контекст, нужные документы и реалистичная цель разговора.",
        },
        {
          q: "Возможна ли онлайн-консультация?",
          a: "Да, если характер вопроса позволяет провести эффективный анализ дистанционно.",
        },
        {
          q: "Какие документы стоит подготовить?",
          a: "Релевантные документы по ситуации: договоры, переписка, уведомления, налоговые акты или решения, в зависимости от вопроса.",
        },
        {
          q: "Работаете ли вы в срочном режиме?",
          a: "Для чувствительных ко времени ситуаций можно согласовать ускоренный график при наличии возможности и разумном объёме.",
        },
      ],
    },
    contactPage: {
      eyebrow: "Контакты",
      title: "Опишите ситуацию коротко. Стратегия начинается с точной формулировки.",
      description:
        "Для первичной оценки полезны несколько ясных опорных точек: характер ситуации, актуальный срок и уже имеющиеся документы.",
      form: {
        name: "Имя",
        email: "Email",
        phone: "Телефон",
        subject: "Тема",
        message: "Сообщение",
        submit: "ОТПРАВИТЬ СООБЩЕНИЕ",
      },
      blockTitle: "Контактные данные",
    },
    blogPage: {
      eyebrow: "Юридический журнал",
      title: "Короткие статьи, написанные с той же дисциплиной жеста, что и практическая работа.",
      categories: {
        civil: "Гражданское",
        comercial: "Коммерческое",
        fiscal: "Налоговое",
      },
    },
    notFound: {
      eyebrow: "404",
      title: "Запрошенная страница не найдена.",
      description: "Адрес может быть неполным, либо материал был перенесён в другой раздел.",
      cta: "НА ГЛАВНУЮ",
    },
    practicePage: {
      eyebrow: "Услуга",
      servicesTitle: "Что входит в услугу",
      processTitle: "Как проходит работа",
      faqTitle: "Часто задаваемые вопросы",
      cta: "КОНСУЛЬТАЦИЯ",
    },
  },
} as const;
