import React, { Suspense } from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { ProjectsView } from "@/components/ProjectsView";
import { Footer } from "@/components/sections/Footer";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Projects | ${siteConfig.name}`,
    description:
      "Explore the full collection of websites, web applications, and digital design projects crafted by Fahri Maulana.",
    alternates: {
      canonical: "/projects",
    },
    openGraph: {
      title: `Projects | ${siteConfig.name}`,
      description:
        "Explore the full collection of websites, web applications, and digital design projects crafted by Fahri Maulana.",
      url: `${siteConfig.url}/projects`,
    },
  };
}

export default function ProjectsPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)", color: "var(--ink)" }}>
      <main style={{ flex: 1 }}>
        <Suspense fallback={<div className="wrap" style={{ paddingTop: "140px" }}><div className="mute">Loading projects...</div></div>}>
          <ProjectsView />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

