import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Figma,
  FileText,
  PlayCircle,
} from "lucide-react";
import {
  projectGroups,
  type Project,
  type ProjectLink,
  type IndustrySector,
  SECTOR_COLORS,
} from "../data/projects";

const linkIcon = (type: ProjectLink["type"]) => {
  switch (type) {
    case "github":
      return <Github className="w-4 h-4" />;
    case "figma":
      return <Figma className="w-4 h-4" />;
    case "case-study":
      return <FileText className="w-4 h-4" />;
    case "video":
      return <PlayCircle className="w-4 h-4" />;
    default:
      return <ExternalLink className="w-4 h-4" />;
  }
};

// For non-industry project cards (academic / ai), cycle through accents by index
const ACCENT_VARS = [
  "var(--mustard)",
  "var(--terracotta)",
  "var(--sage)",
  "var(--clay)",
];

// Resolve the left-border color for a card
function cardAccent(
  category: Project["category"],
  sector: IndustrySector | undefined,
  idx: number,
): string {
  if (category === "industry" && sector && SECTOR_COLORS[sector]) {
    return `hsl(${SECTOR_COLORS[sector]})`;
  }
  return `hsl(${ACCENT_VARS[idx % ACCENT_VARS.length]})`;
}

// Sector badge shown inside the modal
function SectorBadge({ sector }: { sector: IndustrySector }) {
  const color = SECTOR_COLORS[sector];
  return (
    <span
      className="inline-block text-xs font-medium tracking-wide px-2.5 py-1 rounded-full border mb-6"
      style={{
        color: `hsl(${color})`,
        borderColor: `hsl(${color} / 0.4)`,
        background: `hsl(${color} / 0.08)`,
      }}
    >
      {sector}
    </span>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="eyebrow mb-3">Selected Work</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl tracking-[-0.025em] text-walnut title-rule">
            <span className="italic text-terracotta">Projects</span>
          </h2>
          <p className="mt-6 max-w-2xl text-walnut/75">
            A mix of coursework, personal AI builds, and applied industry work!
          </p>
        </div>

        <div className="space-y-20">
          {projectGroups.map((group) => (
            <div key={group.id}>
              <div className="flex items-baseline justify-between mb-2 border-b border-border pb-3">
                <h3 className="font-serif font-light text-2xl md:text-3xl tracking-tight text-walnut">
                  {group.title}
                </h3>
                <span className="text-xs uppercase tracking-widest text-terracotta-deep">
                  {group.projects.length}{" "}
                  {group.projects.length === 1 ? "project" : "projects"}
                </span>
              </div>
              <p className="text-walnut/70 mb-8 max-w-2xl text-sm">
                {group.blurb}
              </p>

              {group.projects.length === 0 ? (
                <div className="card-earthy p-10 text-center text-walnut/65 italic border-dashed">
                  Coming soon — first project shipping shortly.
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {group.projects.map((p, idx) => (
                    <motion.button
                      key={p.slug}
                      onClick={() => setActive(p)}
                      whileHover={{ y: -4 }}
                      className="card-earthy group relative overflow-hidden text-left p-6 pl-8 transition-shadow hover:shadow-xl"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 h-full w-2"
                        style={{
                          backgroundColor: cardAccent(
                            p.category,
                            p.sector,
                            idx,
                          ),
                        }}
                      />

                      <div className="flex items-baseline justify-between mb-2">
                        <h4 className="font-serif font-light text-xl tracking-tight text-walnut group-hover:text-terracotta-deep transition-colors">
                          {p.title}
                        </h4>
                        <span className="text-xs text-walnut/60">{p.year}</span>
                      </div>

                      <p className="text-sm text-walnut/75 mb-4">{p.tagline}</p>

                      {/* Sector label on industry cards */}
                      {p.sector && (
                        <p
                          className="text-xs font-medium mb-3"
                          style={{ color: `hsl(${SECTOR_COLORS[p.sector]})` }}
                        >
                          {p.sector}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-1.5">
                        {p.tech.slice(0, 4).map((t) => (
                          <span key={t} className="chip">
                            {t}
                          </span>
                        ))}
                        {p.tech.length > 4 && (
                          <span className="text-xs px-2 py-0.5 text-walnut/60">
                            +{p.tech.length - 4}
                          </span>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Detail Modal ── */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 bg-[hsl(var(--walnut)/0.35)] backdrop-blur-[2px] z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full p-8 max-h-[85vh] overflow-y-auto rounded-xl border border-terracotta/25 shadow-2xl"
              style={{ background: "hsl(var(--cream))" }}
            >
              {/* Title row */}
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-serif font-light text-3xl tracking-tight text-walnut">
                  {active.title}
                </h3>
                <span className="text-sm text-walnut/60">{active.year}</span>
              </div>

              {/* Tagline */}
              <p className="text-terracotta-deep mb-4 italic">
                {active.tagline}
              </p>

              {/* Sector badge (industry only) */}
              {active.sector && <SectorBadge sector={active.sector} />}

              {/* Description */}
              <p className="text-walnut/85 leading-relaxed mb-6">
                {active.description}
              </p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {active.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links — GitHub left, demo video right (visually distinct) */}
              {active.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {active.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        l.type === "video"
                          ? "inline-flex items-center gap-2 px-4 py-2 rounded-md border border-terracotta text-terracotta-deep hover:bg-terracotta/10 transition-colors text-sm font-medium"
                          : "inline-flex items-center gap-2 px-4 py-2 rounded-md bg-walnut text-cream hover:bg-terracotta-deep transition-colors text-sm"
                      }
                    >
                      {linkIcon(l.type)}
                      {l.label}
                    </a>
                  ))}
                </div>
              )}

              <button
                onClick={() => setActive(null)}
                className="mt-6 text-sm text-walnut/60 hover:text-terracotta-deep"
              >
                Close ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
