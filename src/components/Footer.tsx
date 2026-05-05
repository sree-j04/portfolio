import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="px-6 py-8 bg-charcoal text-cream/60 text-sm border-t border-cream/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-3">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Designed & built with care · Waterloo CS '25</p>
      </div>
    </footer>
  );
}
