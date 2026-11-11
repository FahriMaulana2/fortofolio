export interface JourneyItem {
  year: string;
  title: string;
  description: string;
  isNow?: boolean;
}

export const journeyData = {
  heading: "Learning, building, and growing along the way.",
  items: [
    {
      year: "2021",
      title: "Junior High School",
      description: "Started at SMP Negeri 4 Jepara, building curiosity for technology.",
    },
    {
      year: "2024",
      title: "Vocational High School",
      description: "Enrolled in SMK Negeri 1 Bangsri, PPLG program, and began learning software development and web technologies.",
    },
    {
      year: "2024",
      title: "First Certification",
      description: "Earned the Dicoding Junior Data Scientist certification, exploring data science and Python.",
    },
    {
      year: "Now",
      title: "Building & Designing",
      description: "Developing full-stack web applications with Laravel & Livewire, and crafting UI and graphic designs with Figma and Canva.",
      isNow: true,
    },
  ] as JourneyItem[],
};
