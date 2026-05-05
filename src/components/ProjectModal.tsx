import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "../data/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-cream max-w-2xl w-full rounded-3xl p-8 md:p-10 max-h-[85vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-xs text-muted mb-2">{project.year}</p>
                <h3 className="font-serif text-3xl md:text-4xl">
                  {project.title}
                </h3>
                <p className="text-muted mt-2">{project.tagline}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-line rounded-full"
              >
                <X size={20} />
              </button>
            </div>
            <p className="leading-relaxed text-charcoal/80 mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-charcoal text-cream"
                >
                  {t}
                </span>
              ))}
            </div>
            {project.links.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {project.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-cream rounded-full hover:bg-terracotta transition text-sm"
                  >
                    {l.label} <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
