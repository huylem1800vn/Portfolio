import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useI18n } from "../i18n";
import { CV_URL } from "../config/links";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.work, href: "#work" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.resume, href: CV_URL, external: true },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-[#f7f5f1]/70 border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between gap-6">
        <a
          href="#top"
          className="tracking-tight"
          style={{ fontFamily: "Fraunces, serif", fontSize: "1.25rem", fontWeight: 500 }}
        >
          minhhuy<span className="text-[#6b5cff]">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              className="relative text-sm tracking-wide text-neutral-700 hover:text-neutral-950 transition-colors group"
            >
              {l.label}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#6b5cff] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="relative inline-flex items-center bg-neutral-900/[0.06] border border-neutral-900/10 rounded-full p-1 text-xs"
            role="group"
            aria-label="Language toggle"
          >
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
              className="absolute top-1 bottom-1 w-9 rounded-full bg-neutral-950"
              style={{ left: lang === "en" ? 4 : "calc(50% - 2px)" }}
            />
            <button
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`relative z-10 w-9 h-7 rounded-full tracking-wide transition-colors ${
                lang === "en" ? "text-[#f7f5f1]" : "text-neutral-700"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("vi")}
              aria-pressed={lang === "vi"}
              className={`relative z-10 w-9 h-7 rounded-full tracking-wide transition-colors ${
                lang === "vi" ? "text-[#f7f5f1]" : "text-neutral-700"
              }`}
            >
              VI
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
