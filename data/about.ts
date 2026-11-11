export interface PrincipleItem {
  title: string;
  description: string;
}

export interface QuickFactItem {
  label: string;
  value: string;
}

export interface AboutStatItem {
  value: string;
  label: string;
}

export const aboutData = {
  photo: "/images/about.jpeg",
  heading: "Building with code, driven by curiosity.",
  paragraphs: [
    "I'm a student at SMK Negeri 1 Bangsri, majoring in Software and Game Development (PPLG), based in Jepara, Central Java. My day-to-day focus is full-stack web development — building real-world applications with Laravel and Livewire, from database design to polished front-end interfaces.",
    "Alongside code, I work on UI/UX design in Figma and create visual content — posters, promotional materials — using Canva. I enjoy bridging the gap between engineering and design to deliver work that is both functional and visually considered.",
    "I'm currently open for internship and freelance opportunities where I can contribute, keep learning, and ship things that matter.",
  ],
  portrait: {
    photo: "/images/about.jpeg",
    image: {
      src: "/images/about.jpeg",
      alt: "Fahri Maulana at work",
    },
    gradient: {
      c1: "#f3c58a",
      c2: "#5a2a12",
    },
    tag: {
      title: "Fahri Maulana",
      subtitle: "Full-stack Developer & Designer",
    },
  },
  principlesHeading: "How I work",
  principles: [
    {
      title: "Clarity first",
      description: "Code should be easy to read, self-explanatory, and maintainable by any developer on day one.",
    },
    {
      title: "Built to last",
      description: "Prioritizing strong database schemas, tested API contracts, and scalable foundation logic.",
    },
    {
      title: "Details matter",
      description: "From micro-interactions to sub-second load times, craftsmanship makes products memorable.",
    },
  ] as PrincipleItem[],
  quickFacts: [
    { label: "Location", value: "Jepara, Central Java, Indonesia" },
    { label: "Focus", value: "Full-stack Web & UI/Visual Design" },
    { label: "Current status", value: "Open for internship & freelance" },
    { label: "Languages", value: "Indonesian (Native), English" },
  ] as QuickFactItem[],
  actions: {
    downloadCv: {
      label: "Download CV",
      href: "/cv.pdf",
    },
    contact: {
      label: "Let's talk",
      href: "#contact",
    },
  },
  stats: [
    { value: "5+", label: "Projects shipped" },
    { value: "14+", label: "Technologies" },
    { value: "2026", label: "Current year" },
    { value: "1:1", label: "Direct collaboration" },
  ] as AboutStatItem[],
};
