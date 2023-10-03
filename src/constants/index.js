import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  heydude,
  egshaugenskybar,
  gabenismen,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Cross-Platform Developer",
    icon: mobile,
  },
  {
    title: "UX/UI Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Junior Sommerutvikler",
    company_name: "Eika Forsikring",
    iconBg: "#383E56",
    date: "juni 2023 - August 2023",
    points: [
      "Jobbe innen et team for å gjennomføre et sommerprosjekt for Eika Forsikring.",
      "Utvikle så kunden skal få et bra brukersnitt og god forståelse av tjenesten de leverer.",
      "Lære hvordan samhandle med data fra både backend og frontend.",
      "Jobbe innenfor rammeverk som React og Angular, samt bruke backend verktøy som Kotlin og API samhandling.",
    ],
  
  },
  {
    title: "Kundeservice Medarbeider",
    company_name: "Holland Norway Lines",
    iconBg: "#383E56",
    date: "juni 2022 - August 2023",
    points: [
      "Ansvarlig for innsjekk av kunder og transport.",
      "Svare på inngående telefon, mail og andre hendvendelser.",
      "Sitte front desk og svare på henvendelser fra kunder.",
      "Sikre at kunder får god service og oppfølging.",
    ],
  },
  {
    title: "Frontend Utvikling",
    company_name: "Freelance",
    iconBg: "#383E56",
    date: "Jan 2021 - Nåværende",
    points: [
      "Finne frem til egne kunder og gjøre oppsøkende salg.",
      "Gjøre en markedsresearch av kundene og konkurrentene til kunden.",
      "Skreddersy og planlegge etter kundens behov",
      "Planlegge og utvikle et system som funker etter deres behov.",
    ],
  },
  {
    title: "Selger, Vaktansvarlig",
    company_name: "Narvesen CC Gjøvik og Narvesen Gjøvik skysstasjon",
    iconBg: "#383E56",
    date: "Des 2018 - Juli 2021",
    points: [
      "Ansvarlig for innkjøp og inngående logistikk.",
      "Kassesystemer og kundeservice",
      "Videresalg og mersalg",
      "Lagerstyring og varepåfylling ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Hey Dude Shoes",
    description:
      "E-commerce nettside for en local skobutikk. Blir brukt til å legge inn bestillinger og ordre på sko. Denne nettsiden er laget med React, Next.js, Tailwind CSS og Shopify API.",
    tags: [
      {
        name: "Shopify",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: heydude,
    source_code_link: "https://github.com/",
  },
  {
    name: "Gabenismen Gaming",
    description:
      "En gaming nettside for en esport gruppe. Denne nettsiden blir brukt til å se kamper de skal spille og legge ut blogg innlegg. Denne nettsiden er laget med Next.js, Contentful CMS, Tailwind CSS og Gamer.no sin RestAPI.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Contentful CMS",
        color: "blue-text-gradient",
      },
    ],
    image: gabenismen,
    source_code_link: "https://github.com/",
  },
  {
    name: "Egshaugen Skybar og Grill",
    description:
      "En nettside for en restaurant. Denne resturanten ville ha mulighet til å bestille gjennom Stripe og legge inn bordbestillinger. Denne nettsiden er laget med React, Stripe og Tailwind CSS ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Stripe",
        color: "pink-text-gradient",
      },
    ],
    image: egshaugenskybar,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
