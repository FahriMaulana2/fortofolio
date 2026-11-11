import React from "react";
import { journeyData } from "@/data/journey";
import { SectionHead } from "@/components/ui/SectionHead";

export function Journey() {
  return (
    <section className="s band" id="journey">
      <div className="wrap">
        <SectionHead title={journeyData.heading} />
        <div className="time">
          {journeyData.items.map((item) => (
            <div
              key={item.year}
              className={item.isNow ? "now" : undefined}
            >
              <small>{item.year}</small>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
