export type ProjectCategory = "academic" | "ai" | "industry";

export type IndustrySector =
  | "Financial Services"
  | "Healthcare and Life Sciences"
  | "Government and Public"
  | "Operations"
  | "Risk and Compliance";

export type ProjectLink = {
  label: string;
  url: string;
  type: "demo" | "github" | "figma" | "case-study" | "video";
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  sector?: IndustrySector;
  links: ProjectLink[];
  year: string;
};

export type ProjectGroup = {
  id: ProjectCategory;
  title: string;
  blurb: string;
  projects: Project[];
};

// Maps each industry sector to a CSS variable accent color
export const SECTOR_COLORS: Record<IndustrySector, string> = {
  "Financial Services": "var(--terracotta)",
  "Healthcare and Life Sciences": "var(--mustard)",
  "Government and Public": "var(--sage)",
  Operations: "var(--clay)",
  "Risk and Compliance": "var(--dusty-blue)", // add --dusty-blue to your CSS vars (see note below)
};

export const projectGroups: ProjectGroup[] = [
  {
    id: "academic",
    title: "Academic Projects",
    blurb: "Coursework that shaped how I think about users and systems.",
    projects: [
      {
        slug: "studybuddy",
        title: "StudyBuddy",
        tagline: "AI-powered study matchmaking — concept design",
        description:
          "Led a 4-person team conceptualizing a mobile app that connects students for real-time study sessions. Explored AI-driven matchmaking using course enrollment, availability, and study preferences. Applied HCI methods (heuristic evaluations, cognitive walkthroughs, user interviews) to refine flows, and built low-fi wireframes plus interactive high-fi prototypes in Figma simulating swipe-to-match and study-style filtering.",
        tech: ["Figma", "HCI Research", "Prototyping", "User Testing"],
        category: "academic",
        year: "2025",
        links: [
          {
            label: "View Figma Prototype",
            url: "https://lid-purple-03986026.figma.site/?fbclid=PAVERFWARnJn5leHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAac8jaqgLLV5ESbyPRdW2D1gxh45B4ZrK2jRgdBbkhYynZW3kSdsW19GzVtDhQ_aem_YRlED9LjePTykO1n3OB-Qw",
            type: "figma",
          },
        ],
      },
    ],
  },
  {
    id: "ai",
    title: "AI Projects",
    blurb: "Personal builds exploring LLMs, agents, and applied ML.",
    projects: [
      {
        slug: "serenedesk",
        title: "SereneDesk",
        tagline: "AI-backed workspace mood optimizer",
        description:
          "Streamlit dashboard that monitors ambient noise and transcribes voice check-ins to identify stress patterns. Uses GPT-4 sentiment analysis to generate wellness suggestions, journaling prompts, and ambient soundscapes. Built interactive Plotly dashboards and a monitoring framework to track recommendation effectiveness.",
        tech: [
          "Python",
          "OpenAI Whisper",
          "GPT-4",
          "Streamlit",
          "Plotly",
          "pandas",
        ],
        category: "ai",
        year: "2025",
        links: [
          {
            label: "GitHub",
            url: "https://github.com/sree-j04/serenedesk",
            type: "github",
          },
        ],
      },
      {
        slug: "pathfinder-ai",
        title: "PathFinder AI",
        tagline: "Career advisor for CS students",
        description:
          "AI-powered career guidance tool offering personalized recommendations to CS students exploring paths beyond software engineering. Uses GPT-4 with JSON-based persona profiling and dynamic conversation routing for context-aware guidance. Built Streamlit prototypes and ran user testing to iteratively refine clarity and usability.",
        tech: ["Python", "Streamlit", "GPT-4 API", "JSON"],
        category: "ai",
        year: "2024",
        links: [
          {
            label: "GitHub",
            url: "https://github.com/sree-j04/pathfinder-ai",
            type: "github",
          },
        ],
      },
    ],
  },
  {
    id: "industry",
    title: "Industry AI Lab",
    blurb:
      "Ongoing work applying AI to real-world business problems across finance, healthcare, and operations. Updated as new projects ship.",
    projects: [
      {
        slug: "regulatory-change-monitor",
        title: "Regulatory Change Monitor",
        tagline: "Autonomous regulatory intelligence for financial compliance",
        description:
          "Most compliance teams at large financial institutions still have analysts whose job is basically reading government websites all day, waiting for something new to drop. When it does, they have to manually trace whether it affects their organization, which processes it touches, and whether there are any gaps. It's slow, it's expensive, and missing something can cost a firm hundreds of millions in fines. This Regulatory Change Management app handles this automatically. It watches seven major US regulators around the clock (the Fed, SEC, OCC, FDIC, CFPB, FinCEN, and CFTC), pulls every new rule and guidance document they publish, and runs each one through Claude to produce a plain-English summary, an impact severity rating, and a breakdown of which internal compliance processes are affected. If something new requires action your current processes don't cover, it flags the gap, assigns a severity level, and generates a specific remediation recommendation with a suggested timeline. Everything surfaces in a live dashboard so your compliance posture is visible at a glance, not buried in a spreadsheet somewhere.",
        tech: [
          "Python",
          "Claude API",
          "Streamlit",
          "BeautifulSoup",
          "pandas",
          "SQLite",
        ],
        category: "industry",
        sector: "Financial Services",
        year: "2026",
        links: [
          {
            label: "GitHub",
            url: "https://github.com/sree-j04/regulatory-change-monitor", // replace with your actual repo URL
            type: "github",
          },
          {
            label: "Watch Demo",
            url: "https://youtu.be/YwjZPhpp8zU", // replace with your actual demo video URL
            type: "video",
          },
        ],
      },
      // Add more industry projects here as you build them:
      // {
      //   slug: "project-slug",
      //   title: "Project Title",
      //   tagline: "One-line tagline",
      //   description: "Longer description.",
      //   tech: ["Python", "LangChain"],
      //   category: "industry",
      //   sector: "Healthcare and Life Sciences",
      //   year: "2026",
      //   links: [
      //     { label: "GitHub", url: "#", type: "github" },
      //     { label: "Watch Demo", url: "#", type: "video" },
      //   ],
      // },
    ],
  },
];

// Backwards-compatible flat list (in case anything else imports it)
export const projects: Project[] = projectGroups.flatMap((g) => g.projects);
