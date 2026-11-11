import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "var(--bg)",
        color: "var(--ink)",
      }}
    >
      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px 64px",
        }}
      >
        <div
          style={{
            maxWidth: "520px",
            width: "100%",
            textAlign: "center",
            padding: "48px 32px",
            borderRadius: "28px",
            background: "var(--card)",
            border: "1px solid var(--line)",
            boxShadow: "var(--shadow)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "6px 14px",
              borderRadius: "999px",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              background: "color-mix(in srgb, var(--amber) 16%, transparent)",
              color: "var(--accent)",
              border: "1px solid color-mix(in srgb, var(--amber) 30%, transparent)",
              marginBottom: "20px",
            }}
          >
            404 ERROR
          </span>

          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              lineHeight: 1.15,
              fontWeight: 500,
              letterSpacing: "-0.025em",
              marginBottom: "14px",
            }}
          >
            Page not found
          </h1>

          <p
            style={{
              color: "var(--mute)",
              fontSize: "1rem",
              lineHeight: 1.6,
              marginBottom: "32px",
            }}
          >
            The page you are looking for does not exist or has been moved.
          </p>

          <Link href="/" className="btn">
            ← Back to home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
