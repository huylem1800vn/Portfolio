import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "../../i18n";

type Section = { id: string; label: string };

export function CaseNav({
  sections,
  accent,
  bg,
  text,
  border,
}: {
  sections: Section[];
  accent: string;
  bg: string;
  text: string;
  border: string;
}) {
  const { lang, setLang } = useI18n();
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md"
      style={{ backgroundColor: bg, borderBottom: `1px solid ${border}`, color: text }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between gap-6">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">{lang === "en" ? "Back to portfolio" : "Về portfolio"}</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="relative group opacity-80 hover:opacity-100 transition-opacity"
            >
              {s.label}
              <span
                className="absolute left-0 -bottom-1 h-px w-0 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: accent }}
              />
            </a>
          ))}
        </nav>

        <div
          className="relative inline-flex items-center rounded-full p-1 text-xs"
          style={{ backgroundColor: `${accent}15`, border: `1px solid ${border}` }}
          role="group"
          aria-label="Language toggle"
        >
          <motion.span
            layout
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
            className="absolute top-1 bottom-1 w-9 rounded-full"
            style={{ left: lang === "en" ? 4 : "calc(50% - 2px)", backgroundColor: accent }}
          />
          {(["en", "vi"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className="relative z-10 w-9 h-7 rounded-full tracking-wide transition-colors"
              style={{ color: lang === l ? "#ffffff" : text, opacity: lang === l ? 1 : 0.7 }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
