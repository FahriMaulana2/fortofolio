import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "ghost";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "solid",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const combinedClasses = `btn ${variant === "ghost" ? "ghost" : ""} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
