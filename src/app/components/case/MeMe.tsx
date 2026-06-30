import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  LayoutGrid,
  Search,
  Shirt,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { useI18n } from "../../i18n";
import { CaseNav } from "./CaseNav";
import { scrollToCaseSection } from "./scrollToCaseSection";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import homeScreen from "../../../imports/meme/screens/home.jpg";
import guScreen from "../../../imports/meme/screens/gu.jpg";
import accessoriesScreen from "../../../imports/meme/screens/accessories.jpg";
import shirtsScreen from "../../../imports/meme/screens/shirts.jpg";
import cartScreen from "../../../imports/meme/screens/cart.jpg";
import searchScreen from "../../../imports/meme/screens/search.jpg";

const INK = "#050816";
const PAPER = "#f7f8fb";
const BORDER = "#e5e7eb";
const YELLOW = "#f4bd18";
const BLUE = "#19bff0";
const ROYAL = "#3167e8";
const BLACK = "#050505";

const PRODUCT_IMAGES = [
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=82&w=900",
  "https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=82&w=900",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=82&w=900",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=82&w=900",
];

const COPY = {
  en: {
    sections: [
      { id: "overview", label: "Overview" },
      { id: "audit", label: "Audit" },
      { id: "system", label: "System" },
      { id: "flow", label: "Flow" },
      { id: "ui", label: "UI" },
      { id: "reflection", label: "Reflection" },
    ],
    badge: "Case Study · 2025 · Fashion Ecommerce · Responsive Web",
    title: "MeMe · Redesigning YaMe's fashion shopping experience",
    concept: "SHOP WITH CLARITY",
    headline:
      "Turning a busy fashion website into a clearer path from browsing to buying.",
    description:
      "MeMe is a UI/UX redesign project for YaMe, focused on making product discovery easier, product information more scannable, and the purchase journey feel more confident from homepage to checkout.",
    cta1: "View UI Direction",
    cta2: "See Purchase Flow",
    overview: [
      {
        k: "Context",
        v: "YaMe has a large catalog across everyday fashion categories, which makes browsing powerful but also easy to overwhelm.",
      },
      {
        k: "Goal",
        v: "Create a cleaner ecommerce experience where users can scan collections, compare products, choose size, and move to checkout with fewer pauses.",
      },
      {
        k: "My Role",
        v: "UX audit, information structure, responsive UI, product card system, checkout flow, and visual direction.",
      },
      {
        k: "Output",
        v: "A redesigned website concept with homepage, listing, product detail, cart, checkout, account, and order states.",
      },
    ],
    auditTitle: "The main friction was not the catalog size, but how the catalog was presented.",
    auditIntro:
      "The redesign started from a simple question: when a user enters a fashion store online, what helps them feel oriented enough to keep browsing?",
    audit: [
      {
        icon: "search",
        k: "Product discovery",
        v: "Users need faster ways to reach collections, new arrivals, promotions, and relevant categories without reading too much at once.",
      },
      {
        icon: "grid",
        k: "Browsing rhythm",
        v: "Product grids need stronger hierarchy for image, price, discount, size availability, and quick actions.",
      },
      {
        icon: "shirt",
        k: "Product confidence",
        v: "A product detail page should answer fit, material, variant, delivery, and return questions before users hesitate.",
      },
      {
        icon: "bag",
        k: "Checkout clarity",
        v: "Cart and payment steps should reduce surprise costs and keep users aware of what happens next.",
      },
    ],
    systemTitle: "Design direction",
    systemIntro:
      "The UI direction keeps YaMe's energetic retail feeling, then gives it more breathing room through sharper hierarchy, stronger product imagery, and repeatable components.",
    principles: [
      "Image first, but never image only",
      "Promotions should guide, not interrupt",
      "Every card needs one clear next action",
      "Checkout should feel predictable before it asks for payment",
    ],
    tokens: [
      { k: "Primary", v: "#050505" },
      { k: "Danger", v: "#EF4444" },
      { k: "Warning", v: "#F59E0B" },
      { k: "Success", v: "#16A34A" },
      { k: "Infor", v: "#2563EB" },
      { k: "Playful", v: "#4F46E5" },
    ],
    flowTitle: "Purchase flow",
    flowIntro:
      "The redesigned flow is built around one continuous shopping decision: discover, compare, trust, choose, then checkout.",
    flow: [
      "Enter homepage",
      "Choose collection or category",
      "Filter by style, size, price, color",
      "Compare products in grid",
      "Open product detail",
      "Select size and variant",
      "Review cart",
      "Confirm delivery and payment",
    ],
    uiTitle: "Final UI direction",
    uiIntro:
      "The final UI board keeps the real MeMe screens together: homepage, campaign sections, product listing, product detail, cart, checkout, account, order state, and responsive variants.",
    previewLabel: "Figma UI board",
    reflectionTitle: "What this project taught me",
    reflection:
      "A fashion website does not only sell clothes. It sells confidence in a choice. The biggest design lesson was learning to balance editorial energy with practical ecommerce clarity, so the interface can still feel stylish while helping users make decisions faster.",
    next: "Next case study",
    nextProject: "Murror · AI Companion",
  },
  vi: {
    sections: [
      { id: "overview", label: "Tổng quan" },
      { id: "audit", label: "Audit" },
      { id: "system", label: "Hệ thống" },
      { id: "flow", label: "Luồng mua" },
      { id: "ui", label: "Giao diện" },
      { id: "reflection", label: "Suy ngẫm" },
    ],
    badge: "Case Study · 2025 · Fashion Ecommerce · Responsive Web",
    title: "MeMe · Redesign trải nghiệm mua sắm thời trang YaMe",
    concept: "MUA SẮM RÕ RÀNG HƠN",
    headline:
      "Biến một website thời trang nhiều thông tin thành hành trình mua sắm dễ nhìn, dễ chọn và dễ đi tiếp.",
    description:
      "MeMe là dự án redesign UI/UX cho YaMe, tập trung làm cho việc khám phá sản phẩm dễ hơn, thông tin sản phẩm dễ đọc hơn và hành trình từ trang chủ đến thanh toán rõ ràng hơn.",
    cta1: "Xem hướng UI",
    cta2: "Xem luồng mua hàng",
    overview: [
      {
        k: "Bối cảnh",
        v: "YaMe có danh mục sản phẩm lớn, trải rộng trên nhiều nhóm thời trang hằng ngày. Điều này tạo nhiều lựa chọn, nhưng cũng dễ làm người dùng bị ngợp.",
      },
      {
        k: "Mục tiêu",
        v: "Tạo một trải nghiệm ecommerce sạch hơn, giúp người dùng lướt bộ sưu tập, so sánh sản phẩm, chọn size và đi tới thanh toán ít bị khựng hơn.",
      },
      {
        k: "Vai trò",
        v: "UX audit, cấu trúc thông tin, responsive UI, hệ thống product card, checkout flow và visual direction.",
      },
      {
        k: "Đầu ra",
        v: "Concept website redesign gồm trang chủ, danh sách sản phẩm, chi tiết sản phẩm, giỏ hàng, thanh toán, tài khoản và trạng thái đơn hàng.",
      },
    ],
    auditTitle: "Điểm vướng chính không nằm ở việc có nhiều sản phẩm, mà nằm ở cách sản phẩm được trình bày.",
    auditIntro:
      "Dự án bắt đầu từ một câu hỏi rất thực tế: khi người dùng bước vào một cửa hàng thời trang online, điều gì giúp họ đủ định hướng để tiếp tục xem?",
    audit: [
      {
        icon: "search",
        k: "Khám phá sản phẩm",
        v: "Người dùng cần đi nhanh tới bộ sưu tập, hàng mới, ưu đãi và nhóm sản phẩm phù hợp mà không phải đọc quá nhiều cùng lúc.",
      },
      {
        icon: "grid",
        k: "Nhịp xem sản phẩm",
        v: "Product grid cần phân cấp rõ hơn giữa hình ảnh, giá, khuyến mãi, tình trạng size và hành động nhanh.",
      },
      {
        icon: "shirt",
        k: "Niềm tin khi chọn",
        v: "Trang chi tiết cần trả lời sớm các câu hỏi về form, chất liệu, biến thể, giao hàng và đổi trả trước khi người dùng do dự.",
      },
      {
        icon: "bag",
        k: "Thanh toán rõ ràng",
        v: "Giỏ hàng và thanh toán cần giảm chi phí bất ngờ, đồng thời cho người dùng biết bước tiếp theo sẽ là gì.",
      },
    ],
    systemTitle: "Hướng thiết kế",
    systemIntro:
      "Phần giao diện giữ lại tinh thần bán lẻ năng động của YaMe, sau đó làm nó thoáng hơn bằng phân cấp rõ, hình sản phẩm nổi bật hơn và component có thể lặp lại.",
    principles: [
      "Ưu tiên hình ảnh, nhưng không để hình ảnh tự nói một mình",
      "Khuyến mãi nên dẫn đường, không chen ngang",
      "Mỗi card cần có một hành động tiếp theo thật rõ",
      "Checkout phải dễ đoán trước khi yêu cầu người dùng thanh toán",
    ],
    tokens: [
      { k: "Primary", v: "#050505" },
      { k: "Danger", v: "#EF4444" },
      { k: "Warning", v: "#F59E0B" },
      { k: "Success", v: "#16A34A" },
      { k: "Infor", v: "#2563EB" },
      { k: "Playful", v: "#4F46E5" },
    ],
    flowTitle: "Luồng mua hàng",
    flowIntro:
      "Luồng redesign được xây quanh một quyết định mua sắm liên tục: khám phá, so sánh, tin tưởng, chọn sản phẩm rồi thanh toán.",
    flow: [
      "Vào trang chủ",
      "Chọn bộ sưu tập hoặc danh mục",
      "Lọc theo phong cách, size, giá, màu",
      "So sánh sản phẩm trong grid",
      "Mở trang chi tiết",
      "Chọn size và biến thể",
      "Kiểm tra giỏ hàng",
      "Xác nhận giao hàng và thanh toán",
    ],
    uiTitle: "Hướng giao diện cuối",
    uiIntro:
      "UI board cuối giữ đúng các màn hình MeMe trong Figma: trang chủ, campaign section, danh sách sản phẩm, chi tiết sản phẩm, giỏ hàng, thanh toán, tài khoản, trạng thái đơn hàng và responsive variants.",
    previewLabel: "Figma UI board",
    reflectionTitle: "Điều tôi học được",
    reflection:
      "Một website thời trang không chỉ bán quần áo. Nó còn bán sự tự tin trong lựa chọn. Bài học lớn nhất của dự án là cân bằng giữa tinh thần editorial và độ rõ ràng của ecommerce, để giao diện vẫn có chất thời trang nhưng giúp người dùng ra quyết định nhanh hơn.",
    next: "Case study tiếp theo",
    nextProject: "Murror · AI Companion",
  },
};

type IconName = "search" | "grid" | "shirt" | "bag";

function AuditIcon({ name }: { name: IconName }) {
  const props = { size: 20, strokeWidth: 1.8 };
  if (name === "search") return <Search {...props} />;
  if (name === "grid") return <LayoutGrid {...props} />;
  if (name === "shirt") return <Shirt {...props} />;
  return <ShoppingBag {...props} />;
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="text-xs md:text-sm tracking-[0.24em] uppercase text-neutral-500 mb-5">
      {children}
    </div>
  );
}

const COLOR_ROWS = [
  {
    name: "Primary",
    note: "Core text, footer, high contrast actions",
    colors: ["#FFFFFF", "#F5F5F5", "#D9D9D9", "#A3A3A3", "#737373", "#404040", "#171717", "#050505"],
  },
  {
    name: "Danger",
    note: "Sale tags, urgency, discount emphasis",
    colors: ["#FEF2F2", "#FECACA", "#F87171", "#EF4444", "#B91C1C", "#7F1D1D"],
  },
  {
    name: "Warning",
    note: "CTA highlight, promo, active retail moments",
    colors: ["#FFFBEB", "#FDE68A", "#FBBF24", "#F59E0B", "#B45309", "#78350F"],
  },
  {
    name: "Success",
    note: "Available states, confirmation, positive feedback",
    colors: ["#F0FDF4", "#BBF7D0", "#4ADE80", "#16A34A", "#15803D", "#14532D"],
  },
  {
    name: "Infor",
    note: "Links, support information, secondary guidance",
    colors: ["#EFF6FF", "#BFDBFE", "#60A5FA", "#2563EB", "#1D4ED8", "#1E3A8A"],
  },
  {
    name: "Playful",
    note: "Brand moments, campaign accents, expressive UI",
    colors: ["#EEF2FF", "#C7D2FE", "#818CF8", "#4F46E5", "#4338CA", "#312E81"],
  },
];

const SEMANTIC_TOKENS = [
  { k: "Background", v: "#FFFFFF", text: "#050505" },
  { k: "Surface", v: "#F5F5F5", text: "#050505" },
  { k: "Content", v: "#050505", text: "#FFFFFF" },
  { k: "Border", v: "#D9D9D9", text: "#050505" },
  { k: "Sale", v: "#EF4444", text: "#FFFFFF" },
  { k: "CTA", v: "#F59E0B", text: "#050505" },
];

const UI_SCREENS = [
  {
    key: "home",
    title: "Home",
    type: "Landing page",
    image: homeScreen,
    height: 560,
    scrollable: true,
    duration: 19000,
  },
  {
    key: "gu",
    title: "Gu",
    type: "Style discovery",
    image: guScreen,
    height: 560,
    scrollable: true,
    duration: 16500,
  },
  {
    key: "accessories",
    title: "Phụ kiện",
    type: "Category listing",
    image: accessoriesScreen,
    height: 520,
    scrollable: true,
    duration: 9500,
  },
  {
    key: "shirts",
    title: "Áo",
    type: "Product listing",
    image: shirtsScreen,
    height: 520,
    scrollable: true,
    duration: 9500,
  },
  {
    key: "cart",
    title: "Giỏ hàng",
    type: "Cart summary",
    image: cartScreen,
    height: 470,
    scrollable: true,
    duration: 6500,
  },
  {
    key: "search",
    title: "Search",
    type: "Search overlay",
    image: searchScreen,
    height: 260,
    scrollable: false,
    duration: 2600,
  },
];

function ColorSystemPresentation() {
  return (
    <div className="rounded-[2.25rem] bg-white border border-neutral-200 p-5 md:p-7 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
        <div>
          <div className="text-xs tracking-[0.22em] uppercase text-neutral-400">Color palette</div>
          <h3 className="mt-3 text-3xl md:text-4xl tracking-[-0.04em] font-semibold">
            MeMe color system
          </h3>
        </div>
        <p className="max-w-[420px] text-sm text-neutral-500 leading-relaxed">
          Primary grayscale keeps the fashion layout clean, while semantic colors handle sale, CTA, status, and expressive campaign moments.
        </p>
      </div>

      <div className="space-y-5">
        {COLOR_ROWS.map((row) => (
          <div key={row.name} className="grid lg:grid-cols-[180px_1fr] gap-4 lg:gap-7 items-center">
            <div>
              <div className="text-sm font-semibold">{row.name}</div>
              <div className="mt-1 text-xs leading-relaxed text-neutral-500">{row.note}</div>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
              {row.colors.map((color) => (
                <div key={`${row.name}-${color}`} className="group">
                  <div
                    className="h-14 rounded-2xl border border-black/5 transition-transform duration-300 group-hover:-translate-y-1"
                    style={{ backgroundColor: color }}
                  />
                  <div className="mt-2 text-[10px] tracking-[0.08em] text-neutral-400">{color}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-7 border-t border-neutral-200">
        <div className="text-xs tracking-[0.22em] uppercase text-neutral-400 mb-4">Semantic tokens</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {SEMANTIC_TOKENS.map((token) => (
            <div
              key={token.k}
              className="rounded-2xl p-4 min-h-[110px] flex flex-col justify-between border border-black/5"
              style={{ backgroundColor: token.v, color: token.text }}
            >
              <span className="text-xs tracking-[0.18em] uppercase opacity-70">{token.k}</span>
              <span className="text-sm font-semibold">{token.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScrollableScreenCard({
  title,
  type,
  image,
  height,
  scrollable,
  duration,
}: {
  title: string;
  type: string;
  image: string;
  height: number;
  scrollable: boolean;
  duration: number;
}) {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      onClick={() => scrollable && setActive((current) => !current)}
      data-active={active}
      data-scrollable={scrollable}
      className="meme-screen-card group text-left rounded-[2rem] bg-white border border-neutral-200 overflow-hidden shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:ring-offset-4 focus:ring-offset-[#f7f8fb]"
      style={{
        ["--preview-height" as string]: `${height}px`,
        ["--scroll-duration" as string]: `${duration}ms`,
      }}
      aria-label={`${title} ${scrollable ? "preview. Hover or tap to auto scroll." : "preview."}`}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-neutral-200">
        <div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">{type}</div>
          <div className="mt-1 text-lg font-semibold tracking-[-0.03em]">{title}</div>
        </div>
        {scrollable ? (
          <span className="rounded-full bg-neutral-950 text-white px-3 py-1.5 text-[10px] tracking-[0.16em] uppercase">
            Hover / Tap
          </span>
        ) : (
          <span className="rounded-full bg-neutral-100 text-neutral-500 px-3 py-1.5 text-[10px] tracking-[0.16em] uppercase">
            Static
          </span>
        )}
      </div>
      <div
        className="meme-screen-viewport relative overflow-hidden bg-[#f4f4f4]"
        style={{ height }}
      >
        <ImageWithFallback
          src={image}
          alt={`${title} screen from MeMe Figma UI`}
          className="meme-screen-image w-full h-auto block transition-transform ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transitionDuration: "var(--scroll-duration)" }}
        />
        {scrollable && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/18 to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0" />
        )}
      </div>
    </button>
  );
}

export function MeMe() {
  const { lang } = useI18n();
  const copy = COPY[lang];

  return (
    <div
      className="min-h-screen overflow-x-hidden antialiased selection:bg-[#f4bd18] selection:text-black"
      style={{ backgroundColor: PAPER, color: INK, fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{`
        @media (hover: hover) {
          .meme-screen-card[data-scrollable="true"]:hover .meme-screen-image {
            transform: translateY(calc((100% - var(--preview-height)) * -1));
          }
        }
        .meme-screen-card[data-scrollable="true"][data-active="true"] .meme-screen-image {
          transform: translateY(calc((100% - var(--preview-height)) * -1));
        }
      `}</style>
      <CaseNav
        sections={copy.sections}
        accent={YELLOW}
        bg="rgba(247,248,251,0.88)"
        text={INK}
        border="rgba(5,8,22,0.10)"
      />

      <main className="pt-16 md:pt-20">
        <section className="min-h-[calc(100vh-5rem)] flex items-center px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center"
            >
              <div>
                <div className="text-xs md:text-sm tracking-[0.22em] uppercase mb-7" style={{ color: YELLOW }}>
                  {copy.badge}
                </div>
                <h1
                  className="tracking-[-0.055em] leading-[0.92]"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
                >
                  MeMe
                </h1>
                <div className="mt-7 text-xs md:text-sm tracking-[0.28em] uppercase text-neutral-500">
                  {copy.concept}
                </div>
                <h2 className="mt-5 max-w-[760px] text-3xl md:text-5xl leading-[1.05] tracking-[-0.04em]">
                  {copy.headline}
                </h2>
                <p className="mt-7 max-w-[640px] text-neutral-600 leading-relaxed text-lg">
                  {copy.description}
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => scrollToCaseSection("ui")}
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-black text-white px-6 py-4 text-sm hover:bg-[#f4bd18] hover:text-black transition-colors"
                  >
                    {copy.cta1}
                    <ArrowUpRight size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToCaseSection("flow")}
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-neutral-300 px-6 py-4 text-sm hover:border-black hover:bg-white transition-colors"
                  >
                    {copy.cta2}
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 rounded-[3rem] bg-[#19bff0]/20 blur-3xl" />
                <div className="relative rounded-[2.5rem] bg-white border border-neutral-200 p-4 md:p-6 shadow-2xl">
                  <div className="rounded-[2rem] bg-black text-white p-6 md:p-8 overflow-hidden min-h-[520px] relative">
                    <div className="flex items-center justify-between">
                      <div className="font-black text-2xl tracking-tight">YaMe.vn</div>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">Redesign system</span>
                    </div>
                    <div className="mt-14 max-w-[420px]">
                      <div className="text-xs tracking-[0.24em] uppercase mb-4" style={{ color: YELLOW }}>
                        Team MeMe
                      </div>
                      <div
                        className="text-5xl md:text-7xl leading-[0.9] tracking-[-0.06em]"
                        style={{ fontFamily: "Fraunces, serif", fontWeight: 500 }}
                      >
                        Fashion
                        <br />
                        that moves
                        <br />
                        faster.
                      </div>
                    </div>
                    <div className="absolute right-5 bottom-5 w-[58%] rounded-[2rem] bg-white text-black p-4 shadow-xl">
                      <div className="grid grid-cols-2 gap-3">
                        {PRODUCT_IMAGES.slice(0, 2).map((image, index) => (
                          <div key={image} className="rounded-2xl overflow-hidden bg-neutral-100">
                            <ImageWithFallback
                              src={image}
                              alt={`MeMe hero product preview ${index + 1}`}
                              className="w-full aspect-[4/5] object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-semibold">New arrivals</span>
                        <span className="w-9 h-9 rounded-full text-black flex items-center justify-center" style={{ background: YELLOW }}>
                          <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </div>
                    <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full" style={{ background: BLUE }} />
                    <div className="absolute -left-12 bottom-20 w-28 h-28 rounded-[2rem] rotate-12" style={{ background: ROYAL }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="overview" className="px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto">
            <SectionLabel>( 01 · Project Overview )</SectionLabel>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {copy.overview.map((item) => (
                <motion.div
                  key={item.k}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="rounded-[2rem] bg-white border border-neutral-200 p-7 min-h-[260px]"
                >
                  <div className="text-xs tracking-[0.2em] uppercase mb-5" style={{ color: BLUE }}>
                    {item.k}
                  </div>
                  <p className="text-neutral-700 leading-relaxed">{item.v}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="audit" className="px-6 md:px-12 py-24 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <SectionLabel>( 02 · UX Audit )</SectionLabel>
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
              <div>
                <h2
                  className="tracking-[-0.04em] leading-[1]"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(2.5rem, 5.6vw, 5.75rem)" }}
                >
                  {copy.auditTitle}
                </h2>
                <p className="mt-7 text-neutral-600 leading-relaxed text-lg">{copy.auditIntro}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {copy.audit.map((item, index) => (
                  <div
                    key={item.k}
                    className="rounded-[2rem] p-7 border"
                    style={{ backgroundColor: index % 2 === 0 ? INK : PAPER, color: index % 2 === 0 ? "white" : INK, borderColor: index % 2 === 0 ? "transparent" : BORDER }}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-8"
                      style={{ backgroundColor: index % 2 === 0 ? YELLOW : "white", color: BLACK }}
                    >
                      <AuditIcon name={item.icon as IconName} />
                    </div>
                    <div className="text-[10px] tracking-[0.24em] uppercase opacity-60 mb-3">
                      0{index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em]">{item.k}</h3>
                    <p className="mt-4 leading-relaxed opacity-75">{item.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="system" className="px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <SectionLabel>( 03 · Design System Direction )</SectionLabel>
                <h2
                  className="tracking-[-0.04em] leading-[1]"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(2.75rem, 6vw, 6rem)" }}
                >
                  {copy.systemTitle}
                </h2>
                <p className="mt-7 text-neutral-600 leading-relaxed text-lg">{copy.systemIntro}</p>
              </div>
              <div className="space-y-5">
                <div className="rounded-[2rem] bg-black text-white p-7">
                  <div className="flex items-center gap-3 text-yellow-300 mb-6">
                    <Sparkles size={18} />
                    <span className="text-xs tracking-[0.2em] uppercase">Principles</span>
                  </div>
                  <div className="space-y-4">
                    {copy.principles.map((item) => (
                      <div key={item} className="flex gap-3 text-neutral-200">
                        <Check size={17} color={YELLOW} className="mt-1 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-16">
              <ColorSystemPresentation />
            </div>
          </div>
        </section>

        <section id="flow" className="px-6 md:px-12 py-24 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <SectionLabel>( 04 · Purchase Flow )</SectionLabel>
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16 items-start">
              <div>
                <h2
                  className="tracking-[-0.04em] leading-[1]"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(2.75rem, 5.4vw, 5.5rem)" }}
                >
                  {copy.flowTitle}
                </h2>
                <p className="mt-7 text-neutral-600 leading-relaxed text-lg">{copy.flowIntro}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {copy.flow.map((step, index) => (
                  <div key={step} className="rounded-[1.5rem] border border-neutral-200 bg-[#f7f8fb] p-5">
                    <div className="flex items-center justify-between gap-5">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      {index < copy.flow.length - 1 && <ArrowUpRight size={18} className="text-neutral-300" />}
                    </div>
                    <div className="mt-6 text-lg font-semibold tracking-[-0.02em]">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="ui" className="px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-[1500px] mx-auto">
            <div className="max-w-[940px] mb-12 md:mb-16">
              <SectionLabel>( 05 · Final UI )</SectionLabel>
              <h2
                className="tracking-[-0.04em] leading-[1]"
                style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(2.75rem, 6vw, 6.25rem)" }}
              >
                {copy.uiTitle}
              </h2>
              <p className="mt-7 text-neutral-600 leading-relaxed text-lg">{copy.uiIntro}</p>
              <p className="mt-4 text-sm text-neutral-500">
                {lang === "en"
                  ? "Hover each full-width preview to let long screens scroll slowly. On mobile, tap once to play and tap again to reset."
                  : "Hover từng màn full-width để màn dài tự cuộn chậm. Trên mobile, chạm một lần để chạy và chạm lần nữa để quay lại."}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {UI_SCREENS.map((screen) => (
                <ScrollableScreenCard
                  key={screen.key}
                  title={screen.title}
                  type={screen.type}
                  image={screen.image}
                  height={screen.height}
                  scrollable={screen.scrollable}
                  duration={screen.duration}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="reflection" className="px-6 md:px-12 py-24 md:py-32 bg-black text-white">
          <div className="max-w-[1200px] mx-auto">
            <SectionLabel>( 06 · Reflection )</SectionLabel>
            <h2
              className="tracking-[-0.04em] leading-[1]"
              style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(2.75rem, 6vw, 6rem)" }}
            >
              {copy.reflectionTitle}
            </h2>
            <p className="mt-8 text-xl md:text-2xl leading-relaxed text-neutral-300 max-w-[980px]">
              {copy.reflection}
            </p>

            <a
              href="#case/murror"
              className="mt-14 inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-white hover:bg-white hover:text-black transition-colors"
            >
              {copy.next} · {copy.nextProject}
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
