/**
 * Per-page SEO content for the three mandatory on-page sections (Autoriteit /
 * Verdieping / Conversie), rendered by <PageSeoSections />. Every route gets a
 * unique block so the added copy is distinct (no duplicate-content risk) and
 * each page reinforces its own primary keyword + the "betaalbaar én
 * professioneel" positioning around goedkopewebsite-latenmaken.nl.
 *
 * Prices used as proof points (vanaf €995 / €1.995 / €299 p/m …) mirror the
 * real tiers in constants/pricing.ts — never invent figures.
 */

export interface SeoPillar {
  readonly title: string;
  readonly description: string;
}

export interface SeoMiniFaq {
  readonly question: string;
  readonly answer: string;
}

export interface PageSeoContent {
  /** Sectie 1 — Autoriteit: expertise, proces, vertrouwen en waarde. */
  readonly authority: {
    readonly eyebrow: string;
    readonly title: string;
    readonly intro: string;
    readonly pillars: readonly SeoPillar[];
  };
  /** Sectie 2 — Verdieping: uitgebreide informatie rond de zoekintentie. */
  readonly deep: {
    readonly eyebrow: string;
    readonly title: string;
    readonly paragraphs: readonly string[];
    readonly points: readonly SeoPillar[];
  };
  /** Sectie 3 — Conversie: trust, beslissingshulp, optionele FAQ en CTA. */
  readonly conversion: {
    readonly eyebrow: string;
    readonly title: string;
    readonly intro: string;
    readonly benefits: readonly string[];
    readonly faq?: readonly SeoMiniFaq[];
    readonly ctaLabel: string;
    readonly ctaHref: string;
  };
}

const CTA_HREF = "#cta";

export const PAGE_SEO = {
  /* ─────────────────────────────  HOME  ───────────────────────────── */
  home: {
    authority: {
      eyebrow: "Waarom Sarte Global",
      title: "Een betaalbaar webdesignbureau dat werkt als een premium partner",
      intro:
        "Goedkoop hoeft niet amateuristisch te zijn. Sarte Global combineert scherpe tarieven met de werkwijze van een gevestigd bureau: één vast team, een heldere planning en websites die meetbaar presteren. Zo krijg je de prijs van een goedkope website met de kwaliteit van een professioneel bureau.",
      pillars: [
        {
          title: "Vaste, transparante prijzen",
          description:
            "Je weet vooraf exact wat je website kost. Een professionele site start vanaf €995, met een heldere offerte op maat en geen verborgen kosten achteraf.",
        },
        {
          title: "Senior team, geen tussenlagen",
          description:
            "Strategie, design en development zitten in één team. Korte lijnen houden de kosten laag en de kwaliteit hoog — jij hebt één vast aanspreekpunt.",
        },
        {
          title: "Snel online, binnen 2 weken",
          description:
            "Door bewezen technologie en een strak proces leveren we de meeste websites binnen twee weken op, zonder in te leveren op afwerking.",
        },
        {
          title: "Gebouwd om gevonden te worden",
          description:
            "Elke website krijgt een sterke technische SEO-basis met schema-markup en snelle laadtijden, zodat klanten je vinden vanaf dag één.",
        },
      ],
    },
    deep: {
      eyebrow: "Goedkope website laten maken",
      title: "Goedkoop én professioneel: hoe gaat dat samen?",
      paragraphs: [
        "Een goedkope website laten maken klinkt voor veel ondernemers als een compromis: lage prijs, lage kwaliteit. Bij Sarte Global is dat precies andersom. Betaalbaar betekent bij ons efficiënt: we werken met een vast, ervaren team en een herbruikbaar, modern fundament, waardoor we de uren — en dus de prijs — laag houden zonder af te dingen op design of techniek.",
        "Het verschil zit in transparantie. Je betaalt voor precies wat je nodig hebt: een scherpe one-pager vanaf €995, een complete zakelijke website met CMS, of een webshop die verkoopt. Geen dure strategie-uren die je niet gebruikt, geen functies die je nooit aanzet. Daardoor is een goedkope website van Sarte Global geen bezuiniging op kwaliteit, maar een slimme investering die zichzelf terugverdient in meer aanvragen en vertrouwen.",
      ],
      points: [
        {
          title: "Vanaf €995",
          description:
            "Een professionele one-page website met eigen huisstijl, mobielvriendelijk en met basis-SEO — een eerlijke instapprijs voor zzp'ers en starters.",
        },
        {
          title: "Geen verborgen kosten",
          description:
            "Hosting, koppelingen en meerwerk bespreken we vooraf. Je offerte is je prijs — duidelijk en zonder verrassingen.",
        },
        {
          title: "Schaalt met je mee",
          description:
            "Begin betaalbaar en breid later uit met extra pagina's, een webshop of landingspagina's wanneer je bedrijf groeit.",
        },
        {
          title: "Rendement boven prijs",
          description:
            "Een snelle, vindbare en overtuigende website levert meer op dan hij kost: meer leads, meer vertrouwen en lagere advertentiekosten.",
        },
      ],
    },
    conversion: {
      eyebrow: "Klaar om te starten",
      title: "Een betaalbare website die zichzelf terugverdient",
      intro:
        "Twijfel je of goedkoop en professioneel samengaan? Vraag een vrijblijvende offerte aan en ontdek wat een website van Sarte Global voor jouw bedrijf kan betekenen — helder geprijsd, snel opgeleverd en gebouwd om te groeien.",
      benefits: [
        "Professionele website al vanaf €995",
        "Vrijblijvende offerte op maat binnen 1 werkdag",
        "Eén vast aanspreekpunt van begin tot livegang",
        "Sterke SEO en topscores op Core Web Vitals",
        "Werkzaam voor ondernemers in heel Nederland",
      ],
      faq: [
        {
          question: "Hoe kan een professionele website zo betaalbaar zijn?",
          answer:
            "Doordat we met een vast team en een bewezen, modern fundament werken, houden we het aantal uren laag. Die efficiëntie geven we door in de prijs — zonder in te leveren op design, snelheid of SEO.",
        },
        {
          question: "Wat krijg ik voor €995?",
          answer:
            "Een professionele one-page website met een ontwerp in jouw huisstijl, mobielvriendelijk, met basis-SEO, snelle laadtijd en een contactformulier. Ideaal om snel en sterk online te staan.",
        },
        {
          question: "Zijn er verborgen kosten?",
          answer:
            "Nee. Je ontvangt vooraf een heldere offerte met een vaste scope. Eventuele hosting, koppelingen of meerwerk bespreken we open, zodat je nooit voor verrassingen komt te staan.",
        },
      ],
      ctaLabel: "Vraag een gratis offerte aan",
      ctaHref: CTA_HREF,
    },
  },

  /* ───────────────────────  WEBSITE LATEN MAKEN  ─────────────────────── */
  "website-laten-maken": {
    authority: {
      eyebrow: "Expertise",
      title: "Website laten maken zonder de hoge bureaukosten",
      intro:
        "Een website laten maken hoeft geen duizenden euro's aan strategie-uren te kosten. Sarte Global levert professionele websites tegen een eerlijke prijs, gebouwd door een senior team dat precies weet wat een mkb-website nodig heeft om te scoren.",
      pillars: [
        {
          title: "Maatwerk in jouw huisstijl",
          description:
            "Geen sjabloon van de plank, maar een ontwerp dat past bij jouw merk — strak, modern en herkenbaar, ook in het instappakket.",
        },
        {
          title: "Conversiegericht opgebouwd",
          description:
            "Heldere structuur en duidelijke call-to-actions die bezoekers naar contact of aankoop leiden. Een mooie site die ook echt klanten oplevert.",
        },
        {
          title: "Technische SEO standaard",
          description:
            "Nette code, schema-markup en snelle laadtijden zorgen dat je vindbaar bent in Google — inbegrepen, niet als dure meerprijs.",
        },
        {
          title: "Zelf eenvoudig beheren",
          description:
            "Met een gebruiksvriendelijk CMS pas je teksten en beelden zelf aan, zonder technische kennis of doorlopende kosten.",
        },
      ],
    },
    deep: {
      eyebrow: "Wat kost het",
      title: "Wat kost een website laten maken bij Sarte Global?",
      paragraphs: [
        "De prijs van een website laten maken hangt af van het aantal pagina's, de hoeveelheid maatwerk en eventuele koppelingen. Bij Sarte Global start een professionele website vanaf €995 voor een one-pager, terwijl een complete meerpagina-website met CMS en technische SEO rond de €1.995 ligt en uitgebreide maatwerktrajecten richting €3.495 gaan.",
        "Belangrijker dan de prijs is wat je ervoor terugkrijgt. Een website is je belangrijkste verkoopkanaal: hij werkt 24/7, wekt vertrouwen en zet bezoekers om in klanten. Een betaalbare website die snel laadt en goed gevonden wordt, verdient zich daardoor vrijwel altijd terug — in meer aanvragen en lagere advertentiekosten.",
      ],
      points: [
        {
          title: "Starter — vanaf €995",
          description:
            "Een professionele one-page website om snel en sterk online te staan. Ideaal voor zzp'ers en starters.",
        },
        {
          title: "Business — vanaf €1.995",
          description:
            "Een complete website tot 8 pagina's met CMS, conversiestructuur en technische SEO. De keuze voor het groeiende mkb.",
        },
        {
          title: "Premium — vanaf €3.495",
          description:
            "Onbeperkt maatwerk, animaties, meertaligheid en API-koppelingen voor organisaties die maximale impact willen.",
        },
        {
          title: "Altijd een offerte op maat",
          description:
            "Je betaalt nooit voor functies die je niet nodig hebt. Na een korte intake ontvang je binnen 24 uur een heldere prijs.",
        },
      ],
    },
    conversion: {
      eyebrow: "Beslis met vertrouwen",
      title: "Waarom ondernemers kiezen voor een betaalbare website van Sarte Global",
      intro:
        "Een goede website laten maken is een beslissing voor jaren. Daarom combineren we een scherpe prijs met kwaliteit die meegaat: een snel, vindbaar en schaalbaar fundament dat je niet over twee jaar alweer hoeft te vervangen.",
      benefits: [
        "Professionele website vanaf €995, offerte binnen 1 werkdag",
        "Senior designers en developers — geen juniors op jouw kosten",
        "SEO, snelheid en mobielvriendelijkheid standaard inbegrepen",
        "Live binnen 2 weken bij de meeste projecten",
        "Onderhoud en support beschikbaar vanaf €79 per maand",
      ],
      ctaLabel: "Vraag vrijblijvend een offerte aan",
      ctaHref: CTA_HREF,
    },
  },

  /* ──────────────────  WORDPRESS WEBSITE LATEN MAKEN  ────────────────── */
  "wordpress-website-laten-maken": {
    authority: {
      eyebrow: "WordPress specialisten",
      title: "WordPress website laten maken tegen een eerlijke prijs",
      intro:
        "WordPress is wereldwijd het populairste platform — en bij uitstek geschikt voor een betaalbare, professionele website. Sarte Global bouwt snelle, veilige WordPress-sites die je bovendien zelf eenvoudig kunt beheren, zonder dure doorlopende contracten.",
      pillars: [
        {
          title: "Zelf je content beheren",
          description:
            "Met het vertrouwde WordPress-dashboard pas je teksten, beelden en pagina's zelf aan — geen developer en geen extra kosten nodig.",
        },
        {
          title: "Snel en veilig gebouwd",
          description:
            "We werken met lichte thema's en alleen noodzakelijke plugins, voor een snelle, stabiele site die niet vastloopt op overbodige code.",
        },
        {
          title: "Schaalbaar met je bedrijf",
          description:
            "Van blog tot ledenportaal of webshop met WooCommerce: WordPress groeit moeiteloos mee wanneer jij dat wilt.",
        },
        {
          title: "Sterke SEO-basis",
          description:
            "Nette structuur, schema-markup en snelle laadtijden, zodat je WordPress-website vanaf dag één goed scoort in Google.",
        },
      ],
    },
    deep: {
      eyebrow: "WordPress of maatwerk",
      title: "Waarom WordPress vaak de voordeligste keuze is",
      paragraphs: [
        "WordPress is populair om een goede reden: het is flexibel, breed inzetbaar en je vindt er talloze functies voor. Voor de meeste ondernemers is het daardoor de voordeligste route naar een professionele website die je daarna zelf kunt onderhouden. Je bent niet afhankelijk van één bureau en houdt volledige controle over je content.",
        "Sarte Global bouwt WordPress-websites die zich onderscheiden van de standaard: geen trage, volgepropte themasites, maar een schone opbouw met focus op snelheid, veiligheid en vindbaarheid. Zo combineer je de lage kosten en het gebruiksgemak van WordPress met de afwerking van een professioneel webdesignbureau.",
      ],
      points: [
        {
          title: "Lagere bouwkosten",
          description:
            "Door de rijke basis van WordPress is er minder maatwerk nodig, wat de prijs van je website drukt.",
        },
        {
          title: "Geen vendor lock-in",
          description:
            "Je site draait op open software die je overal kunt hosten — je zit nergens aan vast.",
        },
        {
          title: "Eindeloos uitbreidbaar",
          description:
            "Voeg later een webshop, meertaligheid of boekingssysteem toe zonder opnieuw te beginnen.",
        },
        {
          title: "Eigen beheer, lage TCO",
          description:
            "Doordat je zelf content beheert, blijven de doorlopende kosten laag — ideaal voor het mkb.",
        },
      ],
    },
    conversion: {
      eyebrow: "Maak de keuze",
      title: "Een betaalbare WordPress-website die je zelf in de hand houdt",
      intro:
        "Wil je een professionele website die je daarna zelf eenvoudig kunt aanpassen, zonder steeds te hoeven betalen voor kleine wijzigingen? Dan is WordPress vaak de slimste en voordeligste keuze. Wij bouwen hem snel, veilig en goed vindbaar.",
      benefits: [
        "Professionele WordPress-website voor een scherpe prijs",
        "Zelf teksten en beelden beheren, zonder extra kosten",
        "Snelle, veilige opbouw zonder overbodige plugins",
        "Eenvoudig uit te breiden met WooCommerce of meertaligheid",
        "Optioneel onderhoud vanaf €79 per maand",
      ],
      ctaLabel: "Vraag een WordPress-offerte aan",
      ctaHref: CTA_HREF,
    },
  },

  /* ────────────────────  NEXTJS WEBSITE LATEN MAKEN  ─────────────────── */
  "nextjs-website-laten-maken": {
    authority: {
      eyebrow: "Moderne techniek",
      title: "Next.js website laten maken: topprestatie voor een eerlijke prijs",
      intro:
        "Next.js is de technologie achter de snelste websites ter wereld. Sarte Global zet die premium techniek in voor ondernemers in Nederland — tegen een prijs die betaalbaar blijft, doordat we efficiënt werken met herbruikbare, moderne bouwstenen.",
      pillars: [
        {
          title: "Razendsnelle laadtijden",
          description:
            "Server-side rendering en slimme caching zorgen voor laadtijden onder de seconde en topscores op Core Web Vitals.",
        },
        {
          title: "Voorsprong in Google",
          description:
            "Snelheid en schone, gestructureerde code geven je een meetbare SEO-voorsprong op tragere concurrenten.",
        },
        {
          title: "Veilig en onderhoudsarm",
          description:
            "Geen kwetsbare plugins of verouderde software: een Next.js-site is veiliger en vraagt minder onderhoud.",
        },
        {
          title: "Klaar voor de toekomst",
          description:
            "Een schaalbare architectuur die moeiteloos meegroeit met meer pagina's, functies of een webshop.",
        },
      ],
    },
    deep: {
      eyebrow: "Waarom Next.js",
      title: "Wanneer is een Next.js website de slimme investering?",
      paragraphs: [
        "Next.js (gebouwd op React) levert websites die opvallend sneller, veiliger en stabieler zijn dan een doorsnee themasite. Voor ondernemers die hun website serieus als groeikanaal inzetten, betaalt die snelheid zich direct terug: snellere sites converteren beter, ranken hoger en houden bezoekers langer vast.",
        "Toch hoeft die topkwaliteit niet onbetaalbaar te zijn. Doordat Sarte Global werkt met een beproefd Next.js-fundament en herbruikbare componenten, bouwen we snelle maatwerksites efficiënt. Je krijgt de prestaties van een high-end platform tegen een prijs die voor het mkb haalbaar blijft.",
      ],
      points: [
        {
          title: "Maximale snelheid",
          description:
            "Perfecte PageSpeed-scores die zowel je bezoekers als Google waarderen.",
        },
        {
          title: "Minder onderhoud",
          description:
            "Geen wekelijkse plugin-updates of beveiligingslekken — dat scheelt op de lange termijn kosten.",
        },
        {
          title: "Schaalbaar fundament",
          description:
            "Van marketingsite tot complexe webapp: dezelfde basis groeit met je mee.",
        },
        {
          title: "Sterke technische SEO",
          description:
            "Volledige controle over metadata, structured data en rendering voor optimale vindbaarheid.",
        },
      ],
    },
    conversion: {
      eyebrow: "Kies voor snelheid",
      title: "Premium prestaties, betaalbaar geprijsd",
      intro:
        "Wil je een website die niet alleen mooi is, maar ook meetbaar sneller en veiliger dan die van je concurrenten? Met Next.js krijg je topprestaties zonder het prijskaartje van een groot bureau.",
      benefits: [
        "Laadtijden onder de seconde en topscores op Core Web Vitals",
        "Veiliger en onderhoudsarmer dan een themasite",
        "Een meetbare SEO-voorsprong door snelheid en schone code",
        "Efficiënt gebouwd, dus betaalbaar voor het mkb",
        "Een fundament dat met je bedrijf meegroeit",
      ],
      ctaLabel: "Bespreek jouw Next.js-project",
      ctaHref: CTA_HREF,
    },
  },

  /* ───────────────────────  WEBSHOP LATEN MAKEN  ─────────────────────── */
  "webshop-laten-maken": {
    authority: {
      eyebrow: "E-commerce expertise",
      title: "Webshop laten maken die verkoopt, voor een eerlijke prijs",
      intro:
        "Een webshop laten maken is een investering die zich moet terugverdienen. Sarte Global bouwt snelle, conversiegerichte webshops met alle Nederlandse betaalmethoden — betaalbaar geprijsd vanaf €1.995, zodat je marge overhoudt om te groeien.",
      pillars: [
        {
          title: "Soepele checkout",
          description:
            "Een mobielvriendelijk afrekenproces dat winkelwagenuitval verlaagt — elke procent minder uitval is directe extra omzet.",
        },
        {
          title: "Alle betaalmethoden",
          description:
            "iDEAL, creditcard, Apple Pay, PayPal en achteraf betalen, zodat geen enkele klant afhaakt bij het afrekenen.",
        },
        {
          title: "Zelf producten beheren",
          description:
            "Voeg eenvoudig producten, voorraad en prijzen toe via een overzichtelijk beheer — zonder technische kennis.",
        },
        {
          title: "Vindbaar in Google",
          description:
            "Snelle productpagina's met sterke SEO en schema-markup, zodat klanten je producten ook organisch vinden.",
        },
      ],
    },
    deep: {
      eyebrow: "Wat kost een webshop",
      title: "Wat kost een webshop laten maken?",
      paragraphs: [
        "De kosten van een webshop hangen af van het aantal producten, de gewenste betaalmethoden en koppelingen met je voorraad of boekhouding. Bij Sarte Global start een professionele webshop vanaf €1.995, terwijl een uitgebreid platform met onbeperkt producten en integraties oploopt vanaf €3.995. Voor grotere catalogi met B2B-prijzen of internationale verkoop is er een Enterprise-traject.",
        "Een betaalbare webshop betekent bij ons niet: minder kwaliteit, maar geen onnodige franje. We bouwen precies wat jouw assortiment nodig heeft om te verkopen, en niets dat je niet gebruikt. Zo blijft je investering laag en je rendement hoog — want een soepele, snelle webshop verdient zichzelf terug met elke extra bestelling.",
      ],
      points: [
        {
          title: "Starter Shop — vanaf €1.995",
          description:
            "Een nette webshop tot 25 producten met iDEAL en creditcard. Ideaal om snel te starten met verkopen.",
        },
        {
          title: "Growth Shop — vanaf €3.995",
          description:
            "Onbeperkt producten, alle betaalmethoden, kortingscodes en koppelingen met je boekhouding.",
        },
        {
          title: "Enterprise — op maat",
          description:
            "Voor grote catalogi, B2B-prijzen, meerdere valuta en een headless architectuur voor maximale snelheid.",
        },
        {
          title: "Conversie als focus",
          description:
            "Elke webshop bouwen we om winkelwagenuitval te verlagen en de omzet per bezoeker te verhogen.",
        },
      ],
    },
    conversion: {
      eyebrow: "Start met verkopen",
      title: "Een betaalbare webshop die elke bestelling terugverdient",
      intro:
        "Wil je online verkopen zonder een vermogen te investeren in maatwerk dat je niet nodig hebt? Wij bouwen een snelle, betrouwbare webshop die past bij jouw assortiment en groeiplannen — en die meegroeit zodra de bestellingen binnenkomen.",
      benefits: [
        "Professionele webshop vanaf €1.995",
        "Alle Nederlandse betaalmethoden, inclusief achteraf betalen",
        "Conversiegerichte checkout die uitval verlaagt",
        "Zelf producten, voorraad en bestellingen beheren",
        "Koppelingen met boekhouding en verzending mogelijk",
      ],
      ctaLabel: "Vraag een webshop-offerte aan",
      ctaHref: CTA_HREF,
    },
  },

  /* ─────────────────  WOOCOMMERCE WEBSHOP LATEN MAKEN  ───────────────── */
  "woocommerce-webshop-laten-maken": {
    authority: {
      eyebrow: "WooCommerce experts",
      title: "WooCommerce webshop laten maken: flexibel én betaalbaar",
      intro:
        "WooCommerce maakt van WordPress een volwaardig verkoopplatform — en is daarmee een van de voordeligste manieren om professioneel online te verkopen. Sarte Global bouwt snelle WooCommerce-shops die je daarna volledig zelf in de hand houdt.",
      pillars: [
        {
          title: "Volledige eigen controle",
          description:
            "Je beheert producten, prijzen en bestellingen zelf in het vertrouwde WordPress-dashboard — geen doorlopende bureaukosten.",
        },
        {
          title: "Lagere instapkosten",
          description:
            "WooCommerce is open source: je betaalt voor de bouw, niet voor dure platformlicenties per maand.",
        },
        {
          title: "Eindeloos uitbreidbaar",
          description:
            "Duizenden extensies voor verzending, boekhouding, abonnementen en marketing — voeg toe wat je nodig hebt.",
        },
        {
          title: "Snel en SEO-sterk",
          description:
            "We bouwen lichte, snelle shops met sterke technische SEO, zodat je producten goed vindbaar zijn.",
        },
      ],
    },
    deep: {
      eyebrow: "Waarom WooCommerce",
      title: "Voor wie is een WooCommerce webshop de beste keuze?",
      paragraphs: [
        "WooCommerce is ideaal voor ondernemers die maximale flexibiliteit willen tegen lage vaste kosten. Omdat het op WordPress draait, combineer je een vertrouwd, eenvoudig beheer met de vrijheid om je shop precies in te richten zoals je wilt. Je betaalt geen vaste maandlicentie per verkoop, wat het op termijn vaak voordeliger maakt dan gesloten platformen.",
        "Sarte Global zorgt dat je WooCommerce-shop niet traag of rommelig wordt — een veelgehoord nadeel van slecht gebouwde WooCommerce-sites. We werken met een schone opbouw, alleen noodzakelijke extensies en snelle hosting, zodat je de flexibiliteit van WooCommerce krijgt zonder de prestatieproblemen.",
      ],
      points: [
        {
          title: "Geen transactiekosten",
          description:
            "WooCommerce rekent geen percentage over je omzet — je houdt meer marge over.",
        },
        {
          title: "Vertrouwd beheer",
          description:
            "Werk je al met WordPress? Dan voelt je webshopbeheer meteen vertrouwd.",
        },
        {
          title: "Schaalt naar duizenden producten",
          description:
            "Van een handvol artikelen tot een grote catalogus met varianten en voorraadbeheer.",
        },
        {
          title: "Koppel je favoriete tools",
          description:
            "Boekhouding, verzendpartners, e-mailmarketing en betaalproviders koppelen we naadloos.",
        },
      ],
    },
    conversion: {
      eyebrow: "Begin voordelig online",
      title: "Een flexibele WooCommerce-shop zonder hoge vaste lasten",
      intro:
        "Wil je online verkopen met volledige vrijheid en lage doorlopende kosten? Met WooCommerce houd je de regie en betaal je geen percentage over elke verkoop. Wij bouwen hem snel, veilig en goed vindbaar.",
      benefits: [
        "Volwaardige webshop op het flexibele WooCommerce-platform",
        "Geen transactiekosten over je omzet",
        "Zelf producten en bestellingen beheren via WordPress",
        "Snelle, schone opbouw zonder overbodige extensies",
        "Eenvoudig te koppelen met boekhouding en verzending",
      ],
      ctaLabel: "Vraag een WooCommerce-offerte aan",
      ctaHref: CTA_HREF,
    },
  },

  /* ───────────────────  SHOPIFY WEBSHOP LATEN MAKEN  ─────────────────── */
  "shopify-webshop-laten-maken": {
    authority: {
      eyebrow: "Shopify partners",
      title: "Shopify webshop laten maken: snel starten, zorgeloos verkopen",
      intro:
        "Shopify is het meest gebruiksvriendelijke verkoopplatform ter wereld: alles-in-één, veilig en zonder technisch onderhoud. Sarte Global richt jouw Shopify-shop professioneel in tegen een eerlijke prijs, zodat jij je volledig op verkopen kunt richten.",
      pillars: [
        {
          title: "Alles-in-één platform",
          description:
            "Hosting, beveiliging, betalingen en updates zitten erbij — geen technisch gedoe en voorspelbare maandkosten.",
        },
        {
          title: "Zorgeloos en veilig",
          description:
            "Shopify regelt beveiliging en uptime, zodat je shop altijd online en betrouwbaar is.",
        },
        {
          title: "Razendsnel live",
          description:
            "Door het kant-en-klare fundament staat een professionele Shopify-shop snel en betaalbaar online.",
        },
        {
          title: "Klaar om te schalen",
          description:
            "Van eerste verkoop tot internationale groei: Shopify groeit moeiteloos met je mee.",
        },
      ],
    },
    deep: {
      eyebrow: "Is Shopify iets voor jou",
      title: "Wanneer kies je voor een Shopify webshop?",
      paragraphs: [
        "Shopify is de beste keuze voor ondernemers die snel, veilig en zonder technische zorgen willen verkopen. Je betaalt een vast maandbedrag en krijgt daarvoor hosting, beveiliging, betaalintegraties en automatische updates. Dat maakt de totale kosten voorspelbaar en het beheer eenvoudig — ideaal als je je tijd liever aan je producten en klanten besteedt dan aan techniek.",
        "Sarte Global zorgt dat je Shopify-shop er niet uitziet als een standaardtemplate. We richten een professioneel, merkgericht ontwerp in, optimaliseren de productpagina's voor conversie en SEO, en koppelen de tools die jij gebruikt. Zo krijg je het gemak van Shopify met de uitstraling van een op maat gebouwde webshop.",
      ],
      points: [
        {
          title: "Voorspelbare kosten",
          description:
            "Een vast maandbedrag waarin hosting, beveiliging en updates zijn inbegrepen.",
        },
        {
          title: "Geen technisch onderhoud",
          description:
            "Shopify draait de techniek; jij richt je op verkopen en klantenservice.",
        },
        {
          title: "Sterk in conversie",
          description:
            "Een beproefd, geoptimaliseerd checkoutproces dat wereldwijd miljoenen verkopen afhandelt.",
        },
        {
          title: "Honderden integraties",
          description:
            "Koppel marketing, verzending, voorraad en boekhouding met enkele klikken.",
        },
      ],
    },
    conversion: {
      eyebrow: "Verkoop zonder zorgen",
      title: "Een professionele Shopify-shop, betaalbaar ingericht",
      intro:
        "Wil je snel en zorgeloos online verkopen, zonder je druk te maken over hosting, beveiliging of updates? Met Shopify regel je dat in één platform. Wij maken er een professionele, conversiegerichte shop van die bij jouw merk past.",
      benefits: [
        "Professioneel ingerichte Shopify-shop in jouw huisstijl",
        "Hosting, beveiliging en updates inbegrepen in het platform",
        "Geoptimaliseerde productpagina's voor SEO en conversie",
        "Snel live en eenvoudig te beheren",
        "Klaar om internationaal te schalen",
      ],
      ctaLabel: "Vraag een Shopify-offerte aan",
      ctaHref: CTA_HREF,
    },
  },

  /* ─────────────────────  LANDING PAGE LATEN MAKEN  ──────────────────── */
  "landing-page-laten-maken": {
    authority: {
      eyebrow: "Conversiespecialisten",
      title: "Landingspagina laten maken die elke advertentie-euro beter benut",
      intro:
        "Een landingspagina is goedkoop om te bouwen, maar bepaalt het rendement van je hele campagne. Sarte Global ontwerpt scherpe, snelle landingspagina's rond één doel, zodat je meer leads haalt uit precies hetzelfde advertentiebudget.",
      pillars: [
        {
          title: "Eén doel, geen afleiding",
          description:
            "Een pagina die volledig is gebouwd rond één actie converteert vrijwel altijd beter dan een algemene homepage.",
        },
        {
          title: "Mobile-first en supersnel",
          description:
            "Laadt in seconden op elk toestel — cruciaal, want trage pagina's verbranden je advertentiebudget.",
        },
        {
          title: "Overtuigende copy & structuur",
          description:
            "Heldere koppen, sterke argumenten en een duidelijke call-to-action die twijfel wegnemen.",
        },
        {
          title: "Meetbaar resultaat",
          description:
            "Met conversie-tracking zie je zwart op wit wat de pagina oplevert en waar je kunt verbeteren.",
        },
      ],
    },
    deep: {
      eyebrow: "Waarom een landingspagina",
      title: "Waarom een aparte landingspagina meer oplevert dan je homepage",
      paragraphs: [
        "Wie betaald verkeer naar de homepage stuurt, verspilt vaak budget. Een homepage is gebouwd om te navigeren, niet om te converteren. Een landingspagina daarentegen leidt de bezoeker zonder afleiding naar één duidelijke actie — een aanvraag, aanmelding of aankoop. Daardoor haal je structureel meer leads uit hetzelfde advertentiebudget.",
        "Omdat een landingspagina relatief goedkoop te bouwen is, is het een van de meest rendabele investeringen in je online marketing. Een paar procent meer conversie betekent direct meer klanten zonder dat je advertentiekosten stijgen. Sarte Global bouwt landingspagina's die snel laden, overtuigen en meetbaar presteren — met de optie om varianten te testen en te blijven verbeteren.",
      ],
      points: [
        {
          title: "Hoger rendement op ads",
          description:
            "Meer leads uit hetzelfde budget door een pagina die op één doel is gericht.",
        },
        {
          title: "Snel te realiseren",
          description:
            "Vaak binnen enkele werkdagen live, klaar voor je volgende campagne of lancering.",
        },
        {
          title: "A/B-testen mogelijk",
          description:
            "Test koppen, layouts en CTA's om elke maand meer uit je verkeer te halen.",
        },
        {
          title: "Koppelt aan je ads",
          description:
            "Naadloze koppeling met Google Ads, Meta Ads en je e-mailtool, inclusief tracking.",
        },
      ],
    },
    conversion: {
      eyebrow: "Verhoog je conversie",
      title: "Een betaalbare landingspagina met maximaal rendement",
      intro:
        "Geef je geld uit aan advertenties, maar blijft de conversie achter? Dan verdient een gerichte landingspagina zich razendsnel terug. Wij bouwen hem snel, overtuigend en meetbaar — klaar om meer leads binnen te halen.",
      benefits: [
        "Conversiegerichte landingspagina rond één duidelijk doel",
        "Mobile-first en laadt in seconden",
        "Overtuigende copy- en CTA-structuur",
        "Conversie-tracking en optionele A/B-tests",
        "Koppeling met Google Ads, Meta Ads en e-mailtools",
      ],
      ctaLabel: "Vraag een landingspagina aan",
      ctaHref: CTA_HREF,
    },
  },

  /* ───────────────────────  WEBAPP LATEN MAKEN  ──────────────────────── */
  "webapp-laten-maken": {
    authority: {
      eyebrow: "Maatwerk development",
      title: "Webapplicatie laten maken zonder onnodige overhead",
      intro:
        "Een webapp laten maken hoeft niet te beginnen met een kostbaar, maandenlang traject. Sarte Global bouwt slimme webapplicaties stap voor stap, te beginnen met een MVP, zodat je idee zich kan bewijzen voordat je groot investeert.",
      pillars: [
        {
          title: "Start met een MVP",
          description:
            "We bouwen eerst de kern van je idee, zodat je het kunt valideren bij echte gebruikers zonder onnodige kosten.",
        },
        {
          title: "Schaalbare architectuur",
          description:
            "Een moderne, veilige basis die meegroeit van eerste versie tot volwaardig platform.",
        },
        {
          title: "Snel en betrouwbaar",
          description:
            "Razendsnelle, stabiele applicaties gebouwd op bewezen technologie zoals Next.js en React.",
        },
        {
          title: "Eén team, korte lijnen",
          description:
            "Strategie, design en development in één team houden de kosten beheersbaar en het tempo hoog.",
        },
      ],
    },
    deep: {
      eyebrow: "Slim ontwikkelen",
      title: "Hoe houd je de kosten van een webapp beheersbaar?",
      paragraphs: [
        "Maatwerksoftware heeft de reputatie duur te zijn — en dat klopt als je alles in één keer probeert te bouwen. Sarte Global pakt het anders aan: we beginnen met de essentie (een Minimum Viable Product) die je idee bewijst, en bouwen daarna gericht uit op basis van wat gebruikers echt nodig hebben. Zo investeer je in functies die waarde toevoegen, niet in aannames.",
        "Door te werken met een herbruikbaar, modern fundament en een vast team houden we de ontwikkelkosten beheersbaar zonder in te leveren op kwaliteit of veiligheid. Je krijgt een snelle, schaalbare webapplicatie die je stap voor stap kunt laten groeien, met heldere afspraken over scope en planning bij elke fase.",
      ],
      points: [
        {
          title: "Gefaseerd investeren",
          description:
            "Betaal voor wat je nu nodig hebt en breid uit wanneer het idee zich bewijst.",
        },
        {
          title: "Klikbaar prototype vooraf",
          description:
            "Zie en test de app voordat er volledig wordt ontwikkeld — dat voorkomt dure misstappen.",
        },
        {
          title: "Veilig en onderhoudbaar",
          description:
            "Schone code en moderne techniek maken doorontwikkelen later goedkoper.",
        },
        {
          title: "Koppelt met je systemen",
          description:
            "API-koppelingen met bestaande tools, betaalproviders of databases.",
        },
      ],
    },
    conversion: {
      eyebrow: "Bouw slim",
      title: "Een maatwerk webapp die meegroeit met je budget",
      intro:
        "Heb je een idee voor een webapplicatie maar zie je op tegen de kosten? Door te starten met een MVP en gefaseerd uit te bouwen, houd je grip op je investering. Vertel ons over je idee en we denken vrijblijvend mee.",
      benefits: [
        "Start betaalbaar met een MVP en groei gefaseerd",
        "Klikbaar prototype voordat er volledig wordt gebouwd",
        "Snelle, veilige en schaalbare architectuur",
        "Eén team voor strategie, design en development",
        "Koppelingen met je bestaande systemen en tools",
      ],
      ctaLabel: "Bespreek jouw webapp-idee",
      ctaHref: CTA_HREF,
    },
  },

  /* ─────────────────────────  SEO OPTIMALISATIE  ─────────────────────── */
  "seo-optimalisatie": {
    authority: {
      eyebrow: "SEO specialisten",
      title: "SEO-optimalisatie met een eerlijk maandtarief",
      intro:
        "Hoger in Google komen hoeft geen duur, ondoorzichtig traject te zijn. Sarte Global biedt SEO-optimalisatie met transparante maandtarieven vanaf €299, heldere rapportages en geen lange contracten die je vasthouden — je blijft omdat de resultaten voor zich spreken.",
      pillars: [
        {
          title: "Transparante maandtarieven",
          description:
            "Vanaf €299 per maand voor lokale vindbaarheid, met een duidelijk overzicht van wat we doen en wat het oplevert.",
        },
        {
          title: "Technische SEO als basis",
          description:
            "Snelheid, structuur, schema-markup en Core Web Vitals — het fundament waarop duurzame rankings worden gebouwd.",
        },
        {
          title: "Content die rankt",
          description:
            "Expert-artikelen en geoptimaliseerde pagina's die inspelen op wat jouw klanten écht zoeken.",
        },
        {
          title: "Heldere rapportage",
          description:
            "Maandelijks inzicht in je posities, verkeer en aanvragen — zo zie je precies waar je investering naartoe gaat.",
        },
      ],
    },
    deep: {
      eyebrow: "Wat kost SEO",
      title: "Wat kosten SEO-tarieven in Nederland en wat leveren ze op?",
      paragraphs: [
        "SEO-tarieven in Nederland lopen sterk uiteen, omdat er in een competitieve markt meer werk nodig is om bovenaan te komen dan in een niche. Bij Sarte Global start SEO vanaf €299 per maand voor lokale vindbaarheid en loopt het op naar €1.499 per maand voor landelijke autoriteitscampagnes. Je betaalt voor doorlopende optimalisatie van techniek, content en autoriteit — geen eenmalige truc, maar structurele groei.",
        "Het mooie aan SEO is het rendement op lange termijn. Waar je bij adverteren per klik betaalt en het verkeer stopt zodra het budget op is, blijft organisch verkeer binnenkomen zonder dat je telkens hoeft bij te betalen. Een investering in SEO bouwt zo aan een bezit dat zichzelf blijft uitbetalen, met meer bezoekers, meer aanvragen en lagere advertentiekosten als gevolg.",
      ],
      points: [
        {
          title: "Local SEO — vanaf €299 p/m",
          description:
            "Lokaal goed vindbaar worden met een sterk Google Bedrijfsprofiel en geoptimaliseerde kernpagina's.",
        },
        {
          title: "Growth SEO — vanaf €799 p/m",
          description:
            "Maandelijkse content, technische optimalisatie en linkbuilding voor structurele groei.",
        },
        {
          title: "Authority SEO — vanaf €1.499 p/m",
          description:
            "Een complete groeistrategie voor competitieve, landelijke markten met een dedicated specialist.",
        },
        {
          title: "Duurzaam rendement",
          description:
            "Organisch verkeer blijft binnenkomen, ook als je niet per klik betaalt.",
        },
      ],
    },
    conversion: {
      eyebrow: "Groei structureel",
      title: "Betaalbare SEO die zich blijft terugbetalen",
      intro:
        "Wil je beter gevonden worden in Google zonder vast te zitten aan een duur, ondoorzichtig contract? Met heldere maandtarieven en transparante rapportages weet je precies wat je SEO oplevert. Vraag een vrijblijvend SEO-voorstel aan.",
      benefits: [
        "SEO-optimalisatie vanaf €299 per maand",
        "Geen lange contracten — maandelijks opzegbaar",
        "Technische SEO, content en autoriteit in één aanpak",
        "Maandelijkse rapportage over posities en aanvragen",
        "Duurzaam organisch verkeer in plaats van kosten per klik",
      ],
      ctaLabel: "Vraag een SEO-voorstel aan",
      ctaHref: CTA_HREF,
    },
  },

  /* ─────────────────────────  WEBSITE ONDERHOUD  ─────────────────────── */
  "website-onderhoud": {
    authority: {
      eyebrow: "Onderhoud & support",
      title: "Website onderhoud vanaf €79 per maand",
      intro:
        "Een website die niet wordt onderhouden, wordt vroeg of laat traag, onveilig of onbereikbaar. Sarte Global houdt je site snel, veilig en up-to-date voor een vast, betaalbaar maandbedrag — zodat jij je geen zorgen hoeft te maken over de techniek.",
      pillars: [
        {
          title: "Updates & back-ups",
          description:
            "Maandelijkse software-updates en dagelijkse back-ups houden je website veilig en herstelbaar.",
        },
        {
          title: "24/7 monitoring",
          description:
            "We bewaken uptime en beveiliging continu, zodat problemen worden opgelost voordat jij ze merkt.",
        },
        {
          title: "Kleine wijzigingen inbegrepen",
          description:
            "Tekst- en beeldaanpassingen regelen we voor je, zodat je site altijd actueel blijft.",
        },
        {
          title: "Snel bereikbaar",
          description:
            "Een vast aanspreekpunt met korte responstijden — bij Premium zelfs binnen 4 uur via SLA.",
        },
      ],
    },
    deep: {
      eyebrow: "Waarom onderhoud",
      title: "Waarom website onderhoud juist geld bespaart",
      paragraphs: [
        "Onderhoud lijkt een kostenpost, maar is vooral een verzekering. Eén dag dat je website plat ligt of gehackt wordt, kost vaak meer dan een heel jaar onderhoud — nog los van de gemiste omzet en de reputatieschade. Met een vast, betaalbaar maandbedrag voorkom je die risico's en houd je je website snel, veilig en up-to-date.",
        "Bij Sarte Global start een onderhoudsabonnement vanaf €79 per maand voor updates, back-ups en monitoring, oplopend tot €299 per maand voor een pakket waarin we je site ook doorlopend verbeteren. Werkt je website door iemand anders gebouwd? Vaak kunnen we het onderhoud na een korte technische check gewoon overnemen.",
      ],
      points: [
        {
          title: "Essential — vanaf €79 p/m",
          description:
            "Updates, dagelijkse back-ups, beveiligings- en uptime-monitoring en kleine tekstwijzigingen.",
        },
        {
          title: "Business — vanaf €149 p/m",
          description:
            "Plus twee uur wijzigingen per maand, snelheidsoptimalisatie en prioriteit support.",
        },
        {
          title: "Premium — vanaf €299 p/m",
          description:
            "Proactieve doorontwikkeling, een dedicated aanspreekpunt en een support-SLA binnen 4 uur.",
        },
        {
          title: "Maandelijks opzegbaar",
          description:
            "Geen lange contracten. Je blijft omdat je site goed draait, niet omdat je vastzit.",
        },
      ],
    },
    conversion: {
      eyebrow: "Blijf zorgeloos online",
      title: "Betaalbaar onderhoud dat grote risico's voorkomt",
      intro:
        "Wil je dat je website altijd snel, veilig en up-to-date is, zonder er zelf naar om te kijken? Met een vast maandbedrag nemen wij het onderhoud volledig uit handen. Ook voor websites die door een ander zijn gebouwd.",
      benefits: [
        "Website onderhoud al vanaf €79 per maand",
        "Updates, back-ups en 24/7 monitoring inbegrepen",
        "Kleine tekst- en beeldwijzigingen voor je geregeld",
        "Maandelijks opzegbaar, zonder lange contracten",
        "Ook mogelijk voor bestaande websites van derden",
      ],
      ctaLabel: "Vraag een onderhoudspakket aan",
      ctaHref: CTA_HREF,
    },
  },

  /* ────────────────────────────  OVER ONS  ──────────────────────────── */
  "over-ons": {
    authority: {
      eyebrow: "Over Sarte Global",
      title: "Het bureau dat betaalbaar en professioneel verenigt",
      intro:
        "Sarte Global is opgericht met één overtuiging: elke ondernemer in Nederland verdient een professionele website tegen een eerlijke prijs. Geen juniors die op jouw kosten leren, geen doorverkochte uren — wel een vast, ervaren team dat betaalbaar werkt zonder in te leveren op kwaliteit.",
      pillars: [
        {
          title: "Alleen senior specialisten",
          description:
            "Ervaren designers, developers en strategen leiden elk project. Die efficiëntie houdt de prijs laag en het resultaat hoog.",
        },
        {
          title: "Eén team voor alles",
          description:
            "Strategie, design en development zitten in hetzelfde team. Korte lijnen, minder overdracht, lagere kosten.",
        },
        {
          title: "Resultaat boven uren",
          description:
            "We sturen op omzet, conversie en groei — niet op gefactureerde uren of opgeleverde bestanden.",
        },
        {
          title: "Transparant geprijsd",
          description:
            "Een professionele website vanaf €995, met een heldere offerte vooraf en nooit verborgen kosten achteraf.",
        },
      ],
    },
    deep: {
      eyebrow: "Onze werkwijze",
      title: "Hoe wij betaalbaar werken zonder in te leveren op kwaliteit",
      paragraphs: [
        "Veel bureaus rekenen hoge tarieven omdat ze met losse freelancers, dure strategiefases en lange overdrachten werken. Sarte Global is anders opgezet: één compact team, een bewezen en herbruikbaar technisch fundament en een strak proces. Daardoor besteden we minder uren aan hetzelfde resultaat — en die efficiëntie geven we direct door in onze prijs.",
        "Betaalbaar betekent bij ons niet 'minder', maar 'gericht'. We bouwen precies wat jouw bedrijf nodig heeft om online te scoren: een snelle, vindbare en conversiegerichte website, zonder overbodige franje. Of je nu in Amsterdam, Rotterdam of de rest van Nederland onderneemt — je werkt met een vast aanspreekpunt en korte, persoonlijke lijnen.",
      ],
      points: [
        {
          title: "Vast team, geen tussenlagen",
          description:
            "Je spreekt direct met de mensen die het werk doen — dat scheelt tijd, miscommunicatie en kosten.",
        },
        {
          title: "Bewezen fundament",
          description:
            "Een modern, herbruikbaar technisch fundament versnelt de bouw en verlaagt de prijs.",
        },
        {
          title: "Heldere planning vooraf",
          description:
            "Een duidelijke scope en planning bij de start, zodat je vooraf precies weet wat je krijgt en betaalt.",
        },
        {
          title: "Werkzaam in heel Nederland",
          description:
            "Een online-first bureau met persoonlijk contact, actief voor ondernemers door het hele land.",
        },
      ],
    },
    conversion: {
      eyebrow: "Maak kennis",
      title: "Benieuwd of we bij elkaar passen?",
      intro:
        "Plan een vrijblijvende kennismaking van 30 minuten. We luisteren naar je plannen, denken eerlijk mee over wat past bij je budget en vertellen open wat een betaalbare, professionele website voor jou kan betekenen.",
      benefits: [
        "Een vast, senior team van begin tot livegang",
        "Professionele website al vanaf €995",
        "Eerlijk advies, ook als iets goedkoper kan",
        "Eén aanspreekpunt en korte lijnen",
        "Werkzaam voor ondernemers in heel Nederland",
      ],
      ctaLabel: "Plan een vrijblijvende kennismaking",
      ctaHref: CTA_HREF,
    },
  },

  /* ──────────────────────────────  WORK  ────────────────────────────── */
  work: {
    authority: {
      eyebrow: "Ons portfolio",
      title: "Betaalbaar werk dat eruitziet als een topbudget",
      intro:
        "Ons portfolio laat zien wat 'betaalbaar én professioneel' in de praktijk betekent: websites en webshops met de uitstraling van een duur bureau, gebouwd tegen een eerlijke prijs. Elk project is ontworpen om niet alleen mooi te zijn, maar om aanvragen en omzet op te leveren.",
      pillars: [
        {
          title: "Premium uitstraling",
          description:
            "Een modern, merkgericht ontwerp dat vertrouwen wekt — ongeacht het budget waarmee het is gebouwd.",
        },
        {
          title: "Gebouwd om te converteren",
          description:
            "Heldere structuur en sterke call-to-actions die bezoekers omzetten in contact, offerte of aankoop.",
        },
        {
          title: "Snel en vindbaar",
          description:
            "Razendsnelle laadtijden en sterke technische SEO, zodat elk project ook organisch wordt gevonden.",
        },
        {
          title: "Voor elke branche",
          description:
            "Van bouw en zorg tot horeca, finance en e-commerce — we vertalen elke markt naar een passend ontwerp.",
        },
      ],
    },
    deep: {
      eyebrow: "Wat goed werk oplevert",
      title: "Waarom een doordachte website zichzelf terugverdient",
      paragraphs: [
        "Een website is geen kostenpost maar een investering: hij werkt 24/7 als je beste verkoper. De projecten in ons portfolio delen daarom dezelfde rode draad — een heldere boodschap, een snelle en betrouwbare techniek en een opbouw die bezoekers moeiteloos naar de juiste actie leidt. Juist dat verschil tussen 'een website hebben' en 'een website die verkoopt' bepaalt het rendement.",
        "Het mooie is dat die kwaliteit niet onbetaalbaar hoeft te zijn. Doordat we efficiënt werken met een vast team en een bewezen fundament, leveren we werk op hoog niveau tegen een eerlijke prijs. Zo krijg je een resultaat dat meetelt met dat van veel duurdere bureaus, zonder het bijbehorende prijskaartje.",
      ],
      points: [
        {
          title: "Meer aanvragen",
          description:
            "Een overtuigende, snelle site die bezoekers omzet in concrete leads en klanten.",
        },
        {
          title: "Meer vertrouwen",
          description:
            "Een verzorgde uitstraling die jouw bedrijf serieus en betrouwbaar laat overkomen.",
        },
        {
          title: "Lagere advertentiekosten",
          description:
            "Sterke SEO en hoge conversie verlagen je afhankelijkheid van betaald verkeer.",
        },
        {
          title: "Klaar voor groei",
          description:
            "Een schaalbaar fundament dat moeiteloos meegroeit met nieuwe pagina's of functies.",
        },
      ],
    },
    conversion: {
      eyebrow: "Jouw project hierbij?",
      title: "Klaar voor een website die dit waarmaakt?",
      intro:
        "Zie je in ons werk wat je voor je eigen bedrijf zoekt? Vertel ons kort over je plannen en doelen. Binnen één werkdag ontvang je een vrijblijvende offerte op maat — betaalbaar, helder en zonder verplichtingen.",
      benefits: [
        "Een ontwerp op het niveau van een duur bureau, betaalbaar geprijsd",
        "Professionele website al vanaf €995",
        "Conversiegericht en met sterke SEO opgebouwd",
        "Live binnen 2 weken bij de meeste projecten",
        "Eén vast aanspreekpunt van start tot livegang",
      ],
      ctaLabel: "Vraag een offerte aan",
      ctaHref: CTA_HREF,
    },
  },

  /* ───────────────────  SERVICE · UX / UI DESIGN  ────────────────────── */
  "ui-ux-design": {
    authority: {
      eyebrow: "UX/UI specialisten",
      title: "UX/UI design dat zich terugverdient — vanaf €499",
      intro:
        "Goed ontwerp is geen luxe maar een investering die zich dubbel terugbetaalt: het verlaagt je ontwikkelkosten én verhoogt je conversie. Sarte Global levert doordacht, conversiegericht UX/UI design op basis van onderzoek, betaalbaar geprijsd vanaf €499.",
      pillars: [
        {
          title: "Gebaseerd op onderzoek",
          description:
            "We begrijpen jouw gebruikers vóór we ontwerpen — daarom werkt onze UX in de praktijk en niet alleen op papier.",
        },
        {
          title: "Klikbaar prototype",
          description:
            "Test de ervaring vóór er één regel code wordt geschreven. Dat voorkomt dure herontwerpen achteraf.",
        },
        {
          title: "Build-ready oplevering",
          description:
            "Figma-bestanden met design tokens die direct in code worden vertaald — geen verlies tussen design en development.",
        },
        {
          title: "Conversie als doel",
          description:
            "Elk scherm is ontworpen om bezoekers moeiteloos naar hun doel — en jouw conversie — te leiden.",
        },
      ],
    },
    deep: {
      eyebrow: "Wat kost UX/UI design",
      title: "Waarom investeren in goed ontwerp je geld bespaart",
      paragraphs: [
        "De kosten van UX/UI design laten zich niet in één bedrag vangen: een ontwerp voor één landingspagina (vanaf €499) is iets anders dan een compleet design system voor een SaaS-product. Bij Sarte Global bepalen we samen de scope en ontvang je een transparante offerte op maat, zodat je nooit betaalt voor schermen of onderzoek die je niet nodig hebt.",
        "Goed ontwerp verdient zich op twee manieren terug. Het verlaagt je ontwikkelkosten, doordat developers met kant-en-klare design tokens werken in plaats van zelf keuzes te maken, en het verhoogt je conversie, omdat bezoekers moeiteloos hun doel bereiken. Een doordachte interface is daarmee een van de meest rendabele investeringen in je digitale product.",
      ],
      points: [
        {
          title: "Landingspagina — vanaf €499",
          description:
            "Een conversiegericht ontwerp voor één pagina of scherm, inclusief klikbaar prototype.",
        },
        {
          title: "Website UI/UX — vanaf €1.495",
          description:
            "Gebruikersonderzoek, een volledig design system en high-fidelity ontwerp van alle schermen.",
        },
        {
          title: "SaaS product design — vanaf €2.995",
          description:
            "End-to-end productontwerp met testing, WCAG-toegankelijkheid en doorlopende sprints.",
        },
        {
          title: "Minder ontwikkeltijd",
          description:
            "Design tokens versnellen de bouw tot 3× en verlagen zo je totale projectkosten.",
        },
      ],
    },
    conversion: {
      eyebrow: "Til je product op",
      title: "Een ontwerp dat moeiteloos werkt — en converteert",
      intro:
        "Loopt je website of product vast op een verwarrende interface? Een doordacht UX/UI-ontwerp lost dat op én verlaagt je ontwikkelkosten. Vraag een vrijblijvende offerte aan en ontdek wat goed ontwerp voor jou oplevert.",
      benefits: [
        "Conversiegericht ontwerp vanaf €499",
        "Gebaseerd op echt gebruikersonderzoek",
        "Klikbaar prototype om vooraf te testen",
        "Build-ready oplevering met design tokens",
        "Designers en developers in één team",
      ],
      ctaLabel: "Vraag een ontwerpofferte aan",
      ctaHref: CTA_HREF,
    },
  },

  /* ───────────────────  SERVICE · MOBIELE APPS  ─────────────────────── */
  "mobile-development": {
    authority: {
      eyebrow: "App-developers",
      title: "Mobiele app laten maken zonder onnodige overhead",
      intro:
        "Een app laten maken hoeft niet te beginnen met een kostbaar, maandenlang traject. Sarte Global bouwt native en cross-platform apps stap voor stap — te beginnen met een MVP — zodat je idee zich kan bewijzen voordat je groot investeert.",
      pillars: [
        {
          title: "Start met een MVP",
          description:
            "Eerst de kern van je idee, getest bij echte gebruikers. Zo investeer je gericht en niet in aannames.",
        },
        {
          title: "Cross-platform efficiënt",
          description:
            "Eén gedeelde codebase voor iOS én Android houdt de bouwkosten laag zonder in te leveren op kwaliteit.",
        },
        {
          title: "Native waar het telt",
          description:
            "Swift en Kotlin daar waar performance of native interactie écht het verschil maken.",
        },
        {
          title: "Zorgeloze release",
          description:
            "Versies, OTA-updates en publicatie in beide app stores regelen we volledig voor je.",
        },
      ],
    },
    deep: {
      eyebrow: "Slim ontwikkelen",
      title: "Hoe je de kosten van een app beheersbaar houdt",
      paragraphs: [
        "Maatwerk-apps hebben de naam duur te zijn — en dat klopt als je alles in één keer probeert te bouwen. Sarte Global pakt het anders aan: we starten met een Minimum Viable Product dat je idee bewijst, en bouwen daarna gericht uit op basis van wat gebruikers echt nodig hebben. Zo investeer je in functies die waarde toevoegen, niet in giswerk.",
        "Met een cross-platform aanpak (React Native of Flutter) bouwen we voor iOS en Android tegelijk vanuit één codebase, wat de kosten flink drukt. Waar native performance écht nodig is, schakelen we naar Swift of Kotlin. Die gerichte keuzes houden je app betaalbaar én snel, met heldere afspraken over scope en planning bij elke fase.",
      ],
      points: [
        {
          title: "Gefaseerd investeren",
          description:
            "Betaal voor wat je nu nodig hebt en breid uit zodra je app zich bewijst.",
        },
        {
          title: "Prototype op een echt toestel",
          description:
            "Binnen de eerste twee weken een klikbaar prototype — dat voorkomt dure misstappen.",
        },
        {
          title: "Eén codebase, twee platforms",
          description:
            "Cross-platform development verlaagt zowel de bouw- als de onderhoudskosten.",
        },
        {
          title: "Monitoring ingebouwd",
          description:
            "Crash-analytics en performance-tracking vanaf de lancering, niet achteraf.",
        },
      ],
    },
    conversion: {
      eyebrow: "Breng je idee tot leven",
      title: "Een app die meegroeit met je budget",
      intro:
        "Heb je een idee voor een app maar zie je op tegen de kosten? Door te starten met een MVP en gefaseerd uit te bouwen, houd je grip op je investering. Vertel ons over je idee en we denken vrijblijvend mee.",
      benefits: [
        "Start betaalbaar met een MVP en groei gefaseerd",
        "Cross-platform voor iOS en Android in één codebase",
        "Klikbaar prototype binnen de eerste weken",
        "Publicatie in beide app stores geregeld",
        "Eén team voor strategie, design en development",
      ],
      ctaLabel: "Bespreek jouw app-idee",
      ctaHref: CTA_HREF,
    },
  },

  /* ───────────────────  SERVICE · AI & AUTOMATISERING  ──────────────── */
  "ai-automation": {
    authority: {
      eyebrow: "AI-specialisten",
      title: "AI en automatisering die echt geld besparen",
      intro:
        "AI is pas waardevol als het werk uit handen neemt of omzet oplevert. Sarte Global bouwt geen demo's, maar productie-AI en automatiseringen die concrete uren en kosten besparen — gericht ingezet op de plekken waar het rendement het grootst is.",
      pillars: [
        {
          title: "Gericht op rendement",
          description:
            "We zoeken eerst de workflows waar AI écht waarde toevoegt — en vermijden de plekken waar het juist geld kost.",
        },
        {
          title: "Werk uit handen",
          description:
            "Workflow-automatisering vervangt handmatig werk door event-gedreven pipelines die 24/7 doordraaien.",
        },
        {
          title: "Gekoppeld aan jouw data",
          description:
            "Slimme zoekfuncties, chatbots en agents die antwoorden op basis van jouw eigen content en systemen.",
        },
        {
          title: "Veilig in productie",
          description:
            "Evaluaties, regressietests en guardrails, zodat je AI met vertrouwen live kunt zetten.",
        },
      ],
    },
    deep: {
      eyebrow: "Slim automatiseren",
      title: "Wanneer levert AI je daadwerkelijk geld op?",
      paragraphs: [
        "Niet elk proces wordt beter van AI. De winst zit in repetitief, voorspelbaar werk: klantvragen beantwoorden, documenten classificeren, data verrijken of leads kwalificeren. Door juist daar te automatiseren, bespaar je structureel uren die je team aan waardevoller werk kan besteden — en dat verdient de investering vaak binnen enkele maanden terug.",
        "Sarte Global werkt gefaseerd en transparant: we starten met een audit om de meest rendabele use case te vinden, bouwen daarna een werkend prototype op jouw eigen data en maken er pas een volwaardig product van als de waarde bewezen is. Zo voorkom je dure experimenten en betaal je alleen voor automatisering die zichzelf terugverdient.",
      ],
      points: [
        {
          title: "Audit eerst",
          description:
            "We bepalen waar AI waarde toevoegt vóór we bouwen — geen technologie om de technologie.",
        },
        {
          title: "Prototype op je eigen data",
          description:
            "Een werkend LLM-prototype binnen één sprint, zodat je de waarde meteen ziet.",
        },
        {
          title: "Minder handmatig werk",
          description:
            "Automatisering die uren bespaart en menselijke fouten terugdringt.",
        },
        {
          title: "Meetbaar en beheersbaar",
          description:
            "Dashboards voor kosten, snelheid en kwaliteit — vanaf dag één.",
        },
      ],
    },
    conversion: {
      eyebrow: "Maak AI een voorsprong",
      title: "Productie-AI voor teams die resultaat willen",
      intro:
        "Benieuwd waar AI in jouw bedrijf tijd of geld kan besparen? We kijken vrijblijvend mee naar je processen en wijzen de meest kansrijke use case aan — eerlijk, ook als automatisering nog niet loont.",
      benefits: [
        "AI ingezet waar het rendement het grootst is",
        "Werkend prototype op je eigen data binnen één sprint",
        "Automatisering die uren en fouten bespaart",
        "Veilig in productie met evaluaties en guardrails",
        "Transparante dashboards voor kosten en kwaliteit",
      ],
      ctaLabel: "Bespreek jouw AI-kans",
      ctaHref: CTA_HREF,
    },
  },

  /* ───────────────────  SERVICE · MERKSTRATEGIE  ────────────────────── */
  "brand-strategy": {
    authority: {
      eyebrow: "Merkstrategen",
      title: "Een sterk merk neerzetten — vanaf €799",
      intro:
        "Een sterk merk maakt je herkenbaar, wekt vertrouwen en laat je hogere prijzen vragen. Sarte Global bouwt geen los logo, maar een samenhangend merk met positionering, verhaal en identiteit — betaalbaar geprijsd vanaf €799 voor een professionele visuele basis.",
      pillars: [
        {
          title: "Scherpe positionering",
          description:
            "Een geschreven standpunt dat richting geeft aan elke pagina, pitch en productkeuze.",
        },
        {
          title: "Verbale identiteit",
          description:
            "Naamgeving, taglines en tone of voice die je hele team consistent kan dragen.",
        },
        {
          title: "Visuele identiteit",
          description:
            "Logo, typografie, kleur en motion — gemaakt om te schalen van favicon tot billboard.",
        },
        {
          title: "Levende richtlijnen",
          description:
            "Een brandbook in code en Figma, zodat je merk consistent blijft — ook na de oplevering.",
        },
      ],
    },
    deep: {
      eyebrow: "Wat kost een merk",
      title: "Waarom investeren in een merk hogere marges oplevert",
      paragraphs: [
        "De kosten van merkstrategie verschillen per ambitie. Bij Sarte Global start een professionele merkidentiteit vanaf €799 voor een visuele basis met logo en huisstijl, terwijl een complete merkstrategie met naamgeving en een levend brandbook oploopt vanaf €4.995. Je ontvangt vooraf een offerte op maat, afgestemd op jouw fase en doelen.",
        "Een sterk merk loont omdat het meer is dan een mooi plaatje. Het maakt je herkenbaar in een drukke markt, wekt vertrouwen bij nieuwe klanten en stelt je in staat hogere marges te vragen, omdat mensen kiezen voor het verhaal en niet alleen voor de laagste prijs. We bouwen daarom een samenhangend merk en vertalen dat naadloos naar je website en social.",
      ],
      points: [
        {
          title: "Brand Starter — vanaf €799",
          description:
            "Logo, kleurenpalet, typografie en een mini-brandbook om sterk mee te starten.",
        },
        {
          title: "Brand Identity — vanaf €1.999",
          description:
            "Positionering, verbale en visuele identiteit met een uitgebreid brandbook.",
        },
        {
          title: "Premium Brand System — vanaf €4.995",
          description:
            "Merk- en marktonderzoek, naamgeving, art direction en levende guidelines.",
        },
        {
          title: "Naadloos naar web",
          description:
            "We vertalen je nieuwe merk direct naar een passende online uitstraling.",
        },
      ],
    },
    conversion: {
      eyebrow: "Zet je merk neer",
      title: "Een merk dat blijft hangen, betaalbaar opgebouwd",
      intro:
        "Komt je bedrijf nog niet overtuigend over of mist het een eigen gezicht? Een sterk merk verandert dat. Vraag een vrijblijvende offerte aan en ontdek hoe we jouw merk herkenbaar en betrouwbaar maken.",
      benefits: [
        "Professionele merkidentiteit vanaf €799",
        "Positionering, verhaal en visuele identiteit in één",
        "Brandbook zodat je merk overal consistent blijft",
        "Naadloos vertaald naar je website en social",
        "Een offerte op maat, afgestemd op jouw ambitie",
      ],
      ctaLabel: "Vraag een merkofferte aan",
      ctaHref: CTA_HREF,
    },
  },

  /* ───────────────────  SERVICE · ONLINE ADVERTISING  ───────────────── */
  "paid-media": {
    authority: {
      eyebrow: "Performance marketeers",
      title: "Online adverteren dat zichzelf terugverdient — beheer vanaf €299 p/m",
      intro:
        "Adverteren is pas zinvol als elke euro meer oplevert dan hij kost. Sarte Global richt Google Ads en Meta Ads in als een meetbaar product, met beheer vanaf €299 per maand, scherpe tracking en doorlopende optimalisatie — zodat je budget altijd naar wat werkt gaat.",
      pillars: [
        {
          title: "Helder geprijsd beheer",
          description:
            "Je advertentiebudget en onze beheerkosten staan los van elkaar. Beheer start vanaf €299 per maand, transparant en zonder verborgen kosten.",
        },
        {
          title: "Scherpe tracking",
          description:
            "Server-side tracking koppelt advertentie-uitgaven aan échte aanvragen en omzet — geen giswerk.",
        },
        {
          title: "Creatie-motor",
          description:
            "Doorlopende productie van ad-creatives die je campagnes vers houden en ad fatigue voorblijven.",
        },
        {
          title: "Wekelijks optimaliseren",
          description:
            "Testcycli en budgetherverdeling zorgen dat de efficiëntie elke week meegroeit.",
        },
      ],
    },
    deep: {
      eyebrow: "Wat kost adverteren",
      title: "Houd advertentiebudget en beheerkosten uit elkaar",
      paragraphs: [
        "Bij online adverteren is het belangrijk om twee dingen te scheiden: je advertentiebudget, dat rechtstreeks naar Google of Meta gaat, en de kosten voor strategie, beheer en creatie. Bij Sarte Global start advertentiebeheer vanaf €299 per maand, oplopend vanaf €1.499 per maand voor full-funnel campagnes over meerdere kanalen. Zo weet je precies waar je aan toe bent.",
        "Belangrijker dan de kosten is het rendement. Met scherpe conversie-tracking, doorlopende optimalisatie en sterke creatives zorgen we dat elke geïnvesteerde euro zoveel mogelijk oplevert. Via heldere dashboards zie je welke campagnes aanvragen en omzet genereren, zodat je budget altijd naar wat werkt gaat en adverteren een voorspelbare groeimotor wordt.",
      ],
      points: [
        {
          title: "Starter — vanaf €299 p/m",
          description:
            "Eén kanaal (Google of Meta), accountstructuur, tracking en een heldere maandrapportage.",
        },
        {
          title: "Growth — vanaf €699 p/m",
          description:
            "Google én Meta, wekelijkse optimalisatie, doorlopende creatie en server-side tracking.",
        },
        {
          title: "Scale — vanaf €1.499 p/m",
          description:
            "Full-funnel over meerdere kanalen met een dedicated specialist en dashboards.",
        },
        {
          title: "Budget volgt resultaat",
          description:
            "We schalen pas op zodra campagnes winstgevend draaien — geen geld verbranden.",
        },
      ],
    },
    conversion: {
      eyebrow: "Maak adverteren voorspelbaar",
      title: "Een groeimotor die elke euro verantwoordt",
      intro:
        "Geef je geld uit aan advertenties maar mis je het overzicht op wat het oplevert? Wij koppelen elke euro aan resultaat. Vraag een vrijblijvend voorstel aan en maak van adverteren een voorspelbare groeimotor.",
      benefits: [
        "Advertentiebeheer vanaf €299 per maand",
        "Advertentiebudget en beheerkosten transparant gescheiden",
        "Server-side tracking gekoppeld aan aanvragen en omzet",
        "Doorlopende creatie tegen ad fatigue",
        "Wekelijkse optimalisatie en heldere dashboards",
      ],
      ctaLabel: "Vraag een advertentievoorstel aan",
      ctaHref: CTA_HREF,
    },
  },
} as const satisfies Record<string, PageSeoContent>;

export type PageSeoKey = keyof typeof PAGE_SEO;

/**
 * Safe lookup for dynamic routes (e.g. /services/[slug]). Returns the page's
 * SEO content when a matching entry exists, otherwise `undefined` — so the
 * caller can conditionally render <PageSeoSections> only when content is defined.
 */
export function getPageSeo(key: string): PageSeoContent | undefined {
  return (PAGE_SEO as Record<string, PageSeoContent>)[key];
}
