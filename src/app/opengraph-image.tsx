import { ImageResponse } from "next/og";

// Auto-generated social preview (used by every page that doesn't define its own image).
export const alt = "Rehman Farouq – Flutter & Next.js Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg,#050816 0%,#1e1b4b 55%,#4c1d95 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 36 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 800,
              background: "linear-gradient(135deg,#3b82f6,#a855f7)",
            }}
          >
            RF
          </div>
          <div style={{ fontSize: 30, color: "#a5b4fc" }}>rehmanfarouq.site</div>
        </div>
        <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1.05 }}>Rehman Farouq</div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            marginTop: 18,
            background: "linear-gradient(90deg,#60a5fa,#c084fc,#f472b6)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Flutter &amp; Next.js Developer
        </div>
        <div style={{ fontSize: 30, marginTop: 36, color: "#cbd5e1" }}>
          Mobile apps · Web apps · UI/UX · Firebase · APIs
        </div>
      </div>
    ),
    size
  );
}
