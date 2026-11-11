"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ProjectTabs } from "@/components/ProjectTabs";
import { SectionHead } from "@/components/ui/SectionHead";
import { ProjectThumb } from "@/components/ui/ProjectThumb";

export function ProjectsView() {
  const searchParams = useSearchParams();
  const rawCategory = searchParams.get("category");
  const activeCategory = (rawCategory || "all").toLowerCase();

  const allProjects = projectsData.projects;
  const websiteProjects = useMemo(
    () => allProjects.filter((p) => p.category === "website"),
    [allProjects]
  );
  const designProjects = useMemo(
    () => allProjects.filter((p) => p.category === "design"),
    [allProjects]
  );

  const categories = [
    { id: "all", label: "All", count: allProjects.length },
    { id: "website", label: "Website", count: websiteProjects.length },
    { id: "design", label: "Design", count: designProjects.length },
  ];

  const displayedWebsites = useMemo(() => {
    if (activeCategory === "all" || activeCategory === "website") {
      return websiteProjects;
    }
    return [];
  }, [activeCategory, websiteProjects]);

  const displayedDesigns = useMemo(() => {
    if (activeCategory === "all" || activeCategory === "design") {
      return designProjects;
    }
    return [];
  }, [activeCategory, designProjects]);

  const totalDisplayed = displayedWebsites.length + displayedDesigns.length;

  return (
    <div>
      {/* Header band on --sand */}
      <header
        className="projects-header-band"
        style={{
          background: "var(--sand)",
          borderBottom: "1px solid var(--line)",
          paddingTop: "128px",
          paddingBottom: "48px",
        }}
      >
        <div className="wrap">
          <SectionHead
            title="All projects"
            description="A comprehensive archive of production websites, full-stack web applications, and brand identity design systems."
          />

          <div style={{ marginTop: "32px" }}>
            <ProjectTabs
              categories={categories}
              activeCategory={activeCategory}
            />
          </div>
        </div>
      </header>

      {/* Grid area on --bg */}
      <div
        className="projects-grid-area"
        style={{
          background: "var(--bg)",
          padding: "48px 0 96px",
        }}
      >
        <div className="wrap">
          <div
            id="projects-content-panel"
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory}`}
            tabIndex={0}
          >
            {totalDisplayed === 0 ? (
              <div className="projects-empty-state">
                <p>No projects found in this category.</p>
                <Link href="/projects" className="btn ghost" style={{ marginTop: "16px" }}>
                  Back to all projects
                </Link>
              </div>
            ) : (
              <div className="projects-container">
                {/* Website Projects: Wide alternating cards */}
                {displayedWebsites.length > 0 && (
                  <div className="websites-section">
                    {activeCategory === "all" && (
                      <h3 className="projects-subheading">Websites &amp; Platforms</h3>
                    )}
                    <div className="websites-list">
                      {displayedWebsites.map((proj) => (
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
                </div>
              </div>
            )}

            {/* Design Projects: 3-column image-first grid */}
            {displayedDesigns.length > 0 && (
              <div className="designs-section" style={{ marginTop: activeCategory === "all" ? "56px" : "0" }}>
                {activeCategory === "all" && (
                  <h3 className="projects-subheading">Design &amp; Identity</h3>
                )}
                <div className="design-grid">
                  {displayedDesigns.map((proj) => (
                    <article key={proj.id} className="design-card">
                      <div
                        className="design-thumb"
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
                          sizes="(max-width: 520px) 100vw, (max-width: 860px) 50vw, 360px"
                        />
                      </div>
                      <div className="design-card-body">
                        <h3>{proj.title}</h3>
                        <p>{proj.description}</p>
                        <div className="tags" style={{ marginTop: "12px", marginBottom: "16px" }}>
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
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Back to home link */}
      <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid var(--line)" }}>
        <Link
          href="/"
          style={{
            color: "var(--accent)",
            fontWeight: 500,
            fontSize: "0.95rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          ← Back to home
        </Link>
      </div>
    </div>
  </div>
</div>
  );
}

