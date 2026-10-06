export interface Technology {
  name: string;
  category: "Frameworks & Mobile" | "Languages" | "UI & Styling" | "Tooling & Backend";
  description: string;
  context: string;
  highlight: boolean;
}

export const technologyCategories = [
  "All",
  "Frameworks & Mobile",
  "Languages",
  "UI & Styling",
  "Tooling & Backend",
] as const;

export const technologies: Technology[] = [
  // Frameworks & Mobile
  {
    name: "React",
    category: "Frameworks & Mobile",
    description: "Component architecture, hooks, state lifecycle, and interactive UI engineering.",
    context: "Primary library for production web applications and responsive web products.",
    highlight: true,
  },
  {
    name: "React Native",
    category: "Frameworks & Mobile",
    description: "Cross-platform mobile application development for iOS and Android.",
    context: "Native device bridges, gestures, offline resilience, and mobile screen layouts.",
    highlight: true,
  },
  {
    name: "Next.js",
    category: "Frameworks & Mobile",
    description: "Modern full-stack React framework with App Router, SSR, and route handlers.",
    context: "Web performance, SEO optimization, and structured routing.",
    highlight: true,
  },
  {
    name: "Expo",
    category: "Frameworks & Mobile",
    description: "Ecosystem and tooling for streamlined React Native development and deployments.",
    context: "Rapid cross-platform mobile prototyping, build workflows, and OTA updates.",
    highlight: true,
  },

  // Languages
  {
    name: "JavaScript",
    category: "Languages",
    description: "Modern ES6+ syntax, asynchronous programming, event loop, and DOM APIs.",
    context: "Core foundational language for all client-side web and dynamic features.",
    highlight: true,
  },
  {
    name: "TypeScript",
    category: "Languages",
    description: "Static typing, generics, strict interface contracts, and type safety.",
    context: "Scalable codebase architecture preventing runtime defects.",
    highlight: true,
  },
  {
    name: "HTML5",
    category: "Languages",
    description: "Semantic document structuring, accessibility landmarks, and web standards.",
    context: "Accessible, crawlable, and clean DOM hierarchies.",
    highlight: false,
  },
  {
    name: "CSS3",
    category: "Languages",
    description: "Modern layouts (Flexbox, Grid), animations, transitions, and responsive design.",
    context: "Fluid styling, custom properties, and precision visual execution.",
    highlight: false,
  },

  // UI & Styling
  {
    name: "Tailwind CSS",
    category: "UI & Styling",
    description: "Utility-first CSS framework for rapid, design-system compliant interfaces.",
    context: "Consistent design tokens, responsive breakpoints, and dark mode themes.",
    highlight: true,
  },
  {
    name: "Responsive Design",
    category: "UI & Styling",
    description: "Multi-device layout engineering from 360px mobile screens to ultra-wide displays.",
    context: "Fluid clamp typography, container queries, and adaptive UI patterns.",
    highlight: false,
  },
  {
    name: "Design Systems",
    category: "UI & Styling",
    description: "Reusable component libraries, design tokens, and consistent aesthetic patterns.",
    context: "Standardized buttons, modals, form inputs, and navigation patterns.",
    highlight: false,
  },

  // Tooling & Backend
  {
    name: "REST APIs",
    category: "Tooling & Backend",
    description: "HTTP protocol, asynchronous client-server communication, and JSON endpoints.",
    context: "CRUD operations, pagination, search queries, and error handling.",
    highlight: true,
  },
  {
    name: "Git & GitHub",
    category: "Tooling & Backend",
    description: "Version control, branching strategies, pull requests, and collaborative workflows.",
    context: "Code reviews, version history, and continuous integration hygiene.",
    highlight: true,
  },
  {
    name: "Firebase",
    category: "Tooling & Backend",
    description: "Authentication, Firestore cloud database, and cloud service integration.",
    context: "Rapid backend scaffolding, real-time sync, and user session management.",
    highlight: false,
  },
  {
    name: "Node.js Basics",
    category: "Tooling & Backend",
    description: "Server-side JavaScript runtime and npm ecosystem management.",
    context: "Build scripting, API mock servers, and development tooling.",
    highlight: false,
  },
];

