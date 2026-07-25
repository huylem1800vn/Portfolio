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
    originalWebsite: string;
    typeLabel: string;
    yearLabel: string;
    projects: Array<{
      type: string;
      context?: string;
      homeDetails?: Array<{ label: string; body: string }>;
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
    introSections: Array<{ tag: string; body: string }>;
    facts: Array<{ k: string; v: string; sub?: string }>;
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
    badge: "Portfolio · 2026 · Open to fresher opportunities",
    name: "HUYNH MINH HUY",
    role: "UI/UX Designer",
    concept: "BRIDGE",
    headline:
      "Designing the point where user needs, product logic, and technical execution meet naturally.",
    intro:
      "I am a UI/UX Designer with a background in software development, driven by the desire to create experiences that are clear, meaningful, and truly useful. My strength lies in connecting design thinking with technical logic, transforming complex ideas into intuitive user flows, structured interfaces, and scalable design systems that are both visually refined and realistic to build.",
    cta1: "View Projects",
    cta2: "Download CV",
    scroll: "Scroll to explore",
    label1: "( 01 ) Designer",
    label2: "( 02 ) Direction",
    currently:
      "My goal is to grow into a product minded designer who can look beyond the interface and understand the real problems behind each user journey. I am focused on strengthening my problem solving mindset, designing for complex workflows, and collaborating closely with different roles in a team to create digital products that are thoughtful, practical, and valuable to people.",
  },
  marquee: [
    "User needs",
    "Product logic",
    "Technical execution",
    "Design systems",
    "Clear interfaces",
    "Bridging design and code",
  ],
  work: {
    tag: "( Selected Work · 2025 / 2026 )",
    title1: "Case studies,",
    italic: "not",
    title2: " screenshots.",
    sub: "Five projects, each shaped around a real decision people actually need to make.",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    readMore: "Read full case study",
    originalWebsite: "Live website",
    typeLabel: "",
    yearLabel: "",
    projects: [
      {
        type: "Professional Project · FPT IS",
        context: "UI/UX Designer at FPT IS · Mar 2026 – Present",
        homeDetails: [
          {
            label: "Who it serves",
            body:
              "Large corporations, SMEs, startups, non-financial organizations, independent businesses, and teams responsible for corporate finance.",
          },
          {
            label: "Shared needs",
            body:
              "Although their operating scales differ, they all need a flexible online banking platform for managing accounts, cash flow, transfers, payments, financial reporting, and transaction approvals.",
          },
        ],
        subtitle:
          "Contributing to HDBiz, HDBank’s corporate Internet and Mobile Banking platform, as part of the FPT IS project team.",
        problem:
          "Corporate banking workflows involve complex business rules, approval layers, dense forms, transaction states, and high expectations for reliability across web and mobile.",
        solution:
          "A clean enterprise banking experience with structured flows, reusable Figma components, clear status feedback, and interface patterns that support business users through critical financial operations.",
      },
      {
        type: "Mobile · iOS / Android",
        subtitle:
          "Helping young users decide where to eat with timely context and recommendations that match how they feel.",
        problem:
          "Young users in Ho Chi Minh City often struggle to choose where to eat because there are too many options, reviews do not always feel trustworthy, and practical details like crowd level, opening status, or available seats are often missing.",
        solution:
          "A food discovery experience built around mood, trusted information, live restaurant status, and recommendations that feel more personal.",
      },
      {
        type: "Mobile · Family Living",
        subtitle:
          "Helping different generations share routines, care for the home, and preserve family memories without feeling monitored.",
        problem:
          "Family members are gradually losing shared moments as work, study, screen habits, and generational differences pull their daily routines apart. Existing products focus on controlling devices but rarely create a shared space where people can check in, care for one another, and feel closer.",
        solution:
          "A shared digital home that brings together family updates, gentle reminders, home safety, shared routines, and private memories, helping each generation stay connected without feeling monitored.",
      },
      {
        type: "Web · Responsive",
        subtitle:
          "Making a fashion shopping experience feel clearer, easier to browse, and smoother to buy from.",
        problem:
          "The current shopping experience creates friction through complex navigation, weak product discovery, fragmented journeys, and a high risk of users dropping off too early.",
        solution:
          "A redesigned e commerce experience with clearer navigation, stronger product discovery, a more coherent information structure, and a smoother purchase journey.",
      },
      {
        type: "Mobile · AI Companion",
        subtitle:
          "A gentle emotional check in experience for reflection, grounding, and steady daily self growth.",
        problem:
          "When people feel overwhelmed, even describing their emotions can feel heavy, especially if they are asked to type or explain too much.",
        solution:
          "An AI companion experience with quick emotional check ins, visual grounding, gentle interactions, and personal rituals for self growth.",
      },
    ],
  },
  process: {
    tag: "( Design Process )",
    title1: "How a project",
    italic: "moves",
    title2: " forward.",
    desc: "These are the five steps I return to in every project. They are not a rigid sequence. They are the rhythm I revisit until the experience truly helps someone make a decision.",
    stepLabel: "Step",
    steps: [
      {
        title: "Understand",
        desc: "Clarify the user problem and the product context. Find the real question before rushing toward an answer.",
      },
      {
        title: "Research",
        desc: "Listen to users, study competitors, and trace behavior patterns. Pay attention to the gap between what people say and what their actions reveal.",
      },
      {
        title: "Structure",
        desc: "Shape the user flow, information architecture, and wireframes first. The structure has to breathe before the visuals can shine.",
      },
      {
        title: "Design",
        desc: "Craft screens, components, and the beginnings of a design system so the interface feels clear, consistent, and welcoming to use.",
      },
      {
        title: "Validate",
        desc: "Review usability, gather feedback, and refine the experience. The first version is only the beginning of the conversation.",
      },
    ],
  },
  about: {
    tag: "( About )",
    title1: "A designer who can also ",
    italic: "ship",
    title2: " the build.",
    body: "I am Minh Huy, a UI/UX designer from Vietnam with a foundation in software development. I am drawn to digital products that feel clear, practical, and ready to grow. My work stays close to user flows, interface systems, and real problems, always shaped by design thinking that respects what can truly be built.",
    introSections: [
      {
        tag: "( 01 ) Designer",
        body: "I am a UI/UX Designer with a background in software development, driven by the desire to create experiences that are clear, meaningful, and truly useful. My strength lies in connecting design thinking with technical logic, transforming complex ideas into intuitive user flows, structured interfaces, and scalable design systems that are both visually refined and realistic to build.",
      },
      {
        tag: "( 02 ) Direction",
        body: "My goal is to grow into a product minded designer who can look beyond the interface and understand the real problems behind each user journey. I am focused on strengthening my problem solving mindset, designing for complex workflows, and collaborating closely with different roles in a team to create digital products that are thoughtful, practical, and valuable to people.",
      },
    ],
    facts: [
      { k: "Education", v: "Ho Chi Minh Open University", sub: "Computer Science · Graduated Oct 2024" },
      { k: "Project Background", v: "Backend Development" },
      { k: "Focus", v: "Product UX & UI" },
      { k: "Open to", v: "Fresher UI/UX roles" },
    ],
    skillsLabel: "( Skills & Tools )",
    learningLabel: "Currently learning",
    learning:
      "I am currently learning how design systems scale, how accessibility patterns hold up in real products, and how research can lead to interface decisions that are visible and measurable.",
  },
  contact: {
    tag: "( Contact · Let's build something useful )",
    title1: "Have a ",
    italic: "project",
    title2: " in mind?",
    body: "I am currently open to UI/UX Fresher opportunities and collaborative case studies. Email is the best way to reach me, and I usually reply within a day.",
    resume: "Download CV",
    backTop: "Back to top ↑",
    footer: "© 2026 Huỳnh Minh Huy · Designed and built with care",
  },
};

const vi: Dict = {
  nav: { work: "Dự án", process: "Quy trình", about: "Giới thiệu", resume: "CV" },
  hero: {
    badge: "Portfolio · 2026 · Đang tìm cơ hội Fresher",
    name: "HUỲNH MINH HUY",
    role: "UI/UX Designer",
    concept: "BRIDGE",
    headline:
      "Thiết kế điểm chạm nơi nhu cầu người dùng, logic sản phẩm và khả năng triển khai kỹ thuật gặp nhau một cách tự nhiên.",
    intro:
      "Em là một UI/UX Designer có nền tảng phát triển phần mềm, luôn hướng đến việc tạo ra những trải nghiệm rõ ràng, có chiều sâu và thật sự hữu ích cho người dùng. Thế mạnh của em nằm ở khả năng kết nối tư duy thiết kế với logic kỹ thuật, biến những ý tưởng phức tạp thành luồng trải nghiệm mạch lạc, giao diện có cấu trúc và hệ thống thiết kế dễ mở rộng, vừa đảm bảo tính thẩm mỹ vừa có khả năng triển khai thực tế.",
    cta1: "Xem dự án",
    cta2: "Tải CV",
    scroll: "Cuộn để khám phá",
    label1: "( 01 ) Nhà thiết kế",
    label2: "( 02 ) Định hướng",
    currently:
      "Mục tiêu của em là phát triển thành một nhà thiết kế có tư duy sản phẩm, không chỉ nhìn vào giao diện mà còn hiểu được vấn đề thật sự phía sau mỗi hành trình người dùng. Em đang tập trung rèn luyện tư duy giải quyết vấn đề, thiết kế cho các luồng thao tác phức tạp và hợp tác chặt chẽ với nhiều vai trò khác nhau trong đội ngũ để tạo ra những sản phẩm số chỉn chu, thực tế và mang lại giá trị bền vững.",
  },
  marquee: [
    "Nhu cầu người dùng",
    "Logic sản phẩm",
    "Triển khai kỹ thuật",
    "Hệ thống thiết kế",
    "Giao diện rõ ràng",
    "Cầu nối giữa thiết kế và code",
  ],
  work: {
    tag: "( Dự án tiêu biểu · 2025 / 2026 )",
    title1: "Case study,",
    italic: "không phải",
    title2: " ảnh chụp.",
    sub: "Năm dự án, mỗi dự án đi vào một quyết định rất thật mà người dùng phải đối diện.",
    problemLabel: "Vấn đề",
    solutionLabel: "Giải pháp",
    readMore: "Xem case study đầy đủ",
    originalWebsite: "Website đang hoạt động",
    typeLabel: "",
    yearLabel: "",
    projects: [
      {
        type: "Dự án thực tế · FPT IS",
        context: "UI/UX Designer tại FPT IS · 03/2026 – Hiện tại",
        homeDetails: [
          {
            label: "Phục vụ ai?",
            body:
              "Các tập đoàn lớn, SMEs, startup, tổ chức phi tài chính, doanh nghiệp cá nhân và những đội ngũ phụ trách tài chính doanh nghiệp.",
          },
          {
            label: "Nhu cầu chung",
            body:
              "Dù có quy mô vận hành khác nhau, họ đều cần một nền tảng ngân hàng trực tuyến linh hoạt để quản lý tài khoản, dòng tiền, chuyển khoản, thanh toán, báo cáo tài chính và phê duyệt giao dịch.",
          },
        ],
        subtitle:
          "Tham gia thiết kế HDBiz, nền tảng Internet Banking và Mobile Banking dành cho khách hàng doanh nghiệp của HDBank, trong đội ngũ dự án tại FPT IS.",
        problem:
          "Các nghiệp vụ corporate banking có nhiều rule phức tạp, nhiều lớp phê duyệt, form dày thông tin, trạng thái giao dịch đa dạng và yêu cầu độ tin cậy rất cao trên cả web lẫn mobile.",
        solution:
          "Một trải nghiệm ngân hàng doanh nghiệp sạch, có cấu trúc rõ, dùng component Figma tái sử dụng, phản hồi trạng thái dễ hiểu và các pattern giao diện hỗ trợ người dùng xử lý nghiệp vụ tài chính quan trọng.",
      },
      {
        type: "Mobile · iOS / Android",
        subtitle:
          "Giúp người dùng trẻ chọn chỗ ăn phù hợp nhanh hơn nhờ ngữ cảnh thời gian thực và những gợi ý đúng tâm trạng.",
        problem:
          "Người trẻ ở TP.HCM thường khó chọn chỗ ăn vì có quá nhiều lựa chọn, review không phải lúc nào cũng đáng tin, và những thông tin thực tế như quán đang đông hay vắng, còn mở cửa hay còn chỗ ngồi lại thường thiếu.",
        solution:
          "Một trải nghiệm khám phá ẩm thực dựa trên tâm trạng, kết hợp thông tin đáng tin, trạng thái quán theo thời gian thực và những gợi ý mang cảm giác cá nhân hơn.",
      },
      {
        type: "Mobile · Gia đình",
        subtitle:
          "Giúp nhiều thế hệ cùng chia sẻ nếp sinh hoạt, chăm sóc ngôi nhà và lưu giữ kỷ niệm mà không tạo cảm giác bị theo dõi.",
        problem:
          "Các thành viên trong gia đình ngày càng ít có thời gian và điểm chạm chung vì lịch học, công việc, thói quen dùng điện thoại và khoảng cách thế hệ. Trong khi đó, nhiều ứng dụng chỉ tập trung điều khiển thiết bị, chưa tạo được một không gian giúp mọi người quan tâm, chia sẻ và gần nhau hơn.",
        solution:
          "Một ngôi nhà số chung, nơi cập nhật gia đình, lời nhắc nhẹ nhàng, an toàn ngôi nhà, lịch sinh hoạt và kỷ niệm được kết nối để các thế hệ gần nhau hơn mà không tạo cảm giác bị theo dõi.",
      },
      {
        type: "Web · Responsive",
        subtitle:
          "Làm cho trải nghiệm mua sắm thời trang trở nên rõ ràng hơn, dễ theo hơn và mượt hơn khi đi tới quyết định mua.",
        problem:
          "Trải nghiệm mua sắm hiện tại còn nhiều điểm vướng, từ điều hướng rối, khó tìm sản phẩm, hành trình đứt đoạn cho tới nguy cơ người dùng rời đi quá sớm.",
        solution:
          "Thiết kế lại trải nghiệm thương mại điện tử với điều hướng rõ hơn, khả năng khám phá sản phẩm tốt hơn, kiến trúc thông tin mạch lạc hơn và luồng mua hàng trơn tru hơn.",
      },
      {
        type: "Mobile · AI Companion",
        subtitle:
          "Một trải nghiệm check in cảm xúc nhẹ nhàng để người dùng có thể lắng lại, soi chiếu chính mình và nuôi dưỡng bản thân mỗi ngày.",
        problem:
          "Khi đang quá tải, nhiều người rất khó gọi tên cảm xúc của mình, nhất là khi họ bị yêu cầu phải gõ nhiều hoặc giải thích quá sâu ngay từ đầu.",
        solution:
          "Một trải nghiệm AI đồng hành với check in cảm xúc nhanh, hình ảnh giúp ổn định lại tinh thần, những tương tác dịu dàng và các nhịp phát triển bản thân mang cảm giác riêng tư hơn.",
      },
    ],
  },
  process: {
    tag: "( Quy trình thiết kế )",
    title1: "Cách một dự án",
    italic: "tiến",
    title2: " về phía trước.",
    desc: "Đây là năm bước em luôn quay lại trong mỗi dự án. Nó không phải một khuôn mẫu cứng. Nó giống nhịp làm việc mà em lặp lại cho tới khi trải nghiệm thật sự giúp người dùng đưa ra quyết định.",
    stepLabel: "Bước",
    steps: [
      {
        title: "Thấu hiểu",
        desc: "Xác định đúng vấn đề của người dùng và bối cảnh của sản phẩm. Khi câu hỏi được đặt đúng, lời giải mới có cơ hội đi đúng hướng.",
      },
      {
        title: "Nghiên cứu",
        desc: "Lắng nghe người dùng, nhìn vào đối thủ và quan sát các mẫu hành vi. Điều quan trọng là tìm ra khoảng cách giữa lời họ nói và điều họ thật sự làm.",
      },
      {
        title: "Cấu trúc",
        desc: "Xây dựng user flow, kiến trúc thông tin và wireframe trước. Phần khung phải đứng vững thì phần nhìn mới có ý nghĩa.",
      },
      {
        title: "Thiết kế",
        desc: "Hoàn thiện màn hình, component và nền tảng design system để giao diện vừa rõ ràng, vừa nhất quán, vừa dễ tiếp cận với người dùng.",
      },
      {
        title: "Kiểm chứng",
        desc: "Đánh giá khả năng sử dụng, lắng nghe phản hồi và tiếp tục chỉnh sửa. Phiên bản đầu tiên với em luôn chỉ là điểm khởi đầu.",
      },
    ],
  },
  about: {
    tag: "( Giới thiệu )",
    title1: "Một nhà thiết kế có thể ",
    italic: "triển khai",
    title2: " được sản phẩm.",
    body: "Em là Minh Huy, một UI/UX Designer đến từ Việt Nam với nền tảng phát triển phần mềm. Em yêu những sản phẩm số rõ ràng, thực tế và có khả năng lớn lên cùng nhu cầu của người dùng. Công việc của em xoay quanh user flow, hệ thống giao diện và những vấn đề thật, luôn được dẫn dắt bởi tư duy thiết kế nhưng vẫn bám sát điều gì có thể triển khai ngoài đời.",
    introSections: [
      {
        tag: "( 01 ) Nhà thiết kế",
        body: "Em là một UI/UX Designer có nền tảng phát triển phần mềm, luôn hướng đến việc tạo ra những trải nghiệm rõ ràng, có chiều sâu và thật sự hữu ích cho người dùng. Thế mạnh của em nằm ở khả năng kết nối tư duy thiết kế với logic kỹ thuật, biến những ý tưởng phức tạp thành luồng trải nghiệm mạch lạc, giao diện có cấu trúc và hệ thống thiết kế dễ mở rộng, vừa đảm bảo tính thẩm mỹ vừa có khả năng triển khai thực tế.",
      },
      {
        tag: "( 02 ) Định hướng",
        body: "Mục tiêu của em là phát triển thành một nhà thiết kế có tư duy sản phẩm, không chỉ nhìn vào giao diện mà còn hiểu được vấn đề thật sự phía sau mỗi hành trình người dùng. Em đang tập trung rèn luyện tư duy giải quyết vấn đề, thiết kế cho các luồng thao tác phức tạp và hợp tác chặt chẽ với nhiều vai trò khác nhau trong đội ngũ để tạo ra những sản phẩm số chỉn chu, thực tế và mang lại giá trị bền vững.",
      },
    ],
    facts: [
      { k: "Học vấn", v: "Đại học Mở Thành phố Hồ Chí Minh", sub: "Khoa học Máy tính · Tốt nghiệp 10/2024" },
      { k: "Nền tảng dự án", v: "Phát triển Backend" },
      { k: "Tập trung", v: "Product UX & UI" },
      { k: "Sẵn sàng cho", v: "Vị trí UI/UX Fresher" },
    ],
    skillsLabel: "( Kỹ năng & Công cụ )",
    learningLabel: "Đang học",
    learning:
      "Em đang học cách design system vận hành ở quy mô lớn, cách các mẫu accessibility thật sự sống trong sản phẩm, và cách biến kết quả nghiên cứu thành những quyết định giao diện có thể nhìn thấy và đo lường được.",
  },
  contact: {
    tag: "( Liên hệ · Cùng xây điều gì đó hữu ích )",
    title1: "Có một ",
    italic: "dự án",
    title2: " trong đầu?",
    body: "Hiện tại em đang tìm kiếm cơ hội UI/UX Fresher và sẵn sàng tham gia những case study hợp tác. Nếu muốn kết nối, email vẫn là cách nhanh và dễ nhất, và em thường phản hồi trong vòng một ngày.",
    resume: "Tải CV",
    backTop: "Lên đầu trang ↑",
    footer: "© 2026 Huỳnh Minh Huy · Được thiết kế và xây dựng với nhiều chăm chút",
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
