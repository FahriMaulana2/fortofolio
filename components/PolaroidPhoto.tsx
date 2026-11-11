"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface PolaroidPhotoProps {
  src?: string;
  alt: string;
  name: string;
  role: string;
  tilt?: number; // degrees, default -3
  priority?: boolean;
  tape?: boolean; // default true
  sizes?: string;
  className?: string;
}

export function PolaroidPhoto({
  src,
  alt,
  name,
  role,
  tilt = -3,
  priority = false,
  tape = true,
  sizes = "(max-width: 860px) 80vw, 36vw",
  className = "",
}: PolaroidPhotoProps) {
  const [imgError, setImgError] = useState(false);
  const hasPhoto = Boolean(src && src.trim().length > 0) && !imgError;

  // Initials fallback for the gradient placeholder
  const initials =
    name
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "FM";

  return (
    <figure
      className={`polaroid-frame ${tape ? "has-tape" : ""} ${className}`.trim()}
      style={
        {
          "--base-tilt": `${tilt}deg`,
          "--tilt": `${tilt}deg`,
        } as React.CSSProperties
      }
      aria-label={hasPhoto ? alt : `${name} - ${role}`}
    >
      <div className="polaroid-photo">
        {hasPhoto && src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="polaroid-img"
            style={{ objectPosition: "center 20%" }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="polaroid-placeholder" aria-hidden="true">
            {initials}
          </div>
        )}
      </div>

      <figcaption className="polaroid-caption">
        <div className="polaroid-name-row">
          <span className="polaroid-name">{name}</span>
          <span className="polaroid-dot" aria-hidden="true" />
        </div>
        <div className="polaroid-role">{role}</div>
      </figcaption>
    </figure>
  );
}
