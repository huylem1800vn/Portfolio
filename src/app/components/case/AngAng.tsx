import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Search,
  Users,
  Sparkles,
  Target,
  ClipboardList,
  BarChart3,
  MessagesSquare,
  Lightbulb,
  MapPin,
  Heart,
  Star,
  Clock,
  Wallet,
  Smile,
  UsersRound,
  Utensils,
  Check,
} from "lucide-react";
import { useI18n } from "../../i18n";
import { CaseNav } from "./CaseNav";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import Onboarding from "../../../imports/Onboarding/Onboarding";
import HomeScreen from "../../../imports/Home/Home";
import Reviewer from "../../../imports/Reviewer/Reviewer";
import BanDo from "../../../imports/BảnDồ/BảnDồ";
import CamXuc from "../../../imports/CảmXuc/CảmXuc";
import LocalProfile from "../../../imports/LocalProfile/LocalProfile";
import VerifiedProfile from "../../../imports/VertifiedProfile/VertifiedProfile";
import LogoMark from "../../../imports/Frame1-1/Frame1-13-12627";
import logoIconPaths from "../../../imports/Frame1-1/svg-s6l1fubn7v";
import wireframeHome from "../../../imports/image-5.png";
import wireframeNav from "../../../imports/image-2.png";
import wireframeDetail from "../../../imports/image-3.png";
import wireframeProfile from "../../../imports/image-4.png";
import wireframeExplore from "../../../imports/image-6.png";
import wireframeReviewer from "../../../imports/image-7.png";

// Ăng Ăng brand palette — sourced from /imports/Color/Color.tsx
const GREEN = "#9dd325";      // Primary 500
const GREEN_DARK = "#6e9917"; // Primary 600
const GREEN_LIGHT = "#def3a3";// Primary 200
const BG = "#f8fde8";         // Primary 50
const INK = "#262626";        // Neutral 950
const MUTED = "#737373";      // Neutral 500
const BORDER = "#e7e7e7";     // Neutral 100
const ORANGE = "#fe9a00";     // Warning 500
const YELLOW = "#ffd346";     // Warning 300
const RED = "#ef4444";        // Error 500

// Full design-system palettes
const PALETTES: { name: string; shades: { n: string; hex: string }[] }[] = [
  {
    name: "Neutral",
    shades: [
      { n: "50", hex: "#f6f6f6" }, { n: "100", hex: "#e7e7e7" }, { n: "200", hex: "#d1d1d1" },
      { n: "300", hex: "#b0b0b0" }, { n: "400", hex: "#888888" }, { n: "500", hex: "#737373" },
      { n: "600", hex: "#5d5d5d" }, { n: "700", hex: "#4f4f4f" }, { n: "800", hex: "#454545" },
      { n: "900", hex: "#3d3d3d" }, { n: "950", hex: "#262626" },
    ],
  },
  {
    name: "Primary",
    shades: [
      { n: "50", hex: "#f8fde8" }, { n: "100", hex: "#eff9ce" }, { n: "200", hex: "#def3a3" },
      { n: "300", hex: "#c7e96d" }, { n: "400", hex: "#addb40" }, { n: "500", hex: "#9dd325" },
      { n: "600", hex: "#6e9917" }, { n: "700", hex: "#547516" }, { n: "800", hex: "#445d17" },
      { n: "900", hex: "#3b4f18" }, { n: "950", hex: "#1d2b08" },
    ],
  },
  {
    name: "Success",
    shades: [
      { n: "50", hex: "#ecfdf5" }, { n: "100", hex: "#cdfee5" }, { n: "200", hex: "#a0fad1" },
      { n: "300", hex: "#63f2b8" }, { n: "400", hex: "#25e29c" }, { n: "500", hex: "#00bc7d" },
      { n: "600", hex: "#00a46d" }, { n: "700", hex: "#00835c" }, { n: "800", hex: "#00674a" },
      { n: "900", hex: "#00553e" }, { n: "950", hex: "#003024" },
    ],
  },
  {
    name: "Warning",
    shades: [
      { n: "50", hex: "#fffcea" }, { n: "100", hex: "#fff3c5" }, { n: "200", hex: "#ffe685" },
      { n: "300", hex: "#ffd346" }, { n: "400", hex: "#ffbe1b" }, { n: "500", hex: "#fe9a00" },
      { n: "600", hex: "#e27300" }, { n: "700", hex: "#bb4e02" }, { n: "800", hex: "#983c08" },
      { n: "900", hex: "#7c320b" }, { n: "950", hex: "#481700" },
    ],
  },
  {
    name: "Error",
    shades: [
      { n: "50", hex: "#fef2f2" }, { n: "100", hex: "#fee2e2" }, { n: "200", hex: "#fecaca" },
      { n: "300", hex: "#fca5a5" }, { n: "400", hex: "#f87171" }, { n: "500", hex: "#ef4444" },
      { n: "600", hex: "#dc2626" }, { n: "700", hex: "#b91c1c" }, { n: "800", hex: "#991b1b" },
      { n: "900", hex: "#7f1d1d" }, { n: "950", hex: "#450a0a" },
    ],
  },
  {
    name: "Info",
    shades: [
      { n: "50", hex: "#eff5ff" }, { n: "100", hex: "#dbe8fe" }, { n: "200", hex: "#bfd7fe" },
      { n: "300", hex: "#93bbfd" }, { n: "400", hex: "#609afa" }, { n: "500", hex: "#3b82f6" },
      { n: "600", hex: "#2570eb" }, { n: "700", hex: "#1d64d8" }, { n: "800", hex: "#1e55af" },
      { n: "900", hex: "#1e478a" }, { n: "950", hex: "#172e54" },
    ],
  },
  {
    name: "Secondary",
    shades: [
      { n: "50", hex: "#f3f3ff" }, { n: "100", hex: "#eae9fe" }, { n: "200", hex: "#d7d6fe" },
      { n: "300", hex: "#b9b5fd" }, { n: "400", hex: "#978bfa" }, { n: "500", hex: "#8873f7" },
      { n: "600", hex: "#623aed" }, { n: "700", hex: "#5328d9" }, { n: "800", hex: "#4521b6" },
      { n: "900", hex: "#3a1d95" }, { n: "950", hex: "#221065" },
    ],
  },
];

const HERO_IMG =
  "https://images.unsplash.com/photo-1670819917685-f1040e76b9b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1800";
const MOODBOARD = [
  "https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
];
const PERSONA_IMG =
  "https://images.unsplash.com/photo-1611403119860-57c4937ef987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900";

const COPY = {
  en: {
    sections: [
      { id: "overview", label: "Overview" },
      { id: "research", label: "Research" },
      { id: "insights", label: "Insights" },
      { id: "journey", label: "Journey" },
      { id: "brand", label: "Brand" },
      { id: "system", label: "System" },
      { id: "ui", label: "UI" },
    ],
    badge: "UX Research + Design System · 2025 · Mobile App Concept",
    title: "Ăng Ăng · Food decision research",
    concept: "DECIDE",
    headline:
      "Helping young users decide where to eat faster, with less confusion and more context.",
    description:
      "A UX research and design system case study about how young users in Ho Chi Minh City choose restaurants, and how a food discovery app can ease choice overload, reduce review noise, and fill in the real time context they often miss.",
    cta1: "View Research",
    cta2: "View Design System",
    meta: [
      { k: "Project Type", v: "UX Research · Mobile App Concept" },
      { k: "Target Users", v: "Young users in HCMC · 19–33" },
      { k: "Research Focus", v: "Restaurant decision-making" },
      {
        k: "My Role",
        v: "Research · Problem Framing · Journey · Insight · UI · Design System",
      },
    ],
    overview: {
      tag: "( 01 · Project Overview )",
      title: "What is Ăng Ăng?",
      body:
        "Ăng Ăng is a food discovery app concept designed to help young users find and choose places to eat that fit their mood, the occasion, their location, their budget, and the real time situation around them.",
      core:
        "Users do not need more restaurant options. They need better reasons to choose one.",
    },
    problem: {
      tag: "( 02 · Core Problem )",
      quote:
        "Users are not struggling to find restaurants. They are struggling to choose the right restaurant for the right moment.",
      body:
        "Most food platforms show plenty of restaurant options, yet users still feel unsure because they do not have information that feels trustworthy, contextual, and current enough to act on.",
    },
    process: {
      tag: "( 03 · Research Process )",
      title: "From desk research to meaningful design directions",
      steps: [
        { t: "Desk Research", d: "Understand current food discovery behavior." },
        { t: "Competitor Analysis", d: "Review food, delivery, map and review apps." },
        { t: "Survey / Interview", d: "Behaviors, frustrations, decision factors, needs." },
        { t: "Affinity Mapping", d: "Group repeated patterns into themes." },
        { t: "Persona", d: "Build a representative user profile." },
        { t: "User Journey", d: "Map the decision-making process." },
        { t: "Insight Synthesis", d: "Turn findings into core insights." },
        { t: "Design Opportunities", d: "Translate insights into product directions." },
      ],
    },
    competitors: {
      tag: "( 04 · Competitor Analysis )",
      title: "What existing platforms do well, and what still feels missing",
      cols: [
        "Discovery",
        "Review",
        "Photos",
        "Map",
        "Delivery",
        "Personalized",
        "Real-time",
        "Mood / Occasion",
        "Group decision",
      ],
      rows: [
        { name: "Foody", v: [1, 1, 1, 1, 1, 0, 0, 0, 0] },
        { name: "Google Maps", v: [1, 1, 1, 1, 0, 0, 1, 0, 0] },
        { name: "GrabFood", v: [1, 1, 1, 0, 1, 1, 0, 0, 0] },
        { name: "ShopeeFood", v: [1, 1, 1, 0, 1, 1, 0, 0, 0] },
        { name: "TikTok / FB Reviews", v: [1, 1, 1, 0, 0, 1, 0, 0, 0] },
        { name: "Riviu", v: [1, 1, 1, 1, 0, 0, 0, 0, 0] },
        { name: "Ăng Ăng (concept)", v: [1, 1, 1, 1, 0, 1, 1, 1, 1] },
      ],
      conclusion:
        "Existing platforms help users discover more places, but they still fall short when a decision depends on mood, occasion, live status, and the social context around the meal.",
    },
    users: {
      tag: "( 05 · Target Users )",
      title: "Who Ăng Ăng is designed for",
      primaryLabel: "Primary users",
      primary: "Young users in Ho Chi Minh City, around 19–33 years old.",
      useCasesLabel: "Use cases",
      useCases: [
        "Quick lunch",
        "Dinner after work",
        "Date",
        "Group gathering",
        "Weekend exploration",
        "Nearby food search",
        "Mood-based eating",
        "Budget-based decision",
      ],
      behaviorLabel: "User behavior",
      behavior:
        "Before deciding where to eat, users often move back and forth between Google Maps, social media, review apps, delivery apps, and their friends' recommendations.",
    },
    insights: {
      tag: "( 06 · Key Insights )",
      title: "Four insights that quietly reshaped the product",
      items: [
        {
          n: "01",
          t: "Choice Overload",
          d:
            "Users have too many restaurant options, but many look similar and do not clearly match their current situation.",
          impl: "The product should support filtering by mood, occasion, budget, distance, group size, and time.",
        },
        {
          n: "02",
          t: "Review Noise",
          d:
            "Users read reviews but are unsure whether they are real, updated, or relevant to their need.",
          impl:
            "Reviews should carry context tags such as date night, group meal, quick lunch, budget friendly, quiet, or good for photos.",
        },
        {
          n: "03",
          t: "Missing Real-Time Context",
          d:
            "Users need real-time signals: opening status, crowd level, waiting time, available seats, best time to visit.",
          impl: "The experience should surface real time status and practical cues that help people decide with less doubt.",
        },
        {
          n: "04",
          t: "Mood-Based Eating",
          d:
            "Users often choose food by mood and social context, not only cuisine category.",
          impl:
            "A mood based discovery flow could guide users through states like chill, date, quick meal, comfort food, group hangout, or exploring something new.",
        },
      ],
    },
    persona: {
      tag: "( 07 · Persona )",
      name: "Linh, 24",
      role: "Young office worker · Ho Chi Minh City",
      context:
        "Often looks for restaurants after work or on weekends. Eats out with colleagues, friends, and her partner.",
      goalsLabel: "Goals",
      goals: [
        "Find suitable restaurants quickly",
        "Avoid disappointing food experiences",
        "Choose places that match the occasion",
        "Save time when planning with friends",
      ],
      painsLabel: "Pain Points",
      pains: [
        "Too many options",
        "Reviews are not always trustworthy",
        "Hard to know if the place is crowded",
        "Hard to agree on a place with friends",
        "Photos and info may be outdated",
      ],
      needsLabel: "Needs",
      needs: [
        "Clear filters",
        "Trustworthy recommendations",
        "Real-time restaurant info",
        "Mood and occasion-based suggestions",
        "Easy comparison between options",
      ],
    },
    journey: {
      tag: "( 08 · User Journey )",
      title: "From the first craving to the feeling after the meal",
      stages: [
        { s: "Trigger", a: "User wants to eat out or plan a meal.", th: "“Where should we eat today?”", p: "No clear starting point.", o: "Mood / occasion-based entry point." },
        { s: "Search", a: "Checks social media, maps, review apps, asks friends.", th: "“There are too many places.”", p: "Choice overload.", o: "Smart filters based on context." },
        { s: "Compare", a: "Opens multiple restaurant options.", th: "“Which one is actually suitable?”", p: "Hard to compare similar info.", o: "Comparison cards: price, distance, crowd, vibe, fit." },
        { s: "Validate", a: "Checks reviews, photos, opening status.", th: "“Is this place still good?”", p: "Review noise, outdated info.", o: "Contextual + recent review highlights." },
        { s: "Decide", a: "Chooses a restaurant.", th: "“I hope this is the right choice.”", p: "Low confidence before going.", o: "Decision confidence + reason-based recs." },
        { s: "Experience", a: "Visits the restaurant.", th: "“Was this worth it?”", p: "Experience may not match expectation.", o: "Post-visit feedback + personalized future recs." },
      ],
    },
    hmw: {
      tag: "( 09 · How Might We )",
      title: "Turning insights into design questions worth answering",
      items: [
        "How might we reduce choice overload when users search for restaurants?",
        "How might we help users trust restaurant information more easily?",
        "How might we recommend restaurants based on mood, occasion, and real-time context?",
        "How might we help groups decide where to eat with less back-and-forth?",
        "How might we turn food discovery into confident decision-making?",
      ],
    },
    mapping: {
      tag: "( 10 · Research to Design )",
      title: "How the findings begin to take shape as features",
      cols: ["Research Finding", "Design Opportunity", "Possible Feature"],
      rows: [
        ["Too many choices", "Contextual filtering", "Mood, occasion, budget, distance, group size filters"],
        ["Review distrust", "Transparent review structure", "Context tags, recent reviews, verified visits"],
        ["Lack of real-time info", "Practical decision cues", "Open now, crowd level, wait time, seat availability"],
        ["Group decision friction", "Shared decision flow", "Shortlist, group voting, shareable lists"],
        ["Mood-based needs", "Emotional discovery path", "“What are you in the mood for?” onboarding"],
      ],
    },
    brand: {
      tag: "( 11 · Brand Identity )",
      title: "Ăng Ăng feels fresh, friendly, and easy to say yes to",
      logoCaption: "Primary Ăng Ăng logo with the Baloo Bhaijaan wordmark",
      keywordsLabel: "Brand keywords",
      keywords: ["Fresh", "Friendly", "Youthful", "Simple", "Local", "Trustworthy", "Easy to decide"],
      toneLabel: "Visual tone",
      tone:
        "The #9DD325 green was chosen as the primary color because it feels fresh, energetic, and friendly. Its bright tone creates a positive impression at first glance and fits the spirit of Ăng Ăng as a food experience that feels close, cheerful, and easy for young users to approach. In the context of UX research, people often expect a food platform not only to help them find something to eat quickly, but also to feel pleasant, trustworthy, and inviting enough to spark curiosity. That is why this green does more than define the brand. It also supports the emotional side of the experience by making the product feel lighter, calmer, and less commercially heavy. The color suggests freshness, naturalness, and positive energy, while still standing out enough for important interface moments such as primary buttons, selected states, highlighted labels, or any area that needs attention. When paired with a white background and rounded typography, it gives Ăng Ăng a look that feels youthful, clean, and easy to remember.",
      moodLabel: "Moodboard",
    },
    color: {
      tag: "( 12 · Color System )",
      title: "A full token based palette built around the Ăng Ăng green",
      desc:
        "Primary 500 (#9dd325) anchors the logo, main CTAs, active states, and highlights. Neutral supports text and surfaces, while Success, Warning, Error, Info, and Secondary help with feedback and category cues. Each palette comes with a full 50 to 950 scale so every component can rely on a proper token.",
      brandLabel: "Brand color",
      shadeLabel: "Shade",
      hexLabel: "HEX",
    },
    typo: {
      tag: "( 13 · Typography )",
      title: "SF Pro feels clean, modern, and native to mobile",
      body:
        "SF Pro supports the Ăng Ăng interface with a clean, familiar, and easy to read experience on mobile. It helps information feel clear and keeps food decisions light, quick, and approachable.",
      stack: "SF Pro Display, SF Pro Text, Inter, Arial, sans-serif",
      scale: [
        { n: "H1", v: "64 / 72 · Bold" },
        { n: "H2", v: "40 / 48 · Semibold" },
        { n: "H3", v: "28 / 36 · Semibold" },
        { n: "Body Large", v: "18 / 28 · Regular" },
        { n: "Body", v: "16 / 24 · Regular" },
        { n: "Caption", v: "14 / 20 · Regular" },
        { n: "Small Label", v: "12 / 16 · Medium" },
      ],
    },
    grid: {
      tag: "( 14 · Grid System )",
      title: "A two grid layout system grounded in an 8 point baseline",
      desc:
        "The Ăng Ăng app frame uses two stretch column grids, a 4 column grid for compact mobile screens and a 6 column grid for wider layouts. Both share a 12 px margin and 12 px gutter, while the whole vertical rhythm stays aligned to an 8 px baseline.",
      groups: [
        {
          n: "Mobile · 4 columns",
          cols: 4,
          rows: [
            "Count: 4",
            "Type: Stretch",
            "Width: Auto",
            "Margin: 12",
            "Gutter: 12",
          ],
        },
        {
          n: "Wide · 6 columns",
          cols: 6,
          rows: [
            "Count: 6",
            "Type: Stretch",
            "Width: Auto",
            "Margin: 12",
            "Gutter: 12",
          ],
        },
        {
          n: "Baseline rows",
          cols: 0,
          rows: [
            "Count: Auto",
            "Type: Top",
            "Height: 8",
            "Offset: 0",
            "Gutter: 0",
          ],
        },
      ],
      spacingLabel: "Spacing scale (multiples of 8)",
      spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96],
    },
    components: {
      tag: "( 15 · Component System )",
      title: "A UI kit built from reusable primitives, not one-off screen pieces",
      desc:
        "The Ăng Ăng component kit centers on reusable interaction primitives such as Button, Button Group, Input, Badge, and selection controls. Their sizes, styles, and states are defined up front so the interface can stay consistent as new flows are added.",
      families: [
        {
          name: "Button",
          variants: ["Filled", "Outline", "Clear"],
          sizes: ["Tiny", "Small", "Medium", "Large", "Giant"],
          states: ["Default", "Hover", "Focus", "Press", "Disabled"],
        },
        {
          name: "Button Group",
          variants: ["Single select", "Multi select", "Icon + text"],
          sizes: ["SM", "MD", "LG"],
          states: ["Default", "Selected", "Hover", "Disabled"],
        },
        {
          name: "Input",
          variants: ["Text field", "Search", "Dropdown", "Textarea"],
          sizes: ["SM", "MD", "LG"],
          states: ["Default", "Active", "Filled", "Error", "Disabled"],
        },
        {
          name: "Selection & Feedback",
          variants: ["Checkbox", "Radio", "Switch", "Progress", "Tooltip"],
          sizes: ["SM", "MD"],
          states: ["Off", "On", "Focus", "Disabled", "Status"],
        },
      ],
      labels: { variants: "Variants", sizes: "Sizes", states: "States" },
      totalLabel: "Total composable states",
    },
    icons: {
      tag: "( 16 · Icon & Illustration )",
      title: "A lightweight icon language with small supporting brand moments",
      body:
        "The visual support system stays compact and functional. Icons use a simple rounded style for fast scanning on mobile, while small illustration-like accents from the color system help highlight mood, trust, and food context without overpowering the interface.",
    },
    wireframe: {
      tag: "( 17 · Wireframes )",
      title: "First strokes, sketching the flow of choosing where to eat",
      body:
        "Before moving into polished UI, I sketched the core screens on paper to test hierarchy, navigation patterns, and the way each insight might become a flow people could actually use.",
      items: [
        { src: wireframeHome, t: "Home · Mood entry", d: "Greeting, search, mood chips, nearby section, banner block." },
        { src: wireframeNav, t: "Layout & bottom nav", d: "App frame, hero area, content block, 5-tab bottom navigation." },
        { src: wireframeDetail, t: "Restaurant detail", d: "Cover, headline, highlights, contextual reviews, social proof note." },
        { src: wireframeProfile, t: "Profile variants", d: "Local profile vs verified profile, with badge placement and trust signals." },
        { src: wireframeExplore, t: "Explore & compare", d: "Card-based comparison with mood, price and distance hints." },
        { src: wireframeReviewer, t: "Verified Reviewer", d: "Banner logo, perks list, and CTA for the trust onboarding screen." },
      ],
    },
    ui: {
      tag: "( 18 · Final UI Preview )",
      title: "Where research insights begin to feel like product screens",
      screens: [
        { t: "Home", d: "Mood-based entry + personalized feed" },
        { t: "Explore", d: "Smart filters · occasion · budget" },
        { t: "Mood Discovery", d: "“What are you in the mood for?”" },
        { t: "Restaurant Detail", d: "Real-time status + contextual reviews" },
        { t: "Map", d: "Crowd level + open now signals" },
        { t: "Reviews", d: "Tagged · verified · recent" },
        { t: "Saved", d: "Shortlists for groups and dates" },
        { t: "Decide", d: "Confidence score + reason-based pick" },
      ],
    },
    reflection: {
      tag: "( 19 · Reflection )",
      body:
        "This project helped me see that food discovery is not just about showing more options. A better experience should ease uncertainty, bring the right context into view, and help people choose with more confidence based on their mood, their moment, and the people they are with.",
      cta1: "Back to Portfolio",
      cta2: "Next Project · Murror",
    },
    labels: {
      coreMessage: "Core message",
      designImplication: "Design implication",
      action: "Action",
      thought: "Thought",
      pain: "Pain",
      opportunity: "Opportunity",
      userThought: "User thought",
      heroQuote: "Where should we eat today?",
      openNow: "Open now",
      platform: "Platform",
      style: "Style",
      sizeLineWeight: "Size / Line / Weight",
      preview: "Preview",
      primaryTypeface: "Primary Typeface",
      busy: "Moderately busy",
      searchPlaceholder: "Search restaurants, mood, occasion…",
    },
  },
  vi: {
    sections: [
      { id: "overview", label: "Tổng quan" },
      { id: "research", label: "Nghiên cứu" },
      { id: "insights", label: "Insight" },
      { id: "journey", label: "Hành trình" },
      { id: "brand", label: "Thương hiệu" },
      { id: "system", label: "Hệ thống" },
      { id: "ui", label: "Giao diện" },
    ],
    badge: "UX Research + Design System · 2025 · Concept Mobile App",
    title: "Ăng Ăng · Nghiên cứu UX về hành vi chọn quán ăn",
    concept: "DECIDE",
    headline:
      "Giúp người dùng trẻ chọn nơi ăn uống nhanh hơn, ít rối hơn và có nhiều ngữ cảnh đáng tin hơn.",
    description:
      "Một case study UX nghiên cứu cách người dùng trẻ ở TP.HCM chọn quán ăn, và cách một ứng dụng khám phá có thể làm dịu cảm giác choáng ngợp vì quá nhiều lựa chọn, bớt nhiễu từ review và lấp vào khoảng trống của thông tin thời gian thực.",
    cta1: "Xem nghiên cứu",
    cta2: "Xem hệ thống thiết kế",
    meta: [
      { k: "Loại dự án", v: "UX Research · Concept Mobile App" },
      { k: "Người dùng", v: "Người trẻ tại TP.HCM · 19–33" },
      { k: "Trọng tâm", v: "Hành vi ra quyết định chọn quán" },
      { k: "Vai trò", v: "Research · Framing · Journey · Insight · UI · Design System" },
    ],
    overview: {
      tag: "( 01 · Tổng quan dự án )",
      title: "Ăng Ăng là gì?",
      body:
        "Ăng Ăng là một concept ứng dụng khám phá địa điểm ăn uống, giúp người dùng trẻ tìm và chọn quán phù hợp với tâm trạng, dịp đi ăn, vị trí, ngân sách và cả bối cảnh đang diễn ra ngay lúc đó.",
      core:
        "Người dùng không cần thêm nhiều quán ăn hơn. Họ cần lý do rõ ràng hơn để chọn một quán.",
    },
    problem: {
      tag: "( 02 · Vấn đề cốt lõi )",
      quote: "Người dùng không khó tìm quán ăn. Họ khó chọn đúng quán cho đúng tình huống.",
      body:
        "Phần lớn các nền tảng ăn uống đều đưa ra rất nhiều lựa chọn, nhưng người dùng vẫn thấy phân vân vì thiếu những thông tin đủ đáng tin, đủ đúng ngữ cảnh và đủ mới để họ thật sự yên tâm quyết định.",
    },
    process: {
      tag: "( 03 · Quá trình nghiên cứu )",
      title: "Từ desk research đến những hướng thiết kế thật sự có ý nghĩa",
      steps: [
        { t: "Desk Research", d: "Hiểu hành vi khám phá ăn uống hiện tại." },
        { t: "Phân tích đối thủ", d: "Khảo sát app food, delivery, map, review." },
        { t: "Khảo sát / Phỏng vấn", d: "Hành vi, nỗi đau, yếu tố ra quyết định." },
        { t: "Affinity Mapping", d: "Nhóm pattern lặp lại thành chủ đề." },
        { t: "Persona", d: "Xây dựng chân dung người dùng đại diện." },
        { t: "User Journey", d: "Mapping quá trình ra quyết định." },
        { t: "Tổng hợp Insight", d: "Chuyển findings thành insight cốt lõi." },
        { t: "Cơ hội thiết kế", d: "Chuyển insight thành hướng sản phẩm." },
      ],
    },
    competitors: {
      tag: "( 04 · Phân tích đối thủ )",
      title: "Các nền tảng hiện tại làm được gì, và đâu là khoảng trống còn bỏ lại",
      cols: [
        "Khám phá",
        "Đánh giá",
        "Ảnh",
        "Bản đồ",
        "Giao hàng",
        "Cá nhân hoá",
        "Thời gian thực",
        "Tâm trạng / Dịp",
        "Quyết định nhóm",
      ],
      rows: [
        { name: "Foody", v: [1, 1, 1, 1, 1, 0, 0, 0, 0] },
        { name: "Google Maps", v: [1, 1, 1, 1, 0, 0, 1, 0, 0] },
        { name: "GrabFood", v: [1, 1, 1, 0, 1, 1, 0, 0, 0] },
        { name: "ShopeeFood", v: [1, 1, 1, 0, 1, 1, 0, 0, 0] },
        { name: "TikTok / FB Review", v: [1, 1, 1, 0, 0, 1, 0, 0, 0] },
        { name: "Riviu", v: [1, 1, 1, 1, 0, 0, 0, 0, 0] },
        { name: "Ăng Ăng (concept)", v: [1, 1, 1, 1, 0, 1, 1, 1, 1] },
      ],
      conclusion:
        "Các nền tảng hiện tại giúp người dùng biết đến nhiều quán hơn, nhưng vẫn chưa đồng hành tốt với việc ra quyết định khi tâm trạng, dịp đi ăn, trạng thái thời gian thực và bối cảnh xã hội đều cùng lúc tác động lên lựa chọn ấy.",
    },
    users: {
      tag: "( 05 · Người dùng mục tiêu )",
      title: "Ăng Ăng được thiết kế cho ai",
      primaryLabel: "Người dùng chính",
      primary: "Người trẻ tại TP.HCM, khoảng 19–33 tuổi.",
      useCasesLabel: "Tình huống sử dụng",
      useCases: [
        "Ăn trưa nhanh",
        "Ăn tối sau giờ làm",
        "Hẹn hò",
        "Tụ tập nhóm",
        "Khám phá cuối tuần",
        "Tìm quán gần đây",
        "Ăn theo tâm trạng",
        "Chọn theo ngân sách",
      ],
      behaviorLabel: "Hành vi người dùng",
      behavior:
        "Trước khi chọn quán, người dùng thường phải đi qua nhiều nơi cùng lúc, từ Google Maps, mạng xã hội, app review, app giao đồ ăn cho tới lời gợi ý từ bạn bè.",
    },
    insights: {
      tag: "( 06 · Insight chính )",
      title: "Bốn insight đã âm thầm định hình lại sản phẩm",
      items: [
        {
          n: "01",
          t: "Choáng ngợp lựa chọn",
          d:
            "Người dùng có quá nhiều lựa chọn quán, nhưng nhiều quán trông giống nhau và không rõ phù hợp với tình huống nào.",
          impl: "Trải nghiệm nên hỗ trợ lọc theo tâm trạng, dịp đi ăn, ngân sách, khoảng cách, số người và thời điểm.",
        },
        {
          n: "02",
          t: "Nhiễu Review",
          d:
            "Người dùng đọc review nhưng không chắc review có thật, có mới, có phù hợp nhu cầu.",
          impl:
            "Review nên được gắn theo ngữ cảnh như hẹn hò, đi nhóm, ăn nhanh, ngân sách thấp, yên tĩnh hay đẹp để chụp ảnh.",
        },
        {
          n: "03",
          t: "Thiếu ngữ cảnh thời gian thực",
          d:
            "Người dùng cần tín hiệu thời gian thực: đang mở, đông/vắng, thời gian chờ, ghế trống, giờ nên đến.",
          impl: "Sản phẩm nên đưa vào trạng thái thời gian thực và những tín hiệu đủ thực tế để người dùng dễ chốt hơn.",
        },
        {
          n: "04",
          t: "Ăn theo tâm trạng",
          d:
            "Người dùng thường chọn món theo tâm trạng và tình huống xã hội, không chỉ theo loại món.",
          impl:
            "Có thể mở ra một flow khám phá theo mood như chill, hẹn hò, ăn nhanh, đồ ăn chữa lành, đi nhóm hay thử điều mới.",
        },
      ],
    },
    persona: {
      tag: "( 07 · Persona )",
      name: "Linh, 24",
      role: "Nhân viên văn phòng trẻ · TP.HCM",
      context:
        "Thường tìm quán ăn sau giờ làm hoặc cuối tuần. Đi ăn cùng đồng nghiệp, bạn bè và người yêu.",
      goalsLabel: "Mục tiêu",
      goals: [
        "Tìm quán phù hợp nhanh chóng",
        "Tránh trải nghiệm ăn uống thất vọng",
        "Chọn nơi phù hợp với dịp",
        "Tiết kiệm thời gian khi rủ bạn bè",
      ],
      painsLabel: "Pain Points",
      pains: [
        "Quá nhiều lựa chọn",
        "Review không phải lúc nào cũng đáng tin",
        "Khó biết quán đông hay vắng",
        "Khó thống nhất với nhóm bạn",
        "Ảnh và thông tin có thể cũ",
      ],
      needsLabel: "Nhu cầu",
      needs: [
        "Bộ lọc rõ ràng",
        "Gợi ý đáng tin",
        "Thông tin thời gian thực",
        "Gợi ý theo mood và dịp",
        "So sánh dễ giữa các lựa chọn",
      ],
    },
    journey: {
      tag: "( 08 · User Journey )",
      title: "Từ cơn thèm ăn đầu tiên đến cảm giác sau khi đã chọn quán",
      stages: [
        { s: "Trigger", a: "Muốn đi ăn hoặc lên kế hoạch bữa ăn.", th: "“Hôm nay ăn gì đây?”", p: "Không có điểm bắt đầu rõ ràng.", o: "Entry point theo mood / dịp." },
        { s: "Tìm kiếm", a: "Xem MXH, map, app review, hỏi bạn bè.", th: "“Nhiều quán quá.”", p: "Choáng ngợp lựa chọn.", o: "Bộ lọc thông minh theo ngữ cảnh." },
        { s: "So sánh", a: "Mở nhiều quán cùng lúc.", th: "“Cái nào hợp hơn?”", p: "Thông tin giống nhau, khó so sánh.", o: "Thẻ so sánh: giá, khoảng cách, đông/vắng, vibe." },
        { s: "Xác thực", a: "Đọc review, xem ảnh, check giờ mở.", th: "“Quán này còn ổn không?”", p: "Review nhiễu, thông tin cũ.", o: "Review theo ngữ cảnh + bài gần đây." },
        { s: "Quyết định", a: "Chọn một quán.", th: "“Mong là chọn đúng.”", p: "Thiếu tự tin trước khi đi.", o: "Confidence score + gợi ý có lý do." },
        { s: "Trải nghiệm", a: "Đến quán.", th: "“Có đáng không?”", p: "Trải nghiệm có thể không khớp kỳ vọng.", o: "Phản hồi sau và gợi ý cá nhân hoá tiếp theo." },
      ],
    },
    hmw: {
      tag: "( 09 · How Might We )",
      title: "Đặt lại insight thành những câu hỏi thiết kế đáng để theo đuổi",
      items: [
        "Làm sao giảm choáng ngợp lựa chọn khi tìm quán?",
        "Làm sao giúp người dùng tin tưởng thông tin quán dễ dàng hơn?",
        "Làm sao gợi ý quán theo mood, dịp và ngữ cảnh thời gian thực?",
        "Làm sao giúp nhóm bạn quyết định nhanh hơn?",
        "Làm sao biến khám phá ăn uống thành quyết định tự tin?",
      ],
    },
    mapping: {
      tag: "( 10 · Research to Design )",
      title: "Cách những phát hiện nghiên cứu dần thành hình trong tính năng",
      cols: ["Research Finding", "Cơ hội thiết kế", "Tính năng khả thi"],
      rows: [
        ["Quá nhiều lựa chọn", "Lọc theo ngữ cảnh", "Lọc mood, dịp, ngân sách, khoảng cách, số người"],
        ["Mất niềm tin vào review", "Cấu trúc review minh bạch", "Context tag, review gần đây, xác minh ghé thăm"],
        ["Thiếu thông tin thời gian thực", "Tín hiệu quyết định thực tế", "Đang mở, đông/vắng, thời gian chờ, ghế trống"],
        ["Quyết định nhóm khó", "Flow quyết định chung", "Shortlist, vote nhóm, chia sẻ danh sách"],
        ["Nhu cầu theo mood", "Hành trình khám phá cảm xúc", "Onboarding “Bạn đang muốn ăn gì?”"],
      ],
    },
    brand: {
      tag: "( 11 · Bộ nhận diện )",
      title: "Ăng Ăng mang cảm giác tươi mới, thân thiện và dễ khiến người ta muốn chọn",
      logoCaption: "Logo chính của Ăng Ăng với wordmark dùng font Baloo Bhaijaan",
      keywordsLabel: "Brand keywords",
      keywords: ["Tươi mới", "Thân thiện", "Trẻ trung", "Đơn giản", "Gần gũi", "Đáng tin", "Dễ quyết định"],
      toneLabel: "Visual tone",
      tone:
        "Màu xanh #9DD325 được chọn làm màu chủ đạo vì mang lại cảm giác tươi mới, năng động và thân thiện. Đây là một sắc xanh có độ sáng cao, tạo cảm nhận tích cực ngay từ ánh nhìn đầu tiên và rất phù hợp với tinh thần của Ăng Ăng, một trải nghiệm ăn uống gần gũi, vui vẻ và dễ tiếp cận với người dùng trẻ. Trong bối cảnh UX research, người dùng thường mong một nền tảng liên quan đến ăn uống không chỉ giúp họ tìm món nhanh hơn mà còn tạo ra cảm giác dễ chịu, đáng tin và đủ gợi hứng để muốn khám phá thêm. Vì vậy, sắc xanh này không chỉ làm nhiệm vụ nhận diện thương hiệu mà còn góp phần nâng đỡ cảm xúc trong suốt quá trình sử dụng, khiến trải nghiệm trở nên nhẹ nhàng hơn, thoải mái hơn và bớt nặng tính thương mại. Màu #9DD325 gợi liên tưởng đến sự tươi ngon, tự nhiên và nguồn năng lượng tích cực, đồng thời vẫn đủ nổi bật để dùng cho các điểm nhấn quan trọng trong giao diện như nút chính, trạng thái được chọn, nhãn nổi bật hoặc những khu vực cần thu hút sự chú ý. Khi đi cùng nền trắng và typography bo tròn, tổng thể hình ảnh của Ăng Ăng trở nên trẻ trung, sạch sẽ và dễ ghi nhớ hơn.",
      moodLabel: "Moodboard",
    },
    color: {
      tag: "( 12 · Color System )",
      title: "Một hệ palette token đầy đủ, được xây quanh sắc xanh của Ăng Ăng",
      desc:
        "Primary 500 (#9dd325) là sắc xanh chủ đạo cho logo, CTA chính, trạng thái active và highlight. Neutral nâng đỡ phần chữ và bề mặt, còn Success, Warning, Error, Info và Secondary hỗ trợ cho phản hồi và phân loại. Mỗi nhóm đều có thang từ 50 đến 950 để mọi component đều có một token đúng nghĩa để bám vào.",
      brandLabel: "Màu thương hiệu",
      shadeLabel: "Sắc độ",
      hexLabel: "HEX",
    },
    typo: {
      tag: "( 13 · Typography )",
      title: "SF Pro gọn gàng, hiện đại và rất hợp với cảm giác mobile",
      body:
        "SF Pro giúp giao diện của Ăng Ăng trở nên sạch, quen thuộc và dễ đọc trên mobile. Nó giữ cho thông tin đủ rõ ràng để việc chọn món và chọn quán diễn ra nhanh, nhẹ và tự nhiên hơn.",
      stack: "SF Pro Display, SF Pro Text, Inter, Arial, sans-serif",
      scale: [
        { n: "H1", v: "64 / 72 · Bold" },
        { n: "H2", v: "40 / 48 · Semibold" },
        { n: "H3", v: "28 / 36 · Semibold" },
        { n: "Body Large", v: "18 / 28 · Regular" },
        { n: "Body", v: "16 / 24 · Regular" },
        { n: "Caption", v: "14 / 20 · Regular" },
        { n: "Small Label", v: "12 / 16 · Medium" },
      ],
    },
    grid: {
      tag: "( 14 · Grid System )",
      title: "Hệ lưới kép được giữ nhịp trên baseline 8 điểm",
      desc:
        "Khung app của Ăng Ăng dùng hai lưới stretch, một lưới 4 cột cho màn hình mobile và một lưới 6 cột cho những layout rộng hơn. Cả hai cùng dùng margin 12 và gutter 12, trong khi toàn bộ nhịp dọc đều bám theo baseline 8 px.",
      groups: [
        {
          n: "Mobile · 4 cột",
          cols: 4,
          rows: [
            "Count: 4",
            "Type: Stretch",
            "Width: Auto",
            "Margin: 12",
            "Gutter: 12",
          ],
        },
        {
          n: "Wide · 6 cột",
          cols: 6,
          rows: [
            "Count: 6",
            "Type: Stretch",
            "Width: Auto",
            "Margin: 12",
            "Gutter: 12",
          ],
        },
        {
          n: "Baseline hàng",
          cols: 0,
          rows: [
            "Count: Auto",
            "Type: Top",
            "Height: 8",
            "Offset: 0",
            "Gutter: 0",
          ],
        },
      ],
      spacingLabel: "Thang spacing (bội số của 8)",
      spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96],
    },
    components: {
      tag: "( 15 · Component System )",
      title: "Một UI kit được dựng từ các primitive có thể tái sử dụng, thay vì những mảnh màn hình rời rạc",
      desc:
        "Component kit của Ăng Ăng xoay quanh các primitive tương tác có thể tái sử dụng như Button, Button Group, Input, Badge và nhóm selection controls. Size, style và state của chúng được định nghĩa sẵn để giao diện giữ được sự nhất quán khi mở rộng thêm flow mới.",
      families: [
        {
          name: "Button",
          variants: ["Filled", "Outline", "Clear"],
          sizes: ["Tiny", "Small", "Medium", "Large", "Giant"],
          states: ["Default", "Hover", "Focus", "Press", "Disabled"],
        },
        {
          name: "Button Group",
          variants: ["Single select", "Multi select", "Icon + text"],
          sizes: ["SM", "MD", "LG"],
          states: ["Default", "Selected", "Hover", "Disabled"],
        },
        {
          name: "Input",
          variants: ["Text field", "Search", "Dropdown", "Textarea"],
          sizes: ["SM", "MD", "LG"],
          states: ["Default", "Active", "Filled", "Error", "Disabled"],
        },
        {
          name: "Selection & Feedback",
          variants: ["Checkbox", "Radio", "Switch", "Progress", "Tooltip"],
          sizes: ["SM", "MD"],
          states: ["Off", "On", "Focus", "Disabled", "Status"],
        },
      ],
      labels: { variants: "Variant", sizes: "Size", states: "State" },
      totalLabel: "Tổng số state có thể ráp",
    },
    icons: {
      tag: "( 16 · Icon & Minh hoạ )",
      title: "Một ngôn ngữ icon gọn nhẹ, đi cùng những điểm nhấn thương hiệu nhỏ",
      body:
        "Hệ visual support được giữ gọn và thực dụng. Icon dùng nét đơn giản, bo tròn để người dùng quét nhanh trên mobile, trong khi các điểm nhấn minh hoạ nhỏ từ hệ màu giúp làm rõ mood, cảm giác tin cậy và bối cảnh ăn uống mà không lấn át nội dung chính.",
    },
    wireframe: {
      tag: "( 17 · Wireframe )",
      title: "Những nét vẽ đầu tiên cho flow chọn quán ăn",
      body:
        "Trước khi đi tới phần UI hoàn chỉnh, tôi phác thảo các màn hình cốt lõi trên giấy để thử hệ thống bố cục, điều hướng và xem mỗi insight có thể đi vào một flow thật sự dùng được như thế nào.",
      items: [
        { src: wireframeHome, t: "Trang chủ · Mood entry", d: "Lời chào, thanh tìm kiếm, mood chips, quán gần đây và banner." },
        { src: wireframeNav, t: "Layout & bottom nav", d: "Khung app, vùng hero, khối nội dung, bottom nav 5 tab." },
        { src: wireframeDetail, t: "Chi tiết quán", d: "Ảnh bìa, headline, highlight, review theo ngữ cảnh, social proof." },
        { src: wireframeProfile, t: "Biến thể profile", d: "Local profile và verified profile, cùng vị trí huy hiệu và các tín hiệu tạo cảm giác tin cậy." },
        { src: wireframeExplore, t: "Explore & so sánh", d: "So sánh dạng thẻ với mood, giá và khoảng cách." },
        { src: wireframeReviewer, t: "Verified Reviewer", d: "Banner logo, danh sách quyền lợi và CTA cho màn onboarding tạo niềm tin." },
      ],
    },
    ui: {
      tag: "( 18 · Final UI Preview )",
      title: "Nơi những insight nghiên cứu bắt đầu chạm thành màn hình sản phẩm",
      screens: [
        { t: "Home", d: "Mood entry + feed cá nhân hoá" },
        { t: "Explore", d: "Lọc thông minh · dịp · ngân sách" },
        { t: "Mood Discovery", d: "“Bạn đang muốn ăn gì?”" },
        { t: "Restaurant Detail", d: "Trạng thái real-time + review ngữ cảnh" },
        { t: "Map", d: "Đông/vắng + đang mở" },
        { t: "Reviews", d: "Tag · xác minh · gần đây" },
        { t: "Saved", d: "Shortlist cho nhóm và hẹn hò" },
        { t: "Decide", d: "Confidence score + lý do chọn" },
      ],
    },
    reflection: {
      tag: "( 19 · Reflection )",
      body:
        "Dự án này giúp tôi nhận ra rằng khám phá địa điểm ăn uống không chỉ nằm ở việc đưa ra thêm nhiều lựa chọn. Một trải nghiệm tốt hơn cần làm dịu sự phân vân, đưa đúng ngữ cảnh ra trước mắt và giúp người dùng chọn quán với nhiều tự tin hơn, dựa trên tâm trạng, thời điểm và bối cảnh xã hội của riêng họ.",
      cta1: "Về Portfolio",
      cta2: "Dự án tiếp theo · Murror",
    },
    labels: {
      coreMessage: "Thông điệp cốt lõi",
      designImplication: "Hệ quả thiết kế",
      action: "Hành động",
      thought: "Suy nghĩ",
      pain: "Pain",
      opportunity: "Cơ hội",
      userThought: "Người dùng nghĩ",
      heroQuote: "Hôm nay ăn gì đây?",
      openNow: "Đang mở",
      platform: "Nền tảng",
      style: "Kiểu",
      sizeLineWeight: "Size / Line / Weight",
      preview: "Xem trước",
      primaryTypeface: "Primary Typeface",
      busy: "Đông vừa",
      searchPlaceholder: "Tìm quán, mood, dịp…",
    },
  },
} as const;

const PROCESS_ICONS = [Search, BarChart3, MessagesSquare, ClipboardList, Users, Target, Sparkles, Lightbulb];
const MOOD_ICONS = [Smile, Heart, UsersRound, Wallet, Clock, Utensils, MapPin, Star];

const REAL_SCREENS = [
  { Component: Onboarding, en: { t: "Onboarding", d: "First launch · brand intro" }, vi: { t: "Onboarding", d: "Mở lần đầu · giới thiệu thương hiệu" } },
  { Component: HomeScreen, en: { t: "Home", d: "Personalized feed + quick filters" }, vi: { t: "Trang chủ", d: "Feed cá nhân hoá + filter nhanh" } },
  { Component: BanDo, en: { t: "Map", d: "Real-time map · open now signals" }, vi: { t: "Bản đồ", d: "Map real-time · đang mở" } },
  { Component: CamXuc, en: { t: "Mood Discovery", d: "“What are you in the mood for?”" }, vi: { t: "Cảm xúc", d: "“Bạn đang muốn ăn gì?”" } },
  { Component: Reviewer, en: { t: "Verified Reviewer", d: "Trust system & perks" }, vi: { t: "Verified Reviewer", d: "Hệ thống uy tín & đặc quyền" } },
  { Component: LocalProfile, en: { t: "Local Profile", d: "Public reviewer profile" }, vi: { t: "Local Profile", d: "Hồ sơ reviewer công khai" } },
  { Component: VerifiedProfile, en: { t: "Verified Profile", d: "Verified reviewer detail" }, vi: { t: "Verified Profile", d: "Chi tiết reviewer đã xác thực" } },
];

function RealPhone({ Component, title, desc }: { Component: React.ComponentType; title: string; desc: string }) {
  const W = 240;
  const H = Math.round((W * 812) / 375);
  return (
    <div>
      <div
        className="rounded-[28px] p-2 mx-auto"
        style={{
          backgroundColor: INK,
          width: W + 16,
          boxShadow: "0 30px 60px -30px rgba(31,42,31,0.45)",
        }}
      >
        <div
          className="rounded-[20px] overflow-hidden relative"
          style={{ width: W, height: H, backgroundColor: "#fff" }}
        >
          <div
            style={{
              width: 375,
              height: 812,
              transform: `scale(${W / 375})`,
              transformOrigin: "top left",
            }}
          >
            <Component />
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <div style={{ fontFamily: "Fraunces, serif", fontSize: "1.1rem", color: INK }}>{title}</div>
        <div className="mt-0.5 text-xs" style={{ color: MUTED }}>
          {desc}
        </div>
      </div>
    </div>
  );
}

function Tag({ children, color = GREEN_DARK }: { children: React.ReactNode; color?: string }) {
  return (
    <div className="text-xs tracking-[0.22em] uppercase mb-5" style={{ color, fontWeight: 500 }}>
      {children}
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="tracking-[-0.02em] leading-[1.05]"
      style={{ fontFamily: "Fraunces, serif", fontWeight: 400, fontSize: "clamp(2rem, 4.4vw, 3.75rem)" }}
    >
      {children}
    </h2>
  );
}

function Section({
  id,
  children,
  bg = BG,
  text = INK,
}: {
  id?: string;
  children: React.ReactNode;
  bg?: string;
  text?: string;
}) {
  return (
    <section id={id} style={{ backgroundColor: bg, color: text }} className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">{children}</div>
    </section>
  );
}

function Field({ label, v, italic, color }: { label: string; v: string; italic?: boolean; color?: string }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.22em] uppercase mb-1" style={{ color: color || MUTED }}>
        {label}
      </div>
      <div style={{ fontSize: "0.85rem", lineHeight: 1.45, fontStyle: italic ? "italic" : "normal" }}>{v}</div>
    </div>
  );
}

function Logo({ size = 1 }: { size?: number }) {
  return (
    <div className="inline-flex items-center gap-3" style={{ transform: `scale(${size})`, transformOrigin: "left center" }}>
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: GREEN }}>
        <svg viewBox="0 0 33.6973 41.2816" width="24" height="29" fill="none" preserveAspectRatio="xMidYMid meet">
          <path d={logoIconPaths.p441a940} fill="#fff" />
        </svg>
      </div>
      <div
        style={{
          fontFamily: "'Baloo Bhaijaan', sans-serif",
          fontWeight: 400,
          fontSize: "2rem",
          lineHeight: 1,
          color: INK,
        }}
      >
        Ăng Ăng
      </div>
    </div>
  );
}

function PhoneScreen({ title, desc, kind }: { title: string; desc: string; kind: number }) {
  return (
    <div className="rounded-[28px] p-3 shadow-[0_30px_60px_-30px_rgba(31,42,31,0.3)]" style={{ backgroundColor: INK }}>
      <div className="rounded-[20px] overflow-hidden relative" style={{ backgroundColor: "#fff", aspectRatio: "9 / 19" }}>
        <div className="h-9 flex items-center justify-between px-4 text-[10px]" style={{ color: INK }}>
          <span>9:41</span>
          <span>Ăng Ăng</span>
          <span>●●●</span>
        </div>
        <div className="h-1.5 mx-3 rounded-full" style={{ backgroundColor: GREEN_LIGHT }} />
        <div className="p-3 space-y-2">
          {kind % 4 === 0 && (
            <>
              <div className="h-20 rounded-xl" style={{ backgroundColor: GREEN_LIGHT }} />
              <div className="flex gap-1.5">
                {[GREEN, ORANGE, YELLOW, RED].map((c, i) => (
                  <div key={i} className="h-5 flex-1 rounded-full" style={{ backgroundColor: c }} />
                ))}
              </div>
              <div className="h-2 w-2/3 rounded-full" style={{ backgroundColor: BORDER }} />
              <div className="h-12 rounded-xl" style={{ backgroundColor: BG, border: `1px solid ${BORDER}` }} />
            </>
          )}
          {kind % 4 === 1 && (
            <>
              <div className="h-7 rounded-full" style={{ backgroundColor: BG }} />
              <div className="grid grid-cols-2 gap-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: GREEN_LIGHT }} />
                <div className="h-16 rounded-lg" style={{ backgroundColor: "#FFE5C2" }} />
                <div className="h-16 rounded-lg" style={{ backgroundColor: "#FCEBD0" }} />
                <div className="h-16 rounded-lg" style={{ backgroundColor: GREEN_LIGHT }} />
              </div>
            </>
          )}
          {kind % 4 === 2 && (
            <>
              <div className="h-24 rounded-xl" style={{ backgroundColor: BG, border: `1px solid ${BORDER}` }} />
              <div className="h-3 w-2/3 rounded-full" style={{ backgroundColor: GREEN }} />
              <div className="h-2 w-1/2 rounded-full" style={{ backgroundColor: BORDER }} />
              <div className="h-2 w-3/4 rounded-full" style={{ backgroundColor: BORDER }} />
              <div className="h-10 rounded-xl" style={{ backgroundColor: GREEN_LIGHT }} />
            </>
          )}
          {kind % 4 === 3 && (
            <>
              <div className="h-12 rounded-xl flex items-center justify-center text-[10px]" style={{ backgroundColor: GREEN, color: "#fff" }}>
                {title}
              </div>
              <div className="h-2 w-2/3 rounded-full" style={{ backgroundColor: BORDER }} />
              <div className="h-2 w-1/2 rounded-full" style={{ backgroundColor: BORDER }} />
              <div className="h-8 rounded-full" style={{ backgroundColor: GREEN_LIGHT }} />
              <div className="h-8 rounded-full" style={{ backgroundColor: BG, border: `1px solid ${BORDER}` }} />
            </>
          )}
        </div>
        <div className="absolute bottom-0 inset-x-0 h-9 border-t flex items-center justify-around" style={{ borderColor: BORDER }}>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="w-5 h-5 rounded-md" style={{ backgroundColor: i === kind % 4 ? GREEN : BG }} />
          ))}
        </div>
      </div>
      <div className="px-2 pt-3 pb-1 text-center">
        <div className="text-[11px]" style={{ color: "#fff", fontWeight: 600 }}>
          {title}
        </div>
        <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.6)" }}>
          {desc}
        </div>
      </div>
    </div>
  );
}

export function AngAng() {
  const { lang } = useI18n();
  const t = COPY[lang];
  const L = t.labels;
  const [activeWireframe, setActiveWireframe] = useState<null | { src: string; title: string }>(null);

  return (
    <div style={{ backgroundColor: BG, color: INK }} className="min-h-screen">
      <CaseNav
        sections={t.sections as unknown as { id: string; label: string }[]}
        accent={GREEN_DARK}
        bg="rgba(245,250,237,0.85)"
        text={INK}
        border={BORDER}
      />

      {/* HERO */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Logo />
              <div className="mt-8 text-xs tracking-[0.22em] uppercase" style={{ color: GREEN_DARK, fontWeight: 500 }}>
                {t.badge}
              </div>
              <h1
                className="mt-5 tracking-[-0.03em] leading-[0.92]"
                style={{ fontFamily: "Fraunces, serif", fontWeight: 400, fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
              >
                {t.concept.split("").map((c, i) => (
                  <span key={i} style={{ color: i === 2 ? GREEN_DARK : INK, fontStyle: i === 2 ? "italic" : "normal" }}>
                    {c}
                  </span>
                ))}
              </h1>
              <p className="mt-7 max-w-[60ch]" style={{ fontSize: "1.25rem", lineHeight: 1.5, color: INK }}>
                {t.headline}
              </p>
              <p className="mt-5 max-w-[58ch]" style={{ color: MUTED, lineHeight: 1.6 }}>
                {t.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#research"
                  className="group inline-flex items-center gap-4 rounded-full pl-7 pr-2 py-2.5 text-sm transition-all duration-300"
                  style={{ backgroundColor: GREEN, color: "#fff" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = GREEN_DARK;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = GREEN;
                  }}
                >
                  <span>{t.cta1}</span>
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45"
                    style={{ backgroundColor: "#fff", color: GREEN_DARK }}
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </a>
                <a
                  href="#system"
                  className="group inline-flex items-center gap-4 rounded-full pl-7 pr-2 py-2.5 text-sm border transition-all duration-300"
                  style={{ borderColor: GREEN_DARK, color: GREEN_DARK }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = GREEN;
                    e.currentTarget.style.borderColor = GREEN;
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = GREEN_DARK;
                    e.currentTarget.style.color = GREEN_DARK;
                  }}
                >
                  <span>{t.cta2}</span>
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45"
                    style={{ backgroundColor: "#fff", color: GREEN_DARK }}
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[28px] overflow-hidden" style={{ backgroundColor: GREEN_LIGHT, aspectRatio: "4 / 5" }}>
                <ImageWithFallback
                  src={HERO_IMG}
                  alt="Warm interior of a cozy local eatery in Ho Chi Minh City"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute -bottom-6 -left-6 px-5 py-4 rounded-2xl rotate-[-4deg]"
                  style={{ backgroundColor: YELLOW, color: INK, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.25)" }}
                >
                  <div className="text-xs tracking-[0.18em] uppercase opacity-70">{L.userThought}</div>
                  <div style={{ fontFamily: "Fraunces, serif", fontSize: "1.1rem" }}>{L.heroQuote}</div>
                </div>
                <div
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs"
                  style={{ backgroundColor: "#fff", color: GREEN_DARK, border: `1px solid ${BORDER}` }}
                >
                  ● {L.openNow}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {t.meta.map((m) => (
                  <div key={m.k} className="rounded-2xl p-4" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}>
                    <div className="text-[10px] tracking-[0.2em] uppercase" style={{ color: GREEN_DARK }}>
                      {m.k}
                    </div>
                    <div className="mt-1.5" style={{ fontSize: "0.92rem", lineHeight: 1.4 }}>
                      {m.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <Section id="overview" bg="#fff">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Tag>{t.overview.tag}</Tag>
            <H2>{t.overview.title}</H2>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <p style={{ fontSize: "1.15rem", lineHeight: 1.6 }}>{t.overview.body}</p>
            <div className="rounded-3xl p-8 md:p-10" style={{ backgroundColor: GREEN_LIGHT }}>
              <div className="text-xs tracking-[0.22em] uppercase mb-3" style={{ color: GREEN_DARK }}>
                {L.coreMessage}
              </div>
              <p
                style={{
                  fontFamily: "Fraunces, serif",
                  fontWeight: 400,
                  fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)",
                  lineHeight: 1.2,
                }}
              >
                {t.overview.core}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* PROBLEM */}
      <Section bg={BG}>
        <Tag>{t.problem.tag}</Tag>
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <h2
              style={{
                fontFamily: "Fraunces, serif",
                fontWeight: 400,
                fontSize: "clamp(2rem, 4.6vw, 4rem)",
                lineHeight: 1.05,
              }}
            >
              <span style={{ color: INK }}>“</span>
              <span style={{ color: GREEN_DARK, fontStyle: "italic" }}>{t.problem.quote}</span>
              <span style={{ color: INK }}>”</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p style={{ color: MUTED, lineHeight: 1.65 }}>{t.problem.body}</p>
          </div>
        </div>
      </Section>

      {/* RESEARCH PROCESS */}
      <Section id="research" bg="#fff">
        <div className="mb-12">
          <Tag>{t.process.tag}</Tag>
          <H2>{t.process.title}</H2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.process.steps.map((s, i) => {
            const Icon = PROCESS_ICONS[i] || Sparkles;
            return (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="rounded-2xl p-6"
                style={{ backgroundColor: BG, border: `1px solid ${BORDER}` }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: GREEN, color: "#fff" }}>
                    <Icon size={18} />
                  </div>
                  <span className="text-xs tracking-[0.2em]" style={{ color: GREEN_DARK }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div style={{ fontFamily: "Fraunces, serif", fontSize: "1.25rem" }}>{s.t}</div>
                <p className="mt-2" style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.5 }}>
                  {s.d}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* COMPETITORS */}
      <Section bg={BG}>
        <div className="mb-10">
          <Tag>{t.competitors.tag}</Tag>
          <H2>{t.competitors.title}</H2>
        </div>
        <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ minWidth: 880 }}>
              <thead>
                <tr style={{ backgroundColor: GREEN_LIGHT }}>
                  <th className="text-left p-4" style={{ color: GREEN_DARK, fontWeight: 600 }}>
                    {L.platform}
                  </th>
                  {t.competitors.cols.map((c) => (
                    <th key={c} className="p-3 text-center text-xs" style={{ color: GREEN_DARK, fontWeight: 600 }}>
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.competitors.rows.map((r, ri) => {
                  const isUs = r.name.startsWith("Ăng Ăng");
                  return (
                    <tr
                      key={r.name}
                      style={{
                        backgroundColor: isUs ? GREEN_LIGHT : ri % 2 === 0 ? "#fff" : BG,
                        borderTop: `1px solid ${BORDER}`,
                      }}
                    >
                      <td className="p-4" style={{ fontWeight: isUs ? 600 : 500, color: isUs ? GREEN_DARK : INK }}>
                        {r.name}
                      </td>
                      {r.v.map((cell, ci) => (
                        <td key={ci} className="p-3 text-center">
                          {cell ? (
                            <span
                              className="inline-flex w-6 h-6 rounded-full items-center justify-center"
                              style={{ backgroundColor: isUs ? GREEN_DARK : GREEN, color: "#fff" }}
                            >
                              <Check size={14} />
                            </span>
                          ) : (
                            <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: BORDER }} />
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-6 max-w-[70ch]" style={{ color: MUTED, lineHeight: 1.65 }}>
          {t.competitors.conclusion}
        </p>
      </Section>

      {/* TARGET USERS */}
      <Section bg="#fff">
        <Tag>{t.users.tag}</Tag>
        <H2>{t.users.title}</H2>
        <div className="grid lg:grid-cols-3 gap-6 mt-10">
          <div className="rounded-3xl p-7" style={{ backgroundColor: GREEN, color: "#fff" }}>
            <div className="text-xs tracking-[0.2em] uppercase opacity-80">{t.users.primaryLabel}</div>
            <p className="mt-4" style={{ fontFamily: "Fraunces, serif", fontSize: "1.5rem", lineHeight: 1.2 }}>
              {t.users.primary}
            </p>
          </div>
          <div className="rounded-3xl p-7" style={{ backgroundColor: BG, border: `1px solid ${BORDER}` }}>
            <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: GREEN_DARK }}>
              {t.users.useCasesLabel}
            </div>
            <div className="flex flex-wrap gap-2">
              {t.users.useCases.map((u, i) => {
                const Icon = MOOD_ICONS[i] || Smile;
                return (
                  <span
                    key={u}
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: "#fff", color: INK, border: `1px solid ${BORDER}` }}
                  >
                    <Icon size={12} style={{ color: GREEN_DARK }} />
                    {u}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="rounded-3xl p-7" style={{ backgroundColor: GREEN_LIGHT }}>
            <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: GREEN_DARK }}>
              {t.users.behaviorLabel}
            </div>
            <p style={{ color: INK, lineHeight: 1.6 }}>{t.users.behavior}</p>
          </div>
        </div>
      </Section>

      {/* INSIGHTS */}
      <Section id="insights" bg={BG}>
        <Tag>{t.insights.tag}</Tag>
        <H2>{t.insights.title}</H2>
        <div className="grid md:grid-cols-2 gap-5 mt-10">
          {t.insights.items.map((it) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl p-7 md:p-8"
              style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span style={{ fontFamily: "Fraunces, serif", fontSize: "2rem", color: GREEN, fontStyle: "italic" }}>
                  {it.n}
                </span>
                <span style={{ fontFamily: "Fraunces, serif", fontSize: "1.5rem" }}>{it.t}</span>
              </div>
              <p style={{ lineHeight: 1.6 }}>{it.d}</p>
              <div className="mt-5 rounded-2xl p-4" style={{ backgroundColor: GREEN_LIGHT }}>
                <div className="text-[10px] tracking-[0.22em] uppercase mb-1.5" style={{ color: GREEN_DARK }}>
                  {L.designImplication}
                </div>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.55 }}>{it.impl}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PERSONA */}
      <Section bg="#fff">
        <Tag>{t.persona.tag}</Tag>
        <div className="grid lg:grid-cols-12 gap-8 items-start mt-2">
          <div className="lg:col-span-4">
            <div className="rounded-3xl overflow-hidden" style={{ aspectRatio: "4 / 5", backgroundColor: GREEN_LIGHT }}>
              <ImageWithFallback src={PERSONA_IMG} alt="Persona portrait · Linh, 24" className="w-full h-full object-cover" />
            </div>
            <div className="mt-5 rounded-2xl p-5" style={{ backgroundColor: INK, color: "#fff" }}>
              <div style={{ fontFamily: "Fraunces, serif", fontSize: "1.6rem" }}>{t.persona.name}</div>
              <div className="text-xs tracking-[0.18em] uppercase mt-1" style={{ color: GREEN }}>
                {t.persona.role}
              </div>
              <p className="mt-3" style={{ fontSize: "0.92rem", opacity: 0.8, lineHeight: 1.55 }}>
                {t.persona.context}
              </p>
            </div>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4">
            {[
              { label: t.persona.goalsLabel, items: t.persona.goals, color: GREEN_DARK },
              { label: t.persona.painsLabel, items: t.persona.pains, color: RED },
              { label: t.persona.needsLabel, items: t.persona.needs, color: ORANGE },
            ].map((col) => (
              <div key={col.label} className="rounded-2xl p-5" style={{ backgroundColor: BG, border: `1px solid ${BORDER}` }}>
                <div className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: col.color, fontWeight: 600 }}>
                  {col.label}
                </div>
                <ul className="space-y-2">
                  {col.items.map((x) => (
                    <li key={x} className="flex items-start gap-2" style={{ fontSize: "0.92rem", lineHeight: 1.5 }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: col.color }} />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* JOURNEY */}
      <Section id="journey" bg={BG}>
        <Tag>{t.journey.tag}</Tag>
        <H2>{t.journey.title}</H2>
        <div className="mt-10 overflow-x-auto pb-4 -mx-6 px-6 md:-mx-12 md:px-12">
          <div className="grid grid-cols-6 gap-3" style={{ minWidth: 1100 }}>
            {t.journey.stages.map((s, i) => (
              <div
                key={s.s}
                className="rounded-2xl p-5"
                style={{
                  backgroundColor: i % 2 === 0 ? "#fff" : GREEN_LIGHT,
                  border: `1px solid ${BORDER}`,
                }}
              >
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: GREEN, color: "#fff" }}>
                  {i + 1}
                </div>
                <div className="mt-3" style={{ fontFamily: "Fraunces, serif", fontSize: "1.2rem" }}>
                  {s.s}
                </div>
                <div className="mt-4 space-y-3">
                  <Field label={L.action} v={s.a} />
                  <Field label={L.thought} v={s.th} italic />
                  <Field label={L.pain} v={s.p} color={RED} />
                  <Field label={L.opportunity} v={s.o} color={GREEN_DARK} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* HMW */}
      <Section bg={INK} text="#fff">
        <Tag color={GREEN}>{t.hmw.tag}</Tag>
        <h2
          className="tracking-[-0.02em] leading-[1.05]"
          style={{ fontFamily: "Fraunces, serif", fontWeight: 400, fontSize: "clamp(2rem, 4.4vw, 3.5rem)" }}
        >
          {t.hmw.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {t.hmw.items.map((it, i) => (
            <div
              key={i}
              className="rounded-3xl p-7"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <div className="text-xs tracking-[0.22em] uppercase mb-3" style={{ color: GREEN }}>
                HMW · {String(i + 1).padStart(2, "0")}
              </div>
              <p style={{ fontFamily: "Fraunces, serif", fontSize: "1.3rem", lineHeight: 1.25 }}>{it}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* MAPPING */}
      <Section bg="#fff">
        <Tag>{t.mapping.tag}</Tag>
        <H2>{t.mapping.title}</H2>
        <div className="mt-10 rounded-3xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
          <div className="grid grid-cols-12 px-6 py-4" style={{ backgroundColor: GREEN_LIGHT }}>
            <div className="col-span-3 text-xs tracking-[0.2em] uppercase" style={{ color: GREEN_DARK, fontWeight: 600 }}>
              {t.mapping.cols[0]}
            </div>
            <div className="col-span-4 text-xs tracking-[0.2em] uppercase" style={{ color: GREEN_DARK, fontWeight: 600 }}>
              {t.mapping.cols[1]}
            </div>
            <div className="col-span-5 text-xs tracking-[0.2em] uppercase" style={{ color: GREEN_DARK, fontWeight: 600 }}>
              {t.mapping.cols[2]}
            </div>
          </div>
          {t.mapping.rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-12 px-6 py-5"
              style={{ backgroundColor: i % 2 === 0 ? "#fff" : BG, borderTop: `1px solid ${BORDER}` }}
            >
              <div className="col-span-3 pr-3" style={{ fontWeight: 500 }}>
                {row[0]}
              </div>
              <div className="col-span-4 pr-3" style={{ color: GREEN_DARK }}>
                {row[1]}
              </div>
              <div className="col-span-5" style={{ color: MUTED }}>
                {row[2]}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* BRAND IDENTITY */}
      <Section id="brand" bg={BG}>
        <Tag>{t.brand.tag}</Tag>
        <H2>{t.brand.title}</H2>
        <div className="grid lg:grid-cols-12 gap-8 mt-10">
          <div className="lg:col-span-5">
            <div className="w-full">
              <div className="flex items-center justify-center" style={{ width: "100%" }}>
                <LogoMark />
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>
              {t.brand.logoCaption}
            </p>

            <div className="mt-8 rounded-3xl p-7" style={{ backgroundColor: GREEN, color: "#fff" }}>
              <div className="text-xs tracking-[0.22em] uppercase opacity-80 mb-3">{t.brand.toneLabel}</div>
              <p style={{ fontFamily: "Fraunces, serif", fontSize: "1.2rem", lineHeight: 1.4 }}>{t.brand.tone}</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="text-xs tracking-[0.22em] uppercase mb-3" style={{ color: GREEN_DARK }}>
              {t.brand.keywordsLabel}
            </div>
            <div className="flex flex-wrap gap-2">
              {t.brand.keywords.map((k) => (
                <span
                  key={k}
                  className="px-4 py-2 rounded-full text-sm"
                  style={{ backgroundColor: "#fff", color: INK, border: `1px solid ${GREEN}` }}
                >
                  {k}
                </span>
              ))}
            </div>

            <div className="text-xs tracking-[0.22em] uppercase mt-8 mb-3" style={{ color: GREEN_DARK }}>
              {t.brand.moodLabel}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {MOODBOARD.map((src, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden"
                  style={{ aspectRatio: i === 0 || i === 3 ? "1 / 1" : "4 / 3" }}
                >
                  <ImageWithFallback src={src} alt={`Ăng Ăng moodboard ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* COLOR SYSTEM */}
      <Section id="system" bg="#fff">
        <Tag>{t.color.tag}</Tag>
        <H2>{t.color.title}</H2>
        <p className="mt-5 max-w-[60ch]" style={{ color: MUTED, lineHeight: 1.65 }}>
          {t.color.desc}
        </p>
        {/* Brand swatch — Primary 500 */}
        <div
          className="mt-10 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-[1.1fr_1fr]"
          style={{ border: `1px solid ${BORDER}` }}
        >
          <div className="h-44 md:h-auto" style={{ backgroundColor: GREEN }} />
          <div className="p-7 flex flex-col justify-center" style={{ backgroundColor: "#fff" }}>
            <div className="text-xs tracking-[0.22em] uppercase" style={{ color: GREEN_DARK }}>
              {t.color.brandLabel}
            </div>
            <div className="mt-2" style={{ fontFamily: "Fraunces, serif", fontSize: "1.5rem", color: INK }}>
              Ăng Ăng Green · Primary 500
            </div>
            <div className="mt-2 font-mono text-sm" style={{ color: MUTED }}>#9DD325</div>
          </div>
        </div>

        {/* Palette scales */}
        <div className="mt-10 space-y-6">
          {PALETTES.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl overflow-hidden"
              style={{ border: `1px solid ${BORDER}`, backgroundColor: "#fff" }}
            >
              <div
                className="px-5 py-3 flex items-center justify-between"
                style={{ borderBottom: `1px solid ${BORDER}` }}
              >
                <div style={{ fontFamily: "Fraunces, serif", fontSize: "1.1rem", color: INK }}>
                  {p.name}
                </div>
                <div className="text-xs tracking-[0.2em] uppercase" style={{ color: MUTED }}>
                  {p.shades.length} {t.color.shadeLabel}
                </div>
              </div>
              <div className="grid grid-cols-11">
                {p.shades.map((s) => {
                  const idx = parseInt(s.n, 10);
                  const labelDark = idx <= 300;
                  return (
                    <div key={s.n} className="flex flex-col">
                      <div className="h-20 md:h-24" style={{ backgroundColor: s.hex }} />
                      <div className="px-2 py-2 text-center" style={{ borderTop: `1px solid ${BORDER}` }}>
                        <div
                          className="text-[10px] tracking-[0.12em]"
                          style={{ color: labelDark ? INK : INK, fontWeight: 600 }}
                        >
                          {s.n}
                        </div>
                        <div className="font-mono text-[10px] mt-0.5" style={{ color: MUTED }}>
                          {s.hex.toUpperCase()}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* TYPOGRAPHY */}
      <Section bg={BG}>
        <Tag>{t.typo.tag}</Tag>
        <H2>{t.typo.title}</H2>
        <div className="grid lg:grid-cols-12 gap-8 mt-10">
          <div className="lg:col-span-5 rounded-3xl p-8" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}>
            <div className="text-xs tracking-[0.22em] uppercase mb-3" style={{ color: GREEN_DARK }}>
              {L.primaryTypeface}
            </div>
            <div
              style={{
                fontFamily: "Fraunces, serif",
                fontSize: "clamp(4rem, 9vw, 8rem)",
                fontWeight: 500,
                lineHeight: 0.95,
                color: INK,
              }}
            >
              SF Pro
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {["Aa", "Bb", "12"].map((g) => (
                <div
                  key={g}
                  className="rounded-2xl py-6"
                  style={{
                    backgroundColor: BG,
                    border: `1px solid ${BORDER}`,
                    fontSize: "2rem",
                    fontWeight: 600,
                  }}
                >
                  {g}
                </div>
              ))}
            </div>
            <p className="mt-6" style={{ color: MUTED, lineHeight: 1.6, fontSize: "0.92rem" }}>
              {t.typo.body}
            </p>
            <p className="mt-3 text-xs" style={{ color: MUTED }}>
              Stack · {t.typo.stack}
            </p>
          </div>

          <div className="lg:col-span-7 rounded-3xl overflow-hidden" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}>
            <div className="px-6 py-4 grid grid-cols-12 text-xs tracking-[0.2em] uppercase" style={{ backgroundColor: GREEN_LIGHT, color: GREEN_DARK }}>
              <div className="col-span-3">{L.style}</div>
              <div className="col-span-4">{L.sizeLineWeight}</div>
              <div className="col-span-5">{L.preview}</div>
            </div>
            {t.typo.scale.map((row, i) => (
              <div
                key={row.n}
                className="px-6 py-5 grid grid-cols-12 items-center"
                style={{ borderTop: i === 0 ? "none" : `1px solid ${BORDER}` }}
              >
                <div className="col-span-3" style={{ fontWeight: 600 }}>
                  {row.n}
                </div>
                <div className="col-span-4 text-xs" style={{ color: MUTED }}>
                  {row.v}
                </div>
                <div
                  className="col-span-5 truncate"
                  style={{
                    fontSize:
                      row.n === "H1"
                        ? "1.8rem"
                        : row.n === "H2"
                        ? "1.5rem"
                        : row.n === "H3"
                        ? "1.25rem"
                        : row.n === "Body Large"
                        ? "1.1rem"
                        : row.n === "Body"
                        ? "1rem"
                        : "0.8rem",
                    fontWeight: row.n.startsWith("H") ? 700 : row.n === "Small Label" ? 500 : 400,
                  }}
                >
                  Ăng Ăng · {row.n}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* GRID */}
      <Section bg="#fff">
        <Tag>{t.grid.tag}</Tag>
        <H2>{t.grid.title}</H2>
        <p className="mt-5 max-w-[64ch]" style={{ color: MUTED, lineHeight: 1.65 }}>
          {t.grid.desc}
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {t.grid.groups.map((g) => (
            <div
              key={g.n}
              className="rounded-2xl p-6"
              style={{ backgroundColor: BG, border: `1px solid ${BORDER}` }}
            >
              <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: GREEN_DARK }}>
                {g.n}
              </div>
              <ul className="space-y-1.5 font-mono" style={{ fontSize: "0.82rem", color: INK }}>
                {g.rows.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              {g.cols > 0 ? (
                <div
                  className="mt-5 grid gap-[3px] p-2 rounded-lg"
                  style={{
                    gridTemplateColumns: `repeat(${g.cols}, 1fr)`,
                    backgroundColor: "#fff",
                    border: `1px solid ${BORDER}`,
                  }}
                >
                  {Array.from({ length: g.cols }).map((_, i) => (
                    <div
                      key={i}
                      className="h-20 rounded-sm"
                      style={{ backgroundColor: `${GREEN}33`, border: `1px solid ${GREEN}55` }}
                    />
                  ))}
                </div>
              ) : (
                <div
                  className="mt-5 p-2 rounded-lg overflow-hidden"
                  style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}
                >
                  <div className="flex flex-col">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-full"
                        style={{ height: 8, borderBottom: `1px solid ${GREEN}40` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Live overlay preview on the app frame */}
        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {[
            { label: lang === "en" ? "4-column overlay" : "Overlay 4 cột", cols: 4 },
            { label: lang === "en" ? "6-column overlay" : "Overlay 6 cột", cols: 6 },
          ].map((o) => (
            <div
              key={o.cols}
              className="rounded-2xl p-6 flex flex-col items-center"
              style={{ backgroundColor: BG, border: `1px solid ${BORDER}` }}
            >
              <div className="text-xs tracking-[0.2em] uppercase mb-4 self-start" style={{ color: GREEN_DARK }}>
                {o.label}
              </div>
              <div
                className="relative rounded-[28px] overflow-hidden"
                style={{
                  width: 240,
                  height: 480,
                  backgroundColor: "#fff",
                  border: `1px solid ${BORDER}`,
                  padding: `0 ${(12 / 375) * 240}px`,
                }}
              >
                <div
                  className="grid h-full"
                  style={{
                    gridTemplateColumns: `repeat(${o.cols}, 1fr)`,
                    columnGap: `${(12 / 375) * 240}px`,
                  }}
                >
                  {Array.from({ length: o.cols }).map((_, i) => (
                    <div
                      key={i}
                      className="h-full"
                      style={{ backgroundColor: `${GREEN}1f`, borderLeft: `1px dashed ${GREEN}80`, borderRight: `1px dashed ${GREEN}80` }}
                    />
                  ))}
                </div>
                {/* Baseline rows */}
                <div className="absolute inset-0 pointer-events-none flex flex-col">
                  {Array.from({ length: Math.floor(480 / ((8 / 812) * 480 * 4)) }).map((_, i) => (
                    <div
                      key={i}
                      style={{ height: (8 / 812) * 480 * 4, borderBottom: `1px solid ${INK}10` }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-3 font-mono text-xs" style={{ color: MUTED }}>
                Margin 12 · Gutter 12 · Baseline 8
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <div className="text-xs tracking-[0.22em] uppercase mb-4" style={{ color: GREEN_DARK }}>
            {t.grid.spacingLabel}
          </div>
          <div className="flex items-end gap-3 flex-wrap">
            {t.grid.spacing.map((s) => (
              <div key={s} className="text-center">
                <div
                  className="rounded-md"
                  style={{ backgroundColor: GREEN, width: s, height: s, minWidth: 4, minHeight: 4 }}
                />
                <div className="mt-2 text-xs" style={{ color: MUTED }}>
                  {s}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* COMPONENTS */}
      <Section bg={BG}>
        <Tag>{t.components.tag}</Tag>
        <H2>{t.components.title}</H2>
        <p className="mt-5 max-w-[64ch]" style={{ color: MUTED, lineHeight: 1.65 }}>
          {t.components.desc}
        </p>

        {/* Family overview */}
        <div className="grid md:grid-cols-2 gap-4 mt-10">
          {t.components.families.map((f) => {
            const total = f.variants.length * f.sizes.length * f.states.length;
            return (
              <div
                key={f.name}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}
              >
                <div className="flex items-center justify-between">
                  <div style={{ fontFamily: "Fraunces, serif", fontSize: "1.3rem", color: INK }}>
                    {f.name}
                  </div>
                  <div
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: GREEN_LIGHT, color: GREEN_DARK, fontWeight: 600 }}
                  >
                    {f.variants.length} × {f.sizes.length} × {f.states.length} = {total}
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {(
                    [
                      { label: t.components.labels.variants, items: f.variants },
                      { label: t.components.labels.sizes, items: f.sizes },
                      { label: t.components.labels.states, items: f.states },
                    ] as const
                  ).map((row) => (
                    <div key={row.label} className="grid grid-cols-[80px_1fr] items-start gap-3">
                      <div
                        className="text-[10px] tracking-[0.2em] uppercase pt-1.5"
                        style={{ color: MUTED }}
                      >
                        {row.label}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {row.items.map((v) => (
                          <span
                            key={v}
                            className="text-xs px-2.5 py-1 rounded-md"
                            style={{ backgroundColor: BG, border: `1px solid ${BORDER}`, color: INK }}
                          >
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live samples grid */}
        <div className="grid lg:grid-cols-12 gap-6 mt-6">
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl p-6" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}>
              <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: GREEN_DARK }}>
                {lang === "en" ? "Button matrix" : "Ma trận button"}
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    label: "Filled",
                    items: [
                      { name: "Default", bg: GREEN, fg: "#fff", border: GREEN },
                      { name: "Hover", bg: GREEN_DARK, fg: "#fff", border: GREEN_DARK },
                      { name: "Focus", bg: GREEN, fg: "#fff", border: GREEN, shadow: `0 0 0 3px ${GREEN_LIGHT}` },
                      { name: "Press", bg: "#547516", fg: "#fff", border: "#547516" },
                      { name: "Disabled", bg: BORDER, fg: MUTED, border: BORDER },
                    ],
                  },
                  {
                    label: "Outline",
                    items: [
                      { name: "Default", bg: "#fff", fg: GREEN_DARK, border: GREEN_DARK },
                      { name: "Hover", bg: BG, fg: GREEN_DARK, border: GREEN_DARK },
                      { name: "Focus", bg: "#fff", fg: GREEN_DARK, border: GREEN_DARK, shadow: `0 0 0 3px ${GREEN_LIGHT}` },
                      { name: "Press", bg: GREEN_LIGHT, fg: GREEN_DARK, border: GREEN_DARK },
                      { name: "Disabled", bg: "#fff", fg: MUTED, border: BORDER },
                    ],
                  },
                  {
                    label: "Clear",
                    items: [
                      { name: "Default", bg: "transparent", fg: GREEN_DARK, border: "transparent" },
                      { name: "Hover", bg: BG, fg: GREEN_DARK, border: "transparent" },
                      { name: "Focus", bg: "transparent", fg: GREEN_DARK, border: "transparent", shadow: `0 0 0 3px ${GREEN_LIGHT}` },
                      { name: "Press", bg: GREEN_LIGHT, fg: GREEN_DARK, border: "transparent" },
                      { name: "Disabled", bg: "transparent", fg: MUTED, border: "transparent" },
                    ],
                  },
                ].map((group) => (
                  <div key={group.label} className="rounded-2xl p-4" style={{ backgroundColor: "#fcfcf8", border: `1px solid ${BORDER}` }}>
                    <div className="text-[11px] tracking-[0.2em] uppercase mb-3" style={{ color: MUTED }}>
                      {group.label}
                    </div>
                    <div className="space-y-3">
                      {group.items.map((item) => (
                        <div key={item.name} className="flex items-center justify-between gap-3">
                          <span className="text-[11px] tracking-[0.18em] uppercase min-w-[68px]" style={{ color: MUTED }}>
                            {item.name}
                          </span>
                          <button
                            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                            style={{
                              backgroundColor: item.bg,
                              color: item.fg,
                              border: `1.5px solid ${item.border}`,
                              boxShadow: item.shadow ?? "none",
                            }}
                          >
                            <Sparkles size={14} />
                            {lang === "en" ? "Discover" : "Khám phá"}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl p-4" style={{ backgroundColor: "#fcfcf8", border: `1px solid ${BORDER}` }}>
                <div className="text-[11px] tracking-[0.2em] uppercase mb-3" style={{ color: MUTED }}>
                  {lang === "en" ? "Icon only sizes" : "Cỡ icon only"}
                </div>
                <div className="flex flex-wrap items-end gap-3">
                  {[
                    { label: "Tiny", size: 24, icon: 11 },
                    { label: "Small", size: 32, icon: 14 },
                    { label: "Medium", size: 40, icon: 16 },
                    { label: "Large", size: 48, icon: 18 },
                    { label: "Giant", size: 56, icon: 20 },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-2">
                      <button
                        className="inline-flex items-center justify-center rounded-full"
                        style={{ width: item.size, height: item.size, backgroundColor: GREEN, color: "#fff" }}
                      >
                        <ArrowUpRight size={item.icon} />
                      </button>
                      <span className="text-[11px]" style={{ color: MUTED }}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}>
              <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: GREEN_DARK }}>
                {lang === "en" ? "Input fields" : "Trường nhập liệu"}
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div
                    className="flex items-center gap-2 px-4 py-3 rounded-2xl"
                    style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}
                  >
                    <Search size={16} style={{ color: MUTED }} />
                    <span className="text-sm" style={{ color: MUTED }}>
                      {L.searchPlaceholder}
                    </span>
                  </div>
                  <div
                    className="flex items-center justify-between gap-2 px-4 py-3 rounded-2xl"
                    style={{ backgroundColor: "#fff", border: `2px solid ${GREEN}` }}
                  >
                    <span className="text-sm" style={{ color: INK }}>
                      {lang === "en" ? "District 1" : "Quận 1"}
                    </span>
                    <ArrowUpRight size={15} style={{ color: GREEN_DARK, transform: "rotate(135deg)" }} />
                  </div>
                  <div
                    className="flex items-center gap-2 px-4 py-3 rounded-2xl"
                    style={{ backgroundColor: "#fff", border: `1px solid ${RED}` }}
                  >
                    <span className="text-sm" style={{ color: RED }}>
                      {lang === "en" ? "Please choose a time" : "Vui lòng chọn thời gian"}
                    </span>
                  </div>
                </div>
                <div
                  className="rounded-2xl p-4"
                  style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}
                >
                  <div className="text-[11px] tracking-[0.2em] uppercase mb-3" style={{ color: MUTED }}>
                    Textarea
                  </div>
                  <div
                    className="rounded-2xl p-4 min-h-[132px]"
                    style={{ backgroundColor: BG, border: `1px solid ${BORDER}`, color: MUTED, lineHeight: 1.6 }}
                  >
                    {lang === "en"
                      ? "Notes for the group, mood, budget, or any special reason behind the choice."
                      : "Ghi chú cho nhóm, mood, ngân sách, hoặc lý do đặc biệt đằng sau lựa chọn này."}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}>
              <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: GREEN_DARK }}>
                {lang === "en" ? "Selection controls" : "Selection controls"}
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-2xl p-4" style={{ backgroundColor: "#fcfcf8", border: `1px solid ${BORDER}` }}>
                  <div className="text-[11px] tracking-[0.2em] uppercase mb-3" style={{ color: MUTED }}>
                    Checkbox
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: lang === "en" ? "Open now" : "Đang mở", checked: true, disabled: false },
                      { label: lang === "en" ? "Quiet space" : "Yên tĩnh", checked: false, disabled: false },
                      { label: lang === "en" ? "Group friendly" : "Hợp đi nhóm", checked: true, disabled: true },
                    ].map((item) => (
                      <label key={item.label} className="flex items-center gap-3">
                        <span
                          className="inline-flex h-5 w-5 items-center justify-center rounded-md"
                          style={{
                            backgroundColor: item.checked ? GREEN : "#fff",
                            border: `1.5px solid ${item.checked ? GREEN : BORDER}`,
                            color: "#fff",
                            opacity: item.disabled ? 0.5 : 1,
                          }}
                        >
                          {item.checked ? <Check size={13} /> : null}
                        </span>
                        <span style={{ color: item.disabled ? MUTED : INK, fontSize: "0.9rem" }}>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl p-4" style={{ backgroundColor: "#fcfcf8", border: `1px solid ${BORDER}` }}>
                  <div className="text-[11px] tracking-[0.2em] uppercase mb-3" style={{ color: MUTED }}>
                    Radio
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: lang === "en" ? "Date night" : "Hẹn hò", checked: false },
                      { label: lang === "en" ? "Casual lunch" : "Ăn trưa nhanh", checked: true },
                      { label: lang === "en" ? "Weekend plan" : "Cuối tuần", checked: false },
                    ].map((item) => (
                      <label key={item.label} className="flex items-center gap-3">
                        <span
                          className="inline-flex h-5 w-5 items-center justify-center rounded-full"
                          style={{ border: `1.5px solid ${item.checked ? GREEN : BORDER}`, backgroundColor: "#fff" }}
                        >
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: item.checked ? GREEN : "transparent" }}
                          />
                        </span>
                        <span style={{ color: INK, fontSize: "0.9rem" }}>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl p-4" style={{ backgroundColor: "#fcfcf8", border: `1px solid ${BORDER}` }}>
                  <div className="text-[11px] tracking-[0.2em] uppercase mb-3" style={{ color: MUTED }}>
                    Switch
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: lang === "en" ? "Verified reviewers only" : "Chỉ reviewer đã xác minh", on: true },
                      { label: lang === "en" ? "Show nearby first" : "Ưu tiên gần đây", on: true },
                      { label: lang === "en" ? "Hide crowded places" : "Ẩn chỗ quá đông", on: false },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between gap-3">
                        <span style={{ color: INK, fontSize: "0.9rem" }}>{item.label}</span>
                        <span
                          className="inline-flex h-7 w-12 items-center rounded-full p-1"
                          style={{ backgroundColor: item.on ? GREEN : BORDER, justifyContent: item.on ? "flex-end" : "flex-start" }}
                        >
                          <span className="h-5 w-5 rounded-full" style={{ backgroundColor: "#fff" }} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl p-6" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}>
              <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: GREEN_DARK }}>
                {lang === "en" ? "Button Group" : "Button Group"}
              </div>
              <div className="space-y-4">
                <div className="inline-flex rounded-full p-1" style={{ backgroundColor: BG, border: `1px solid ${BORDER}` }}>
                  {[
                    lang === "en" ? "All" : "Tất cả",
                    lang === "en" ? "Open" : "Đang mở",
                    lang === "en" ? "Date" : "Hẹn hò",
                    lang === "en" ? "Group" : "Đi nhóm",
                  ].map((b, i) => (
                    <button
                      key={b}
                      className="px-4 py-1.5 rounded-full text-sm"
                      style={{
                        backgroundColor: i === 1 ? GREEN : "transparent",
                        color: i === 1 ? "#fff" : INK,
                        fontWeight: i === 1 ? 600 : 400,
                      }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
                <div className="inline-flex rounded-2xl p-1 gap-1" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}>
                  {[
                    { icon: Search, active: true },
                    { icon: Heart, active: false },
                    { icon: MapPin, active: false },
                    { icon: Users, active: false },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={i}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: item.active ? GREEN_LIGHT : "#fff",
                          color: item.active ? GREEN_DARK : MUTED,
                        }}
                      >
                        <Icon size={16} />
                      </button>
                    );
                  })}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    lang === "en" ? "Lunch break" : "Ăn trưa",
                    lang === "en" ? "Quiet catch-up" : "Gặp bạn yên tĩnh",
                    lang === "en" ? "Budget pick" : "Tiết kiệm",
                    lang === "en" ? "Late night" : "Ăn khuya",
                  ].map((item, i) => (
                    <button
                      key={item}
                      className="px-4 py-3 rounded-2xl text-left text-sm"
                      style={{
                        backgroundColor: i === 0 ? GREEN_LIGHT : "#fff",
                        border: `1px solid ${i === 0 ? GREEN : BORDER}`,
                        color: i === 0 ? GREEN_DARK : INK,
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}>
              <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: GREEN_DARK }}>
                {lang === "en" ? "Badge, avatar, and progress" : "Badge, avatar và progress"}
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Success", bg: "#cdfee5", fg: "#00674a", solid: "#00bc7d" },
                    { name: "Warning", bg: "#fff3c5", fg: "#7c320b", solid: "#fe9a00" },
                    { name: "Error", bg: "#fee2e2", fg: "#7f1d1d", solid: "#ef4444" },
                    { name: "Info", bg: "#dbe8fe", fg: "#1e478a", solid: "#3b82f6" },
                    { name: "Neutral", bg: "#f6f6f6", fg: "#262626", solid: "#737373" },
                  ].map((s) => (
                    <div key={s.name} className="flex flex-col gap-1.5">
                      <span
                        className="text-xs px-3 py-1 rounded-full inline-flex items-center gap-1.5"
                        style={{ backgroundColor: s.solid, color: "#fff", fontWeight: 600 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#fff" }} />
                        {s.name}
                      </span>
                      <span
                        className="text-xs px-3 py-1 rounded-full inline-flex items-center gap-1.5"
                        style={{ backgroundColor: s.bg, color: s.fg }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.solid }} />
                        {s.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center -space-x-2">
                    {["#9dd325", "#ffd346", "#fe9a00", "#3b82f6"].map((c, i) => (
                      <span
                        key={c}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-semibold"
                        style={{ backgroundColor: c, color: i === 1 ? INK : "#fff", borderColor: "#fff" }}
                      >
                        {["AN", "VR", "UX", "CM"][i]}
                      </span>
                    ))}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs mb-2" style={{ color: MUTED }}>
                      <span>{lang === "en" ? "Trust profile completion" : "Mức hoàn thiện hồ sơ uy tín"}</span>
                      <span>72%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: BG }}>
                      <div className="h-full rounded-full" style={{ width: "72%", backgroundColor: GREEN }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}>
              <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: GREEN_DARK }}>
                {lang === "en" ? "Helper primitives" : "Helper primitives"}
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs" style={{ color: MUTED }}>
                    {lang === "en" ? "Tooltip" : "Tooltip"}
                  </span>
                  <div className="px-3 py-2 rounded-xl text-sm" style={{ backgroundColor: INK, color: "#fff" }}>
                    {lang === "en" ? "Verified users get context-first reviews." : "Người dùng đã xác minh sẽ có review theo ngữ cảnh."}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    lang === "en" ? "New" : "Mới",
                    lang === "en" ? "Featured" : "Nổi bật",
                    lang === "en" ? "Verified" : "Xác minh",
                  ].map((item, i) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs"
                      style={{
                        backgroundColor: i === 2 ? GREEN_LIGHT : "#fff",
                        color: i === 2 ? GREEN_DARK : INK,
                        border: `1px solid ${i === 2 ? GREEN : BORDER}`,
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: i === 2 ? GREEN : MUTED }} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ICONS */}
      <Section bg="#fff">
        <Tag>{t.icons.tag}</Tag>
        <H2>{t.icons.title}</H2>
        <p className="mt-5 max-w-[60ch]" style={{ color: MUTED, lineHeight: 1.65 }}>
          {t.icons.body}
        </p>
        <div className="grid lg:grid-cols-12 gap-6 mt-10">
          <div className="lg:col-span-7 rounded-3xl p-6" style={{ backgroundColor: BG, border: `1px solid ${BORDER}` }}>
            <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: GREEN_DARK }}>
              {lang === "en" ? "Icon library" : "Thư viện icon"}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {[Utensils, MapPin, Search, Heart, Star, Users, Clock, Wallet, Smile, UsersRound].map((Icon, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}`, color: GREEN_DARK }}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>
              ))}
            </div>
            <div className="mt-5 grid sm:grid-cols-3 gap-3">
              {[
                {
                  label: lang === "en" ? "Shape" : "Hình thái",
                  value: lang === "en" ? "Rounded corners, low visual noise" : "Bo tròn, ít nhiễu thị giác",
                },
                {
                  label: lang === "en" ? "Role" : "Vai trò",
                  value: lang === "en" ? "Navigation, filters, trust cues" : "Điều hướng, bộ lọc, tín hiệu tin cậy",
                },
                {
                  label: lang === "en" ? "Tone" : "Sắc độ",
                  value: lang === "en" ? "Green-led accents with neutral fallback" : "Nhấn xanh chủ đạo, lùi về neutral khi cần",
                },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl p-4" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}>
                  <div className="text-[10px] tracking-[0.2em] uppercase" style={{ color: MUTED }}>
                    {item.label}
                  </div>
                  <div className="mt-2 text-sm" style={{ color: INK, lineHeight: 1.55 }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl p-6" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}>
              <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: GREEN_DARK }}>
                {lang === "en" ? "Sizes & containers" : "Size & container"}
              </div>
              <div className="space-y-4">
                {[
                  { label: "16", box: 32, icon: 16 },
                  { label: "20", box: 40, icon: 20 },
                  { label: "24", box: 48, icon: 24 },
                ].map((item, i) => {
                  const Icon = [Search, Heart, MapPin][i];
                  return (
                    <div key={item.label} className="flex items-center justify-between gap-4">
                      <div className="text-xs tracking-[0.2em] uppercase min-w-10" style={{ color: MUTED }}>
                        {item.label}px
                      </div>
                      <div className="flex-1 flex items-center gap-3">
                        <div
                          className="inline-flex items-center justify-center rounded-2xl"
                          style={{ width: item.box, height: item.box, backgroundColor: BG, border: `1px solid ${BORDER}`, color: GREEN_DARK }}
                        >
                          <Icon size={item.icon} strokeWidth={1.8} />
                        </div>
                        <div className="text-sm" style={{ color: MUTED }}>
                          {lang === "en"
                            ? item.icon === 16
                              ? "Dense controls"
                              : item.icon === 20
                              ? "Standard actions"
                              : "Featured moments"
                            : item.icon === 16
                            ? "Control dày"
                            : item.icon === 20
                            ? "Action tiêu chuẩn"
                            : "Điểm nhấn nổi bật"}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl p-6" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}>
              <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: GREEN_DARK }}>
                {lang === "en" ? "Mini illustration accents" : "Điểm nhấn minh hoạ nhỏ"}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: lang === "en" ? "Mood" : "Mood", bg: GREEN_LIGHT, icon: Smile, text: lang === "en" ? "Light, friendly, quick" : "Nhẹ, thân thiện, nhanh" },
                  { title: lang === "en" ? "Trust" : "Tin cậy", bg: "#dbe8fe", icon: Star, text: lang === "en" ? "Verified, recent, contextual" : "Xác minh, gần đây, theo ngữ cảnh" },
                  { title: lang === "en" ? "Budget" : "Ngân sách", bg: "#fff3c5", icon: Wallet, text: lang === "en" ? "Clear, practical cues" : "Tín hiệu rõ và thực dụng" },
                  { title: lang === "en" ? "Group" : "Đi nhóm", bg: "#fee2e2", icon: UsersRound, text: lang === "en" ? "Shared decision moments" : "Bối cảnh ra quyết định chung" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-2xl p-4" style={{ backgroundColor: item.bg, border: `1px solid ${BORDER}` }}>
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl" style={{ backgroundColor: "#fff", color: GREEN_DARK }}>
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                      <div className="mt-3" style={{ fontFamily: "Fraunces, serif", fontSize: "1.05rem", color: INK }}>
                        {item.title}
                      </div>
                      <div className="mt-1 text-sm" style={{ color: MUTED, lineHeight: 1.5 }}>
                        {item.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* WIREFRAMES */}
      <Section id="wireframe" bg={BG}>
        <Tag>{t.wireframe.tag}</Tag>
        <H2>{t.wireframe.title}</H2>
        <p className="mt-5 max-w-[64ch]" style={{ color: MUTED, lineHeight: 1.65 }}>
          {t.wireframe.body}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {t.wireframe.items.map((w, i) => (
            <motion.figure
              key={w.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}
            >
              <div
                className="overflow-hidden flex items-center justify-center cursor-zoom-in"
                style={{ aspectRatio: "4 / 3", backgroundColor: "#fafaf6" }}
                onClick={() => setActiveWireframe({ src: w.src, title: w.t })}
              >
                <img
                  src={w.src}
                  alt={`Wireframe · ${w.t}`}
                  className="w-full h-full object-cover"
                  style={{ filter: "contrast(1.05)" }}
                />
              </div>
              <figcaption className="p-5">
                <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase" style={{ color: GREEN_DARK }}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ color: BORDER }}>·</span>
                  <span style={{ color: MUTED }}>{lang === "en" ? "Paper sketch" : "Phác thảo giấy"}</span>
                </div>
                <div className="mt-2" style={{ fontFamily: "Fraunces, serif", fontSize: "1.2rem" }}>
                  {w.t}
                </div>
                <p className="mt-1.5" style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.5 }}>
                  {w.d}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Section>

      {activeWireframe && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          style={{ backgroundColor: "rgba(18, 24, 10, 0.8)" }}
          onClick={() => setActiveWireframe(null)}
        >
          <div
            className="relative w-full max-w-6xl rounded-[28px] overflow-hidden"
            style={{ backgroundColor: "#fff", border: `1px solid rgba(255,255,255,0.18)` }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full text-[28px] leading-none"
              style={{ backgroundColor: "rgba(38,38,38,0.82)", color: "#fff" }}
              onClick={() => setActiveWireframe(null)}
              aria-label={lang === "en" ? "Close image preview" : "Đóng ảnh phóng to"}
            >
              ×
            </button>
            <div className="px-5 pt-5 pb-3 sm:px-7 sm:pt-7">
              <div className="text-xs tracking-[0.2em] uppercase" style={{ color: GREEN_DARK }}>
                {lang === "en" ? "Wireframe preview" : "Xem wireframe"}
              </div>
              <div className="mt-2" style={{ fontFamily: "Fraunces, serif", fontSize: "1.5rem", lineHeight: 1.2 }}>
                {activeWireframe.title}
              </div>
            </div>
            <div className="px-5 pb-5 sm:px-7 sm:pb-7">
              <div className="overflow-auto rounded-2xl" style={{ backgroundColor: "#fafaf6", maxHeight: "78vh" }}>
                <img
                  src={activeWireframe.src}
                  alt={activeWireframe.title}
                  className="block w-full h-auto"
                  style={{ minWidth: 720 }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FINAL UI PREVIEW */}
      <Section id="ui" bg={GREEN_LIGHT}>
        <Tag>{t.ui.tag}</Tag>
        <H2>{t.ui.title}</H2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 mt-12">
          {REAL_SCREENS.map((s, i) => {
            const copy = s[lang];
            return (
              <motion.div
                key={copy.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
              >
                <RealPhone Component={s.Component} title={copy.t} desc={copy.d} />
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* REFLECTION + FOOTER */}
      <Section bg={INK} text="#fff">
        <Tag color={GREEN}>{t.reflection.tag}</Tag>
        <p
          style={{
            fontFamily: "Fraunces, serif",
            fontWeight: 400,
            fontSize: "clamp(1.5rem, 2.6vw, 2.4rem)",
            lineHeight: 1.3,
            maxWidth: "60ch",
          }}
        >
          {t.reflection.body}
        </p>
        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="#"
            className="group inline-flex items-center gap-4 rounded-full pl-7 pr-2 py-2.5 text-sm transition-all duration-300"
            style={{ backgroundColor: GREEN, color: "#fff" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = GREEN_DARK;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = GREEN;
            }}
          >
            <span>{t.reflection.cta1}</span>
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45"
              style={{ backgroundColor: "#fff", color: GREEN_DARK }}
            >
              <ArrowUpRight size={18} />
            </span>
          </a>
          <a
            href="#case/murror"
            className="group inline-flex items-center gap-4 rounded-full pl-7 pr-2 py-2.5 text-sm transition-all duration-300"
            style={{
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = GREEN;
              e.currentTarget.style.borderColor = GREEN;
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              e.currentTarget.style.color = "#fff";
            }}
          >
            <span>{t.reflection.cta2}</span>
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45"
              style={{ backgroundColor: "#fff", color: GREEN_DARK }}
            >
              <ArrowUpRight size={18} />
            </span>
          </a>
        </div>
        <div
          className="mt-16 pt-8 flex flex-wrap items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }}
        >
          <div>© 2025 Huỳnh Minh Huy · Ăng Ăng Case Study</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Behance
            </a>
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white">
              Email
            </a>
            <a href="#" className="hover:text-white">
              Resume
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
