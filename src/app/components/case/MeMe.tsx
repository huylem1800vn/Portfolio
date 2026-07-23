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
import { NextProjectFooter } from "./NextProjectFooter";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { MEME_UI_SCREENS } from "../../config/meme-assets";

const {
  home: homeScreen,
  gu: guScreen,
  accessories: accessoriesScreen,
  shirts: shirtsScreen,
  cart: cartScreen,
  search: searchScreen,
} = MEME_UI_SCREENS;

const INK = "#050816";
const PAPER = "#f7f8fb";
const BORDER = "#e5e7eb";
const YELLOW = "#f4bd18";
const BLUE = "#19bff0";
const ROYAL = "#3167e8";
const BLACK = "#050505";

const COPY = {
  en: {
    sections: [
      { id: "overview", label: "Overview" },
      { id: "audit", label: "Audit" },
      { id: "competitors", label: "Competitors" },
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
    competitorLabel: "( 03 · Competitor Research )",
    competitorTitle:
      "Looking at fashion ecommerce references to understand how users browse, compare, and trust products.",
    competitorIntro:
      "I reviewed Uniqlo, Routine, and IconDenim to see how each brand structures navigation, product discovery, product cards, and purchase confidence.",
    competitorReference: "Reference",
    competitorInsight: "Observation",
    competitorTakeaway: "Design takeaway",
    competitors: [
      {
        brand: "Uniqlo",
        focus: "Clear catalog structure",
        insight:
          "Uniqlo keeps navigation calm and product information easy to scan, which helps users who already know what category they want.",
        takeaway:
          "Make categories easier to follow and reduce visual noise while users browse product lists.",
      },
      {
        brand: "Routine",
        focus: "Local fashion browsing",
        insight:
          "Routine feels close to Vietnamese shopping behavior, with familiar categories, campaign sections, and outfit-oriented discovery.",
        takeaway:
          "Keep the retail energy, but make promotions, category entry points, and listing pages easier to move through.",
      },
      {
        brand: "IconDenim",
        focus: "Style-led product confidence",
        insight:
          "IconDenim leans into denim attitude and brand personality, helping products feel more expressive instead of generic.",
        takeaway:
          "Balance clear product information with stronger fashion personality so the interface does not feel too plain.",
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
      { id: "competitors", label: "Đối thủ" },
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
    competitorLabel: "( 03 · Nghiên cứu đối thủ )",
    competitorTitle:
      "Nhìn vào các website thời trang để hiểu cách người dùng xem, so sánh và tin vào sản phẩm.",
    competitorIntro:
      "Tôi tham khảo Uniqlo, Routine và IconDenim để xem mỗi thương hiệu tổ chức điều hướng, khám phá sản phẩm, product card và cảm giác tin tưởng khi mua như thế nào.",
    competitorReference: "Tham chiếu",
    competitorInsight: "Điểm quan sát",
    competitorTakeaway: "Hướng áp dụng",
    competitors: [
      {
        brand: "Uniqlo",
        focus: "Cấu trúc danh mục rõ",
        insight:
          "Uniqlo giữ điều hướng khá bình tĩnh, thông tin sản phẩm dễ quét nhanh, phù hợp với người dùng đã biết mình muốn tìm nhóm sản phẩm nào.",
        takeaway:
          "Làm danh mục dễ theo hơn và giảm nhiễu thị giác trong lúc người dùng xem danh sách sản phẩm.",
      },
      {
        brand: "Routine",
        focus: "Hành vi mua sắm thời trang nội địa",
        insight:
          "Routine gần với thói quen mua sắm của người dùng Việt hơn, có nhóm sản phẩm quen thuộc, campaign section và cách khám phá theo outfit.",
        takeaway:
          "Giữ tinh thần bán lẻ năng động, nhưng làm khuyến mãi, điểm vào danh mục và listing dễ đi tiếp hơn.",
      },
      {
        brand: "IconDenim",
        focus: "Cá tính sản phẩm và niềm tin khi chọn",
        insight:
          "IconDenim nhấn vào chất denim và cá tính thương hiệu, giúp sản phẩm có cảm giác rõ style hơn thay vì chỉ là một item trong grid.",
        takeaway:
          "Cân bằng giữa thông tin sản phẩm rõ ràng và cá tính thời trang để giao diện không bị quá nhạt.",
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
    name: "Gray",
    colors: [
      ["50", "#f6f6f6"],
      ["100", "#e7e7e7"],
      ["200", "#d1d1d1"],
      ["300", "#b0b0b0"],
      ["400", "#888888"],
      ["500", "#6d6d6d"],
      ["600", "#5d5d5d"],
      ["700", "#4f4f4f"],
      ["800", "#454545"],
      ["900", "#3d3d3d"],
      ["950", "#000000"],
    ],
  },
  {
    name: "Red",
    colors: [
      ["50", "#fef2f2"],
      ["100", "#fee2e2"],
      ["200", "#fecaca"],
      ["300", "#fca5a5"],
      ["400", "#f87171"],
      ["500", "#ef4444"],
      ["600", "#dc2626"],
      ["700", "#b91c1c"],
      ["800", "#991b1b"],
      ["900", "#7f1d1d"],
      ["950", "#450a0a"],
    ],
  },
  {
    name: "Yellow",
    colors: [
      ["50", "#fefce8"],
      ["100", "#fef9c3"],
      ["200", "#fef08a"],
      ["300", "#fde047"],
      ["400", "#facc15"],
      ["500", "#eab308"],
      ["600", "#ca8a04"],
      ["700", "#a16207"],
      ["800", "#854d0e"],
      ["900", "#713f12"],
      ["950", "#713f12"],
    ],
  },
  {
    name: "Green",
    colors: [
      ["50", "#f0fdf5"],
      ["100", "#dcfce8"],
      ["200", "#bbf7d1"],
      ["300", "#86efad"],
      ["400", "#4ade80"],
      ["500", "#22c55e"],
      ["600", "#16a34a"],
      ["700", "#15803c"],
      ["800", "#166533"],
      ["900", "#14532b"],
      ["950", "#052e14"],
    ],
  },
  {
    name: "Blue",
    colors: [
      ["50", "#eff5ff"],
      ["100", "#dbe8fe"],
      ["200", "#bfd7fe"],
      ["300", "#93bbfd"],
      ["400", "#609afa"],
      ["500", "#3b82f6"],
      ["600", "#2570eb"],
      ["700", "#2570eb"],
      ["800", "#1e55af"],
      ["900", "#1e478a"],
      ["950", "#172e54"],
    ],
  },
  {
    name: "Purple",
    colors: [
      ["50", "#eeeeff"],
      ["100", "#e0e1ff"],
      ["200", "#c7c8fe"],
      ["300", "#a5a7fc"],
      ["400", "#8184f8"],
      ["500", "#6366f1"],
      ["600", "#4649e5"],
      ["700", "#383bca"],
      ["800", "#3032a3"],
      ["900", "#2e3081"],
      ["950", "#1b1c4b"],
    ],
  },
];

const SHADE_GROUPS = [
  {
    name: "White",
    colors: [
      ["20%", "#ffffff", "rgba(255,255,255,0.2)"],
      ["40%", "#ffffff", "rgba(255,255,255,0.4)"],
      ["60%", "#ffffff", "rgba(255,255,255,0.6)"],
      ["80%", "#ffffff", "rgba(255,255,255,0.8)"],
    ],
  },
  {
    name: "White&Black",
    colors: [
      ["00", "#ffffff", "#ffffff"],
      ["50", "#000000", "#333333"],
    ],
  },
  {
    name: "Black",
    colors: [
      ["20%", "#000000", "rgba(0,0,0,0.2)"],
      ["40%", "#000000", "rgba(0,0,0,0.4)"],
      ["60%", "#000000", "rgba(0,0,0,0.6)"],
      ["80%", "#000000", "rgba(0,0,0,0.8)"],
    ],
  },
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
          This palette follows the MeMe design system from Figma, with neutral colors for fashion layouts and supporting colors for sale, CTA, status, and campaign moments.
        </p>
      </div>

      <div className="space-y-5">
        {COLOR_ROWS.map((row) => (
          <div key={row.name} className="grid lg:grid-cols-[180px_1fr] gap-4 lg:gap-7 items-center">
            <div>
              <div className="text-sm font-semibold">{row.name}</div>
              <div className="mt-1 text-xs leading-relaxed text-neutral-500">Scale 50 to 950</div>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-11 gap-2">
              {row.colors.map(([step, color]) => (
                <div key={`${row.name}-${step}-${color}`} className="group min-w-0">
                  <div
                    className="h-14 rounded-xl border border-black/5 transition-transform duration-300 group-hover:-translate-y-1"
                    style={{ backgroundColor: color }}
                  />
                  <div className="mt-2 flex flex-col gap-0.5">
                    <span className="text-[10px] font-semibold text-neutral-700">{step}</span>
                    <span className="truncate text-[10px] tracking-[0.04em] text-neutral-400">{color}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-7 border-t border-neutral-200">
        <div className="text-xs tracking-[0.22em] uppercase text-neutral-400 mb-5">Shade</div>
        <div className="grid md:grid-cols-3 gap-5">
          {SHADE_GROUPS.map((group) => (
            <div key={group.name}>
              <div className="text-sm font-semibold mb-3">{group.name}</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {group.colors.map(([step, hex, fill]) => (
                  <div key={`${group.name}-${step}`} className="min-w-0">
                    <div
                      className="h-12 rounded-xl border border-black/5"
                      style={{ backgroundColor: fill }}
                    />
                    <div className="mt-2 flex flex-col gap-0.5">
                      <span className="text-[10px] font-semibold text-neutral-700">{step}</span>
                      <span className="truncate text-[10px] tracking-[0.04em] text-neutral-400">{hex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MeMeHeroPreview() {
  const navItems = ["SALE", "GU", "ÁO", "QUẦN", "PHỤ KIỆN", "MỚI"];

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[3rem] bg-[#19bff0]/20 blur-3xl" />
      <div className="relative rounded-[2.5rem] bg-white border border-neutral-200 p-4 md:p-6 shadow-2xl">
        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-white border border-neutral-200">
          <div className="flex h-14 items-center justify-between border-b border-neutral-200 px-5 text-[10px] md:text-xs">
            <div className="flex items-center gap-2 font-black tracking-tight text-lg">YaMe.vn</div>
            <div className="hidden md:flex items-center gap-5 font-semibold text-neutral-700">
              {navItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="flex items-center gap-3 text-neutral-500">
              <Search size={16} />
              <ShoppingBag size={16} />
            </div>
          </div>

          <div className="bg-[#fca5a5] px-5 py-2 text-center text-xs font-semibold text-black">
            Sale 11/11 · Make browsing faster and clearer
          </div>

          <div className="relative min-h-[452px] bg-[#f7f8fb]">
            <ImageWithFallback
              src={homeScreen}
              alt="MeMe redesigned YaMe homepage preview"
              className="absolute inset-0 h-full w-full object-cover object-top opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20" />

            <div className="relative z-10 p-6 md:p-8">
              <div className="max-w-[360px]">
                <div className="mb-4 inline-flex rounded-full bg-black px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                  MeMe redesign
                </div>
                <h3
                  className="tracking-[-0.06em] leading-[0.95] text-black"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(3rem, 6vw, 5.75rem)" }}
                >
                  Fashion
                  <br />
                  made easier.
                </h3>
                <p className="mt-5 max-w-[300px] text-sm leading-relaxed text-neutral-600">
                  Cleaner navigation, stronger product discovery, and a smoother path to checkout.
                </p>
              </div>
            </div>

            <div className="absolute right-5 top-24 hidden w-[44%] rounded-[1.75rem] border border-neutral-200 bg-white p-3 shadow-2xl md:block">
              <div className="overflow-hidden rounded-[1.25rem] bg-neutral-100">
                <ImageWithFallback
                  src={guScreen}
                  alt="MeMe style discovery page preview"
                  className="h-40 w-full object-cover object-top"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-neutral-950">Style discovery</div>
                  <div className="mt-1 text-[10px] text-neutral-500">GU · Outfit browsing</div>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </div>

            <div className="absolute bottom-5 right-5 grid w-[58%] grid-cols-3 gap-3">
              {[accessoriesScreen, shirtsScreen, cartScreen].map((image, index) => (
                <div key={index} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-1 shadow-lg">
                  <ImageWithFallback
                    src={image}
                    alt={`MeMe feature preview ${index + 1}`}
                    className="h-24 w-full rounded-xl object-cover object-top"
                  />
                </div>
              ))}
            </div>

            <div className="absolute -left-10 bottom-16 h-28 w-28 rounded-[2rem] rotate-12 opacity-90" style={{ backgroundColor: ROYAL }} />
            <div className="absolute -right-14 -top-12 h-36 w-36 rounded-full opacity-90" style={{ backgroundColor: BLUE }} />
          </div>
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

      <main className="pt-12 md:pt-16">
        <section className="px-6 md:px-12 pt-6 md:pt-8 pb-12 md:pb-16">
          <div className="max-w-[1400px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-12 items-start"
            >
              <div>
                <div className="text-xs md:text-sm tracking-[0.22em] uppercase mb-4" style={{ color: YELLOW }}>
                  {copy.badge}
                </div>
                <h1
                  className="tracking-[-0.055em] leading-[0.92]"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(3.2rem, 7.5vw, 5.8rem)" }}
                >
                  MeMe
                </h1>
                <div className="mt-4 text-xs md:text-sm tracking-[0.28em] uppercase text-neutral-500 font-medium">
                  {copy.concept}
                </div>
                <h2 className="mt-4 max-w-[760px] text-2xl md:text-4xl leading-[1.08] tracking-[-0.04em]">
                  {copy.headline}
                </h2>
                <p className="mt-4 max-w-[640px] text-neutral-600 leading-relaxed text-sm md:text-base">
                  {copy.description}
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => scrollToCaseSection("ui")}
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-[#f4bd18] hover:text-black transition-colors"
                  >
                    {copy.cta1}
                    <ArrowUpRight size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToCaseSection("flow")}
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium hover:border-black hover:bg-white transition-colors"
                  >
                    {copy.cta2}
                  </button>
                </div>
              </div>

              <MeMeHeroPreview />
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

        <section id="competitors" className="px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <SectionLabel>{copy.competitorLabel}</SectionLabel>
                <h2
                  className="tracking-[-0.04em] leading-[1]"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(2.5rem, 5.4vw, 5.6rem)" }}
                >
                  {copy.competitorTitle}
                </h2>
                <p className="mt-7 text-neutral-600 leading-relaxed text-lg">{copy.competitorIntro}</p>
              </div>

              <div className="grid gap-4">
                {copy.competitors.map((item, index) => (
                  <motion.div
                    key={item.brand}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="rounded-[2rem] border border-neutral-200 bg-white p-6 md:p-7 shadow-sm"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="text-[10px] tracking-[0.22em] uppercase text-neutral-400">
                          {copy.competitorReference} 0{index + 1}
                        </div>
                        <h3 className="mt-3 text-3xl md:text-4xl font-semibold tracking-[-0.05em]">
                          {item.brand}
                        </h3>
                      </div>
                      <div
                        className="inline-flex w-fit rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em]"
                        style={{
                          backgroundColor: index === 1 ? INK : "#fff7d6",
                          color: index === 1 ? "white" : INK,
                        }}
                      >
                        {item.focus}
                      </div>
                    </div>

                    <div className="mt-7 grid md:grid-cols-2 gap-4">
                      <div className="rounded-[1.5rem] bg-[#f7f8fb] p-5">
                        <div className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                          {copy.competitorInsight}
                        </div>
                        <p className="mt-3 leading-relaxed text-neutral-700">{item.insight}</p>
                      </div>
                      <div
                        className="rounded-[1.5rem] p-5"
                        style={{
                          backgroundColor: index === 1 ? YELLOW : INK,
                          color: index === 1 ? INK : "white",
                        }}
                      >
                        <div className="text-[10px] tracking-[0.2em] uppercase opacity-60">
                          {copy.competitorTakeaway}
                        </div>
                        <p className="mt-3 leading-relaxed opacity-85">{item.takeaway}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="system" className="px-6 md:px-12 py-24 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <SectionLabel>( 04 · Design System Direction )</SectionLabel>
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

        <section id="flow" className="px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto">
            <SectionLabel>( 05 · Purchase Flow )</SectionLabel>
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
              <SectionLabel>( 06 · Final UI )</SectionLabel>
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

        <section id="reflection" className="px-6 md:px-12 py-20 bg-black text-white">
          <div className="max-w-[1200px] mx-auto">
            <SectionLabel>( 07 · Reflection )</SectionLabel>
            <h2
              className="tracking-[-0.04em] leading-[1]"
              style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              {copy.reflectionTitle}
            </h2>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-neutral-300 max-w-[980px]">
              {copy.reflection}
            </p>
          </div>
        </section>
      </main>

      <NextProjectFooter currentSlug="meme" />
    </div>
  );
}
