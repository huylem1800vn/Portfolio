import { motion } from "motion/react";
import { useI18n } from "../i18n";

export function Marquee() {
  const { t, lang } = useI18n();
  const items = t.marquee;
  const row = [...items, ...items, ...items];
  return (
    <section className="py-10 md:py-14 border-y border-neutral-900/10 overflow-hidden">
      <motion.div
        key={lang}
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        style={{ width: "max-content" }}
      >
        {row.map((txt, i) => (
          <span
            key={i}
            className="flex items-center gap-12 tracking-[-0.02em]"
            style={{
              fontFamily: "Fraunces, serif",
              fontWeight: 400,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            {txt}
            <span className="w-3 h-3 rounded-full bg-[#6b5cff] inline-block" />
          </span>
        ))}
      </motion.div>
    </section>
  );
}
