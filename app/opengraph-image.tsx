import { ImageResponse } from "next/og";

export const alt = "Fahri Maulana – Web Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(120% 120% at 85% 20%, #e8913a 0%, #9a4a1c 38%, #3a1a0b 75%)",
          color: "#fff6e6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "rgba(255, 246, 230, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            FM
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Fahri Maulana
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            I build digital experiences.
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#fbe6c6",
              maxWidth: 800,
            }}
          >
            Web developer · PHP, Laravel &amp; Modern Front End
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {["Laravel", "Full-Stack", "Indonesia"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                background: "rgba(255, 246, 230, 0.15)",
                border: "1px solid rgba(255, 246, 230, 0.3)",
                fontSize: 18,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
