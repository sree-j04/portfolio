import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex items-center px-6 pt-24">
      <div className="max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-terracotta text-sm tracking-[0.2em] uppercase mb-6"
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight"
        >
          {profile.name}.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-muted leading-relaxed"
        >
          {profile.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex items-center gap-5"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-terracotta"
          >
            <Github size={22} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-terracotta"
          >
            <Linkedin size={22} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="hover:text-terracotta"
          >
            <Mail size={22} />
          </a>
        </motion.div>
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-20 inline-flex items-center gap-2 text-sm text-muted hover:text-charcoal"
        >
          Scroll <ArrowDown size={14} />
        </motion.a>
      </div>
    </section>
  );
}
