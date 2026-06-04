import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { useI18n } from "../i18n";
import portraitIllustrationFlowers from "../../imports/hero/portrait-illustration-flowers.jpeg";
import originalPhoto from "../../imports/hero/original-photo.JPG";

export function Hero() {
  const { t, lang } = useI18n();
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isPortraitToggled, setIsPortraitToggled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;

    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const updateTouchMode = () => {
      const nextIsTouchDevice = mediaQuery.matches;
      setIsTouchDevice(nextIsTouchDevice);
      if (!nextIsTouchDevice) {
        setIsPortraitToggled(false);
      }
    };

    updateTouchMode();
    mediaQuery.addEventListener("change", updateTouchMode);

    return () => mediaQuery.removeEventListener("change", updateTouchMode);
  }, []);

  const showOriginalPhoto = isTouchDevice && isPortraitToggled;
  const portraitCard = (
    <motion.div
      initial={{ opacity: 0, y: 22, rotate: 1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.75, delay: 0.22 }}
      className="w-full md:flex md:justify-end"
    >
      <div
        className="group relative mx-auto w-full max-w-[280px] sm:max-w-[310px] md:mx-0 md:max-w-[340px] lg:max-w-[370px]"
        onClick={() => {
          if (isTouchDevice) {
            setIsPortraitToggled((current) => !current);
          }
        }}
        role={isTouchDevice ? "button" : undefined}
        tabIndex={isTouchDevice ? 0 : undefined}
        onKeyDown={(event) => {
          if (!isTouchDevice) return;
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsPortraitToggled((current) => !current);
          }
        }}
        aria-label={isTouchDevice ? "Tap to switch portrait image" : undefined}
      >
        <div
          className="absolute -inset-6 opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
          style={{ background: "radial-gradient(circle at 50% 45%, rgba(107,92,255,0.15), transparent 65%)" }}
        />
        <div className="relative mx-auto aspect-[760/1080] w-full">
          <div className="absolute inset-[6.94%_7.89%_6.94%_7.89%] overflow-hidden">
            <img
              src={portraitIllustrationFlowers}
              alt="Illustrated portrait of Huỳnh Minh Huy holding flowers"
              className="block h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.015] group-hover:opacity-0"
              style={{
                opacity: showOriginalPhoto ? 0 : 1,
                transform: showOriginalPhoto ? "scale(1.015)" : undefined,
              }}
            />
            <img
              src={originalPhoto}
              alt="Graduation photo of Huỳnh Minh Huy"
              className="absolute inset-0 block h-full w-full object-cover object-[63%_42%] opacity-0 scale-[1.01] transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
              style={{
                opacity: showOriginalPhoto ? 1 : undefined,
                transform: showOriginalPhoto ? "scale(1)" : undefined,
              }}
            />
          </div>
          <svg
            viewBox="0 0 760 1080"
            className="pointer-events-none absolute inset-0 h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Frame (wobbly) */}
            <path
              d="M 20 25 C 260 27 500 23 740 25 C 742 360 738 720 740 1055 C 500 1057 260 1053 20 1055 C 18 720 22 360 20 25 Z"
              stroke="#111111"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Inner Frame (wobbly) */}
            <path
              d="M 60 75 C 270 77 490 73 700 75 C 702 385 698 695 700 1005 C 490 1007 270 1003 60 1005 C 58 695 62 385 60 75 Z"
              stroke="#111111"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Corner Bevel Lines */}
            <path
              d="M 20 25 C 33 41 47 58 60 75"
              stroke="#111111"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M 740 25 C 727 41 713 58 700 75"
              stroke="#111111"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M 740 1055 C 727 1039 713 1022 700 1005"
              stroke="#111111"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M 20 1055 C 33 1039 47 1022 60 1005"
              stroke="#111111"
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Sketchy shadow/lip highlights */}
            <path
              d="M 65 80 C 270 82 490 78 695 80"
              stroke="#111111"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.72"
            />
            <path
              d="M 65 1000 C 490 1002 270 998 695 1000"
              stroke="#111111"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.72"
            />
            <path
              d="M 65 80 C 63 385 67 695 65 1000"
              stroke="#111111"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.45"
            />
            <path
              d="M 695 80 C 697 385 693 695 695 1000"
              stroke="#111111"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.45"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex min-h-[100svh] flex-col justify-center pt-24 pb-10 md:pt-28 md:pb-12">
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

          <div className="mt-6 grid grid-cols-1 items-center gap-8 md:mt-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
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
            </div>

            <div className="md:col-span-5 md:-mt-2 md:self-center">{portraitCard}</div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4 md:mt-12"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-950 pl-6 pr-2 py-2 text-[#f7f5f1] transition-colors hover:bg-[#6b5cff]"
            >
              <span className="text-sm">{t.hero.cta1}</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f7f5f1] text-neutral-950 transition-transform group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-900/30 px-5 py-3 text-sm transition-colors hover:border-neutral-900 hover:bg-neutral-950 hover:text-[#f7f5f1]"
            >
              {t.hero.cta2}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-neutral-500 md:mt-14"
          >
            <ArrowDown size={14} />
            {t.hero.scroll}
          </motion.div>
        </div>

        <div className="pb-24 pt-6 md:pb-36 md:pt-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 items-start">
            <motion.div
              key={`intro-${lang}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="max-w-none"
            >
              <div className="mb-3 text-xs tracking-[0.2em] uppercase text-neutral-500">
                {t.hero.label1}
              </div>
              <p className="max-w-[64ch] leading-relaxed text-neutral-700" style={{ fontSize: "1.0625rem" }}>
                {t.hero.intro}
              </p>
            </motion.div>

            <motion.div
              key={`now-${lang}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="max-w-none"
            >
              <div className="mb-3 text-xs tracking-[0.2em] uppercase text-neutral-500">
                {t.hero.label2}
              </div>
              <p className="max-w-[64ch] leading-relaxed text-neutral-700" style={{ fontSize: "1.0625rem" }}>
                {t.hero.currently}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
