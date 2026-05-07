import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-4 relative"
        >
          <p className="eyebrow mb-3">About</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl tracking-[-0.025em] text-walnut title-rule">
            Get to <span className="italic text-terracotta">know me</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-8 space-y-6"
        >
          <div className="card-earthy p-8 md:p-10">
            <p className="text-lg leading-relaxed text-walnut/85">
              {profile.bio}
            </p>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-serif font-light text-xl text-walnut tracking-tight">
                {profile.education.school}
              </p>
              <p className="text-sm text-walnut/65 mt-1">
                {profile.education.degree} ·{" "}
                <span className="text-terracotta-deep">
                  {profile.education.period}
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
