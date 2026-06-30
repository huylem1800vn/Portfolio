import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useI18n } from "../i18n";
import { ANG_ANG_PROJECT_COVER_URL } from "../config/project-covers";

const meta = [
  {
    index: "01",
    title: "Ăng Ăng",
    href: "#case/angang",
    tags: ["UX Research", "Mobile App", "Food Discovery", "Personalization", "UI Design"],
    year: "2025",
    image: ANG_ANG_PROJECT_COVER_URL,
    imageAlt: "Ăng Ăng project cover showing the app identity and key mobile screens",
    accent: "#f0ead6",
  },
  {
    index: "02",
    title: "MeMe",
    href: "#case/meme",
    tags: ["UX Research", "E-commerce UX", "Website Redesign", "User Flow", "Figma"],
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1549298222-1c31e8915347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    imageAlt: "Editorial magazine spread representing the Meme fashion e-commerce redesign",
    accent: "#e7e4f7",
  },
  {
    index: "03",
    title: "Murror",
    href: "#case/murror",
    tags: ["AI Product", "Emotional UX", "Gamification", "Onboarding", "Mobile UI"],
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    imageAlt: "Soft blue and pink abstract sea representing Murror's calm reflective experience",
    accent: "#dde6f5",
  },
];

export function Work() {
  const { t, lang } = useI18n();
  return (
    <section id="work" className="py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-4">
              {t.work.tag}
            </div>
            <h2
              className="tracking-[-0.02em] leading-[1]"
              style={{
                fontFamily: "Fraunces, serif",
                fontWeight: 400,
                fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              }}
            >
              {t.work.title1} <span className="italic text-[#6b5cff]">{t.work.italic}</span>
              {t.work.title2}
            </h2>
          </div>
          <div className="hidden md:block text-sm text-neutral-500 max-w-[22ch] text-right">
            {t.work.sub}
          </div>
        </div>

        <div className="space-y-20 md:space-y-28">
          {meta.map((p, i) => {
            const copy = t.work.projects[i];
            return (
              <motion.article
                key={`${p.index}-${lang}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className="group border-t border-neutral-900/10 pt-10 md:pt-14"
              >
                <div className="flex items-baseline justify-between mb-6 md:mb-10">
                  <span className="text-xs tracking-[0.2em] uppercase text-neutral-500">
                    ( {p.index} ) {copy.type}
                  </span>
                  <span className="text-xs tracking-[0.2em] uppercase text-neutral-500">{p.year}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  <div className="lg:col-span-7 order-2 lg:order-1">
                    <a
                      href={p.href}
                      className="block relative overflow-hidden rounded-2xl"
                      style={{ backgroundColor: p.accent }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <ImageWithFallback
                          src={p.image}
                          alt={p.imageAlt}
                          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#f7f5f1] text-neutral-950 flex items-center justify-center translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col">
                    <h3
                      className="tracking-[-0.02em] leading-[1]"
                      style={{
                        fontFamily: "Fraunces, serif",
                        fontWeight: 400,
                        fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="mt-3 text-neutral-600 leading-snug"
                      style={{ fontSize: "1.0625rem" }}
                    >
                      {copy.subtitle}
                    </p>

                    <div className="mt-8 space-y-5">
                      <div>
                        <div className="text-xs tracking-[0.18em] uppercase text-[#6b5cff] mb-2">
                          {t.work.problemLabel}
                        </div>
                        <p
                          className="text-neutral-800 leading-relaxed"
                          style={{ fontSize: "0.95rem" }}
                        >
                          {copy.problem}
                        </p>
                      </div>
                      <div>
                        <div className="text-xs tracking-[0.18em] uppercase text-[#6b5cff] mb-2">
                          {t.work.solutionLabel}
                        </div>
                        <p
                          className="text-neutral-800 leading-relaxed"
                          style={{ fontSize: "0.95rem" }}
                        >
                          {copy.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1.5 rounded-full border border-neutral-900/15 text-neutral-700 hover:border-[#6b5cff] hover:text-[#6b5cff] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={p.href}
                      className="mt-10 inline-flex items-center gap-2 text-sm group/link self-start"
                    >
                      <span className="border-b border-neutral-900/40 group-hover/link:border-[#6b5cff] group-hover/link:text-[#6b5cff] pb-0.5 transition-colors">
                        {t.work.readMore}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="group-hover/link:text-[#6b5cff] group-hover/link:rotate-45 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
