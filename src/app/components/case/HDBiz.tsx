import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  Boxes,
  BriefcaseBusiness,
  Building2,
  Bug,
  Calendar,
  CheckCircle2,
  ClipboardList,
  Code2,
  CreditCard,
  FileText,
  Landmark,
  Layers,
  MessageSquare,
  MonitorSmartphone,
  PenTool,
  ShieldCheck,
  Table2,
  UsersRound,
  Workflow,
} from "lucide-react";
import { useI18n } from "../../i18n";
import { HDBIZ_UI_CONCEPT_URL } from "../../config/hdbiz-assets";
import { CaseNav } from "./CaseNav";
import { scrollToCaseSection } from "./scrollToCaseSection";
import { NextProjectFooter } from "./NextProjectFooter";

const PRIMARY = "#DA2128";
const PRIMARY_DARK = "#A9151B";
const ORANGE = "#F36C21";
const INK = "#241F20";
const TEXT = "#4A3E3C";
const MUTED = "#776B68";
const LINE = "#EADDD8";
const PAPER = "#FFFCFA";
const SOFT = "#FFF6F2";
const PRIMARY_TINT = "#FDEBEC";

const COPY = {
  en: {
    sections: [
      { id: "overview", label: "Overview" },
      { id: "responsibilities", label: "Role" },
      { id: "collaboration", label: "Team" },
      { id: "process", label: "Process" },
      { id: "features", label: "Features" },
      { id: "system", label: "System" },
      { id: "challenges", label: "Challenges" },
      { id: "impact", label: "Impact" },
    ],
    hero: {
      badge: "Case Study · 2026 · Enterprise Banking",
      title: "HDBiz",
      subtitle: "Corporate Internet & Mobile Banking Platform",
      visualKicker: "Enterprise Banking",
      headline: "Designing digital banking experiences for corporate customers.",
      body:
        "A professional banking platform designed for enterprise customers who need reliable account management, approval workflows, payments, and financial operations across web and mobile channels.",
      cta1: "View Responsibilities",
      cta2: "See Design Process",
      info: [
        ["Company", "FPT IS"],
        ["Client", "HDBank"],
        ["Duration", "Mar 2026 · Present"],
        ["Role", "UI/UX Designer"],
        ["Platform", "Internet Banking + Mobile Banking"],
        ["Industry", "Digital Banking"],
      ],
    },
    overview: {
      tag: "( 01 · Project Overview )",
      title: "A corporate banking platform for complex financial operations.",
      body:
        "HDBiz is a digital banking platform for corporate customers. The product supports business users who need to manage accounts, perform payments, repay or disburse loans, track transaction status, and complete approval flows with accuracy and trust. The design work focuses on making complex banking operations easier to understand, safer to complete, and more consistent across Internet Banking and Mobile Banking.",
      supports: [
        "Corporate account management",
        "Loan repayment",
        "Loan disbursement",
        "Transaction approval",
        "Business payments",
        "Financial operations",
        "Internet Banking",
        "Mobile Banking",
      ],
    },
    responsibilities: {
      tag: "( 02 · My Responsibilities )",
      title: "Working between business rules, interface design, and delivery quality.",
      items: [
        ["Analyze business requirements", "Clarify user needs, product rules, and operational constraints before designing."],
        ["Read BRD/FSD documents", "Translate requirement documents into screen logic, states, and interaction flows."],
        ["Design UI in Figma", "Create banking screens with consistent layout, components, and responsive behavior."],
        ["Improve user experience", "Reduce friction in complex forms, tables, approval steps, and feedback states."],
        ["Work with BA", "Validate business logic, required fields, edge cases, and user scenarios."],
        ["Work with Developers", "Prepare handoff details and support implementation alignment."],
        ["Support QA/Tester", "Review UI issues, clarify expected behavior, and help verify interaction states."],
        ["Participate in client meetings", "Listen to client feedback and adjust design decisions based on business context."],
        ["Contribute to Design System", "Support reusable components, auto layout patterns, and visual consistency."],
      ],
    },
    collaboration: {
      tag: "( 03 · Team Collaboration )",
      title: "A UX role connected to business, technology, and banking stakeholders.",
      center: "UI/UX Designer",
      nodes: [
        ["Business Analyst", "Clarify BRD/FSD, banking rules, field logic, and workflow dependencies."],
        ["Project Manager", "Align priorities, milestones, delivery scope, and review schedules."],
        ["Developers", "Discuss feasibility, component behavior, responsive layout, and handoff details."],
        ["Tester", "Support QA cases, UI defects, error states, and expected interaction behavior."],
        ["Banking Client", "Join reviews, receive feedback, and understand operational expectations."],
      ],
    },
    process: {
      tag: "( 04 · Design Process )",
      title: "From business requirement to QA support.",
      steps: [
        "Business Requirement",
        "Requirement Analysis",
        "User Flow",
        "Wireframe",
        "UI Design",
        "Design Review",
        "Handoff",
        "QA Support",
      ],
    },
    features: {
      tag: "( 05 · Banking Features )",
      title: "Feature areas designed with reliability, clarity, and control in mind.",
      note: "Screens are intentionally represented as placeholders to protect project confidentiality.",
      placeholder: "Image Placeholder",
      items: [
        "Loan Repayment",
        "Loan Disbursement",
        "Transaction Approval",
        "Transaction Status",
        "Forms",
        "Tables",
        "Popups",
        "Error Handling",
        "Notifications",
        "Approval Flow",
      ],
    },
    system: {
      tag: "( 06 · Design System )",
      title: "Reusable components for a consistent banking interface.",
      body:
        "The design process uses Figma components and Auto Layout to maintain consistency across web and mobile banking screens. Reusable patterns help reduce ambiguity in forms, status feedback, tables, modal dialogs, and approval flows.",
      items: ["Components", "Buttons", "Inputs", "Tables", "Popups", "Status Chips", "Colors", "Typography", "Spacing"],
    },
    challenges: {
      tag: "( 07 · Challenges )",
      title: "Designing for enterprise banking means designing through constraints.",
      challengeLabel: "Challenge",
      solutionLabel: "Solution",
      items: [
        ["Understanding complex banking workflows", "Worked closely with Business Analysts to understand business rules before designing interfaces."],
        ["Designing dense forms without overwhelming users", "Grouped related fields, clarified hierarchy, and used progressive feedback states."],
        ["Maintaining consistency across web and mobile", "Used reusable Figma components and shared interaction patterns across platforms."],
        ["Handling approval and error states", "Defined clear status labels, confirmation moments, and error messages for critical actions."],
      ],
    },
    impact: {
      tag: "( 08 · Key Contributions )",
      title: "My main contribution focused on loan repayment, part of loan disbursement, and additional screens across related banking features.",
      stats: [
        ["Core", "loan repayment screens"],
        ["Partial", "loan disbursement screens"],
        ["More", "supporting feature screens"],
        ["UX", "flows improved"],
        ["Client", "reviews supported"],
        ["QA", "support during testing"],
      ],
    },
    learnings: {
      tag: "( 09 · What I Learned )",
      title: "The project strengthened my enterprise product mindset.",
      items: [
        "Banking business analysis",
        "Enterprise UX",
        "Cross-functional collaboration",
        "Design consistency",
        "Complex workflow design",
        "Enterprise Design System",
      ],
    },
    ending:
      "Designing banking products is not only about creating beautiful interfaces, but also about translating complex business requirements into intuitive and reliable user experiences.",
    next: "Next case study",
    nextProject: "Nếp Nhà · Family Living System",
  },
  vi: {
    sections: [
      { id: "overview", label: "Tổng quan" },
      { id: "responsibilities", label: "Vai trò" },
      { id: "collaboration", label: "Phối hợp" },
      { id: "process", label: "Quy trình" },
      { id: "features", label: "Tính năng" },
      { id: "system", label: "Hệ thống" },
      { id: "challenges", label: "Thử thách" },
      { id: "impact", label: "Đóng góp" },
    ],
    hero: {
      badge: "Case Study · 2026 · Enterprise Banking",
      title: "HDBiz",
      subtitle: "Corporate Internet & Mobile Banking Platform",
      visualKicker: "Ngân hàng doanh nghiệp",
      headline: "Thiết kế trải nghiệm ngân hàng số cho khách hàng doanh nghiệp.",
      body:
        "HDBiz hỗ trợ doanh nghiệp quản lý tài khoản, thực hiện thanh toán, phê duyệt giao dịch và theo dõi hoạt động tài chính trên cả nền tảng web lẫn ứng dụng di động.",
      cta1: "Xem vai trò",
      cta2: "Xem quy trình thiết kế",
      info: [
        ["Công ty", "FPT IS"],
        ["Khách hàng", "HDBank"],
        ["Thời gian", "03/2026 · Hiện tại"],
        ["Vai trò", "UI/UX Designer"],
        ["Nền tảng", "Internet Banking + Mobile Banking"],
        ["Lĩnh vực", "Digital Banking"],
      ],
    },
    overview: {
      tag: "( 01 · Tổng quan dự án )",
      title: "Nền tảng ngân hàng số dành cho các hoạt động tài chính của doanh nghiệp.",
      body:
        "HDBiz hỗ trợ khách hàng doanh nghiệp quản lý tài khoản, thanh toán, trả nợ vay, giải ngân, theo dõi trạng thái và phê duyệt giao dịch. Trong dự án, em tập trung sắp xếp các bước nghiệp vụ rõ ràng, giúp người dùng kiểm tra thông tin trước những thao tác quan trọng và giữ trải nghiệm nhất quán giữa Internet Banking và Mobile Banking.",
      supports: [
        "Quản lý tài khoản doanh nghiệp",
        "Trả nợ vay",
        "Giải ngân khoản vay",
        "Phê duyệt giao dịch",
        "Thanh toán doanh nghiệp",
        "Vận hành tài chính",
        "Internet Banking",
        "Mobile Banking",
      ],
    },
    responsibilities: {
      tag: "( 02 · Vai trò của em )",
      title: "Từ yêu cầu nghiệp vụ đến giao diện được bàn giao cho đội phát triển.",
      items: [
        ["Tìm hiểu yêu cầu nghiệp vụ", "Làm rõ người dùng cần thực hiện tác vụ gì, quy định nào cần tuân theo và đâu là giới hạn của hệ thống."],
        ["Đọc tài liệu BRD/FSD", "Chuyển yêu cầu trong tài liệu thành các bước thao tác, trạng thái và nội dung cần có trên màn hình."],
        ["Thiết kế giao diện trên Figma", "Xây dựng màn hình web và mobile bằng component, Auto Layout và quy tắc hiển thị thống nhất."],
        ["Cải thiện luồng sử dụng", "Sắp xếp lại biểu mẫu, bảng dữ liệu, bước phê duyệt và thông báo phản hồi để người dùng dễ kiểm tra hơn."],
        ["Phối hợp với BA", "Xác nhận quy tắc nghiệp vụ, trường bắt buộc và những trường hợp có thể xảy ra trong từng luồng."],
        ["Phối hợp với Developer", "Bàn giao thiết kế, giải thích hành vi của giao diện và trao đổi khi có giới hạn về kỹ thuật."],
        ["Hỗ trợ QA/Tester", "Kiểm tra lỗi giao diện, làm rõ kết quả mong đợi và bổ sung những trạng thái còn thiếu."],
        ["Tham gia trao đổi với khách hàng", "Ghi nhận phản hồi từ HDBank và điều chỉnh thiết kế theo nhu cầu vận hành thực tế."],
        ["Đóng góp vào Design System", "Bổ sung component có thể tái sử dụng và giữ cách hiển thị nhất quán giữa các màn hình."],
      ],
    },
    collaboration: {
      tag: "( 03 · Phối hợp trong dự án )",
      title: "Em phối hợp với từng vai trò để thiết kế vừa đúng nghiệp vụ, vừa có thể triển khai.",
      center: "UI/UX Designer",
      nodes: [
        ["Business Analyst", "Làm rõ tài liệu BRD/FSD, quy tắc ngân hàng, dữ liệu cần nhập và mối liên hệ giữa các bước."],
        ["Project Manager", "Thống nhất mức độ ưu tiên, tiến độ, phạm vi bàn giao và lịch duyệt thiết kế."],
        ["Developer", "Trao đổi về khả năng triển khai, hành vi của component, giao diện responsive và nội dung bàn giao."],
        ["Tester", "Làm rõ kịch bản kiểm thử, lỗi giao diện, trạng thái báo lỗi và kết quả mong đợi sau mỗi thao tác."],
        ["Khách hàng HDBank", "Tham gia các buổi duyệt thiết kế, tiếp nhận phản hồi và hiểu rõ hơn cách hệ thống được sử dụng trong thực tế."],
      ],
    },
    process: {
      tag: "( 04 · Quy trình thiết kế )",
      title: "Quy trình em theo từ lúc nhận yêu cầu đến khi hỗ trợ kiểm thử.",
      steps: [
        "Nhận yêu cầu nghiệp vụ",
        "Phân tích yêu cầu",
        "Xây dựng luồng",
        "Wireframe",
        "Thiết kế UI",
        "Duyệt thiết kế",
        "Bàn giao",
        "Hỗ trợ QA",
      ],
    },
    features: {
      tag: "( 05 · Nhóm tính năng )",
      title: "Các tính năng em tham gia thiết kế trong hệ thống ngân hàng doanh nghiệp.",
      note: "Do yêu cầu bảo mật của dự án, phần này chỉ trình bày khung minh họa thay cho giao diện thực tế.",
      placeholder: "Khung hình minh họa",
      items: [
        "Trả nợ vay",
        "Giải ngân khoản vay",
        "Phê duyệt giao dịch",
        "Trạng thái giao dịch",
        "Biểu mẫu",
        "Bảng dữ liệu",
        "Cửa sổ xác nhận",
        "Xử lý lỗi",
        "Thông báo",
        "Luồng phê duyệt",
      ],
    },
    system: {
      tag: "( 06 · Design System )",
      title: "Dùng component để giữ giao diện nhất quán giữa các màn hình.",
      body:
        "Em sử dụng Figma Components và Auto Layout để các màn hình web và mobile cùng tuân theo một quy tắc. Biểu mẫu, bảng dữ liệu, cửa sổ xác nhận, nhãn trạng thái và luồng phê duyệt nhờ vậy có cách hiển thị thống nhất, đồng thời giúp đội phát triển dễ đối chiếu khi triển khai.",
      items: ["Component", "Nút bấm", "Ô nhập liệu", "Bảng dữ liệu", "Cửa sổ xác nhận", "Nhãn trạng thái", "Màu sắc", "Kiểu chữ", "Khoảng cách"],
    },
    challenges: {
      tag: "( 07 · Thử thách )",
      title: "Thử thách lớn nhất là làm rõ nghiệp vụ mà vẫn giữ thao tác an toàn và dễ kiểm tra.",
      challengeLabel: "Thử thách",
      solutionLabel: "Cách xử lý",
      items: [
        ["Hiểu luồng ngân hàng có nhiều quy tắc", "Em trao đổi thường xuyên với BA để hiểu rõ từng điều kiện trước khi bắt đầu thiết kế."],
        ["Biểu mẫu có nhiều thông tin", "Em chia trường nhập thành từng nhóm, làm rõ thứ tự ưu tiên và phản hồi ngay khi người dùng cần sửa."],
        ["Giữ trải nghiệm thống nhất giữa web và mobile", "Em dùng component chung và điều chỉnh cách sắp xếp phù hợp với từng kích thước màn hình."],
        ["Làm rõ bước phê duyệt và trạng thái lỗi", "Em thiết kế nhãn trạng thái, bước xác nhận và thông báo lỗi rõ ràng cho các thao tác quan trọng."],
      ],
    },
    impact: {
      tag: "( 08 · Đóng góp chính )",
      title: "Em phụ trách chính các màn hình Thanh toán vay, tham gia một phần chức năng Giải ngân và hỗ trợ thêm những màn hình khác trong hệ thống.",
      stats: [
        ["Phụ trách chính", "màn hình Thanh toán vay"],
        ["Tham gia", "một phần chức năng Giải ngân"],
        ["Hỗ trợ", "các màn hình chức năng khác"],
        ["Trải nghiệm", "điều chỉnh các bước thao tác"],
        ["Khách hàng", "tham gia các buổi duyệt thiết kế"],
        ["Kiểm thử", "hỗ trợ QA trong giai đoạn test"],
      ],
    },
    learnings: {
      tag: "( 09 · Điều em học được )",
      title: "Qua dự án, em hiểu rõ hơn cách yêu cầu nghiệp vụ, cấu trúc hệ thống và trải nghiệm sử dụng ảnh hưởng lẫn nhau.",
      items: [
        "Phân tích nghiệp vụ ngân hàng",
        "Thiết kế sản phẩm doanh nghiệp",
        "Phối hợp giữa nhiều vai trò",
        "Giữ giao diện nhất quán",
        "Thiết kế luồng nhiều điều kiện",
        "Design System cho hệ thống lớn",
      ],
    },
    ending:
      "Qua HDBiz, em nhận ra thiết kế ngân hàng không dừng ở giao diện. Mỗi quyết định còn phải giúp người dùng hiểu đúng nghiệp vụ, kiểm tra được thông tin và yên tâm trước khi thực hiện giao dịch.",
    next: "Case study tiếp theo",
    nextProject: "Nếp Nhà · Family Living System",
  },
};

const responsibilityIcons = [FileText, ClipboardList, PenTool, BarChart3, UsersRound, Code2, Bug, MessageSquare, Boxes];
const featureIcons = [CreditCard, Landmark, ShieldCheck, CheckCircle2, FileText, Table2, Layers, Bug, Bell, Workflow];
const systemIcons = [Boxes, CheckCircle2, FileText, Table2, Layers, ShieldCheck, BarChart3, PenTool, Workflow];

function SectionLabel({ children }: { children: string }) {
  return <div className="text-xs tracking-[0.24em] uppercase mb-5" style={{ color: PRIMARY }}>{children}</div>;
}

function HDBizVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2.25rem] bg-white shadow-2xl ring-1 ring-[#DA2128]/10">
      <img
        src={HDBIZ_UI_CONCEPT_URL}
        alt="HDBank UI concept for HDBiz corporate banking platform"
        className="block w-full h-full object-cover"
      />
    </div>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-dashed border-[#F0B5B8] bg-[#FFF7F5] p-5">
      <div className="h-28 rounded-xl bg-white border border-[#F3D4D5] flex items-center justify-center">
        <span className="text-xs tracking-[0.18em] uppercase" style={{ color: PRIMARY }}>{label}</span>
      </div>
    </div>
  );
}

export function HDBiz() {
  const { lang } = useI18n();
  const c = COPY[lang];

  return (
    <div className="min-h-screen antialiased" style={{ backgroundColor: PAPER, color: INK, fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
      <CaseNav
        sections={c.sections}
        accent={PRIMARY}
        bg="rgba(255,252,250,0.92)"
        text={INK}
        border="rgba(80,45,42,0.12)"
      />

      <main className="pt-12 md:pt-16">
        <section
          className="px-6 md:px-12 pt-6 md:pt-8 pb-12 md:pb-16"
          style={{
            background:
              "radial-gradient(circle at 82% 10%, rgba(218,33,40,0.08), transparent 26%), linear-gradient(180deg, #FFFCFA 0%, #FFF8F5 100%)",
          }}
        >
          <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="text-xs tracking-[0.24em] uppercase mb-4" style={{ color: PRIMARY }}>{c.hero.badge}</div>
              <h1 className="tracking-[-0.06em] leading-[0.92]" style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(3.2rem, 7.5vw, 5.8rem)" }}>
                {c.hero.title}
              </h1>
              <p className="mt-3 text-lg md:text-xl font-medium text-[#475467]">{c.hero.subtitle}</p>
              <h2 className="mt-5 max-w-[720px] text-xl md:text-3xl leading-[1.1] tracking-[-0.035em]">
                {c.hero.headline}
              </h2>
              <p className="mt-4 max-w-[640px] text-sm md:text-base leading-relaxed" style={{ color: TEXT }}>{c.hero.body}</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button type="button" onClick={() => scrollToCaseSection("responsibilities")} className="rounded-full px-6 py-3 text-sm text-white font-medium transition-colors hover:bg-[#A9151B]" style={{ backgroundColor: PRIMARY }}>
                  {c.hero.cta1}
                </button>
                <button type="button" onClick={() => scrollToCaseSection("process")} className="rounded-full px-6 py-3 text-sm font-medium border transition-colors hover:bg-[#FFF0EE]" style={{ borderColor: LINE }}>
                  {c.hero.cta2}
                </button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <HDBizVisual />
            </motion.div>
          </div>

          <div className="max-w-[1440px] mx-auto mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {c.hero.info.map(([k, v]) => (
              <div key={k} className="rounded-2xl border bg-white p-5" style={{ borderColor: LINE }}>
                <div className="text-xs tracking-[0.18em] uppercase mb-2" style={{ color: MUTED }}>{k}</div>
                <div className="font-semibold">{v}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="overview" className="px-6 md:px-12 py-24 md:py-32 border-t" style={{ borderColor: LINE, backgroundColor: SOFT }}>
          <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20">
            <div>
              <SectionLabel>{c.overview.tag}</SectionLabel>
              <h2 className="tracking-[-0.04em] leading-[1.04]" style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(2.25rem, 4.6vw, 4.75rem)", fontWeight: 500 }}>
                {c.overview.title}
              </h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed" style={{ color: TEXT }}>{c.overview.body}</p>
              <div className="mt-10 grid sm:grid-cols-2 gap-3">
                {c.overview.supports.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 border" style={{ borderColor: LINE }}>
                    <span className="h-9 w-9 rounded-full flex items-center justify-center" style={{ backgroundColor: PRIMARY_TINT, color: PRIMARY }}>
                      <CheckCircle2 size={17} />
                    </span>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="responsibilities" className="px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-[1440px] mx-auto">
            <SectionLabel>{c.responsibilities.tag}</SectionLabel>
            <div className="max-w-[980px]">
              <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] tracking-[-0.045em] leading-[1.06]">{c.responsibilities.title}</h2>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.responsibilities.items.map(([title, body], index) => {
                const Icon = responsibilityIcons[index];
                return (
                  <div key={title} className="rounded-[1.75rem] border p-6 bg-white hover:shadow-lg transition-shadow" style={{ borderColor: LINE }}>
                    <div className="h-12 w-12 rounded-2xl flex items-center justify-center mb-7" style={{ backgroundColor: PRIMARY_TINT, color: PRIMARY }}>
                      <Icon size={21} />
                    </div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em]">{title}</h3>
                    <p className="mt-3 leading-relaxed" style={{ color: MUTED }}>{body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="collaboration" className="px-6 md:px-12 py-24 md:py-32 border-y" style={{ borderColor: LINE, backgroundColor: SOFT }}>
          <div className="max-w-[1440px] mx-auto">
            <SectionLabel>{c.collaboration.tag}</SectionLabel>
            <h2 className="max-w-[1040px] text-3xl md:text-5xl lg:text-[3.5rem] tracking-[-0.045em] leading-[1.06]">{c.collaboration.title}</h2>
            <div className="mt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-center">
              <div className="rounded-[2rem] bg-white border p-8 md:p-10" style={{ borderColor: LINE }}>
                <div className="mx-auto h-40 w-40 rounded-full flex items-center justify-center text-center text-white font-semibold shadow-xl" style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DARK})` }}>
                  {c.collaboration.center}
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[BusinessIcon, BriefcaseBusiness, Code2, Bug, Landmark].map((Icon, index) => (
                    <div key={index} className="rounded-2xl border p-4 flex items-center justify-center" style={{ borderColor: LINE }}>
                      <Icon size={22} color={PRIMARY} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {c.collaboration.nodes.map(([title, body]) => (
                  <div key={title} className="rounded-[1.5rem] bg-white border p-6" style={{ borderColor: LINE }}>
                    <div className="text-sm font-semibold" style={{ color: PRIMARY }}>{title}</div>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-[1440px] mx-auto">
            <SectionLabel>{c.process.tag}</SectionLabel>
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] tracking-[-0.045em] leading-[1.06]">{c.process.title}</h2>
            <div className="mt-12 overflow-x-auto pb-4">
              <div className="min-w-[1100px] flex items-stretch gap-3">
                {c.process.steps.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-40 rounded-[1.5rem] border bg-white p-5 min-h-[150px]" style={{ borderColor: LINE }}>
                      <div className="h-10 w-10 rounded-full flex items-center justify-center text-white text-sm mb-5" style={{ backgroundColor: PRIMARY }}>
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="font-semibold leading-tight">{step}</div>
                    </div>
                    {index < c.process.steps.length - 1 && <ArrowRight size={20} color={PRIMARY} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="px-6 md:px-12 py-24 md:py-32" style={{ backgroundColor: SOFT }}>
          <div className="max-w-[1440px] mx-auto">
            <SectionLabel>{c.features.tag}</SectionLabel>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="max-w-[980px] text-3xl md:text-5xl lg:text-[3.5rem] tracking-[-0.045em] leading-[1.06]">{c.features.title}</h2>
              <p className="max-w-[360px] text-sm leading-relaxed" style={{ color: MUTED }}>{c.features.note}</p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {c.features.items.map((item, index) => {
                const Icon = featureIcons[index];
                return (
                  <div key={item} className="rounded-[1.5rem] border bg-white p-5" style={{ borderColor: LINE }}>
                    <div className="flex items-center justify-between">
                      <Icon size={21} color={PRIMARY} />
                      <span className="text-xs" style={{ color: MUTED }}>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="mt-5 font-semibold">{item}</div>
                    <Placeholder label={c.features.placeholder} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="system" className="px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20">
            <div>
              <SectionLabel>{c.system.tag}</SectionLabel>
              <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] tracking-[-0.045em] leading-[1.06]">{c.system.title}</h2>
              <p className="mt-7 text-lg leading-relaxed" style={{ color: TEXT }}>{c.system.body}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.system.items.map((item, index) => {
                const Icon = systemIcons[index];
                return (
                  <div key={item} className="rounded-[1.5rem] border bg-white p-6 min-h-[170px]" style={{ borderColor: LINE }}>
                    <Icon size={22} color={PRIMARY} />
                    <div className="mt-8 font-semibold">{item}</div>
                    <div className="mt-3 h-2 w-full rounded-full" style={{ backgroundColor: PRIMARY_TINT }} />
                    <div className="mt-2 h-2 w-2/3 rounded-full" style={{ backgroundColor: PRIMARY_TINT }} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="challenges" className="px-6 md:px-12 py-24 md:py-32 border-y" style={{ borderColor: LINE, backgroundColor: SOFT }}>
          <div className="max-w-[1440px] mx-auto">
            <SectionLabel>{c.challenges.tag}</SectionLabel>
            <h2 className="max-w-[980px] text-3xl md:text-5xl lg:text-[3.5rem] tracking-[-0.045em] leading-[1.06]">{c.challenges.title}</h2>
            <div className="mt-12 grid lg:grid-cols-2 gap-5">
              {c.challenges.items.map(([challenge, solution]) => (
                <div key={challenge} className="rounded-[1.75rem] bg-white border overflow-hidden" style={{ borderColor: LINE }}>
                  <div className="grid md:grid-cols-2">
                    <div className="p-6 border-b md:border-b-0 md:border-r" style={{ borderColor: LINE }}>
                      <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: MUTED }}>{c.challenges.challengeLabel}</div>
                      <div className="text-xl font-semibold tracking-[-0.03em]">{challenge}</div>
                    </div>
                    <div className="p-6 bg-[#FFF7F5]">
                      <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: PRIMARY }}>{c.challenges.solutionLabel}</div>
                      <p className="leading-relaxed" style={{ color: TEXT }}>{solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="impact" className="px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-[1440px] mx-auto">
            <SectionLabel>{c.impact.tag}</SectionLabel>
            <h2 className="max-w-[1120px] text-3xl md:text-5xl lg:text-[3.5rem] tracking-[-0.045em] leading-[1.06]">{c.impact.title}</h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.impact.stats.map(([value, label]) => (
                <div key={`${value}-${label}`} className="rounded-[1.75rem] border bg-white p-7" style={{ borderColor: LINE }}>
                  <div className="text-5xl font-semibold tracking-[-0.05em]" style={{ color: PRIMARY }}>{value}</div>
                  <div className="mt-5 text-lg font-medium">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16">
              <div>
                <SectionLabel>{c.learnings.tag}</SectionLabel>
                <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] tracking-[-0.045em] leading-[1.06]">{c.learnings.title}</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {c.learnings.items.map((item) => (
                  <div key={item} className="rounded-2xl border p-5 flex items-center gap-3" style={{ borderColor: LINE }}>
                    <CheckCircle2 size={18} color={PRIMARY} />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 text-white" style={{ background: `linear-gradient(135deg, ${PRIMARY_DARK} 0%, ${PRIMARY} 58%, ${ORANGE} 100%)` }}>
          <div className="max-w-[1200px] mx-auto">
            <p className="tracking-[-0.04em] leading-[1.08]" style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(2rem, 4vw, 4.5rem)" }}>
              “{c.ending}”
            </p>
          </div>
        </section>
      </main>

      <NextProjectFooter currentSlug="hdbiz" />
    </div>
  );
}

function BusinessIcon({ size = 22, color = PRIMARY }: { size?: number; color?: string }) {
  return <Building2 size={size} color={color} />;
}
