import React from "react";
import { toolsData } from "@/data/tools";

export function Orbit() {
  const innerRingTools = toolsData.orbitTools.filter((tool) => tool.ring === 1);
  const outerRingTools = toolsData.orbitTools.filter((tool) => tool.ring === 2);

  return (
    <div
      className="orbit"
      role="img"
      aria-label={toolsData.orbitAriaLabel}
    >
      {/* Inner ring */}
      <div className="ring r1">
        {innerRingTools.map((tool) => {
          const logoColor = tool.color || `#${tool.icon.hex}`;
          return (
            <div
              key={tool.name}
              className="it"
              style={
                {
                  "--a": tool.angle,
                  "--r": 0.22,
                } as React.CSSProperties
              }
            >
              <div
                className="chip"
                title={tool.name}
                aria-label={tool.name}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="55%"
                  height="55%"
                  fill={logoColor}
                  aria-hidden="true"
                  style={{ display: "block" }}
                >
                  <path d={tool.icon.path} />
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      {/* Outer ring */}
      <div className="ring r2">
        {outerRingTools.map((tool) => {
          const logoColor = tool.color || `#${tool.icon.hex}`;
          return (
            <div
              key={tool.name}
              className="it"
              style={
                {
                  "--a": tool.angle,
                  "--r": 0.4,
                } as React.CSSProperties
              }
            >
              <div
                className="chip"
                title={tool.name}
                aria-label={tool.name}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="55%"
                  height="55%"
                  fill={logoColor}
                  aria-hidden="true"
                  style={{ display: "block" }}
                >
                  <path d={tool.icon.path} />
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      {/* Center Hub */}
      <div className="hub">
        <div>
          {toolsData.hub.title}
          <small>{toolsData.hub.subtitle}</small>
        </div>
      </div>
    </div>
  );
}
