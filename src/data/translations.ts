import type { Locale } from "../lib/types";

export const translations = {
  ro: {
    siteTitle: "Pantelei Legal",
    nav: {
      home: "Acasă",
      about: "Despre Aliona",
      services: "Servicii",
      blog: "Blog",
      faq: "FAQ",
      contact: "Contact",
      servicesEyebrow: "Arii de practică",
      servicesPromptTitle: "Nu ați găsit exact ceea ce căutați?",
      servicesPromptText: "Scrieți direct. Un context clar trimis la timp ajută mai mult decât o presupunere grăbită.",
      servicesPromptCta: "MERGEȚI LA CONTACT",
      latestPosts: "Ultimele articole",
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
      eyebrow: "Avocat · București",
      titleTop: "Suport juridic în România",
      titleBottom: "pentru business și imigrare.",
      description:
        "Deschiderea companiilor, permise de ședere, cetățenie și asistență pentru tranzacții, fără erori, întârzieri și riscuri inutile.",
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
      title: "Consiliere pentru situații care nu admit improvizație.",
      cards: [
        {
          roman: "I",
          title: "Persoane private",
          items: ["Patrimoniu și obligații", "Dreptul familiei", "Tranzacții și conflicte civile"],
        },
        {
          roman: "II",
          title: "Antreprenori",
          items: ["Contracte comerciale", "Negociere și risc", "Suport pentru decizii rapide"],
        },
        {
          roman: "III",
          title: "Companii",
          items: ["Procese interne", "Poziții fiscale", "Litigii și conformare"],
        },
      ],
    },
    servicesHome: {
      eyebrow: "Arii de practică",
      title: "Un tabel de materii pentru probleme juridice tratate cu precizie.",
    },
    aboutSnippet: {
      eyebrow: "Despre Aliona",
      title: "O practică construită pe disciplină profesională și atenție pentru detaliul care schimbă dosarul.",
      text:
        "Aliona Pantelei lucrează cu o combinație rară de structură, discreție și claritate în explicație. Fiecare mandat începe cu o evaluare sobru formulată și continuă doar atunci când strategia are sens juridic și practic.",
      cta: "MAI MULT DESPRE ALIONA",
    },
    whyUs: {
      eyebrow: "De ce Pantelei Legal",
      title: "Avantajele unei abordări fără gesturi inutile.",
      items: [
        {
          title: "Claritate fără teatralitate",
          text: "Opțiunile sunt explicate direct, cu riscuri și consecințe reale.",
        },
        {
          title: "Discreție ca reflex profesional",
          text: "Informațiile sensibile sunt tratate cu rezervă și ordine.",
        },
        {
          title: "Strategie adaptată dosarului",
          text: "Nu se aplică formule prefabricate acolo unde contextul cere finețe.",
        },
        {
          title: "Ritm constant",
          text: "Comunicarea și execuția rămân precise, fără agitație inutilă.",
        },
      ],
    },
    cta: {
      eyebrow: "Contact direct",
      title: "Atunci când situația cere o opinie clară, primul pas trebuie să fie unul bine formulat.",
      button: "PROGRAMEAZĂ O DISCUȚIE",
    },
    footer: {
      navTitle: "Navigație",
      languageTitle: "Limbi",
      address: "București, România · Lun–Vin 9:00–18:00",
      copyright: "© 2026 Pantelei Legal. Toate drepturile rezervate.",
    },
    aboutPage: {
      eyebrow: "Despre Aliona Pantelei",
      title: "O voce juridică sigură, formată în disciplină și orientată spre rezultat.",
      bio:
        "Practica Pantelei Legal a fost construită pentru clienți care caută nu doar un răspuns, ci o poziție coerentă. Tonul este sobru, iar metoda este una de lucru atentă: documente citite integral, riscuri delimitate limpede, strategie formulată fără exces.",
      educationTitle: "Educație și formare",
      education: [
        "Studii juridice și formare continuă în drept civil, comercial și fiscal.",
        "Actualizare constantă privind practica instanțelor și modificările legislative relevante.",
      ],
      valuesTitle: "Valori de lucru",
      values: ["Rigoare", "Discreție", "Claritate", "Respect pentru timpul clientului"],
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
      eyebrow: "Arie de practică",
      servicesTitle: "Ce include",
      processTitle: "Mod de lucru",
      faqTitle: "Întrebări din practică",
      cta: "DISCUTAȚI ACEST SUBIECT",
    },
  },
  ru: {
    siteTitle: "Pantelei Legal",
    nav: {
      home: "Главная",
      about: "Об Алёне",
      services: "Практики",
      blog: "Блог",
      faq: "FAQ",
      contact: "Контакты",
      servicesEyebrow: "Практики",
      servicesPromptTitle: "Не нашли именно то, что искали?",
      servicesPromptText: "Напишите напрямую. Кратко изложенный контекст полезнее, чем поспешное предположение.",
      servicesPromptCta: "ПЕРЕЙТИ К КОНТАКТАМ",
      latestPosts: "Последние статьи",
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
      eyebrow: "Адвокат · Бухарест",
      titleTop: "Юридическая поддержка в Румынии",
      titleBottom: "для бизнеса и иммиграции.",
      description:
        "Открытие компаний, ВНЖ, гражданство и сопровождение сделок, без ошибок, задержек и рисков.",
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
      title: "Сопровождение для ситуаций, которые не допускают импровизации.",
      cards: [
        {
          roman: "I",
          title: "Частные клиенты",
          items: ["Имущество и обязательства", "Семейное право", "Сделки и гражданские споры"],
        },
        {
          roman: "II",
          title: "Предприниматели",
          items: ["Коммерческие договоры", "Переговоры и риски", "Поддержка быстрых решений"],
        },
        {
          roman: "III",
          title: "Компании",
          items: ["Внутренние процессы", "Налоговые позиции", "Споры и комплаенс"],
        },
      ],
    },
    servicesHome: {
      eyebrow: "Практики",
      title: "Оглавление для юридических задач, требующих точности.",
    },
    aboutSnippet: {
      eyebrow: "Об Алёне",
      title: "Практика, построенная на профессиональной дисциплине и внимании к детали, которая меняет исход дела.",
      text:
        "Алёна Пантелей сочетает структуру, конфиденциальность и ясность объяснения. Каждый мандат начинается со сдержанной оценки и продолжается только тогда, когда стратегия обоснована юридически и практически.",
      cta: "ПОДРОБНЕЕ ОБ АЛИОНЕ",
    },
    whyUs: {
      eyebrow: "Почему Pantelei Legal",
      title: "Преимущества подхода без лишних жестов.",
      items: [
        {
          title: "Ясность без театральности",
          text: "Варианты объясняются прямо, с реальными рисками и последствиями.",
        },
        {
          title: "Конфиденциальность как профессиональный рефлекс",
          text: "Чувствительная информация ведётся сдержанно и упорядоченно.",
        },
        {
          title: "Стратегия под конкретную ситуацию",
          text: "Готовые шаблоны не подменяют тонкую работу там, где контекст сложнее.",
        },
        {
          title: "Ровный рабочий ритм",
          text: "Коммуникация и исполнение остаются точными, без лишней суеты.",
        },
      ],
    },
    cta: {
      eyebrow: "Прямой контакт",
      title: "Когда ситуация требует ясного мнения, первый шаг должен быть сформулирован точно.",
      button: "НАЗНАЧИТЬ ОБСУЖДЕНИЕ",
    },
    footer: {
      navTitle: "Навигация",
      languageTitle: "Языки",
      address: "București, România · Lun–Vin 9:00–18:00",
      copyright: "© 2026 Pantelei Legal. Все права защищены.",
    },
    aboutPage: {
      eyebrow: "Об Алёне Пантелей",
      title: "Уверенный юридический голос, сформированный дисциплиной и ориентированный на результат.",
      bio:
        "Практика Pantelei Legal создана для клиентов, которым нужен не просто ответ, а цельная правовая позиция. Тон остаётся сдержанным, а метод опирается на внимательную работу: документы читаются целиком, риски очерчиваются ясно, стратегия формулируется без излишнего эффекта.",
      educationTitle: "Образование и развитие",
      education: [
        "Юридическое образование и постоянное углубление в гражданское, коммерческое и налоговое право.",
        "Регулярное обновление знаний по судебной практике и актуальным законодательным изменениям.",
      ],
      valuesTitle: "Рабочие принципы",
      values: ["Строгость", "Конфиденциальность", "Ясность", "Уважение ко времени клиента"],
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
      eyebrow: "Практика",
      servicesTitle: "Что входит",
      processTitle: "Как строится работа",
      faqTitle: "Практические вопросы",
      cta: "ОБСУДИТЬ ЭТУ ТЕМУ",
    },
  },
} as const;
