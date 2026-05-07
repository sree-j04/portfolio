import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="on-dark relative px-6 py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        <p className="eyebrow mb-3">Experience</p>
        <h2 className="font-serif font-light text-4xl md:text-5xl tracking-[-0.025em] mb-16 title-rule">
          Where I've <span className="italic text-terracotta">worked</span>
        </h2>

        <div className="space-y-16">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-12 gap-8 border-l-2 border-[hsl(var(--terracotta)/0.5)] pl-6 md:pl-8"
            >
              <div className="md:col-span-4">
                <p className="font-serif font-light text-2xl tracking-tight">
                  {job.company}
                </p>
                <p className="text-sm text-[hsl(var(--cream)/0.65)] mt-1">
                  {job.period}
                </p>
                <p className="text-sm text-[hsl(var(--cream)/0.65)]">
                  {job.location}
                </p>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg mb-4 text-[hsl(var(--terracotta))]">
                  {job.role}
                </p>
                <ul className="space-y-3 text-[hsl(var(--cream)/0.85)]">
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
