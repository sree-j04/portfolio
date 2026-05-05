import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-24 md:py-32 bg-charcoal text-cream"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-terracotta text-sm tracking-[0.2em] uppercase mb-3">
          Experience
        </p>
        <h2 className="font-serif text-4xl md:text-5xl mb-16">
          Where I've worked.
        </h2>
        <div className="space-y-16">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-12 gap-8"
            >
              <div className="md:col-span-4">
                <p className="font-serif text-2xl">{job.company}</p>
                <p className="text-sm text-cream/60 mt-1">{job.period}</p>
                <p className="text-sm text-cream/60">{job.location}</p>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg mb-4">{job.role}</p>
                <ul className="space-y-3 text-cream/80">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="text-terracotta mt-2">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
