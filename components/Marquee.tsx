import React from "react";
import { toolsData } from "@/data/tools";

export function Marquee() {
  // Duplicate the list to ensure a seamless infinite scrolling loop
  const marqueeItems = [...toolsData.marqueeTools, ...toolsData.marqueeTools];

  return (
    <div className="marq" aria-hidden="true">
      <div className="track">
        {marqueeItems.map((tool, index) => {
          const logoColor = tool.color || `#${tool.icon.hex}`;
          return (
            <span key={`${tool.name}-${index}`}>
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill={logoColor}
                aria-hidden="true"
                style={{ flexShrink: 0 }}
              >
                <path d={tool.icon.path} />
              </svg>
              {tool.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
