import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  BellRing,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Expand,
  Heart,
  Home,
  Info,
  LockKeyhole,
  MessageCircleHeart,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import { useI18n } from "../../i18n";
import { NEP_NHA_LOGO_MARK_URL, NEP_NHA_THUMBNAIL_URL, NEP_NHA_UI } from "../../config/nep-nha-assets";
import { CaseNav } from "./CaseNav";
import { scrollToCaseSection } from "./scrollToCaseSection";
import { NextProjectFooter } from "./NextProjectFooter";

const CREAM = "#F7F2E8";
const PAPER = "#FFFDF8";
const GREEN = "#6B934D";
const GREEN_DARK = "#365B2B";
const GREEN_SOFT = "#DDEACF";
const INK = "#20251E";
const MUTED = "#687064";
const LINE = "#D9DFD1";

const COPY = {
  en: {
    sections: [
      { id: "overview", label: "Overview" },
      { id: "research", label: "Research" },
      { id: "audience", label: "Users" },
      { id: "journey", label: "Journey" },
      { id: "direction", label: "Direction" },
      { id: "structure", label: "Structure" },
      { id: "ui", label: "Interface" },
    ],
    hero: {
      badge: "UX/UI Case Study · 2026 · Family Living · Mobile App",
      title: "Nếp Nhà",
      headline: "Technology that quietly supports the rhythm of family life.",
      body:
        "Nếp Nhà explores how a smart living product can help different generations stay connected, remember shared routines, care for the home, and preserve everyday memories without making anyone feel monitored.",
      cta1: "Explore the research",
      cta2: "View final UI",
      info: [
        ["Project", "Nếp Nhà"],
        ["Scope", "UX Research + UI Design"],
        ["Platform", "Mobile App"],
        ["Category", "Family Living + Smart Home"],
        ["Tools", "FigJam + Figma"],
        ["Status", "Concept Project"],
      ],
    },
    overview: {
      tag: "( 01 · Project Overview )",
      title: "A home should feel connected, not controlled by technology.",
      body:
        "Family members are gradually losing shared moments as work, study, screen habits, and generational differences pull their daily routines apart. Smart home products are often built around devices, not the relationships inside the home. Nếp Nhà therefore starts from family life: shared schedules, care routines, home safety, small signs of presence, and memories that should not disappear inside chat threads. The goal was to create one calm shared space that helps young adults, parents, and grandparents feel closer.",
      question: "How might we use technology to bring generations closer while protecting privacy and keeping the experience simple for older family members?",
      pillars: [
        ["Care", "Support reminders and daily routines without sounding demanding."],
        ["Home", "Make essential home information quick to understand."],
        ["Memory", "Give family moments a private place to stay and be revisited."],
      ],
    },
    research: {
      tag: "( 02 · Research Context )",
      title: "The opportunity sits between smart devices and real family life.",
      body:
        "Desk research and competitor review suggested that device control is becoming familiar, but emotional connection, intergenerational access, and privacy-aware family routines remain underserved.",
      stats: [
        ["358.59M USD", "Estimated Vietnam smart home market value in 2024."],
        ["22.6%", "Forecast household penetration by 2027."],
        ["7.3 hours", "Average daily mobile use noted in the research board."],
        ["3 generations", "Different needs must coexist in one shared product."],
      ],
      competitorsTitle: "What the audit revealed",
      competitors: [
        ["Lumi Life", "Strong device control, but little support for family connection."],
        ["Vconnex", "Deep IoT and safety focus, with a more technical experience."],
        ["CyHome", "Useful for resident services, but less centered on household relationships."],
        ["FamilyWall", "Strong family coordination, but disconnected from smart-home routines and Vietnamese family culture."],
      ],
      gap:
        "The design opportunity was not another remote control. It was a quiet family layer that could connect routines, safety, memories, and care in one place.",
    },
    audience: {
      tag: "( 03 · People Behind the Product )",
      title: "Two generations, two very different definitions of helpful.",
      groups: [
        {
          label: "Young adult · Technology connector",
          quote: "I want to care for my family without turning the app into a tracking tool.",
          context: "Busy with work or study, comfortable with technology, and often the person who helps the rest of the family set things up.",
          needs: ["Right-time reminders", "Clear privacy controls", "A quick home-safety check", "A private space for family memories"],
          tension: "Wants reassurance, but rejects notification overload and constant location tracking.",
        },
        {
          label: "Grandparent · Everyday family member",
          quote: "I want reminders to feel like care, not like someone is managing me.",
          context: "Spends more time at home, has less confidence with complex interfaces, and values simple ways to feel close to children and grandchildren.",
          needs: ["Large text and clear actions", "Gentle reminders", "Simple home controls", "Easy access to shared photos"],
          tension: "Needs support, but may stop using the product when it feels complicated or commanding.",
        },
      ],
      labels: { context: "Context", needs: "Needs", tension: "Core tension" },
    },
    journey: {
      tag: "( 04 · User Journeys )",
      title: "The same family rhythm feels different from each side.",
      body:
        "The journey maps were rebuilt directly from the UX board. Both users move through the same three stages, but their pain points and expectations are not interchangeable.",
      stageLabels: ["Before a shared solution", "First-time setup", "After regular use"],
      journeys: [
        {
          name: "Minh Anh",
          role: "Young adult · Family connector",
          stages: [
            {
              action: "Uses family chats, phone calls, and separate calendars to coordinate schedules and reminders.",
              pain: "Information is scattered and one person carries most of the remembering.",
              opportunity: "Bring important routines, events, and home status into one calm view.",
            },
            {
              action: "Creates the family space, connects essential devices, and invites parents or grandparents.",
              pain: "Worries that setup will be too technical for older family members.",
              opportunity: "Keep setup short and offer a clearer, larger display mode.",
            },
            {
              action: "Checks home status, receives important reminders, and adds family photos.",
              pain: "Too many alerts or unclear permissions quickly reduce trust.",
              opportunity: "Let each member control notifications, visibility, and shared information.",
            },
          ],
        },
        {
          name: "Ngọc Hạnh",
          role: "Older family member",
          stages: [
            {
              action: "Waits for calls, reads simple messages, and relies on spoken reminders at home.",
              pain: "Can feel left out of both family activity and newer technology.",
              opportunity: "Offer low-pressure reminders and small signs of family presence.",
            },
            {
              action: "Receives setup help and learns a small number of large, familiar actions.",
              pain: "Dense screens and deep settings create fear of making mistakes.",
              opportunity: "Use a simplified interface with clear language and forgiving actions.",
            },
            {
              action: "Listens to gentle reminders, views memories, and uses basic home controls.",
              pain: "Commanding notifications can feel like repeated criticism.",
              opportunity: "Use warm language, sound, and a familiar album-like memory experience.",
            },
          ],
        },
      ],
      labels: { action: "Behavior", pain: "Pain point", opportunity: "Design opportunity" },
    },
    direction: {
      tag: "( 05 · Design Direction )",
      title: "A calm interface built around trust, dignity, and shared routines.",
      body:
        "The research moved the product away from a device dashboard and toward a family living system. Every design principle answers a tension found in the journeys.",
      principles: [
        ["Quiet intelligence", "Surface what matters at the right moment instead of filling the day with alerts."],
        ["Privacy by choice", "Make visibility, status sharing, and notifications understandable for every member."],
        ["Senior-friendly access", "Use familiar words, strong hierarchy, larger controls, and fewer decisions per screen."],
        ["Home as a shared story", "Connect safety, routines, and memories so the product feels warmer than a utility app."],
      ],
    },
    structure: {
      tag: "( 06 · Product Structure )",
      title: "Five spaces follow the way a family actually lives.",
      body:
        "The information architecture separates immediate daily needs from people, devices, and memories. This keeps the first screen useful without making every feature compete for attention.",
      items: [
        ["Today", "A clear view of reminders, family updates, and what needs attention now."],
        ["Family", "Members, shared schedules, care routines, and light presence signals."],
        ["Home", "Essential device control, safety status, and reusable home routines."],
        ["Memories", "A private family album for everyday moments and important occasions."],
        ["Settings", "Privacy, permissions, notification preferences, and accessibility choices."],
      ],
    },
    ui: {
      tag: "( 07 · Final Interface )",
      title: "A warm visual system for everyday family moments.",
      body:
        "The final UI uses a soft cream background, grounded green accents, generous spacing, and rounded cards. The system is deliberately calm so reminders and home status feel supportive rather than urgent.",
      expand: "View full screen",
      close: "Close preview",
      screens: [
        ["Welcome", "A simple first impression that introduces the product without asking too much at once."],
        ["Today", "Daily routines, reminders, and family activity gathered into one useful starting point."],
        ["Family", "A shared place for people, care, and small signs that everyone is doing okay."],
        ["Home", "Smart-home controls reorganized around rooms, safety, and familiar routines."],
        ["Memories", "A private visual archive that gives family moments room to stay."],
      ],
    },
    reflection: {
      tag: "( 08 · Reflection )",
      title: "The best smart-home experience may be the one that feels least like a control panel.",
      body:
        "Nếp Nhà helped me see that designing for a family means designing for different levels of confidence, attention, and independence at the same time. A helpful product does not ask every generation to behave the same way. It gives each person a clear way to take part while keeping care, privacy, and dignity in balance.",
      next: "Next case study",
      nextProject: "MeMe · YaMe Redesign",
    },
  },
  vi: {
    sections: [
      { id: "overview", label: "Tổng quan" },
      { id: "research", label: "Nghiên cứu" },
      { id: "audience", label: "Người dùng" },
      { id: "journey", label: "Hành trình" },
      { id: "direction", label: "Định hướng" },
      { id: "structure", label: "Cấu trúc" },
      { id: "ui", label: "Giao diện" },
    ],
    hero: {
      badge: "UX/UI Case Study · 2026 · Gia đình · Mobile App",
      title: "Nếp Nhà",
      headline: "Để công nghệ âm thầm nâng đỡ nhịp sống gia đình.",
      body:
        "Nếp Nhà tìm cách giúp nhiều thế hệ gần nhau hơn qua những việc rất đời thường: cùng nhớ lịch, chăm sóc nhà cửa, biết người thân vẫn ổn và lưu lại những khoảnh khắc nhỏ, nhưng không khiến ai cảm thấy mình đang bị theo dõi.",
      cta1: "Xem phần nghiên cứu",
      cta2: "Xem giao diện hoàn chỉnh",
      info: [
        ["Dự án", "Nếp Nhà"],
        ["Phạm vi", "UX Research + UI Design"],
        ["Nền tảng", "Mobile App"],
        ["Lĩnh vực", "Gia đình + Smart Home"],
        ["Công cụ", "FigJam + Figma"],
        ["Trạng thái", "Concept Project"],
      ],
    },
    overview: {
      tag: "( 01 · Tổng quan dự án )",
      title: "Một ngôi nhà cần cảm giác gắn kết, không phải thêm một lớp công nghệ để điều khiển.",
      body:
        "Các thành viên trong gia đình ngày càng ít có thời gian và điểm chạm chung vì lịch học, công việc, thói quen dùng điện thoại và khoảng cách thế hệ. Trong khi đó, phần lớn ứng dụng smart home chỉ bắt đầu từ thiết bị, chưa thật sự quan tâm đến mối quan hệ giữa những người sống trong nhà. Nếp Nhà vì vậy bắt đầu từ đời sống gia đình: lịch chung, lời nhắc chăm sóc, sự an toàn của ngôi nhà, những tín hiệu nhỏ cho biết người thân vẫn ổn và các kỷ niệm không nên trôi mất trong nhóm chat. Mục tiêu là tạo ra một không gian chung giúp người trẻ, cha mẹ và ông bà gần nhau hơn.",
      question: "Làm sao để công nghệ giúp các thế hệ gần nhau hơn, nhưng vẫn tôn trọng sự riêng tư và không làm người lớn tuổi thấy khó dùng?",
      pillars: [
        ["Chăm sóc", "Nhắc những việc cần thiết mà không tạo cảm giác thúc ép."],
        ["Ngôi nhà", "Giúp cả gia đình hiểu nhanh những thông tin quan trọng trong nhà."],
        ["Kỷ niệm", "Giữ lại khoảnh khắc gia đình trong một không gian riêng tư."],
      ],
    },
    research: {
      tag: "( 02 · Bối cảnh nghiên cứu )",
      title: "Khoảng trống nằm giữa thiết bị thông minh và đời sống thật của một gia đình.",
      body:
        "Desk research và phân tích đối thủ cho thấy việc điều khiển thiết bị đã dần quen thuộc, nhưng nhu cầu kết nối giữa các thế hệ, hỗ trợ người lớn tuổi và quản lý sự riêng tư trong gia đình vẫn chưa được giải quyết đủ sâu.",
      stats: [
        ["358,59 triệu USD", "Quy mô ước tính của thị trường smart home Việt Nam năm 2024."],
        ["22,6%", "Tỷ lệ hộ gia đình được dự báo sẽ sử dụng vào năm 2027."],
        ["7,3 giờ", "Thời gian dùng điện thoại trung bình mỗi ngày được ghi nhận trong research."],
        ["3 thế hệ", "Ba nhóm nhu cầu khác nhau cần cùng tồn tại trong một sản phẩm."],
      ],
      competitorsTitle: "Điều rút ra từ phân tích đối thủ",
      competitors: [
        ["Lumi Life", "Mạnh về điều khiển thiết bị nhưng chưa đi sâu vào kết nối gia đình."],
        ["Vconnex", "Tập trung vào IoT và an toàn điện, trải nghiệm mang tính kỹ thuật hơn."],
        ["CyHome", "Hữu ích cho tiện ích cư dân nhưng chưa đặt mối quan hệ gia đình ở trung tâm."],
        ["FamilyWall", "Phối hợp gia đình khá tốt nhưng tách rời smart home và bối cảnh gia đình Việt."],
      ],
      gap:
        "Cơ hội thiết kế không nằm ở một chiếc điều khiển từ xa khác. Nếp Nhà cần trở thành một lớp kết nối nhẹ nhàng giữa lịch sinh hoạt, sự an toàn, việc chăm sóc và ký ức chung.",
    },
    audience: {
      tag: "( 03 · Người dùng của Nếp Nhà )",
      title: "Hai thế hệ có cách rất khác nhau để cảm nhận một sản phẩm là hữu ích.",
      groups: [
        {
          label: "Người trẻ · Người kết nối công nghệ",
          quote: "Tôi muốn quan tâm gia đình nhưng không muốn ứng dụng biến thành công cụ theo dõi.",
          context: "Bận học hoặc đi làm, quen dùng công nghệ và thường là người đứng ra thiết lập ứng dụng cho cả nhà.",
          needs: ["Lời nhắc đúng lúc", "Quyền riêng tư rõ ràng", "Kiểm tra nhanh độ an toàn của nhà", "Không gian riêng cho ảnh gia đình"],
          tension: "Muốn yên tâm về người thân nhưng không chấp nhận thông báo dồn dập hay theo dõi vị trí liên tục.",
        },
        {
          label: "Ông bà · Thành viên trong nếp sinh hoạt chung",
          quote: "Tôi muốn lời nhắc giống sự quan tâm, không phải cảm giác có người đang quản lý mình.",
          context: "Ở nhà nhiều hơn, ít tự tin với giao diện phức tạp và muốn có cách đơn giản để gần gũi con cháu.",
          needs: ["Chữ lớn và thao tác rõ", "Lời nhắc nhẹ nhàng", "Điều khiển nhà đơn giản", "Dễ xem lại ảnh chung"],
          tension: "Cần được hỗ trợ nhưng có thể bỏ dùng ngay nếu ứng dụng quá rối hoặc nói chuyện như đang ra lệnh.",
        },
      ],
      labels: { context: "Bối cảnh", needs: "Nhu cầu", tension: "Mâu thuẫn chính" },
    },
    journey: {
      tag: "( 04 · Hành trình người dùng )",
      title: "Cùng một nhịp sống gia đình, nhưng mỗi người cảm nhận theo một cách khác.",
      body:
        "Hai hành trình dưới đây được làm lại trực tiếp từ UX Research. Cả hai đều đi qua ba giai đoạn giống nhau, nhưng nỗi lo và điều họ cần ở sản phẩm không thể dùng chung một lời giải.",
      stageLabels: ["Trước khi có giải pháp chung", "Lần đầu thiết lập", "Sau một thời gian sử dụng"],
      journeys: [
        {
          name: "Minh Anh",
          role: "Người trẻ · Người kết nối gia đình",
          stages: [
            {
              action: "Dùng nhóm chat, gọi điện và nhiều lịch riêng để nhắc việc cho cả nhà.",
              pain: "Thông tin nằm rải rác và một người phải gánh phần lớn việc ghi nhớ.",
              opportunity: "Gom lịch quan trọng, nếp sinh hoạt và trạng thái ngôi nhà vào một nơi dễ nhìn.",
            },
            {
              action: "Tạo không gian gia đình, kết nối thiết bị cần thiết rồi mời cha mẹ, ông bà tham gia.",
              pain: "Lo phần thiết lập quá kỹ thuật và người lớn tuổi khó làm quen.",
              opportunity: "Rút ngắn thiết lập, có chế độ hiển thị lớn và hướng dẫn thật rõ.",
            },
            {
              action: "Kiểm tra nhà, nhận lời nhắc cần thiết và lưu ảnh của gia đình.",
              pain: "Quá nhiều thông báo hoặc quyền riêng tư khó hiểu sẽ làm mất niềm tin.",
              opportunity: "Cho từng thành viên tự chọn thông báo, trạng thái và nội dung muốn chia sẻ.",
            },
          ],
        },
        {
          name: "Ngọc Hạnh",
          role: "Người lớn tuổi trong gia đình",
          stages: [
            {
              action: "Chờ con cháu gọi về, đọc tin nhắn đơn giản và nghe người nhà nhắc trực tiếp.",
              pain: "Dễ thấy mình đứng ngoài nhịp sinh hoạt lẫn thế giới công nghệ của người trẻ.",
              opportunity: "Dùng lời nhắc nhẹ và những tín hiệu nhỏ để họ vẫn cảm nhận được sự hiện diện của gia đình.",
            },
            {
              action: "Được con cháu thiết lập giúp và học một số thao tác lớn, quen thuộc.",
              pain: "Màn hình nhiều thông tin và cài đặt sâu tạo cảm giác sợ bấm nhầm.",
              opportunity: "Thiết kế giao diện tối giản, dùng từ dễ hiểu và cho phép quay lại khi thao tác sai.",
            },
            {
              action: "Nghe lời nhắc, xem kỷ niệm và dùng các điều khiển nhà cơ bản.",
              pain: "Thông báo mang giọng ra lệnh dễ bị cảm nhận như đang cằn nhằn.",
              opportunity: "Dùng ngôn ngữ ấm áp, âm thanh nhẹ và trải nghiệm xem ảnh quen như một cuốn album.",
            },
          ],
        },
      ],
      labels: { action: "Hành vi", pain: "Điểm vướng", opportunity: "Cơ hội thiết kế" },
    },
    direction: {
      tag: "( 05 · Định hướng thiết kế )",
      title: "Một giao diện nhẹ nhàng, đặt niềm tin, sự tự chủ và nếp sống chung ở trung tâm.",
      body:
        "Kết quả nghiên cứu giúp sản phẩm rời khỏi hình ảnh một bảng điều khiển thiết bị, để trở thành không gian hỗ trợ đời sống gia đình. Mỗi nguyên tắc dưới đây đều trả lời một mâu thuẫn đã xuất hiện trong user journey.",
      principles: [
        ["Thông minh vừa đủ", "Chỉ đưa điều cần thiết lên đúng lúc, thay vì lấp đầy ngày bằng thông báo."],
        ["Riêng tư do mỗi người chọn", "Giải thích rõ ai thấy được gì, trạng thái nào được chia sẻ và lời nhắc nào được nhận."],
        ["Dễ tiếp cận với người lớn tuổi", "Dùng từ quen thuộc, phân cấp rõ, nút lớn và giảm số quyết định trên từng màn."],
        ["Ngôi nhà có câu chuyện", "Kết nối an toàn, nếp sinh hoạt và ký ức để sản phẩm gần gũi hơn một ứng dụng tiện ích."],
      ],
    },
    structure: {
      tag: "( 06 · Cấu trúc sản phẩm )",
      title: "Năm không gian đi theo đúng cách một gia đình sinh hoạt.",
      body:
        "Kiến trúc thông tin tách những việc cần làm ngay khỏi thành viên, thiết bị và kỷ niệm. Nhờ vậy, màn đầu tiên vẫn hữu ích mà không bắt mọi tính năng phải tranh nhau sự chú ý.",
      items: [
        ["Hôm nay", "Lời nhắc, cập nhật gia đình và những việc đang cần được chú ý."],
        ["Gia đình", "Thành viên, lịch chung, việc chăm sóc và những tín hiệu hiện diện vừa đủ."],
        ["Nhà", "Thiết bị cần thiết, trạng thái an toàn và các nếp sinh hoạt có thể dùng lại."],
        ["Ký ức", "Album riêng của gia đình dành cho khoảnh khắc thường ngày lẫn dịp quan trọng."],
        ["Cài đặt", "Quyền riêng tư, phân quyền, thông báo và lựa chọn hỗ trợ khả năng tiếp cận."],
      ],
    },
    ui: {
      tag: "( 07 · Giao diện hoàn chỉnh )",
      title: "Một hệ thống hình ảnh ấm áp cho những khoảnh khắc rất đời thường.",
      body:
        "UI hoàn chỉnh dùng nền kem dịu, sắc xanh trầm, khoảng thở rộng và các khối bo tròn. Tổng thể được giữ bình tĩnh để lời nhắc và trạng thái ngôi nhà mang cảm giác hỗ trợ, không tạo thêm áp lực.",
      expand: "Xem toàn bộ màn hình",
      close: "Đóng bản xem",
      screens: [
        ["Chào mừng", "Mở đầu đơn giản, giới thiệu sản phẩm mà không yêu cầu người dùng làm quá nhiều việc cùng lúc."],
        ["Hôm nay", "Gom nếp sinh hoạt, lời nhắc và cập nhật gia đình vào một điểm bắt đầu hữu ích."],
        ["Gia đình", "Không gian chung cho thành viên, việc chăm sóc và những dấu hiệu nhỏ cho biết mọi người vẫn ổn."],
        ["Nhà", "Tổ chức lại smart home theo phòng, trạng thái an toàn và những thói quen quen thuộc."],
        ["Ký ức", "Kho hình ảnh riêng tư để những khoảnh khắc gia đình có chỗ ở lại."],
      ],
    },
    reflection: {
      tag: "( 08 · Điều tôi rút ra )",
      title: "Trải nghiệm smart home tốt có thể là trải nghiệm ít giống một bảng điều khiển nhất.",
      body:
        "Nếp Nhà giúp tôi hiểu rằng thiết kế cho gia đình là phải cùng lúc nghĩ đến nhiều mức độ tự tin, khả năng tập trung và nhu cầu tự chủ. Một sản phẩm hữu ích không bắt mọi thế hệ sử dụng theo cùng một cách. Nó cho mỗi người một lối tham gia đủ rõ, đồng thời giữ được sự cân bằng giữa quan tâm, riêng tư và lòng tự trọng.",
      next: "Case study tiếp theo",
      nextProject: "MeMe · Redesign YaMe",
    },
  },
} as const;

const UI_IMAGES = [
  NEP_NHA_UI.onboarding,
  NEP_NHA_UI.today,
  NEP_NHA_UI.family,
  NEP_NHA_UI.home,
  NEP_NHA_UI.memories,
] as const;

// Hotspot annotations for each UI screen
const SCREEN_HOTSPOTS = [
  [
    { title: "Tự nhiên & Thân thuộc", desc: "Lời chào ấm áp, dùng tông màu nón lá & lúa chín tạo cảm giác yên bình." },
    { title: "Thao tác 1-Chạm", desc: "Nút bắt đầu lớn, khoảng bấm thoáng giúp người lớn tuổi không bao giờ bấm nhầm." },
  ],
  [
    { title: "Nhịp sống hôm nay", desc: "Tổng hợp các nhắc nhở quan trọng nhất trong ngày của mọi thành viên." },
    { title: "Trạng thái ngôi nhà", desc: "Cập nhật nhanh nhiệt độ, độ ẩm và sự an toàn của căn nhà." },
  ],
  [
    { title: "Tín hiệu hiện diện", desc: "Biết người thân vẫn ổn qua hành vi tự nhiên mà không tạo cảm giác bị giám sát." },
    { title: "Chăm sóc gia đình", desc: "Giao việc và nhắc nhở nhẹ nhàng với biểu tượng trái tim." },
  ],
  [
    { title: "Điều khiển thông minh", desc: "Gom nhóm thiết bị theo từng phòng với công tắc lớn dễ dùng." },
    { title: "Chế độ nếp nhà", desc: "Kích hoạt ngữ cảnh tự động như 'Đi ngủ', 'Ra ngoài' chỉ bằng 1 chạm." },
  ],
  [
    { title: "Album riêng tư", desc: "Không gian lưu giữ khoảnh khắc gia đình an toàn, không trôi mất như trong tin nhắn." },
    { title: "Dòng thời gian kỷ niệm", desc: "Sắp xếp theo dòng thời gian gia đình sống động." },
  ],
];

function SectionTag({ children, color = GREEN_DARK }: { children: string; color?: string }) {
  return (
    <div className="mb-5 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color }}>
      {children}
    </div>
  );
}

function HouseMark() {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-[1.35rem] p-2.5 shadow-md" style={{ backgroundColor: GREEN }}>
      <img
        src={NEP_NHA_LOGO_MARK_URL}
        alt=""
        aria-hidden="true"
        className="h-full w-full object-contain brightness-0 invert"
      />
    </div>
  );
}

function PhoneMockup({ src, alt, className = "", maxHeight }: { src: string; alt: string; className?: string; maxHeight?: string }) {
  return (
    <div
      className={`relative isolate rounded-[3.15rem] bg-gradient-to-br from-[#8b8b8f] via-[#202124] to-[#77777c] p-[2px] shadow-[0_32px_70px_rgba(25,32,20,0.28),0_8px_20px_rgba(0,0,0,0.2)] ${className}`}
      style={maxHeight ? { maxHeight } : undefined}
    >
      <span className="absolute -left-[3px] top-[19%] h-[7%] w-[3px] rounded-l-full bg-[#343438]" aria-hidden="true" />
      <span className="absolute -left-[3px] top-[29%] h-[12%] w-[3px] rounded-l-full bg-[#343438]" aria-hidden="true" />
      <span className="absolute -right-[3px] top-[27%] h-[16%] w-[3px] rounded-r-full bg-[#343438]" aria-hidden="true" />

      <div className="relative rounded-[3rem] bg-[#080808] p-[7px] ring-1 ring-white/10">
        <div className="relative aspect-[375/812] overflow-hidden rounded-[2.55rem] bg-[#f9fafb]">
          <img src={src} alt={alt} className="block h-full w-full object-cover object-top" />
        </div>
      </div>

      <div
        className="absolute left-1/2 top-[13px] z-20 h-[20px] w-[78px] -translate-x-1/2 rounded-full bg-black shadow-[0_1px_2px_rgba(255,255,255,0.08)]"
        aria-hidden="true"
      >
        <span className="absolute right-[7px] top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-[#111820] ring-1 ring-[#26313c]" />
      </div>
    </div>
  );
}

export function NepNha() {
  const { lang } = useI18n();
  const c = COPY[lang];
  const [activeScreen, setActiveScreen] = useState<number | null>(null);

  // Interactive Persona Tab State
  const [activePersona, setActivePersona] = useState<number>(0);

  // Interactive Journey Stepper State
  const [activeJourneyIndex, setActiveJourneyIndex] = useState<number>(0);
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  // Interactive UI Screen Explorer State
  const [selectedUiIndex, setSelectedUiIndex] = useState<number>(1);

  useEffect(() => {
    if (activeScreen === null) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveScreen(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [activeScreen]);

  return (
    <div className="min-h-screen font-sans selection:bg-[#DDEACF] selection:text-[#365B2B]" style={{ backgroundColor: CREAM, color: INK }}>
      <CaseNav
        sections={c.sections as unknown as { id: string; label: string }[]}
        accent={GREEN_DARK}
        bg="rgba(247,242,232,0.92)"
        text={INK}
        border={LINE}
      />

      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pb-12 pt-24 md:pb-16 md:pt-28">
          {/* Subtle Ambient Background Gradient */}
          <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#DDEACF]/60 via-[#F7F2E8]/20 to-transparent blur-3xl" />

          <div className="mx-auto grid max-w-[1400px] items-start gap-10 md:gap-14 px-6 md:px-12 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="lg:col-span-6"
            >
              <div className="flex items-center gap-4">
                <HouseMark />
                <div>
                  <span className="block text-sm font-bold tracking-[0.18em]" style={{ color: GREEN_DARK }}>
                    NẾP NHÀ
                  </span>
                  <span className="text-xs tracking-widest text-neutral-500 uppercase">Family Living System</span>
                </div>
              </div>
              <div className="mt-5 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: GREEN }}>
                {c.hero.badge}
              </div>
              <h1
                className="mt-3 leading-[0.92] tracking-[-0.05em]"
                style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(3.2rem, 7.5vw, 5.8rem)", fontWeight: 400 }}
              >
                {c.hero.title}
              </h1>
              <p className="mt-4 max-w-[24ch] text-xl font-normal leading-snug md:text-2xl text-neutral-900">{c.hero.headline}</p>
              <p className="mt-3 max-w-[60ch] text-sm md:text-base leading-relaxed" style={{ color: MUTED }}>
                {c.hero.body}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => scrollToCaseSection("research")}
                  className="group inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2 text-sm font-medium text-white transition-all"
                  style={{ backgroundColor: GREEN_DARK }}
                >
                  <span>{c.hero.cta1}</span>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform"
                    style={{ backgroundColor: "#fff", color: GREEN_DARK }}
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToCaseSection("ui")}
                  className="inline-flex items-center gap-2 text-sm font-medium rounded-full px-5 py-3 transition-all hover:-translate-y-0.5"
                  style={{
                    border: `1px solid ${GREEN_DARK}`,
                    color: GREEN_DARK,
                    backgroundColor: "rgba(107, 147, 77, 0.08)",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.backgroundColor = "rgba(107, 147, 77, 0.16)";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.backgroundColor = "rgba(107, 147, 77, 0.08)";
                  }}
                >
                  {c.hero.cta2}
                </button>
              </div>
            </motion.div>

            {/* HERO MOCKUP & FLOATING BADGES */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative min-h-[580px] lg:col-span-6 flex items-center justify-center"
            >
              {/* Soft Backdrop Shape */}
              <div className="absolute inset-x-4 top-8 bottom-8 rounded-[3.5rem] opacity-70" style={{ backgroundColor: GREEN_SOFT }} />

              {/* Secondary Phone Mockup */}
              <div className="absolute left-[2%] top-16 w-[44%] rotate-[-6deg] transition-transform duration-500 hover:rotate-[-2deg] z-10 hidden sm:block">
                <PhoneMockup src={NEP_NHA_UI.onboarding} alt="Nếp Nhà onboarding screen" />
              </div>

              {/* Primary Main Phone Mockup */}
              <div className="relative w-[65%] sm:w-[50%] rotate-[2deg] z-20 transition-transform duration-500 hover:rotate-[0deg]">
                <PhoneMockup src={NEP_NHA_UI.today} alt="Nếp Nhà today screen" />
              </div>

              {/* Floating Micro Badges */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute top-10 right-[4%] z-30 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 p-3.5 shadow-xl backdrop-blur-md"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <BellRing size={18} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-900">Nhắc nhở nhẹ nhàng</div>
                  <div className="text-[0.7rem] text-neutral-500">Thuốc huyết áp · 08:00 AM</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-8 left-[6%] z-30 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 p-3.5 shadow-xl backdrop-blur-md"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-900">Nhà an toàn</div>
                  <div className="text-[0.7rem] text-neutral-500">Khóa cửa & Cảm biến OK</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Project Summary Bar */}
          <div className="mx-auto mt-20 grid max-w-[1400px] border-y px-6 py-7 md:grid-cols-3 md:px-12 lg:grid-cols-6" style={{ borderColor: LINE }}>
            {c.hero.info.map(([label, value]) => (
              <div key={label} className="border-b py-4 md:border-b-0 md:border-r md:px-5 first:pl-0 last:border-r-0" style={{ borderColor: LINE }}>
                <div className="text-[0.65rem] font-bold uppercase tracking-[0.18em]" style={{ color: MUTED }}>{label}</div>
                <div className="mt-1.5 text-sm font-medium">{value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section id="overview" className="border-t py-24 md:py-32" style={{ borderColor: LINE, backgroundColor: PAPER }}>
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <SectionTag>{c.overview.tag}</SectionTag>
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h2 className="max-w-[21ch] text-4xl leading-[1.04] tracking-[-0.035em] md:text-6xl" style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}>
                  {c.overview.title}
                </h2>
                <p className="mt-8 max-w-[72ch] text-lg leading-relaxed" style={{ color: MUTED }}>{c.overview.body}</p>
              </div>
              <div className="flex items-end lg:col-span-4">
                <div className="rounded-[2.2rem] p-8 text-white shadow-xl" style={{ backgroundColor: GREEN_DARK }}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
                    <Sparkles size={22} />
                  </div>
                  <p className="mt-6 text-xl leading-snug">{c.overview.question}</p>
                </div>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {c.overview.pillars.map(([title, body], index) => (
                <div key={title} className="rounded-[2rem] border p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1" style={{ borderColor: LINE, backgroundColor: CREAM }}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.2em]" style={{ color: GREEN }}>0{index + 1}</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm text-[#365B2B]">
                      {[<MessageCircleHeart key="1" size={20} />, <Home key="2" size={20} />, <Heart key="3" size={20} />][index]}
                    </div>
                  </div>
                  <h3 className="mt-8 text-2xl font-normal" style={{ fontFamily: "Fraunces, serif" }}>{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESEARCH SECTION */}
        <section id="research" className="py-24 md:py-32">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <SectionTag>{c.research.tag}</SectionTag>
            <div className="grid gap-10 lg:grid-cols-12">
              <h2 className="text-4xl leading-[1.04] tracking-[-0.035em] md:text-6xl lg:col-span-7" style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}>
                {c.research.title}
              </h2>
              <p className="max-w-[56ch] text-lg leading-relaxed lg:col-span-5" style={{ color: MUTED }}>{c.research.body}</p>
            </div>

            {/* Key Data Stats Grid */}
            <div className="mt-16 grid overflow-hidden rounded-[2.2rem] border shadow-sm md:grid-cols-2 lg:grid-cols-4" style={{ borderColor: LINE }}>
              {c.research.stats.map(([stat, label], index) => (
                <div key={stat} className="min-h-60 border-b p-8 md:border-r lg:border-b-0 transition-colors" style={{ borderColor: LINE, backgroundColor: index % 2 === 0 ? GREEN_DARK : PAPER, color: index % 2 === 0 ? "#fff" : INK }}>
                  <div className="text-4xl font-normal leading-none md:text-5xl" style={{ fontFamily: "Fraunces, serif" }}>{stat}</div>
                  <p className="mt-10 text-sm leading-relaxed" style={{ color: index % 2 === 0 ? "rgba(255,255,255,0.75)" : MUTED }}>{label}</p>
                </div>
              ))}
            </div>

            {/* Audit Competitor Insights */}
            <div className="mt-20 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-normal" style={{ fontFamily: "Fraunces, serif" }}>{c.research.competitorsTitle}</h3>
                  <p className="mt-6 rounded-[1.8rem] p-7 leading-relaxed text-white shadow-md" style={{ backgroundColor: GREEN }}>{c.research.gap}</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:col-span-8">
                {c.research.competitors.map(([name, note]) => (
                  <div key={name} className="rounded-[1.8rem] border bg-white p-7 shadow-sm transition-all hover:shadow-md" style={{ borderColor: LINE }}>
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-base">{name}</h4>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DDEACF]/60 text-[#365B2B]">
                        <ChevronRight size={16} />
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AUDIENCE SECTION — Side-by-side Personas */}
        <section id="audience" className="py-24 md:py-32" style={{ backgroundColor: GREEN_DARK, color: "#fff" }}>
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <SectionTag color="#CFE4BD">{c.audience.tag}</SectionTag>
            <h2 className="max-w-[28ch] text-4xl leading-[1.04] tracking-[-0.035em] md:text-6xl" style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}>
              {c.audience.title}
            </h2>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {c.audience.groups.map((group, index) => (
                <motion.article
                  key={group.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col rounded-[2.5rem] p-8 md:p-10 shadow-2xl"
                  style={{ backgroundColor: index === 0 ? PAPER : CREAM, color: INK }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em]" style={{ backgroundColor: index === 0 ? GREEN_SOFT : "#E2ECDA", color: GREEN_DARK }}>
                      {index === 0 ? <Smartphone size={14} /> : <UsersRound size={14} />}
                      {group.label}
                    </span>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Persona 0{index + 1}
                    </div>
                  </div>

                  <blockquote className="mt-7 text-xl font-normal leading-snug md:text-2xl text-neutral-900" style={{ fontFamily: "Fraunces, serif" }}>
                    &ldquo;{group.quote}&rdquo;
                  </blockquote>

                  <div className="mt-8 flex-1 space-y-6 border-t pt-7" style={{ borderColor: LINE }}>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: GREEN_DARK }}>{c.audience.labels.context}</div>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>{group.context}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: GREEN_DARK }}>{c.audience.labels.needs}</div>
                      <ul className="mt-2 space-y-2 text-sm" style={{ color: INK }}>
                        {group.needs.map((item) => (
                          <li key={item} className="flex items-center gap-2.5">
                            <CheckCircle2 size={15} className="text-[#365B2B] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex items-start gap-3 rounded-[1.5rem] p-4 text-sm leading-relaxed" style={{ backgroundColor: index === 0 ? CREAM : PAPER }}>
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                      <Info size={16} />
                    </div>
                    <div>
                      <strong className="text-neutral-900">{c.audience.labels.tension}: </strong>
                      <span style={{ color: MUTED }}>{group.tension}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* USER JOURNEY SECTION (INTERACTIVE TIMELINE STEPPER) */}
        <section id="journey" className="py-24 md:py-32" style={{ backgroundColor: PAPER }}>
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <SectionTag>{c.journey.tag}</SectionTag>
            <div className="grid gap-8 lg:grid-cols-12">
              <h2 className="text-4xl leading-[1.04] tracking-[-0.035em] md:text-6xl lg:col-span-8" style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}>
                {c.journey.title}
              </h2>
              <p className="text-lg leading-relaxed lg:col-span-4" style={{ color: MUTED }}>{c.journey.body}</p>
            </div>

            {/* Persona Switcher Buttons for Journey */}
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-b pb-6" style={{ borderColor: LINE }}>
              <div className="flex items-center gap-3">
                {c.journey.journeys.map((j, idx) => (
                  <button
                    key={j.name}
                    type="button"
                    onClick={() => { setActiveJourneyIndex(idx); setActiveStageIndex(0); }}
                    className={`rounded-full px-6 py-3 text-sm font-medium transition-all ${activeJourneyIndex === idx
                      ? "bg-[#365B2B] text-white shadow-md"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                      }`}
                  >
                    {j.name} · {j.role}
                  </button>
                ))}
              </div>

              {/* Stage Stepper Buttons */}
              <div className="flex items-center gap-2">
                {c.journey.stageLabels.map((label, sIdx) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setActiveStageIndex(sIdx)}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all ${activeStageIndex === sIdx
                      ? "bg-[#DDEACF] text-[#365B2B] border border-[#365B2B]/30"
                      : "bg-white text-neutral-500 hover:text-neutral-900 border border-neutral-200"
                      }`}
                  >
                    <span>0{sIdx + 1}</span>
                    <span className="hidden sm:inline">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Journey Stage Display */}
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {c.journey.journeys[activeJourneyIndex].stages.map((stage, idx) => {
                const isActive = activeStageIndex === idx;
                return (
                  <div
                    key={c.journey.stageLabels[idx]}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`cursor-pointer rounded-[2rem] border p-8 transition-all duration-300 ${isActive
                      ? "border-[#365B2B] bg-white shadow-xl ring-2 ring-[#365B2B]/20 -translate-y-1"
                      : "border-neutral-200 bg-[#F7F2E8]/60 hover:bg-white hover:border-neutral-300"
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold tracking-widest uppercase ${isActive ? "text-[#365B2B]" : "text-neutral-400"}`}>
                        Giai đoạn 0{idx + 1}
                      </span>
                      {isActive && (
                        <span className="rounded-full bg-[#365B2B] px-3 py-1 text-[0.65rem] font-semibold text-white uppercase">
                          Đang chọn
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 text-xl font-normal" style={{ fontFamily: "Fraunces, serif" }}>
                      {c.journey.stageLabels[idx]}
                    </h3>

                    <div className="mt-8 space-y-6 text-sm leading-relaxed">
                      <div>
                        <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.16em]" style={{ color: GREEN }}>
                          {c.journey.labels.action}
                        </strong>
                        <p className="mt-2 text-neutral-800">{stage.action}</p>
                      </div>
                      <div>
                        <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.16em]" style={{ color: "#A05A4A" }}>
                          {c.journey.labels.pain}
                        </strong>
                        <p className="mt-2 text-neutral-600">{stage.pain}</p>
                      </div>
                      <div className="rounded-xl bg-[#DDEACF]/40 p-4 border border-[#365B2B]/20">
                        <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.16em]" style={{ color: GREEN_DARK }}>
                          {c.journey.labels.opportunity}
                        </strong>
                        <p className="mt-1.5 font-medium text-[#365B2B]">{stage.opportunity}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* DESIGN DIRECTION SECTION */}
        <section id="direction" className="py-24 md:py-32">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <SectionTag>{c.direction.tag}</SectionTag>
            <div className="grid gap-10 lg:grid-cols-12">
              <h2 className="text-4xl leading-[1.04] tracking-[-0.035em] md:text-6xl lg:col-span-7" style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}>
                {c.direction.title}
              </h2>
              <p className="text-lg leading-relaxed lg:col-span-5" style={{ color: MUTED }}>{c.direction.body}</p>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {c.direction.principles.map(([title, body], index) => {
                const icons = [BellRing, LockKeyhole, ShieldCheck, Heart];
                const Icon = icons[index];
                return (
                  <div
                    key={title}
                    className="group rounded-[2rem] border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#365B2B] hover:text-white hover:shadow-xl"
                    style={{ borderColor: LINE }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DDEACF] text-[#365B2B] transition-colors group-hover:bg-white/20 group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-8 text-2xl font-normal" style={{ fontFamily: "Fraunces, serif" }}>{title}</h3>
                    <p className="mt-3 max-w-[54ch] text-sm leading-relaxed opacity-80">{body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRODUCT STRUCTURE SECTION */}
        <section id="structure" className="py-24 md:py-32" style={{ backgroundColor: GREEN_DARK, color: "#fff" }}>
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <SectionTag color="#CFE4BD">{c.structure.tag}</SectionTag>
            <div className="grid gap-10 lg:grid-cols-12">
              <h2 className="text-4xl leading-[1.04] tracking-[-0.035em] md:text-6xl lg:col-span-7" style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}>
                {c.structure.title}
              </h2>
              <p className="text-lg leading-relaxed text-white/70 lg:col-span-5">{c.structure.body}</p>
            </div>

            <div className="mt-16 grid gap-4 md:grid-cols-5">
              {c.structure.items.map(([title, body], index) => {
                const icons = [CalendarDays, UsersRound, Home, Heart, ShieldCheck];
                const Icon = icons[index];
                return (
                  <div key={title} className="rounded-[1.8rem] bg-white/10 p-7 backdrop-blur-md border border-white/15 transition-all hover:bg-white/20 hover:-translate-y-1">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white">
                      <Icon size={20} />
                    </div>
                    <div className="mt-10 text-xs font-bold tracking-[0.18em] text-white/50">0{index + 1}</div>
                    <h3 className="mt-2 text-2xl font-normal" style={{ fontFamily: "Fraunces, serif" }}>{title}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-white/70">{body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BRAND STORY & SYMBOLISM SECTION */}
        <section className="py-24 md:py-32" style={{ backgroundColor: PAPER }}>
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <div className="grid items-center gap-14 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <SectionTag>( Brand Story & Identity )</SectionTag>
                <h2 className="text-4xl leading-[1.04] tracking-[-0.035em] md:text-6xl" style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}>
                  Nón lá, ngôi nhà và trái tim cùng tạo nên Nếp Nhà.
                </h2>
                <p className="mt-6 text-base leading-relaxed" style={{ color: MUTED }}>
                  {lang === "vi"
                    ? "Thumbnail được giữ nguyên từ artwork thương hiệu của dự án. Ba hình ảnh đại diện cho cội nguồn Việt, sự sum vầy trong nhà và tinh thần thấu hiểu được đặt ở trung tâm sản phẩm."
                    : "The project thumbnail preserves the original brand artwork. Its three symbols represent Vietnamese roots, togetherness at home, and empathy at the center of the product."}
                </p>

                {/* 3 Brand Pillars Badges */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4 rounded-2xl bg-white p-4 border shadow-sm" style={{ borderColor: LINE }}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-bold text-sm">01</div>
                    <div>
                      <div className="font-semibold text-neutral-900 text-sm">Nón Lá · Cội nguồn Việt</div>
                      <div className="text-xs text-neutral-500">Giữ gìn giá trị văn hóa và thói quen sinh hoạt gia đình.</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-2xl bg-white p-4 border shadow-sm" style={{ borderColor: LINE }}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold text-sm">02</div>
                    <div>
                      <div className="font-semibold text-neutral-900 text-sm">Ngôi Nhà · Sự sum vầy</div>
                      <div className="text-xs text-neutral-500">Mái ấm kết nối các thế hệ dưới một mái nhà chung.</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-2xl bg-white p-4 border shadow-sm" style={{ borderColor: LINE }}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-800 font-bold text-sm">03</div>
                    <div>
                      <div className="font-semibold text-neutral-900 text-sm">Trái Tim · Thấu hiểu</div>
                      <div className="text-xs text-neutral-500">Đặt sự chăm sóc và lòng tự trọng của mọi người làm ưu tiên.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2.5rem] border p-4 shadow-xl lg:col-span-7" style={{ borderColor: LINE, backgroundColor: CREAM }}>
                <img src={NEP_NHA_THUMBNAIL_URL} alt="Nếp Nhà brand thumbnail with conical hat, home, and heart symbolism" className="max-h-[720px] w-full rounded-[2rem] object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE FINAL UI SHOWCASE SECTION */}
        <section id="ui" className="py-24 md:py-32">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <SectionTag>{c.ui.tag}</SectionTag>
            <div className="grid gap-10 lg:grid-cols-12">
              <h2 className="text-4xl leading-[1.04] tracking-[-0.035em] md:text-6xl lg:col-span-7" style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}>
                {c.ui.title}
              </h2>
              <p className="text-lg leading-relaxed lg:col-span-5" style={{ color: MUTED }}>{c.ui.body}</p>
            </div>

            {/* Interactive Screen Selector Tabs — STICKY NAV BAR */}
            <div className="sticky top-[64px] md:top-[80px] z-30 -mx-6 px-6 md:-mx-12 md:px-12 py-3.5 bg-[#F7F2E8]/95 backdrop-blur-md border-b transition-all shadow-sm" style={{ borderColor: LINE }}>
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                {c.ui.screens.map(([title], index) => (
                  <button
                    key={title}
                    type="button"
                    onClick={() => {
                      setSelectedUiIndex(index);
                      const el = document.getElementById("ui-showcase-card");
                      if (el) {
                        const yOffset = -140;
                        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }}
                    className={`rounded-full px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-semibold transition-all ${selectedUiIndex === index
                      ? "bg-[#365B2B] text-white shadow-md scale-102"
                      : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
                      }`}
                  >
                    0{index + 1}. {title}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Interactive Screen Showcase Display */}
            <div
              id="ui-showcase-card"
              className="mt-8 grid gap-8 items-center lg:grid-cols-12 rounded-[2rem] border p-6 md:p-8 bg-white shadow-lg scroll-mt-36"
              style={{ borderColor: LINE }}
            >
              {/* Sleek iPhone Mockup Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[260px] md:max-w-[280px] group">
                  <PhoneMockup src={UI_IMAGES[selectedUiIndex]} alt={`Nếp Nhà ${c.ui.screens[selectedUiIndex][0]} screen`} />

                  <button
                    type="button"
                    onClick={() => setActiveScreen(selectedUiIndex)}
                    className="absolute top-3 right-3 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-transform hover:scale-110"
                    aria-label="Enlarge image"
                  >
                    <Expand size={16} />
                  </button>
                </div>
              </div>

              {/* Screen Description & Hotspots */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: GREEN }}>
                    Màn hình 0{selectedUiIndex + 1} / 05
                  </span>
                  <h3 className="mt-1 text-2xl md:text-3xl font-normal" style={{ fontFamily: "Fraunces, serif" }}>
                    {c.ui.screens[selectedUiIndex][0]}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed" style={{ color: MUTED }}>
                    {c.ui.screens[selectedUiIndex][1]}
                  </p>
                </div>

                {/* Hotspot callout cards */}
                <div className="space-y-3 pt-3 border-t" style={{ borderColor: LINE }}>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Điểm nổi bật UX/UI
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {SCREEN_HOTSPOTS[selectedUiIndex].map((spot, hIdx) => (
                      <div key={spot.title} className="rounded-xl bg-[#F7F2E8] p-4 border border-[#D9DFD1]">
                        <div className="flex items-center gap-2 font-semibold text-neutral-900 text-xs">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#365B2B] text-white text-[0.65rem] font-bold">
                            {hIdx + 1}
                          </span>
                          {spot.title}
                        </div>
                        <p className="mt-1.5 text-xs leading-relaxed text-neutral-600">{spot.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveScreen(selectedUiIndex)}
                    className="inline-flex items-center gap-2.5 rounded-full border border-[#365B2B] px-5 py-2.5 text-xs font-semibold transition-colors hover:bg-[#365B2B] hover:text-white"
                    style={{ color: GREEN_DARK }}
                  >
                    <Expand size={15} />
                    {c.ui.expand}
                  </button>
                </div>
              </div>
            </div>

            {/* Grid Preview of All Screens */}
            <div className="mt-12 grid gap-5 md:grid-cols-5">
              {c.ui.screens.map(([title, body], index) => (
                <article
                  key={title}
                  onClick={() => {
                    setSelectedUiIndex(index);
                    const el = document.getElementById("ui-showcase-card");
                    if (el) {
                      const yOffset = -140;
                      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                  className={`group cursor-pointer overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:shadow-lg ${selectedUiIndex === index ? "ring-2 ring-[#365B2B] shadow-md" : ""
                    }`}
                  style={{ borderColor: LINE }}
                >
                  <div className="p-3.5">
                    <div className="text-[0.65rem] font-bold tracking-[0.18em]" style={{ color: GREEN }}>0{index + 1}</div>
                    <h4 className="mt-0.5 text-sm font-semibold truncate">{title}</h4>
                  </div>
                  <div className="h-[140px] overflow-hidden bg-[#DDEACF]/30 p-2">
                    <img
                      src={UI_IMAGES[index]}
                      alt={`Nếp Nhà ${title} UI screen thumbnail`}
                      className="h-full w-full object-contain object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* REFLECTION SECTION */}
        <section className="border-t py-20 md:py-24" style={{ borderColor: LINE, backgroundColor: PAPER }}>
          <div className="mx-auto max-w-[1200px] px-6 text-center md:px-12">
            <SectionTag>{c.reflection.tag}</SectionTag>
            <h2 className="mx-auto max-w-[22ch] text-4xl leading-[1.04] tracking-[-0.035em] md:text-6xl" style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}>
              {c.reflection.title}
            </h2>
            <p className="mx-auto mt-6 max-w-[76ch] text-base md:text-lg leading-relaxed" style={{ color: MUTED }}>{c.reflection.body}</p>
          </div>
        </section>
      </main>

      <NextProjectFooter currentSlug="nepnha" />

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {activeScreen !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-md md:p-8" role="dialog" aria-modal="true" aria-label={c.ui.screens[activeScreen][0]}>
          <button
            type="button"
            onClick={() => setActiveScreen(null)}
            className="fixed right-6 top-6 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-2xl transition-transform hover:scale-110"
            aria-label={c.ui.close}
          >
            <X size={22} />
          </button>
          <button type="button" onClick={() => setActiveScreen(null)} className="fixed inset-0 cursor-default" aria-hidden="true" tabIndex={-1} />
          <div className="relative z-10 mx-auto w-full max-w-[720px] overflow-hidden rounded-[2.5rem] bg-white p-4 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b mb-3" style={{ borderColor: LINE }}>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#365B2B]">0{activeScreen + 1}. Màn hình ứng dụng</span>
                <h3 className="text-2xl font-normal text-neutral-900" style={{ fontFamily: "Fraunces, serif" }}>
                  {c.ui.screens[activeScreen][0]}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveScreen(null)}
                className="rounded-full bg-neutral-100 px-4 py-2 text-xs font-semibold text-neutral-700 hover:bg-neutral-200"
              >
                {c.ui.close}
              </button>
            </div>
            <img src={UI_IMAGES[activeScreen]} alt={`Nếp Nhà ${c.ui.screens[activeScreen][0]} full UI screen`} className="h-auto w-full rounded-[1.8rem]" />
          </div>
        </div>
      )}
    </div>
  );
}
