import { motion } from "motion/react";
import { useI18n } from "../i18n";

const skills = [
  "Figma",
  "FigJam",
  "Auto Layout",
  "Components",
  "Design System Basics",
  "Wireframing",
  "Prototyping",
  "UX Research",
  "User Flow",
  "Information Architecture",
  "HTML / CSS / JavaScript",
];

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-6">
          {t.about.tag}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-[20ch] tracking-[-0.02em] leading-[1.05]"
          style={{
            fontFamily: "Fraunces, serif",
            fontWeight: 400,
            fontSize: "clamp(2.25rem, 5.5vw, 5rem)",
          }}
        >
          {t.about.title1}
          <span className="italic text-[#6b5cff]">{t.about.italic}</span>
          {t.about.title2}
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {t.about.introSections.map((section, index) => (
            <motion.div
              key={section.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <div className="mb-5 text-xs tracking-[0.2em] uppercase text-neutral-500">
                {section.tag}
              </div>
              <p className="text-neutral-700 leading-[1.7]" style={{ fontSize: "1.05rem" }}>
                {section.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[36rem]"
          >
            <div className="grid grid-cols-1 gap-y-7 md:gap-y-8">
              {t.about.facts.map((f) => (
                <div key={f.k} className="border-t border-neutral-900/10 pt-3">
                  <div className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-1">
                    {f.k}
                  </div>
                  <div className="text-neutral-900">{f.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col max-w-[36rem] md:ml-auto"
          >
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-6">
                {t.about.skillsLabel}
              </div>
              <ul className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="px-4 py-2 rounded-full border border-neutral-900/15 text-sm text-neutral-800 hover:bg-neutral-950 hover:text-[#f7f5f1] hover:border-neutral-950 transition-colors cursor-default"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 md:mt-10 p-6 rounded-2xl bg-[#efeae0]/60 border border-neutral-900/5">
              <div className="text-xs tracking-[0.2em] uppercase text-[#6b5cff] mb-3">
                {t.about.learningLabel}
              </div>
              <p className="text-neutral-800 leading-relaxed" style={{ fontSize: "0.95rem" }}>
                {t.about.learning}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
