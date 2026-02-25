// src/data/projects.ts

export type Project = {
  slug: string;
  title: string;
  tagline: string;

hero: {
  colors: string[]; // 2 or 3 colors
  desktopImage?: string;
  mobileImage?: string;
};

  overview: string;

  architecture?: {
    hldImage?: string;
    lldImage?: string;
  };

  features?: {
    title: string;
    description: string;
  }[];

  scalability?: string[];

  challenges?: string[];

  tradeoffs?: string[];

  learnings?: string[];
};
// src/data/projects.ts

export const projects: Project[] = [
  {
    slug: "vaaya",
    title: "Vaaya",
    tagline:
      "AI-driven conversational system engineered for scalable context retention.",

    hero: {
    colors: ["#0ea5e9", "#2563eb", "#0f172a"],

      desktopImage: "/projects/vaaya/desktop.png",
      mobileImage: "/projects/vaaya/mobile.png",
    },

    overview:
      "Vaaya is a conversational platform designed to maintain contextual continuity across sessions while ensuring scalability, modular API layers, and optimized token usage.",

    architecture: {
      hldImage: "/projects/vaaya/hld.png",
      lldImage: "/projects/vaaya/lld.png",
    },

    features: [
      {
        title: "Contextual Memory Layer",
        description:
          "Persistent session-based context management to preserve conversation flow across requests.",
      },
      {
        title: "Token Optimized Prompting",
        description:
          "Structured prompts to reduce latency and API cost while maintaining response quality.",
      },
    ],

    scalability: [
      "Stateless backend architecture",
      "Horizontal scaling readiness",
      "Optimized database indexing strategy",
    ],

    challenges: [
      "Managing context window limitations in LLM APIs",
      "Balancing latency and token cost efficiency",
    ],

    tradeoffs: [
      "Chose stateless architecture over in-memory session storage for scalability.",
      "Accepted slight context trimming to reduce token consumption.",
    ],

    learnings: [
      "Strengthened understanding of distributed conversational state management.",
      "Improved API design discipline under cost-performance constraints.",
    ],
  },

  {
    slug: "aegis",
    title: "Aegis",
    tagline:
      "Secure authentication and access control system built with role-based logic.",

    hero: {
  colors: ["#10b981", "#065f46", "#111827"],
      desktopImage: "/projects/aegis/desktop.png",
    },

    overview:
      "Aegis is a secure authentication system engineered with modular backend architecture, scalable token validation, and structured access control layers.",

    architecture: {
      hldImage: "/projects/aegis/hld.png",
      lldImage: "/projects/aegis/lld.png",
    },

    features: [
      {
        title: "JWT-Based Authentication",
        description:
          "Stateless token validation to enable scalable user sessions.",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Granular permission management across hierarchical user roles.",
      },
    ],

    scalability: [
      "Stateless authentication model",
      "Database indexing for role queries",
      "Modular middleware separation",
    ],

    challenges: [
      "Designing secure yet maintainable authorization layers",
      "Preventing token misuse and replay attacks",
    ],

    tradeoffs: [
      "Selected JWT over session storage to enable horizontal scalability.",
      "Accepted slightly larger token payload for simpler permission checks.",
    ],

    learnings: [
      "Gained practical experience in authentication security patterns.",
      "Deepened understanding of API boundary protection.",
    ],
  },

  {
    slug: "musings",
    title: "Musings",
    tagline:
      "Minimal publishing platform focused on structured content rendering.",

    hero: {
  colors: ["#a78bfa", "#6366f1", "#1e293b"],
      desktopImage: "/projects/musings/desktop.png",
    },

    overview:
      "Musings is a structured publishing platform designed with clean content pipelines, SEO optimization, and modular frontend architecture.",

    architecture: {
      hldImage: "/projects/musings/hld.png",
      lldImage: "/projects/musings/lld.png",
    },

    features: [
      {
        title: "Markdown Rendering Engine",
        description:
          "Dynamic content rendering with sanitized parsing pipeline.",
      },
      {
        title: "SEO Optimized Routing",
        description:
          "Structured dynamic routes for improved discoverability.",
      },
    ],

    scalability: [
      "Static generation readiness",
      "Optimized image handling",
      "Lightweight content schema",
    ],

    challenges: [
      "Balancing dynamic flexibility with static rendering performance",
      "Ensuring content sanitization without breaking formatting",
    ],

    tradeoffs: [
      "Chose markdown pipeline over full CMS for simplicity.",
      "Accepted limited WYSIWYG capability for cleaner architecture.",
    ],

    learnings: [
      "Improved understanding of rendering strategies in modern frameworks.",
      "Learned to optimize structured content systems for performance.",
    ],
  },

  {
    slug: "pagex",
    title: "PageX",
    tagline:
      "Component-driven frontend system engineered for modular scalability.",

    hero: {
  colors: ["#06b6d4", "#0ea5e9", "#0b1120"],
      desktopImage: "/projects/pagex/desktop.png",
    },

    overview:
      "PageX explores frontend modularity with reusable component systems, predictable state flows, and performance-conscious rendering.",

    architecture: {
      hldImage: "/projects/pagex/hld.png",
      lldImage: "/projects/pagex/lld.png",
    },

    features: [
      {
        title: "Reusable Component System",
        description:
          "Highly composable UI components with strict separation of concerns.",
      },
      {
        title: "Predictable State Management",
        description:
          "Structured state boundaries to prevent cross-component coupling.",
      },
    ],

    scalability: [
      "Lazy-loaded component modules",
      "Optimized re-render control",
      "Code splitting strategy",
    ],

    challenges: [
      "Preventing component over-coupling",
      "Maintaining performance across complex layouts",
    ],

    tradeoffs: [
      "Prioritized modularity over rapid prototyping speed.",
      "Accepted slightly deeper component hierarchy for clarity.",
    ],

    learnings: [
      "Refined understanding of frontend architecture patterns.",
      "Improved discipline in component isolation design.",
    ],
  },
];