import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles, Compass, MessageCircle, Footprints, TrendingUp, Maximize2, X } from "lucide-react";
import { useI18n } from "../../i18n";
import { CaseNav } from "./CaseNav";
import { scrollToCaseSection } from "./scrollToCaseSection";
import { NextProjectFooter } from "./NextProjectFooter";
import onboardingJoy from "../../../imports/murror/ui/onboarding-joy.png";
import onboardingSadness from "../../../imports/murror/ui/onboarding-sadness.png";
import onboardingDisgust from "../../../imports/murror/ui/onboarding-disgust.png";
import onboardingAnger from "../../../imports/murror/ui/onboarding-anger.png";
import onboardingFear from "../../../imports/murror/ui/onboarding-fear.png";
import onboardingEnvy from "../../../imports/murror/ui/onboarding-envy.png";
import profileMinhHuyAqua from "../../../imports/murror/ui/profile-minh-huy-aqua.png";
import profileMinhHuyYellow from "../../../imports/murror/ui/profile-minh-huy-yellow.png";
import profileMinhHuyOrange from "../../../imports/murror/ui/profile-minh-huy-orange.png";
import profileMinhHuyBlue from "../../../imports/murror/ui/profile-minh-huy-blue.png";
import profileMinhHuyPurple from "../../../imports/murror/ui/profile-minh-huy-purple.png";
import profileMinhHuyGreen from "../../../imports/murror/ui/profile-minh-huy-green.png";
import chatHome from "../../../imports/murror/ui/chat-home.png";
import chatMoodCheckin from "../../../imports/murror/ui/chat-mood-checkin.png";
import chatAiModePicker from "../../../imports/murror/ui/chat-ai-mode-picker.png";
import chatActiveConversation from "../../../imports/murror/ui/chat-active-conversation.png";
import { CV_URL } from "../../config/links";

const VIOLET = "#a59cff";
const BLUE = "#6b8cff";
const INK = "#0b0d18";
const FG = "#f4f1ea";
const GLASS = "rgba(255,255,255,0.06)";
const BORDER = "rgba(255,255,255,0.12)";
const CREAM = "#f8f3ea";
const SUN = "#ffd45f";
const MINT = "#bfe7b2";
const BLUSH = "#ffc9d9";
const SKY = "#b9ddff";
const LAVENDER = "#d9d0ff";
const SLATE = "#1a2030";

const COPY = {
  en: {
    sections: [
      { id: "overview", label: "Overview" },
      { id: "problem", label: "Problem" },
      { id: "research", label: "Research" },
      { id: "journey", label: "Journey" },
      { id: "flow", label: "Flow" },
      { id: "principles", label: "Principles" },
      { id: "features", label: "Features" },
      { id: "ui", label: "UI" },
      { id: "reflection", label: "Reflection" },
    ],
    badge: "Case Study · 2026 · AI Companion · Mobile",
    title: "Murror · An experience for moments of overthinking",
    concept: "UNFOLD",
    headline: "Helping users gently untangle thoughts and turn emotional noise into clear next steps.",
    description:
      "A UX research and product design case study exploring how an AI companion might support users through low effort emotional check ins, visual grounding, reflective prompts, and gentle daily rituals for self growth.",
    cta1: "View UX Flow",
    cta2: "See Final Screens",

    overview: {
      tag: "( 01 · Project Overview )",
      cards: [
        { k: "Problem", v: "People who overthink often feel mentally crowded, find it hard to name what they feel, and do not know where to begin." },
        { k: "Goal", v: "Design a low pressure experience that helps users notice their emotions, settle down, reflect, and choose one small next step." },
        { k: "Target Users", v: "Young users living with mild emotional confusion, stress, relationship worries, study pressure, or uncertainty about themselves." },
        { k: "My Role", v: "UX Research, Product Thinking, User Flow, Wireframing, UI Design, Interaction Design." },
      ],
    },

    problem: {
      tag: "( 02 · Core UX Problem )",
      quote: "Most mental wellness apps ask users to explain their feelings before helping them calm down.",
      body: "When someone is overwhelmed, typing out long thoughts can feel like one more weight to carry. The experience needs to lower that effort and guide them gently, one step at a time.",
    },

    research: {
      tag: "( 03 · Research Insights )",
      insights: [
        { n: "01", k: "Users do not want to explain too much when they feel overwhelmed.", v: "Design response: quick replies, mood buttons, color based input, icon selection, and a voice option." },
        { n: "02", k: "Users need guidance before they are ready for advice.", v: "Design response: check in, grounding, reflection, AI mirror, then one small action." },
        { n: "03", k: "The interface has to feel safe and free from judgment.", v: "Design response: calm colors, short copy, soft motion, and a gentle tone of voice." },
        { n: "04", k: "Retention should grow from ritual, not pressure.", v: "Design response: daily check ins, a self growth journey, mood patterns, and a gentle streak system." },
      ],
    },

    journey: {
      tag: "( 04 · User Journey )",
      stages: [
        { k: "Trigger", feel: "Overwhelmed, confused, mentally noisy.", need: "A safe place to start.", opp: "Open with one gentle question, not a blank input box." },
        { k: "Check-in", feel: "Hesitant to explain.", need: "Express without typing.", opp: "Mood buttons, color picker, icon palette." },
        { k: "Grounding", feel: "Racing thoughts.", need: "Slow down before reflecting.", opp: "Soft visual rhythm, breath prompt, calm copy." },
        { k: "Reflection", feel: "Wants to be heard, not diagnosed.", need: "A mirror, not a verdict.", opp: "Reflective prompts in the user's own words." },
        { k: "AI Mirror", feel: "Searching for meaning.", need: "Gentle interpretation.", opp: "Soft AI reply naming the emotional pattern without labeling the user." },
        { k: "Small Action", feel: "Tired of choice.", need: "One next step, not ten.", opp: "Suggest one small, doable action with an opt-out." },
        { k: "Growth Ritual", feel: "Hopeful but skeptical.", need: "Continuity without pressure.", opp: "Quiet daily ritual, no streak shame." },
      ],
    },

    flow: {
      tag: "( 05 · UX Flow )",
      steps: [
        "User feels overwhelmed",
        "Opens Murror",
        "Chooses mood through quick input",
        "Receives grounding interaction",
        "Selects source of overthinking",
        "AI reflects the emotional pattern",
        "User chooses one small next action",
        "Insight is saved into personal growth journey",
      ],
    },

    principles: {
      tag: "( 06 · Design Principles )",
      items: [
        { k: "Low-effort input", v: "Every interaction should be possible with a single tap." },
        { k: "Calm before advice", v: "Regulate the nervous system before suggesting action." },
        { k: "Reflection, not diagnosis", v: "Reflect what the user feels, and never reduce them to a label." },
        { k: "Gentle personalization", v: "Adapt slowly, ask permission, never assume." },
        { k: "Ritual-based retention", v: "Make daily presence feel calming, not obligatory." },
      ],
    },

    features: {
      tag: "( 07 · Key Features )",
      items: [
        { icon: "spark", k: "Zero-Typing Check-in", v: "Express emotions through buttons, colors, icons, or voice, never through an empty text box that feels intimidating." },
        { icon: "compass", k: "Visual Grounding", v: "Soft visual rhythm and short calming prompts help users slow down." },
        { icon: "message", k: "AI Mirror Reflection", v: "AI reflects what the user may be feeling in a gentle, non-judgmental tone." },
        { icon: "step", k: "Small Next Step", v: "The app suggests one small action instead of overwhelming users with choices." },
        { icon: "growth", k: "Self-Growth Journey", v: "Track mood patterns, insights, and emotional growth over time in a way that still feels private and personal." },
      ],
    },

    ui: {
      tag: "( 08 · UI Direction )",
      body: "The final UI balances softness and clarity through a creamy base, pastel emotional colors, rounded cards, a friendly mascot, and compact interaction blocks that lower the pressure of typing. The design system supports both emotional warmth and structured reflection.",
      screensLabel: "( 09 · Final Screens )",
      screens: [
        "Onboarding",
        "Daily Check-in",
        "Mood Selection",
        "Grounding Screen",
        "AI Reflection",
        "Small Action Suggestion",
        "Self-Growth Journey",
        "Insight History",
      ],
    },

    reflection: {
      tag: "( 10 · Reflection )",
      body: "This project reminded me that emotional UX is not about giving people more features. It is about easing pressure at the moment they need softness the most. A helpful experience should lead people from confusion toward clarity through calm interactions, simple choices, and thoughtful product logic.",
    },

    feelLabel: "Feeling",
    needLabel: "Need",
    oppLabel: "Opportunity",
    next: "Next case study",
    nextProject: "Ăng Ăng · Food Discovery App",
  },

  vi: {
    sections: [
      { id: "overview", label: "Tổng quan" },
      { id: "problem", label: "Vấn đề" },
      { id: "research", label: "Nghiên cứu" },
      { id: "journey", label: "Hành trình" },
      { id: "flow", label: "Luồng" },
      { id: "principles", label: "Nguyên tắc" },
      { id: "features", label: "Tính năng" },
      { id: "ui", label: "UI" },
      { id: "reflection", label: "Suy ngẫm" },
    ],
    badge: "Case Study · 2026 · Ứng dụng đồng hành cảm xúc · Mobile",
    title: "Murror · Đồng hành cùng người hay suy nghĩ quá nhiều",
    concept: "UNFOLD",
    headline: "Giúp người dùng bình tĩnh lại, hiểu cảm xúc của mình và chọn một việc nhỏ để bắt đầu.",
    description:
      "Murror là case study về một ứng dụng AI hỗ trợ người dùng khi suy nghĩ quá nhiều. Trải nghiệm được xây dựng quanh những lần ghi nhận cảm xúc nhanh, bài tập giúp lấy lại bình tĩnh, câu hỏi gợi mở và các hành động nhỏ có thể thực hiện ngay.",
    cta1: "Xem UX Flow",
    cta2: "Xem màn hình UI",

    overview: {
      tag: "( 01 · Tổng quan dự án )",
      cards: [
        { k: "Vấn đề", v: "Người thường suy nghĩ quá nhiều dễ cảm thấy đầu óc quá tải, khó gọi tên cảm xúc và không biết nên bắt đầu giải quyết từ đâu." },
        { k: "Mục tiêu", v: "Thiết kế một trải nghiệm ít áp lực để người dùng có thể nhận diện cảm xúc, dịu lại, soi chiếu chính mình và chọn một hành động nhỏ tiếp theo." },
        { k: "Người dùng", v: "Người trẻ đang đi qua những bối rối cảm xúc nhẹ, áp lực học tập, lo âu trong mối quan hệ hoặc cảm giác hoang mang về chính mình." },
        { k: "Vai trò", v: "UX Research, Product Thinking, User Flow, Wireframing, UI Design, Interaction Design." },
      ],
    },

    problem: {
      tag: "( 02 · Vấn đề UX cốt lõi )",
      quote: "Khi đang rối, người dùng thường chưa sẵn sàng viết một đoạn dài để giải thích mình cảm thấy thế nào.",
      body: "Nếu ứng dụng mở đầu bằng một ô nhập trống hoặc quá nhiều câu hỏi, người dùng có thể bỏ cuộc trước khi nhận được hỗ trợ. Vì vậy, trải nghiệm cần giảm lượng thông tin phải nhập và hướng dẫn từng bước ngắn, dễ thực hiện.",
    },

    research: {
      tag: "( 03 · Insight nghiên cứu )",
      insights: [
        { n: "01", k: "Khi đang rối, người dùng không muốn phải giải thích quá nhiều.", v: "Em dùng câu trả lời nhanh, nút chọn cảm xúc, màu sắc, biểu tượng và giọng nói để giảm việc phải gõ." },
        { n: "02", k: "Người dùng cần bình tĩnh lại trước khi tiếp nhận gợi ý.", v: "Luồng trải nghiệm đi từ ghi nhận cảm xúc, ổn định nhịp thở, nhìn lại suy nghĩ rồi mới đề xuất một hành động nhỏ." },
        { n: "03", k: "Giao diện cần tạo cảm giác an toàn và không phán xét.", v: "Em dùng màu dịu, câu ngắn, chuyển động nhẹ và cách trò chuyện gần gũi." },
        { n: "04", k: "Người dùng nên quay lại vì thấy có ích, không phải vì sợ mất chuỗi ngày.", v: "Ứng dụng ghi lại cảm xúc và tiến trình theo ngày nhưng không gây áp lực bằng phần thưởng hay cảnh báo dồn dập." },
      ],
    },

    journey: {
      tag: "( 04 · Hành trình người dùng )",
      stages: [
        { k: "Xuất hiện cảm xúc", feel: "Quá tải, bối rối, đầu óc không ngừng suy nghĩ.", need: "Một nơi dễ bắt đầu.", opp: "Mở đầu bằng một câu hỏi ngắn thay vì một ô nhập trống." },
        { k: "Ghi nhận cảm xúc", feel: "Chưa muốn giải thích dài.", need: "Có thể diễn đạt mà không cần gõ nhiều.", opp: "Cho chọn cảm xúc bằng nút bấm, màu sắc và biểu tượng." },
        { k: "Lấy lại bình tĩnh", feel: "Các suy nghĩ vẫn diễn ra liên tục.", need: "Chậm lại trước khi nhìn sâu vào vấn đề.", opp: "Dùng nhịp chuyển động nhẹ và hướng dẫn hít thở ngắn." },
        { k: "Nhìn lại suy nghĩ", feel: "Muốn được lắng nghe nhưng không muốn bị phán xét.", need: "Một câu hỏi giúp tự nhìn lại.", opp: "Đặt câu hỏi dựa trên chính điều người dùng vừa chia sẻ." },
        { k: "AI phản hồi", feel: "Muốn hiểu điều gì đang xảy ra với mình.", need: "Một cách diễn giải nhẹ nhàng, dễ tiếp nhận.", opp: "AI mô tả cảm xúc có thể đang xuất hiện nhưng không gắn nhãn con người." },
        { k: "Hành động nhỏ", feel: "Mệt và không muốn chọn quá nhiều.", need: "Một việc cụ thể có thể làm ngay.", opp: "Đề xuất một hành động nhỏ và luôn cho phép bỏ qua." },
        { k: "Duy trì thói quen", feel: "Muốn tiến bộ nhưng không muốn bị ép.", need: "Theo dõi sự thay đổi theo cách nhẹ nhàng.", opp: "Ghi lại hành trình mỗi ngày mà không gây áp lực bằng chuỗi thành tích." },
      ],
    },

    flow: {
      tag: "( 05 · UX Flow )",
      steps: [
        "Người dùng cảm thấy quá tải",
        "Mở Murror",
        "Chọn nhanh cảm xúc hiện tại",
        "Thực hiện một bước lấy lại bình tĩnh",
        "Chọn điều đang khiến mình suy nghĩ nhiều",
        "Nhận phản hồi từ AI",
        "Người dùng chọn một hành động nhỏ tiếp theo",
        "Ghi lại điều vừa nhận ra vào hành trình cá nhân",
      ],
    },

    principles: {
      tag: "( 06 · Nguyên tắc thiết kế )",
      items: [
        { k: "Giảm áp lực nhập liệu", v: "Ưu tiên lựa chọn nhanh để người dùng không phải viết quá nhiều khi đang mệt." },
        { k: "Bình tĩnh trước khi nhận gợi ý", v: "Giúp người dùng chậm lại trước khi đưa ra bất kỳ hành động tiếp theo nào." },
        { k: "Gợi mở, không chẩn đoán", v: "Nhắc lại và đặt câu hỏi từ điều người dùng chia sẻ, không tự kết luận họ đang gặp vấn đề gì." },
        { k: "Cá nhân hóa có sự đồng ý", v: "Chỉ thay đổi trải nghiệm dựa trên thông tin người dùng chủ động cung cấp." },
        { k: "Tạo thói quen nhưng không gây áp lực", v: "Khuyến khích người dùng quay lại mà không khiến họ cảm thấy có lỗi khi bỏ lỡ một ngày." },
      ],
    },

    features: {
      tag: "( 07 · Tính năng chính )",
      items: [
        { icon: "spark", k: "Ghi nhận cảm xúc không cần gõ", v: "Người dùng có thể chọn nút bấm, màu sắc, biểu tượng hoặc dùng giọng nói thay vì phải bắt đầu từ một ô nhập trống." },
        { icon: "compass", k: "Bài tập lấy lại bình tĩnh", v: "Chuyển động nhẹ và hướng dẫn ngắn giúp người dùng chậm lại trước khi nhìn sâu vào suy nghĩ." },
        { icon: "message", k: "AI phản hồi cảm xúc", v: "AI diễn giải điều người dùng có thể đang cảm thấy bằng lời lẽ nhẹ nhàng và không phán xét." },
        { icon: "step", k: "Bước tiếp theo nhỏ", v: "Ứng dụng gợi ý một hành động nhỏ thay vì hàng loạt lựa chọn." },
        { icon: "growth", k: "Hành trình cảm xúc", v: "Lưu lại cảm xúc, những điều người dùng nhận ra và sự thay đổi theo thời gian trong một không gian riêng tư." },
      ],
    },

    ui: {
      tag: "( 08 · Hướng UI )",
      body: "Giao diện dùng nền kem sáng, màu pastel thay đổi theo cảm xúc, card bo tròn và nhân vật minh họa thân thiện. Các lựa chọn được trình bày gọn để người dùng không phải đọc hoặc nhập quá nhiều khi đang mệt, nhưng vẫn đủ rõ để họ biết mình đang ở bước nào.",
      screensLabel: "( 09 · Màn hình cuối )",
      screens: [
        "Giới thiệu",
        "Ghi nhận cảm xúc hằng ngày",
        "Chọn tâm trạng",
        "Lấy lại bình tĩnh",
        "AI phản hồi",
        "Đề xuất hành động nhỏ",
        "Hành trình phát triển",
        "Những điều đã ghi nhận",
      ],
    },

    reflection: {
      tag: "( 10 · Suy ngẫm )",
      body: "Qua dự án, em hiểu rằng thiết kế cho cảm xúc không có nghĩa là thêm thật nhiều tính năng hoặc lời động viên. Điều quan trọng là giảm bớt yêu cầu đúng lúc, cho người dùng đủ lựa chọn và hướng họ tới một bước nhỏ mà họ có thể thực hiện ngay.",
    },

    feelLabel: "Cảm xúc",
    needLabel: "Nhu cầu",
    oppLabel: "Cơ hội",
    next: "Case study tiếp theo",
    nextProject: "Ăng Ăng · Food Discovery App",
  },
};

function MurrorPhoneMockup({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`relative isolate rounded-[2rem] bg-gradient-to-br from-[#77777c] via-[#202124] to-[#444448] p-[2px] shadow-[0_32px_75px_rgba(25,32,60,0.38)] sm:rounded-[2.4rem] ${className}`}
    >
      <span className="absolute -left-[2.5px] top-[22%] h-[8%] w-[2.5px] rounded-l-full bg-[#343438]" aria-hidden="true" />
      <span className="absolute -left-[2.5px] top-[32%] h-[12%] w-[2.5px] rounded-l-full bg-[#343438]" aria-hidden="true" />
      <span className="absolute -right-[2.5px] top-[28%] h-[16%] w-[2.5px] rounded-r-full bg-[#343438]" aria-hidden="true" />

      <div className="relative rounded-[1.9rem] bg-[#080808] p-[5px] sm:p-[7px] ring-1 ring-white/10 sm:rounded-[2.3rem]">
        <div className="relative overflow-hidden rounded-[1.6rem] bg-white sm:rounded-[2rem]">
          <div className="absolute top-2 sm:top-3 left-1/2 z-30 h-2.5 sm:h-3.5 w-12 sm:w-16 -translate-x-1/2 rounded-full bg-[#000000] shadow-sm" />
          <img src={src} alt={alt} className="block h-auto w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

function FIcon({ name }: { name: string }) {
  const p = { size: 20, color: VIOLET };
  if (name === "spark") return <Sparkles {...p} />;
  if (name === "compass") return <Compass {...p} />;
  if (name === "message") return <MessageCircle {...p} />;
  if (name === "step") return <Footprints {...p} />;
  return <TrendingUp {...p} />;
}

const TOKEN_GROUPS = [
  {
    name: "Emotional Palette",
    chips: [
      { label: "Sun", hex: SUN },
      { label: "Sky", hex: SKY },
      { label: "Mint", hex: MINT },
      { label: "Blush", hex: BLUSH },
      { label: "Lavender", hex: LAVENDER },
      { label: "Cream", hex: CREAM },
    ],
  },
  {
    name: "Core Materials",
    chips: [
      { label: "Primary text", hex: FG },
      { label: "Night", hex: SLATE },
      { label: "Glass", hex: "#FFFFFF14" },
      { label: "Border", hex: "#FFFFFF1F" },
    ],
  },
];

const UI_PRINCIPLES = {
  en: [
    { title: "Color as emotional shorthand", body: "Pastel blocks help users choose a feeling before they are ready to explain it." },
    { title: "Friendly character cues", body: "The mascot and tiny delight moments soften the experience without turning it childish." },
    { title: "Rounded, low-friction layout", body: "Large corner radii, compact cards, and clear spacing keep each step approachable." },
  ],
  vi: [
    { title: "Dùng màu để hỗ trợ chọn cảm xúc", body: "Các mảng màu pastel giúp người dùng thể hiện cảm giác ban đầu ngay cả khi chưa biết diễn đạt bằng lời." },
    { title: "Nhân vật tạo cảm giác gần gũi", body: "Biểu cảm của nhân vật giúp giao diện bớt lạnh và tạo điểm động viên nhỏ mà không khiến sản phẩm trở nên trẻ con." },
    { title: "Mỗi màn hình chỉ tập trung vào một bước", body: "Card gọn, bo góc lớn và khoảng cách rõ ràng giúp người dùng biết mình cần làm gì tiếp theo." },
  ],
};

const UI_SHOWCASES = {
  en: [
    {
      title: "Onboarding",
      desc: "The onboarding sequence is shown screen by screen from the Figma file, keeping the mascot-led emotional entry intact.",
      screens: [
        { title: "Joy", body: "A bright and welcoming start that frames the product as playful, encouraging, and emotionally safe.", src: onboardingJoy },
        { title: "Sadness", body: "A softer, more tender tone that acknowledges heaviness without making the user feel judged.", src: onboardingSadness },
        { title: "Disgust", body: "The character becomes uneasy and tense, showing how even uncomfortable feelings are given space and recognition.", src: onboardingDisgust },
        { title: "Anger", body: "Sharp energy and stronger contrast help express heat, frustration, and emotional intensity more honestly.", src: onboardingAnger },
        { title: "Fear", body: "A hesitant and overstimulated visual tone reflects anxiety, caution, and the need for reassurance.", src: onboardingFear },
        { title: "Envy", body: "The green variant presents comparison, insecurity, and internal discomfort through a more unsettled expression.", src: onboardingEnvy },
      ],
    },
    {
      title: "Profile",
      desc: "These exact Figma screens show how the daily profile changes its mascot expression, background color, and visual accents based on that day's emotion.",
      screens: [
        { title: "Aqua state", body: "Represents a restless, overstimulated day. The aqua palette feels airy but uneasy, with the mascot showing agitation and emotional noise.", src: profileMinhHuyAqua },
        { title: "Yellow state", body: "Represents joy and optimism. Warm yellow tones and a smiling mascot make the profile feel light, open, and rewarding.", src: profileMinhHuyYellow },
        { title: "Orange state", body: "Represents anger and high emotional heat. The orange background and explosive character silhouette amplify tension and urgency.", src: profileMinhHuyOrange },
        { title: "Blue state", body: "Represents sadness and emotional heaviness. Cool blue tones and watery shapes make the interface feel quieter and more inward.", src: profileMinhHuyBlue },
        { title: "Purple state", body: "Represents overwhelm and confusion. The purple palette and scattered decorative accents suggest a mind that feels crowded and unsteady.", src: profileMinhHuyPurple },
        { title: "Green state", body: "Represents discomfort, resistance, or disgust. The green screen shifts the mascot into a strained expression, making the mood feel uneasy and withdrawn.", src: profileMinhHuyGreen },
      ],
    },
    {
      title: "Chat",
      desc: "The chat flow is shown through the real screens for entry, mood check-in, response mode selection, and the active reflection conversation.",
      screens: [
        { title: "Chat home", body: "The entry screen opens with low-pressure prompts and clear action paths instead of a demanding blank conversation.", src: chatHome },
        { title: "Mood check-in", body: "Emotion choices appear upfront so the user can express themselves before needing to explain anything in words.", src: chatMoodCheckin },
        { title: "Response mode", body: "The interface offers different ways to process a feeling, giving users more control over how they want support.", src: chatAiModePicker },
        { title: "Active conversation", body: "Once the user enters the flow, the tone stays conversational and reflective rather than diagnostic or overly robotic.", src: chatActiveConversation },
      ],
    },
  ],
  vi: [
    {
      title: "Onboarding",
      desc: "Chuỗi onboarding giới thiệu từng trạng thái cảm xúc bằng màu sắc và biểu cảm của nhân vật, giúp người dùng hiểu cách Murror sẽ đồng hành cùng mình.",
      screens: [
        { title: "Joy", body: "Mở đầu sáng và thân thiện, giúp sản phẩm xuất hiện như một nơi vui vẻ, an toàn và dễ bước vào.", src: onboardingJoy },
        { title: "Sadness", body: "Tông dịu và mềm hơn, thừa nhận cảm giác nặng lòng mà không khiến người dùng thấy mình bị phán xét.", src: onboardingSadness },
        { title: "Disgust", body: "Nhân vật trở nên khó chịu và căng hơn, cho thấy cả những cảm xúc không dễ chịu cũng được nhìn nhận rõ ràng.", src: onboardingDisgust },
        { title: "Anger", body: "Năng lượng sắc và tương phản mạnh giúp cảm giác tức giận, bức bối và quá tải được thể hiện trung thực hơn.", src: onboardingAnger },
        { title: "Fear", body: "Không khí do dự và kích thích quá mức phản chiếu nỗi lo âu, dè chừng và nhu cầu được trấn an.", src: onboardingFear },
        { title: "Envy", body: "Biến thể xanh lá gợi cảm giác so sánh, bất an và khó chịu nội tâm qua biểu cảm kém ổn định hơn.", src: onboardingEnvy },
      ],
    },
    {
      title: "Trang cá nhân",
      desc: "Sáu trạng thái cho thấy màu nền, biểu cảm nhân vật và chi tiết trang trí thay đổi theo cảm xúc người dùng ghi nhận trong ngày.",
      screens: [
        { title: "Trạng thái xanh ngọc", body: "Sắc xanh thoáng nhưng hơi lạnh, kết hợp với biểu cảm bồn chồn để thể hiện một ngày khó tập trung.", src: profileMinhHuyAqua },
        { title: "Trạng thái vàng", body: "Màu vàng ấm và biểu cảm tươi giúp trang cá nhân thể hiện niềm vui và sự lạc quan.", src: profileMinhHuyYellow },
        { title: "Trạng thái cam", body: "Nền cam cùng hình khối mạnh thể hiện cảm giác bức bối và mức năng lượng cảm xúc cao.", src: profileMinhHuyOrange },
        { title: "Trạng thái xanh dương", body: "Tông xanh lạnh và các hình mềm gợi cảm giác buồn, lắng xuống và muốn ở một mình.", src: profileMinhHuyBlue },
        { title: "Trạng thái tím", body: "Màu tím cùng các chi tiết rải rác thể hiện cảm giác choáng ngợp và suy nghĩ thiếu trật tự.", src: profileMinhHuyPurple },
        { title: "Trạng thái xanh lá", body: "Màu xanh lá và biểu cảm căng giúp thể hiện sự khó chịu hoặc muốn tránh xa một tình huống.", src: profileMinhHuyGreen },
      ],
    },
    {
      title: "Chat",
      desc: "Luồng trò chuyện đi từ ghi nhận cảm xúc, chọn cách nhận hỗ trợ đến cuộc hội thoại phản hồi đang diễn ra.",
      screens: [
        { title: "Trang trò chuyện", body: "Màn hình mở đầu bằng những gợi ý ngắn và hành động rõ ràng thay vì để người dùng đối diện ngay với một ô chat trống.", src: chatHome },
        { title: "Ghi nhận cảm xúc", body: "Các lựa chọn cảm xúc xuất hiện trước để người dùng có thể bắt đầu mà chưa cần giải thích bằng một đoạn văn.", src: chatMoodCheckin },
        { title: "Chọn cách phản hồi", body: "Người dùng có thể chọn kiểu hỗ trợ phù hợp với mình trước khi bắt đầu cuộc trò chuyện.", src: chatAiModePicker },
        { title: "Cuộc trò chuyện", body: "AI đặt câu hỏi và nhắc lại điều người dùng chia sẻ bằng giọng điệu gần gũi, tránh kết luận hoặc chẩn đoán.", src: chatActiveConversation },
      ],
    },
  ],
} as const;

export function Murror() {
  const { lang } = useI18n();
  const c = COPY[lang];
  const [activeScreenModal, setActiveScreenModal] = useState<{ src: string; title: string; body: string } | null>(null);
  const [uiTab, setUiTab] = useState<number | "all">("all");
  const socialLinks = [
    { label: "Behance", href: "https://www.behance.net/minhhuyhunh2" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/huy-huynh-minh/" },
    { label: "Email", href: "mailto:huylem1800vn@gmail.com" },
    { label: "Resume", href: CV_URL },
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: INK, color: FG }}>
      {/* Ambient gradient */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            `radial-gradient(900px 600px at 15% 10%, ${VIOLET}22, transparent 60%), radial-gradient(800px 500px at 85% 60%, ${BLUE}1f, transparent 65%), radial-gradient(700px 500px at 50% 110%, ${VIOLET}18, transparent 60%)`,
        }}
      />
      <div className="relative">
        <CaseNav
          sections={c.sections}
          accent={VIOLET}
          bg="rgba(11,13,24,0.6)"
          text={FG}
          border={BORDER}
        />

        {/* HERO */}
        <section className="overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase"
              style={{ color: VIOLET }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: VIOLET }} />
              {c.badge}
            </motion.div>

            <div className="mt-8 grid items-center gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(540px,1.12fr)] lg:gap-10">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className="text-xs tracking-[0.2em] uppercase opacity-70 font-medium"
                >
                  {c.title}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="mt-5 whitespace-nowrap leading-[0.82]"
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontWeight: 300,
                    fontSize: "clamp(4.25rem, 8vw, 8.75rem)",
                    letterSpacing: "0.035em",
                  }}
                >
                  UN<span className="italic" style={{ color: VIOLET }}>F</span>OLD
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-8 max-w-[22ch] tracking-[-0.02em] leading-[1.15]"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 400, fontSize: "clamp(1.5rem, 2.35vw, 2.25rem)" }}
                >
                  {c.headline}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-6 max-w-[56ch] leading-relaxed opacity-75"
                  style={{ fontSize: "1rem" }}
                >
                  {c.description}
                </motion.p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => scrollToCaseSection("flow")}
                    className="group inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2 transition-all"
                    style={{ background: `linear-gradient(135deg, ${VIOLET}, ${BLUE})`, color: INK }}
                  >
                    <span className="text-sm">{c.cta1}</span>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform" style={{ backgroundColor: INK, color: FG }}>
                      <ArrowUpRight size={16} />
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToCaseSection("ui")}
                    className="inline-flex items-center gap-2 text-sm rounded-full px-5 py-3 transition-colors hover:bg-white/5"
                    style={{ border: `1px solid ${BORDER}` }}
                  >
                    {c.cta2}
                  </button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="relative min-h-[390px] overflow-hidden rounded-[2rem] border sm:min-h-[470px] lg:min-h-[590px] lg:rounded-[2.75rem]"
                style={{
                  borderColor: "rgba(255,255,255,0.18)",
                  background:
                    "linear-gradient(145deg, rgba(244,248,255,0.98) 0%, rgba(203,222,255,0.98) 48%, rgba(122,163,244,0.98) 100%)",
                  boxShadow: "0 32px 90px rgba(68,94,176,0.22)",
                }}
              >
                <div
                  className="absolute -left-16 top-[-5%] h-56 w-56 rounded-full blur-3xl sm:h-72 sm:w-72"
                  style={{ backgroundColor: "rgba(165,156,255,0.48)" }}
                />
                <div
                  className="absolute -right-20 bottom-[-12%] h-64 w-64 rounded-full blur-3xl sm:h-80 sm:w-80"
                  style={{ backgroundColor: "rgba(255,212,95,0.32)" }}
                />

                <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/50 bg-white/60 px-3 py-2 text-[10px] font-medium tracking-[0.2em] text-[#293453] uppercase backdrop-blur-md sm:left-7 sm:top-7">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: VIOLET }} />
                  Feel · Reflect · Grow
                </div>

                <div className="absolute inset-x-0 bottom-0 top-14 sm:top-16">
                  <div className="absolute left-[3%] top-[25%] z-10 w-[34%] -rotate-[8deg]">
                    <MurrorPhoneMockup src={onboardingJoy} alt="Murror onboarding screen" />
                  </div>
                  <div className="absolute left-[32%] top-[5%] z-30 w-[38%] rotate-[1.5deg]">
                    <MurrorPhoneMockup src={profileMinhHuyBlue} alt="Murror emotional profile screen" />
                  </div>
                  <div className="absolute right-[2%] top-[23%] z-20 w-[34%] rotate-[8deg]">
                    <MurrorPhoneMockup src={chatHome} alt="Murror companion chat screen" />
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 z-40 rounded-full border border-white/50 bg-white/65 px-4 py-2 text-[10px] font-medium tracking-[0.18em] text-[#293453] uppercase backdrop-blur-md sm:bottom-7 sm:left-7">
                  Emotional companion · Mobile
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <Section id="overview" tag={c.overview.tag}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.overview.cards.map((p, i) => (
              <GlassCard key={i} delay={i * 0.05}>
                <div className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: VIOLET }}>{p.k}</div>
                <p className="leading-relaxed" style={{ fontSize: "1.0625rem" }}>{p.v}</p>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* PROBLEM */}
        <Section id="problem" tag={c.problem.tag}>
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="tracking-[-0.02em] leading-[1.1] max-w-[24ch]"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 400, fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
          >
            <span style={{ color: VIOLET }}>“</span>
            {c.problem.quote}
            <span style={{ color: VIOLET }}>”</span>
          </motion.blockquote>
          <p className="mt-10 max-w-[60ch] leading-relaxed opacity-80" style={{ fontSize: "1.125rem" }}>
            {c.problem.body}
          </p>
        </Section>

        {/* RESEARCH */}
        <Section id="research" tag={c.research.tag}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.research.insights.map((it, i) => (
              <GlassCard key={i} delay={i * 0.06}>
                <div className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: VIOLET }}>Insight {it.n}</div>
                <h3 className="tracking-[-0.01em] mb-4" style={{ fontFamily: "Fraunces, serif", fontWeight: 400, fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}>
                  {it.k}
                </h3>
                <p className="leading-relaxed opacity-75" style={{ fontSize: "0.95rem" }}>{it.v}</p>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* JOURNEY */}
        <Section id="journey" tag={c.journey.tag}>
          <div className="overflow-x-auto -mx-6 px-6 pb-4">
            <div className="flex gap-4 min-w-max">
              {c.journey.stages.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="w-[280px] p-6 rounded-2xl backdrop-blur-md flex flex-col gap-4"
                  style={{ backgroundColor: GLASS, border: `1px solid ${BORDER}` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs" style={{ background: `linear-gradient(135deg, ${VIOLET}, ${BLUE})`, color: INK }}>
                      {i + 1}
                    </div>
                    <span className="text-xs tracking-[0.2em] uppercase opacity-60">{i < c.journey.stages.length - 1 ? "→" : "■"}</span>
                  </div>
                  <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "1.5rem" }}>{s.k}</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-[10px] tracking-[0.2em] uppercase opacity-50 mb-1">{c.feelLabel}</div>
                      <div className="opacity-90">{s.feel}</div>
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.2em] uppercase opacity-50 mb-1">{c.needLabel}</div>
                      <div className="opacity-90">{s.need}</div>
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: VIOLET }}>{c.oppLabel}</div>
                      <div className="opacity-90">{s.opp}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* FLOW */}
        <Section id="flow" tag={c.flow.tag}>
          <ol className="space-y-3">
            {c.flow.steps.map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-center gap-6 p-5 rounded-2xl backdrop-blur-md group hover:translate-x-2 transition-transform"
                style={{ backgroundColor: GLASS, border: `1px solid ${BORDER}` }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm shrink-0" style={{ background: `linear-gradient(135deg, ${VIOLET}, ${BLUE})`, color: INK, fontFamily: "Fraunces, serif" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1" style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.125rem, 2vw, 1.5rem)" }}>
                  {step}
                </div>
                <ArrowUpRight size={20} className="opacity-30 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
              </motion.li>
            ))}
          </ol>
        </Section>

        {/* PRINCIPLES */}
        <Section id="principles" tag={c.principles.tag}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {c.principles.items.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="p-6 rounded-2xl backdrop-blur-md flex flex-col gap-4"
                style={{ backgroundColor: GLASS, border: `1px solid ${BORDER}` }}
              >
                <div className="text-xs opacity-50" style={{ fontFamily: "Fraunces, serif", fontSize: "2rem", color: VIOLET }}>0{i + 1}</div>
                <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "1.25rem" }}>{p.k}</h4>
                <p className="text-sm opacity-75 leading-relaxed">{p.v}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* FEATURES */}
        <Section id="features" tag={c.features.tag}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.features.items.map((f, i) => (
              <GlassCard key={i} delay={i * 0.06}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: `linear-gradient(135deg, ${VIOLET}33, ${BLUE}33)`, border: `1px solid ${BORDER}` }}>
                  <FIcon name={f.icon} />
                </div>
                <h3 className="tracking-[-0.01em] mb-3" style={{ fontFamily: "Fraunces, serif", fontWeight: 400, fontSize: "1.5rem" }}>
                  {f.k}
                </h3>
                <p className="leading-relaxed opacity-75" style={{ fontSize: "0.95rem" }}>{f.v}</p>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* UI */}
        <Section id="ui" tag={c.ui.tag}>
          <p className="max-w-[60ch] leading-relaxed opacity-85" style={{ fontSize: "1.125rem" }}>{c.ui.body}</p>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-5 p-6 md:p-7 rounded-3xl backdrop-blur-md" style={{ backgroundColor: GLASS, border: `1px solid ${BORDER}` }}>
              <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: VIOLET }}>
                {lang === "en" ? "Design Tokens" : "Design Tokens"}
              </div>
              <div className="space-y-5">
                {TOKEN_GROUPS.map((group) => (
                  <div key={group.name}>
                    <div className="text-sm mb-3 opacity-80" style={{ fontFamily: "Fraunces, serif" }}>{group.name}</div>
                    <div className="flex flex-wrap gap-2">
                      {group.chips.map((chip) => (
                        <div
                          key={chip.label}
                          className="rounded-2xl px-3 py-2 inline-flex items-center gap-2"
                          style={{ backgroundColor: "rgba(255,255,255,0.05)", border: `1px solid ${BORDER}` }}
                        >
                          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: chip.hex, border: "1px solid rgba(255,255,255,0.2)" }} />
                          <span className="text-xs opacity-80">{chip.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid md:grid-cols-3 gap-4">
              {UI_PRINCIPLES[lang].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="p-6 rounded-3xl backdrop-blur-md"
                  style={{ backgroundColor: GLASS, border: `1px solid ${BORDER}` }}
                >
                  <div className="text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: VIOLET }}>
                    0{i + 1}
                  </div>
                  <div className="mb-3" style={{ fontFamily: "Fraunces, serif", fontSize: "1.2rem" }}>
                    {item.title}
                  </div>
                  <p className="text-sm leading-relaxed opacity-75">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="sticky top-[80px] z-30 my-10 flex flex-wrap gap-2.5 rounded-2xl border border-white/15 bg-[#0f172e]/90 p-2 shadow-2xl backdrop-blur-md">
            <button
              type="button"
              onClick={() => setUiTab("all")}
              className={`rounded-xl px-5 py-2.5 text-xs font-semibold tracking-wide transition-all ${
                uiTab === "all"
                  ? "bg-[#a59cff] text-[#0b1329] shadow-md font-bold"
                  : "bg-transparent text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {lang === "en" ? "All Screen Groups (3)" : "Tất cả nhóm màn hình (3)"}
            </button>
            {UI_SHOWCASES[lang].map((group, i) => (
              <button
                key={group.title}
                type="button"
                onClick={() => setUiTab(i)}
                className={`rounded-xl px-5 py-2.5 text-xs font-semibold tracking-wide transition-all ${
                  uiTab === i
                    ? "bg-[#a59cff] text-[#0b1329] shadow-md font-bold"
                    : "bg-transparent text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {group.title}
              </button>
            ))}
          </div>

          <div className="space-y-10">
            {UI_SHOWCASES[lang]
              .filter((_, i) => uiTab === "all" || uiTab === i)
              .map((group, i) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-[28px] p-6 md:p-8 backdrop-blur-md"
                  style={{ backgroundColor: GLASS, border: `1px solid ${BORDER}` }}
                >
                  <div className="mb-6 md:mb-8">
                    <div className="text-xl md:text-2xl mb-2 tracking-tight" style={{ fontFamily: "Fraunces, serif", color: VIOLET }}>
                      {group.title}
                    </div>
                    <div className="text-sm opacity-75 leading-relaxed max-w-[70ch]">{group.desc}</div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {group.screens.map((screen) => (
                      <div
                        key={screen.title}
                        onClick={() => setActiveScreenModal({ src: screen.src, title: screen.title, body: screen.body })}
                        className="group cursor-pointer rounded-2xl p-4 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
                        style={{ backgroundColor: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}` }}
                      >
                        <div className="relative overflow-hidden rounded-[24px]">
                          <MurrorPhoneMockup src={screen.src} alt={`Murror UI Design · ${screen.title}`} />
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#a59cff]">
                            {screen.title}
                          </span>
                          <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity text-[#a59cff]" />
                        </div>
                        <div className="text-xs opacity-70 leading-relaxed mt-1.5 line-clamp-2">{screen.body}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
          </div>
        </Section>

        {/* REFLECTION */}
        <Section id="reflection" tag={c.reflection.tag}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-[24ch] tracking-[-0.02em] leading-[1.1]"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 400, fontSize: "clamp(1.75rem, 4.2vw, 3.5rem)" }}
          >
            {c.reflection.body}
          </motion.p>

        </Section>

        <NextProjectFooter currentSlug="murror" />

        {activeScreenModal !== null && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-md md:p-8"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setActiveScreenModal(null)}
              className="fixed right-6 top-6 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-2xl transition-transform hover:scale-110"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>
            <div className="relative max-h-[90vh] max-w-[440px] w-full overflow-hidden rounded-[2.5rem] bg-[#0d1527] p-5 text-white border border-white/20 shadow-2xl">
              <div className="text-center pb-3 border-b border-white/10">
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#a59cff]">
                  {activeScreenModal.title}
                </div>
                <div className="text-xs text-white/60 mt-1 max-w-[320px] mx-auto">
                  {activeScreenModal.body}
                </div>
              </div>
              <div className="mt-4 flex justify-center overflow-y-auto max-h-[calc(90vh-110px)] p-2">
                <div className="w-[340px] overflow-hidden rounded-[2rem] shadow-2xl shrink-0">
                  <img src={activeScreenModal.src} alt={activeScreenModal.title} className="block w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Section({ id, tag, children }: { id: string; tag: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-xs tracking-[0.2em] uppercase mb-10" style={{ color: VIOLET }}>
          {tag}
        </div>
        {children}
      </div>
    </section>
  );
}

function GlassCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="p-6 md:p-8 rounded-2xl backdrop-blur-md hover:-translate-y-1 transition-transform"
      style={{ backgroundColor: GLASS, border: `1px solid ${BORDER}` }}
    >
      {children}
    </motion.div>
  );
}
