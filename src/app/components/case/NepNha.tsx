import { useEffect, useState } from "react";
import { useScrollLock } from "./useScrollLock";
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
import {
  NEP_NHA_INFORMATION_ARCHITECTURE_URL,
  NEP_NHA_LOGO_MARK_URL,
  NEP_NHA_PERSONA_IMAGES,
  NEP_NHA_THUMBNAIL_URL,
  NEP_NHA_UI,
} from "../../config/nep-nha-assets";
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
      framingTitle: "How the problem was framed",
      framingBody:
        "Instead of assuming that families needed another smart-home dashboard, I broke the brief into four questions. This kept the research focused on family relationships while still accounting for the home and its technology.",
      framing: [
        ["Who is affected?", "Grandparents who need closeness, parents carrying the household mental load, and younger members who are comfortable with technology but protective of their independence."],
        ["Where does it happen?", "Inside multigenerational homes where members share an address but follow different routines and spend much of the day in separate spaces."],
        ["When is the gap most visible?", "During moments that should bring people together: dinner, weekends, health reminders, birthdays, anniversaries, and family rituals."],
        ["What is the real problem?", "The home may already be connected by devices, but the family still lacks one gentle, shared place for routines, care, and memories."],
      ],
      marketTitle: "Context behind the opportunity",
      marketBody:
        "Desk research showed a growing smart-home market, but most products still compete through devices and automation. That left an opening to ask what a smart home could do for relationships, not only for rooms and appliances.",
      marketSignals: [
        ["$358.59M", "Estimated Vietnam smart-home revenue in 2024 in the Statista reference used on the UX board."],
        ["$506.4M", "Projected market revenue for 2028 in the same research reference."],
        ["22.6%", "Projected household penetration by 2027, showing that smart-home behavior is moving beyond a niche audience."],
      ],
      segmentsTitle: "Three generations, three different expectations",
      segmentsBody:
        "The board first mapped the whole household before narrowing the case study to two primary personas. Each generation changes what accessibility, privacy, and usefulness mean for the product.",
      segments: [
        ["Grandparents · 60+", "Want simple reminders, a sense of family presence, and confidence that they will not make a mistake. Small text and technical flows quickly become barriers."],
        ["Parents · 35–55", "Often coordinate schedules, health, bills, meals, and household safety. They need less mental load, not another system to manage."],
        ["Children and young adults · 10–34", "Adopt technology quickly and want faster coordination, but expect control over their location, status, and notifications."],
      ],
      personaBridgeTag: "From user groups to personas",
      personaBridgeTitle: "I chose two roles that shape the same family rhythm.",
      personaBridgeBody:
        "The initial grouping showed that the product is shaped by two recurring roles: a younger member who wants to stay connected without losing privacy, and a family coordinator who carries most of the remembering and reminding. Turning these patterns into personas made the design discussion more specific than a broad age-based segment.",
      personaBridgeSteps: [
        ["01 · Gather", "Collected recurring context, frustrations, needs, and attitudes from the user-group map, empathy work, desk research, and the interview guide."],
        ["02 · Cluster", "Grouped evidence by behavior: who keeps family information moving, who carries the coordination load, and where care starts to feel intrusive."],
        ["03 · Select", "Selected two complementary roles whose decisions affect one another: the person who coordinates family life and the younger member who chooses how to respond and share."],
      ],
      questionsTitle: "What I needed to learn from families",
      questionsBody:
        "The interview and survey guide was organized around daily life rather than asking people to validate a proposed feature. This made it easier to uncover existing routines and tensions.",
      questions: [
        "When is the family naturally together, and which routines are worth preserving?",
        "Which schedules, reminders, and household tasks are most often forgotten or repeated?",
        "Who usually coordinates family life, and where does that responsibility become tiring?",
        "How do older members currently receive care and reminders?",
        "Which status information feels reassuring, and which begins to feel like surveillance?",
        "Where are family photos and memories kept today, and why are they difficult to revisit?",
      ],
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
      empathyTitle: "What the empathy map made visible",
      empathyBody:
        "The same household tension appeared in different language across generations. Looking at what people say, do, see, and feel helped separate the surface behavior from the reason behind it.",
      empathy: [
        ["Says", "“I want us to have dinner together, but our schedules never match.” “I want to know my parents are okay without repeatedly calling them.”"],
        ["Does", "Uses family chat, phone calls, personal calendars, and memory to coordinate important dates and daily care."],
        ["Thinks and feels", "Parents feel overloaded and guilty, grandparents can feel lonely without wanting to complain, and younger members want closeness without losing privacy."],
        ["Design implication", "The product should notice and support small moments of connection, while every reminder and shared status remains calm, optional, and understandable."],
      ],
      synthesisTitle: "The problem statement I carried into design",
      problemStatement:
        "Multigenerational families need one simple and private way to coordinate routines, care for one another, and keep shared memories because their current tools are scattered and often place the responsibility on one person.",
      howMightWe:
        "How might we help a family stay present in one another's lives without turning care into control or asking every generation to use technology in the same way?",
      tensions: [
        ["Care without surveillance", "Status and safety information should reassure family members, while visibility remains understandable and optional."],
        ["Reminders without pressure", "The product should distribute responsibility and use a warm tone rather than repeatedly telling people what to do."],
        ["One family, different abilities", "Younger adults need speed and control, while older adults need clarity, confidence, and fewer decisions."],
      ],
      differentiatorTag: "The product's defining tension",
      differentiatorTitle: "Care should create reassurance, not the feeling of being watched.",
      differentiatorBody:
        "This became more than a principle. It shaped what information is shared, how long it remains visible, and whether a member can change that choice without asking another person.",
      privacyModelTitle: "How that idea changes the experience",
      privacyModel: [
        ["Share a status, not constant location", "A member can say they are home, outside, busy, or available without broadcasting an exact route all day."],
        ["Make visibility understandable", "Every shared status should make it clear who can see it, and the member can pause or change that choice."],
        ["Coordinate care without repeated chasing", "A reminder can be accepted and marked as handled so the family knows the task is covered without sending more messages."],
      ],
      differentiatorConclusion:
        "The goal is not to help one person monitor the household. It is to let every member participate in care while keeping control over their own information.",
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
      title: "Two personas reveal how family coordination works from both sides.",
      intro:
        "Minh Anh and Ngọc Hạnh are working personas synthesized from the behavior patterns documented on the UX board. They help connect research findings to concrete design decisions, while interviews and usability testing remain necessary to confirm or revise those patterns.",
      rationaleTitle: "Why these two personas?",
      rationale: [
        ["They represent two recurring family roles", "Ngọc Hạnh coordinates schedules and reminders, while Minh Anh represents the younger member who receives, responds to, and shares family information."],
        ["They expose the product's central tension", "Ngọc Hạnh needs enough visibility to know important tasks are covered. Minh Anh wants to stay connected without being monitored or overwhelmed by reminders."],
        ["Their experiences are interdependent", "A reminder, check-in, or sharing choice starts with one person and changes what the other person sees, understands, and does next."],
      ],
      groups: [
        {
          label: "Minh Anh",
          meta: "22 · New employee · Family's primary technology user",
          quote: "I still want to care for my family, but I do not want that care to become constant tracking or repeated reminders.",
          context: "Minh Anh is comfortable with digital tools and stays in regular contact with her family. She is not the main family coordinator, but she often becomes the person who helps everyone approach new technology.",
          needs: ["See important family events without rereading chat history", "Receive reminders only when they are relevant", "Check in without sharing an exact location", "Keep family memories in a private space"],
          tension: "She wants to stay close and know her family is well, but too many notifications or unclear privacy settings quickly feel controlling.",
          impact: "Shapes selective notifications, visible privacy choices, lightweight check-ins, and a fast experience that does not demand constant attention.",
        },
        {
          label: "Ngọc Hạnh",
          meta: "38 · Self-employed · Family coordinator",
          quote: "I do not need an app to do everything for us. I need it to help the family forget less, repeat reminders less, and know that everyone is okay.",
          context: "Ngọc Hạnh lives with her husband and children and stays close to her older parents. She keeps track of school schedules, health appointments, anniversaries, bills, household tasks, and the small reminders that hold the family routine together.",
          needs: ["One overview of what matters to the family today", "Shared reminders that do not depend on repeated messages", "Quick confirmation that an important task is covered", "A shared place for routines and family moments"],
          tension: "She wants to reduce the family's mental load, but does not want a complicated system that gives her even more work or makes other members feel controlled.",
          impact: "Shapes the Today overview, shared ownership of tasks, clear completion states, reusable family routines, and calm coordination instead of repeated follow-up.",
        },
      ],
      labels: { context: "Context", needs: "Needs", tension: "Core tension", impact: "Design impact" },
      validationTitle: "What still needs to be validated",
      validation:
        "The next round should interview younger family members and adults who regularly coordinate household routines. I would verify whether these responsibilities and privacy concerns recur, then test which reminders feel supportive, how sharing choices are understood, and whether responsibility is genuinely distributed instead of moved to another screen.",
    },
    journey: {
      tag: "( 05 · Critical Journeys )",
      title: "The same family moment creates two very different journeys.",
      body:
        "I rebuilt the journeys around the two current personas and the behavior patterns documented in the UX board. The maps show what each person wants, does, touches, thinks, and struggles with before turning those observations into design opportunities.",
      stageLabels: ["Before a shared solution", "First-time setup", "After regular use"],
      journeys: [
        {
          name: "Minh Anh",
          role: "Young family member",
          stages: [
            {
              desire: "Stay aware of important family moments without rereading every message or sharing her location all day.",
              action: "Receives plans through family chat, calls, and separate reminders, then responds whenever she notices them.",
              touchpoint: "Zalo or Messenger, phone calls, and her personal calendar.",
              thought: "I want to stay involved, but repeated reminders make me feel as if I am being checked on.",
              emotion: "Disconnected and overwhelmed",
              pain: "Important information gets buried in chat, while repeated reminders make her more likely to ignore it.",
              opportunity: "Collect only the family updates relevant to her and deliver them at the right moment.",
            },
            {
              desire: "Join quickly and understand exactly which information other family members can see.",
              action: "Accepts the family invitation, reviews the shared space, then chooses her status, reminder, and visibility preferences.",
              touchpoint: "Invitation link, onboarding, notification settings, and privacy controls.",
              thought: "What can everyone see, and can I change my mind later?",
              emotion: "Curious but cautious",
              pain: "Broad permissions and unclear default settings can make the product feel like a tracking tool.",
              opportunity: "Use progressive onboarding, explain visibility at the point of choice, and keep every permission reversible.",
            },
            {
              desire: "Take part in family plans and preserve shared moments without keeping the app open throughout the day.",
              action: "Responds to a plan, completes a lightweight check-in, accepts a small task, or adds a photo to a shared memory.",
              touchpoint: "Selective notifications, Today overview, shared plans, and the private family archive.",
              thought: "I can stay close to my family without having to report everything I am doing.",
              emotion: "Reassured and in control",
              pain: "Notification overload or overly visible status information can quickly turn care into pressure.",
              opportunity: "Offer one-tap responses, member-specific visibility, and a calm notification digest instead of constant alerts.",
            },
          ],
        },
        {
          name: "Ngọc Hạnh",
          role: "Family coordinator",
          stages: [
            {
              desire: "See what matters to the family today and know that important plans or care tasks have not been forgotten.",
              action: "Keeps schedules in memory, chat, calls, and a personal calendar, then follows up with each person.",
              touchpoint: "Family chat, phone calls, handwritten notes, and her personal calendar.",
              thought: "If I do not remember and remind everyone, an important task may be missed.",
              emotion: "Responsible but burdened",
              pain: "Information is scattered and one person carries most of the family's remembering and follow-up.",
              opportunity: "Create one shared overview for family events, care tasks, and household routines.",
            },
            {
              desire: "Set up only what the family needs without spending a long time configuring another system.",
              action: "Creates the family space, adds a few essential routines or dates, and invites members to participate.",
              touchpoint: "Create-family flow, routine templates, shared calendar setup, and member invitations.",
              thought: "I hope this reduces the work instead of giving me another place to manage.",
              emotion: "Hopeful but watchful",
              pain: "A long setup and too many features would add to the mental load she is already carrying.",
              opportunity: "Start with meaningful presets, make advanced setup optional, and let the family space grow gradually.",
            },
            {
              desire: "Know that plans and responsibilities are covered without repeatedly contacting every family member.",
              action: "Reviews upcoming plans, sees who has responded, assigns or shares small responsibilities, and saves family moments.",
              touchpoint: "Today overview, shared calendar, task status, gentle reminders, and the family archive.",
              thought: "I can see what has been handled without calling everyone again.",
              emotion: "Relieved and connected",
              pain: "If ownership, responses, or completion states are unclear, she still has to repeat the same follow-up.",
              opportunity: "Show clear ownership and completion, then let the coordinator choose when a gentle reminder is truly needed.",
            },
          ],
        },
      ],
      labels: {
        desire: "Goal",
        action: "Behavior",
        touchpoint: "Touchpoints",
        thought: "Thought",
        emotion: "Emotional state",
        pain: "Pain point",
        opportunity: "Design opportunity",
      },
      scenarioTitle: "Illustrative scenario: planning one shared family dinner",
      scenarioBody:
        "This scenario is not a replacement for the journey maps. It is a focused example showing how Ngọc Hạnh's need for less repeated coordination meets Minh Anh's need to participate without being tracked.",
      scenarioSteps: [
        ["01", "Ngọc Hạnh creates a family dinner", "She adds the time and a short note once instead of repeating the plan in several messages."],
        ["02", "Minh Anh receives one relevant invitation", "The notification explains the plan without asking for her live location or sending repeated follow-ups."],
        ["03", "Minh Anh responds with one tap", "She can join, decline, or say she will arrive later while keeping the rest of her status private."],
        ["04", "The family sees a shared update", "Ngọc Hạnh knows who can attend, and the plan can later become a saved family moment."],
      ],
      scenarioOutcome:
        "The flow reduces the coordinator's mental load and gives the younger member a clear, private way to participate.",
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
      prioritiesTitle: "How features were prioritized",
      prioritiesBody:
        "The board contains many possible directions, so I grouped them by how directly they support the central goal of family connection. Smart-home controls remain useful, but they do not lead the product.",
      priorities: [
        ["Core connection", "Today view, shared family calendar, gentle reminders, member status, and privacy controls."],
        ["Shared care", "Medication and appointment reminders, household tasks, family routines, and connection suggestions."],
        ["Supporting utilities", "Device control, home-safety checks, reusable scenes, residence services, and settings."],
      ],
    },
    structure: {
      tag: "( 07 · Product Structure )",
      title: "Six branches turn a broad family-living concept into a structure people can scan.",
      body:
        "I separated setup, daily priorities, the physical home, family coordination, memories, and system controls. This keeps each area focused while Today remains the place people can return to every day.",
      items: [
        ["Onboarding", "Explain the product value, create or join a shared home, invite members, and set privacy from the start."],
        ["Today", "Bring together the home overview, reminders, appointments, family status, and connection suggestions."],
        ["Home", "Organize rooms, devices, routines, safety checks, and home assistance without mixing them with family content."],
        ["Family", "Keep members, shared calendars, care, household tasks, and responsibilities in one place."],
        ["Memories", "Give family moments, private albums, journals, and rituals a space of their own."],
        ["Settings", "Manage profiles, members, privacy, notifications, devices, accessibility, and support."],
      ],
      iaTitle: "Why the information architecture is organized this way",
      iaBody:
        "I began with recurring research needs rather than a list of features: what the family needs today, who is involved, what belongs to the physical home, and what should be preserved over time. Those needs became six distinct branches.",
      iaReasonsTitle: "Decisions behind the map",
      iaReasons: [
        ["Onboarding stands on its own", "Creating a shared home, inviting relatives, choosing roles, and understanding privacy must happen before daily use."],
        ["Today answers the immediate question", "Reminders, appointments, home status, and family signals are grouped around what needs attention now."],
        ["Home and Family are separate", "Devices and rooms follow a different mental model from people, care, schedules, and responsibilities."],
        ["Memories need a quieter space", "Photos, stories, and family rituals should not compete with alerts or operational tasks."],
        ["Settings stays out of the daily flow", "Account, permission, notification, and device controls remain available without crowding the main experience."],
      ],
      iaImageLabel: "Open the complete IA diagram",
      flowsTitle: "Three flows used to check the structure",
      flowsBody:
        "The sitemap was not treated as a list of pages. I checked whether it could support the moments that matter most in the research.",
      flows: [
        ["Bring the family in", ["Create a shared home", "Invite a member", "Choose a role", "Set privacy preferences"]],
        ["Coordinate care", ["See today's priorities", "Open a reminder", "Assign or confirm it", "Let the family know it is handled"]],
        ["Create a family memory", ["Receive a connection suggestion", "Share a moment", "Add it to the private album", "Revisit it together"]],
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
      framingTitle: "Cách em đặt lại bài toán",
      framingBody:
        "Thay vì mặc định gia đình cần thêm một bảng điều khiển smart home, em chia đề bài thành bốn câu hỏi. Cách này giúp phần nghiên cứu luôn quay về mối quan hệ giữa các thành viên, nhưng vẫn không tách rời bối cảnh ngôi nhà và công nghệ.",
      framing: [
        ["Ai đang gặp khó khăn?", "Ông bà cần cảm giác gần gũi, cha mẹ đang gánh phần lớn việc nhớ và nhắc, còn người trẻ quen công nghệ nhưng muốn giữ sự tự chủ."],
        ["Vấn đề diễn ra ở đâu?", "Trong những gia đình nhiều thế hệ sống cùng nhà nhưng có lịch sinh hoạt khác nhau và thường ở những không gian riêng."],
        ["Khoảng cách lộ rõ khi nào?", "Ở những lúc đáng lẽ cả nhà có thể gần nhau hơn: bữa tối, cuối tuần, lịch khám, sinh nhật, ngày giỗ và các dịp chung."],
        ["Vấn đề thật sự là gì?", "Ngôi nhà có thể đã kết nối bằng thiết bị, nhưng gia đình vẫn thiếu một nơi chung đủ nhẹ nhàng để cùng nhớ lịch, chăm nhau và giữ kỷ niệm."],
      ],
      marketTitle: "Bối cảnh cho thấy cơ hội nằm ở đâu",
      marketBody:
        "Nghiên cứu tài liệu cho thấy thị trường smart home đang tăng trưởng, nhưng phần lớn sản phẩm vẫn cạnh tranh bằng thiết bị và khả năng tự động hóa. Từ đó, em đặt thêm câu hỏi: ngoài điều khiển căn nhà, công nghệ có thể giúp gì cho những người đang sống bên trong?",
      marketSignals: [
        ["358,59 triệu USD", "Doanh thu ước tính của thị trường smart home Việt Nam năm 2024 theo tài liệu Statista được dùng trong UX board."],
        ["506,4 triệu USD", "Mức doanh thu dự kiến vào năm 2028 trong cùng nguồn nghiên cứu."],
        ["22,6%", "Tỷ lệ hộ gia đình được dự báo sử dụng smart home vào năm 2027, cho thấy hành vi này đang dần trở nên phổ biến hơn."],
      ],
      segmentsTitle: "Ba thế hệ có ba cách kỳ vọng về sản phẩm",
      segmentsBody:
        "Trước khi chọn hai persona chính, em nhìn toàn bộ gia đình như một hệ thống. Mỗi thế hệ khiến khái niệm dễ dùng, riêng tư và hữu ích mang một ý nghĩa khác nhau.",
      segments: [
        ["Ông bà · từ 60 tuổi", "Cần lời nhắc đơn giản, cảm nhận được sự hiện diện của con cháu và yên tâm rằng mình không dễ thao tác sai. Chữ nhỏ hoặc flow kỹ thuật nhanh chóng trở thành rào cản."],
        ["Cha mẹ · 35–55 tuổi", "Thường đứng ra sắp xếp lịch, sức khỏe, hóa đơn, bữa cơm và an toàn trong nhà. Họ cần giảm bớt việc phải nhớ, không cần thêm một hệ thống để tự mình quản lý."],
        ["Con cháu · 10–34 tuổi", "Làm quen công nghệ nhanh và muốn phối hợp thuận tiện hơn, nhưng cần được tự quyết về vị trí, trạng thái và thông báo của mình."],
      ],
      personaBridgeTag: "Từ nhóm người dùng đến persona",
      personaBridgeTitle: "Em chọn hai vai trò cùng tạo nên nhịp sinh hoạt của gia đình.",
      personaBridgeBody:
        "Khi tổng hợp dữ liệu, em nhận ra hai vai trò xuất hiện rõ nhất: người trẻ muốn gần gũi với gia đình nhưng vẫn cần không gian riêng, và người điều phối đang gánh phần lớn việc ghi nhớ, nhắc nhở. Chuyển hai vai trò này thành persona giúp em nói về những tình huống cụ thể, thay vì chỉ chia người dùng theo độ tuổi.",
      personaBridgeSteps: [
        ["01 · Thu thập", "Gom bối cảnh, vấn đề, mong muốn và thái độ lặp lại từ bảng nhóm người dùng, sơ đồ thấu cảm, nghiên cứu tài liệu và bộ câu hỏi phỏng vấn."],
        ["02 · Nhóm mẫu hành vi", "Sắp xếp dữ liệu theo hành vi: ai giữ nhịp sinh hoạt chung, ai đang gánh việc điều phối và khi nào sự quan tâm bắt đầu tạo cảm giác bị kiểm soát."],
        ["03 · Chọn persona", "Chọn hai vai trò bổ trợ và tác động trực tiếp đến nhau: người tổ chức việc chung và người trẻ quyết định cách phản hồi, tham gia, chia sẻ thông tin."],
      ],
      questionsTitle: "Những điều em cần nghe từ gia đình",
      questionsBody:
        "Bộ câu hỏi phỏng vấn và khảo sát đi từ đời sống thường ngày, thay vì yêu cầu người tham gia đánh giá một tính năng đã có sẵn. Nhờ vậy, em có thể tìm ra thói quen và mâu thuẫn đang thật sự tồn tại.",
      questions: [
        "Cả nhà thường ở bên nhau vào lúc nào, và có nếp sinh hoạt nào mọi người muốn giữ lại?",
        "Lịch, lời nhắc hoặc việc nhà nào thường bị quên hay phải nhắc nhiều lần?",
        "Ai thường đứng ra sắp xếp việc chung, và trách nhiệm đó bắt đầu gây mệt ở đâu?",
        "Người lớn tuổi đang được chăm sóc và nhắc lịch bằng cách nào?",
        "Thông tin nào giúp cả nhà yên tâm, và thông tin nào khiến một người cảm thấy bị theo dõi?",
        "Ảnh và kỷ niệm của gia đình hiện được lưu ở đâu, vì sao cả nhà ít khi cùng xem lại?",
      ],
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
      empathyTitle: "Điều empathy map giúp em nhìn rõ hơn",
      empathyBody:
        "Cùng một khoảng cách trong gia đình nhưng mỗi thế hệ lại diễn tả theo một cách khác. Khi đặt cạnh những gì họ nói, làm, nhìn thấy và cảm nhận, em có thể phân biệt hành vi bên ngoài với nguyên nhân phía sau.",
      empathy: [
        ["Họ nói", "“Em muốn cả nhà ăn tối cùng nhau nhưng lịch lúc nào cũng lệch.” “Em muốn biết ba mẹ vẫn ổn mà không phải gọi hỏi liên tục.”"],
        ["Họ đang làm", "Dùng nhóm chat, gọi điện, lịch riêng và tự ghi nhớ để theo dõi ngày quan trọng lẫn việc chăm sóc hằng ngày."],
        ["Họ nghĩ và cảm thấy", "Cha mẹ thấy quá tải và áy náy, ông bà có thể cô đơn nhưng không muốn than phiền, còn người trẻ muốn gần gia đình mà vẫn có không gian riêng."],
        ["Điều này có ý nghĩa với thiết kế", "Sản phẩm nên hỗ trợ những khoảnh khắc kết nối nhỏ, đồng thời giữ lời nhắc và trạng thái chia sẻ ở mức nhẹ nhàng, tự nguyện và dễ hiểu."],
      ],
      synthesisTitle: "Bài toán em mang sang giai đoạn thiết kế",
      problemStatement:
        "Gia đình nhiều thế hệ cần một cách đơn giản và riêng tư để phối hợp lịch sinh hoạt, chăm sóc nhau và giữ kỷ niệm, vì những công cụ hiện tại đang rời rạc và thường dồn trách nhiệm lên một người.",
      howMightWe:
        "Làm sao để các thành viên vẫn hiện diện trong cuộc sống của nhau mà không biến sự quan tâm thành kiểm soát, cũng không bắt mọi thế hệ phải dùng công nghệ theo cùng một cách?",
      tensions: [
        ["Quan tâm nhưng không theo dõi", "Trạng thái và thông tin an toàn nên giúp cả nhà yên tâm, nhưng quyền chia sẻ phải rõ ràng và do từng người lựa chọn."],
        ["Nhắc việc nhưng không gây áp lực", "Sản phẩm cần chia sẻ trách nhiệm và dùng giọng điệu gần gũi, thay vì liên tục ra lệnh cho người dùng."],
        ["Một gia đình, nhiều khả năng sử dụng", "Người trẻ cần nhanh và chủ động, còn người lớn tuổi cần rõ ràng, dễ tin và ít phải lựa chọn."],
      ],
      differentiatorTag: "Mâu thuẫn định hình sản phẩm",
      differentiatorTitle: "Sự quan tâm nên tạo cảm giác yên tâm, không phải cảm giác bị theo dõi.",
      differentiatorBody:
        "Đây không chỉ là một nguyên tắc chung. Nó ảnh hưởng trực tiếp đến loại thông tin được chia sẻ, thời gian thông tin xuất hiện và quyền thay đổi lựa chọn của mỗi thành viên.",
      privacyModelTitle: "Ý tưởng này được đưa vào trải nghiệm như thế nào",
      privacyModel: [
        ["Chia sẻ trạng thái thay vì vị trí liên tục", "Một thành viên có thể báo đang ở nhà, ra ngoài, bận hoặc sẵn sàng trò chuyện mà không phải công khai hành trình cả ngày."],
        ["Nói rõ ai đang xem được thông tin", "Mỗi trạng thái cần cho biết phạm vi chia sẻ, đồng thời cho phép thành viên tạm dừng hoặc thay đổi lựa chọn."],
        ["Phối hợp chăm sóc mà không phải nhắc nhiều lần", "Một lời nhắc có thể được nhận và đánh dấu đã có người xử lý để cả nhà không cần tiếp tục gọi hỏi."],
      ],
      differentiatorConclusion:
        "Mục tiêu không phải giúp một người theo dõi cả nhà. Em muốn mỗi thành viên đều có thể tham gia chăm sóc nhau nhưng vẫn làm chủ thông tin của chính mình.",
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
      title: "Hai persona giúp em nhìn rõ cách việc chung được tạo ra và được đón nhận.",
      intro:
        "Minh Anh và Ngọc Hạnh là hai persona định hướng được tổng hợp từ các mẫu hành vi trong UX board. Hai persona giúp em nối những điều đã tìm thấy với quyết định thiết kế cụ thể. Tuy vậy, em vẫn cần phỏng vấn và kiểm thử với người dùng thật để xác nhận hoặc điều chỉnh các giả định này.",
      rationaleTitle: "Vì sao em chọn hai persona này?",
      rationale: [
        ["Đại diện cho hai vai trò thường gặp trong gia đình", "Ngọc Hạnh là người nhớ lịch và nhắc việc, còn Minh Anh là người trẻ tiếp nhận, phản hồi và lựa chọn thông tin muốn chia sẻ."],
        ["Làm rõ mâu thuẫn chính của sản phẩm", "Ngọc Hạnh cần biết những việc quan trọng đã có người xử lý. Minh Anh muốn quan tâm gia đình nhưng không muốn bị theo dõi hay nhận quá nhiều lời nhắc."],
        ["Trải nghiệm của hai người tác động trực tiếp đến nhau", "Một lời nhắc, lời mời hay trạng thái chia sẻ bắt đầu từ một người và quyết định người còn lại sẽ nhìn thấy gì, hiểu gì và làm gì tiếp theo."],
      ],
      groups: [
        {
          label: "Minh Anh",
          meta: "22 tuổi · Nhân viên mới đi làm · Người dùng công nghệ chính trong nhà",
          quote: "Em vẫn muốn quan tâm gia đình, nhưng không muốn sự quan tâm biến thành theo dõi hay nhắc nhở quá nhiều.",
          context: "Minh Anh quen dùng các công cụ số và vẫn giữ liên lạc thường xuyên với gia đình. Cô không phải người điều phối chính, nhưng thường là người giúp cả nhà tiếp cận công nghệ mới.",
          needs: ["Biết việc quan trọng mà không phải đọc lại nhóm chat", "Chỉ nhận lời nhắc khi thật sự cần", "Check-in nhanh mà không chia sẻ vị trí chính xác", "Lưu kỷ niệm gia đình trong không gian riêng"],
          tension: "Muốn gần gũi và biết người thân vẫn ổn, nhưng quá nhiều thông báo hoặc quyền riêng tư không rõ ràng sẽ khiến cô thấy mình bị kiểm soát.",
          impact: "Định hướng thông báo có chọn lọc, quyền chia sẻ dễ hiểu, check-in gọn và trải nghiệm không buộc người dùng phải chú ý liên tục.",
        },
        {
          label: "Ngọc Hạnh",
          meta: "38 tuổi · Kinh doanh tự do · Người điều phối gia đình",
          quote: "Mình không cần app làm thay mọi thứ, chỉ cần nó giúp cả nhà bớt quên việc, bớt phải nhắc nhau và biết người thân vẫn ổn.",
          context: "Ngọc Hạnh sống cùng chồng con và ở gần cha mẹ lớn tuổi. Cô thường nhớ lịch học, lịch khám, ngày giỗ, hóa đơn, việc nhà và những lời nhắc nhỏ để sinh hoạt của cả nhà không bị đứt quãng.",
          needs: ["Một nơi cho biết hôm nay gia đình có việc gì quan trọng", "Nhắc việc chung mà không phải nhắn lại nhiều lần", "Biết việc quan trọng đã có người nhận và xử lý", "Không gian chung cho nếp sinh hoạt và kỷ niệm"],
          tension: "Muốn giảm gánh nặng ghi nhớ cho cả nhà, nhưng không muốn một hệ thống phức tạp khiến cô có thêm việc hoặc làm các thành viên cảm thấy bị quản lý.",
          impact: "Định hướng màn Hôm nay, phân chia người phụ trách, trạng thái hoàn thành rõ ràng, nếp sinh hoạt có thể dùng lại và cách phối hợp không cần nhắc đi nhắc lại.",
        },
      ],
      labels: { context: "Bối cảnh", needs: "Nhu cầu", tension: "Mâu thuẫn chính", impact: "Ảnh hưởng đến thiết kế" },
      validationTitle: "Những điều em vẫn cần kiểm chứng",
      validation:
        "Ở vòng tiếp theo, em sẽ phỏng vấn người trẻ trong gia đình và những người thường xuyên đứng ra sắp xếp việc chung. Em cần kiểm tra xem các trách nhiệm và lo ngại về riêng tư này có lặp lại không, lời nhắc nào tạo cảm giác được quan tâm, quyền chia sẻ được hiểu ra sao và sản phẩm có thật sự phân bớt việc hay chỉ chuyển việc nhắc nhở sang một màn hình khác.",
    },
    journey: {
      tag: "( 05 · Hành trình quan trọng )",
      title: "Cùng một chuyện trong gia đình nhưng mỗi người lại trải qua theo một cách khác.",
      body:
        "Em xây dựng lại hai hành trình dựa trên persona hiện tại và những mẫu hành vi đã ghi nhận trong UX board. Mỗi hành trình cho thấy người dùng muốn gì, đang làm gì, tiếp xúc với những kênh nào, nghĩ gì và vướng ở đâu trước khi em chuyển những điều đó thành cơ hội thiết kế.",
      stageLabels: ["Trước khi có giải pháp chung", "Lần đầu thiết lập", "Sau một thời gian sử dụng"],
      journeys: [
        {
          name: "Minh Anh",
          role: "Người trẻ trong gia đình",
          stages: [
            {
              desire: "Biết những việc quan trọng của gia đình mà không phải đọc lại toàn bộ tin nhắn hay chia sẻ vị trí cả ngày.",
              action: "Nhận kế hoạch qua nhóm chat, cuộc gọi và các lời nhắc rời rạc rồi phản hồi khi tình cờ nhìn thấy.",
              touchpoint: "Zalo hoặc Messenger, cuộc gọi điện thoại và lịch cá nhân.",
              thought: "Em vẫn muốn quan tâm gia đình, nhưng bị nhắc nhiều lần khiến em có cảm giác mình đang bị kiểm tra.",
              emotion: "Rời rạc và quá tải",
              pain: "Thông tin quan trọng dễ trôi trong nhóm chat, còn lời nhắc lặp lại khiến cô có xu hướng bỏ qua.",
              opportunity: "Tập hợp đúng những cập nhật liên quan đến cô và gửi vào thời điểm phù hợp.",
            },
            {
              desire: "Tham gia nhanh và hiểu rõ từng thông tin của mình sẽ được chia sẻ với ai.",
              action: "Nhận lời mời vào gia đình, xem không gian chung rồi chọn trạng thái, lời nhắc và quyền hiển thị phù hợp.",
              touchpoint: "Đường dẫn mời, hướng dẫn ban đầu, cài đặt thông báo và quyền riêng tư.",
              thought: "Cả nhà sẽ thấy được những gì và sau này em có thể đổi lại không?",
              emotion: "Tò mò nhưng thận trọng",
              pain: "Quyền truy cập quá rộng hoặc cài đặt mặc định không rõ ràng dễ khiến sản phẩm giống công cụ theo dõi.",
              opportunity: "Chia nhỏ quá trình thiết lập, giải thích quyền hiển thị ngay lúc chọn và cho phép thay đổi bất cứ khi nào.",
            },
            {
              desire: "Tham gia việc chung và lưu lại kỷ niệm mà không phải mở ứng dụng liên tục.",
              action: "Phản hồi kế hoạch, báo trạng thái ngắn, nhận một việc nhỏ hoặc thêm ảnh vào kỷ niệm chung.",
              touchpoint: "Thông báo có chọn lọc, màn hình Hôm nay, kế hoạch chung và kho kỷ niệm riêng của gia đình.",
              thought: "Em vẫn có thể gần gũi với gia đình mà không cần báo cáo mọi việc mình đang làm.",
              emotion: "An tâm và chủ động",
              pain: "Thông báo dồn dập hoặc trạng thái bị chia sẻ quá rộng sẽ nhanh chóng biến sự quan tâm thành áp lực.",
              opportunity: "Cho phép phản hồi bằng một thao tác, chọn người được xem và gom thông báo thay vì gửi liên tục.",
            },
          ],
        },
        {
          name: "Ngọc Hạnh",
          role: "Người điều phối gia đình",
          stages: [
            {
              desire: "Nhìn được những việc quan trọng của gia đình trong ngày và biết kế hoạch hay việc chăm sóc nào chưa được xử lý.",
              action: "Tự nhớ lịch, nhắn trong nhóm chat, gọi điện, ghi chú rồi theo dõi xem từng người đã nhận việc chưa.",
              touchpoint: "Nhóm chat gia đình, cuộc gọi, ghi chú cá nhân và lịch trên điện thoại.",
              thought: "Nếu mình không nhớ và nhắc thì có khi việc quan trọng lại bị bỏ sót.",
              emotion: "Có trách nhiệm nhưng nặng đầu",
              pain: "Thông tin nằm rải rác ở nhiều nơi và một người đang phải gánh phần lớn việc ghi nhớ, nhắc nhở.",
              opportunity: "Tạo một nơi chung để theo dõi lịch, việc chăm sóc và nếp sinh hoạt của gia đình.",
            },
            {
              desire: "Chỉ thiết lập những điều gia đình thật sự cần mà không mất nhiều thời gian cấu hình.",
              action: "Tạo không gian gia đình, thêm vài lịch hoặc nếp sinh hoạt cần thiết rồi mời mọi người tham gia.",
              touchpoint: "Luồng tạo gia đình, mẫu nếp sinh hoạt, lịch chung và lời mời thành viên.",
              thought: "Mình mong ứng dụng này giảm bớt việc, chứ không trở thành thêm một nơi phải quản lý.",
              emotion: "Có hy vọng nhưng vẫn dè chừng",
              pain: "Thiết lập dài và quá nhiều tính năng sẽ làm tăng đúng gánh nặng mà cô đang muốn giảm.",
              opportunity: "Bắt đầu bằng những mẫu thiết thực, để phần nâng cao là tùy chọn và cho phép không gian gia đình lớn dần.",
            },
            {
              desire: "Biết kế hoạch và trách nhiệm đã có người xử lý mà không phải liên tục liên hệ từng thành viên.",
              action: "Xem kế hoạch sắp tới, biết ai đã phản hồi, chia sẻ việc nhỏ và lưu lại những khoảnh khắc của gia đình.",
              touchpoint: "Màn hình Hôm nay, lịch chung, trạng thái công việc, lời nhắc nhẹ và kho kỷ niệm.",
              thought: "Mình nhìn vào là biết việc nào đã xong, không cần gọi hỏi lại từng người.",
              emotion: "Nhẹ lòng và gần gũi hơn",
              pain: "Nếu người phụ trách, phản hồi và trạng thái hoàn thành chưa rõ, cô vẫn phải lặp lại việc nhắc nhở.",
              opportunity: "Hiển thị rõ người nhận việc và trạng thái hoàn thành, đồng thời để cô chủ động chọn khi nào thật sự cần nhắc.",
            },
          ],
        },
      ],
      labels: {
        desire: "Mục tiêu",
        action: "Hành vi",
        touchpoint: "Điểm chạm",
        thought: "Suy nghĩ",
        emotion: "Trạng thái cảm xúc",
        pain: "Nỗi đau",
        opportunity: "Cơ hội thiết kế",
      },
      scenarioTitle: "Kịch bản minh họa: cùng lên kế hoạch cho một bữa cơm gia đình",
      scenarioBody:
        "Kịch bản này không thay thế User Journey Map. Đây là một ví dụ cụ thể để cho thấy nhu cầu bớt nhắc lại của Ngọc Hạnh gặp nhu cầu tham gia nhanh nhưng không bị theo dõi của Minh Anh như thế nào.",
      scenarioSteps: [
        ["01", "Ngọc Hạnh tạo lịch ăn cơm chung", "Cô thêm thời gian và lời nhắn một lần, thay vì nhắc lại kế hoạch ở nhiều đoạn chat."],
        ["02", "Minh Anh nhận một lời mời đúng lúc", "Thông báo nêu rõ kế hoạch nhưng không yêu cầu cô bật vị trí hay nhận thêm nhiều lời nhắc."],
        ["03", "Minh Anh phản hồi bằng một thao tác", "Cô có thể tham gia, từ chối hoặc báo sẽ về muộn mà không phải chia sẻ thêm trạng thái riêng."],
        ["04", "Cả nhà cùng thấy một cập nhật", "Ngọc Hạnh biết ai có thể tham gia, còn khoảnh khắc bữa cơm có thể được lưu lại thành kỷ niệm chung."],
      ],
      scenarioOutcome:
        "Luồng này giúp người điều phối bớt gánh việc nhắc nhở và cho người trẻ một cách tham gia rõ ràng mà vẫn giữ được không gian riêng.",
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
      prioritiesTitle: "Cách em ưu tiên tính năng",
      prioritiesBody:
        "UX board có khá nhiều hướng phát triển, nên em chia chúng theo mức độ phục vụ cho mục tiêu gắn kết gia đình. Điều khiển smart home vẫn cần thiết, nhưng không phải nội dung dẫn dắt sản phẩm.",
      priorities: [
        ["Kết nối cốt lõi", "Màn Hôm nay, lịch chung, lời nhắc nhẹ, trạng thái thành viên và quyền riêng tư."],
        ["Chăm sóc chung", "Lịch thuốc và khám bệnh, việc nhà, nếp sinh hoạt và gợi ý để cả nhà có thêm thời gian chung."],
        ["Tiện ích hỗ trợ", "Điều khiển thiết bị, kiểm tra an toàn, chế độ dùng lại, tiện ích nội khu và phần cài đặt."],
      ],
    },
    structure: {
      tag: "( 07 · Cấu trúc sản phẩm )",
      title: "Sáu nhánh giúp những nhu cầu trong gia đình được sắp xếp theo cách dễ tìm.",
      body:
        "Em tách riêng phần thiết lập ban đầu, việc cần xem trong ngày, ngôi nhà, thành viên, kỷ niệm và cài đặt. Mỗi khu vực vì thế có một nhiệm vụ rõ ràng, còn Hôm nay vẫn là nơi cả nhà có thể quay lại mỗi ngày.",
      items: [
        ["Onboarding", "Giới thiệu giá trị của sản phẩm, tạo hoặc tham gia nhà chung, mời thành viên và thiết lập quyền riêng tư ngay từ đầu."],
        ["Hôm nay", "Gom tổng quan trong nhà, lời nhắc, lịch hẹn, trạng thái thành viên và gợi ý kết nối vào một điểm bắt đầu."],
        ["Nhà", "Sắp xếp phòng, thiết bị, nếp sinh hoạt và kiểm tra an toàn mà không trộn lẫn với thông tin về thành viên."],
        ["Gia đình", "Quản lý thành viên, lịch chung, việc chăm sóc, việc nhà và trách nhiệm của từng người."],
        ["Ký ức", "Dành một không gian riêng cho khoảnh khắc, album, câu chuyện và những nếp quen của gia đình."],
        ["Cài đặt", "Quản lý hồ sơ, thành viên, quyền riêng tư, thông báo, thiết bị và phần hỗ trợ."],
      ],
      iaTitle: "Vì sao em xây sơ đồ IA theo cách này?",
      iaBody:
        "Em không bắt đầu bằng cách liệt kê thật nhiều tính năng. Em nhìn lại những nhu cầu lặp lại trong nghiên cứu: hôm nay cả nhà cần chú ý điều gì, ai đang liên quan, việc nào thuộc về ngôi nhà và điều gì cần được lưu giữ lâu dài. Từ đó, em chia sản phẩm thành sáu nhánh riêng.",
      iaReasonsTitle: "Những quyết định chính trong sơ đồ",
      iaReasons: [
        ["Onboarding đứng thành một nhánh riêng", "Tạo nhà chung, mời người thân, chọn vai trò và hiểu quyền riêng tư cần được hoàn tất trước khi bắt đầu sử dụng hằng ngày."],
        ["Hôm nay trả lời việc cần biết ngay", "Lời nhắc, lịch hẹn, trạng thái trong nhà và tín hiệu từ người thân được gom theo những gì đang cần chú ý."],
        ["Nhà và Gia đình được tách riêng", "Phòng và thiết bị có cách tổ chức khác với thành viên, lịch chung, việc chăm sóc và trách nhiệm."],
        ["Ký ức có một không gian yên hơn", "Ảnh, câu chuyện và nếp quen gia đình không phải cạnh tranh sự chú ý với cảnh báo hay việc cần làm."],
        ["Cài đặt không chen vào nhịp dùng mỗi ngày", "Hồ sơ, quyền, thông báo và thiết bị vẫn dễ tìm nhưng không làm màn hình chính trở nên nặng nề."],
      ],
      iaImageLabel: "Mở toàn bộ sơ đồ IA",
      flowsTitle: "Ba luồng dùng để kiểm tra lại cấu trúc",
      flowsBody:
        "Em không xem sitemap như một danh sách màn hình. Em dùng ba tình huống quan trọng trong nghiên cứu để kiểm tra xem người dùng có thể đi từ nhu cầu đến kết quả một cách rõ ràng hay không.",
      flows: [
        ["Đưa các thành viên vào nhà chung", ["Tạo nhà chung", "Mời thành viên", "Chọn vai trò", "Thiết lập quyền riêng tư"]],
        ["Phối hợp một việc chăm sóc", ["Xem việc cần chú ý hôm nay", "Mở lời nhắc", "Nhận hoặc xác nhận việc", "Báo cho cả nhà biết đã hoàn thành"]],
        ["Giữ lại một khoảnh khắc chung", ["Nhận gợi ý kết nối", "Chia sẻ khoảnh khắc", "Thêm vào album riêng", "Cùng xem lại sau đó"]],
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

  // Generic Image Popup State
  const [popupImage, setPopupImage] = useState<{src: string, alt: string, caption?: string} | null>(null);

  useScrollLock(activeScreen !== null || popupImage !== null);

  useEffect(() => {
    if (activeScreen === null && popupImage === null) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveScreen(null);
        setPopupImage(null);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [activeScreen, popupImage]);

  return (
    <div className="min-h-screen font-sans selection:bg-[#DDEACF] selection:text-[#365B2B] overflow-x-clip" style={{ backgroundColor: CREAM, color: INK }}>
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

            <div className="mt-20">
              <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
                <h3 className="text-3xl lg:col-span-5" style={{ fontFamily: "Fraunces, serif" }}>{c.research.framingTitle}</h3>
                <p className="max-w-[70ch] text-sm leading-relaxed lg:col-span-7" style={{ color: MUTED }}>{c.research.framingBody}</p>
              </div>
              <div className="mt-8 grid overflow-hidden rounded-[2rem] border md:grid-cols-2" style={{ borderColor: LINE }}>
                {c.research.framing.map(([title, body], index) => (
                  <article
                    key={title}
                    className="min-h-56 border-b p-7 md:p-8 odd:md:border-r [&:nth-last-child(-n+2)]:md:border-b-0"
                    style={{
                      borderColor: LINE,
                      backgroundColor: index === 1 || index === 2 ? GREEN_DARK : PAPER,
                      color: index === 1 || index === 2 ? "#fff" : INK,
                    }}
                  >
                    <div className="text-xs font-bold tracking-[0.2em]" style={{ color: index === 1 || index === 2 ? "#CFE4BD" : GREEN }}>0{index + 1}</div>
                    <h4 className="mt-8 text-2xl" style={{ fontFamily: "Fraunces, serif" }}>{title}</h4>
                    <p className="mt-3 max-w-[56ch] text-sm leading-relaxed" style={{ color: index === 1 || index === 2 ? "rgba(255,255,255,0.72)" : MUTED }}>{body}</p>
                  </article>
                ))}
              </div>
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

            <div className="mt-20 rounded-[2.4rem] p-7 text-white md:p-10" style={{ backgroundColor: GREEN_DARK }}>
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <h3 className="text-3xl" style={{ fontFamily: "Fraunces, serif" }}>{c.research.marketTitle}</h3>
                  <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-white/70">{c.research.marketBody}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
                  {c.research.marketSignals.map(([stat, body]) => (
                    <article key={stat} className="rounded-[1.6rem] border border-white/15 bg-white/10 p-6">
                      <div className="text-3xl text-[#E2F0D7]" style={{ fontFamily: "Fraunces, serif" }}>{stat}</div>
                      <p className="mt-5 text-xs leading-relaxed text-white/65">{body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-20">
              <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
                <h3 className="text-3xl lg:col-span-5" style={{ fontFamily: "Fraunces, serif" }}>{c.research.segmentsTitle}</h3>
                <p className="max-w-[70ch] text-sm leading-relaxed lg:col-span-7" style={{ color: MUTED }}>{c.research.segmentsBody}</p>
              </div>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {c.research.segments.map(([title, body], index) => (
                  <article key={title} className="rounded-[2rem] border bg-white p-7 shadow-sm" style={{ borderColor: LINE }}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.18em]" style={{ color: GREEN }}>0{index + 1}</span>
                      <UsersRound size={19} style={{ color: GREEN_DARK }} />
                    </div>
                    <h4 className="mt-8 text-2xl" style={{ fontFamily: "Fraunces, serif" }}>{title}</h4>
                    <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>{body}</p>
                  </article>
                ))}
              </div>

              <div className="mt-8 overflow-hidden rounded-[2.2rem] border bg-white p-7 shadow-sm md:p-10" style={{ borderColor: LINE }}>
                <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
                  <div className="lg:col-span-5">
                    <div className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: GREEN }}>
                      {c.research.personaBridgeTag}
                    </div>
                    <h4 className="mt-5 text-3xl leading-tight md:text-4xl" style={{ fontFamily: "Fraunces, serif" }}>
                      {c.research.personaBridgeTitle}
                    </h4>
                  </div>
                  <p className="max-w-[70ch] text-sm leading-relaxed lg:col-span-7" style={{ color: MUTED }}>
                    {c.research.personaBridgeBody}
                  </p>
                </div>

                <div className="mt-9 grid gap-4 md:grid-cols-3">
                  {c.research.personaBridgeSteps.map(([title, body], index) => (
                    <article
                      key={title}
                      className="rounded-[1.65rem] border p-6"
                      style={{
                        borderColor: index === 2 ? GREEN : LINE,
                        backgroundColor: index === 2 ? GREEN_SOFT : PAPER,
                      }}
                    >
                      <h5 className="text-sm font-bold uppercase tracking-[0.13em]" style={{ color: GREEN_DARK }}>
                        {title}
                      </h5>
                      <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>
                        {body}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-20 grid gap-10 rounded-[2.2rem] border bg-white p-7 shadow-sm md:p-10 lg:grid-cols-12" style={{ borderColor: LINE }}>
              <div className="lg:col-span-4">
                <h3 className="text-3xl" style={{ fontFamily: "Fraunces, serif" }}>{c.research.questionsTitle}</h3>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>{c.research.questionsBody}</p>
              </div>
              <div className="grid gap-x-8 gap-y-0 md:grid-cols-2 lg:col-span-8">
                {c.research.questions.map((question, index) => (
                  <div key={question} className="flex gap-4 border-t py-5" style={{ borderColor: LINE }}>
                    <span className="text-xs font-bold tracking-[0.16em]" style={{ color: GREEN }}>0{index + 1}</span>
                    <p className="text-sm leading-relaxed">{question}</p>
                  </div>
                ))}
              </div>
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

            <div className="mt-16 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h3 className="text-3xl" style={{ fontFamily: "Fraunces, serif" }}>{c.insights.empathyTitle}</h3>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>{c.insights.empathyBody}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:col-span-8">
                {c.insights.empathy.map(([title, body], index) => (
                  <article key={title} className="rounded-[1.7rem] border p-6" style={{ borderColor: LINE, backgroundColor: index === 3 ? GREEN_SOFT : CREAM }}>
                    <div className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: GREEN_DARK }}>{title}</div>
                    <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>{body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-16 overflow-hidden rounded-[2.2rem] border shadow-sm md:grid md:grid-cols-2" style={{ borderColor: LINE }}>
              <div className="p-8 md:p-10" style={{ backgroundColor: CREAM }}>
                <div className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: GREEN }}>{c.insights.synthesisTitle}</div>
                <p className="mt-6 text-xl leading-relaxed" style={{ fontFamily: "Fraunces, serif" }}>{c.insights.problemStatement}</p>
              </div>
              <div className="p-8 text-white md:p-10" style={{ backgroundColor: GREEN_DARK }}>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">How might we</div>
                <p className="mt-6 text-xl leading-relaxed" style={{ fontFamily: "Fraunces, serif" }}>{c.insights.howMightWe}</p>
              </div>
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

            <div className="mt-20 overflow-hidden rounded-[2.4rem] border shadow-sm" style={{ borderColor: LINE }}>
              <div className="grid lg:grid-cols-12">
                <div className="p-8 text-white md:p-12 lg:col-span-5" style={{ backgroundColor: GREEN_DARK }}>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                    {c.insights.differentiatorTag}
                  </div>
                  <h3 className="mt-6 text-3xl leading-tight md:text-4xl" style={{ fontFamily: "Fraunces, serif" }}>
                    {c.insights.differentiatorTitle}
                  </h3>
                  <p className="mt-6 text-sm leading-relaxed text-white/70">
                    {c.insights.differentiatorBody}
                  </p>
                  <div className="mt-10 rounded-[1.5rem] border border-white/15 bg-white/10 p-5 text-sm leading-relaxed text-white/80">
                    {c.insights.differentiatorConclusion}
                  </div>
                </div>

                <div className="bg-white p-8 md:p-12 lg:col-span-7">
                  <h4 className="text-2xl" style={{ fontFamily: "Fraunces, serif" }}>
                    {c.insights.privacyModelTitle}
                  </h4>
                  <div className="mt-7 space-y-4">
                    {c.insights.privacyModel.map(([title, body], index) => (
                      <article key={title} className="grid gap-4 rounded-[1.5rem] border p-5 sm:grid-cols-[3rem_1fr]" style={{ borderColor: LINE, backgroundColor: index === 1 ? GREEN_SOFT : CREAM }}>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: GREEN_DARK }}>
                          0{index + 1}
                        </span>
                        <div>
                          <h5 className="font-semibold">{title}</h5>
                          <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>{body}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
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
            <p className="mt-7 max-w-[82ch] text-base leading-relaxed text-white/70 md:text-lg">
              {c.audience.intro}
            </p>

            <div className="mt-10 rounded-[2rem] border border-white/15 bg-white/10 p-7 backdrop-blur-sm md:p-8">
              <h3 className="text-xl font-semibold">{c.audience.rationaleTitle}</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {c.audience.rationale.map(([title, body], index) => (
                  <article key={title} className="rounded-[1.4rem] bg-white/10 p-5">
                    <div className="text-xs font-bold tracking-[0.16em] text-[#CFE4BD]">0{index + 1}</div>
                    <h4 className="mt-4 text-base font-semibold">{title}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">{body}</p>
                  </article>
                ))}
              </div>
            </div>

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
                  <div className="flex items-start gap-5 md:gap-6">
                    <img
                      src={NEP_NHA_PERSONA_IMAGES[index]}
                      alt={`${group.label} persona`}
                      className="h-24 w-24 shrink-0 rounded-full border-4 object-cover shadow-md md:h-32 md:w-32"
                      style={{ borderColor: index === 0 ? "#CFE4BD" : "#FFFFFF" }}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span
                          className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em]"
                          style={{ backgroundColor: index === 0 ? GREEN_SOFT : "#E2ECDA", color: GREEN_DARK }}
                        >
                          {index === 0 ? <Smartphone size={14} /> : <UsersRound size={14} />}
                          Persona 0{index + 1}
                        </span>
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold md:text-3xl" style={{ fontFamily: "Fraunces, serif" }}>
                        {group.label}
                      </h3>
                      <p className="mt-2 text-xs font-medium leading-relaxed uppercase tracking-[0.08em]" style={{ color: MUTED }}>
                        {group.meta}
                      </p>
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

                  <div className="mt-4 flex items-start gap-3 rounded-[1.5rem] p-4 text-sm leading-relaxed" style={{ backgroundColor: GREEN_SOFT }}>
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#365B2B]">
                      <Sparkles size={15} />
                    </div>
                    <div>
                      <strong className="text-neutral-900">{c.audience.labels.impact}: </strong>
                      <span style={{ color: MUTED }}>{group.impact}</span>
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
                <h3 className="text-lg font-semibold">{c.audience.validationTitle}</h3>
                <p className="mt-2 max-w-[92ch] text-sm leading-relaxed text-white/70">{c.audience.validation}</p>
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

                    <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#365B2B]/15 bg-[#DDEACF]/45 px-3 py-1.5 text-xs font-medium text-[#365B2B]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6E9854]" aria-hidden="true" />
                      <span>{c.journey.labels.emotion}: {stage.emotion}</span>
                    </div>

                    <div className="mt-7 space-y-6 text-sm leading-relaxed">
                      <div>
                        <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.16em]" style={{ color: GREEN_DARK }}>
                          {c.journey.labels.desire}
                        </strong>
                        <p className="mt-2 text-base leading-relaxed text-neutral-900">{stage.desire}</p>
                      </div>
                      <div>
                        <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.16em]" style={{ color: GREEN }}>
                          {c.journey.labels.action}
                        </strong>
                        <p className="mt-2 text-neutral-800">{stage.action}</p>
                      </div>
                      <div>
                        <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.16em] text-neutral-500">
                          {c.journey.labels.touchpoint}
                        </strong>
                        <p className="mt-2 text-neutral-600">{stage.touchpoint}</p>
                      </div>
                      <blockquote className="rounded-2xl border-l-4 border-[#9AB780] bg-white/80 px-5 py-4 text-[0.95rem] italic leading-relaxed text-neutral-700 shadow-sm">
                        <span className="mb-2 block text-[0.65rem] font-bold not-italic uppercase tracking-[0.16em] text-neutral-400">
                          {c.journey.labels.thought}
                        </span>
                        “{stage.thought}”
                      </blockquote>
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

            <div className="mt-20 overflow-hidden rounded-[2.4rem] border shadow-sm" style={{ borderColor: LINE, backgroundColor: CREAM }}>
              <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-12 lg:p-12">
                <div className="lg:col-span-4">
                  <div className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: GREEN }}>
                    {lang === "vi" ? "Tình huống xuyên suốt" : "End-to-end scenario"}
                  </div>
                  <h3 className="mt-5 text-3xl leading-tight md:text-4xl" style={{ fontFamily: "Fraunces, serif" }}>
                    {c.journey.scenarioTitle}
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed" style={{ color: MUTED }}>
                    {c.journey.scenarioBody}
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <div className="grid gap-4 md:grid-cols-2">
                    {c.journey.scenarioSteps.map(([number, title, body]) => (
                      <article key={number} className="rounded-[1.6rem] border bg-white p-6" style={{ borderColor: LINE }}>
                        <div className="text-xs font-bold tracking-[0.18em]" style={{ color: GREEN }}>{number}</div>
                        <h4 className="mt-6 text-xl" style={{ fontFamily: "Fraunces, serif" }}>{title}</h4>
                        <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>{body}</p>
                      </article>
                    ))}
                  </div>
                  <div className="mt-4 flex items-start gap-4 rounded-[1.5rem] p-5 text-white" style={{ backgroundColor: GREEN_DARK }}>
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#CFE4BD]" />
                    <p className="text-sm leading-relaxed text-white/80">{c.journey.scenarioOutcome}</p>
                  </div>
                </div>
              </div>
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

            <div className="mt-20 grid gap-8 rounded-[2.2rem] border bg-white p-7 shadow-sm md:p-10 lg:grid-cols-12" style={{ borderColor: LINE }}>
              <div className="lg:col-span-4">
                <h3 className="text-3xl" style={{ fontFamily: "Fraunces, serif" }}>{c.direction.prioritiesTitle}</h3>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>{c.direction.prioritiesBody}</p>
              </div>
              <div className="space-y-3 lg:col-span-8">
                {c.direction.priorities.map(([title, body], index) => (
                  <article key={title} className="grid gap-4 rounded-[1.5rem] border p-5 sm:grid-cols-[8rem_1fr] sm:items-center" style={{ borderColor: LINE, backgroundColor: index === 0 ? GREEN_SOFT : PAPER }}>
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: index === 0 ? GREEN_DARK : GREEN }}>
                        0{index + 1}
                      </span>
                      <h4 className="text-sm font-semibold">{title}</h4>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{body}</p>
                  </article>
                ))}
              </div>
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

            <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
              {c.structure.items.map(([title, body], index) => {
                const icons = [Smartphone, CalendarDays, Home, UsersRound, Heart, ShieldCheck];
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

            <div className="mt-20 border-t border-white/15 pt-12">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-5">
                  <h3 className="text-3xl md:text-4xl" style={{ fontFamily: "Fraunces, serif" }}>
                    {c.structure.iaTitle}
                  </h3>
                  <p className="mt-5 max-w-[58ch] text-sm leading-relaxed text-white/70">
                    {c.structure.iaBody}
                  </p>

                  <div className="mt-9 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                    {c.structure.iaReasonsTitle}
                  </div>
                  <div className="mt-5 space-y-3">
                    {c.structure.iaReasons.map(([title, body], index) => (
                      <article key={title} className="rounded-2xl border border-white/15 bg-white/10 p-5">
                        <div className="flex gap-4">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[0.65rem] font-bold text-white">
                            {index + 1}
                          </span>
                          <div>
                            <h4 className="text-sm font-semibold text-white">{title}</h4>
                            <p className="mt-2 text-xs leading-relaxed text-white/65">{body}</p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setPopupImage({
                    src: NEP_NHA_INFORMATION_ARCHITECTURE_URL,
                    alt: lang === "vi" ? "Sơ đồ cấu trúc thông tin IA đầy đủ của ứng dụng Nếp Nhà" : "Complete information architecture diagram for the Nếp Nhà app",
                    caption: c.structure.iaImageLabel
                  })}
                  className="group overflow-hidden rounded-[2rem] border border-white/15 bg-white p-3 shadow-2xl lg:col-span-7 w-full text-left"
                >
                  <div className="relative overflow-hidden rounded-[1.4rem] bg-white">
                    <img
                      src={NEP_NHA_INFORMATION_ARCHITECTURE_URL}
                      alt={lang === "vi" ? "Sơ đồ cấu trúc thông tin IA đầy đủ của ứng dụng Nếp Nhà" : "Complete information architecture diagram for the Nếp Nhà app"}
                      className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.01]"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-[#20251E]/90 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
                      <Expand size={14} />
                      {c.structure.iaImageLabel}
                    </div>
                  </div>
                  </button>
              </div>
            </div>

            <div className="mt-20 border-t border-white/15 pt-12">
              <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
                <h3 className="text-3xl lg:col-span-5" style={{ fontFamily: "Fraunces, serif" }}>{c.structure.flowsTitle}</h3>
                <p className="max-w-[70ch] text-sm leading-relaxed text-white/65 lg:col-span-7">{c.structure.flowsBody}</p>
              </div>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {c.structure.flows.map(([title, steps], flowIndex) => (
                  <article key={title} className="rounded-[1.8rem] border border-white/15 bg-white/10 p-7">
                    <div className="text-xs font-bold tracking-[0.18em] text-white/45">FLOW 0{flowIndex + 1}</div>
                    <h4 className="mt-5 text-2xl" style={{ fontFamily: "Fraunces, serif" }}>{title}</h4>
                    <ol className="mt-7 space-y-3">
                      {steps.map((step, stepIndex) => (
                        <li key={step} className="flex items-center gap-3 text-sm text-white/75">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-[0.65rem] font-bold text-white">
                            {stepIndex + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </article>
                ))}
              </div>
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
                {c.ui.screens.map(([title]: readonly [string, string], index: number) => (
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
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-md md:p-8" 
          role="dialog" 
          aria-modal="true" 
          aria-label={c.ui.screens[activeScreen][0]}
          onClick={() => setActiveScreen(null)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveScreen(null);
            }}
            className="fixed right-6 top-6 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-2xl transition-transform hover:scale-110"
            aria-label={c.ui.close}
          >
            <X size={22} />
          </button>
          <div 
            className="relative z-10 flex flex-col max-h-[90vh] mx-auto w-full max-w-[720px] overflow-hidden rounded-[2.5rem] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 px-6 border-b shrink-0 bg-white" style={{ borderColor: LINE }}>
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
            <div className="flex-1 overflow-y-auto min-h-0 p-4 bg-[#f9f9f9]">
              <img src={UI_IMAGES[activeScreen]} alt={`Nếp Nhà ${c.ui.screens[activeScreen][0]} full UI screen`} className="h-auto w-full rounded-[1.8rem] shadow-sm" />
            </div>
          </div>
        </div>
      )}

      {/* GENERIC IMAGE POPUP MODAL */}
      {popupImage !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-md md:p-8" 
          role="dialog" 
          aria-modal="true"
          onClick={() => setPopupImage(null)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setPopupImage(null);
            }}
            className="fixed right-6 top-6 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-2xl transition-transform hover:scale-110"
            aria-label={c.ui.close}
          >
            <X size={22} />
          </button>
          <div 
            className="relative z-10 mx-auto w-full max-w-[1200px] rounded-[2.5rem] p-2 sm:p-4 mt-8 md:mt-0"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={popupImage.src} alt={popupImage.alt} className="h-auto w-full rounded-[1.8rem] shadow-2xl" />
            {popupImage.caption && (
              <div className="mt-4 text-center text-sm font-medium text-white/80">
                {popupImage.caption}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
