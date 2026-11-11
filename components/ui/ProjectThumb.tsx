"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProjectThumbProps {
  image?: string | { src: string; alt?: string };
  title: string;
  shortTitle: string;
  sizes?: string;
  priority?: boolean;
}

export function ProjectThumb({
  image,
  title,
  shortTitle,
  sizes = "(max-width: 860px) 90vw, 45vw",
  priority = false,
}: ProjectThumbProps) {
  const [hasError, setHasError] = useState(false);
  const src = typeof image === "string" ? image : image?.src;
  const showImage = Boolean(src && src.trim().length > 0) && !hasError;

  if (showImage && src) {
    return (
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
        onError={() => setHasError(true)}
      />
    );
  }

  return <>{shortTitle}</>;
}
