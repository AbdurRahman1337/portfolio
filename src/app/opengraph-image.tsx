import { ImageResponse } from "next/og";
import { personalInfo } from "@/data/profile";

export const runtime = "edge";
export const alt = "Abdurrahman — React & React Native Developer";
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
          backgroundColor: "#050508",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(99, 102, 241, 0.15) 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          padding: "70px 80px",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {/* Top Header Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            padding: "10px 20px",
            borderRadius: "9999px",
            fontSize: 20,
            color: "#a5b4fc",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#10b981",
            }}
          />
          <span>REACT • REACT NATIVE DEVELOPER</span>
          <span style={{ color: "#71717a" }}>/</span>
          <span style={{ color: "#e4e4e7" }}>{personalInfo.company}</span>
        </div>

        {/* Central Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            {personalInfo.name}
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#cbd5e1",
              maxWidth: "900px",
              lineHeight: 1.3,
            }}
          >
            {personalInfo.heroStatement}
          </div>
        </div>

        {/* Bottom Tags Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            {["React", "React Native", "Expo", "TypeScript", "Next.js"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    backgroundColor: "rgba(99, 102, 241, 0.18)",
                    border: "1px solid rgba(99, 102, 241, 0.35)",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontSize: 18,
                    color: "#c7d2fe",
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#94a3b8",
              fontWeight: 500,
            }}
          >
            abdurrahman.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

