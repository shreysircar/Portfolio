// src/data/projects.ts

export type ProjectLevel = "small" | "medium" | "flagship";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  level: ProjectLevel

hero: {
  colors: string[]; // 2 or 3 colors
  desktopImage?: string;
  mobileImage?: string;
  video?: string; 
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
    "Production-ready full-stack e-commerce platform engineered for scalability, secure role-based access, and real-world deployment.",

  level: "flagship",

  hero: {
    colors: ["#4FD1C5", "#A6EBF4", "#f1f1cf"],
    video: "/projects/vaaya/hero.mp4",
  },

  overview:
    "Vaaya is a fully deployed full-stack e-commerce web platform built for a single-seller business model, delivering a complete shopping experience alongside a secure admin dashboard. The system features a decoupled frontend–backend architecture, JWT-based role authentication, and a relational schema optimized for scalability. Designed with future expansion in mind, the platform can evolve into a multi-seller marketplace with minimal structural changes.",

  architecture: {
    hldImage: "/projects/vaaya/hld.png",
    lldImage: "/projects/vaaya/lld.png",

    hldDescription:
      "Vaaya follows a decoupled client–server architecture where the Next.js frontend communicates with a RESTful Express backend via secure JWT-authenticated API requests. The backend abstracts business logic into modular services and interacts with a PostgreSQL database through Prisma ORM. Cloud deployment separation across Vercel (frontend), Render (backend), and Neon (database) enables independent scaling, fault isolation, and production-grade infrastructure management.",

    lldDescription:
      "The backend implements a layered architecture composed of Routes, Middleware, Controllers, Services, and Data Access layers. JWT authentication middleware validates and authorizes requests before controller execution. Business logic is encapsulated within service modules to enforce separation of concerns, while Prisma ORM manages structured interaction with a normalized relational PostgreSQL schema handling users, products, categories, and order lifecycles."
  },

  features: [
    {
      title: "Full Customer Commerce Flow",
      description:
        "Complete shopping lifecycle including product browsing, category filtering, product detail views, cart management, wishlist, secure checkout, and order history tracking.",
    },
    {
      title: "Secure Role-Based Authentication",
      description:
        "JWT-based authentication system supporting user and admin roles with protected API routes and middleware-level authorization checks.",
    },
    {
      title: "Comprehensive Admin Dashboard",
      description:
        "Centralized admin interface for product CRUD operations, category and subcategory management, order tracking, user management, inventory control, and homepage content configuration.",
    },
    {
      title: "Production-Ready Cloud Deployment",
      description:
        "Fully deployed infrastructure with frontend on Vercel, backend on Render, and PostgreSQL hosted on Neon, demonstrating real-world CI/CD and environment-based configuration.",
    },
  ],

  scalability: [
    "Decoupled frontend (Next.js App Router) and backend (Express REST API) architecture",
    "Normalized PostgreSQL relational schema optimized for extensibility",
    "JWT-based role system designed for multi-seller marketplace expansion",
    "Cloud-hosted infrastructure enabling horizontal backend scaling",
    "Environment-based configuration for development and production separation",
  ],

  challenges: [
    "Designing a relational schema flexible enough for future multi-vendor support",
    "Implementing secure role-based route protection across frontend and backend layers",
    "Ensuring consistent state synchronization between cart, orders, and inventory",
    "Maintaining production stability across distributed cloud services (Vercel, Render, Neon)",
  ],

  tradeoffs: [
    "Structured as a single-seller system initially to simplify domain complexity while preserving marketplace scalability.",
    "Chose RESTful API design over GraphQL for clearer separation and simpler debugging in early production stages.",
    "Integrated admin dashboard within the same frontend codebase to optimize development velocity and deployment simplicity.",
  ],

  learnings: [
    "Strengthened understanding of full-stack system design and production deployment workflows.",
    "Deepened knowledge of authentication flows, token security, and middleware-based authorization.",
    "Improved database schema modeling for scalable commerce systems.",
    "Gained practical experience integrating multiple cloud services into a cohesive production environment.",
  ],
},
  {
    slug: "aegis",
    title: "Aegis",
    tagline:
      "Secure authentication and access control system built with role-based logic.",
    level: "medium",

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
    level: "small",
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
    level: "flagship",
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
  {
  slug: "fluxnav",
  title: "FluxNav",
  tagline:
    "Graph-powered metro navigation engine built for optimal route computation and real-world scalability.",
    level: "small",
  hero: {
    colors: ["#f59e0b", "#b45309", "#0f172a"],
    desktopImage: "/projects/fluxnav/desktop.png",
    mobileImage: "/projects/fluxnav/mobile.png",
  },

  overview:
    "FluxNav is a cross-platform Flutter application engineered to compute optimal Delhi Metro routes using graph algorithms. It models metro stations as nodes and connections as weighted edges, enabling shortest path computation, minimum interchange routing, and location-aware station discovery via Google Maps integration.",

  architecture: {
    hldImage: "/projects/fluxnav/hld.png",
    lldImage: "/projects/fluxnav/lld.png",
  },

  features: [
    {
      title: "Shortest Route Engine (Dijkstra)",
      description:
        "PriorityQueue-optimized Dijkstra implementation to compute minimum distance paths across weighted metro graphs.",
    },
    {
      title: "Minimum Interchange Path",
      description:
        "Custom graph traversal leveraging edge metadata (line color + distance) to minimize interchange transitions.",
    },
    {
      title: "Nearby Station Discovery",
      description:
        "Integrated Google Maps and Places API to detect and display nearby metro stations in real-time.",
    },
    {
      title: "Dual Route Output",
      description:
        "Returns optimized paths based on both shortest distance and least interchanges for user flexibility.",
    },
  ],

  scalability: [
    "Custom graph data structures for efficient node-edge lookup",
    "PriorityQueue optimization for reduced path computation time",
    "Separation of UI and algorithmic logic for maintainability",
    "Modular API layer for location services integration",
  ],

  challenges: [
    "Handling interchange logic without inflating graph complexity",
    "Balancing algorithm efficiency with real-time UI responsiveness",
    "Managing dynamic route rendering on map overlays",
  ],

  tradeoffs: [
    "Chose custom graph implementation over third-party libraries for full control.",
    "Accepted slightly higher memory usage to maintain dual-route computation capability.",
  ],

  learnings: [
    "Deepened understanding of applied graph algorithms in real-world systems.",
    "Strengthened architectural thinking in separating core logic from UI layers.",
    "Improved performance tuning using Dart collections and priority queues.",
  ],
},
];