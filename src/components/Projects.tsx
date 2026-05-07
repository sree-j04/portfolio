import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Figma, FileText } from "lucide-react";
import {
  projectGroups,
  type Project,
  type ProjectLink,
} from "../data/projects";

const linkIcon = (type: ProjectLink["type"]) => {
  switch (type) {
    case "github":
      return <Github className="w-4 h-4" />;
    case "figma":
      return <Figma className="w-4 h-4" />;
    case "case-study":
      return <FileText className="w-4 h-4" />;
    default:
      return <ExternalLink className="w-4 h-4" />;
  }
};

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl mb-4"
      >
        <span className="underline-ochre">Projects</span>
      </motion.h2>
      <p className="text-muted-foreground mb-16 max-w-2xl">
        A mix of coursework, personal AI builds, and applied industry work.
      </p>

      <div className="space-y-20">
        {projectGroups.map((group) => (
          <div key={group.id}>
            <div className="flex items-baseline justify-between mb-2 border-b border-border pb-3">
              <h3 className="text-2xl md:text-3xl text-walnut">
                {group.title}
              </h3>
              <span className="text-xs uppercase tracking-widest text-terracotta">
                {group.projects.length}{" "}
                {group.projects.length === 1 ? "project" : "projects"}
              </span>
            </div>
            <p className="text-muted-foreground mb-8 max-w-2xl text-sm">
              {group.blurb}
            </p>

            {group.projects.length === 0 ? (
              <div className="border border-dashed border-border rounded-lg p-10 text-center text-muted-foreground italic">
                Coming soon — first project shipping shortly.
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {group.projects.map((p) => (
                  <motion.button
                    key={p.slug}
                    onClick={() => setActive(p)}
                    whileHover={{ y: -4 }}
                    className="group text-left bg-card border border-border border-l-4 border-l-terracotta rounded-lg p-6 transition-shadow hover:shadow-lg"
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <h4 className="text-xl font-medium text-walnut group-hover:text-terracotta-deep transition-colors">
                        {p.title}
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        {p.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {p.tagline}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {t}
                        </span>
                      ))}
                      {p.tech.length > 4 && (
                        <span className="text-xs px-2 py-0.5 text-muted-foreground">
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

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card max-w-2xl w-full rounded-lg p-8 max-h-[85vh] overflow-y-auto border border-border"
            >
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-3xl text-walnut">{active.title}</h3>
                <span className="text-sm text-muted-foreground">
                  {active.year}
                </span>
              </div>
              <p className="text-terracotta-deep mb-6 italic">
                {active.tagline}
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                {active.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {active.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {active.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {active.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-walnut text-primary-foreground hover:bg-terracotta-deep transition-colors text-sm"
                    >
                      {linkIcon(l.type)}
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
              <button
                onClick={() => setActive(null)}
                className="mt-6 text-sm text-muted-foreground hover:text-foreground"
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
