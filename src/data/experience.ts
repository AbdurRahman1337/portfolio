export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  period: string;
  isCurrent: boolean;
  type: "Full-time" | "Professional Role" | "Milestone";
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "technext",
    role: "Developer",
    company: "TechNext / Technext96",
    companyUrl: "https://technext96.com/",
    location: "Professional Developer",
    period: "Current Role",
    isCurrent: true,
    type: "Professional Role",
    summary: "Working across modern web and mobile application development, contributing to product implementation and frontend engineering.",
    responsibilities: [
      "Building and maintaining production-quality web applications using React, modern JavaScript, and TypeScript.",
      "Developing cross-platform mobile applications with React Native and Expo for iOS and Android.",
      "Designing responsive, accessible, and high-performance user interfaces with clean CSS and modern styling paradigms.",
      "Integrating RESTful APIs, managing asynchronous state workflows, and ensuring reliable data layer communication.",
      "Collaborating on application architecture, code reviews, and maintainable software patterns."
    ],
    technologies: ["React", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "REST APIs", "Expo", "Git"]
  },
  {
    id: "product-engineering",
    role: "Frontend & Mobile Application Engineer",
    company: "Independent Product Engineering",
    companyUrl: "https://github.com/dashboard",
    location: "App Store & Web Deployments",
    period: "2024 – Present",
    isCurrent: false,
    type: "Milestone",
    summary: "Architected and shipped multiple flagship AI-powered web and mobile applications including App Store published titles, RAG study copilots, and real-time transit systems.",
    responsibilities: [
      "Engineered and shipped Summarizer to the Apple App Store, featuring background audio playback, WebRTC voice discussion rooms, and OpenAI integration.",
      "Developed SlateApp, an AI slide deck engine that parses topics into structured multi-slide presentations with instant PDF export.",
      "Implemented RideShare, a multi-modal mobility platform supporting taxis, wagons, buses, and private rides with dual driver/passenger interfaces and GPS mapping.",
      "Designed and built RAG-powered AI Study Assistant with vector database embeddings for document Q&A and automated quiz generation."
    ],
    technologies: ["React", "React Native", "TypeScript", "Expo", "WebRTC", "Vector DB / RAG", "Tailwind CSS", "Git"]
  }
];

