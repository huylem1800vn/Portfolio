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
  Maximize2,
  X,
  Briefcase,
  Timer,
  Wrench,
  UserCircle,
  ChevronRight,
  Layers,
  Palette,
  PenTool,
  Award,
} from "lucide-react";
import { useI18n } from "../../i18n";
import { CaseNav } from "./CaseNav";
import { scrollToCaseSection } from "./scrollToCaseSection";
import { NextProjectFooter } from "./NextProjectFooter";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import Onboarding from "../../../imports/Onboarding/Onboarding";
import HomeScreen from "../../../imports/Home/Home";
import Reviewer from "../../../imports/Reviewer/Reviewer";
import BanDo from "../../../imports/BảnDồ/BảnDồ";
import CamXuc from "../../../imports/CảmXuc/CảmXuc";
import LocalProfile from "../../../imports/LocalProfile/LocalProfile";
import VerifiedProfile from "../../../imports/VertifiedProfile/VertifiedProfile";
import BrandIdentityLogo from "../../../imports/AngAngBrand/BrandIdentityLogo";
import logoMarkPath from "../../../imports/AngAngBrand/logo-mark-path";
import { CV_URL } from "../../config/links";
import { BAO_TRAN_PERSONA_AVATAR_URL, DUY_KHOI_PERSONA_AVATAR_URL } from "../../config/persona-avatars";
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
    goals: {
      tag: "( 03 · Research Goals )",
      title: "What the research needed to uncover before any screen could be justified",
      intro:
        "Before moving into product direction, the research focused on clarifying the real situations, triggers, trust gaps, and decision criteria behind how young users choose where to eat.",
      questions: [
        "In what situations do users usually search for restaurants?",
        "What factors influence their restaurant choice the most?",
        "What makes them hesitate before choosing a place?",
        "Which information sources do they currently trust or distrust?",
        "What product opportunities could help users make better food decisions?",
      ],
    },
    process: {
      tag: "( 04 · Research Process )",
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
    secondaryResearch: {
      tag: "( 05 · Nghiên cứu thứ cấp )",
      title: "Market signals that confirm this problem is worth solving",
      intro:
        "A synthesis of public market reports and desk research helped validate both the scale of the food category and the trust gaps users face before making a choice.",
      summary:
        "This step was important because Ăng Ăng is not only responding to a user pain point. It is also entering a category where demand is already strong, user spending is rising, and trust in review quality still feels fragile.",
      items: [
        {
          stat: "590,000B VND",
          body: "Vietnam's F&B industry reached more than 590,000 billion VND in revenue in 2023, up 11.47%.",
          source: "Source · iPOS",
        },
        {
          stat: "14.9%",
          body: "More users are willing to spend above 100,000 VND for a dinner meal, showing a stronger appetite for eating out.",
          source: "Source · market synthesis",
        },
        {
          stat: "1.4B USD",
          body: "Vietnam's food delivery GMV reached 1.4 billion USD in 2023, reflecting how deeply digital food behavior has grown after COVID.",
          source: "Source · Momentum Works",
        },
        {
          stat: "87%",
          body: "Users still read reviews before deciding, but fake or low-trust reviews continue to weaken confidence in the final choice.",
          source: "Source · desk research synthesis",
        },
      ],
    },
    primaryResearch: {
      tag: "( 06 · Khảo sát và phỏng vấn )",
      title: "What users kept repeating once the conversations became concrete",
      intro:
        "Primary research helped move the project from broad market understanding into real user behavior. The goal was not just to hear what people say they want, but to trace how they actually compare, validate, and finally choose a place.",
      clusters: [
        {
          title: "Decision contexts",
          body:
            "Restaurant search happens in different emotional and practical moments: quick lunch, after-work dinner, date night, group gathering, weekend exploration, or finding something nearby right now.",
        },
        {
          title: "Trusted inputs",
          body:
            "Users rarely rely on one source. They cross-check Google Maps, social media, review apps, delivery apps, and recommendations from friends before feeling safe enough to decide.",
        },
        {
          title: "Repeated friction",
          body:
            "Many options feel visually similar, reviews can be noisy or outdated, and users often struggle to compare whether a place is truly right for the current occasion.",
        },
        {
          title: "Missing cues",
          body:
            "The biggest gap is not more listings. It is practical context: whether the place is open, crowded, worth the price, suitable for the vibe, and still reliable at this moment.",
        },
      ],
    },
    competitors: {
      tag: "( 07 · Competitor Analysis )",
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
      tag: "( 08 · Target Users )",
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
      tag: "( 09 · Key Insights )",
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
      tag: "( 10 · Persona Synthesis )",
      title: "Two representative archetypes synthesized from recurring research patterns",
      note:
        "Instead of showing one fictional user in isolation, these personas combine the strongest patterns that repeatedly appeared across interview and survey responses.",
      cards: [
        {
          title: "Persona 1 · Busy professionals",
          name: "Nguyen Hoang Bao Tran",
          role: "25 · Office worker in Ho Chi Minh City",
          demographic: [
            "Works and lives in Ho Chi Minh City",
            "Often eats lunch or dinner near the office",
            "Has a medium-to-comfortable budget",
          ],
          context:
            "Usually has very limited time and wants a meal that is quick, filling, and nearby. Often eats with colleagues or a small work-related group.",
          userStory:
            "As a busy office worker, I want to find a nearby restaurant with fast service and a reasonable price so I can avoid being late while still eating something that fits my taste.",
          goal: "Find a suitable place in under 5 minutes and keep travel time under 10 minutes.",
          gainPoints:
            "Recommendations that feel accurate to their taste, clear information, and a direct path to a decision without comparing too many options.",
          painPoints:
            "Generic recommendations, inaccurate real-world information, not knowing whether there are seats, and reviews that look polished but do not reflect the actual experience.",
          personality:
            "Practical, speed-oriented, not very exploratory when busy, but likely to stay loyal if the app keeps making the right call.",
        },
        {
          title: "Persona 2 · Students, young couples, and curious explorers",
          name: "Tran Duy Khoi",
          role: "20 · Student and social explorer",
          demographic: [
            "Student or young couple",
            "Limited budget",
            "Easily influenced by TikTok trends and community buzz",
          ],
          context:
            "Often gathers with friends or goes on casual dates and ends up not knowing what to eat. Enjoys trying new places and choosing spaces that feel fun, photogenic, or worth sharing.",
          userStory:
            "As a student or a young person going out with friends or a partner, I want suggestions that match my mood and budget, with trustworthy photos and reviews, so I can enjoy the outing without worrying that the place will disappoint us.",
          goal: "Discover well-rated new places that feel near enough and affordable enough to decide within 5 to 15 minutes.",
          gainPoints:
            "Mood-based suggestions, deals or promotions, good check-in spots, and shared lists that make group discovery feel exciting.",
          painPoints:
            "Missing or inaccurate information, places that look closed or inactive in reality, and suggestions that do not match the actual vibe they are looking for.",
          personality:
            "Curious, FOMO-driven, likes personalization, and is strongly influenced by social proof and community signals.",
        },
      ],
    },
    journey: {
      tag: "( 11 · Hành trình người dùng )",
      title: "From the first craving to the feeling after the meal",
      intro:
        "The research board splits the journey into two real decision patterns instead of one generic flow. One is driven by speed and practicality, while the other is driven by mood, social context, and the desire to discover somewhere worth going.",
      maps: [
        {
          title: "Journey 1 · Busy office worker choosing a fast nearby meal",
          persona: "Nguyen Hoang Bao Tran",
          summary:
            "A practical flow where the user wants to make a quick decision with minimal risk, limited time, and clear trust signals before leaving the office.",
          stages: [
            { s: "Trigger", a: "Feels hungry during a workday and needs a quick lunch or dinner plan.", th: "“I need something nearby and reliable.”", p: "Time pressure starts immediately.", o: "Entry point based on time, distance, and solo or coworker mode." },
            { s: "Search nearby", a: "Looks for restaurants around the office area.", th: "“Show me what is actually close.”", p: "Too many nearby options still feel noisy.", o: "Distance-first discovery with fast-service cues." },
            { s: "Scan essentials", a: "Checks price range, food type, opening hours, and estimated travel time.", th: "“Can I get there, eat, and come back on time?”", p: "Key practical details are often scattered.", o: "Condensed decision cards with the essentials up front." },
            { s: "Validate trust", a: "Glances at recent reviews and real photos to avoid bad surprises.", th: "“Is this information still trustworthy?”", p: "Polished but outdated reviews reduce confidence.", o: "Recent review highlights and signals from verified visits." },
            { s: "Decide fast", a: "Picks one place and heads there.", th: "“I just want to feel safe choosing this.”", p: "Still worries about making the wrong call under time pressure.", o: "Reason-based recommendation with confidence cues." },
            { s: "Eat and reflect", a: "Experiences the restaurant and judges whether it matched the promise.", th: "“Would I come back here next time?”", p: "Expectation can still miss reality.", o: "Lightweight feedback loop and save-as-go-to-place behavior." },
          ],
        },
        {
          title: "Journey 2 · Student or young couple exploring for mood and vibe",
          persona: "Tran Duy Khoi",
          summary:
            "A more exploratory journey where the user is not only trying to eat, but also trying to match a mood, budget, and social moment with a place that feels worth the outing.",
          stages: [
            { s: "Plan the outing", a: "Starts with a casual plan to hang out, date, or gather with friends.", th: "“We want somewhere fun, not just somewhere to eat.”", p: "The need is emotional, not only functional.", o: "Occasion-based starting points such as date night, chill, group hangout, or comfort food." },
            { s: "Browse inspiration", a: "Looks through photos, trending places, and community recommendations.", th: "“What feels exciting right now?”", p: "Inspiration sources are fragmented across apps.", o: "Discovery feed that blends trend, vibe, and food categories." },
            { s: "Match budget and mood", a: "Narrows down options by price, atmosphere, and distance.", th: "“It has to be fun but still affordable.”", p: "Many places look attractive but do not match the real budget or vibe.", o: "Filters and tags for budget, mood, and social setting." },
            { s: "Check social proof", a: "Reads reviews, checks photos, and looks for signs the place is still active.", th: "“Does this place really look like that in real life?”", p: "Trust drops when photos and reviews feel staged or old.", o: "Authentic photo signals, recent activity, and vibe-focused review snippets." },
            { s: "Align with the group", a: "Shares options with friends or a partner and tries to agree on one choice.", th: "“Can we decide without talking in circles?”", p: "Group decision making creates friction and delays.", o: "Shortlist, share, and lightweight voting tools." },
            { s: "Go, post, remember", a: "Visits the place, takes photos, and remembers whether it was worth recommending.", th: "“Was it as fun as it looked?”", p: "The outing can disappoint if the real atmosphere is flat.", o: "Post-visit memory cues, saved lists, and future recommendations by vibe." },
          ],
        },
      ],
    },
    hmw: {
      tag: "( 12 · How Might We )",
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
      tag: "( 13 · Research to Design )",
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
      tag: "( 14 · Brand Identity )",
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
      tag: "( 15 · Color System )",
      title: "A full token based palette built around the Ăng Ăng green",
      desc:
        "Primary 500 (#9dd325) anchors the logo, main CTAs, active states, and highlights. Neutral supports text and surfaces, while Success, Warning, Error, Info, and Secondary help with feedback and category cues. Each palette comes with a full 50 to 950 scale so every component can rely on a proper token.",
      brandLabel: "Brand color",
      shadeLabel: "Shade",
      hexLabel: "HEX",
    },
    typo: {
      tag: "( 16 · Typography )",
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
      tag: "( 17 · Grid System )",
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
      tag: "( 18 · Component System )",
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
      tag: "( 19 · Icon & Illustration )",
      title: "A lightweight icon language with small supporting brand moments",
      body:
        "The visual support system stays compact and functional. Icons use a simple rounded style for fast scanning on mobile, while small illustration-like accents from the color system help highlight mood, trust, and food context without overpowering the interface.",
    },
    wireframe: {
      tag: "( 20 · Wireframes )",
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
      tag: "( 21 · Final UI Preview )",
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
      tag: "( 22 · Điều em rút ra )",
      body:
        "This project helped me see that food discovery is not just about showing more options. A better experience should ease uncertainty, bring the right context into view, and help people choose with more confidence based on their mood, their moment, and the people they are with.",
      cta1: "Back to Portfolio",
      cta2: "Next Project · HD Bank Business",
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
    badge: "UX Research + Design System · 2025 · Concept ứng dụng di động",
    title: "Ăng Ăng · Nghiên cứu UX về hành vi chọn quán ăn",
    concept: "DECIDE",
    headline:
      "Giúp người dùng trẻ chọn nơi ăn uống nhanh hơn, ít rối hơn và có nhiều ngữ cảnh đáng tin hơn.",
    description:
      "Ăng Ăng là case study tìm hiểu cách người trẻ tại TP.HCM chọn quán ăn. Từ nghiên cứu, em thiết kế một ứng dụng giúp họ thu hẹp lựa chọn, xem đánh giá đúng với nhu cầu và biết thêm tình trạng thực tế của quán trước khi quyết định.",
    cta1: "Xem nghiên cứu",
    cta2: "Xem hệ thống thiết kế",
    meta: [
      { k: "Loại dự án", v: "UX Research · Concept Mobile App" },
      { k: "Người dùng", v: "Người trẻ tại TP.HCM · 19–33" },
      { k: "Trọng tâm", v: "Hành vi ra quyết định chọn quán" },
      { k: "Vai trò", v: "Nghiên cứu · Định nghĩa vấn đề · Hành trình người dùng · Insight · UI · Hệ thống thiết kế" },
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
    goals: {
      tag: "( 03 · Mục tiêu nghiên cứu )",
      title: "Những điều em cần hiểu trước khi bắt đầu thiết kế",
      intro:
        "Trước khi nghĩ đến tính năng, em tìm hiểu người dùng thường chọn quán trong hoàn cảnh nào, điều gì khiến họ chần chừ và nguồn thông tin nào đang ảnh hưởng tới quyết định của họ.",
      questions: [
        "Người dùng thường tìm quán ăn trong những tình huống nào?",
        "Những yếu tố nào ảnh hưởng mạnh nhất đến quyết định chọn quán?",
        "Điều gì khiến họ phân vân trước khi chốt một địa điểm?",
        "Họ đang tin hoặc không tin nguồn thông tin nào?",
        "Cơ hội sản phẩm nào có thể giúp người dùng ra quyết định tốt hơn?",
      ],
    },
    process: {
      tag: "( 04 · Quá trình nghiên cứu )",
      title: "Quá trình em đi từ dữ liệu nghiên cứu đến hướng thiết kế",
      steps: [
        { t: "Nghiên cứu thứ cấp", d: "Hiểu bối cảnh và hành vi khám phá ăn uống hiện tại." },
        { t: "Phân tích đối thủ", d: "Xem các app ăn uống, giao đồ ăn, bản đồ và review." },
        { t: "Khảo sát / Phỏng vấn", d: "Hành vi, nỗi đau, yếu tố ra quyết định." },
        { t: "Nhóm hoá dữ liệu", d: "Gom các điểm lặp lại thành từng chủ đề rõ ràng." },
        { t: "Persona", d: "Phác lại hai chân dung người dùng tiêu biểu." },
        { t: "Hành trình người dùng", d: "Nhìn lại từng bước họ đi qua trước khi chốt quán." },
        { t: "Tổng hợp insight", d: "Rút ra những điều thực sự chi phối quyết định." },
        { t: "Cơ hội thiết kế", d: "Biến insight thành hướng đi cụ thể cho sản phẩm." },
      ],
    },
    secondaryResearch: {
      tag: "( 05 · Secondary Research )",
      title: "Dữ liệu thị trường cho thấy nhu cầu ăn ngoài và tìm quán vẫn đang tăng",
      intro:
        "Em xem các báo cáo công khai để hiểu quy mô thị trường ăn uống, mức chi tiêu cho việc ăn ngoài và thói quen tìm kiếm thông tin trước khi chọn quán.",
      summary:
        "Các số liệu cho thấy thị trường đang phát triển nhưng người dùng vẫn chưa hoàn toàn tin vào thông tin mình đọc được. Đây là cơ sở để em tiếp tục tìm hiểu cách họ so sánh và quyết định chọn quán.",
      items: [
        {
          stat: "590.000 tỷ đồng",
          body: "Ngành F&B Việt Nam năm 2023 đạt doanh thu hơn 590.000 tỷ đồng, tăng 11,47%.",
          source: "Nguồn · iPOS",
        },
        {
          stat: "14,9%",
          body: "Người Việt ngày càng chi nhiều hơn cho ăn ngoài, với 14,9% sẵn sàng chi trên 100.000đ cho một bữa tối.",
          source: "Nguồn · tổng hợp dữ liệu thị trường",
        },
        {
          stat: "1,4 tỷ USD",
          body: "GMV giao đồ ăn tại Việt Nam đạt 1,4 tỷ USD trong năm 2023, cho thấy hành vi ăn uống số đã tăng mạnh sau COVID.",
          source: "Nguồn · Momentum Works",
        },
        {
          stat: "87%",
          body: "Người dùng vẫn đọc review trước khi chốt quán, nhưng cảm giác hoài nghi về review giả vẫn khiến họ khó yên tâm khi quyết định.",
          source: "Nguồn · tổng hợp nghiên cứu thứ cấp",
        },
      ],
    },
    primaryResearch: {
      tag: "( 06 · Primary Research )",
      title: "Những vấn đề người dùng nhắc lại trong khảo sát và phỏng vấn",
      intro:
        "Sau khi hiểu bối cảnh thị trường, em tập trung vào những lần chọn quán thực tế của người dùng: họ bắt đầu tìm ở đâu, kiểm tra thông tin nào, so sánh ra sao và điều gì khiến họ quyết định hoặc bỏ qua một địa điểm.",
      clusters: [
        {
          title: "Ngữ cảnh ra quyết định",
          body:
            "Việc tìm quán không chỉ xảy ra trong một tình huống duy nhất mà trải dài từ ăn trưa nhanh, ăn tối sau giờ làm, hẹn hò, tụ tập nhóm, đi chơi cuối tuần cho tới lúc cần tìm một nơi gần ngay bây giờ.",
        },
        {
          title: "Nguồn thông tin được tin",
          body:
            "Người dùng hiếm khi tin vào một nơi duy nhất. Họ thường phải đi qua Google Maps, mạng xã hội, app review, app giao đồ ăn và cả lời gợi ý từ bạn bè rồi mới thấy đủ yên tâm để chọn.",
        },
        {
          title: "Điểm nghẽn lặp lại",
          body:
            "Nhiều quán trông giống nhau, review dễ nhiễu hoặc cũ, và người dùng thường gặp khó khi so sánh xem quán nào thật sự hợp với đúng dịp mình đang cần.",
        },
        {
          title: "Ngữ cảnh còn thiếu",
          body:
            "Khoảng trống lớn nhất không nằm ở chuyện thiếu quán để xem, mà nằm ở chỗ thiếu những tín hiệu rất đời thường: quán còn mở không, có đông không, có đáng tiền không, có đúng không khí mình đang cần không, và lúc này còn đáng tin hay không.",
        },
      ],
    },
    competitors: {
      tag: "( 07 · Phân tích đối thủ )",
      title: "Các nền tảng hiện tại hỗ trợ tốt bước nào và còn thiếu điều gì",
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
        "Các nền tảng hiện tại giúp người dùng tìm thấy nhiều quán, nhưng chưa hỗ trợ đầy đủ việc chọn theo tâm trạng, dịp đi ăn, người đi cùng và tình trạng thực tế của quán.",
    },
    users: {
      tag: "( 08 · Người dùng mục tiêu )",
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
      tag: "( 09 · Insight chính )",
      title: "Bốn phát hiện chính định hướng cho sản phẩm",
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
          t: "Nhiễu từ review",
          d:
            "Người dùng vẫn đọc review, nhưng không chắc review đó có thật, còn mới hay có liên quan đến đúng nhu cầu của mình hay không.",
          impl:
            "Review nên được gắn với từng bối cảnh cụ thể như hẹn hò, đi nhóm, ăn nhanh, ngân sách thấp, yên tĩnh hay đẹp để chụp ảnh.",
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
            "Có thể mở ra một hành trình khám phá theo tâm trạng như chill, hẹn hò, ăn nhanh, đồ ăn chữa lành, đi nhóm hay thử điều mới.",
        },
      ],
    },
    persona: {
      tag: "( 10 · Persona tổng hợp )",
      title: "Hai persona đại diện cho hai cách chọn quán khác nhau",
      note:
        "Em tổng hợp những hành vi xuất hiện nhiều trong khảo sát và phỏng vấn thành hai persona: một người cần quyết định nhanh trong ngày làm việc và một người ưu tiên trải nghiệm khi đi cùng bạn bè hoặc người yêu.",
      cards: [
        {
          title: "Persona 1 · Người đi làm bận rộn",
          name: "Nguyễn Hoàng Bảo Trân",
          role: "25 tuổi · Nhân viên văn phòng tại TP.HCM",
          demographic: [
            "Sống và làm việc tại TP.HCM",
            "Thường ăn trưa hoặc ăn tối gần công ty",
            "Thu nhập trung bình đến khá",
          ],
          context:
            "Quỹ thời gian ít, muốn ăn nhanh, đủ no, ở gần. Thường đi cùng đồng nghiệp hoặc một nhóm đối tác nhỏ.",
          userStory:
            "Là người đi làm bận rộn, em muốn tìm quán gần, phục vụ nhanh, giá hợp lý để không trễ giờ mà vẫn ăn đúng gu.",
          goal: "Tìm được quán phù hợp trong dưới 5 phút, với thời gian di chuyển không quá 10 phút.",
          gainPoints:
            "Gợi ý sát gu, thông tin rõ ràng và đi thẳng tới quyết định mà không phải tốn nhiều công so sánh.",
          painPoints:
            "Gợi ý còn chung chung, thông tin sai thực tế, không biết quán còn chỗ hay không, và nhiều review trông đẹp nhưng không đúng.",
          personality:
            "Thực dụng, ưu tiên tốc độ, ít khám phá khi đang bận, nhưng sẵn sàng trung thành nếu app đoán đúng nhu cầu.",
        },
        {
          title: "Persona 2 · HSSV và các cặp đôi ưa khám phá",
          name: "Trần Duy Khôi",
          role: "20 tuổi · Sinh viên và người thích đi ăn cùng bạn bè",
          demographic: [
            "Sinh viên hoặc người trẻ đang hẹn hò",
            "Ngân sách còn hạn chế",
            "Dễ bị ảnh hưởng bởi xu hướng trên TikTok và cộng đồng",
          ],
          context:
            "Hay tụ tập bạn bè hoặc đi hẹn hò và thường rơi vào cảnh không biết ăn gì. Thích thử món mới, thích không gian đẹp và có cảm giác vui khi khám phá.",
          userStory:
            "Là sinh viên hoặc người trẻ đi ăn cùng bạn bè hay người yêu, em muốn được gợi ý theo tâm trạng và ngân sách, có ảnh thật và đánh giá thật để đi ăn cho vui mà không sợ hớ.",
          goal: "Khám phá quán mới rating cao, gần và hợp túi tiền, rồi ra quyết định trong khoảng 5 đến 15 phút.",
          gainPoints:
            "Gợi ý hợp tâm trạng, có ưu đãi, có chỗ check-in đẹp và có thể lưu hoặc chia sẻ để cả nhóm cùng xem.",
          painPoints:
            "Thông tin thiếu chính xác, quán ngoài đời không giống kỳ vọng, hoặc gợi ý không liên quan đến vibe đang muốn tìm.",
          personality:
            "Tò mò, dễ FOMO, thích cảm giác cá nhân hoá và bị ảnh hưởng khá mạnh bởi tín hiệu xã hội cùng cộng đồng.",
        },
      ],
    },
    journey: {
      tag: "( 11 · User Journey )",
      title: "Hành trình từ lúc phát sinh nhu cầu đến sau khi trải nghiệm quán",
      intro:
        "Dữ liệu cho thấy hai nhóm người dùng không chọn quán theo cùng một cách. Người đi làm ưu tiên thời gian và độ chắc chắn, trong khi sinh viên hoặc cặp đôi quan tâm nhiều hơn đến tâm trạng, ngân sách và trải nghiệm đi cùng nhau.",
      maps: [
        {
          title: "Hành trình 1 · Người đi làm bận rộn cần chọn quán nhanh và gần",
          persona: "Nguyễn Hoàng Bảo Trân",
          summary:
            "Người dùng muốn tìm một quán gần, chốt nhanh và có đủ thông tin đáng tin trước khi rời công ty.",
          stages: [
            { s: "Khởi phát nhu cầu", a: "Bắt đầu thấy đói trong ngày làm việc và cần lên kế hoạch ăn trưa hoặc ăn tối nhanh.", th: "“Mình cần một chỗ gần và đáng tin.”", p: "Áp lực thời gian xuất hiện ngay từ đầu.", o: "Điểm vào theo khung giờ, khoảng cách và ngữ cảnh đi một mình hay đi cùng đồng nghiệp." },
            { s: "Tìm quán gần", a: "Tìm các quán quanh khu vực công ty.", th: "“Cho mình thấy những chỗ thật sự gần.”", p: "Dù ở gần vẫn có quá nhiều lựa chọn gây nhiễu.", o: "Khám phá ưu tiên khoảng cách kèm tín hiệu phục vụ nhanh." },
            { s: "Quét thông tin cốt lõi", a: "Xem giá, loại món, giờ mở cửa và thời gian di chuyển.", th: "“Mình có kịp đi, ăn rồi quay lại không?”", p: "Thông tin thiết yếu thường bị rải rác.", o: "Thẻ quyết định ngắn gọn gom các dữ liệu cần nhất lên đầu." },
            { s: "Xác thực độ tin cậy", a: "Lướt review gần đây và ảnh thật để tránh chọn nhầm.", th: "“Thông tin này còn đáng tin không?”", p: "Review trông ổn nhưng cũ dễ làm người dùng chùn lại.", o: "Review gần đây, review xác minh ghé thăm và tín hiệu thực tế." },
            { s: "Ra quyết định nhanh", a: "Chọn một quán và đi ngay.", th: "“Mình chỉ muốn yên tâm là chọn đúng.”", p: "Vẫn có cảm giác lo chọn sai khi đang vội.", o: "Gợi ý có lý do và tín hiệu tự tin trước khi chốt." },
            { s: "Ăn xong và ghi nhớ", a: "Trải nghiệm tại quán và tự đánh giá xem có nên quay lại không.", th: "“Lần sau mình có tiếp tục chọn quán này không?”", p: "Kỳ vọng vẫn có thể lệch khỏi thực tế.", o: "Vòng phản hồi nhanh và hành vi lưu quán quen cho lần sau." },
          ],
        },
        {
          title: "Hành trình 2 · Sinh viên hoặc cặp đôi tìm quán theo tâm trạng và trải nghiệm",
          persona: "Trần Duy Khôi",
          summary:
            "Người dùng không chỉ tìm chỗ ăn mà còn muốn địa điểm phù hợp với tâm trạng, ngân sách và không khí của buổi đi chơi.",
          stages: [
            { s: "Lên ý định đi chơi", a: "Bắt đầu từ một buổi hẹn, buổi tụ tập hoặc đơn giản là muốn đổi gió đi ăn ngoài.", th: "“Tụi mình cần một nơi vui chứ không chỉ là chỗ ăn.”", p: "Nhu cầu mang tính cảm xúc nhiều hơn chức năng.", o: "Điểm vào theo dịp như hẹn hò, chill, đi nhóm hay ăn cho đỡ buồn." },
            { s: "Tìm cảm hứng", a: "Xem ảnh, quán trend và gợi ý từ cộng đồng.", th: "“Chỗ nào đang thấy thú vị nhỉ?”", p: "Nguồn cảm hứng bị phân mảnh trên nhiều nền tảng.", o: "Feed khám phá kết hợp trend, vibe và món ăn." },
            { s: "Lọc theo ngân sách và tâm trạng", a: "Thu hẹp lựa chọn theo giá, không gian và khoảng cách.", th: "“Phải vui nhưng vẫn vừa túi tiền.”", p: "Nhiều nơi nhìn hấp dẫn nhưng không đúng ngân sách hoặc không đúng không khí thật.", o: "Bộ lọc và tag theo ngân sách, tâm trạng và bối cảnh đi cùng ai." },
            { s: "Kiểm tra tín hiệu xã hội", a: "Đọc đánh giá, xem ảnh và kiểm tra xem quán còn hoạt động tốt không.", th: "“Ngoài đời có thật sự giống như vậy không?”", p: "Niềm tin giảm mạnh khi ảnh và review trông dàn dựng hoặc đã quá cũ.", o: "Ảnh thật, tín hiệu hoạt động gần đây và review nhấn vào không khí của quán." },
            { s: "Chốt cùng bạn đi cùng", a: "Gửi option cho bạn bè hoặc người yêu rồi cùng chốt một quán.", th: "“Làm sao chọn nhanh mà không bàn mãi?”", p: "Quyết định theo nhóm dễ kéo dài và gây mệt.", o: "Shortlist, chia sẻ và vote nhẹ để chốt nhanh hơn." },
            { s: "Đi ăn và lưu lại cảm xúc", a: "Đến quán, chụp hình, trải nghiệm và ghi nhớ xem có đáng giới thiệu không.", th: "“Nó có vui như mình tưởng không?”", p: "Buổi đi chơi dễ hụt nếu không khí thật không như kỳ vọng.", o: "Gợi nhớ sau trải nghiệm, danh sách lưu lại và gợi ý tiếp theo theo vibe." },
          ],
        },
      ],
    },
    hmw: {
      tag: "( 12 · How Might We )",
      title: "Từ các phát hiện, em đặt ra năm câu hỏi thiết kế",
      items: [
        "Làm sao giảm choáng ngợp lựa chọn khi tìm quán?",
        "Làm sao giúp người dùng tin tưởng thông tin quán dễ dàng hơn?",
        "Làm sao gợi ý quán theo tâm trạng, dịp đi ăn và ngữ cảnh thời gian thực?",
        "Làm sao giúp nhóm bạn quyết định nhanh hơn?",
        "Làm sao biến khám phá ăn uống thành quyết định tự tin?",
      ],
    },
    mapping: {
      tag: "( 13 · Từ nghiên cứu đến thiết kế )",
      title: "Cách em chuyển từng phát hiện thành hướng giải quyết cụ thể",
      cols: ["Phát hiện nghiên cứu", "Cơ hội thiết kế", "Tính năng khả thi"],
      rows: [
        ["Quá nhiều lựa chọn", "Lọc theo ngữ cảnh", "Lọc theo tâm trạng, dịp, ngân sách, khoảng cách, số người"],
        ["Mất niềm tin vào review", "Cấu trúc review minh bạch", "Gắn ngữ cảnh, review gần đây, xác minh ghé thăm"],
        ["Thiếu thông tin thời gian thực", "Tín hiệu quyết định thực tế", "Đang mở, đông/vắng, thời gian chờ, ghế trống"],
        ["Quyết định nhóm khó", "Hỗ trợ chốt cùng nhau", "Danh sách rút gọn, vote nhóm, chia sẻ danh sách"],
        ["Nhu cầu theo tâm trạng", "Hành trình khám phá cảm xúc", "Onboarding “Bạn đang muốn ăn gì?”"],
      ],
    },
    brand: {
      tag: "( 14 · Bộ nhận diện )",
      title: "Bộ nhận diện tạo cảm giác tươi mới, gần gũi và dễ ghi nhớ",
      logoCaption: "Logo chính của Ăng Ăng với wordmark dùng font Baloo Bhaijaan",
      keywordsLabel: "Từ khoá thương hiệu",
      keywords: ["Tươi mới", "Thân thiện", "Trẻ trung", "Đơn giản", "Gần gũi", "Đáng tin", "Dễ quyết định"],
      toneLabel: "Tinh thần thị giác",
      tone:
        "Em chọn màu xanh #9DD325 vì sắc độ sáng tạo cảm giác tươi, trẻ và gần với chủ đề ẩm thực. Màu này đủ nổi bật cho nút chính, trạng thái được chọn và những thông tin cần chú ý. Khi kết hợp với nền trắng cùng kiểu chữ bo tròn, giao diện giữ được cảm giác thân thiện mà vẫn rõ ràng và dễ đọc.",
      moodLabel: "Bảng cảm hứng",
    },
    color: {
      tag: "( 15 · Color System )",
      title: "Bảng màu được phát triển từ sắc xanh chủ đạo của Ăng Ăng",
      desc:
        "Màu Primary 500 (#9DD325) được dùng cho logo, nút chính, trạng thái đang chọn và các điểm nhấn quan trọng. Nhóm màu trung tính dành cho chữ và bề mặt; các màu Success, Warning, Error và Info giúp phân biệt từng loại phản hồi. Mỗi nhóm có nhiều sắc độ để dùng nhất quán trong các trạng thái khác nhau.",
      brandLabel: "Màu thương hiệu",
      shadeLabel: "Sắc độ",
      hexLabel: "HEX",
    },
    typo: {
      tag: "( 16 · Typography )",
      title: "SF Pro giúp nội dung rõ ràng và quen thuộc trên màn hình điện thoại",
      body:
        "Em chọn SF Pro vì kiểu chữ này dễ đọc ở nhiều kích cỡ và phù hợp với giao diện di động. Hệ chữ được chia theo cấp rõ ràng để người dùng có thể quét nhanh tên quán, giá, khoảng cách và trạng thái.",
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
      tag: "( 17 · Grid System )",
      title: "Hệ lưới giúp các màn hình giữ cùng một nhịp căn chỉnh",
      desc:
        "Ăng Ăng dùng lưới 4 cột cho màn hình điện thoại và lưới 6 cột cho bố cục rộng hơn. Cả hai cùng dùng lề 12px, khoảng cách cột 12px và nhịp dọc 8px để các thành phần luôn thẳng hàng.",
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
      tag: "( 18 · Hệ thống thành phần )",
      title: "Các thành phần được xây dựng để có thể dùng lại trên nhiều màn hình",
      desc:
        "Các thành phần như nút bấm, ô nhập, badge và nhóm lựa chọn được xác định sẵn về kích thước, kiểu hiển thị và trạng thái. Nhờ vậy, khi thêm màn hình hoặc luồng mới, giao diện vẫn giữ được cách sử dụng thống nhất.",
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
      labels: { variants: "Biến thể", sizes: "Kích thước", states: "Trạng thái" },
      totalLabel: "Tổng số trạng thái có thể tạo",
    },
    icons: {
      tag: "( 19 · Icon & Minh hoạ )",
      title: "Icon đơn giản giúp người dùng nhận biết chức năng nhanh hơn",
      body:
        "Icon dùng nét bo tròn và hình dạng quen thuộc để dễ nhận biết trên màn hình nhỏ. Các chi tiết minh họa chỉ được dùng ở những nơi cần thể hiện tâm trạng, độ tin cậy hoặc bối cảnh ăn uống, tránh làm lấn át thông tin chính.",
    },
    wireframe: {
      tag: "( 20 · Wireframe )",
      title: "Em dùng wireframe giấy để kiểm tra bố cục và luồng chọn quán",
      body:
        "Trước khi thiết kế giao diện hoàn chỉnh, em phác các màn hình chính trên giấy để thử cách sắp xếp thông tin, thanh điều hướng và thứ tự người dùng đi qua từng bước.",
      items: [
        { src: wireframeHome, t: "Trang chủ · Điểm vào theo tâm trạng", d: "Lời chào, thanh tìm kiếm, chips tâm trạng, quán gần đây và banner." },
        { src: wireframeNav, t: "Bố cục & thanh điều hướng dưới", d: "Khung app, vùng hero, khối nội dung, bottom nav 5 tab." },
        { src: wireframeDetail, t: "Chi tiết quán", d: "Ảnh bìa, headline, highlight, review theo ngữ cảnh, social proof." },
        { src: wireframeProfile, t: "Biến thể hồ sơ", d: "Hồ sơ người dùng thường và hồ sơ đã xác thực, cùng vị trí huy hiệu và các tín hiệu tạo cảm giác tin cậy." },
        { src: wireframeExplore, t: "Khám phá & so sánh", d: "So sánh dạng thẻ với tâm trạng, giá và khoảng cách." },
        { src: wireframeReviewer, t: "Verified Reviewer", d: "Banner logo, danh sách quyền lợi và CTA cho màn onboarding tạo niềm tin." },
      ],
    },
    ui: {
      tag: "( 21 · Giao diện hoàn chỉnh )",
      title: "Giao diện hoàn chỉnh thể hiện các quyết định đã rút ra từ nghiên cứu",
      screens: [
        { t: "Home", d: "Điểm vào theo tâm trạng + feed cá nhân hoá" },
        { t: "Explore", d: "Lọc thông minh · dịp · ngân sách" },
        { t: "Khám phá theo tâm trạng", d: "“Bạn đang muốn ăn gì?”" },
        { t: "Chi tiết quán", d: "Trạng thái thời gian thực + review theo ngữ cảnh" },
        { t: "Map", d: "Đông/vắng + đang mở" },
        { t: "Reviews", d: "Tag · xác minh · gần đây" },
        { t: "Saved", d: "Danh sách lưu cho nhóm và hẹn hò" },
        { t: "Decide", d: "Mức độ tự tin + lý do chọn" },
      ],
    },
    reflection: {
      tag: "( 22 · Reflection )",
      body:
        "Qua Ăng Ăng, em nhận ra người dùng không cần xem thêm thật nhiều quán. Họ cần thông tin phù hợp với đúng thời điểm, tâm trạng, ngân sách và người đi cùng. Khi những yếu tố này được trình bày rõ, người dùng có thể thu hẹp lựa chọn và quyết định tự tin hơn.",
      cta1: "Về Portfolio",
      cta2: "Dự án tiếp theo · HD Bank Business",
    },
    labels: {
      coreMessage: "Thông điệp cốt lõi",
      designImplication: "Hệ quả thiết kế",
      action: "Hành động",
      thought: "Suy nghĩ",
      pain: "Điểm vướng",
      opportunity: "Cơ hội",
      userThought: "Người dùng nghĩ",
      heroQuote: "Hôm nay ăn gì đây?",
      openNow: "Đang mở",
      platform: "Nền tảng",
      style: "Kiểu",
      sizeLineWeight: "Cỡ chữ / Line height / Độ đậm",
      preview: "Xem trước",
      primaryTypeface: "Typeface chính",
      busy: "Đông vừa",
      searchPlaceholder: "Tìm quán, tâm trạng, dịp…",
    },
  },
} as const;

const PROCESS_ICONS = [Search, BarChart3, MessagesSquare, ClipboardList, Users, Target, Sparkles, Lightbulb];
const MOOD_ICONS = [Smile, Heart, UsersRound, Wallet, Clock, Utensils, MapPin, Star];

const REAL_SCREENS = [
  { key: "onboarding", category: "intro", Component: Onboarding, en: { t: "Onboarding", d: "First launch · brand intro" }, vi: { t: "Onboarding", d: "Mở lần đầu · giới thiệu thương hiệu" } },
  { key: "home", category: "intro", Component: HomeScreen, en: { t: "Home Screen", d: "Personalized feed + quick filters" }, vi: { t: "Trang chủ", d: "Feed cá nhân hoá + filter nhanh" } },
  { key: "bando", category: "discovery", Component: BanDo, en: { t: "Real-time Map", d: "Real-time map · open now signals" }, vi: { t: "Bản đồ thời gian thực", d: "Bản đồ thời gian thực · đang mở" } },
  { key: "camxuc", category: "discovery", Component: CamXuc, en: { t: "Mood Discovery", d: "“What are you in the mood for?”" }, vi: { t: "Khám phá cảm xúc", d: "“Bạn đang muốn ăn gì?”" } },
  { key: "reviewer", category: "reviewer", Component: Reviewer, en: { t: "Verified Reviewer", d: "Trust system & perks" }, vi: { t: "Verified Reviewer", d: "Hệ thống uy tín & đặc quyền" } },
  { key: "localprofile", category: "reviewer", Component: LocalProfile, en: { t: "Local Profile", d: "Public reviewer profile" }, vi: { t: "Local Profile", d: "Hồ sơ reviewer công khai" } },
  { key: "verifiedprofile", category: "reviewer", Component: VerifiedProfile, en: { t: "Verified Profile", d: "Verified reviewer detail" }, vi: { t: "Verified Profile", d: "Chi tiết reviewer đã xác thực" } },
];

function RealPhone({
  Component,
  title,
  desc,
  onClick,
}: {
  Component: React.ComponentType;
  title: string;
  desc: string;
  onClick: () => void;
}) {
  const W = 240;
  const H = Math.round((W * 812) / 375);
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-[2rem] border border-neutral-200/80 bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl text-left flex flex-col items-center"
    >
      {/* Outer Phone Shell */}
      <div
        className="relative mx-auto rounded-[32px] bg-[#1a241a] p-[6px] shadow-[0_20px_40px_rgba(15,25,15,0.25)] ring-1 ring-black/10"
        style={{ width: W + 12 }}
      >
        {/* Side Volume & Power Buttons */}
        <span className="absolute -left-[2px] top-[20%] h-[7%] w-[2px] rounded-l-full bg-[#111811]" aria-hidden="true" />
        <span className="absolute -left-[2px] top-[29%] h-[11%] w-[2px] rounded-l-full bg-[#111811]" aria-hidden="true" />
        <span className="absolute -right-[2px] top-[25%] h-[15%] w-[2px] rounded-r-full bg-[#111811]" aria-hidden="true" />

        {/* Screen Clip Viewport */}
        <div
          className="relative overflow-hidden rounded-[26px] bg-white"
          style={{ width: W, height: H }}
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
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
        </div>
      </div>

      <div className="mt-4 text-center w-full">
        <div className="flex items-center justify-center gap-1.5 font-semibold text-base" style={{ fontFamily: "Fraunces, serif", color: INK }}>
          <span>{title}</span>
          <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: GREEN_DARK }} />
        </div>
        <div className="mt-1 text-xs" style={{ color: MUTED }}>
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
          <path d={logoMarkPath.p441a940} fill="#fff" />
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
  const [uiFilterTab, setUiFilterTab] = useState<"all" | "intro" | "discovery" | "reviewer">("all");
  const [activeRealScreen, setActiveRealScreen] = useState<number | null>(null);

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
      <section className="pt-24 md:pt-28 pb-12 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <Logo />
              <div className="mt-5 text-xs tracking-[0.22em] uppercase" style={{ color: GREEN_DARK, fontWeight: 500 }}>
                {t.badge}
              </div>
              <h1
                className="mt-3 tracking-[-0.03em] leading-[0.92]"
                style={{ fontFamily: "Fraunces, serif", fontWeight: 400, fontSize: "clamp(3.2rem, 7.5vw, 5.8rem)" }}
              >
                {t.concept.split("").map((c, i) => (
                  <span key={i} style={{ color: i === 2 ? GREEN_DARK : INK, fontStyle: i === 2 ? "italic" : "normal" }}>
                    {c}
                  </span>
                ))}
              </h1>
              <p className="mt-5 max-w-[60ch] font-medium" style={{ fontSize: "1.18rem", lineHeight: 1.45, color: INK }}>
                {t.headline}
              </p>
              <p className="mt-3.5 max-w-[58ch] text-sm md:text-base" style={{ color: MUTED, lineHeight: 1.6 }}>
                {t.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => scrollToCaseSection("research")}
                  className="group inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2 text-sm font-medium transition-all"
                  style={{ backgroundColor: GREEN, color: "#fff" }}
                >
                  <span>{t.cta1}</span>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform"
                    style={{ backgroundColor: "#fff", color: GREEN_DARK }}
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToCaseSection("system")}
                  className="inline-flex items-center gap-2 text-sm font-medium rounded-full px-5 py-3 transition-all hover:-translate-y-0.5"
                  style={{
                    border: `1px solid ${GREEN_DARK}`,
                    color: GREEN_DARK,
                    backgroundColor: "rgba(157, 211, 37, 0.08)",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.backgroundColor = "rgba(157, 211, 37, 0.16)";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.backgroundColor = "rgba(157, 211, 37, 0.08)";
                  }}
                >
                  {t.cta2}
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[24px] overflow-hidden shadow-lg" style={{ backgroundColor: GREEN_LIGHT, aspectRatio: "16 / 11", maxHeight: "380px" }}>
                <ImageWithFallback
                  src={HERO_IMG}
                  alt="Warm interior of a cozy local eatery in Ho Chi Minh City"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute -bottom-4 -left-4 px-4 py-3 rounded-2xl rotate-[-3deg]"
                  style={{ backgroundColor: YELLOW, color: INK, boxShadow: "0 16px 32px -16px rgba(0,0,0,0.25)" }}
                >
                  <div className="text-[10px] tracking-[0.18em] uppercase opacity-70">{L.userThought}</div>
                  <div style={{ fontFamily: "Fraunces, serif", fontSize: "1rem" }}>{L.heroQuote}</div>
                </div>
                <div
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ backgroundColor: "#fff", color: GREEN_DARK, border: `1px solid ${BORDER}` }}
                >
                  ● {L.openNow}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {t.meta.map((m, idx) => {
                  const metaIcons = [Briefcase, Users, Target, UserCircle];
                  const MetaIcon = metaIcons[idx] || Briefcase;
                  return (
                    <div key={m.k} className="group rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg" style={{ backgroundColor: GREEN_LIGHT, color: GREEN_DARK }}>
                          <MetaIcon size={14} />
                        </span>
                        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold" style={{ color: GREEN_DARK }}>
                          {m.k}
                        </span>
                      </div>
                      <div className="font-medium" style={{ fontSize: "0.88rem", lineHeight: 1.35 }}>
                        {m.v}
                      </div>
                    </div>
                  );
                })}
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

      {/* Dot Divider */}
      <div className="flex items-center justify-center gap-2 py-2" style={{ backgroundColor: BG }}>
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: GREEN }} />
        <span className="h-1 w-1 rounded-full" style={{ backgroundColor: BORDER }} />
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: GREEN }} />
      </div>

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

      {/* RESEARCH GOALS */}
      <Section bg="#fff">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <Tag>{t.goals.tag}</Tag>
            <H2>{t.goals.title}</H2>
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-[60ch]" style={{ color: MUTED, lineHeight: 1.7 }}>
              {t.goals.intro}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {t.goals.questions.map((question, index) => (
                <motion.div
                  key={question}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="rounded-[28px] p-6"
                  style={{ backgroundColor: BG, border: `1px solid ${BORDER}` }}
                >
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-full text-xs" style={{ backgroundColor: GREEN_DARK, color: "#fff" }}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="mt-4" style={{ fontFamily: "Fraunces, serif", fontSize: "1.25rem", lineHeight: 1.35 }}>
                    {question}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* RESEARCH PROCESS */}
      <Section id="research" bg={BG}>
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
                style={{
                  backgroundColor: "#fff",
                  border: `1px solid ${BORDER}`,
                  boxShadow: "0 20px 44px -32px rgba(61, 79, 24, 0.22)",
                }}
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

      {/* SECONDARY RESEARCH */}
      <Section bg="#fff">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <Tag>{t.secondaryResearch.tag}</Tag>
            <H2>{t.secondaryResearch.title}</H2>
            <p className="mt-5 max-w-[56ch]" style={{ color: MUTED, lineHeight: 1.7 }}>
              {t.secondaryResearch.intro}
            </p>
          </div>
          <div className="lg:col-span-7">
            <div
              className="rounded-[32px] p-6 md:p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.72)",
                border: `1px solid ${BORDER}`,
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="text-xs tracking-[0.22em] uppercase" style={{ color: GREEN_DARK }}>
                {lang === "en" ? "Why this matters" : "Vì sao phần này quan trọng"}
              </div>
              <p className="mt-3" style={{ color: INK, lineHeight: 1.75 }}>
                {t.secondaryResearch.summary}
              </p>
            </div>
          </div>
        </div>

        <div
          className="relative mt-12 rounded-[40px] overflow-hidden p-6 md:p-8 lg:p-12"
          style={{
            background: `linear-gradient(160deg, ${GREEN_LIGHT} 0%, ${BG} 48%, #ffffff 100%)`,
            border: `1px solid ${BORDER}`,
          }}
        >
          <svg
            className="pointer-events-none absolute inset-0 hidden lg:block"
            viewBox="0 0 1200 720"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M110 640 Q 160 410 350 360 T 980 610" fill="none" stroke={GREEN_DARK} strokeWidth="3" strokeLinecap="round" opacity="0.8" />
            <path d="M110 640 Q 170 290 470 270 T 1080 420" fill="none" stroke={GREEN_DARK} strokeWidth="3" strokeLinecap="round" opacity="0.8" />
            <path d="M110 640 Q 185 170 560 150 T 1160 270" fill="none" stroke={GREEN_DARK} strokeWidth="3" strokeLinecap="round" opacity="0.8" />
            <path d="M110 640 L 1120 640" fill="none" stroke={GREEN_DARK} strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          </svg>

          <div className="hidden lg:block relative h-[620px]">
            {t.secondaryResearch.items.map((item, index) => {
              const positions = [
                "left-[6%] top-[63%] w-[24%]",
                "left-[31%] top-[46%] w-[24%]",
                "left-[56%] top-[29%] w-[21%]",
                "left-[79%] top-[8%] w-[16%]",
              ];
              const isGreenCard = index % 2 === 1;

              return (
                <motion.div
                  key={item.stat}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className={`absolute rounded-[28px] p-6 ${positions[index]}`}
                  style={{
                    backgroundColor: isGreenCard ? GREEN_DARK : "rgba(255,255,255,0.96)",
                    border: isGreenCard ? `1px solid ${GREEN_DARK}` : `1px solid ${BORDER}`,
                    boxShadow: "0 24px 60px -36px rgba(61, 79, 24, 0.28)",
                  }}
                >
                  <div
                    className="inline-flex items-center rounded-full px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase"
                    style={{
                      backgroundColor: isGreenCard ? "rgba(255,255,255,0.14)" : GREEN_LIGHT,
                      color: isGreenCard ? "#ffffff" : GREEN_DARK,
                    }}
                  >
                    {lang === "en" ? "Data source" : "Nguồn dữ liệu"} · {item.source.replace(/^Source · |^Nguồn · /, "")}
                  </div>
                  <div
                    className="mt-4"
                    style={{
                      fontFamily: "Fraunces, serif",
                      fontSize: index === 0 ? "2.2rem" : "2rem",
                      lineHeight: 1,
                      color: isGreenCard ? "#ffffff" : GREEN,
                      fontStyle: "italic",
                    }}
                  >
                    {item.stat}
                  </div>
                  <p
                    className="mt-4"
                    style={{
                      color: isGreenCard ? "rgba(255,255,255,0.92)" : INK,
                      lineHeight: 1.6,
                      fontSize: "0.98rem",
                    }}
                  >
                    {item.body}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-4 lg:hidden relative">
            {t.secondaryResearch.items.map((item, index) => {
              const isGreenCard = index % 2 === 1;

              return (
              <motion.div
                key={item.stat}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-[28px] p-6"
                style={{
                  backgroundColor: isGreenCard ? GREEN_DARK : "rgba(255,255,255,0.96)",
                  border: isGreenCard ? `1px solid ${GREEN_DARK}` : `1px solid ${BORDER}`,
                }}
              >
                <div
                  className="inline-flex items-center rounded-full px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase"
                  style={{
                    backgroundColor: isGreenCard ? "rgba(255,255,255,0.14)" : GREEN_LIGHT,
                    color: isGreenCard ? "#ffffff" : GREEN_DARK,
                  }}
                >
                  {lang === "en" ? "Data source" : "Nguồn dữ liệu"} · {item.source.replace(/^Source · |^Nguồn · /, "")}
                </div>
                <div
                  className="mt-4"
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontSize: "2rem",
                    lineHeight: 1,
                    color: isGreenCard ? "#ffffff" : GREEN,
                    fontStyle: "italic",
                  }}
                >
                  {item.stat}
                </div>
                <p
                  className="mt-4"
                  style={{
                    color: isGreenCard ? "rgba(255,255,255,0.92)" : INK,
                    lineHeight: 1.65,
                  }}
                >
                  {item.body}
                </p>
              </motion.div>
            );
            })}
          </div>
        </div>
      </Section>

      {/* PRIMARY RESEARCH */}
      <Section bg={BG}>
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <Tag>{t.primaryResearch.tag}</Tag>
            <H2>{t.primaryResearch.title}</H2>
            <p className="mt-5 max-w-[58ch]" style={{ color: MUTED, lineHeight: 1.7 }}>
              {t.primaryResearch.intro}
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {t.primaryResearch.clusters.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[28px] p-6 md:p-7"
                style={{
                  backgroundColor: index % 2 === 0 ? "#fff" : GREEN_LIGHT,
                  border: `1px solid ${BORDER}`,
                }}
              >
                <div className="text-xs tracking-[0.22em] uppercase" style={{ color: GREEN_DARK }}>
                  {lang === "en" ? "Research theme" : "Cụm phát hiện"}
                </div>
                <div className="mt-3" style={{ fontFamily: "Fraunces, serif", fontSize: "1.4rem", lineHeight: 1.25 }}>
                  {item.title}
                </div>
                <p className="mt-4" style={{ lineHeight: 1.65, color: INK }}>
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* COMPETITORS */}
      <Section bg="#fff">
        <div className="mb-10">
          <Tag>{t.competitors.tag}</Tag>
          <H2>{t.competitors.title}</H2>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-lg" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}>
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
                      className="transition-colors duration-200"
                      style={{
                        backgroundColor: isUs ? GREEN_LIGHT : ri % 2 === 0 ? "#fff" : BG,
                        borderTop: `1px solid ${BORDER}`,
                      }}
                      onMouseEnter={(e) => { if (!isUs) e.currentTarget.style.backgroundColor = '#f0fad0'; }}
                      onMouseLeave={(e) => { if (!isUs) e.currentTarget.style.backgroundColor = ri % 2 === 0 ? '#fff' : BG; }}
                    >
                      <td className="p-4" style={{ fontWeight: isUs ? 700 : 500, color: isUs ? GREEN_DARK : INK }}>
                        <div className="flex items-center gap-2">
                          {isUs && <span className="inline-flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: GREEN, color: '#fff' }}><Star size={10} /></span>}
                          {r.name}
                        </div>
                      </td>
                      {r.v.map((cell, ci) => (
                        <td key={ci} className="p-3 text-center">
                          {cell ? (
                            <span
                              className="inline-flex w-6 h-6 rounded-full items-center justify-center shadow-sm"
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
      <Section bg={BG}>
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
      <Section id="insights" bg="#fff">
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
      <Section bg={BG}>
        <Tag>{t.persona.tag}</Tag>
        <H2>{t.persona.title}</H2>
        <p className="mt-5 max-w-[62ch]" style={{ color: MUTED, lineHeight: 1.7 }}>
          {t.persona.note}
        </p>
        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          {t.persona.cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="rounded-[32px] p-6 md:p-8"
              style={{ backgroundColor: BG, border: `1px solid ${BORDER}` }}
            >
              <div className="inline-flex rounded-full px-4 py-2 text-sm md:text-[1.05rem]" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}`, fontWeight: 600 }}>
                {card.title}
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
                <div>
                  <div
                    className="rounded-[24px] p-4 overflow-hidden"
                    style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}
                  >
                    <div
                      className="rounded-[20px] overflow-hidden"
                      style={{ aspectRatio: "1 / 1", backgroundColor: "#f5eceb" }}
                    >
                      <ImageWithFallback
                        src={index === 0 ? BAO_TRAN_PERSONA_AVATAR_URL : DUY_KHOI_PERSONA_AVATAR_URL}
                        alt={`${card.name} persona avatar`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-4 rounded-2xl p-5" style={{ backgroundColor: INK, color: "#fff" }}>
                    <div style={{ fontFamily: "Fraunces, serif", fontSize: "1.45rem", lineHeight: 1.2 }}>
                      {card.name}
                    </div>
                    <div className="text-xs tracking-[0.18em] uppercase mt-2" style={{ color: GREEN }}>
                      {card.role}
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: GREEN_DARK, fontWeight: 600 }}>
                      {lang === "en" ? "Demographic" : "Demographic"}
                    </div>
                    <ul className="space-y-2">
                      {card.demographic.map((item) => (
                        <li key={item} className="flex items-start gap-2" style={{ fontSize: "0.96rem", lineHeight: 1.6 }}>
                          <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: GREEN_DARK }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {[
                    { label: lang === "en" ? "Context" : "Bối cảnh", value: card.context },
                    { label: lang === "en" ? "User story" : "Câu chuyện người dùng", value: card.userStory },
                    { label: lang === "en" ? "Goal" : "Mục tiêu", value: card.goal },
                    { label: lang === "en" ? "Gain points" : "Điểm tạo giá trị", value: card.gainPoints },
                    { label: lang === "en" ? "Pain points" : "Điểm gây vướng", value: card.painPoints },
                    { label: lang === "en" ? "Personality" : "Tính cách", value: card.personality },
                  ].map((item, itemIndex) => (
                    <div
                      key={item.label}
                      className="pt-4"
                      style={{ borderTop: itemIndex === 0 ? `1px solid ${BORDER}` : `1px solid ${BORDER}` }}
                    >
                      <div className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: item.label === (lang === "en" ? "Pain points" : "Điểm gây vướng") ? RED : item.label === (lang === "en" ? "Gain points" : "Điểm tạo giá trị") ? ORANGE : MUTED, fontWeight: 600 }}>
                        {item.label}
                      </div>
                      <p style={{ fontSize: "0.96rem", lineHeight: 1.65 }}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* JOURNEY */}
      <Section id="journey" bg="#fff">
        <Tag>{t.journey.tag}</Tag>
        <H2>{t.journey.title}</H2>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed" style={{ color: MUTED }}>
          {t.journey.intro}
        </p>
        <div className="mt-10 space-y-8">
          {t.journey.maps.map((map, mapIndex) => (
            <div
              key={map.title}
              className="rounded-[32px] p-6 md:p-8"
              style={{
                backgroundColor: mapIndex % 2 === 0 ? GREEN_LIGHT : "#fff",
                border: `1px solid ${BORDER}`,
              }}
            >
              <div className="grid lg:grid-cols-[320px_minmax(0,1fr)] gap-6 lg:gap-8">
                <div>
                  <div
                    className="inline-flex items-center rounded-full px-4 py-2 text-xs tracking-[0.22em] uppercase"
                    style={{
                      backgroundColor: mapIndex % 2 === 0 ? "#fff" : GREEN_LIGHT,
                      color: GREEN_DARK,
                    }}
                  >
                    {map.persona}
                  </div>
                  <h3
                    className="mt-4"
                    style={{
                      fontFamily: "Fraunces, serif",
                      fontSize: "clamp(1.6rem, 2vw, 2.2rem)",
                      lineHeight: 1.1,
                    }}
                  >
                    {map.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed" style={{ color: MUTED }}>
                    {map.summary}
                  </p>
                </div>

                <div className="relative">
                  <div className="overflow-x-auto pb-4 -mx-2 px-2 scroll-smooth">
                    <div
                      className="grid gap-3"
                      style={{
                        gridTemplateColumns: `repeat(${map.stages.length}, minmax(180px, 1fr))`,
                        minWidth: map.stages.length * 190,
                      }}
                    >
                      {map.stages.map((s, i) => (
                        <div
                          key={`${map.title}-${s.s}`}
                          className="rounded-2xl p-5"
                          style={{
                            backgroundColor: i % 2 === 0 ? "#fff" : GREEN_LIGHT,
                            border: `1px solid ${BORDER}`,
                            boxShadow: "0 10px 30px rgba(17,24,39,0.04)",
                          }}
                        >
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-xs"
                            style={{ backgroundColor: GREEN, color: "#fff" }}
                          >
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
                  {/* Scroll fade indicator */}
                  <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 lg:hidden" style={{ background: `linear-gradient(to right, transparent, ${mapIndex % 2 === 0 ? GREEN_LIGHT : '#fff'}ee)` }} />
                  <div className="mt-2 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] lg:hidden" style={{ color: MUTED }}>
                    <ChevronRight size={12} />
                    <span>{lang === 'en' ? 'Scroll to see more stages' : 'Vuốt sang để xem thêm'}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Dot Divider */}
      <div className="flex items-center justify-center gap-2 py-2" style={{ backgroundColor: '#fff' }}>
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: GREEN }} />
        <span className="h-1 w-1 rounded-full" style={{ backgroundColor: BORDER }} />
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: GREEN }} />
      </div>

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
                <BrandIdentityLogo />
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
                {lang === "en" ? "Helper primitives" : "Thành phần hỗ trợ"}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12" style={{ gridAutoRows: 'auto' }}>
          {t.wireframe.items.map((w, i) => (
            <motion.figure
              key={w.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={`rounded-2xl overflow-hidden ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
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
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-md md:p-8"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActiveWireframe(null)}
            className="fixed right-6 top-6 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-2xl transition-transform hover:scale-110"
            aria-label={lang === "en" ? "Close image preview" : "Đóng ảnh phóng to"}
          >
            <X size={22} />
          </button>
          <button
            type="button"
            onClick={() => setActiveWireframe(null)}
            className="fixed inset-0 cursor-default"
            aria-hidden="true"
            tabIndex={-1}
          />
          <div className="relative z-10 mx-auto w-full max-w-[1200px] overflow-hidden rounded-[2.5rem] bg-white p-4 shadow-2xl mt-8 md:mt-0">
            <div className="flex items-center justify-between p-4 border-b mb-3" style={{ borderColor: BORDER }}>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: GREEN_DARK }}>
                  {lang === "en" ? "Wireframe preview" : "Xem wireframe"}
                </span>
                <h3 className="text-2xl font-normal text-neutral-900 mt-1" style={{ fontFamily: "Fraunces, serif" }}>
                  {activeWireframe.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveWireframe(null)}
                className="hidden md:block rounded-full bg-neutral-100 px-4 py-2 text-xs font-semibold text-neutral-700 hover:bg-neutral-200"
              >
                {lang === "en" ? "Close" : "Đóng"}
              </button>
            </div>
            <div className="overflow-auto rounded-3xl bg-[#fafaf6] p-2 sm:p-4" style={{ maxHeight: "75vh" }}>
              <img
                src={activeWireframe.src}
                alt={activeWireframe.title}
                className="mx-auto block h-auto w-full rounded-[1.8rem] shadow-sm"
              />
            </div>
          </div>
        </div>
      )}

      {/* FINAL UI PREVIEW */}
      <Section id="ui" bg={GREEN_LIGHT}>
        <Tag>{t.ui.tag}</Tag>
        <H2>{t.ui.title}</H2>

        {/* Filter Tabs */}
        <div className="sticky top-[80px] z-30 my-8 flex flex-wrap gap-2.5 rounded-2xl border border-emerald-900/10 bg-white/90 p-2 shadow-lg backdrop-blur-md">
          {[
            { id: "all", label: lang === "en" ? "All Screens (7)" : "Tất cả màn hình (7)" },
            { id: "intro", label: lang === "en" ? "Home & Onboarding" : "Trang chủ & Onboarding" },
            { id: "discovery", label: lang === "en" ? "Map & Mood Discovery" : "Bản đồ & Cảm xúc" },
            { id: "reviewer", label: lang === "en" ? "Reviewer Profiles" : "Hồ sơ Reviewer (3)" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setUiFilterTab(tab.id as any)}
              className={`rounded-xl px-5 py-2.5 text-xs font-semibold tracking-wide transition-all ${
                uiFilterTab === tab.id
                  ? "bg-[#1F2A1F] text-[#9DD325] shadow-md"
                  : "bg-transparent text-neutral-600 hover:bg-emerald-50 hover:text-neutral-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {REAL_SCREENS.filter((s) => uiFilterTab === "all" || s.category === uiFilterTab).map((s) => {
            const globalIndex = REAL_SCREENS.findIndex((item) => item.key === s.key);
            const copy = s[lang];
            return (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55 }}
              >
                <RealPhone
                  Component={s.Component}
                  title={copy.t}
                  desc={copy.d}
                  onClick={() => setActiveRealScreen(globalIndex)}
                />
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* REFLECTION + FOOTER */}
      <Section bg={INK} text="#fff">
        <Tag color={GREEN}>{t.reflection.tag}</Tag>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Layers, n: "7", label: lang === 'en' ? 'Screens Designed' : 'Màn hình thiết kế' },
            { icon: Users, n: "2", label: lang === 'en' ? 'Personas Created' : 'Persona xây dựng' },
            { icon: PenTool, n: "5", label: lang === 'en' ? 'HMW Statements' : 'Câu hỏi HMW' },
            { icon: Award, n: "4", label: lang === 'en' ? 'Key Insights' : 'Insight chính' },
          ].map((stat) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-2xl p-5 text-center"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <StatIcon size={20} className="mx-auto mb-3 opacity-70" style={{ color: GREEN }} />
                <div className="text-3xl font-bold tracking-tight" style={{ fontFamily: 'Fraunces, serif', color: GREEN }}>
                  {stat.n}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] opacity-60">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

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
      </Section>

      <NextProjectFooter currentSlug="angang" />

      {/* LIGHTBOX MODAL FOR ANGANG */}
      {activeRealScreen !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-md md:p-8"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActiveRealScreen(null)}
            className="fixed right-6 top-6 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-2xl transition-transform hover:scale-110"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
          <div className="relative max-h-[90vh] max-w-[440px] w-full overflow-hidden rounded-[2.5rem] bg-[#1F2A1F] p-4 text-white shadow-2xl">
            <div className="text-center py-3 border-b border-white/10">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#9DD325]">
                {REAL_SCREENS[activeRealScreen][lang].t}
              </div>
              <div className="text-xs text-white/60 mt-0.5">
                {REAL_SCREENS[activeRealScreen][lang].d}
              </div>
            </div>
            <div className="mt-4 flex justify-center overflow-y-auto max-h-[calc(90vh-100px)] p-2">
              <div className="w-[375px] h-[812px] bg-white rounded-[24px] overflow-hidden shadow-2xl shrink-0">
                {(() => {
                  const Comp = REAL_SCREENS[activeRealScreen].Component;
                  return <Comp />;
                })()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
