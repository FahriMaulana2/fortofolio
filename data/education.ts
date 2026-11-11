export interface EducationItem {
  id: string;
  institution: string;
  program: string;
  level: string;
  period: string;
  status?: "completed" | "in-progress";
  description?: string;
  highlights?: string[];
  certificateUrl?: string; // link to view/verify an external certificate
}

export const educationData = {
  heading: "My education",
  subtitle: "Academic background, foundational studies, and specialized certifications.",
  items: [
    {
      id: "edu-1",
      institution: "SMK Negeri 1 Bangsri",
      program: "Software and Game Development (PPLG – Pengembangan Perangkat Lunak dan Gim)",
      level: "Vocational High School",
      period: "2024 — 2027",
      status: "in-progress",
      description:
        "Focusing on software development, web technologies, and application engineering.",
      highlights: ["Web Development", "Software Engineering", "Application Design"],
    },
    {
      id: "edu-2",
      institution: "SMP Negeri 4 Jepara",
      program: "Junior High School",
      level: "Secondary School",
      period: "2021 — 2024",
      status: "completed",
      description: "Completed junior high school education in Jepara, Central Java.",
      highlights: [],
    },
    {
      id: "edu-3",
      institution: "Dicoding",
      program: "Junior Data Scientist",
      level: "Professional Certification",
      period: "2024",
      status: "completed",
      description: "Earned the Junior Data Scientist certification from Dicoding, covering data science fundamentals and Python.",
      highlights: ["Data Science", "Python", "Machine Learning Basics"],
      certificateUrl:
        "https://drive.google.com/file/d/1pm5fb5aQs3CaciiHgz3K8bPDz2BjyzgX/view",
    },
  ] as EducationItem[],
};
