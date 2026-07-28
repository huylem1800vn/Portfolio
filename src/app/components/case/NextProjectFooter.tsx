import { useEffect, useState } from "react";
import { ArrowUpRight, Shuffle, CheckCircle2, ArrowLeft } from "lucide-react";
import { useI18n } from "../../i18n";
import { CV_URL } from "../../config/links";

export type CaseSlug = "angang" | "hdbiz" | "nepnha" | "meme" | "murror";

export type ProjectMeta = {
  slug: CaseSlug;
  title: string;
  subtitleEn: string;
  subtitleVi: string;
  cardBg: string;
  cardText: string;
  accent: string;
  btnBg: string;
  btnText: string;
};

export const CURRENT_PAGE_THEMES: Record<
  CaseSlug,
  { bg: string; text: string; border: string; muted: string; secondaryBtnBorder: string }
> = {
  angang: {
    bg: "#F5FAED",
    text: "#20251E",
    border: "#D9DFD1",
    muted: "#687064",
    secondaryBtnBorder: "#365B2B",
  },
  hdbiz: {
    bg: "#FFFCFA",
    text: "#241F20",
    border: "rgba(80,45,42,0.12)",
    muted: "#776B68",
    secondaryBtnBorder: "#DA2128",
  },
  nepnha: {
    bg: "#F7F2E8",
    text: "#20251E",
    border: "#D9DFD1",
    muted: "#687064",
    secondaryBtnBorder: "#365B2B",
  },
  meme: {
    bg: "#F7F8FB",
    text: "#050505",
    border: "rgba(5,8,22,0.12)",
    muted: "#525252",
    secondaryBtnBorder: "#050505",
  },
  murror: {
    bg: "#0B0D18",
    text: "#FFFFFF",
    border: "rgba(255,255,255,0.12)",
    muted: "rgba(255,255,255,0.6)",
    secondaryBtnBorder: "rgba(255,255,255,0.3)",
  },
};

export const PROJECTS: ProjectMeta[] = [
  {
    slug: "angang",
    title: "Ăng Ăng",
    subtitleEn: "Food Discovery & Decision App",
    subtitleVi: "Ứng dụng tìm quán ăn & đưa ra quyết định",
    cardBg: "#1F3A1D",
    cardText: "#ffffff",
    accent: "#9DD325",
    btnBg: "#9DD325",
    btnText: "#111111",
  },
  {
    slug: "hdbiz",
    title: "HDBiz",
    subtitleEn: "Enterprise Corporate Banking Platform",
    subtitleVi: "Nền tảng ngân hàng số doanh nghiệp HDBank",
    cardBg: "#A9151B",
    cardText: "#ffffff",
    accent: "#FFC20E",
    btnBg: "#DA2128",
    btnText: "#ffffff",
  },
  {
    slug: "nepnha",
    title: "Nếp Nhà",
    subtitleEn: "Family Living & Care System",
    subtitleVi: "Hệ thống nếp sống & chăm sóc gia đình",
    cardBg: "#365B2B",
    cardText: "#ffffff",
    accent: "#DDEACF",
    btnBg: "#DDEACF",
    btnText: "#20251E",
  },
  {
    slug: "meme",
    title: "MeMe",
    subtitleEn: "YaMe E-Commerce Redesign",
    subtitleVi: "Tái thiết kế thương mại điện tử YaMe",
    cardBg: "#141414",
    cardText: "#ffffff",
    accent: "#F4BD18",
    btnBg: "#F4BD18",
    btnText: "#050505",
  },
  {
    slug: "murror",
    title: "Unfold / Murror",
    subtitleEn: "AI Emotional Companion",
    subtitleVi: "Bạn đồng hành cảm xúc AI",
    cardBg: "#171A2E",
    cardText: "#ffffff",
    accent: "#A78BFA",
    btnBg: "#A78BFA",
    btnText: "#0B0D18",
  },
];

function getNextRandomProject(currentSlug: CaseSlug): { project: ProjectMeta; visitedCount: number } {
  try {
    const stored = sessionStorage.getItem("visited_case_projects");
    let visited: CaseSlug[] = stored ? JSON.parse(stored) : [];

    if (!visited.includes(currentSlug)) {
      visited.push(currentSlug);
    }

    let unvisited = PROJECTS.filter((p) => p.slug !== currentSlug && !visited.includes(p.slug));

    if (unvisited.length === 0) {
      visited = [currentSlug];
      unvisited = PROJECTS.filter((p) => p.slug !== currentSlug);
    }

    sessionStorage.setItem("visited_case_projects", JSON.stringify(visited));

    const randomIndex = Math.floor(Math.random() * unvisited.length);
    return {
      project: unvisited[randomIndex],
      visitedCount: visited.length,
    };
  } catch {
    const remaining = PROJECTS.filter((p) => p.slug !== currentSlug);
    return {
      project: remaining[Math.floor(Math.random() * remaining.length)],
      visitedCount: 1,
    };
  }
}

export function NextProjectFooter({ currentSlug }: { currentSlug: CaseSlug }) {
  const { lang } = useI18n();
  const [nextData, setNextData] = useState<{ project: ProjectMeta; visitedCount: number } | null>(null);

  useEffect(() => {
    setNextData(getNextRandomProject(currentSlug));
  }, [currentSlug]);

  if (!nextData) return null;

  const { project: next, visitedCount } = nextData;
  const pageTheme = CURRENT_PAGE_THEMES[currentSlug];
  const isVi = lang === "vi";

  return (
    <div className="w-full transition-colors duration-500" style={{ backgroundColor: pageTheme.bg, color: pageTheme.text }}>
      <section className="relative overflow-hidden py-16 md:py-24 border-t" style={{ borderColor: pageTheme.border }}>
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider border"
              style={{
                backgroundColor: `${pageTheme.text}0D`,
                borderColor: pageTheme.border,
                color: pageTheme.text,
              }}
            >
              <Shuffle size={14} style={{ color: next.accent }} />
              <span>
                {isVi
                  ? `Random Next · Đã khám phá ${visitedCount}/5 dự án`
                  : `Random Next · Discovered ${visitedCount}/5 projects`}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs" style={{ color: pageTheme.muted }}>
              <CheckCircle2 size={14} style={{ color: next.accent }} />
              <span>{isVi ? "Tự động gợi ý dự án chưa xem" : "Auto-suggests unvisited project"}</span>
            </div>
          </div>

          {/* Next Project Card Banner */}
          <div
            className="mt-8 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden transition-all"
            style={{ backgroundColor: next.cardBg, color: next.cardText }}
          >
            {/* Ambient glow inside card */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: next.accent }}
            />

            <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: next.accent }}>
                  {isVi ? "Khám phá dự án ngẫu nhiên tiếp theo" : "Explore next random case study"}
                </span>
                <h2 className="mt-2 text-4xl font-normal leading-tight md:text-6xl" style={{ fontFamily: "Fraunces, serif" }}>
                  {next.title}
                </h2>
                <p className="mt-3 text-base md:text-xl opacity-85 leading-relaxed">
                  {isVi ? next.subtitleVi : next.subtitleEn}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end gap-4">
                <a
                  href={`#case/${next.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = `#case/${next.slug}`;
                    window.scrollTo(0, 0);
                    setTimeout(() => window.scrollTo(0, 0), 50);
                  }}
                  className="group inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-base font-semibold transition-all hover:scale-105 shadow-xl"
                  style={{ backgroundColor: next.btnBg, color: next.btnText }}
                >
                  <span>{isVi ? "Đến dự án này" : "View case study"}</span>
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full transition-transform group-hover:rotate-45"
                    style={{ backgroundColor: next.btnText, color: next.btnBg }}
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </a>

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = "";
                    window.scrollTo(0, 0);
                    setTimeout(() => window.scrollTo(0, 0), 50);
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium transition-all hover:bg-white/20 text-white"
                >
                  <ArrowLeft size={16} />
                  <span>{isVi ? "Về Trang chủ Portfolio" : "Back to Portfolio"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer (Copyright & Social Links) matching Page Background */}
      <footer className="border-t py-10" style={{ borderColor: pageTheme.border }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs" style={{ color: pageTheme.muted }}>
          <div>© {new Date().getFullYear()} Huỳnh Minh Huy · Portfolio Case Studies</div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="https://www.behance.net/minhhuyhunh2" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">
              Behance
            </a>
            <a href="https://www.linkedin.com/in/huy-huynh-minh/" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">
              LinkedIn
            </a>
            <a href="mailto:huylem1800vn@gmail.com" className="hover:opacity-100 transition-opacity">
              Email
            </a>
            <a href={CV_URL} target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
