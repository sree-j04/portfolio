export type ProjectCategory = "personal" | "academic";

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

export const projects: Project[] = [
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
    category: "personal",
    year: "2025",
    links: [
      { label: "GitHub", url: "[YOUR_SERENEDESK_GITHUB]", type: "github" },
    ],
  },
  {
    slug: "pathfinder-ai",
    title: "PathFinder AI",
    tagline: "Career advisor for CS students",
    description:
      "AI-powered career guidance tool offering personalized recommendations to CS students exploring paths beyond software engineering. Uses GPT-4 with JSON-based persona profiling and dynamic conversation routing for context-aware guidance. Built Streamlit prototypes and ran user testing to iteratively refine clarity and usability.",
    tech: ["Python", "Streamlit", "GPT-4 API", "JSON"],
    category: "personal",
    year: "2024",
    links: [
      { label: "GitHub", url: "[YOUR_PATHFINDER_GITHUB]", type: "github" },
    ],
  },
  {
    slug: "castoros",
    title: "CastorOS Kernel",
    tagline: "Teaching OS kernel in C and x86 Assembly",
    description:
      "Extended a minimal teaching kernel running on QEMU. Implemented core OS components — process management (spawn syscall), memory loading, page-table handling, and syscall interfacing with user-space binaries. Configured custom syscall handlers and modified the loader for dynamic process initialization, isolation, and context switching.",
    tech: ["C", "x86 Assembly", "QEMU", "SCons", "GDB", "Bash"],
    category: "academic",
    year: "2025",
    links: [],
  },
  {
    slug: "wlp4-compiler",
    title: "WLP4 Compiler",
    tagline: "Multi-phase compiler targeting MIPS assembly",
    description:
      "Designed a full compiler for the WLP4 language: scanning, parsing, semantic analysis, and code generation. Built a DFA-based lexer with Simplified Maximal Munch and an SLR(1) parser from grammar specs. Integrated semantic type checking for pointers, arrays, and function calls; handled recursive-descent translation to MIPS for control flow and memory.",
    tech: ["C++", "MIPS Assembly", "Compilers", "Bash"],
    category: "academic",
    year: "2025",
    links: [],
  },
  {
    slug: "chess-engine",
    title: "Chess Engine with AI Opponent",
    tagline: "Object-oriented chess engine in C++",
    description:
      "Full-featured chess engine applying inheritance, polymorphism, and encapsulation to model pieces, moves, and rules. Implemented an AI opponent with move generation, evaluation heuristics, and decision-making logic. Validated edge cases including check, checkmate, stalemate, castling, and en passant.",
    tech: ["C++", "OOP", "Game AI"],
    category: "academic",
    year: "2022",
    links: [],
  },
];
