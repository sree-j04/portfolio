export type ProjectCategory = "academic" | "ai" | "industry";

export type ProjectLink = {
  label: string;
  url: string;
  type: "demo" | "github" | "figma" | "case-study";
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  links: ProjectLink[];
  year: string;
};

export type ProjectGroup = {
  id: ProjectCategory;
  title: string;
  blurb: string;
  projects: Project[];
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
      // Add projects here as you build them, e.g.:
      // {
      //   slug: "project-slug",
      //   title: "Project Title",
      //   tagline: "One-line tagline",
      //   description: "Longer description.",
      //   tech: ["Python", "LangChain"],
      //   category: "industry",
      //   year: "2026",
      //   links: [{ label: "Case Study", url: "#", type: "case-study" }],
      // },
    ],
  },
];

// Backwards-compatible flat list (in case anything else imports it)
export const projects: Project[] = projectGroups.flatMap((g) => g.projects);
