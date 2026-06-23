import type { AboutCompanyContent } from "@/types";

export const ABOUT_COMPANY = {
  eyebrow: "Over Sarte Global",
  brand: "Sarte Global",
  titleLead: "is het bureau achter",
  titleEm: "betaalbare websites",
  titleTail: "die écht resultaat opleveren.",
  mediaImage: "/images/company-img.webp",
  mediaAlt:
    "Binnen bij Sarte Global — onze werkplek waar betaalbare, professionele websites worden gebouwd voor ondernemers en bedrijven in Nederland.",
  mediaCaption: "Sarte Global · Nederland",
  lead:
    "Sarte Global is het bureau achter goedkopewebsite-latenmaken. We bouwen betaalbare én professionele websites voor ondernemers en bedrijven in Nederland — al vanaf €995 — met een focus op sterke SEO, snelle oplevering en meetbare resultaten.",
  paragraphs: [
    "Sarte Global is opgericht met één duidelijk doel: elke Nederlandse ondernemer een professionele website geven tegen een eerlijke, betaalbare prijs. Onze ervaren designers en developers werken vanaf dag één samen — geen overdrachten, geen verborgen kosten, alleen werk dat live gaat.",
    "Naast betaalbare websites bouwt Sarte Global webshops, landingspagina's en complete digitale groeitrajecten — denk aan SEO, online marketing, AI-oplossingen en hosting. Eén partner voor jouw digitale aanwezigheid, die meegroeit met jouw bedrijf.",
  ],
  pillars: [
    {
      title: "Alleen senior specialisten",
      description:
        "Elk project bij Sarte Global wordt geleid door ervaren designers, developers en strategen — niet door juniors die op jouw kosten leren.",
    },
    {
      title: "Eén team voor alles",
      description:
        "Bij Sarte Global zitten strategie, design en development in hetzelfde team. Sneller schakelen, minder verlies tussen disciplines.",
    },
    {
      title: "Resultaat boven uren",
      description:
        "We sturen op omzet, conversie en groei — niet op opgeleverde uren of bestanden.",
    },
    {
      title: "Modern, snel & vindbaar",
      description:
        "Elke website wordt gebouwd op een snelle, moderne basis met sterke technische SEO — klaar om gevonden te worden in Google.",
    },
  ],
  metrics: [
    { value: "€995", label: "Professionele website vanaf" },
    { value: "98%", label: "Tevreden klanten" },
    { value: "2 wk", label: "Gemiddelde oplevertijd" },
    { value: "NL", label: "Werkzaam in heel Nederland" },
  ],
  badge: "SARTE GLOBAL · GOEDKOPE WEBSITE LATEN MAKEN · NEDERLAND",
  ctaLabel: "Plan kennismaking",
  ctaHref: "#cta",
  secondaryLabel: "Lees ons verhaal",
  secondaryHref: "/over-ons",
} as const satisfies AboutCompanyContent;
