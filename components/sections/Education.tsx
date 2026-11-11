import React from "react";
import { educationData } from "@/data/education";
import { SectionHead } from "@/components/ui/SectionHead";

export function Education() {
  return (
    <section className="s band" id="education">
      <div className="wrap">
        <SectionHead
          title={educationData.heading}
          description={educationData.subtitle}
        />

        <div className="education-timeline">
          {educationData.items.map((item) => {
            const isInProgress = item.status === "in-progress";

            return (
              <div
                key={item.id}
                className={`education-row ${isInProgress ? "in-progress" : ""}`}
              >
                {/* Period Column */}
                <div className="education-period">
                  <span>{item.period}</span>
                  {isInProgress && (
                    <span className="education-status-tag">In progress</span>
                  )}
                </div>

                {/* Timeline node */}
                <div className="education-node" aria-hidden="true" />

                {/* Card Column */}
                <div className={`education-card ${isInProgress ? "now" : ""}`}>
                  <div className="education-card-header">
                    <h3>{item.institution}</h3>
                    <span className="education-level">{item.level}</span>
                  </div>

                  <p className="education-program">{item.program}</p>

                  {item.description && (
                    <p className="education-desc">{item.description}</p>
                  )}

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="tags" style={{ marginTop: "16px", marginBottom: 0 }}>
                      {item.highlights.slice(0, 3).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
