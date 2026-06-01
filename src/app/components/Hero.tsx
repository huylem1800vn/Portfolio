import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { useI18n } from "../i18n";

export function Hero() {
  const { t, lang } = useI18n();

  return (
    <section id="top" className="relative pt-32 md:pt-44 pb-24 md:pb-36 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          key={`badge-${lang}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-neutral-500"
        >
          <span className="w-2 h-2 rounded-full bg-[#6b5cff]" />
          {t.hero.badge}
        </motion.div>

        <div className="mt-10 md:mt-14 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-xs tracking-[0.2em] uppercase text-neutral-600">
          <span key={`name-${lang}`}>{t.hero.name}</span>
          <span className="text-neutral-400">/</span>
          <span>{t.hero.role}</span>
        </div>

        <motion.h1
          key={`bridge-${lang}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-4 tracking-[-0.05em] leading-[0.85]"
          style={{
            fontFamily: "Fraunces, serif",
            fontWeight: 400,
            fontSize: "clamp(4.5rem, 18vw, 16rem)",
          }}
        >
          BRI<span className="italic text-[#6b5cff]">D</span>GE
        </motion.h1>

        <motion.p
          key={`headline-${lang}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 md:mt-10 max-w-[28ch] tracking-[-0.02em] leading-[1.1]"
          style={{
            fontFamily: "Fraunces, serif",
            fontWeight: 400,
            fontSize: "clamp(1.75rem, 3.6vw, 3rem)",
          }}
        >
          {t.hero.headline}
        </motion.p>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <motion.div
            key={`intro-${lang}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-6"
          >
            <div className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
              {t.hero.label1}
            </div>
            <p className="leading-relaxed text-neutral-700" style={{ fontSize: "1.0625rem" }}>
              {t.hero.intro}
            </p>
          </motion.div>

          <motion.div
            key={`now-${lang}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="md:col-span-4 md:col-start-8"
          >
            <div className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
              {t.hero.label2}
            </div>
            <p className="leading-relaxed text-neutral-700" style={{ fontSize: "1.0625rem" }}>
              {t.hero.currently}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 bg-neutral-950 text-[#f7f5f1] rounded-full pl-6 pr-2 py-2 hover:bg-[#6b5cff] transition-colors"
          >
            <span className="text-sm">{t.hero.cta1}</span>
            <span className="w-8 h-8 rounded-full bg-[#f7f5f1] text-neutral-950 flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight size={16} />
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm border border-neutral-900/30 rounded-full px-5 py-3 hover:border-neutral-900 hover:bg-neutral-950 hover:text-[#f7f5f1] transition-colors"
          >
            {t.hero.cta2}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-neutral-500"
        >
          <ArrowDown size={14} />
          {t.hero.scroll}
        </motion.div>
      </div>
    </section>
  );
}
