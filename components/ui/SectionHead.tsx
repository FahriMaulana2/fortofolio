import React from "react";

interface SectionHeadProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHead({
  title,
  description,
  className = "",
}: SectionHeadProps) {
  return (
    <div className={`head ${className}`.trim()}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
