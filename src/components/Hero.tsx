import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-6 pt-24 overflow-hidden"
    >
      <img
        src="/chicago-skyline.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[42%] w-full object-cover object-bottom text-walnut opacity-25"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[42%] bg-gradient-to-t from-background/10 via-background/65 to-background"
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-8 order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow mb-6"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-[-0.03em] text-walnut"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed font-medium text-mustard"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex items-center gap-5 text-walnut"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-terracotta"
            >
              <Github size={22} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-terracotta"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="transition-colors hover:text-terracotta"
            >
              <Mail size={22} />
            </a>
          </motion.div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-20 inline-flex items-center gap-2 text-sm text-walnut/60 hover:text-terracotta transition-colors"
          >
            Scroll <ArrowDown size={14} />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="md:col-span-4 order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative">
            <div
              className="absolute -inset-3 bg-terracotta/20 rounded-2xl blur-2xl"
              aria-hidden
            />
            <img
              src="/headshot.jpg"
              alt={`${profile.name} headshot`}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl border-4 border-cream shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
