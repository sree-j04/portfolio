import { motion } from "framer-motion";
import { skills, certifications } from "../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="text-terracotta text-sm tracking-[0.2em] uppercase mb-3">
            Toolkit
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">Skills & certs.</h2>
        </div>
        <div className="md:col-span-8 space-y-8">
          {Object.entries(skills).map(([cat, items], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border-b border-line pb-6"
            >
              <p className="text-sm text-muted mb-3">{cat}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 text-sm border border-line rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          <div>
            <p className="text-sm text-muted mb-3">Certifications</p>
            <ul className="space-y-1">
              {certifications.map((c) => (
                <li key={c} className="text-charcoal">
                  — {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
