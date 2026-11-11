export interface ProjectAction {
  label: string;
  href: string;
  isGhost?: boolean;
}

export interface ProjectItem {
  id: string;
  slug: string;
  category: "website" | "design";
  featured?: boolean;
  title: string;
  shortTitle: string;
  description: string;
  tags: string[];
  gradient: {
    c1: string;
    c2: string;
  };
  image?: string | {
    src: string;
    alt: string;
  };
  actions: ProjectAction[];
}

export const projectsData = {
  heading: "A collection of things I've designed and built.",
  projects: [
    // --- Featured Website Projects (Shown on Home) ---
    {
      id: "omah-vector",
      slug: "omah-vector",
      category: "website",
      featured: true,
      shortTitle: "OMAH VECTOR",
      title: "OMAH VECTOR – Digital Printing & Branding Studio",
      description:
        "A full-stack company website for a digital printing and branding business, featuring product catalogues, order tracking, and a portfolio section.",
      tags: ["Laravel 13", "Livewire 4", "Tailwind CSS", "MySQL"],
      gradient: {
        c1: "#c2652a",
        c2: "#3a1a0b",
      },
      image: "/images/omah-vector.png",
      actions: [
        { label: "View case study", href: "#contact" },
        { label: "Live demo", href: "#contact", isGhost: true },
      ],
    },
    {
      id: "kiana-furniture",
      slug: "kiana-furniture",
      category: "website",
      featured: true,
      shortTitle: "KIANA FURNITURE",
      title: "KIANA FURNITURE – Online Furniture Store",
      description:
        "An e-commerce storefront for a furniture brand, with product browsing, category filters, and an integrated product detail page.",
      tags: ["Laravel 13", "Livewire 4", "Tailwind CSS", "MySQL"],
      gradient: {
        c1: "#8a5a34",
        c2: "#2a1408",
      },
      image: "/images/kiana-furniture.png",
      actions: [
        { label: "View case study", href: "#contact" },
        { label: "Read specs", href: "#contact", isGhost: true },
      ],
    },
    // --- Design Projects ---
    {
      id: "desain-dashboard",
      slug: "desain-dashboard",
      category: "design",
      featured: false,
      shortTitle: "RIDESIGN DASHBOARD",
      title: "RIDESIGN – HR Dashboard UI Design",
      description:
        "A clean and data-rich HR management dashboard UI designed in Figma, featuring employee overviews, time tracking, project progress, and onboarding task panels.",
      tags: ["Figma", "UI Design", "Dashboard"],
      gradient: {
        c1: "#9a4a1c",
        c2: "#2a1408",
      },
      image: "/images/desain-dashboard.png",
      actions: [
        { label: "View design", href: "#contact" },
      ],
    },
    {
      id: "kritik-sosial",
      slug: "kritik-sosial",
      category: "design",
      featured: false,
      shortTitle: "PRAY FOR KALIMANTAN",
      title: "Pray for Kalimantan – Social Awareness Poster",
      description:
        "A bold social-awareness poster created in Canva, raising attention to the Kalimantan forest fire crisis (Karhutla) with high-contrast editorial typography and photography.",
      tags: ["Canva", "Graphic Design", "Poster"],
      gradient: {
        c1: "#c2652a",
        c2: "#5a2a12",
      },
      image: "/images/kritik-sosial.png",
      actions: [
        { label: "View design", href: "#contact" },
      ],
    },
    {
      id: "poster-niaga",
      slug: "poster-niaga",
      category: "design",
      featured: false,
      shortTitle: "NASGOGILA POSTER",
      title: "Nasgogila – Commercial Food Poster",
      description:
        "A vibrant promotional poster for a nasi goreng food brand, designed in Canva with bold typographic composition and food photography — optimised for social media.",
      tags: ["Canva", "Graphic Design", "Poster"],
      gradient: {
        c1: "#e8913a",
        c2: "#3a1a0b",
      },
      image: "/images/poster-niaga.png",
      actions: [
        { label: "View design", href: "#contact" },
      ],
    },
  ] as ProjectItem[],
};
