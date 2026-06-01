import { motion } from "motion/react";
import { useI18n } from "../i18n";

export function Process() {
  const { t } = useI18n();
  return (
    <section id="process" className="py-24 md:py-36 bg-[#efeae0]/60">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-6">
            <div className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-4">
              {t.process.tag}
            </div>
            <h2
              className="tracking-[-0.02em] leading-[1]"
              style={{
                fontFamily: "Fraunces, serif",
                fontWeight: 400,
                fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              }}
            >
              {t.process.title1}<br />
              <span className="italic text-[#6b5cff]">{t.process.italic}</span>{t.process.title2}
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 self-end">
            <p className="text-neutral-700 leading-relaxed" style={{ fontSize: "1.0625rem" }}>
              {t.process.desc}
            </p>
          </div>
        </div>

        <ol className="relative">
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-neutral-900/15 md:-translate-x-1/2" />
          {t.process.steps.map((s, i) => {
            const n = String(i + 1).padStart(2, "0");
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 py-8 md:py-12 ${
                  i === 0 ? "" : "border-t border-neutral-900/10"
                }`}
              >
                <span className="absolute left-4 md:left-1/2 top-12 w-3 h-3 rounded-full bg-[#6b5cff] -translate-x-1/2 ring-4 ring-[#efeae0]" />
                <div
                  className={`pl-12 md:pl-0 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
                    {t.process.stepLabel} {n}
                  </div>
                  <h3
                    className="tracking-[-0.02em]"
                    style={{
                      fontFamily: "Fraunces, serif",
                      fontWeight: 400,
                      fontSize: "clamp(2rem, 3.5vw, 3rem)",
                    }}
                  >
                    {s.title}
                  </h3>
                </div>
                <div
                  className={`pl-12 md:pl-0 ${
                    i % 2 === 0
                      ? "md:col-start-2 md:pl-12"
                      : "md:pr-12 md:text-right md:row-start-1"
                  }`}
                >
                  <p
                    className="text-neutral-700 leading-relaxed mt-2 md:mt-12"
                    style={{ fontSize: "1rem" }}
                  >
                    {s.desc}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
