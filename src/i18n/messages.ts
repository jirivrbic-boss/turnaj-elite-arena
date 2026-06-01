import type { Locale } from "./types";

export type Messages = {
  meta: { title: string; description: string };
  nav: {
    info: string;
    rules: string;
    hardware: string;
    register: string;
    contact: string;
    cta: string;
    language: string;
  };
  hero: {
    videoTitle: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    cta: string;
  };
  info: {
    label: string;
    title: string;
    description: string;
    when: { label: string; value: string };
    where: { label: string; value: string; sub: string };
    fee: { label: string; value: string; sub: string };
    prize: { label: string; value: string; sub: string };
    format: { label: string; value: string };
    rules: { label: string };
    rulesLink: { title: string; sub: string; faceitNote: string };
    tournamentLink: { label: string; faceitLabel: string };
    arenaAlt: string;
  };
  rules: {
    label: string;
    title: string;
    description: string;
    items: string[];
  };
  hardware: {
    label: string;
    title: string;
    description: string;
    items: { title: string; description: string; alt: string }[];
  };
  registration: {
    label: string;
    title: string;
    description: string;
    fullName: string;
    email: string;
    faceit: string;
    fullNamePlaceholder: string;
    emailPlaceholder: string;
    faceitPlaceholder: string;
    submit: string;
    submitting: string;
    error: string;
    modal: {
      loadingTitle: string;
      loadingHint: string;
      successTitle: string;
      successLead: string;
      successBold: string;
      successTail: string;
      steps: string[];
      close: string;
    };
  };
  contact: {
    label: string;
    title: string;
    description: string;
    phone: string;
    email: string;
    phoneHint: string;
    emailHint: string;
  };
  footer: {
    tagline: string;
    operator: string;
  };
  cookie: {
    ariaLabel: string;
    text: string;
    contact: string;
    accept: string;
  };
};

const cs: Messages = {
  meta: {
    title: "CS2 1vs1 Turnaj | ELITE GAME ARENA Karlovy Vary",
    description:
      "CS2 1vs1 turnaj v Karlových Varech. 19. 6. 2026 v ELITE GAME ARENA. Přihlas se přes FACEIT.",
  },
  nav: {
    info: "Info",
    rules: "Pravidla",
    hardware: "Vybavení",
    register: "Přihláška",
    contact: "Kontakt",
    cta: "Přihlásit se",
    language: "Jazyk",
  },
  hero: {
    videoTitle: "CS2 turnaj pozadí",
    titleLine1: "Turnaj v CS2",
    titleLine2: "Elite Arena",
    subtitle: "LAN turnaj 1vs1 v CS2 se vstupem 200 Kč a možnou výhrou 1000 Kč",
    cta: "Přihlásit se do turnaje",
  },
  info: {
    label: "Turnaj",
    title: "Základní informace",
    description: "Vše, co potřebuješ vědět před startem duelu.",
    when: { label: "Kdy", value: "19. 6. 2026 od 18:00" },
    where: {
      label: "Kde",
      value: "ELITE GAME ARENA",
      sub: "Hybešova 18, 360 05 Karlovy Vary",
    },
    fee: {
      label: "Vstupné",
      value: "200 Kč na osobu",
      sub: "Platí se až na místě",
    },
    prize: {
      label: "Výhra",
      value: "1000 Kč pro vítěze",
      sub: "Vstup 200 Kč vs výhra 1000 Kč — naprosto fair",
    },
    format: { label: "Formát", value: "CS2 1vs1 přes FACEIT" },
    rules: { label: "Pravidla" },
    rulesLink: {
      title: "Pravidla turnaje",
      sub: "Kompletní přehled níže na stránce ↓",
      faceitNote:
        "Kromě toho platí i oficiální pravidla FACEIT pro zápasy na platformě.",
    },
    tournamentLink: {
      label: "Odkaz na turnaj",
      faceitLabel: "Elite Arena 1vs1 na FACEIT",
    },
    arenaAlt: "ELITE GAME ARENA — herní aréna v Karlových Varech",
  },
  rules: {
    label: "Fair play",
    title: "Pravidla turnaje",
    description: "1vs1 formát — dodržuj pravidla, jinak diskvalifikace.",
    items: [
      "K účasti je nezbytný PRIME účet.",
      "Hráči nesmí mít na svém profilu žádný VAC, game či trade ban.",
      "Přísný zákaz smurfingu.",
      "Zákaz využívání chyb v mapě a provádění pixel-walků.",
      "Všechny formy programů typu SKINCHANGER jsou přísně zakázány.",
      "Během celého turnaje je nezbytné dodržovat pravidla fair play.",
    ],
  },
  hardware: {
    label: "Setup",
    title: "Vybavení",
    description: "Profesionální gear připravený na CS2 1vs1.",
    items: [
      {
        title: "Výkonné herní stanice",
        description:
          "Každá stanice zvládne i ty nejnáročnější hry bez kompromisů. AMD Ryzen 5 5800X, RTX 5070, DDR5 RAM, Full HD Res., vodní chlazení. Plynulý výkon bez lagů.",
        alt: "Herní PC stanice v Elite Arena",
      },
      {
        title: "Obraz, který tě vtáhne",
        description:
          '27" monitory, QHD rozlišení, až 280 Hz. Maximální plynulost a rychlá odezva.',
        alt: "Herní monitor v Elite Arena",
      },
      {
        title: "Komfort bez kompromisů",
        description:
          "Ergonomické židle, optimalizované setupy. Hraj hodiny bez nepohodlí.",
        alt: "Ergonomická herní židle v Elite Arena",
      },
    ],
  },
  registration: {
    label: "Registrace",
    title: "Přihláška do turnaje",
    description:
      "Vyplň formulář — po odeslání ti ukážeme, jak se přihlásit do turnaje na FACEIT.",
    fullName: "Jméno a příjmení *",
    email: "E-mail *",
    faceit: "FACEIT nickname * (povinné)",
    fullNamePlaceholder: "Jan Novák",
    emailPlaceholder: "jan@email.cz",
    faceitPlaceholder: "tvuj_faceit_nick",
    submit: "Odeslat přihlášku",
    submitting: "Odesílám…",
    error: "Odeslání se nezdařilo. Zkontroluj připojení a zkus to znovu.",
    modal: {
      loadingTitle: "Odesílám přihlášku…",
      loadingHint: "Chvilku strpení.",
      successTitle: "Přihláška odeslána",
      successLead: "Ještě jeden krok —",
      successBold: "přihlas se do turnaje na FACEIT",
      successTail: ", jinak tě neuvidíme v soupisce.",
      steps: [
        "Přihláška na webu je uložená — hotovo.",
        "Klikni na tlačítko níže a otevři stránku turnaje na FACEIT.",
        "Přihlas se ke svému FACEIT účtu (pokud ještě nejsi).",
        "Na stránce turnaje klikni na Join / Přihlásit se do turnaje.",
        "Zkontroluj, že používáš stejný FACEIT nick jako ve formuláři.",
      ],
      close: "Zavřít",
    },
  },
  contact: {
    label: "Máš dotaz?",
    title: "Kontakt",
    description: "Ozvi se — rádi ti poradíme s turnajem nebo registrací.",
    phone: "Telefon",
    email: "E-mail",
    phoneHint: "Klikni a zavolej",
    emailHint: "Klikni a napiš nám",
  },
  footer: {
    tagline: "CS2 1vs1 Turnaj · Karlovy Vary",
    operator: "Provozovatel: SL Fortis s.r.o. · IČO: 180 20 984",
  },
  cookie: {
    ariaLabel: "Souhlas s cookies",
    text: "Tento web používá cookies nezbytné pro jeho správné fungování a uložení vašeho souhlasu. Více informací vám poskytneme na vyžádání přes",
    contact: "kontakt",
    accept: "Souhlasím",
  },
};

const en: Messages = {
  meta: {
    title: "CS2 1vs1 Tournament | ELITE GAME ARENA Karlovy Vary",
    description:
      "CS2 1vs1 tournament in Karlovy Vary. June 19, 2026 at ELITE GAME ARENA. Register via FACEIT.",
  },
  nav: {
    info: "Info",
    rules: "Rules",
    hardware: "Gear",
    register: "Sign up",
    contact: "Contact",
    cta: "Sign up",
    language: "Language",
  },
  hero: {
    videoTitle: "CS2 tournament background",
    titleLine1: "CS2 Tournament",
    titleLine2: "Elite Arena",
    subtitle: "LAN 1vs1 CS2 tournament — 200 CZK entry, up to 1000 CZK prize",
    cta: "Sign up for the tournament",
  },
  info: {
    label: "Tournament",
    title: "Key information",
    description: "Everything you need to know before the duel starts.",
    when: { label: "When", value: "June 19, 2026 from 6:00 PM" },
    where: {
      label: "Where",
      value: "ELITE GAME ARENA",
      sub: "Hybešova 18, 360 05 Karlovy Vary, Czech Republic",
    },
    fee: {
      label: "Entry fee",
      value: "200 CZK per person",
      sub: "Pay on site",
    },
    prize: {
      label: "Prize",
      value: "1000 CZK for the winner",
      sub: "200 CZK entry vs 1000 CZK prize — totally fair",
    },
    format: { label: "Format", value: "CS2 1vs1 via FACEIT" },
    rules: { label: "Rules" },
    rulesLink: {
      title: "Tournament rules",
      sub: "Full overview below on this page ↓",
      faceitNote:
        "Official FACEIT match rules on the platform also apply.",
    },
    tournamentLink: {
      label: "Tournament link",
      faceitLabel: "Elite Arena 1vs1 on FACEIT",
    },
    arenaAlt: "ELITE GAME ARENA — gaming arena in Karlovy Vary",
  },
  rules: {
    label: "Fair play",
    title: "Tournament rules",
    description: "1vs1 format — follow the rules or face disqualification.",
    items: [
      "A PRIME account is required to participate.",
      "Players must not have any VAC, game, or trade ban on their profile.",
      "Smurfing is strictly prohibited.",
      "Exploiting map bugs and pixel-walking are forbidden.",
      "All forms of SKINCHANGER software are strictly banned.",
      "Fair play rules must be followed throughout the entire tournament.",
    ],
  },
  hardware: {
    label: "Setup",
    title: "Equipment",
    description: "Pro-grade gear ready for CS2 1vs1.",
    items: [
      {
        title: "High-performance gaming PCs",
        description:
          "Every station handles the most demanding games. AMD Ryzen 5 5800X, RTX 5070, DDR5 RAM, Full HD, liquid cooling. Smooth performance, no lag.",
        alt: "Gaming PC station at Elite Arena",
      },
      {
        title: "Immersive displays",
        description:
          '27" monitors, QHD resolution, up to 280 Hz. Maximum smoothness and fast response.',
        alt: "Gaming monitor at Elite Arena",
      },
      {
        title: "Comfort without compromise",
        description:
          "Ergonomic chairs and optimized setups. Play for hours in comfort.",
        alt: "Ergonomic gaming chair at Elite Arena",
      },
    ],
  },
  registration: {
    label: "Registration",
    title: "Tournament sign-up",
    description:
      "Fill in the form — after submitting we will show you how to join the tournament on FACEIT.",
    fullName: "Full name *",
    email: "E-mail *",
    faceit: "FACEIT nickname * (required)",
    fullNamePlaceholder: "John Doe",
    emailPlaceholder: "john@email.com",
    faceitPlaceholder: "your_faceit_nick",
    submit: "Submit application",
    submitting: "Sending…",
    error: "Submission failed. Check your connection and try again.",
    modal: {
      loadingTitle: "Submitting your application…",
      loadingHint: "Just a moment.",
      successTitle: "Application sent",
      successLead: "One more step —",
      successBold: "join the tournament on FACEIT",
      successTail: ", otherwise you will not appear on the roster.",
      steps: [
        "Your application on this site is saved — done.",
        "Click the button below to open the tournament page on FACEIT.",
        "Log in to your FACEIT account (if you are not already).",
        "On the tournament page click Join / Register for the tournament.",
        "Make sure you use the same FACEIT nickname as in the form.",
      ],
      close: "Close",
    },
  },
  contact: {
    label: "Questions?",
    title: "Contact",
    description: "Get in touch — we are happy to help with the tournament or registration.",
    phone: "Phone",
    email: "E-mail",
    phoneHint: "Tap to call",
    emailHint: "Tap to write us",
  },
  footer: {
    tagline: "CS2 1vs1 Tournament · Karlovy Vary",
    operator: "Operator: SL Fortis s.r.o. · Company ID: 180 20 984",
  },
  cookie: {
    ariaLabel: "Cookie consent",
    text: "This site uses cookies essential for proper operation and storing your consent. For more information, contact us via",
    contact: "contact",
    accept: "I agree",
  },
};

const uk: Messages = {
  meta: {
    title: "Турнір CS2 1vs1 | ELITE GAME ARENA Карлові Вари",
    description:
      "Турнір CS2 1vs1 у Карлових Варах. 19 червня 2026 в ELITE GAME ARENA. Реєстрація через FACEIT.",
  },
  nav: {
    info: "Інфо",
    rules: "Правила",
    hardware: "Обладнання",
    register: "Реєстрація",
    contact: "Контакт",
    cta: "Зареєструватися",
    language: "Мова",
  },
  hero: {
    videoTitle: "Фон турніру CS2",
    titleLine1: "Турнір CS2",
    titleLine2: "Elite Arena",
    subtitle: "LAN турнір 1vs1 у CS2 — вхід 200 Kč, можливий приз 1000 Kč",
    cta: "Зареєструватися на турнір",
  },
  info: {
    label: "Турнір",
    title: "Основна інформація",
    description: "Усе, що потрібно знати перед початком дуелі.",
    when: { label: "Коли", value: "19 червня 2026 о 18:00" },
    where: {
      label: "Де",
      value: "ELITE GAME ARENA",
      sub: "Hybešova 18, 360 05 Карлові Вари, Чехія",
    },
    fee: {
      label: "Вхід",
      value: "200 Kč з особи",
      sub: "Оплата на місці",
    },
    prize: {
      label: "Приз",
      value: "1000 Kč переможцю",
      sub: "Вхід 200 Kč проти призу 1000 Kč — абсолютно чесно",
    },
    format: { label: "Формат", value: "CS2 1vs1 через FACEIT" },
    rules: { label: "Правила" },
    rulesLink: {
      title: "Правила турніру",
      sub: "Повний огляд нижче на сторінці ↓",
      faceitNote:
        "Також діють офіційні правила FACEIT для матчів на платформі.",
    },
    tournamentLink: {
      label: "Посилання на турнір",
      faceitLabel: "Elite Arena 1vs1 на FACEIT",
    },
    arenaAlt: "ELITE GAME ARENA — ігрова арена в Карлових Варах",
  },
  rules: {
    label: "Fair play",
    title: "Правила турніру",
    description: "Формат 1vs1 — дотримуйся правил, інакше дискваліфікація.",
    items: [
      "Для участі потрібен PRIME акаунт.",
      "У гравців не повинно бути VAC, game або trade ban у профілі.",
      "Смурфінг суворо заборонений.",
      "Заборонено використовувати баги карти та pixel-walk.",
      "Усі види програм типу SKINCHANGER суворо заборонені.",
      "Протягом усього турніру обовʼязково дотримуватися fair play.",
    ],
  },
  hardware: {
    label: "Setup",
    title: "Обладнання",
    description: "Професійне обладнання для CS2 1vs1.",
    items: [
      {
        title: "Потужні ігрові станції",
        description:
          "Кожна станція тягне найвимогливіші ігри. AMD Ryzen 5 5800X, RTX 5070, DDR5 RAM, Full HD, рідинне охолодження. Плавна гра без лагів.",
        alt: "Ігровий ПК у Elite Arena",
      },
      {
        title: "Зображення, що занурює",
        description:
          'Монітори 27", QHD, до 280 Гц. Максимальна плавність і швидка відповідь.',
        alt: "Ігровий монітор у Elite Arena",
      },
      {
        title: "Комфорт без компромісів",
        description:
          "Ергономічні крісла, оптимізовані сетапи. Грай годинами без дискомфорту.",
        alt: "Ергономічне крісло у Elite Arena",
      },
    ],
  },
  registration: {
    label: "Реєстрація",
    title: "Заявка на турнір",
    description:
      "Заповни форму — після відправки покажемо, як приєднатися до турніру на FACEIT.",
    fullName: "Імʼя та прізвище *",
    email: "E-mail *",
    faceit: "FACEIT nickname * (обовʼязково)",
    fullNamePlaceholder: "Іван Коваленко",
    emailPlaceholder: "ivan@email.com",
    faceitPlaceholder: "tvij_faceit_nick",
    submit: "Надіслати заявку",
    submitting: "Надсилаю…",
    error: "Не вдалося надіслати. Перевір зʼєднання та спробуй знову.",
    modal: {
      loadingTitle: "Надсилаю заявку…",
      loadingHint: "Зачекай хвилинку.",
      successTitle: "Заявку надіслано",
      successLead: "Ще один крок —",
      successBold: "зареєструйся на турнір на FACEIT",
      successTail: ", інакше тебе не буде в списку.",
      steps: [
        "Заявку на сайті збережено — готово.",
        "Натисни кнопку нижче та відкрий сторінку турніру на FACEIT.",
        "Увійди в свій акаунт FACEIT (якщо ще не увійшов).",
        "На сторінці турніру натисни Join / Зареєструватися.",
        "Переконайся, що FACEIT nick такий самий, як у формі.",
      ],
      close: "Закрити",
    },
  },
  contact: {
    label: "Є питання?",
    title: "Контакт",
    description: "Звʼяжись з нами — допоможемо з турніром або реєстрацією.",
    phone: "Телефон",
    email: "E-mail",
    phoneHint: "Натисни, щоб зателефонувати",
    emailHint: "Натисни, щоб написати",
  },
  footer: {
    tagline: "Турнір CS2 1vs1 · Карлові Вари",
    operator: "Оператор: SL Fortis s.r.o. · IČO: 180 20 984",
  },
  cookie: {
    ariaLabel: "Згода на cookies",
    text: "Цей сайт використовує cookies, необхідні для коректної роботи та збереження вашої згоди. Додаткову інформацію надамо за запитом через",
    contact: "контакт",
    accept: "Погоджуюсь",
  },
};

export const messages: Record<Locale, Messages> = { cs, en, uk };

export function getMessages(locale: Locale): Messages {
  return messages[locale] ?? messages.cs;
}
