import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useI18n } from "../i18n";
import { ANG_ANG_PROJECT_COVER_URL } from "../config/project-covers";
import { HDBIZ_COVER_URL } from "../config/hdbiz-assets";
import { MEME_UI_BOARD_URL } from "../config/meme-assets";
import {
  MURROR_CHAT_HOME_URL,
  MURROR_CHAT_MOOD_CHECKIN_URL,
  MURROR_PROFILE_AQUA_URL,
} from "../config/murror-assets";

const meta = [
  {
    index: "01",
    title: "HDBiz",
    href: "#case/hdbiz",
    tags: ["Enterprise UX", "Digital Banking", "Internet Banking", "Mobile Banking", "Design System"],
    year: "2026",
    image: HDBIZ_COVER_URL,
    imageAlt: "HDBiz corporate internet and mobile banking project cover",
    accent: "#f7f5f1",
    fit: "contain",
  },
  {
    index: "02",
    title: "Ăng Ăng",
    href: "#case/angang",
    tags: ["UX Research", "Mobile App", "Food Discovery", "Personalization", "UI Design"],
    year: "2025",
    image: ANG_ANG_PROJECT_COVER_URL,
    imageAlt: "Ăng Ăng project cover showing the app identity and key mobile screens",
    accent: "#f0ead6",
    fit: "cover",
  },
  {
    index: "03",
    title: "MeMe",
    href: "#case/meme",
    tags: ["UX Research", "E-commerce UX", "Website Redesign", "User Flow", "Figma"],
    year: "2025",
    image: MEME_UI_BOARD_URL,
    imageAlt: "MeMe project thumbnail showing the YaMe fashion e-commerce redesign UI board",
    accent: "#f7f5f1",
    fit: "cover",
    sourceUrl: "https://yame.vn",
    thumbnail: "meme",
  },
  {
    index: "04",
    title: "Murror",
    href: "#case/murror",
    tags: ["AI Product", "Emotional UX", "Gamification", "Onboarding", "Mobile UI"],
    year: "2026",
    image: MURROR_CHAT_HOME_URL,
    imageAlt: "Murror app thumbnail showing emotional check-in and AI companion mobile screens",
    accent: "#0b0d18",
    fit: "cover",
    thumbnail: "murror",
  },
];

function MemeProjectThumbnail({ lang }: { lang: "en" | "vi" }) {
  const kicker = lang === "vi" ? "Website redesign" : "Website redesign";
  const subtitle = lang === "vi" ? "Thiết kế lại trải nghiệm mua sắm thời trang YaMe" : "Redesigning the YaMe fashion shopping experience";

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f7f5f1]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,0,0,0.08),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(107,92,255,0.16),transparent_24%),linear-gradient(135deg,#f7f5f1_0%,#efe9df_100%)]" />
      <div className="absolute left-7 top-7 z-10 rounded-full border border-neutral-950/10 bg-white/70 px-4 py-2 text-[0.65rem] tracking-[0.22em] uppercase text-neutral-600 backdrop-blur">
        {kicker}
      </div>
      <div className="absolute left-7 top-20 z-10 max-w-[18rem]">
        <div
          className="tracking-[-0.08em] leading-none text-neutral-950"
          style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(3.75rem, 9vw, 7rem)" }}
        >
          MeMe
        </div>
        <p className="mt-3 max-w-[18rem] text-sm md:text-base leading-snug text-neutral-700">{subtitle}</p>
      </div>
      <div className="absolute -right-16 bottom-8 w-[86%] rounded-[1.5rem] border border-neutral-950/10 bg-white p-3 shadow-2xl transition-transform duration-[1200ms] ease-out group-hover:translate-x-[-1.25rem] group-hover:translate-y-[-0.5rem] group-hover:rotate-[-1deg]">
        <img
          src={MEME_UI_BOARD_URL}
          alt="MeMe UI board from Figma"
          className="h-auto w-full rounded-[1rem] object-cover"
        />
      </div>
      <div className="absolute bottom-7 left-7 z-10 flex gap-2">
        {["E-commerce", "YaMe", "UX/UI"].map((item) => (
          <span key={item} className="rounded-full bg-neutral-950 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.14em] text-[#f7f5f1]">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function MurrorProjectThumbnail({ lang }: { lang: "en" | "vi" }) {
  const subtitle =
    lang === "vi"
      ? "AI companion cho check-in cảm xúc, grounding và phản chiếu nhẹ nhàng"
      : "AI companion for emotional check-ins, grounding, and gentle reflection";
  const screens = [
    { src: MURROR_CHAT_HOME_URL, label: "Chat" },
    { src: MURROR_CHAT_MOOD_CHECKIN_URL, label: "Check-in" },
    { src: MURROR_PROFILE_AQUA_URL, label: "Profile" },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0b0d18] text-[#f8f3ea]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(165,156,255,0.34),transparent_30%),radial-gradient(circle_at_86%_62%,rgba(107,140,255,0.28),transparent_34%),radial-gradient(circle_at_42%_102%,rgba(255,201,217,0.22),transparent_34%)]" />
      <div className="absolute left-7 top-7 z-10 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[0.65rem] uppercase tracking-[0.22em] text-white/70 backdrop-blur">
        AI companion
      </div>

      <div className="absolute left-7 top-20 z-10 max-w-[20rem]">
        <div
          className="tracking-[-0.08em] leading-none"
          style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(3.75rem, 9vw, 7rem)" }}
        >
          Murror
        </div>
        <p className="mt-3 max-w-[18rem] text-sm md:text-base leading-snug text-white/70">{subtitle}</p>
      </div>

      <div className="absolute bottom-7 left-7 z-10 flex gap-2">
        {["Mood", "AI Mirror", "Ritual"].map((item) => (
          <span key={item} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.14em] text-white/75 backdrop-blur">
            {item}
          </span>
        ))}
      </div>

      <div className="absolute -right-4 bottom-5 flex h-[82%] w-[78%] items-end justify-end gap-3 md:gap-4">
        {screens.map((screen, index) => (
          <div
            key={screen.label}
            className="relative w-[31%] min-w-[96px] overflow-hidden rounded-[1.65rem] border border-white/14 bg-white/10 p-1.5 shadow-2xl backdrop-blur transition-transform duration-[1200ms] ease-out group-hover:-translate-y-3"
            style={{
              transform: `translateY(${index === 1 ? "-18px" : index === 2 ? "10px" : "0"}) rotate(${index === 0 ? "-5deg" : index === 2 ? "5deg" : "0deg"})`,
            }}
          >
            <div className="absolute left-1/2 top-2 z-10 h-1.5 w-8 -translate-x-1/2 rounded-full bg-black/35" />
            <img
              src={screen.src}
              alt={`Murror ${screen.label} mobile screen`}
              className="h-full max-h-[360px] w-full rounded-[1.25rem] object-cover object-top"
            />
          </div>
        ))}
      </div>

      <div className="absolute right-9 top-8 hidden grid-cols-2 gap-2 md:grid">
        {["#ffd45f", "#b9ddff", "#ffc9d9", "#d9d0ff"].map((color) => (
          <span key={color} className="h-4 w-4 rounded-full shadow-[0_0_24px_rgba(255,255,255,0.28)]" style={{ backgroundColor: color }} />
        ))}
      </div>
    </div>
  );
}

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
                          className={`w-full h-full transition-transform duration-[1200ms] ease-out group-hover:scale-105 ${
                            p.fit === "contain" ? "object-contain" : "object-cover"
                          } ${p.thumbnail === "meme" || p.thumbnail === "murror" ? "hidden" : "block"}`}
                        />
                        {p.thumbnail === "meme" && <MemeProjectThumbnail lang={lang} />}
                        {p.thumbnail === "murror" && <MurrorProjectThumbnail lang={lang} />}
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

                    <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
                      <a
                        href={p.href}
                        className="inline-flex items-center gap-2 text-sm group/link self-start"
                      >
                        <span className="border-b border-neutral-900/40 group-hover/link:border-[#6b5cff] group-hover/link:text-[#6b5cff] pb-0.5 transition-colors">
                          {t.work.readMore}
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="group-hover/link:text-[#6b5cff] group-hover/link:rotate-45 transition-transform"
                        />
                      </a>

                      {p.sourceUrl && (
                        <a
                          href={p.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-[#6b5cff] transition-colors group/source"
                        >
                          <span className="border-b border-neutral-900/20 group-hover/source:border-[#6b5cff] pb-0.5">
                            {t.work.originalWebsite}
                          </span>
                          <ArrowUpRight size={15} className="group-hover/source:rotate-45 transition-transform" />
                        </a>
                      )}
                    </div>
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
