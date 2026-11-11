import React from "react";
import { toolsData } from "@/data/tools";
import { SectionHead } from "@/components/ui/SectionHead";
import { Orbit } from "@/components/Orbit";
import { Marquee } from "@/components/Marquee";

export function Skills() {
  return (
    <section className="s band" id="skills">
      <div className="wrap">
        <div className="skills">
          <div>
            <SectionHead
              title={toolsData.heading}
              description={toolsData.lead}
            />
            <ul>
              {toolsData.categories.map((cat) => (
                <li key={cat.title}>
                  <b>{cat.title}</b>
                  <span>{cat.details}</span>
                </li>
              ))}
            </ul>
          </div>

          <Orbit />
        </div>

        <Marquee />
      </div>
    </section>
  );
}
