export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ContactInfoItem {
  label: string;
  value: string;
  href?: string;
  isLink?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Fahri Maulana",
  title: "Fahri Maulana – Full-stack Developer & Designer",
  role: "Vocational High School Student & Full-stack Developer",
  monogram: "FM",
  portrait: "/images/portrait.jpeg",
  url: "https://fahrimaulana.dev",
  description:
    "I'm a vocational high school student and full-stack developer based in Jepara, Indonesia, building web applications with Laravel & Livewire and crafting UI and graphic designs with Figma and Canva.",
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],
  navCta: {
    label: "Let's talk",
    href: "#contact",
  },
  hero: {
    headline: "I build digital experiences.",
    lead: "I'm a web developer who turns ideas into digital products that are fast, thoughtful, and easy to use.",
    primaryCta: {
      label: "View my work",
      href: "#work",
    },
    secondaryCta: {
      label: "Say hello",
      href: "#contact",
    },
    chips: [
      "Laravel 13",
      "Open for internship & freelance",
      "Indonesia, remote-friendly",
    ],
  },
  about: {
    heading: "Building with code, driven by curiosity.",
    body: "I create modern websites and web applications that balance clean design with solid engineering. Based in Jepara, I work across PHP, Laravel, Livewire, and Figma to ship products that people enjoy using.",
    stats: [
      { value: "5+", label: "Projects shipped" },
      { value: "14+", label: "Technologies" },
      { value: "2026", label: "Current year" },
      { value: "1:1", label: "Direct collaboration" },
    ] as StatItem[],
  },
  process: {
    heading: "Great ideas start with a clear process.",
    lead: "A simple four-step approach keeps every project focused and on time.",
    steps: [
      {
        title: "Discover",
        description: "Understand your goals, audience, and project requirements.",
      },
      {
        title: "Plan",
        description: "Define the structure, components, and the data behind them.",
      },
      {
        title: "Build",
        description: "Write clean, tested code with Laravel and modern JavaScript.",
      },
      {
        title: "Refine",
        description: "Tune performance, polish details, and launch with confidence.",
      },
    ] as ProcessStep[],
  },
  contact: {
    heading: "Let's build something great.",
    lead: "Have an idea or project in mind? Send me a message and I'll reply within two days.",
    items: [
      {
        label: "Email",
        value: "fahrimaulana9322@gmail.com",
        href: "mailto:fahrimaulana9322@gmail.com",
        isLink: true,
      },
      {
        label: "WhatsApp",
        value: "+62 831-3875-6049",
        href: "https://wa.me/6283138756049",
        isLink: true,
      },
      {
        label: "Location",
        value: "Jepara, Central Java, Indonesia",
        isLink: false,
      },
      {
        label: "Availability",
        value: "Open for internship & freelance · replies within 2 days",
        isLink: false,
      },
    ] as ContactInfoItem[],
    socials: [
      { label: "GitHub", href: "https://github.com/FahriMaulana2" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/fahri-maulana-9aa66b423/" },
      { label: "Instagram", href: "https://www.instagram.com/fhrimaulana4/" },
    ] as SocialLink[],
  },
  footer: {
    copyright: "© 2026 Fahri Maulana",
    backToTopLabel: "Back to top",
  },
};
