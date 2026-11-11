import React from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { SectionHead } from "@/components/ui/SectionHead";
import { ProjectThumb } from "@/components/ui/ProjectThumb";

export function Work() {
  // Show ONLY featured projects with category === 'website', max 3
  const featuredWebProjects = projectsData.projects
    .filter((proj) => proj.featured && proj.category === "website")
    .slice(0, 3);

  return (
    <section className="s" id="projects">
      <div className="wrap">
        <SectionHead title={projectsData.heading} />

        {featuredWebProjects.map((proj) => (
          <article key={proj.id} className="proj">
            <div
              className="thumb"
              style={
                {
                  "--c1": proj.gradient.c1,
                  "--c2": proj.gradient.c2,
                } as React.CSSProperties
              }
            >
              <ProjectThumb
                image={proj.image}
                title={proj.title}
                shortTitle={proj.shortTitle}
                sizes="(max-width: 860px) 90vw, 45vw"
              />
            </div>
            <div className="info">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tags">
                {proj.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="row">
                {proj.actions.map((act) => (
                  <a
                    key={act.label}
                    className={`btn ${act.isGhost ? "ghost" : ""}`.trim()}
                    href={act.href}
                  >
                    {act.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}

        {/* Centered "View all projects" button */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
          <Link href="/projects" className="btn">
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
