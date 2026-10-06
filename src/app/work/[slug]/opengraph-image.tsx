import { ImageResponse } from "next/og";
import { projects } from "@/data/projects";

export const runtime = "edge";
export const alt = "Project Case Study | Abdurrahman";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug) || projects[0];

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
          backgroundColor: "#06070b",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(99, 102, 241, 0.18) 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          padding: "70px 80px",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              padding: "8px 18px",
              borderRadius: "9999px",
              fontSize: 18,
              color: "#a5b4fc",
              fontWeight: 600,
            }}
          >
            <span>{project.number} / CASE STUDY</span>
            <span style={{ color: "#71717a" }}>•</span>
            <span style={{ color: "#e4e4e7" }}>{project.platform}</span>
          </div>

          <div
            style={{
              fontSize: 18,
              color: "#34d399",
              fontWeight: 600,
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              padding: "6px 14px",
              borderRadius: "9999px",
            }}
          >
            {project.badge || "Featured Product"}
          </div>
        </div>

        {/* Project Title & Tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              fontSize: 60,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            {project.title}
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 500,
              color: "#cbd5e1",
              maxWidth: "950px",
              lineHeight: 1.3,
            }}
          >
            {project.tagline}
          </div>
        </div>

        {/* Metrics Grid Row */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            width: "100%",
          }}
        >
          {project.metrics.slice(0, 3).map((m, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "14px",
                padding: "16px 22px",
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#818cf8",
                  marginBottom: "4px",
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#e2e8f0",
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
          }}
        >
          <div style={{ fontSize: 18, color: "#94a3b8" }}>
            Abdurrahman • React & React Native Developer
          </div>
          <div style={{ fontSize: 18, color: "#818cf8", fontWeight: 600 }}>
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

