"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { HeroCard } from "@/components/HeroCard";
import { projectsData } from "@/data/projects";

interface HeroProps {
  portraitImage?: {
    src: string;
    alt: string;
  };
}

export function Hero({ portraitImage }: HeroProps) {
  const src = portraitImage?.src || siteConfig.portrait;
  const alt = portraitImage?.alt || "Portrait of Fahri Maulana";

  return (
    <header className="hero" id="top">
      <div className="hero-grid">
        <div>
          <h1>{siteConfig.hero.headline}</h1>
          <p className="lead">{siteConfig.hero.lead}</p>
          <div className="row">
            <a className="btn" href={siteConfig.hero.primaryCta.href}>
              {siteConfig.hero.primaryCta.label}
            </a>
            <a
              className="btn ghost"
              href={siteConfig.hero.secondaryCta.href}
            >
              {siteConfig.hero.secondaryCta.label}
            </a>
          </div>
          <div className="chips">
            {siteConfig.hero.chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </div>

        <div className="hero-portrait-col">
          <HeroCard
            src={src}
            alt={alt}
            name="Fahri Maulana"
            role="Full-stack developer"
            projects={projectsData.projects}
          />
        </div>
      </div>
    </header>
  );
}
