import { motion } from "framer-motion";
import { skills, certifications } from "../data/profile";

const CHIP_PALETTE = [
  { bg: "var(--mustard)", text: "var(--mustard)" },
  { bg: "var(--terracotta)", text: "var(--terracotta-deep)" },
  { bg: "var(--sage)", text: "var(--forest)" },
  { bg: "var(--clay)", text: "var(--walnut)" },
];

const chipStyle = (i: number) => {
  const c = CHIP_PALETTE[i % CHIP_PALETTE.length];
  return {
    backgroundColor: `hsl(${c.bg} / 0.32)`,
    borderColor: `hsl(${c.bg} / 0.72)`,
    color: `hsl(${c.text})`,
  };
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 py-24 md:py-32 border-t border-border"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="eyebrow mb-3">Toolkit</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl tracking-[-0.025em] text-walnut title-rule">
            Skills{" "}
            <span className="italic text-terracotta">&amp; certifications</span>
          </h2>
        </div>

        <div className="md:col-span-8 space-y-8">
          {Object.entries(skills).map(([cat, items], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border-b border-border/70 pb-6"
            >
              <p className="font-serif font-light text-lg text-walnut tracking-tight mb-3">
                {cat}
              </p>
              <div className="flex flex-wrap gap-2">
                {(items as string[]).map((s) => (
                  <span
                    key={s}
                    style={chipStyle(i)}
                    className="px-3 py-1 text-sm border rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <div>
            <p className="font-serif font-light text-lg text-walnut tracking-tight mb-3">
              Certifications
            </p>
            <ul className="space-y-2">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-3 text-walnut">
                  <span
                    style={{ color: "hsl(var(--gold))" }}
                    className="font-serif text-lg leading-none"
                  >
                    ✦
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
