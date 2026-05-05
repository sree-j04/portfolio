import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../data/projects";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const personal = projects.filter((p) => p.category === "personal");
  const academic = projects.filter((p) => p.category === "academic");

  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <p className="text-terracotta text-sm tracking-[0.2em] uppercase mb-3">
          Projects
        </p>
        <h2 className="font-serif text-4xl md:text-5xl mb-16">
          Selected work.
        </h2>

        <Group title="Personal Projects" items={personal} onOpen={setActive} />
        <div className="h-16" />
        <Group title="Academic Projects" items={academic} onOpen={setActive} />
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function Group({
  title,
  items,
  onOpen,
}: {
  title: string;
  items: Project[];
  onOpen: (p: Project) => void;
}) {
  return (
    <div>
      <h3 className="font-serif text-2xl mb-6 text-muted">{title}</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((p, i) => (
          <motion.button
            key={p.slug}
            onClick={() => onOpen(p)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group text-left p-8 rounded-3xl border border-line bg-white/40 hover:bg-white hover:border-terracotta/40 transition"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs text-muted">{p.year}</span>
              <ArrowUpRight
                size={20}
                className="text-muted group-hover:text-terracotta group-hover:rotate-12 transition-transform"
              />
            </div>
            <h4 className="font-serif text-2xl mb-2">{p.title}</h4>
            <p className="text-muted mb-5">{p.tagline}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full border border-line text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
