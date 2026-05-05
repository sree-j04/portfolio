import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-4"
        >
          <p className="text-terracotta text-sm tracking-[0.2em] uppercase mb-3">
            About
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">A bit about me.</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted"
        >
          <p>{profile.bio}</p>
          <div className="pt-4 border-t border-line text-charcoal">
            <p className="font-serif text-xl">{profile.education.school}</p>
            <p className="text-sm text-muted mt-1">
              {profile.education.degree} · {profile.education.period}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
