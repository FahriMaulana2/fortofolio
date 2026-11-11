"use client";

import React from "react";
import { aboutData } from "@/data/about";
import { PolaroidPhoto } from "@/components/PolaroidPhoto";

export function About() {
  const photoSrc =
    aboutData.photo ||
    (typeof aboutData.portrait?.image === "object"
      ? aboutData.portrait.image?.src
      : aboutData.portrait?.image);
  const photoAlt =
    (typeof aboutData.portrait?.image === "object" && aboutData.portrait.image?.alt)
      ? aboutData.portrait.image.alt
      : "Fahri Maulana at work";

  return (
    <section className="s" id="about">
      <div className="wrap">
        {/* Two-column biography and portrait */}
        <div className="about-main-grid">
          <div>
            <h2>{aboutData.heading}</h2>
            <div className="about-story">
              {aboutData.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quick facts */}
            <div className="quick-facts">
              {aboutData.quickFacts.map((fact) => (
                <div key={fact.label} className="fact-row">
                  <span className="fact-label">{fact.label}</span>
                  <span className="fact-value">{fact.value}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="row" style={{ marginTop: "28px" }}>
              <a
                className="btn"
                href={aboutData.actions.downloadCv.href}
                download="cv.pdf"
              >
                {aboutData.actions.downloadCv.label}
              </a>
              <a
                className="btn ghost"
                href={aboutData.actions.contact.href}
              >
                {aboutData.actions.contact.label}
              </a>
            </div>
          </div>

          <div className="about-portrait-col">
            <PolaroidPhoto
              src={photoSrc}
              alt={photoAlt}
              name={aboutData.portrait?.tag?.title || "Fahri Maulana"}
              role={aboutData.portrait?.tag?.subtitle || "Full-stack developer"}
              tilt={2.5}
              tape={false}
              priority={false}
              sizes="(max-width: 860px) 80vw, 32vw"
            />
          </div>
        </div>

        {/* How I work: Principles */}
        <div style={{ marginTop: "64px" }}>
          <h3 style={{ fontSize: "1.3rem", marginBottom: "20px" }}>
            {aboutData.principlesHeading}
          </h3>
          <div className="principles-grid">
            {aboutData.principles.map((principle) => (
              <div key={principle.title} className="principle-card">
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4-column stats row */}
        <div className="stats">
          {aboutData.stats.map((stat) => (
            <div key={stat.label}>
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
