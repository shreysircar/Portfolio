// src/data/projects.ts

export type Project = {
  slug: string;
  title: string;
  tagline: string;

  hero: {
    gradient: string; // Tailwind gradient class
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

export const projects: Project[] = [
  {
    slug: "vaaya",
    title: "Vaaya",
    tagline: "AI-driven conversational system engineered for scalable context retention.",

    hero: {
      gradient: "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0b1120]",
      desktopImage: "/projects/vaaya/desktop.png",
      mobileImage: "/projects/vaaya/mobile.png",
    },

    overview:
      "Vaaya is a conversational platform designed to maintain contextual continuity across sessions while ensuring scalability and API efficiency.",

    architecture: {
      hldImage: "/projects/vaaya/hld.png",
      lldImage: "/projects/vaaya/lld.png",
    },

    features: [
      {
        title: "Contextual Memory Layer",
        description:
          "Persistent session-based context management to preserve conversation flow.",
      },
      {
        title: "Token Optimized Prompting",
        description:
          "Efficient prompt structuring to reduce API latency and cost.",
      },
    ],

    scalability: [
      "Stateless backend architecture",
      "Horizontal scalability ready",
      "Optimized database indexing",
    ],

    challenges: [
      "Managing context window limitations",
      "Balancing response latency with token cost",
    ],

    tradeoffs: [
      "Chose stateless architecture over in-memory sessions for scalability.",
    ],

    learnings: [
      "Deepened understanding of distributed conversational state handling.",
    ],
  },

  {
    slug: "aegis",
    title: "Aegis",
    tagline: "Secure authentication and access control system built with role-based logic.",

    hero: {
      gradient: "bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#0f172a]",
      desktopImage: "/projects/aegis/desktop.png",
    },

    overview:
      "Aegis focuses on building secure authentication pipelines and scalable role-based access control mechanisms.",

    features: [
      {
        title: "JWT-Based Authentication",
        description:
          "Stateless token validation for scalable session handling.",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Granular permission management across user hierarchies.",
      },
    ],
  },

  {
    slug: "musings",
    title: "Musings",
    tagline: "Minimal publishing platform focused on structured content rendering.",

    hero: {
      gradient: "bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#0f172a]",
      desktopImage: "/projects/musings/desktop.png",
    },

    overview:
      "A structured blogging platform built with emphasis on SEO optimization and markdown rendering.",

    features: [
      {
        title: "Markdown Rendering Engine",
        description:
          "Dynamic content rendering with sanitized parsing pipeline.",
      },
    ],
  },

  {
    slug: "pagex",
    title: "PageX",
    tagline: "Component-driven frontend system engineered for modular scalability.",

    hero: {
      gradient: "bg-gradient-to-br from-[#0b1120] via-[#1e293b] to-[#0f172a]",
      desktopImage: "/projects/pagex/desktop.png",
    },

    overview:
      "PageX explores modular UI architecture with emphasis on component isolation and performance optimization.",

    features: [
      {
        title: "Reusable Component System",
        description:
          "Highly composable UI components with strict separation of concerns.",
      },
    ],
  },
];