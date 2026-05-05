import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24 md:py-40 bg-charcoal text-cream"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-terracotta text-sm tracking-[0.2em] uppercase mb-6">
          Get in touch
        </p>
        <h2 className="font-serif text-5xl md:text-7xl leading-[1.05]">
          Let's build something{" "}
          <em className="text-terracotta not-italic">thoughtful.</em>
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="inline-block mt-10 text-lg md:text-xl border-b border-cream/40 pb-1 hover:border-terracotta hover:text-terracotta transition"
        >
          {profile.email}
        </a>
        <div className="mt-12 flex justify-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-terracotta"
          >
            <Github size={22} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-terracotta"
          >
            <Linkedin size={22} />
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-terracotta">
            <Mail size={22} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
