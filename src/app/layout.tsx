import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { CommandPalette } from "@/components/layout/CommandPalette";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Abdurrahman | React & React Native Developer",
  description:
    "Portfolio of Abdurrahman, a React and React Native developer currently at TechNext building high-performance web and cross-platform mobile applications.",
  keywords: [
    "Abdurrahman",
    "React Developer",
    "React Native Developer",
    "Web Developer",
    "Mobile Developer",
    "Frontend Engineer",
    "TechNext",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Expo",
    "UI/UX Engineering"
  ],
  authors: [{ name: "Abdurrahman", url: "https://technext96.com/" }],
  creator: "Abdurrahman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdurrahman.dev",
    title: "Abdurrahman | React & React Native Developer",
    description:
      "React & React Native Developer building modern digital products for web and mobile. Currently developer at TechNext.",
    siteName: "Abdurrahman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdurrahman | React & React Native Developer",
    description:
      "React & React Native Developer building modern digital products for web and mobile. Currently developer at TechNext.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdurrahman",
    jobTitle: "React & React Native Developer",
    worksFor: {
      "@type": "Organization",
      name: "TechNext / Technext96",
      url: "https://technext96.com/",
    },
    knowsAbout: [
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Mobile Application Development",
      "Next.js",
      "Expo",
      "UI Engineering",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative selection:bg-indigo-500/30">
        <ThemeProvider>
          <NoiseOverlay />
          <CustomCursor />
          <CommandPalette />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
