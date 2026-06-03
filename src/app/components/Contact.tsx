import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "../i18n";

const channels = [
  { label: "Email", value: "huylem1800vn@gmail.com", href: "mailto:huylem1800vn@gmail.com" },
  { label: "Behance", value: "behance.net/minhhuyhunh2", href: "https://www.behance.net/minhhuyhunh2" },
  { label: "LinkedIn", value: "linkedin.com/in/huy-huynh-minh", href: "https://www.linkedin.com/in/huy-huynh-minh/" },
];

export function Contact() {
  const { t } = useI18n();
  return (
    <section
      id="contact"
      className="py-24 md:py-36 bg-neutral-950 text-[#f7f5f1] rounded-t-[2rem] md:rounded-t-[3rem]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-8">
          {t.contact.tag}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="tracking-[-0.03em] leading-[0.95] max-w-[16ch]"
          style={{
            fontFamily: "Fraunces, serif",
            fontWeight: 400,
            fontSize: "clamp(2.75rem, 8.5vw, 7.5rem)",
          }}
        >
          {t.contact.title1}
          <span className="italic text-[#a59cff]">{t.contact.italic}</span>
          {t.contact.title2}
        </motion.h2>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p
              className="text-neutral-300 leading-relaxed max-w-md"
              style={{ fontSize: "1.0625rem" }}
            >
              {t.contact.body}
            </p>

            <a
              href="#"
              className="mt-10 inline-flex items-center gap-3 bg-[#f7f5f1] text-neutral-950 rounded-full pl-6 pr-2 py-2 hover:bg-[#a59cff] hover:text-neutral-950 transition-colors group"
            >
              <span className="text-sm">{t.contact.resume}</span>
              <span className="w-9 h-9 rounded-full bg-neutral-950 text-[#f7f5f1] flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <ul>
              {channels.map((c, i) => (
                <motion.li
                  key={c.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border-t border-white/15 last:border-b"
                >
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between py-6 hover:pl-3 transition-all"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="text-xs tracking-[0.2em] uppercase text-neutral-400 w-20">
                        {c.label}
                      </span>
                      <span
                        className="tracking-[-0.01em]"
                        style={{
                          fontFamily: "Fraunces, serif",
                          fontWeight: 400,
                          fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                        }}
                      >
                        {c.value}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={22}
                      className="text-neutral-400 group-hover:text-[#a59cff] group-hover:rotate-45 transition-transform"
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 md:mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs tracking-[0.18em] uppercase text-neutral-500">
          <div>{t.contact.footer}</div>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-[#f7f5f1]">
              {t.contact.backTop}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
