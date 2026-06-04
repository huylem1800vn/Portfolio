import { motion } from "motion/react";
import { ArrowUpRight, Sparkles, Compass, MessageCircle, Footprints, TrendingUp } from "lucide-react";
import { useI18n } from "../../i18n";
import { CaseNav } from "./CaseNav";
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
    nextProject: "Ăng Ăng · Food Discovery",
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
    badge: "Case Study · 2026 · AI Companion · Mobile",
    title: "Murror · Trải nghiệm đồng hành khi overthinking",
    concept: "UNFOLD",
    headline: "Giúp người dùng nhẹ nhàng gỡ rối suy nghĩ và biến nhiễu cảm xúc thành bước đi rõ ràng tiếp theo.",
    description:
      "Một case study về UX research và product design, khám phá cách một AI companion có thể ở bên người dùng qua những lần check in cảm xúc ít thao tác, những điểm tựa thị giác, các câu hỏi phản chiếu và những nhịp nhỏ cho hành trình phát triển bản thân mỗi ngày.",
    cta1: "Xem UX Flow",
    cta2: "Xem màn hình UI",

    overview: {
      tag: "( 01 · Tổng quan dự án )",
      cards: [
        { k: "Vấn đề", v: "Người hay overthinking thường thấy đầu óc quá tải, khó gọi tên cảm xúc của mình và không biết nên bắt đầu từ đâu." },
        { k: "Mục tiêu", v: "Thiết kế một trải nghiệm ít áp lực để người dùng có thể nhận diện cảm xúc, dịu lại, soi chiếu chính mình và chọn một hành động nhỏ tiếp theo." },
        { k: "Người dùng", v: "Người trẻ đang đi qua những bối rối cảm xúc nhẹ, áp lực học tập, lo âu trong mối quan hệ hoặc cảm giác hoang mang về chính mình." },
        { k: "Vai trò", v: "UX Research, Product Thinking, User Flow, Wireframing, UI Design, Interaction Design." },
      ],
    },

    problem: {
      tag: "( 02 · Vấn đề UX cốt lõi )",
      quote: "Nhiều ứng dụng wellness yêu cầu người dùng giải thích cảm xúc trước khi giúp họ bình tĩnh lại.",
      body: "Khi một người đang rối, việc phải gõ quá nhiều đôi khi trở thành thêm một gánh nặng. Trải nghiệm cần hạ bớt áp lực nhập liệu và nhẹ nhàng dẫn họ đi từng bước.",
    },

    research: {
      tag: "( 03 · Insight nghiên cứu )",
      insights: [
        { n: "01", k: "Khi đang rối, người dùng không muốn phải giải thích quá nhiều.", v: "Phản hồi thiết kế là quick reply, nút tâm trạng, chọn màu, chọn icon và cả tùy chọn giọng nói." },
        { n: "02", k: "Người dùng cần được dẫn dắt trước khi sẵn sàng nhận lời khuyên.", v: "Phản hồi thiết kế đi theo nhịp check in, grounding, reflection, AI mirror rồi mới tới hành động nhỏ." },
        { n: "03", k: "Giao diện phải mang lại cảm giác an toàn và không phán xét.", v: "Phản hồi thiết kế là màu sắc dịu, câu chữ ngắn, motion mềm và một giọng điệu nhẹ nhàng." },
        { n: "04", k: "Việc quay lại nên đến từ thói quen, không phải sức ép.", v: "Phản hồi thiết kế là check in hằng ngày, hành trình phát triển, mood pattern và một hệ thống streak rất nhẹ." },
      ],
    },

    journey: {
      tag: "( 04 · Hành trình người dùng )",
      stages: [
        { k: "Trigger", feel: "Quá tải, bối rối, đầu óc ồn ào.", need: "Một nơi an toàn để bắt đầu.", opp: "Mở đầu bằng một câu hỏi dịu nhẹ, không phải ô input trống." },
        { k: "Check-in", feel: "Ngại giải thích.", need: "Diễn đạt mà không cần gõ.", opp: "Nút tâm trạng, chọn màu, bảng icon." },
        { k: "Grounding", feel: "Suy nghĩ chạy đua.", need: "Chậm lại trước khi phản chiếu.", opp: "Nhịp thị giác dịu, prompt hít thở, copy bình tĩnh." },
        { k: "Reflection", feel: "Muốn được lắng nghe, không bị chẩn đoán.", need: "Một tấm gương, không phải lời phán xét.", opp: "Câu hỏi phản chiếu bằng chính lời người dùng." },
        { k: "AI Mirror", feel: "Tìm kiếm ý nghĩa.", need: "Diễn giải nhẹ nhàng.", opp: "AI gọi tên kiểu cảm xúc, không dán nhãn người dùng." },
        { k: "Small Action", feel: "Mệt vì phải chọn.", need: "Một bước tiếp theo, không phải mười.", opp: "Đề xuất một hành động nhỏ, có tùy chọn bỏ qua." },
        { k: "Growth Ritual", feel: "Hy vọng nhưng hoài nghi.", need: "Sự liên tục không áp lực.", opp: "Nghi thức nhỏ hàng ngày, không streak xấu hổ." },
      ],
    },

    flow: {
      tag: "( 05 · UX Flow )",
      steps: [
        "Người dùng cảm thấy quá tải",
        "Mở Murror",
        "Chọn tâm trạng qua quick input",
        "Nhận tương tác grounding",
        "Chọn nguồn gốc của overthinking",
        "AI phản chiếu kiểu cảm xúc",
        "Người dùng chọn một hành động nhỏ tiếp theo",
        "Insight được lưu vào hành trình phát triển cá nhân",
      ],
    },

    principles: {
      tag: "( 06 · Nguyên tắc thiết kế )",
      items: [
        { k: "Nhập liệu ít áp lực", v: "Mọi tương tác nên thực hiện được chỉ với một chạm." },
        { k: "Bình tĩnh trước khi nhận lời khuyên", v: "Điều hòa cảm xúc trước khi đề xuất hành động." },
        { k: "Phản chiếu, không chẩn đoán", v: "Phản chiếu điều người dùng đang cảm thấy, chứ không đóng khung họ bằng một nhãn gọi tên." },
        { k: "Cá nhân hóa nhẹ nhàng", v: "Thích nghi chậm rãi, xin phép, không giả định." },
        { k: "Giữ chân bằng thói quen tích cực", v: "Làm cho việc xuất hiện hàng ngày trở nên dịu nhẹ, không bắt buộc." },
      ],
    },

    features: {
      tag: "( 07 · Tính năng chính )",
      items: [
        { icon: "spark", k: "Check-in không cần gõ", v: "Người dùng có thể diễn đạt cảm xúc qua nút bấm, màu sắc, icon hoặc giọng nói, thay vì phải đối diện với một ô trống đầy áp lực." },
        { icon: "compass", k: "Visual Grounding", v: "Nhịp thị giác dịu và prompt ngắn giúp người dùng chậm lại." },
        { icon: "message", k: "AI Mirror Reflection", v: "AI phản chiếu cảm xúc người dùng có thể đang cảm thấy bằng giọng văn nhẹ nhàng." },
        { icon: "step", k: "Bước tiếp theo nhỏ", v: "Ứng dụng gợi ý một hành động nhỏ thay vì hàng loạt lựa chọn." },
        { icon: "growth", k: "Hành trình phát triển bản thân", v: "Theo dõi mood pattern, insight và sự trưởng thành cảm xúc theo cách riêng tư và đủ an toàn để người dùng muốn quay lại." },
      ],
    },

    ui: {
      tag: "( 08 · Hướng UI )",
      body: "UI cuối cùng cân bằng giữa cảm giác dịu và sự rõ ràng bằng nền kem sáng, bảng màu pastel theo cảm xúc, thẻ bo tròn, mascot thân thiện và những khối tương tác gọn để giảm áp lực phải gõ. Design system này vừa đủ ấm để nâng đỡ cảm xúc, vừa đủ có cấu trúc để hỗ trợ phản chiếu.",
      screensLabel: "( 09 · Màn hình cuối )",
      screens: [
        "Onboarding",
        "Daily Check-in",
        "Chọn tâm trạng",
        "Grounding Screen",
        "AI Reflection",
        "Đề xuất hành động nhỏ",
        "Hành trình phát triển",
        "Lịch sử insight",
      ],
    },

    reflection: {
      tag: "( 10 · Suy ngẫm )",
      body: "Dự án này nhắc tôi rằng emotional UX không nằm ở việc thêm thật nhiều tính năng. Điều quan trọng hơn là biết giảm bớt áp lực đúng lúc. Một trải nghiệm hữu ích cần đưa người dùng đi từ cảm giác rối bời đến sự rõ ràng bằng những tương tác dịu, những lựa chọn vừa đủ và một logic sản phẩm có chủ đích.",
    },

    feelLabel: "Cảm xúc",
    needLabel: "Nhu cầu",
    oppLabel: "Cơ hội",
    next: "Case study tiếp theo",
    nextProject: "Ăng Ăng · Food Discovery",
  },
};

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
    { title: "Màu sắc như cách gọi tên cảm xúc", body: "Những mảng pastel giúp người dùng chọn một cảm giác trước khi họ sẵn sàng giải thích nó." },
    { title: "Mascot thân thiện và những điểm vui nhỏ", body: "Nhân vật và các khoảnh khắc nhỏ mang tính động viên làm trải nghiệm mềm hơn mà không bị trẻ con hóa." },
    { title: "Bố cục bo tròn, ít ma sát", body: "Bo góc lớn, card gọn và khoảng thở rõ ràng khiến từng bước trở nên dễ tiếp cận hơn." },
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
      desc: "Phần onboarding được show theo từng màn hình thật trong Figma để giữ nguyên nhịp mascot và cách đi vào cảm xúc ban đầu.",
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
      title: "Profile",
      desc: "Đây là đúng 6 màn hình profile trong Figma, thể hiện cách icon nhân vật, màu nền và visual accent đổi theo cảm xúc của ngày hôm đó.",
      screens: [
        { title: "Mood xanh ngọc", body: "Tượng trưng cho một ngày bồn chồn và hơi quá tải. Sắc xanh ngọc thoáng nhưng bất an, còn mascot thể hiện sự nhiễu và khó yên.", src: profileMinhHuyAqua },
        { title: "Mood vàng", body: "Tượng trưng cho niềm vui và sự lạc quan. Màu vàng ấm cùng mascot tươi cười khiến profile trở nên mở, nhẹ và đầy năng lượng tích cực.", src: profileMinhHuyYellow },
        { title: "Mood cam", body: "Tượng trưng cho tức giận và nhiệt cảm xúc cao. Nền cam và hình khối bùng nổ của mascot làm cảm giác căng thẳng hiện lên rất rõ.", src: profileMinhHuyOrange },
        { title: "Mood xanh dương", body: "Tượng trưng cho nỗi buồn và cảm giác nặng lòng. Tông xanh lạnh cùng những hình mềm như nước khiến giao diện lắng và hướng nội hơn.", src: profileMinhHuyBlue },
        { title: "Mood tím", body: "Tượng trưng cho choáng ngợp và rối trí. Bảng tím cùng các accent rải rác gợi cảm giác đầu óc đông đúc và thiếu ổn định.", src: profileMinhHuyPurple },
        { title: "Mood xanh lá", body: "Tượng trưng cho khó chịu, kháng cự hoặc ghê sợ. Màn xanh lá đẩy mascot vào biểu cảm gượng gạo hơn, làm mood trở nên bất ổn và khép lại.", src: profileMinhHuyGreen },
      ],
    },
    {
      title: "Chat",
      desc: "Nhóm chat dùng các màn hình thật cho điểm vào hội thoại, check-in cảm xúc, chọn mode phản hồi và màn trò chuyện đang diễn ra.",
      screens: [
        { title: "Trang chat", body: "Điểm vào hội thoại mở ra bằng các hướng dẫn nhẹ nhàng và action rõ ràng, thay vì buộc người dùng đối diện ngay với một ô chat trống.", src: chatHome },
        { title: "Check-in cảm xúc", body: "Các lựa chọn cảm xúc được đặt lên trước để người dùng có thể biểu đạt mình trước khi phải diễn giải bằng chữ.", src: chatMoodCheckin },
        { title: "Chọn mode phản hồi", body: "Giao diện cho phép chọn cách được đồng hành, từ đó người dùng có cảm giác kiểm soát nhiều hơn với kiểu hỗ trợ mình muốn nhận.", src: chatAiModePicker },
        { title: "Hội thoại đang diễn ra", body: "Khi đã vào luồng trò chuyện, giọng điệu vẫn giữ tính đối thoại và phản chiếu, tránh cảm giác chẩn đoán hay máy móc.", src: chatActiveConversation },
      ],
    },
  ],
} as const;

export function Murror() {
  const { lang } = useI18n();
  const c = COPY[lang];
  const resumeHref = "https://drive.google.com/file/d/1XJvgg20SB51G5W7yzD5_PQ2MueP6lxBR/view?usp=sharing";
  const socialLinks = [
    { label: "Behance", href: "https://www.behance.net/minhhuyhunh2" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/huy-huynh-minh/" },
    { label: "Email", href: "mailto:huylem1800vn@gmail.com" },
    { label: "Resume", href: resumeHref },
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
        <section className="pt-32 md:pt-44 pb-20 md:pb-28">
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

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-8 text-xs tracking-[0.2em] uppercase opacity-70"
            >
              {c.title}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-3 tracking-[-0.05em] leading-[0.85]"
              style={{ fontFamily: "Fraunces, serif", fontWeight: 300, fontSize: "clamp(4.5rem, 18vw, 16rem)" }}
            >
              UN<span className="italic" style={{ color: VIOLET }}>F</span>OLD
            </motion.h1>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-7 tracking-[-0.02em] leading-[1.1]"
                style={{ fontFamily: "Fraunces, serif", fontWeight: 400, fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)" }}
              >
                {c.headline}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="md:col-span-4 md:col-start-9 leading-relaxed opacity-75"
                style={{ fontSize: "1rem" }}
              >
                {c.description}
              </motion.p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="#flow"
                className="group inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2 transition-all"
                style={{ background: `linear-gradient(135deg, ${VIOLET}, ${BLUE})`, color: INK }}
              >
                <span className="text-sm">{c.cta1}</span>
                <span className="w-8 h-8 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform" style={{ backgroundColor: INK, color: FG }}>
                  <ArrowUpRight size={16} />
                </span>
              </a>
              <a
                href="#ui"
                className="inline-flex items-center gap-2 text-sm rounded-full px-5 py-3 transition-colors hover:bg-white/5"
                style={{ border: `1px solid ${BORDER}` }}
              >
                {c.cta2}
              </a>
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

          <div className="mt-16 text-xs tracking-[0.2em] uppercase mb-8" style={{ color: VIOLET }}>
            {c.ui.screensLabel}
          </div>
          <div className="space-y-6">
            {UI_SHOWCASES[lang].map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-[28px] p-5 md:p-6 backdrop-blur-md"
                style={{ backgroundColor: GLASS, border: `1px solid ${BORDER}` }}
              >
                <div className="mb-5 md:mb-6">
                  <div className="text-lg mb-2" style={{ fontFamily: "Fraunces, serif" }}>{group.title}</div>
                  <div className="text-sm opacity-70 leading-relaxed max-w-[70ch]">{group.desc}</div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {group.screens.map((screen) => (
                    <div key={screen.title} className="rounded-2xl p-3" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                      <div className="overflow-hidden rounded-[22px]" style={{ border: `1px solid ${BORDER}` }}>
                        <img
                          src={screen.src}
                          alt={`Murror UI Design · ${group.title} · ${screen.title}`}
                          className="block w-full h-auto"
                        />
                      </div>
                      <div className="text-xs uppercase tracking-[0.16em] opacity-70 mt-3">{screen.title}</div>
                      <div className="text-sm opacity-70 leading-relaxed mt-2">{screen.body}</div>
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

          <a
            href="#case/angang"
            className="mt-20 group inline-flex items-center justify-between w-full p-6 md:p-10 rounded-3xl backdrop-blur-md"
            style={{ backgroundColor: GLASS, border: `1px solid ${BORDER}` }}
          >
            <div>
              <div className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: VIOLET }}>{c.next}</div>
              <div style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>{c.nextProject}</div>
            </div>
            <span className="w-14 h-14 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform" style={{ background: `linear-gradient(135deg, ${VIOLET}, ${BLUE})`, color: INK }}>
              <ArrowUpRight size={20} />
            </span>
          </a>
        </Section>

        {/* FOOTER */}
        <footer className="py-16 border-t" style={{ borderColor: BORDER }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
            <div className="text-xs tracking-[0.2em] uppercase opacity-50">
              © 2026 Huỳnh Minh Huy · Murror Case Study
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-100 opacity-70 transition-opacity inline-flex items-center gap-1"
                >
                  {link.label} <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>
        </footer>
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
