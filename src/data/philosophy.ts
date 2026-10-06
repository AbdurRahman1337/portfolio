export interface PhilosophyItem {
  number: string;
  title: string;
  statement: string;
  explanation: string;
  keywords: string[];
}

export const philosophies: PhilosophyItem[] = [
  {
    number: "01",
    title: "Build for Users",
    statement: "Software exists to solve real human problems cleanly and intuitively.",
    explanation: "Speed, responsiveness, and visual clarity are not decorative extras — they are fundamental usability requirements. Every millisecond of latency and every pixel of ambiguity impacts the user's focus.",
    keywords: ["Usability", "Accessibility", "Perceived Performance", "Intuitive Flow"],
  },
  {
    number: "02",
    title: "Keep Interfaces Simple",
    statement: "The best interface is the one that gets out of the way.",
    explanation: "Complexity should live in the architecture, not on the screen. Removing unnecessary elements, prioritizing strong typography, and creating intuitive visual hierarchy always beats gratuitous decoration.",
    keywords: ["Visual Hierarchy", "Clean Typography", "Minimalism", "Reduced Cognitive Load"],
  },
  {
    number: "03",
    title: "Write Maintainable Code",
    statement: "Code is read ten times more often than it is written.",
    explanation: "Prioritizing clear naming, strict TypeScript interfaces, component modularity, and predictable data flow ensures that codebases remain approachable and scalable over time.",
    keywords: ["TypeScript Safety", "Modular Components", "Predictable State", "Self-Documenting"],
  },
  {
    number: "04",
    title: "Design Before Implementation",
    statement: "Clear mental models prevent costly architectural rework.",
    explanation: "Understanding data contracts, component boundaries, and state lifecycles before writing UI code leads to cleaner interfaces, fewer edge-case bugs, and faster delivery.",
    keywords: ["Architecture First", "Data Contracts", "State Lifecycles", "Edge Case Planning"],
  },
  {
    number: "05",
    title: "Ship, Measure, Improve",
    statement: "Real feedback from production beats hypothetical assumptions.",
    explanation: "Iterative delivery paired with keen observation of how interfaces actually behave under real network conditions and diverse devices drives constant refinement and polish.",
    keywords: ["Iterative Delivery", "Continuous Refinement", "Cross-Device Testing", "Polish"],
  },
];

