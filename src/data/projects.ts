export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  badge?: string;
  description: string;
  role: string;
  platform: "Web" | "Mobile (iOS/Android)" | "Cross-Platform (Web & Mobile)";
  platformType: "web" | "mobile" | "both";
  year: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  appStoreUrl?: string;
  featured: boolean;
  themeColor: string;
  caseStudy: {
    overview: string;
    roleDetails: string;
    architecture: string;
    keyFeatures: string[];
    technicalHighlights: string[];
    challenges: string;
    learnings: string;
  };
}

export const projects: Project[] = [
  {
    id: "summarizer",
    number: "01",
    title: "Summarizer",
    tagline: "AI Book Summarizer, Audio Generator & Live Voice Discussion Rooms",
    badge: "App Store Deployed",
    description: "A production mobile application deployed to the App Store that transforms books into concise AI-generated summaries and genre-tailored stories. Features background audio playback, live voice discussion rooms, reading streaks, and cloud favorites.",
    role: "React Native Developer",
    platform: "Mobile (iOS/Android)",
    platformType: "mobile",
    year: "2026",
    technologies: ["React Native", "Expo Audio", "LiveKit / WebRTC", "OpenAI API", "Background Audio", "TypeScript", "AsyncStorage"],
    liveUrl: "https://apps.apple.com",
    githubUrl: "https://github.com/dashboard",
    appStoreUrl: "https://apps.apple.com",
    featured: true,
    themeColor: "from-violet-600/20 to-purple-600/20",
    caseStudy: {
      overview: "Summarizer is a production AI-driven book intelligence mobile application published on the App Store. The app solves the time constraint problem for busy professionals and avid readers by generating structured, high-retention book summaries and custom genre stories. Beyond reading, it empowers continuous learning with a native background audio player, interactive voice discussion rooms for community book clubs, habit-forming daily streak tracking, and personalized bookmarking.",
      roleDetails: "Architected and engineered the mobile client in React Native. Developed custom background audio service handlers, integrated real-time WebRTC audio rooms, connected AI generation APIs, and managed App Store submission compliance.",
      architecture: "React Native client with Expo workflow, typed stack navigators, dedicated background audio state machine using native audio session controls, WebRTC room client for low-latency voice communications, and persistent offline storage.",
      keyFeatures: [
        "AI Book Summarization: Generate concise, structured summaries across chapters and key insights",
        "Background Audio Playback: Listen to generated book audios seamlessly while multitasking or with screen locked",
        "Genre-Based Story Generation: Create tailored fiction or non-fiction narratives across any genre",
        "Live Voice Discussion Rooms: Join interactive audio rooms to discuss summaries and ideas in real time",
        "Daily Reading Streaks: Gamified daily goal tracker to foster consistent reading and learning habits",
        "Favorites & Offline Library: Save favorite books and summaries for instant offline access"
      ],
      technicalHighlights: [
        "Seamless background audio continuity across device lock states with native media notifications",
        "Low-latency multi-peer voice room integration with active speaker indicators and mute controls",
        "Optimized token streaming parser providing instant progressive UI feedback during AI summary generation",
        "Zero-lag list rendering using FlashList with memoized book cover cards and streak widgets"
      ],
      challenges: "Ensuring uninterrupted background audio playback while simultaneously handling real-time audio room streams and managing platform-specific iOS audio session categories (playback vs playAndRecord).",
      learnings: "Mastered advanced React Native native audio session bridging, background task lifecycle management, and WebRTC connection resilience in mobile networks."
    }
  },
  {
    id: "slateapp",
    number: "02",
    title: "SlateApp",
    tagline: "Automated AI Presentation & Slide Deck Generation System",
    badge: "AI Product",
    description: "An intelligent presentation deck generator that transforms a topic prompt and slide count into structured, beautifully formatted multi-slide decks. Users select from curated visual templates, and the AI produces complete layouts with structured headlines, content cards, and presentation modes.",
    role: "React / Frontend Developer",
    platform: "Web",
    platformType: "web",
    year: "2026",
    technologies: ["React", "TypeScript", "Tailwind CSS", "OpenAI API", "Canvas / Slide Engine", "PDF Export", "Zustand"],
    liveUrl: "https://technext96.com",
    githubUrl: "https://github.com/dashboard",
    featured: true,
    themeColor: "from-indigo-600/20 to-blue-600/20",
    caseStudy: {
      overview: "SlateApp streamlines presentation creation from hours of manual formatting down to seconds. Users specify their presentation topic, target audience, and preferred slide count, then choose from a collection of professionally designed templates. The system's AI engine automatically orchestrates content hierarchy, generates concise bullet points, formats slide layouts, and provides full in-browser presentation mode and export capabilities.",
      roleDetails: "Designed the frontend component hierarchy, built the interactive template selector, created the dynamic slide rendering engine with keyboard presentation controls, and integrated the streaming AI generation pipeline.",
      architecture: "React single-page application with Zustand state store, modular slide layout renderer with responsive aspect ratio scaling (16:9), prompt engineering pipeline with JSON Schema structured outputs, and client-side presentation engine.",
      keyFeatures: [
        "Multi-Template Gallery: Choose from modern corporate, tech minimal, creative pitch, and editorial dark slide themes",
        "Topic & Slide Count Customizer: Tailor presentation depth by defining specific slide counts and target subject matter",
        "Automated AI Deck Generation: Generates complete structured slide outlines, content cards, takeaways, and titles",
        "Interactive Slide Editor & Reorder: Live inline editing of generated cards with drag-and-drop slide reordering",
        "Fullscreen Presentation Mode: Built-in presenter view with keyboard navigation and slide previews",
        "Instant Export: Export presentation decks to PDF and portable slide formats"
      ],
      technicalHighlights: [
        "16:9 responsive presentation canvas that automatically scales across any viewport resolution without layout distortion",
        "Structured JSON streaming with real-time incremental slide rendering as the AI generates each card",
        "Custom keyboard shortcuts for intuitive slide navigation, fullscreen toggle, and editor switching"
      ],
      challenges: "Ensuring layout stability and strict visual bounds across varying amounts of generated text per slide so that cards never overflow the 16:9 slide container.",
      learnings: "Developed deep expertise in responsive container query scaling, dynamic canvas layout calculation, and structured LLM output parsing."
    }
  },
  {
    id: "rideshare",
    number: "03",
    title: "RideShare",
    tagline: "Multi-Modal Vehicle Ride Booking & Dual-Role Driver Platform",
    badge: "Mobile Ecosystem",
    description: "A comprehensive multi-modal transportation platform enabling users to book across various vehicle types (taxis, wagons, buses, and private rides). Features precise destination routing, live geolocation tracking, and a seamless dual-account architecture for passengers and drivers.",
    role: "React Native Developer",
    platform: "Mobile (iOS/Android)",
    platformType: "mobile",
    year: "2025",
    technologies: ["React Native", "Expo", "Mapbox / Google Maps", "Geolocation", "WebSockets / Realtime", "TypeScript", "Tailwind (NativeWind)"],
    liveUrl: "https://technext96.com",
    githubUrl: "https://github.com/dashboard",
    featured: true,
    themeColor: "from-cyan-600/20 to-emerald-600/20",
    caseStudy: {
      overview: "RideShare is a modern mobility solution designed to accommodate diverse transit needs in one unified application. Unlike standard ride-hailing services restricted to private cars, RideShare supports multi-modal vehicle selections including taxis, multi-passenger wagons, urban buses, and private cars. The app features real-time route plotting, dynamic pricing estimates, and a dual-role account architecture allowing seamless switching between passenger booking and driver fleet management.",
      roleDetails: "Implemented the mobile user interface, map route rendering with animated vehicle markers, destination autocomplete search, and driver/passenger profile state synchronization.",
      architecture: "React Native architecture with map SDK integration, real-time WebSocket connection for live driver GPS coordination, role-based navigation routing (Passenger Stack / Driver Stack), and cached offline map layers.",
      keyFeatures: [
        "Multi-Modal Fleet Booking: Select and book Taxis, Wagons, Buses, or Private Rides tailored to budget and capacity",
        "Accurate Destination & Route Mapping: Interactive map with pin-drop destination selection and turn-by-turn route previews",
        "Dual-Role Account System: Complete onboarding and profile management for both passengers and verified drivers",
        "Live Driver & Vehicle Tracking: Real-time map marker animations with ETA calculations and vehicle details",
        "Ride History & Digital Receipts: Comprehensive trip history, fare breakdown, and rating system"
      ],
      technicalHighlights: [
        "Smooth 60fps map marker interpolations calculating heading angle and smooth coordinates transitions",
        "Role-based authentication routing with instant capability switching without session destruction",
        "Optimized background location tracking with battery-efficient geofencing algorithms"
      ],
      challenges: "Handling intermittent network connectivity in moving vehicles while maintaining synchronized ride status updates between passenger and driver devices.",
      learnings: "Gained extensive experience in geospatial mobile computing, location permission lifecycles, and resilient WebSocket state synchronization."
    }
  },
  {
    id: "resume-generator",
    number: "04",
    title: "Resume Generator",
    tagline: "Interactive Automated Resume Builder with Dynamic Styling & Instant Export",
    badge: "Web Tool",
    description: "A streamlined web application that empowers job seekers to build polished, recruiter-ready resumes in minutes. Features structured section inputs, curated font & layout themes, real-time dynamic preview rendering, and one-click PDF generation.",
    role: "React / Frontend Developer",
    platform: "Web",
    platformType: "web",
    year: "2025",
    technologies: ["React", "TypeScript", "Tailwind CSS", "PDF Generation", "Local Storage Sync", "Lucide React"],
    liveUrl: "https://technext96.com",
    githubUrl: "https://github.com/dashboard",
    featured: true,
    themeColor: "from-amber-600/20 to-rose-600/20",
    caseStudy: {
      overview: "The Resume Generator was designed to eliminate the frustration of resume formatting. By decoupling content input from visual presentation, users can focus on their achievements while the platform automatically handles layout spacing, typography hierarchy, margins, and page breaks. The application provides multiple styling presets (Modern Minimal, Executive Serif, Tech Monospace) with real-time responsive previewing and pixel-perfect PDF export.",
      roleDetails: "Engineered the entire frontend interface, designed modular resume section components, implemented the reactive preview canvas, and configured the high-fidelity PDF rendering engine.",
      architecture: "React frontend with normalized form state management, modular section schema (Experience, Education, Skills, Projects, Summary), live dynamic layout engine with CSS print media queries, and instant local storage auto-save.",
      keyFeatures: [
        "Structured Section Entry: Clean form inputs for personal info, work experience, education, skills, and portfolio links",
        "Curated Theme & Typography Selector: Toggle between Modern, Executive, Minimalist, and Tech typography presets",
        "Real-Time Reactive Preview: Split-screen editor with instant live document rendering as you type",
        "Custom Accent Palette: Personalize document highlight colors with contrast-checked color tokens",
        "Pixel-Perfect PDF Export: One-click export producing standard A4 / US Letter formatted PDFs ready for ATS parsers",
        "Local Storage Auto-Save: Continuous state preservation preventing accidental data loss"
      ],
      technicalHighlights: [
        "Pixel-perfect CSS print styles ensuring zero layout shift between on-screen preview and downloaded PDF",
        "Debounced state synchronization ensuring smooth typing performance with zero UI stutter",
        "Modular JSON resume data structure facilitating instant theme swapping without data re-entry"
      ],
      challenges: "Ensuring accurate multi-page break calculations and print-exact typography sizing across Chrome, Firefox, and Safari rendering engines.",
      learnings: "Deepened knowledge of browser print media engines, CSS @page layout rules, and performant live form state architecture."
    }
  },
  {
    id: "ai-study-assistant",
    number: "05",
    title: "AI Study Assistant",
    tagline: "Vector-Embedded RAG PDF Intelligence, Quiz Generation & Study Assistant",
    badge: "RAG & AI Intelligence",
    description: "An intelligent study copilot that transforms uploaded PDF textbooks and lecture notes into interactive knowledge bases. Powered by vector database embeddings and Retrieval-Augmented Generation (RAG) for document Q&A, chapter summaries, automatic quiz generation, and key vocabulary extraction.",
    role: "React & AI Frontend Developer",
    platform: "Cross-Platform (Web & Mobile)",
    platformType: "both",
    year: "2025",
    technologies: ["React", "Next.js", "TypeScript", "Vector DB / Embeddings", "RAG Pipeline", "PDF.js", "Tailwind CSS"],
    liveUrl: "https://technext96.com",
    githubUrl: "https://github.com/dashboard",
    featured: true,
    themeColor: "from-emerald-600/20 to-teal-600/20",
    caseStudy: {
      overview: "AI Study Assistant revolutionizes how students and researchers interact with dense academic materials. By indexing uploaded PDF documents into vector embeddings, the system enables semantic document Q&A where answers cite exact paragraphs and page numbers. The assistant also automatically generates comprehensive chapter summaries, interactive practice quizzes with instant grading, and highlighted vocabulary glossaries to accelerate exam preparation.",
      roleDetails: "Architected the study workbench interface, built the PDF viewer with highlight annotations, designed the conversational RAG interface, and implemented the interactive quiz assessment engine.",
      architecture: "Full-stack architecture with React/Next.js frontend, PDF parser with client-side text chunking, vector database semantic retrieval pipeline, streaming LLM chat endpoint, and interactive quiz state machine.",
      keyFeatures: [
        "PDF Document Indexing: Upload lecture slides, research papers, and textbooks with automated text extraction",
        "RAG-Powered Document Q&A: Ask questions and receive contextual answers with direct document citations",
        "Instant Chapter Summarization: Extract high-yield concepts, key formulas, and chapter summaries in seconds",
        "Automated Quiz Generation: Generates multiple-choice and conceptual quizzes with real-time score tracking",
        "Vocabulary & Concept Extraction: Automatically creates study flashcards and term glossaries from source material",
        "Study Progress Dashboard: Track mastery level, completed quizzes, and saved revision notes"
      ],
      technicalHighlights: [
        "RAG retrieval pipeline retrieving top-k relevant text chunks with cosine similarity ranking",
        "Split-screen PDF reader synchronized with AI conversation highlighting referenced document passages",
        "Interactive gamified quiz module with instant feedback explanations and spaced repetition indicators"
      ],
      challenges: "Structuring vector embeddings and managing chunk overlap to ensure the AI accurately answers nuanced questions without hallucinating beyond the provided PDF text.",
      learnings: "Gained comprehensive understanding of Retrieval-Augmented Generation (RAG) workflows, vector indexing strategies, and educational UX patterns."
    }
  }
];

