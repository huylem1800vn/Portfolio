import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "vi";

type Dict = {
  nav: { work: string; process: string; about: string; resume: string };
  hero: {
    badge: string;
    name: string;
    role: string;
    concept: string;
    headline: string;
    intro: string;
    cta1: string;
    cta2: string;
    scroll: string;
    label1: string;
    label2: string;
    currently: string;
  };
  marquee: string[];
  work: {
    tag: string;
    title1: string;
    title2: string;
    italic: string;
    sub: string;
    problemLabel: string;
    solutionLabel: string;
    readMore: string;
    typeLabel: string;
    yearLabel: string;
    projects: Array<{
      type: string;
      subtitle: string;
      problem: string;
      solution: string;
    }>;
  };
  process: {
    tag: string;
    title1: string;
    italic: string;
    title2: string;
    desc: string;
    stepLabel: string;
    steps: Array<{ title: string; desc: string }>;
  };
  about: {
    tag: string;
    title1: string;
    italic: string;
    title2: string;
    body: string;
    facts: Array<{ k: string; v: string }>;
    skillsLabel: string;
    learningLabel: string;
    learning: string;
  };
  contact: {
    tag: string;
    title1: string;
    italic: string;
    title2: string;
    body: string;
    resume: string;
    backTop: string;
    footer: string;
  };
};

const en: Dict = {
  nav: { work: "Work", process: "Process", about: "About", resume: "Resume" },
  hero: {
    badge: "Portfolio · 2026 — Available for internships",
    name: "HUYNH MINH HUY",
    role: "UI/UX Designer",
    concept: "BRIDGE",
    headline:
      "Designing the bridge between user needs, product logic, and technical execution.",
    intro:
      "I'm a UI/UX designer with a foundation in software development. I focus on creating clear user flows, practical interfaces, and scalable design systems that are both beautiful and easy to build.",
    cta1: "View Projects",
    cta2: "Download CV",
    scroll: "Scroll to explore",
    label1: "( 01 ) Designer",
    label2: "( 02 ) Currently",
    currently:
      "UI/UX Designer bridging design & code. Building case studies around food discovery, e-commerce, and AI self-growth.",
  },
  marquee: [
    "User needs",
    "Product logic",
    "Technical execution",
    "Design systems",
    "Clear interfaces",
    "Bridging design & code",
  ],
  work: {
    tag: "( Selected Work — 2025 / 2026 )",
    title1: "Case studies,",
    italic: "not",
    title2: " screenshots.",
    sub: "Three projects. Each one solving a real, tangible user decision.",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    readMore: "Read full case study",
    typeLabel: "",
    yearLabel: "",
    projects: [
      {
        type: "Mobile · iOS / Android",
        subtitle:
          "Helping young users choose where to eat with real-time context and mood-based recommendations.",
        problem:
          "Young users in Ho Chi Minh City often struggle to choose where to eat because of choice overload, unreliable reviews, and missing real-time context such as crowd level, opening status, or available seats.",
        solution:
          "A mood-based food discovery experience that combines trusted information, real-time restaurant status, and personalized recommendations.",
      },
      {
        type: "Web · Responsive",
        subtitle:
          "Improving shopping clarity and conversion flow for a fashion e-commerce experience.",
        problem:
          "The current shopping experience has UX barriers such as complex navigation, difficulty finding products, fragmented user journeys, and high bounce risk.",
        solution:
          "A redesigned e-commerce experience with clearer navigation, better product discovery, improved information architecture, and smoother purchase flow.",
      },
      {
        type: "Mobile · AI Companion",
        subtitle:
          "A low-effort emotional check-in experience for reflection, grounding, and daily self-growth.",
        problem:
          "Users may struggle to express emotions when overwhelmed, especially when they are forced to type or explain too much.",
        solution:
          "An AI companion experience with quick emotional check-ins, visual grounding, gentle interactions, and personalized self-growth rituals.",
      },
    ],
  },
  process: {
    tag: "( Design Process )",
    title1: "How a project",
    italic: "moves",
    title2: " forward.",
    desc: "Five steps I return to in every project. Not a linear template — more like a checklist I loop through until the experience genuinely helps the user decide.",
    stepLabel: "Step",
    steps: [
      {
        title: "Understand",
        desc: "Define the user problem and product context. Frame the real question before reaching for solutions.",
      },
      {
        title: "Research",
        desc: "Collect insights from users, competitors, and behavior patterns. Look for the gap between what people say and what they do.",
      },
      {
        title: "Structure",
        desc: "Create user flows, information architecture, and wireframes. Make the skeleton work before dressing it up.",
      },
      {
        title: "Design",
        desc: "Build UI screens, components, and design system foundations. Make the interface clear, consistent, and accessible.",
      },
      {
        title: "Validate",
        desc: "Review usability, collect feedback, and improve the experience. Treat the first version as a hypothesis.",
      },
    ],
  },
  about: {
    tag: "( About )",
    title1: "A designer who can also ",
    italic: "ship",
    title2: " the build.",
    body: "I'm Minh Huy, a UI/UX designer from Vietnam with a foundation in software development. I'm interested in designing clear, practical, and scalable digital products. My work focuses on user flows, interface systems, and solving real user problems through structured design thinking — informed by what's actually buildable.",
    facts: [
      { k: "Based in", v: "Vietnam" },
      { k: "Background", v: "Software Development" },
      { k: "Focus", v: "Product UX & UI" },
      { k: "Open to", v: "Internships, junior roles" },
    ],
    skillsLabel: "( Skills & Tools )",
    learningLabel: "Currently learning",
    learning:
      "Design systems at scale, accessibility patterns, and how research findings translate into measurable interface decisions.",
  },
  contact: {
    tag: "( Contact — Let's build something useful )",
    title1: "Have a ",
    italic: "project",
    title2: " in mind?",
    body: "I'm currently open to internships, junior UI/UX roles, and collaborative case studies. The best way to reach me is by email — I usually reply within a day.",
    resume: "Download CV",
    backTop: "Back to top ↑",
    footer: "© 2026 Huỳnh Minh Huy — Designed & built with care",
  },
};

const vi: Dict = {
  nav: { work: "Dự án", process: "Quy trình", about: "Giới thiệu", resume: "CV" },
  hero: {
    badge: "Portfolio · 2026 — Đang tìm cơ hội thực tập",
    name: "HUỲNH MINH HUY",
    role: "UI/UX Designer",
    concept: "BRIDGE",
    headline:
      "Thiết kế cầu nối giữa nhu cầu người dùng, logic sản phẩm và khả năng triển khai kỹ thuật.",
    intro:
      "Tôi là UI/UX Designer có nền tảng về phát triển phần mềm. Tôi tập trung tạo ra luồng người dùng rõ ràng, giao diện thực tế và hệ thống thiết kế có khả năng mở rộng, vừa đẹp vừa dễ triển khai.",
    cta1: "Xem dự án",
    cta2: "Tải CV",
    scroll: "Cuộn để khám phá",
    label1: "( 01 ) Nhà thiết kế",
    label2: "( 02 ) Hiện tại",
    currently:
      "UI/UX Designer kết nối thiết kế & lập trình. Đang xây dựng case study về khám phá ẩm thực, thương mại điện tử và đồng hành AI.",
  },
  marquee: [
    "Nhu cầu người dùng",
    "Logic sản phẩm",
    "Triển khai kỹ thuật",
    "Hệ thống thiết kế",
    "Giao diện rõ ràng",
    "Cầu nối thiết kế & code",
  ],
  work: {
    tag: "( Dự án tiêu biểu — 2025 / 2026 )",
    title1: "Case study,",
    italic: "không phải",
    title2: " ảnh chụp.",
    sub: "Ba dự án. Mỗi dự án giải quyết một quyết định thực tế của người dùng.",
    problemLabel: "Vấn đề",
    solutionLabel: "Giải pháp",
    readMore: "Xem case study đầy đủ",
    typeLabel: "",
    yearLabel: "",
    projects: [
      {
        type: "Mobile · iOS / Android",
        subtitle:
          "Giúp người dùng trẻ chọn nơi ăn uống nhờ ngữ cảnh thời gian thực và gợi ý theo tâm trạng.",
        problem:
          "Người trẻ ở TP.HCM thường khó chọn nơi ăn vì quá nhiều lựa chọn, đánh giá thiếu tin cậy, và thiếu thông tin theo thời gian thực như độ đông, giờ mở cửa hay chỗ ngồi còn trống.",
        solution:
          "Trải nghiệm khám phá ẩm thực dựa trên tâm trạng, kết hợp thông tin đáng tin cậy, trạng thái nhà hàng theo thời gian thực và gợi ý cá nhân hoá.",
      },
      {
        type: "Web · Responsive",
        subtitle:
          "Cải thiện sự rõ ràng khi mua sắm và luồng chuyển đổi cho một website thời trang.",
        problem:
          "Trải nghiệm mua sắm hiện tại có nhiều rào cản UX: điều hướng phức tạp, khó tìm sản phẩm, hành trình người dùng rời rạc và tỉ lệ thoát cao.",
        solution:
          "Thiết kế lại trải nghiệm thương mại điện tử với điều hướng rõ ràng, khám phá sản phẩm tốt hơn, kiến trúc thông tin mạch lạc và luồng mua hàng mượt mà hơn.",
      },
      {
        type: "Mobile · AI Companion",
        subtitle:
          "Trải nghiệm check-in cảm xúc nhẹ nhàng để phản chiếu, ổn định và phát triển bản thân mỗi ngày.",
        problem:
          "Người dùng khó diễn đạt cảm xúc khi đang quá tải, đặc biệt khi bị buộc phải gõ chữ hoặc giải thích quá nhiều.",
        solution:
          "Trải nghiệm AI đồng hành với check-in cảm xúc nhanh, hình ảnh ổn định tinh thần, tương tác nhẹ nhàng và nghi thức phát triển bản thân cá nhân hoá.",
      },
    ],
  },
  process: {
    tag: "( Quy trình thiết kế )",
    title1: "Cách một dự án",
    italic: "tiến",
    title2: " về phía trước.",
    desc: "Năm bước tôi quay lại trong mọi dự án. Không phải khuôn mẫu tuyến tính — mà là một checklist tôi lặp lại cho đến khi trải nghiệm thực sự giúp người dùng quyết định.",
    stepLabel: "Bước",
    steps: [
      {
        title: "Thấu hiểu",
        desc: "Xác định vấn đề người dùng và ngữ cảnh sản phẩm. Đặt đúng câu hỏi trước khi tìm giải pháp.",
      },
      {
        title: "Nghiên cứu",
        desc: "Thu thập insight từ người dùng, đối thủ và các mẫu hành vi. Tìm khoảng cách giữa điều người dùng nói và điều họ thực sự làm.",
      },
      {
        title: "Cấu trúc",
        desc: "Xây dựng user flow, kiến trúc thông tin và wireframe. Làm bộ khung vận hành được trước khi trang trí.",
      },
      {
        title: "Thiết kế",
        desc: "Dựng màn hình UI, component và nền tảng design system. Giao diện rõ ràng, nhất quán và dễ tiếp cận.",
      },
      {
        title: "Kiểm chứng",
        desc: "Đánh giá khả năng sử dụng, thu thập phản hồi và cải tiến trải nghiệm. Xem phiên bản đầu tiên là một giả thuyết.",
      },
    ],
  },
  about: {
    tag: "( Giới thiệu )",
    title1: "Một nhà thiết kế có thể ",
    italic: "triển khai",
    title2: " được sản phẩm.",
    body: "Tôi là Minh Huy, một UI/UX Designer từ Việt Nam với nền tảng phát triển phần mềm. Tôi quan tâm đến việc thiết kế các sản phẩm số rõ ràng, thực tế và có khả năng mở rộng. Công việc của tôi tập trung vào user flow, hệ thống giao diện và giải quyết vấn đề thật của người dùng thông qua tư duy thiết kế có cấu trúc — dựa trên những gì thực sự có thể triển khai.",
    facts: [
      { k: "Sinh sống tại", v: "Việt Nam" },
      { k: "Nền tảng", v: "Phát triển phần mềm" },
      { k: "Tập trung", v: "Product UX & UI" },
      { k: "Sẵn sàng cho", v: "Thực tập, vị trí junior" },
    ],
    skillsLabel: "( Kỹ năng & Công cụ )",
    learningLabel: "Đang học",
    learning:
      "Design system ở quy mô lớn, các mẫu hình accessibility, và cách biến kết quả nghiên cứu thành quyết định giao diện đo lường được.",
  },
  contact: {
    tag: "( Liên hệ — Cùng xây điều gì đó hữu ích )",
    title1: "Có một ",
    italic: "dự án",
    title2: " trong đầu?",
    body: "Tôi đang sẵn sàng cho cơ hội thực tập, vị trí UI/UX junior và các case study hợp tác. Cách tốt nhất để liên hệ là qua email — tôi thường phản hồi trong vòng một ngày.",
    resume: "Tải CV",
    backTop: "Lên đầu trang ↑",
    footer: "© 2026 Huỳnh Minh Huy — Thiết kế & xây dựng tận tâm",
  },
};

const dicts: Record<Lang, Dict> = { en, vi };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <I18nContext.Provider value={{ lang, setLang, t: dicts[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
