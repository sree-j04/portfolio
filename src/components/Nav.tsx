import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? "bg-[hsl(var(--cream)/0.85)] backdrop-blur border-b border-border"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#top"
          className="font-serif font-light text-xl tracking-tight text-walnut"
        >
          {profile.shortName}
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-walnut">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-terracotta transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-walnut text-cream rounded-full hover:bg-terracotta-deep transition-colors"
          >
            Resume
          </a>
        </nav>
        <button
          className="md:hidden text-walnut"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-[hsl(var(--cream)/0.95)] backdrop-blur px-6 py-4 flex flex-col gap-4 text-walnut">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="hover:text-terracotta transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-terracotta-deep"
          >
            Resume ↗
          </a>
        </div>
      )}
    </header>
  );
}
