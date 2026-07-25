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
      { id: "insights", label: "Insights" },
      { id: "audience", label: "Users" },
      { id: "journey", label: "Journey" },
      { id: "direction", label: "Solution" },
      { id: "ui", label: "Interface" },
    ],
    hero: {
      badge: "UX/UI Case Study · 2026 · Family Living · Mobile App",
      title: "Nếp Nhà",
      headline: "One shared space for a family to remember, care, and feel closer.",
      body:
        "Nếp Nhà is a mobile concept for multigenerational families. Rather than starting with device control, the project asks how technology can help family members share responsibilities, stay present in one another's lives, and preserve everyday memories without turning care into surveillance.",
      cta1: "Explore the research",
      cta2: "View final UI",
      info: [
        ["Role", "UX/UI Designer"],
        ["Timeline", "2026"],
        ["Scope", "UX Research + UI Design"],
        ["Platform", "Mobile App"],
        ["Category", "Family Living + Smart Home"],
        ["Status", "Concept Project"],
      ],
    },
    overview: {
      tag: "( 01 · Project Overview )",
      title: "Living under one roof does not always mean feeling close.",
      body:
        "Work, study, personal screens, and different routines leave families with fewer moments in common. Important information is spread across chat groups, phone calls, calendars, and separate photo albums, while one person often carries most of the work of remembering and reminding. Nếp Nhà reframes the smart home around the people inside it: shared schedules, care, small signs of presence, home safety, and family memories.",
      question: "How might we use technology to bring generations closer while protecting privacy and keeping the experience simple for older family members?",
      pillars: [
        ["Remember together", "Keep important schedules and routines visible without making one person remind everyone."],
        ["Care together", "Share care and home responsibilities in a way that feels supportive rather than controlling."],
        ["Keep together", "Give everyday family moments a private place to stay and be revisited."],
      ],
    },
    research: {
      tag: "( 02 · Research Process )",
      title: "The project started with family life, not a feature list.",
      body:
        "The UX board moves from desk research and competitive review to user groups, empathy mapping, personas, journeys, information architecture, and interface design. The purpose was to understand where family coordination breaks down before deciding what Nếp Nhà should become.",
      methods: [
        ["Desk research", "Reviewed the smart-living context and the changing routines of Vietnamese families."],
        ["Competitive audit", "Compared smart-home products with family coordination platforms."],
        ["Empathy mapping", "Grouped repeated needs, anxieties, responsibilities, and expectations across generations."],
        ["Personas and journeys", "Turned the research into two primary personas and two critical usage perspectives."],
        ["IA and prototype", "Translated the findings into product structure, flows, and high-fidelity screens."],
      ],
      evidence: [
        ["3 generations", "Different levels of confidence, independence, and comfort with technology must coexist."],
        ["4 scattered touchpoints", "Family information moves between chat, calls, calendars, and separate photo albums."],
        ["1 family coordinator", "One parent or adult often carries most of the reminding, planning, and follow-up."],
        ["Care vs. privacy", "People want reassurance about loved ones without feeling watched or managed."],
      ],
      competitorsTitle: "What the audit revealed",
      competitors: [
        ["Lumi Life", "Strong device control, but little support for family connection."],
        ["Vconnex", "Deep IoT and safety focus, with a more technical experience."],
        ["CyHome", "Useful for resident services, but less centered on household relationships."],
        ["FamilyWall", "Strong family coordination, but disconnected from smart-home routines and Vietnamese family culture."],
      ],
      gap:
        "The opportunity was not another remote control. It was a family layer that connects routines, care, safety, and memories while leaving each person in control of what they share.",
    },
    insights: {
      tag: "( 03 · Research Synthesis )",
      title: "The research did not lead to more features. It clarified the role of the product.",
      body:
        "Three tensions shaped the design. Care must not feel like surveillance. Reminders must reduce pressure instead of becoming another source of pressure. A shared experience must include different generations without forcing everyone to use it in the same way.",
      tensions: [
        ["Care without surveillance", "Status and safety information should reassure family members, while visibility remains understandable and optional."],
        ["Reminders without pressure", "The product should distribute responsibility and use a warm tone rather than repeatedly telling people what to do."],
        ["One family, different abilities", "Younger adults need speed and control, while older adults need clarity, confidence, and fewer decisions."],
      ],
      decisionsTitle: "From finding to product decision",
      decisions: [
        ["Scattered family information", "Today", "Bring schedules, reminders, status, and priorities into one starting point."],
        ["One person carries the mental load", "Shared care", "Let members share tasks and routines instead of relying on one family coordinator."],
        ["Family members miss shared moments", "Connection suggestions", "Suggest small activities that can become repeatable family rituals."],
        ["Care can feel intrusive", "Privacy controls", "Let each member choose which status and notifications are visible."],
        ["Memories disappear in chat", "Private memories", "Create a family-owned archive organized around moments, not message history."],
      ],
    },
    audience: {
      tag: "( 04 · Primary Personas )",
      title: "Two people carry different parts of the same family rhythm.",
      groups: [
        {
          label: "Minh Anh · 22 · Technology connector",
          quote: "I care about my family, but I do not want tracking or constant reminders.",
          context: "A young professional who is comfortable with technology and often helps other family members set up digital tools.",
          needs: ["Right-time reminders", "Clear privacy controls", "A quick home-safety check", "A private space for family memories"],
          tension: "Wants reassurance, but rejects notification overload and constant location tracking.",
        },
        {
          label: "Ngọc Hạnh · 38 · Family coordinator",
          quote: "I do not need an app to do everything. I need it to help us forget less, remind each other less, and know that everyone is okay.",
          context: "A parent who coordinates schedules, appointments, medication, bills, and daily care across the household.",
          needs: ["One shared family schedule", "Responsibilities distributed across members", "Simple safety updates", "A place for family routines and memories"],
          tension: "Wants to care for everyone, but the invisible work of remembering and following up is becoming exhausting.",
        },
      ],
      labels: { context: "Context", needs: "Needs", tension: "Core tension" },
      accessibilityTitle: "Older adults remain a critical design group",
      accessibility:
        "Although the two primary personas represent the technology connector and the family coordinator, grandparents shape the accessibility requirements: larger controls, familiar language, gentle reminders, and forgiving interactions.",
    },
    journey: {
      tag: "( 05 · Critical Journeys )",
      title: "The solution was checked from both sides of a family relationship.",
      body:
        "The journey maps were rebuilt directly from the UX board. Both users move through the same three stages, but their pain points and expectations are not interchangeable.",
      stageLabels: ["Before a shared solution", "First-time setup", "After regular use"],
      journeys: [
        {
          name: "Technology connector",
          role: "Busy child or grandchild",
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
          name: "Older family member",
          role: "Parent or grandparent at home",
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
      tag: "( 06 · Product Direction )",
      title: "From a device dashboard to a shared family rhythm.",
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
      tag: "( 07 · Product Structure )",
      title: "Five spaces support the family, but Today carries the main story.",
      body:
        "The information architecture separates immediate daily needs from people, devices, and memories. This keeps the first screen useful without making every feature compete for attention.",
      items: [
        ["Today", "The shared starting point for reminders, member status, priorities, and connection suggestions."],
        ["Family", "Members, shared schedules, care routines, and light presence signals."],
        ["Home", "Essential device control, safety status, and reusable home routines."],
        ["Memories", "A private family album for everyday moments and important occasions."],
        ["Settings", "Privacy, permissions, notification preferences, and accessibility choices."],
      ],
    },
    anatomy: {
      tag: "( 08 · How I Structured the Screen )",
      ia: {
        title: "Information Architecture Breakdown (IA)",
        desc: "Before drawing the UI, I listed all necessary data points and grouped them by context of use.",
        step1: {
          title: "Data points",
          items: ["Greeting", "Avatar", "Temperature", "Humidity", "Medication Reminder", "Family Status", "Who's Home", "Connection Suggestion", "Shared Chores"]
        },
        step2: {
          title: "Context Grouping",
          g1: { title: "Start (Header)", desc: "Avatar + Greeting" },
          g2: { title: "Quick Reports", desc: "Personal Reminders + Environment Stats" },
          g3: { title: "Family Life", desc: "Family Status + Connection Suggestions" }
        },
        step3: {
          title: "Wireframe Mapping"
        }
      },
      layout: {
        title: "Pixel-Perfect Layout Analysis (Today Screen)",
        headline: "Grid Formula: 375px Width, 16px Margin, and two 163px quick report cards.",
        desc: "The interface is meticulously calculated to fit popular screen sizes, ensuring a 16px breathing room for the main rhythm while optimizing space for information display components.",
        annotations: {
          w163: "163px width",
          gap16: "16px gap",
          pad14: { title: "14px padding", desc: "Exception: This card has a 36px icon and 2 lines of text, so I reduced padding from 16px to 14px to maintain the 84px height." },
          rad24: { title: "24px radius", desc: "For larger family and connection blocks." },
          margin16: "16px margin",
          disclaimer: "( UI rendered using HTML/CSS simulating an iPhone 13 mini - 375px screen )"
        }
      }
    },
    ui: {
      tag: "( 09 · Final Interface )",
      title: "Each screen answers a specific finding from the research.",
      body:
        "The final UI uses a soft cream background, grounded green accents, generous spacing, and rounded cards. The system is deliberately calm so reminders and home status feel supportive rather than urgent.",
      expand: "View full screen",
      close: "Close preview",
      screens: [
        ["Welcome", "Set up a shared home and explain family roles with familiar language and a short flow."],
        ["Today", "Combine schedules, member status, home information, and small suggestions for spending time together."],
        ["Family", "Make shared care visible through member status, responsibilities, and household routines."],
        ["Home", "Keep device control as a supporting utility, organized around rooms, safety, and familiar routines."],
        ["Memories", "Turn scattered family photos into a private archive that belongs to the household."],
      ],
      screenLabel: "Screen",
      highlightsLabel: "Research translated into UI",
      imageLabel: "Application screen",
    },
    validation: {
      tag: "( 10 · Validation Plan )",
      title: "This is a testable concept, not a result I claim has already been proven.",
      body:
        "The research synthesis, information architecture, and high-fidelity prototype are complete. The next step is moderated usability testing with a young adult, a family coordinator, and an older adult so the team can test comprehension, privacy, and emotional tone across generations.",
      checks: [
        ["Task clarity", "Can each user find a reminder, check family status, and complete a shared task without help?"],
        ["Privacy comprehension", "Do members understand what is shared, with whom, and how to change it?"],
        ["Notification tone", "Do reminders feel supportive, or do they feel intrusive and commanding?"],
        ["Senior accessibility", "Are text size, controls, language, and recovery from mistakes comfortable for older adults?"],
      ],
      metrics: "Suggested measures: task completion, time on task, error rate, privacy comprehension, notification acceptance, and qualitative comfort.",
    },
    reflection: {
      tag: "( 11 · Reflection )",
      title: "Designing family connection is not about adding more interaction.",
      body:
        "Nếp Nhà taught me to look for calm, meaningful touchpoints instead of filling a product with features. Designing for a family means supporting different levels of confidence, attention, and independence at the same time. The product should help people take part in family life without making care feel like control.",
      next: "Next case study",
      nextProject: "MeMe · YaMe Redesign",
    },
  },
  vi: {
    sections: [
      { id: "overview", label: "Tổng quan" },
      { id: "research", label: "Nghiên cứu" },
      { id: "insights", label: "Insight" },
      { id: "audience", label: "Người dùng" },
      { id: "journey", label: "Hành trình" },
      { id: "direction", label: "Giải pháp" },
      { id: "ui", label: "Giao diện" },
    ],
    hero: {
      badge: "UX/UI Case Study · 2026 · Gia đình · Mobile App",
      title: "Nếp Nhà",
      headline: "Một không gian chung để cả nhà cùng nhớ, cùng chăm và gần nhau hơn.",
      body:
        "Nếp Nhà là concept ứng dụng dành cho gia đình nhiều thế hệ. Thay vì bắt đầu từ việc điều khiển thiết bị, em đặt câu hỏi: công nghệ có thể giúp các thành viên san sẻ việc nhà, quan tâm nhau và lưu giữ kỷ niệm như thế nào mà không khiến ai cảm thấy bị theo dõi?",
      cta1: "Xem phần nghiên cứu",
      cta2: "Xem giao diện hoàn chỉnh",
      info: [
        ["Vai trò", "UX/UI Designer"],
        ["Thời gian", "2026"],
        ["Phạm vi", "UX Research + UI Design"],
        ["Nền tảng", "Mobile App"],
        ["Lĩnh vực", "Gia đình + Smart Home"],
        ["Trạng thái", "Concept Project"],
      ],
    },
    overview: {
      tag: "( 01 · Tổng quan dự án )",
      title: "Sống chung một mái nhà không có nghĩa lúc nào cũng cảm thấy gần nhau.",
      body:
        "Công việc, học tập và lịch sinh hoạt khác nhau khiến các thành viên ngày càng ít có thời gian chung. Lịch hẹn, lời nhắc và ảnh gia đình lại nằm rải rác trong nhóm chat, cuộc gọi, lịch riêng và nhiều album khác nhau. Trong khi đó, một người thường phải nhớ và nhắc việc cho cả nhà. Vì vậy, em thiết kế Nếp Nhà như một không gian chung để gia đình theo dõi lịch, san sẻ việc chăm sóc, kiểm tra sự an toàn và cùng lưu giữ kỷ niệm.",
      question: "Làm sao để công nghệ giúp các thế hệ gần nhau hơn, nhưng vẫn tôn trọng sự riêng tư và không làm người lớn tuổi thấy khó dùng?",
      pillars: [
        ["Cùng nhớ", "Giữ lịch và nếp sinh hoạt quan trọng ở một nơi để không ai phải nhắc cả nhà một mình."],
        ["Cùng chăm", "Chia sẻ việc chăm sóc và trách nhiệm trong nhà mà không tạo cảm giác quản lý nhau."],
        ["Cùng giữ", "Cho những khoảnh khắc thường ngày một nơi riêng tư để cả nhà có thể xem lại."],
      ],
    },
    research: {
      tag: "( 02 · Quy trình nghiên cứu )",
      title: "Em bắt đầu bằng việc tìm hiểu gia đình đang gặp khó khăn ở đâu.",
      body:
        "Quy trình nghiên cứu gồm tìm hiểu bối cảnh, phân tích đối thủ, tổng hợp nhu cầu của các nhóm tuổi, xây dựng persona và user journey. Sau khi xác định được những vấn đề lặp lại, em mới sắp xếp kiến trúc thông tin, xây dựng luồng sử dụng và thiết kế giao diện.",
      methods: [
        ["Nghiên cứu tài liệu", "Tìm hiểu sự thay đổi trong nếp sinh hoạt của gia đình Việt và cách công nghệ đang được dùng trong nhà."],
        ["Phân tích đối thủ", "So sánh ứng dụng nhà thông minh với các nền tảng hỗ trợ gia đình quản lý lịch và công việc chung."],
        ["Sơ đồ thấu cảm", "Tổng hợp những nhu cầu, nỗi lo và trách nhiệm thường xuất hiện ở mỗi thế hệ."],
        ["Persona và hành trình", "Xây dựng hai persona chính để thấy rõ mỗi người đang gặp khó khăn ở bước nào."],
        ["Cấu trúc và prototype", "Chuyển kết quả nghiên cứu thành cấu trúc sản phẩm, luồng sử dụng và giao diện hoàn chỉnh."],
      ],
      evidence: [
        ["3 thế hệ", "Mỗi thế hệ có mức độ quen thuộc với công nghệ và nhu cầu tự chủ khác nhau."],
        ["4 nơi lưu thông tin", "Thông tin gia đình thường nằm rải rác trong nhóm chat, cuộc gọi, lịch riêng và album ảnh."],
        ["1 người thường xuyên nhắc việc", "Một người trong nhà thường phải nhớ lịch, nhắc việc và kiểm tra mọi người."],
        ["Quan tâm và riêng tư", "Các thành viên muốn biết người thân vẫn ổn nhưng không muốn cảm thấy mình bị giám sát."],
      ],
      competitorsTitle: "Điều rút ra từ phân tích đối thủ",
      competitors: [
        ["Lumi Life", "Mạnh về điều khiển thiết bị nhưng chưa đi sâu vào kết nối gia đình."],
        ["Vconnex", "Tập trung vào IoT và an toàn điện, trải nghiệm mang tính kỹ thuật hơn."],
        ["CyHome", "Hữu ích cho tiện ích cư dân nhưng chưa đặt mối quan hệ gia đình ở trung tâm."],
        ["FamilyWall", "Phối hợp gia đình khá tốt nhưng tách rời smart home và bối cảnh gia đình Việt."],
      ],
      gap:
        "Từ đó, em nhận ra gia đình không cần thêm một ứng dụng chỉ để điều khiển thiết bị. Họ cần một nơi kết nối lịch sinh hoạt, việc chăm sóc, sự an toàn và kỷ niệm chung, đồng thời cho phép mỗi người tự chọn thông tin mình muốn chia sẻ.",
    },
    insights: {
      tag: "( 03 · Tổng hợp insight )",
      title: "Điều em cần giải quyết không phải là thêm tính năng, mà là cân bằng ba nhu cầu.",
      body:
        "Gia đình cần quan tâm nhau nhưng vẫn phải tôn trọng riêng tư. Lời nhắc cần giúp mọi người bớt quên việc mà không tạo cảm giác bị thúc ép. Giao diện cũng phải đủ nhanh cho người trẻ nhưng vẫn rõ ràng và dễ dùng với người lớn tuổi.",
      tensions: [
        ["Quan tâm nhưng không theo dõi", "Trạng thái và thông tin an toàn nên giúp cả nhà yên tâm, nhưng quyền chia sẻ phải rõ ràng và do từng người lựa chọn."],
        ["Nhắc việc nhưng không gây áp lực", "Sản phẩm cần chia sẻ trách nhiệm và dùng giọng điệu gần gũi, thay vì liên tục ra lệnh cho người dùng."],
        ["Một gia đình, nhiều khả năng sử dụng", "Người trẻ cần nhanh và chủ động, còn người lớn tuổi cần rõ ràng, dễ tin và ít phải lựa chọn."],
      ],
      decisionsTitle: "Từ phát hiện đến quyết định sản phẩm",
      decisions: [
        ["Thông tin gia đình nằm rải rác", "Hôm nay", "Gom lịch, lời nhắc, trạng thái và việc cần chú ý vào một điểm bắt đầu."],
        ["Một người gánh phần lớn việc nhớ", "Chăm sóc chung", "Cho phép các thành viên chia sẻ việc nhà và nếp sinh hoạt."],
        ["Cả nhà thiếu thời gian chung", "Gợi ý kết nối", "Đề xuất những hoạt động nhỏ có thể trở thành thói quen chung."],
        ["Sự quan tâm dễ thành xâm phạm", "Kiểm soát riêng tư", "Để mỗi người chọn trạng thái và thông báo muốn chia sẻ."],
        ["Kỷ niệm trôi mất trong nhóm chat", "Ký ức riêng", "Tạo kho lưu trữ thuộc về gia đình và được sắp theo khoảnh khắc."],
      ],
    },
    audience: {
      tag: "( 04 · Persona chính )",
      title: "Hai persona đại diện cho hai vai trò khác nhau trong gia đình.",
      groups: [
        {
          label: "Minh Anh · 22 tuổi · Người kết nối công nghệ",
          quote: "Em quan tâm gia đình, nhưng không muốn bị theo dõi hay nhận quá nhiều lời nhắc.",
          context: "Mới đi làm, quen dùng công nghệ và thường là người hỗ trợ các thành viên khác thiết lập công cụ số.",
          needs: ["Lời nhắc đúng lúc", "Quyền riêng tư rõ ràng", "Kiểm tra nhanh độ an toàn của nhà", "Không gian riêng cho ảnh gia đình"],
          tension: "Muốn yên tâm về người thân nhưng không chấp nhận thông báo dồn dập hay theo dõi vị trí liên tục.",
        },
        {
          label: "Ngọc Hạnh · 38 tuổi · Người giữ nhịp gia đình",
          quote: "Mình không cần app làm thay mọi thứ, chỉ cần nó giúp cả nhà bớt quên việc, bớt phải nhắc nhau và biết người thân vẫn ổn.",
          context: "Là người thường sắp xếp lịch, cuộc hẹn, thuốc men, hóa đơn và những việc chăm sóc trong gia đình.",
          needs: ["Một lịch chung cho cả nhà", "Chia việc cho nhiều thành viên", "Cập nhật an toàn dễ hiểu", "Nơi giữ nếp sinh hoạt và kỷ niệm"],
          tension: "Muốn chăm lo cho mọi người nhưng đang mệt vì phải một mình ghi nhớ và theo sát quá nhiều việc.",
        },
      ],
      labels: { context: "Bối cảnh", needs: "Nhu cầu", tension: "Mâu thuẫn chính" },
      accessibilityTitle: "Người lớn tuổi vẫn là nhóm thiết kế quan trọng",
      accessibility:
        "Ngoài hai persona chính, em vẫn xem ông bà là nhóm người dùng cần được ưu tiên. Vì vậy, giao diện cần có nút đủ lớn, từ ngữ quen thuộc, lời nhắc nhẹ nhàng và cách quay lại rõ ràng khi bấm nhầm.",
    },
    journey: {
      tag: "( 05 · Hành trình quan trọng )",
      title: "Em đặt hai nhóm người dùng vào cùng một hành trình để xem mỗi người gặp khó khăn ở đâu.",
      body:
        "Cả hai nhóm đều đi qua ba giai đoạn: trước khi có Nếp Nhà, lúc thiết lập lần đầu và sau một thời gian sử dụng. Tuy cùng dùng một sản phẩm, mỗi nhóm lại có nỗi lo và cách làm quen khác nhau.",
      stageLabels: ["Trước khi có giải pháp chung", "Lần đầu thiết lập", "Sau một thời gian sử dụng"],
      journeys: [
        {
          name: "Người kết nối công nghệ",
          role: "Con hoặc cháu bận rộn",
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
          name: "Người lớn tuổi",
          role: "Cha mẹ hoặc ông bà ở nhà",
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
      tag: "( 06 · Định hướng sản phẩm )",
      title: "Từ ứng dụng điều khiển thiết bị thành không gian chung cho cả gia đình.",
      body:
        "Sau khi tổng hợp nghiên cứu, em xác định Nếp Nhà không nên chỉ tập trung vào thiết bị. Sản phẩm cần hỗ trợ những việc diễn ra mỗi ngày trong gia đình và giúp các thành viên quan tâm nhau theo cách vừa đủ.",
      principles: [
        ["Chỉ nhắc khi cần", "Ưu tiên những thông tin cần xem ngay và hạn chế thông báo không cần thiết."],
        ["Mỗi người tự chọn điều muốn chia sẻ", "Giải thích rõ ai có thể xem trạng thái, lịch và thông tin của từng thành viên."],
        ["Người lớn tuổi cũng có thể tự dùng", "Dùng từ quen thuộc, nút lớn, phân cấp rõ và giảm số lựa chọn trên mỗi màn hình."],
        ["Không chỉ quản lý, còn lưu giữ", "Kết hợp lịch sinh hoạt, sự an toàn và kỷ niệm để ứng dụng gần gũi hơn với đời sống gia đình."],
      ],
    },
    structure: {
      tag: "( 07 · Cấu trúc sản phẩm )",
      title: "Nếp Nhà được chia thành năm khu vực, với Hôm nay là màn hình bắt đầu.",
      body:
        "Em tách thông tin cần xem ngay khỏi phần thành viên, thiết bị, kỷ niệm và cài đặt. Nhờ vậy, màn Hôm nay chỉ giữ những nội dung cần thiết cho một ngày, thay vì đưa toàn bộ tính năng lên cùng lúc.",
      items: [
        ["Hôm nay", "Điểm bắt đầu chung cho lời nhắc, trạng thái thành viên, việc cần chú ý và gợi ý kết nối."],
        ["Gia đình", "Thành viên, lịch chung, việc chăm sóc và những tín hiệu hiện diện vừa đủ."],
        ["Nhà", "Thiết bị cần thiết, trạng thái an toàn và các nếp sinh hoạt có thể dùng lại."],
        ["Ký ức", "Album riêng của gia đình dành cho khoảnh khắc thường ngày lẫn dịp quan trọng."],
        ["Cài đặt", "Quyền riêng tư, phân quyền, thông báo và lựa chọn hỗ trợ khả năng tiếp cận."],
      ],
    },
    anatomy: {
      tag: "( 08 · Cách em sắp xếp giao diện )",
      ia: {
        title: "Cách em sắp xếp thông tin trước khi vẽ giao diện",
        desc: "Em liệt kê những thông tin cần xuất hiện trên màn Hôm nay, sau đó chia chúng thành từng nhóm dựa trên mục đích sử dụng.",
        step1: {
          title: "Những thông tin cần có",
          items: ["Lời chào", "Avatar", "Nhiệt độ", "Độ ẩm", "Lời nhắc uống thuốc", "Trạng thái người thân", "Ai đang ở nhà", "Gợi ý kết nối", "Việc nhà chung"]
        },
        step2: {
          title: "Chia thông tin theo từng nhóm",
          g1: { title: "Phần mở đầu", desc: "Ảnh đại diện + Lời chào" },
          g2: { title: "Báo cáo nhanh", desc: "Lời nhắc cá nhân + Thông số môi trường" },
          g3: { title: "Đời sống gia đình", desc: "Trạng thái người thân + Gợi ý kết nối" }
        },
        step3: {
          title: "Đưa các nhóm thông tin vào wireframe"
        }
      },
      layout: {
        title: "Cách em chia bố cục màn Hôm nay",
        headline: "Màn hình rộng 375px, chừa lề 16px và chia hàng báo cáo thành hai card rộng 163px.",
        desc: "Em dùng lề 16px làm khoảng cách chính trên toàn màn hình. Cách chia này giúp hai card có cùng kích thước, nội dung dễ so sánh và vẫn đủ khoảng trống để giao diện không bị chật.",
        annotations: {
          w163: "163px width",
          gap16: "16px gap",
          pad14: { title: "14px padding", desc: "Ngoại lệ: Card này có icon 36px và 2 dòng chữ, nên em giảm padding từ 16px xuống 14px để giữ nguyên chiều cao 84px." },
          rad24: { title: "24px radius", desc: "Cho các khối lớn về gia đình và kết nối." },
          margin16: "16px margin",
          disclaimer: "( Giao diện được dựng bằng HTML/CSS theo kích thước iPhone 13 mini, rộng 375px )"
        }
      }
    },
    ui: {
      tag: "( 09 · Giao diện hoàn chỉnh )",
      title: "Mỗi màn hình được thiết kế để giải quyết một nhu cầu đã tìm thấy trong nghiên cứu.",
      body:
        "Em dùng nền kem, màu xanh trầm, khoảng cách rộng và các card bo tròn để tạo cảm giác gần gũi. Lời nhắc và trạng thái trong nhà nhờ vậy dễ nhận biết nhưng không khiến người dùng cảm thấy bị thúc ép.",
      expand: "Xem toàn bộ màn hình",
      close: "Đóng bản xem",
      screens: [
        ["Chào mừng", "Tạo ngôi nhà chung và giải thích vai trò thành viên bằng từ ngữ quen thuộc trong một flow ngắn."],
        ["Hôm nay", "Gom lịch, trạng thái thành viên, thông tin trong nhà và những gợi ý nhỏ để cả nhà có thêm thời gian chung."],
        ["Gia đình", "Làm rõ việc chăm sóc chung qua trạng thái thành viên, trách nhiệm và nếp sinh hoạt."],
        ["Nhà", "Giữ điều khiển thiết bị ở vai trò hỗ trợ, được sắp theo phòng, sự an toàn và thói quen quen thuộc."],
        ["Ký ức", "Biến ảnh gia đình nằm rải rác thành một kho riêng thuộc về các thành viên trong nhà."],
      ],
      screenLabel: "Màn hình",
      highlightsLabel: "Từ nghiên cứu đến giao diện",
      imageLabel: "Màn hình ứng dụng",
    },
    validation: {
      tag: "( 10 · Kế hoạch kiểm chứng )",
      title: "Bước tiếp theo là kiểm thử prototype với ba nhóm tuổi trong gia đình.",
      body:
        "Ở giai đoạn hiện tại, em đã hoàn thành phần nghiên cứu, cấu trúc thông tin và prototype. Để biết giải pháp có thật sự dễ hiểu và phù hợp với nhiều thế hệ hay không, em sẽ kiểm thử với một người trẻ, một người thường sắp xếp việc gia đình và một người lớn tuổi.",
      checks: [
        ["Thực hiện tác vụ", "Người dùng có thể tìm lời nhắc, xem trạng thái gia đình và hoàn thành việc chung mà không cần trợ giúp không?"],
        ["Hiểu quyền riêng tư", "Mỗi thành viên có biết mình đang chia sẻ thông tin gì, với ai và có thể thay đổi ở đâu không?"],
        ["Cảm nhận về lời nhắc", "Thông báo có tạo cảm giác được hỗ trợ hay khiến người dùng thấy mình đang bị thúc ép?"],
        ["Mức độ dễ dùng với người lớn tuổi", "Cỡ chữ, nút bấm, từ ngữ và cách quay lại có đủ rõ ràng khi người lớn tuổi thao tác không?"],
      ],
      metrics: "Khi kiểm thử, em sẽ theo dõi tỷ lệ hoàn thành tác vụ, thời gian thực hiện, lỗi thao tác, mức độ hiểu quyền riêng tư và cảm nhận của người dùng về các lời nhắc.",
    },
    reflection: {
      tag: "( 11 · Điều em rút ra )",
      title: "Muốn gia đình gần nhau hơn, sản phẩm không cần tạo thêm thật nhiều tương tác.",
      body:
        "Qua Nếp Nhà, em hiểu rằng một sản phẩm dành cho gia đình không cần có quá nhiều tính năng. Điều quan trọng hơn là chọn đúng lúc để nhắc, giúp mỗi người tham gia vào việc chung và vẫn tôn trọng quyền riêng tư. Giao diện cũng cần đủ linh hoạt để người trẻ dùng nhanh, trong khi người lớn tuổi vẫn có thể hiểu và tự thao tác.",
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

const SCREEN_HOTSPOTS = {
  en: [
    [
      { title: "Familiar first step", desc: "A short setup introduces the shared home and family roles without technical language." },
      { title: "Accessible actions", desc: "Large controls and generous touch areas reduce hesitation for less confident users." },
    ],
    [
      { title: "Shared rhythm", desc: "Schedules, member status, household tasks, and priorities meet in one daily view." },
      { title: "Connection suggestions", desc: "Small activity ideas turn free moments into repeatable family rituals." },
    ],
    [
      { title: "Gentle presence", desc: "Members can know that loved ones are okay without relying on constant location tracking." },
      { title: "Shared care", desc: "Responsibilities and reminders become visible to the family instead of one coordinator." },
    ],
    [
      { title: "Supporting utility", desc: "Devices are grouped by rooms and essential safety needs rather than dominating the product." },
      { title: "Familiar routines", desc: "Reusable scenes such as Sleep or Away reduce repetitive device-by-device control." },
    ],
    [
      { title: "Private family archive", desc: "Photos stay in a family-owned space instead of disappearing inside chat history." },
      { title: "Memory over messages", desc: "A visual timeline organizes moments around family life, not conversation threads." },
    ],
  ],
  vi: [
    [
      { title: "Bắt đầu bằng điều quen thuộc", desc: "Flow ngắn giới thiệu ngôi nhà chung và vai trò thành viên mà không dùng từ ngữ kỹ thuật." },
      { title: "Thao tác dễ tin", desc: "Nút lớn và vùng bấm thoáng giúp người ít tự tin với công nghệ bớt sợ thao tác sai." },
    ],
    [
      { title: "Nhịp sống chung", desc: "Lịch, trạng thái thành viên, việc nhà và ưu tiên trong ngày gặp nhau ở một màn hình." },
      { title: "Gợi ý kết nối", desc: "Những hoạt động nhỏ giúp khoảng thời gian rảnh trở thành nếp sinh hoạt chung của gia đình." },
    ],
    [
      { title: "Hiện diện vừa đủ", desc: "Cả nhà biết người thân vẫn ổn mà không cần theo dõi vị trí liên tục." },
      { title: "Chăm sóc chung", desc: "Việc cần làm và lời nhắc được chia sẻ cho cả nhà thay vì dồn vào một người." },
    ],
    [
      { title: "Tiện ích hỗ trợ", desc: "Thiết bị được sắp theo phòng và nhu cầu an toàn, không lấn át câu chuyện kết nối gia đình." },
      { title: "Nếp sinh hoạt quen thuộc", desc: "Các chế độ như Đi ngủ hoặc Ra ngoài giảm việc điều khiển từng thiết bị lặp lại." },
    ],
    [
      { title: "Kho riêng của gia đình", desc: "Ảnh được giữ trong không gian chung của gia đình thay vì trôi mất trong lịch sử tin nhắn." },
      { title: "Kỷ niệm thay vì tin nhắn", desc: "Dòng thời gian sắp xếp khoảnh khắc theo đời sống gia đình, không theo cuộc trò chuyện." },
    ],
  ],
} as const;

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
  const screenHotspots = SCREEN_HOTSPOTS[lang];
  const [activeScreen, setActiveScreen] = useState<number | null>(null);

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
                  <div className="text-xs font-semibold text-neutral-900">{lang === "vi" ? "Nhắc nhở nhẹ nhàng" : "Gentle reminder"}</div>
                  <div className="text-[0.7rem] text-neutral-500">{lang === "vi" ? "Thuốc huyết áp" : "Blood pressure medicine"} · 08:00 AM</div>
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
                  <div className="text-xs font-semibold text-neutral-900">{lang === "vi" ? "Nhà an toàn" : "Home is safe"}</div>
                  <div className="text-[0.7rem] text-neutral-500">{lang === "vi" ? "Khóa cửa và cảm biến ổn định" : "Door lock and sensors are okay"}</div>
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

            <div className="mt-16 grid gap-3 md:grid-cols-5">
              {c.research.methods.map(([title, body], index) => (
                <article key={title} className="rounded-[1.6rem] border bg-white p-6 shadow-sm" style={{ borderColor: LINE }}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: GREEN_DARK }}>
                      0{index + 1}
                    </span>
                    {index < c.research.methods.length - 1 && <ChevronRight size={16} className="ml-auto hidden text-neutral-300 md:block" />}
                  </div>
                  <h3 className="mt-6 text-lg" style={{ fontFamily: "Fraunces, serif" }}>{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed" style={{ color: MUTED }}>{body}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 grid overflow-hidden rounded-[2.2rem] border shadow-sm md:grid-cols-2 lg:grid-cols-4" style={{ borderColor: LINE }}>
              {c.research.evidence.map(([stat, label], index) => (
                <div key={stat} className="min-h-60 border-b p-8 md:border-r lg:border-b-0" style={{ borderColor: LINE, backgroundColor: index % 2 === 0 ? GREEN_DARK : PAPER, color: index % 2 === 0 ? "#fff" : INK }}>
                  <div className="text-3xl font-normal leading-tight md:text-4xl" style={{ fontFamily: "Fraunces, serif" }}>{stat}</div>
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

        {/* RESEARCH SYNTHESIS SECTION */}
        <section id="insights" className="py-24 md:py-32" style={{ backgroundColor: PAPER }}>
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <SectionTag>{c.insights.tag}</SectionTag>
            <div className="grid gap-10 lg:grid-cols-12">
              <h2 className="text-4xl leading-[1.04] tracking-[-0.035em] md:text-6xl lg:col-span-7" style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}>
                {c.insights.title}
              </h2>
              <p className="text-lg leading-relaxed lg:col-span-5" style={{ color: MUTED }}>{c.insights.body}</p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {c.insights.tensions.map(([title, body], index) => (
                <article key={title} className="rounded-[2rem] p-8 text-white shadow-lg" style={{ backgroundColor: index === 1 ? GREEN : GREEN_DARK }}>
                  <div className="text-xs font-bold tracking-[0.2em] text-white/55">0{index + 1}</div>
                  <h3 className="mt-8 text-2xl" style={{ fontFamily: "Fraunces, serif" }}>{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{body}</p>
                </article>
              ))}
            </div>

            <div className="mt-20">
              <h3 className="text-3xl" style={{ fontFamily: "Fraunces, serif" }}>{c.insights.decisionsTitle}</h3>
              <div className="mt-8 overflow-hidden rounded-[2rem] border bg-white shadow-sm" style={{ borderColor: LINE }}>
                {c.insights.decisions.map(([finding, decision, reason], index) => (
                  <div key={finding} className="grid gap-5 border-b p-6 last:border-b-0 md:grid-cols-[1.1fr_0.7fr_1.7fr] md:items-center md:p-8" style={{ borderColor: LINE }}>
                    <div>
                      <div className="text-[0.65rem] font-bold uppercase tracking-[0.18em]" style={{ color: MUTED }}>0{index + 1}</div>
                      <p className="mt-2 font-medium">{finding}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <ChevronRight size={17} className="hidden text-neutral-300 md:block" />
                      <span className="rounded-full px-4 py-2 text-xs font-semibold" style={{ backgroundColor: GREEN_SOFT, color: GREEN_DARK }}>{decision}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{reason}</p>
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

            <div className="mt-6 flex flex-col gap-5 rounded-[2rem] border border-white/15 bg-white/10 p-7 backdrop-blur-sm md:flex-row md:items-center md:p-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{c.audience.accessibilityTitle}</h3>
                <p className="mt-2 max-w-[92ch] text-sm leading-relaxed text-white/70">{c.audience.accessibility}</p>
              </div>
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
                        {lang === "vi" ? "Giai đoạn" : "Stage"} 0{idx + 1}
                      </span>
                      {isActive && (
                        <span className="rounded-full bg-[#365B2B] px-3 py-1 text-[0.65rem] font-semibold text-white uppercase">
                          {lang === "vi" ? "Đang chọn" : "Selected"}
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
                <SectionTag>{lang === "vi" ? "( Câu chuyện thương hiệu )" : "( Brand Story & Identity )"}</SectionTag>
                <h2 className="text-4xl leading-[1.04] tracking-[-0.035em] md:text-6xl" style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}>
                  {lang === "vi"
                    ? "Nón lá, ngôi nhà và trái tim cùng tạo nên Nếp Nhà."
                    : "A conical hat, a home, and a heart come together in the Nếp Nhà identity."}
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
                      <div className="font-semibold text-neutral-900 text-sm">{lang === "vi" ? "Nón lá · Cội nguồn Việt" : "Conical hat · Vietnamese roots"}</div>
                      <div className="text-xs text-neutral-500">{lang === "vi" ? "Gợi lại văn hóa và nếp sinh hoạt gia đình Việt." : "A reference to Vietnamese culture and familiar family life."}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-2xl bg-white p-4 border shadow-sm" style={{ borderColor: LINE }}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold text-sm">02</div>
                    <div>
                      <div className="font-semibold text-neutral-900 text-sm">{lang === "vi" ? "Ngôi nhà · Sự sum vầy" : "Home · Togetherness"}</div>
                      <div className="text-xs text-neutral-500">{lang === "vi" ? "Mái ấm là điểm chung giữa nhiều thế hệ." : "The home is the shared place between generations."}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-2xl bg-white p-4 border shadow-sm" style={{ borderColor: LINE }}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-800 font-bold text-sm">03</div>
                    <div>
                      <div className="font-semibold text-neutral-900 text-sm">{lang === "vi" ? "Trái tim · Thấu hiểu" : "Heart · Empathy"}</div>
                      <div className="text-xs text-neutral-500">{lang === "vi" ? "Đặt sự quan tâm, riêng tư và lòng tự trọng ở trung tâm." : "Care, privacy, and dignity remain at the center."}</div>
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

        {/* DESIGN ANATOMY SECTION */}
        <section id="anatomy" className="py-24 md:py-32" style={{ backgroundColor: "#EDF4E7" }}>
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <SectionTag>{c.anatomy.tag}</SectionTag>
            
            {/* INFOGRAPHIC 1: DATA POINTS TO INFORMATION ARCHITECTURE */}
            <div className="mt-8 rounded-[2.5rem] bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-12 lg:p-16">
              <div className="mb-12">
                <div className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GREEN_DARK }}>
                  {c.anatomy.ia.title}
                </div>
                <h3 className="mt-4 max-w-2xl text-2xl leading-snug text-neutral-800 md:text-3xl" style={{ fontFamily: "Fraunces, serif" }}>
                  {c.anatomy.ia.desc}
                </h3>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                {/* Step 1 */}
                <div className="rounded-3xl bg-[#f9f9f9] p-8">
                  <div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200 text-xs font-bold text-neutral-600">1</div>
                  <div className="mb-4 font-semibold text-neutral-800">{c.anatomy.ia.step1.title}</div>
                  <div className="flex flex-wrap gap-2">
                    {c.anatomy.ia.step1.items.map((point: string) => (
                      <span key={point} className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-600 shadow-sm">{point}</span>
                    ))}
                  </div>
                </div>

                {/* Step 2 */}
                <div className="rounded-3xl bg-[#f0f5ed] p-8">
                  <div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full font-bold text-white" style={{ backgroundColor: GREEN }}>2</div>
                  <div className="mb-4 font-semibold text-neutral-800">{c.anatomy.ia.step2.title}</div>
                  <div className="space-y-3">
                    <div className="rounded-xl bg-white p-4 shadow-sm">
                      <div className="text-xs font-bold uppercase tracking-wider" style={{ color: GREEN_DARK }}>{c.anatomy.ia.step2.g1.title}</div>
                      <div className="mt-1 text-xs text-neutral-500">{c.anatomy.ia.step2.g1.desc}</div>
                    </div>
                    <div className="rounded-xl bg-white p-4 shadow-sm border-l-4" style={{ borderLeftColor: GREEN }}>
                      <div className="text-xs font-bold uppercase tracking-wider" style={{ color: GREEN_DARK }}>{c.anatomy.ia.step2.g2.title}</div>
                      <div className="mt-1 text-xs text-neutral-500">{c.anatomy.ia.step2.g2.desc}</div>
                    </div>
                    <div className="rounded-xl bg-white p-4 shadow-sm border-l-4 border-neutral-300">
                      <div className="text-xs font-bold uppercase tracking-wider text-neutral-600">{c.anatomy.ia.step2.g3.title}</div>
                      <div className="mt-1 text-xs text-neutral-500">{c.anatomy.ia.step2.g3.desc}</div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="rounded-3xl p-8" style={{ backgroundColor: GREEN_DARK }}>
                  <div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 font-bold text-white">3</div>
                  <div className="mb-4 font-semibold text-white">{c.anatomy.ia.step3.title}</div>
                  <div className="mx-auto w-48 overflow-hidden rounded-[2rem] bg-neutral-900 p-2 shadow-2xl ring-4 ring-neutral-800">
                    <div className="flex h-[320px] flex-col gap-2 rounded-[1.6rem] bg-white p-3">
                      <div className="flex items-center gap-2 px-1 py-2">
                        <div className="h-8 w-8 rounded-full bg-neutral-200" />
                        <div className="h-3 w-16 rounded-full bg-neutral-200" />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-20 rounded-xl opacity-80" style={{ backgroundColor: GREEN_SOFT }} />
                        <div className="h-20 rounded-xl opacity-80" style={{ backgroundColor: GREEN_SOFT }} />
                      </div>
                      <div className="mt-2 h-16 rounded-xl bg-neutral-100" />
                      <div className="h-16 rounded-xl bg-neutral-100" />
                      <div className="mt-auto flex justify-around border-t pt-2">
                        <div className="h-4 w-4 rounded-full bg-neutral-200" />
                        <div className="h-4 w-4 rounded-full bg-neutral-200" />
                        <div className="h-4 w-4 rounded-full bg-neutral-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* INFOGRAPHIC 2: PIXEL-PERFECT LAYOUT ANATOMY */}
            <div className="mt-8 overflow-hidden rounded-[2.5rem] bg-[#1a1f18] p-6 text-white shadow-2xl md:p-16">
              <div className="mb-16 max-w-2xl">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  <CheckCircle2 size={16} />
                  {c.anatomy.layout.title}
                </div>
                <h3 className="mt-5 text-2xl leading-snug md:text-3xl" style={{ fontFamily: "Fraunces, serif" }}>
                  {c.anatomy.layout.headline}
                </h3>
                <p className="mt-4 text-sm text-white/60 leading-relaxed">
                  {c.anatomy.layout.desc}
                </p>
              </div>

              <div className="relative mx-auto flex w-full max-w-[800px] items-center justify-center py-10 hidden sm:flex">
                <div className="relative z-10 w-[375px] shrink-0 rounded-[2.5rem] bg-white p-[16px] shadow-2xl ring-8 ring-white/10 select-none">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-neutral-200" />
                    <div className="space-y-1.5">
                      <div className="h-3 w-20 rounded-full bg-neutral-200" />
                      <div className="h-4 w-32 rounded-full bg-neutral-300" />
                    </div>
                  </div>

                  <div className="relative flex gap-[16px]">
                    <div className="relative h-[84px] w-[163.5px] rounded-[16px] p-[16px]" style={{ backgroundColor: GREEN_SOFT }}>
                      <div className="flex items-center gap-1.5">
                        <div className="h-5 w-5 rounded-md bg-white/60" />
                        <div className="h-2 w-16 rounded-full bg-black/20" />
                      </div>
                      <div className="mt-3 h-5 w-24 rounded-full bg-black/40" />
                      <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center">
                        <div className="h-4 w-[1px] bg-white/40" />
                        <div className="whitespace-nowrap rounded-md bg-white/10 px-2 py-1 text-[10px] text-white backdrop-blur-sm">{c.anatomy.layout.annotations.w163}</div>
                      </div>
                    </div>

                    <div className="absolute left-[163.5px] top-1/2 flex h-full w-[16px] -translate-y-1/2 flex-col items-center justify-center">
                      <div className="w-full border-t border-dashed border-red-400" />
                      <div className="absolute -top-6 whitespace-nowrap text-[10px] font-bold text-red-400">{c.anatomy.layout.annotations.gap16}</div>
                    </div>

                    <div className="relative h-[84px] w-[163.5px] rounded-[16px] p-[14px]" style={{ backgroundColor: '#FFF9E8' }}>
                      <div className="flex items-center gap-1.5">
                        <div className="h-7 w-7 rounded-full bg-orange-100" />
                        <div className="space-y-1.5">
                          <div className="h-2 w-12 rounded-full bg-black/20" />
                          <div className="h-2 w-16 rounded-full bg-black/20" />
                        </div>
                      </div>
                      <div className="mt-2 h-4 w-20 rounded-full bg-black/40" />
                      <div className="absolute -right-32 top-1/2 flex -translate-y-1/2 items-center gap-2">
                        <div className="h-[1px] w-8 border-t border-dashed border-[#F5A623]" />
                        <div className="w-32 rounded-lg bg-[#2a2a2a] p-2 text-[10px] text-white/80 ring-1 ring-white/10">
                          <strong className="block text-[#F5A623]">{c.anatomy.layout.annotations.pad14.title}</strong>
                          {c.anatomy.layout.annotations.pad14.desc}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-[24px]">
                    <div className="mb-3 h-4 w-32 rounded-full bg-neutral-200" />
                    <div className="relative h-[120px] w-full rounded-[24px] bg-neutral-100 p-4">
                      <div className="absolute -left-28 mt-8 flex items-center gap-2">
                        <div className="w-24 text-right text-[10px] text-white/80">
                          <strong className="block text-green-400">{c.anatomy.layout.annotations.rad24.title}</strong>
                          {c.anatomy.layout.annotations.rad24.desc}
                        </div>
                        <div className="h-[1px] w-6 border-t border-dashed border-green-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -left-12 top-[40%] flex items-center gap-2">
                    <div className="whitespace-nowrap text-[10px] font-bold text-blue-300">{c.anatomy.layout.annotations.margin16}</div>
                    <div className="w-8 border-t border-dashed border-blue-300" />
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-[16px] bg-blue-400/10" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-[16px] bg-blue-400/10" />

                </div>
              </div>
              
              <div className="mt-8 text-center text-[10px] uppercase tracking-[0.2em] text-white/40 hidden sm:block">
                {c.anatomy.layout.annotations.disclaimer}
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
                    {c.ui.screenLabel} 0{selectedUiIndex + 1} / 05
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
                    {c.ui.highlightsLabel}
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {screenHotspots[selectedUiIndex].map((spot, hIdx) => (
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

        {/* VALIDATION PLAN SECTION */}
        <section className="py-24 md:py-32" style={{ backgroundColor: GREEN_SOFT }}>
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <SectionTag>{c.validation.tag}</SectionTag>
            <div className="grid gap-10 lg:grid-cols-12">
              <h2 className="text-4xl leading-[1.04] tracking-[-0.035em] md:text-6xl lg:col-span-7" style={{ fontFamily: "Fraunces, serif", fontWeight: 400 }}>
                {c.validation.title}
              </h2>
              <p className="text-lg leading-relaxed lg:col-span-5" style={{ color: MUTED }}>{c.validation.body}</p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {c.validation.checks.map(([title, body], index) => (
                <article key={title} className="rounded-[2rem] border bg-white p-7 shadow-sm md:p-8" style={{ borderColor: LINE }}>
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-xs font-bold text-white" style={{ backgroundColor: GREEN_DARK }}>
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl" style={{ fontFamily: "Fraunces, serif" }}>{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>{body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 rounded-[1.7rem] px-6 py-5 text-sm font-medium leading-relaxed text-white md:px-8" style={{ backgroundColor: GREEN_DARK }}>
              {c.validation.metrics}
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#365B2B]">0{activeScreen + 1}. {c.ui.imageLabel}</span>
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
