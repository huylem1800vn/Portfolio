import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  LayoutGrid,
  Search,
  Shirt,
  ShoppingBag,
  Sparkles,
  Maximize2,
  X,
} from "lucide-react";
import { useI18n } from "../../i18n";
import { CaseNav } from "./CaseNav";
import { scrollToCaseSection } from "./scrollToCaseSection";
import { NextProjectFooter } from "./NextProjectFooter";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { MEME_LEGACY_SCREENS, MEME_UI_SCREENS } from "../../config/meme-assets";

const {
  home: homeScreen,
  gu: guScreen,
  accessories: accessoriesScreen,
  shirts: shirtsScreen,
  cart: cartScreen,
  search: searchScreen,
  productDetail: productDetailScreen,
} = MEME_UI_SCREENS;

const {
  home: legacyHomeScreen,
  gu: legacyGuScreen,
  listing: legacyListingScreen,
  productDetail: legacyProductDetailScreen,
} = MEME_LEGACY_SCREENS;

const INK = "#050816";
const PAPER = "#f7f8fb";
const BORDER = "#e5e7eb";
const YELLOW = "#f4bd18";
const BLUE = "#19bff0";
const ROYAL = "#3167e8";
const BLACK = "#050505";

const COPY = {
  en: {
    sections: [
      { id: "overview", label: "Overview" },
      { id: "audit", label: "Audit" },
      { id: "competitors", label: "Competitors" },
      { id: "comparison", label: "Before / After" },
      { id: "system", label: "System" },
      { id: "flow", label: "Flow" },
      { id: "ui", label: "UI" },
      { id: "reflection", label: "Reflection" },
    ],
    badge: "Case Study · 2025 · Fashion Ecommerce · Responsive Web",
    title: "MeMe · Redesigning YaMe's fashion shopping experience",
    concept: "SHOP WITH CLARITY",
    headline:
      "Turning a busy fashion website into a clearer path from browsing to buying.",
    description:
      "MeMe is a UI/UX redesign project for YaMe, focused on making product discovery easier, product information more scannable, and the purchase journey feel more confident from homepage to checkout.",
    cta1: "View UI Direction",
    cta2: "See Purchase Flow",
    overview: [
      {
        k: "Context",
        v: "YaMe has a large catalog across everyday fashion categories, which makes browsing powerful but also easy to overwhelm.",
      },
      {
        k: "Goal",
        v: "Create a cleaner ecommerce experience where users can scan collections, compare products, choose size, and move to checkout with fewer pauses.",
      },
      {
        k: "My Role",
        v: "UX audit, information structure, responsive UI, product card system, checkout flow, and visual direction.",
      },
      {
        k: "Output",
        v: "A redesigned website concept with homepage, listing, product detail, cart, checkout, account, and order states.",
      },
    ],
    auditTitle: "The main friction was not the catalog size, but how the catalog was presented.",
    auditIntro:
      "I reviewed the old homepage, navigation, product grid, and product detail page to see where the interface made shoppers pause, scan twice, or work out the next step for themselves.",
    audit: [
      {
        icon: "search",
        k: "Product discovery",
        v: "The homepage placed several promotional and product groups close together, so the best place to begin was not immediately clear.",
      },
      {
        icon: "grid",
        k: "Browsing rhythm",
        v: "Product names, prices, discounts, and repeated cards were compact, which slowed down quick scanning and comparison.",
      },
      {
        icon: "shirt",
        k: "Product confidence",
        v: "On the product page, variants, quantity, features, reviews, and actions shared a narrow column while large empty areas interrupted the reading flow.",
      },
      {
        icon: "bag",
        k: "Checkout clarity",
        v: "Search and post-selection states offered little guidance when shoppers had not yet decided what to type or where to continue.",
      },
    ],
    competitorLabel: "( 03 · Competitor Research )",
    competitorTitle:
      "Looking at fashion ecommerce references to understand how users browse, compare, and trust products.",
    competitorIntro:
      "I reviewed Uniqlo, Routine, and IconDenim to see how each brand structures navigation, product discovery, product cards, and purchase confidence.",
    competitorReference: "Reference",
    competitorInsight: "Observation",
    competitorTakeaway: "Design takeaway",
    competitors: [
      {
        brand: "Uniqlo",
        focus: "Clear catalog structure",
        insight:
          "Uniqlo keeps navigation calm and product information easy to scan, which helps users who already know what category they want.",
        takeaway:
          "Make categories easier to follow and reduce visual noise while users browse product lists.",
      },
      {
        brand: "Routine",
        focus: "Local fashion browsing",
        insight:
          "Routine feels close to Vietnamese shopping behavior, with familiar categories, campaign sections, and outfit-oriented discovery.",
        takeaway:
          "Keep the retail energy, but make promotions, category entry points, and listing pages easier to move through.",
      },
      {
        brand: "IconDenim",
        focus: "Style-led product confidence",
        insight:
          "IconDenim leans into denim attitude and brand personality, helping products feel more expressive instead of generic.",
        takeaway:
          "Balance clear product information with stronger fashion personality so the interface does not feel too plain.",
      },
    ],
    comparisonLabel: "( 04 · Before & After )",
    comparisonTitle:
      "The redesign changed more than the surface. It rebuilt how shoppers move from inspiration to a confident choice.",
    comparisonIntro:
      "A single before-and-after image can make redesign look like a visual refresh. I broke the shopping journey into six decisions to show where the old experience created friction and how MeMe responded at each step.",
    comparisonBefore: "Before · YaMe website",
    comparisonAfter: "After · MeMe redesign",
    journeyLabel: "Shopping journey coverage",
    journeyStages: [
      "Start exploring",
      "Choose by style",
      "Narrow the options",
      "Evaluate a product",
      "Find something quickly",
      "Review before checkout",
    ],
    observedLabel: "What the old UI made difficult",
    responseLabel: "MeMe design response",
    intentLabel: "Design intent",
    evidenceLabel: "What changed in the interface",
    comparisonChapters: [
      {
        stage: "01 · Start exploring",
        title: "Homepage: from a promotion board to the beginning of a fashion story",
        observed:
          "The old homepage opened with sale information and a technology-led visual. Many product groups followed, but the page did not clearly signal whether shoppers should begin with a campaign, a category, or an offer.",
        response:
          "MeMe uses a fashion campaign as the opening layer, then creates a consistent sequence: highlighted products, style directions, best sellers, and supporting collections.",
        intent:
          "Guide shoppers from inspiration toward concrete products instead of asking them to assemble meaning from separate sales blocks.",
        evidence: [
          "Brand story appears before price-led content",
          "Editorial sections lead naturally into products",
          "A repeated visual rhythm makes the long page easier to follow",
        ],
      },
      {
        stage: "02 · Choose by style",
        title: "Gu: from a long introduction to a practical way of discovering products",
        observed:
          "The original Gu page contained useful editorial content, but it sat inside a narrow column. Style explanation and products felt separated, so shoppers had to read for a while before knowing what they could explore next.",
        response:
          "The redesign turns Gu into three clear directions. Each one combines reference imagery, a short explanation, smaller style branches, and related products.",
        intent:
          "Make Gu an actual navigation model for shoppers who think in outfits and identity, not only in categories such as shirts or trousers.",
        evidence: [
          "Three style directions are visible from the start",
          "References, descriptions, and products stay in one context",
          "Every editorial block includes a clear path into shopping",
        ],
      },
      {
        stage: "03 · Narrow the options",
        title: "Product listing: from a compressed catalog to a clearer comparison space",
        observed:
          "The old listing used a narrow content area with small cards and compact filters. It displayed many items at once, but product images, names, prices, and offers competed for attention.",
        response:
          "MeMe gives filters a stable sidebar, increases product image size, and keeps price, discount, sold count, color, and actions in a predictable order.",
        intent:
          "Show fewer products in one viewport, but help shoppers understand and compare each option with less effort.",
        evidence: [
          "Persistent filters remain visible while browsing",
          "A three-column grid gives product imagery more weight",
          "Every card follows the same information hierarchy",
        ],
      },
      {
        stage: "04 · Evaluate a product",
        title: "Product detail: from a narrow information column to a guided purchase decision",
        observed:
          "In the old product page, size, quantity, actions, product features, and reviews shared a narrow column. Large empty areas also interrupted the connection between evaluation and related products.",
        response:
          "The redesigned page creates four layers: purchase controls, product information, quality evidence, then ratings and related products.",
        intent:
          "Answer the questions shoppers naturally ask in order: does it suit me, what is it made of, can I trust it, and what else should I consider?",
        evidence: [
          "Core purchase controls stay above the fold",
          "Product features become scannable visual cards",
          "Ratings, reviews, and related items support the final decision",
        ],
      },
    ],
    continuationLabel: "The journey continues",
    continuationTitle:
      "The redesign also covers the moments between choosing a product and committing to checkout.",
    continuationIntro:
      "Search and cart are not decorative extras. They preserve continuity when shoppers know what they want, change direction, or need one last review before paying.",
    continuationStates: [
      {
        stage: "05 · Find something quickly",
        title: "Search becomes a useful starting point",
        description:
          "A complete search state combines a clear input, popular keywords, a new-customer offer, and a store shortcut. It supports shoppers even before they know the exact product name.",
        points: ["Suggested queries", "Promotional shortcut", "Store finder"],
      },
      {
        stage: "06 · Review before checkout",
        title: "Cart becomes a confirmation step",
        description:
          "Products, quantity, current price, original price, savings, notes, and the checkout action are separated so shoppers can verify their choices without rereading the entire page.",
        points: ["Clear order summary", "Visible savings", "Focused checkout action"],
      },
    ],
    systemTitle: "Design direction",
    systemIntro:
      "The UI direction keeps YaMe's energetic retail feeling, then gives it more breathing room through sharper hierarchy, stronger product imagery, and repeatable components.",
    principles: [
      "Image first, but never image only",
      "Promotions should guide, not interrupt",
      "Every card needs one clear next action",
      "Checkout should feel predictable before it asks for payment",
    ],
    tokens: [
      { k: "Primary", v: "#050505" },
      { k: "Danger", v: "#EF4444" },
      { k: "Warning", v: "#F59E0B" },
      { k: "Success", v: "#16A34A" },
      { k: "Infor", v: "#2563EB" },
      { k: "Playful", v: "#4F46E5" },
    ],
    flowTitle: "Purchase flow",
    flowIntro:
      "The redesigned flow is built around one continuous shopping decision: discover, compare, trust, choose, then checkout.",
    flow: [
      "Enter homepage",
      "Choose collection or category",
      "Filter by style, size, price, color",
      "Compare products in grid",
      "Open product detail",
      "Select size and variant",
      "Review cart",
      "Confirm delivery and payment",
    ],
    uiTitle: "Final UI direction",
    uiIntro:
      "The final UI board keeps the real MeMe screens together: homepage, campaign sections, product listing, product detail, cart, checkout, account, order state, and responsive variants.",
    previewLabel: "Figma UI board",
    reflectionTitle: "What this project taught me",
    reflection:
      "A fashion website does not only sell clothes. It sells confidence in a choice. The biggest design lesson was learning to balance editorial energy with practical ecommerce clarity, so the interface can still feel stylish while helping users make decisions faster.",
    next: "Next case study",
    nextProject: "Murror · AI Companion",
  },
  vi: {
    sections: [
      { id: "overview", label: "Tổng quan" },
      { id: "audit", label: "Đánh giá" },
      { id: "competitors", label: "Đối thủ" },
      { id: "comparison", label: "Trước / Sau" },
      { id: "system", label: "Hệ thống" },
      { id: "flow", label: "Luồng mua" },
      { id: "ui", label: "Giao diện" },
      { id: "reflection", label: "Suy ngẫm" },
    ],
    badge: "Case Study · 2025 · Thương mại điện tử thời trang · Responsive Web",
    title: "MeMe · Thiết kế lại trải nghiệm mua sắm trên YaMe",
    concept: "MUA SẮM RÕ RÀNG HƠN",
    headline:
      "Biến một website thời trang nhiều thông tin thành hành trình mua sắm dễ nhìn, dễ chọn và dễ đi tiếp.",
    description:
      "MeMe là dự án thiết kế lại website YaMe. Mục tiêu là giúp người mua dễ tìm sản phẩm phù hợp, dễ so sánh thông tin và luôn biết bước tiếp theo từ trang chủ đến thanh toán.",
    cta1: "Xem hướng UI",
    cta2: "Xem luồng mua hàng",
    overview: [
      {
        k: "Bối cảnh",
        v: "YaMe có danh mục sản phẩm lớn, trải rộng trên nhiều nhóm thời trang hằng ngày. Điều này tạo nhiều lựa chọn, nhưng cũng dễ làm người dùng bị ngợp.",
      },
      {
        k: "Mục tiêu",
        v: "Tạo trải nghiệm mua sắm gọn và rõ hơn, giúp người dùng xem bộ sưu tập, so sánh sản phẩm, chọn kích cỡ và đi tới thanh toán liền mạch hơn.",
      },
      {
        k: "Vai trò",
        v: "Đánh giá trải nghiệm cũ, sắp xếp lại thông tin, thiết kế responsive, xây dựng hệ thống card sản phẩm và luồng thanh toán.",
      },
      {
        k: "Đầu ra",
        v: "Bộ giao diện mới gồm trang chủ, danh sách và chi tiết sản phẩm, tìm kiếm, giỏ hàng, thanh toán, tài khoản và trạng thái đơn hàng.",
      },
    ],
    auditTitle: "Điểm vướng chính không nằm ở việc có nhiều sản phẩm, mà nằm ở cách sản phẩm được trình bày.",
    auditIntro:
      "Em xem lại trang chủ, thanh điều hướng, danh sách sản phẩm và trang chi tiết cũ để tìm những chỗ giao diện khiến người mua phải dừng lại, nhìn thêm lần nữa hoặc tự đoán bước tiếp theo.",
    audit: [
      {
        icon: "search",
        k: "Khám phá sản phẩm",
        v: "Trang chủ đặt nhiều khối khuyến mãi và nhóm sản phẩm gần nhau, nên điểm bắt đầu phù hợp chưa hiện ra ngay.",
      },
      {
        icon: "grid",
        k: "Nhịp xem sản phẩm",
        v: "Tên sản phẩm, giá, mức giảm và nhiều card lặp lại được đặt khá sát nhau, khiến việc lướt nhanh và so sánh chậm lại.",
      },
      {
        icon: "shirt",
        k: "Niềm tin khi chọn",
        v: "Ở trang chi tiết, biến thể, số lượng, đặc điểm, đánh giá và hành động cùng nằm trong một cột hẹp, trong khi khoảng trắng lớn làm mạch đọc bị ngắt.",
      },
      {
        icon: "bag",
        k: "Thanh toán rõ ràng",
        v: "Tìm kiếm và các trạng thái sau khi chọn sản phẩm chưa gợi ý nhiều cho người dùng khi họ chưa biết nên nhập gì hoặc đi tiếp theo hướng nào.",
      },
    ],
    competitorLabel: "( 03 · Nghiên cứu đối thủ )",
    competitorTitle:
      "Nhìn vào các website thời trang để hiểu cách người dùng xem, so sánh và tin vào sản phẩm.",
    competitorIntro:
      "Em tham khảo Uniqlo, Routine và IconDenim để xem mỗi thương hiệu tổ chức điều hướng, trình bày card sản phẩm và cung cấp thông tin giúp người mua ra quyết định như thế nào.",
    competitorReference: "Tham chiếu",
    competitorInsight: "Điểm quan sát",
    competitorTakeaway: "Hướng áp dụng",
    competitors: [
      {
        brand: "Uniqlo",
        focus: "Cấu trúc danh mục rõ",
        insight:
          "Uniqlo giữ điều hướng khá bình tĩnh, thông tin sản phẩm dễ quét nhanh, phù hợp với người dùng đã biết mình muốn tìm nhóm sản phẩm nào.",
        takeaway:
          "Làm danh mục dễ theo hơn và giảm nhiễu thị giác trong lúc người dùng xem danh sách sản phẩm.",
      },
      {
        brand: "Routine",
        focus: "Hành vi mua sắm thời trang nội địa",
        insight:
          "Routine gần với thói quen mua sắm của người dùng Việt, có các nhóm sản phẩm quen thuộc, nội dung theo chiến dịch và cách khám phá dựa trên trang phục.",
        takeaway:
          "Giữ tinh thần bán lẻ năng động, đồng thời làm rõ khuyến mãi, lối vào danh mục và trang danh sách sản phẩm.",
      },
      {
        brand: "IconDenim",
        focus: "Cá tính sản phẩm và niềm tin khi chọn",
        insight:
          "IconDenim làm nổi bật chất denim và cá tính thương hiệu, nhờ đó mỗi sản phẩm có phong cách riêng thay vì chỉ là một món hàng trong lưới.",
        takeaway:
          "Cân bằng giữa thông tin sản phẩm rõ ràng và cá tính thời trang để giao diện không bị quá nhạt.",
      },
    ],
    comparisonLabel: "( 04 · Trước và sau redesign )",
    comparisonTitle:
      "MeMe không chỉ thay đổi giao diện, mà còn sắp xếp lại cách người mua khám phá và lựa chọn sản phẩm.",
    comparisonIntro:
      "Để cho thấy sự khác biệt không chỉ nằm ở màu sắc hay hình ảnh, em chia hành trình mua sắm thành sáu bước. Ở mỗi bước, em đối chiếu điểm vướng của website cũ với cách giao diện mới hỗ trợ người mua.",
    comparisonBefore: "Trước · Website YaMe",
    comparisonAfter: "Sau · MeMe redesign",
    journeyLabel: "Các bước được redesign",
    journeyStages: [
      "Bắt đầu khám phá",
      "Chọn theo phong cách",
      "Thu hẹp lựa chọn",
      "Đánh giá sản phẩm",
      "Tìm nhanh",
      "Kiểm tra trước thanh toán",
    ],
    observedLabel: "Điểm vướng ở giao diện cũ",
    responseLabel: "Cách MeMe xử lý",
    intentLabel: "Mục đích thiết kế",
    evidenceLabel: "Thay đổi thể hiện trên giao diện",
    comparisonChapters: [
      {
        stage: "01 · Bắt đầu khám phá",
        title: "Trang chủ: từ nhiều khối bán hàng thành một điểm bắt đầu rõ ràng",
        observed:
          "Trang cũ mở đầu bằng thông tin giảm giá và nhiều nhóm sản phẩm nối tiếp nhau. Người xem khó biết nên bắt đầu từ bộ sưu tập, danh mục hay chương trình ưu đãi.",
        response:
          "MeMe mở đầu bằng một bộ sưu tập nổi bật, sau đó lần lượt giới thiệu sản phẩm đáng chú ý, các hướng phong cách, sản phẩm bán chạy và bộ sưu tập liên quan.",
        intent:
          "Giúp người mua đi từ cảm hứng ban đầu tới một nhóm sản phẩm cụ thể mà không phải tự tìm đường giữa nhiều nội dung rời rạc.",
        evidence: [
          "Câu chuyện thương hiệu xuất hiện trước nội dung về giá",
          "Nội dung hình ảnh dẫn tự nhiên sang sản phẩm",
          "Nhịp trình bày lặp lại giúp trang dài dễ theo dõi hơn",
        ],
      },
      {
        stage: "02 · Chọn theo phong cách",
        title: "Gu: từ một bài giới thiệu dài thành cách khám phá sản phẩm thực tế",
        observed:
          "Trang Gu cũ có nhiều nội dung và hình ảnh nhưng được đặt trong một cột hẹp. Phần giới thiệu phong cách chưa gắn liền với sản phẩm, nên người xem phải đọc khá lâu mới biết có thể đi đâu tiếp.",
        response:
          "Bản mới chia Gu thành ba hướng rõ ràng. Mỗi hướng kết hợp ảnh tham chiếu, mô tả ngắn, các nhánh phong cách nhỏ và sản phẩm liên quan.",
        intent:
          "Biến Gu thành một cách điều hướng dành cho người mua bắt đầu từ phong cách và bản sắc, thay vì chỉ tìm theo loại áo hoặc quần.",
        evidence: [
          "Ba hướng phong cách được nhìn thấy ngay từ đầu",
          "Hình tham chiếu, mô tả và sản phẩm nằm cùng một ngữ cảnh",
          "Mỗi phần giới thiệu đều có đường dẫn rõ sang sản phẩm",
        ],
      },
      {
        stage: "03 · Thu hẹp lựa chọn",
        title: "Danh sách sản phẩm: từ lưới hàng hóa nhỏ sang không gian so sánh rõ ràng hơn",
        observed:
          "Danh sách cũ dùng khung nội dung hẹp, card nhỏ và bộ lọc khá gọn. Trang chứa được nhiều sản phẩm cùng lúc, nhưng ảnh, tên, giá và ưu đãi phải cạnh tranh sự chú ý.",
        response:
          "MeMe giữ bộ lọc ở cột bên, tăng kích thước hình sản phẩm và sắp xếp giá, mức giảm, lượt bán, màu sắc cùng hành động theo một thứ tự thống nhất.",
        intent:
          "Hiển thị ít sản phẩm hơn trong một khung hình, nhưng giúp người mua hiểu và so sánh từng lựa chọn nhanh hơn.",
        evidence: [
          "Bộ lọc vẫn hiện trong khi xem danh sách",
          "Lưới ba cột dành nhiều không gian hơn cho hình sản phẩm",
          "Mọi card dùng chung một thứ tự thông tin",
        ],
      },
      {
        stage: "04 · Đánh giá sản phẩm",
        title: "Chi tiết sản phẩm: từ một cột thông tin hẹp thành quyết định mua có dẫn dắt",
        observed:
          "Ở trang cũ, size, số lượng, hành động mua, đặc điểm và đánh giá cùng dồn vào một cột hẹp. Khoảng trắng lớn cũng làm mối liên hệ giữa phần đánh giá và sản phẩm gợi ý bị đứt đoạn.",
        response:
          "Trang mới chia nội dung thành bốn lớp: thao tác mua, thông tin sản phẩm, bằng chứng về chất lượng, sau đó là đánh giá và sản phẩm liên quan.",
        intent:
          "Trả lời lần lượt những câu hỏi tự nhiên khi mua hàng: món này có hợp không, chất liệu ra sao, có đáng tin không và còn lựa chọn nào khác?",
        evidence: [
          "Thao tác mua chính nằm ngay trong vùng nhìn đầu tiên",
          "Đặc điểm sản phẩm được tách thành card dễ quét",
          "Đánh giá và sản phẩm liên quan hỗ trợ quyết định cuối",
        ],
      },
    ],
    continuationLabel: "Hành trình vẫn tiếp tục",
    continuationTitle:
      "MeMe tiếp tục hỗ trợ người mua ở bước tìm kiếm và kiểm tra giỏ hàng.",
    continuationIntro:
      "Tìm kiếm giúp người mua đi thẳng tới sản phẩm khi đã có mục tiêu. Giỏ hàng cho họ một lần kiểm tra cuối về sản phẩm, số lượng và giá trước khi thanh toán.",
    continuationStates: [
      {
        stage: "05 · Tìm nhanh",
        title: "Tìm kiếm trở thành một điểm bắt đầu hữu ích",
        description:
          "Trạng thái tìm kiếm đầy đủ kết hợp ô nhập rõ ràng, từ khóa phổ biến, ưu đãi cho khách mới và lối tắt tìm cửa hàng. Người mua vẫn được hỗ trợ ngay cả khi chưa nhớ chính xác tên sản phẩm.",
        points: ["Từ khóa gợi ý", "Lối tắt ưu đãi", "Tìm cửa hàng"],
      },
      {
        stage: "06 · Kiểm tra trước thanh toán",
        title: "Giỏ hàng trở thành một bước xác nhận",
        description:
          "Sản phẩm, số lượng, giá hiện tại, giá cũ, số tiền tiết kiệm, ghi chú và hành động thanh toán được tách rõ để người mua kiểm tra lựa chọn mà không phải đọc lại toàn bộ trang.",
        points: ["Tóm tắt đơn rõ ràng", "Hiển thị phần tiết kiệm", "Hành động thanh toán tập trung"],
      },
    ],
    systemTitle: "Cách em giữ giao diện rõ ràng và nhất quán",
    systemIntro:
      "Em vẫn giữ cảm giác trẻ và năng động của YaMe, nhưng sắp xếp lại nội dung để người mua dễ nhìn sản phẩm, dễ đọc thông tin và biết mình nên làm gì tiếp theo.",
    principles: [
      "Hình sản phẩm được ưu tiên, nhưng giá, màu sắc và thông tin cần chọn vẫn phải dễ thấy.",
      "Ưu đãi chỉ xuất hiện ở nơi phù hợp, không che mất sản phẩm người mua đang xem.",
      "Mỗi card tập trung vào một hành động chính để người mua không phải đoán bước tiếp theo.",
      "Trước khi thanh toán, người mua có thể kiểm tra lại sản phẩm, số lượng, lựa chọn và tổng tiền.",
    ],
    tokens: [
      { k: "Primary", v: "#050505" },
      { k: "Danger", v: "#EF4444" },
      { k: "Warning", v: "#F59E0B" },
      { k: "Success", v: "#16A34A" },
      { k: "Infor", v: "#2563EB" },
      { k: "Playful", v: "#4F46E5" },
    ],
    flowTitle: "Luồng mua hàng",
    flowIntro:
      "Luồng mua hàng được sắp xếp theo thứ tự người dùng thường ra quyết định: khám phá, thu hẹp lựa chọn, xem thông tin, chọn sản phẩm và thanh toán.",
    flow: [
      "Vào trang chủ",
      "Chọn bộ sưu tập hoặc danh mục",
      "Lọc theo phong cách, kích cỡ, giá và màu",
      "So sánh sản phẩm trong danh sách",
      "Mở trang chi tiết",
      "Chọn kích cỡ và màu sắc",
      "Kiểm tra giỏ hàng",
      "Xác nhận giao hàng và thanh toán",
    ],
    uiTitle: "Hướng giao diện cuối",
    uiIntro:
      "Bộ giao diện hoàn chỉnh gồm trang chủ, nội dung theo chiến dịch, danh sách và chi tiết sản phẩm, giỏ hàng, thanh toán, tài khoản, trạng thái đơn hàng cùng các phiên bản responsive.",
    previewLabel: "Figma UI board",
    reflectionTitle: "Điều em học được",
    reflection:
      "Qua MeMe, em hiểu rằng một website thời trang vừa phải truyền tải được cá tính thương hiệu, vừa phải giúp người mua tự tin với lựa chọn của mình. Hình ảnh có thể tạo cảm hứng, nhưng thông tin sản phẩm, bộ lọc và các bước mua hàng vẫn cần được trình bày thật rõ.",
    next: "Case study tiếp theo",
    nextProject: "Murror · AI Companion",
  },
};

type IconName = "search" | "grid" | "shirt" | "bag";

function AuditIcon({ name }: { name: IconName }) {
  const props = { size: 20, strokeWidth: 1.8 };
  if (name === "search") return <Search {...props} />;
  if (name === "grid") return <LayoutGrid {...props} />;
  if (name === "shirt") return <Shirt {...props} />;
  return <ShoppingBag {...props} />;
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="text-xs md:text-sm tracking-[0.24em] uppercase text-neutral-500 mb-5">
      {children}
    </div>
  );
}

const COLOR_ROWS = [
  {
    name: "Gray",
    colors: [
      ["50", "#f6f6f6"],
      ["100", "#e7e7e7"],
      ["200", "#d1d1d1"],
      ["300", "#b0b0b0"],
      ["400", "#888888"],
      ["500", "#6d6d6d"],
      ["600", "#5d5d5d"],
      ["700", "#4f4f4f"],
      ["800", "#454545"],
      ["900", "#3d3d3d"],
      ["950", "#000000"],
    ],
  },
  {
    name: "Red",
    colors: [
      ["50", "#fef2f2"],
      ["100", "#fee2e2"],
      ["200", "#fecaca"],
      ["300", "#fca5a5"],
      ["400", "#f87171"],
      ["500", "#ef4444"],
      ["600", "#dc2626"],
      ["700", "#b91c1c"],
      ["800", "#991b1b"],
      ["900", "#7f1d1d"],
      ["950", "#450a0a"],
    ],
  },
  {
    name: "Yellow",
    colors: [
      ["50", "#fefce8"],
      ["100", "#fef9c3"],
      ["200", "#fef08a"],
      ["300", "#fde047"],
      ["400", "#facc15"],
      ["500", "#eab308"],
      ["600", "#ca8a04"],
      ["700", "#a16207"],
      ["800", "#854d0e"],
      ["900", "#713f12"],
      ["950", "#713f12"],
    ],
  },
  {
    name: "Green",
    colors: [
      ["50", "#f0fdf5"],
      ["100", "#dcfce8"],
      ["200", "#bbf7d1"],
      ["300", "#86efad"],
      ["400", "#4ade80"],
      ["500", "#22c55e"],
      ["600", "#16a34a"],
      ["700", "#15803c"],
      ["800", "#166533"],
      ["900", "#14532b"],
      ["950", "#052e14"],
    ],
  },
  {
    name: "Blue",
    colors: [
      ["50", "#eff5ff"],
      ["100", "#dbe8fe"],
      ["200", "#bfd7fe"],
      ["300", "#93bbfd"],
      ["400", "#609afa"],
      ["500", "#3b82f6"],
      ["600", "#2570eb"],
      ["700", "#2570eb"],
      ["800", "#1e55af"],
      ["900", "#1e478a"],
      ["950", "#172e54"],
    ],
  },
  {
    name: "Purple",
    colors: [
      ["50", "#eeeeff"],
      ["100", "#e0e1ff"],
      ["200", "#c7c8fe"],
      ["300", "#a5a7fc"],
      ["400", "#8184f8"],
      ["500", "#6366f1"],
      ["600", "#4649e5"],
      ["700", "#383bca"],
      ["800", "#3032a3"],
      ["900", "#2e3081"],
      ["950", "#1b1c4b"],
    ],
  },
];

const SHADE_GROUPS = [
  {
    name: "White",
    colors: [
      ["20%", "#ffffff", "rgba(255,255,255,0.2)"],
      ["40%", "#ffffff", "rgba(255,255,255,0.4)"],
      ["60%", "#ffffff", "rgba(255,255,255,0.6)"],
      ["80%", "#ffffff", "rgba(255,255,255,0.8)"],
    ],
  },
  {
    name: "White&Black",
    colors: [
      ["00", "#ffffff", "#ffffff"],
      ["50", "#000000", "#333333"],
    ],
  },
  {
    name: "Black",
    colors: [
      ["20%", "#000000", "rgba(0,0,0,0.2)"],
      ["40%", "#000000", "rgba(0,0,0,0.4)"],
      ["60%", "#000000", "rgba(0,0,0,0.6)"],
      ["80%", "#000000", "rgba(0,0,0,0.8)"],
    ],
  },
];

const UI_SCREENS = [
  {
    key: "home",
    category: "featured",
    title: "Trang chủ (Homepage)",
    type: "Landing Page · Ecommerce",
    image: homeScreen,
    url: "yame.vn/home",
    height: "460px",
  },
  {
    key: "gu",
    category: "featured",
    title: "Bộ sưu tập GU Phong cách",
    type: "Style Discovery · Lookbook",
    image: guScreen,
    url: "yame.vn/gu-phong-cach",
    height: "460px",
  },
  {
    key: "shirts",
    category: "catalog",
    title: "Danh mục Áo nam",
    type: "Product Listing Page",
    image: shirtsScreen,
    url: "yame.vn/ao-nam",
    height: "420px",
  },
  {
    key: "accessories",
    category: "catalog",
    title: "Danh mục Phụ kiện",
    type: "Accessories Category",
    image: accessoriesScreen,
    url: "yame.vn/phu-kien",
    height: "420px",
  },
  {
    key: "cart",
    category: "checkout",
    title: "Giỏ hàng & Đơn hàng",
    type: "Cart & Checkout Flow",
    image: cartScreen,
    url: "yame.vn/gio-hang",
    height: "400px",
  },
  {
    key: "search",
    category: "checkout",
    title: "Khung Tìm kiếm thông minh",
    type: "Smart Search Overlay",
    image: searchScreen,
    url: "yame.vn/tim-kiem",
    height: "400px",
  },
];

function ColorSystemPresentation() {
  return (
    <div className="rounded-[2.25rem] bg-white border border-neutral-200 p-5 md:p-7 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
        <div>
          <div className="text-xs tracking-[0.22em] uppercase text-neutral-400">Color palette</div>
          <h3 className="mt-3 text-3xl md:text-4xl tracking-[-0.04em] font-semibold">
            MeMe color system
          </h3>
        </div>
        <p className="max-w-[420px] text-sm text-neutral-500 leading-relaxed">
          This palette follows the MeMe design system from Figma, with neutral colors for fashion layouts and supporting colors for sale, CTA, status, and campaign moments.
        </p>
      </div>

      <div className="space-y-5">
        {COLOR_ROWS.map((row) => (
          <div key={row.name} className="grid lg:grid-cols-[180px_1fr] gap-4 lg:gap-7 items-center">
            <div>
              <div className="text-sm font-semibold">{row.name}</div>
              <div className="mt-1 text-xs leading-relaxed text-neutral-500">Scale 50 to 950</div>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-11 gap-2">
              {row.colors.map(([step, color]) => (
                <div key={`${row.name}-${step}-${color}`} className="group min-w-0">
                  <div
                    className="h-14 rounded-xl border border-black/5 transition-transform duration-300 group-hover:-translate-y-1"
                    style={{ backgroundColor: color }}
                  />
                  <div className="mt-2 flex flex-col gap-0.5">
                    <span className="text-[10px] font-semibold text-neutral-700">{step}</span>
                    <span className="truncate text-[10px] tracking-[0.04em] text-neutral-400">{color}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-7 border-t border-neutral-200">
        <div className="text-xs tracking-[0.22em] uppercase text-neutral-400 mb-5">Shade</div>
        <div className="grid md:grid-cols-3 gap-5">
          {SHADE_GROUPS.map((group) => (
            <div key={group.name}>
              <div className="text-sm font-semibold mb-3">{group.name}</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {group.colors.map(([step, hex, fill]) => (
                  <div key={`${group.name}-${step}`} className="min-w-0">
                    <div
                      className="h-12 rounded-xl border border-black/5"
                      style={{ backgroundColor: fill }}
                    />
                    <div className="mt-2 flex flex-col gap-0.5">
                      <span className="text-[10px] font-semibold text-neutral-700">{step}</span>
                      <span className="truncate text-[10px] tracking-[0.04em] text-neutral-400">{hex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MeMeHeroPreview() {
  const navItems = ["SALE", "GU", "ÁO", "QUẦN", "PHỤ KIỆN", "MỚI"];

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[3rem] bg-[#19bff0]/20 blur-3xl" />
      <div className="relative rounded-[2.5rem] bg-white border border-neutral-200 p-4 md:p-6 shadow-2xl">
        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-white border border-neutral-200">
          <div className="flex h-14 items-center justify-between border-b border-neutral-200 px-5 text-[10px] md:text-xs">
            <div className="flex items-center gap-2 font-black tracking-tight text-lg">YaMe.vn</div>
            <div className="hidden md:flex items-center gap-5 font-semibold text-neutral-700">
              {navItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="flex items-center gap-3 text-neutral-500">
              <Search size={16} />
              <ShoppingBag size={16} />
            </div>
          </div>

          <div className="bg-[#fca5a5] px-5 py-2 text-center text-xs font-semibold text-black">
            Sale 11/11 · Make browsing faster and clearer
          </div>

          <div className="relative min-h-[452px] bg-[#f7f8fb]">
            <ImageWithFallback
              src={homeScreen}
              alt="MeMe redesigned YaMe homepage preview"
              className="absolute inset-0 h-full w-full object-cover object-top opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20" />

            <div className="relative z-10 p-6 md:p-8">
              <div className="max-w-[360px]">
                <div className="mb-4 inline-flex rounded-full bg-black px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                  MeMe redesign
                </div>
                <h3
                  className="tracking-[-0.06em] leading-[0.95] text-black"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(3rem, 6vw, 5.75rem)" }}
                >
                  Fashion
                  <br />
                  made easier.
                </h3>
                <p className="mt-5 max-w-[300px] text-sm leading-relaxed text-neutral-600">
                  Cleaner navigation, stronger product discovery, and a smoother path to checkout.
                </p>
              </div>
            </div>

            <div className="absolute right-5 top-24 hidden w-[44%] rounded-[1.75rem] border border-neutral-200 bg-white p-3 shadow-2xl md:block">
              <div className="overflow-hidden rounded-[1.25rem] bg-neutral-100">
                <ImageWithFallback
                  src={guScreen}
                  alt="MeMe style discovery page preview"
                  className="h-40 w-full object-cover object-top"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-neutral-950">Style discovery</div>
                  <div className="mt-1 text-[10px] text-neutral-500">GU · Outfit browsing</div>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </div>

            <div className="absolute bottom-5 right-5 grid w-[58%] grid-cols-3 gap-3">
              {[accessoriesScreen, shirtsScreen, cartScreen].map((image, index) => (
                <div key={index} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-1 shadow-lg">
                  <ImageWithFallback
                    src={image}
                    alt={`MeMe feature preview ${index + 1}`}
                    className="h-24 w-full rounded-xl object-cover object-top"
                  />
                </div>
              ))}
            </div>

            <div className="absolute -left-10 bottom-16 h-28 w-28 rounded-[2rem] rotate-12 opacity-90" style={{ backgroundColor: ROYAL }} />
            <div className="absolute -right-14 -top-12 h-36 w-36 rounded-full opacity-90" style={{ backgroundColor: BLUE }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowserMockupFrame({
  src,
  alt,
  title,
  type,
  url = "yame.vn/redesign",
  className = "",
  maxHeight = "460px",
  onClick,
}: {
  src: string;
  alt: string;
  title: string;
  type: string;
  url?: string;
  className?: string;
  maxHeight?: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[2rem] border border-neutral-200/90 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer ${className}`}
    >
      {/* Browser Window Header Bar */}
      <div className="flex h-11 items-center justify-between border-b border-neutral-200/80 bg-[#f6f7f9] px-4">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56] transition-opacity group-hover:opacity-80" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e] transition-opacity group-hover:opacity-80" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f] transition-opacity group-hover:opacity-80" />
        </div>

        <div className="flex h-6.5 max-w-[200px] sm:max-w-[260px] flex-1 items-center justify-center rounded-lg border border-neutral-200/90 bg-white px-3 text-[11px] font-medium tracking-tight text-neutral-500 shadow-inner truncate mx-3">
          🔒 {url}
        </div>

        <div className="flex items-center gap-1 text-xs font-semibold text-neutral-400 opacity-60 group-hover:opacity-100 transition-opacity">
          <Maximize2 size={14} />
        </div>
      </div>

      {/* Screen Preview Container */}
      <div className="relative overflow-hidden bg-[#f4f5f8]" style={{ maxHeight }}>
        <ImageWithFallback
          src={src}
          alt={alt}
          className="block w-full h-auto object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
      </div>

      {/* Footer Title & Click Hint */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-neutral-100 bg-white">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">{type}</div>
          <div className="text-base font-semibold text-neutral-900 mt-0.5 tracking-tight">{title}</div>
        </div>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white transition-all group-hover:scale-110 group-hover:bg-[#f4bd18] group-hover:text-black">
          <ArrowUpRight size={16} />
        </span>
      </div>
    </div>
  );
}

export function MeMe() {
  const { lang } = useI18n();
  const copy = COPY[lang];
  const [filterTab, setFilterTab] = useState<"all" | "featured" | "catalog" | "checkout">("all");
  const [activeScreen, setActiveScreen] = useState<number | null>(null);

  return (
    <div
      className="min-h-screen overflow-x-clip antialiased selection:bg-[#f4bd18] selection:text-black"
      style={{ backgroundColor: PAPER, color: INK, fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{`
        @media (hover: hover) {
          .meme-screen-card[data-scrollable="true"]:hover .meme-screen-image {
            transform: translateY(calc((100% - var(--preview-height)) * -1));
          }
        }
        .meme-screen-card[data-scrollable="true"][data-active="true"] .meme-screen-image {
          transform: translateY(calc((100% - var(--preview-height)) * -1));
        }
      `}</style>
      <CaseNav
        sections={copy.sections}
        accent={YELLOW}
        bg="rgba(247,248,251,0.88)"
        text={INK}
        border="rgba(5,8,22,0.10)"
      />

      <main className="pt-12 md:pt-16">
        <section className="px-6 md:px-12 pt-6 md:pt-8 pb-12 md:pb-16">
          <div className="max-w-[1400px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-12 items-start"
            >
              <div>
                <div className="text-xs md:text-sm tracking-[0.22em] uppercase mb-4" style={{ color: YELLOW }}>
                  {copy.badge}
                </div>
                <h1
                  className="tracking-[-0.055em] leading-[0.92]"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(3.2rem, 7.5vw, 5.8rem)" }}
                >
                  MeMe
                </h1>
                <div className="mt-4 text-xs md:text-sm tracking-[0.28em] uppercase text-neutral-500 font-medium">
                  {copy.concept}
                </div>
                <h2 className="mt-4 max-w-[760px] text-2xl md:text-4xl leading-[1.08] tracking-[-0.04em]">
                  {copy.headline}
                </h2>
                <p className="mt-4 max-w-[640px] text-neutral-600 leading-relaxed text-sm md:text-base">
                  {copy.description}
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => scrollToCaseSection("ui")}
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-[#f4bd18] hover:text-black transition-colors"
                  >
                    {copy.cta1}
                    <ArrowUpRight size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToCaseSection("flow")}
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium hover:border-black hover:bg-white transition-colors"
                  >
                    {copy.cta2}
                  </button>
                </div>
              </div>

              <MeMeHeroPreview />
            </motion.div>
          </div>
        </section>

        <section id="overview" className="px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto">
            <SectionLabel>{lang === "vi" ? "( 01 · Tổng quan dự án )" : "( 01 · Project Overview )"}</SectionLabel>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {copy.overview.map((item) => (
                <motion.div
                  key={item.k}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="rounded-[2rem] bg-white border border-neutral-200 p-7 min-h-[260px]"
                >
                  <div className="text-xs tracking-[0.2em] uppercase mb-5" style={{ color: BLUE }}>
                    {item.k}
                  </div>
                  <p className="text-neutral-700 leading-relaxed">{item.v}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="audit" className="px-6 md:px-12 py-24 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <SectionLabel>{lang === "vi" ? "( 02 · Đánh giá trải nghiệm cũ )" : "( 02 · UX Audit )"}</SectionLabel>
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
              <div>
                <h2
                  className="tracking-[-0.04em] leading-[1]"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(2.5rem, 5.6vw, 5.75rem)" }}
                >
                  {copy.auditTitle}
                </h2>
                <p className="mt-7 text-neutral-600 leading-relaxed text-lg">{copy.auditIntro}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {copy.audit.map((item, index) => (
                  <div
                    key={item.k}
                    className="rounded-[2rem] p-7 border"
                    style={{ backgroundColor: index % 2 === 0 ? INK : PAPER, color: index % 2 === 0 ? "white" : INK, borderColor: index % 2 === 0 ? "transparent" : BORDER }}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-8"
                      style={{ backgroundColor: index % 2 === 0 ? YELLOW : "white", color: BLACK }}
                    >
                      <AuditIcon name={item.icon as IconName} />
                    </div>
                    <div className="text-[10px] tracking-[0.24em] uppercase opacity-60 mb-3">
                      0{index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em]">{item.k}</h3>
                    <p className="mt-4 leading-relaxed opacity-75">{item.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="competitors" className="px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <SectionLabel>{copy.competitorLabel}</SectionLabel>
                <h2
                  className="tracking-[-0.04em] leading-[1]"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(2.5rem, 5.4vw, 5.6rem)" }}
                >
                  {copy.competitorTitle}
                </h2>
                <p className="mt-7 text-neutral-600 leading-relaxed text-lg">{copy.competitorIntro}</p>
              </div>

              <div className="grid gap-4">
                {copy.competitors.map((item, index) => (
                  <motion.div
                    key={item.brand}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="rounded-[2rem] border border-neutral-200 bg-white p-6 md:p-7 shadow-sm"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="text-[10px] tracking-[0.22em] uppercase text-neutral-400">
                          {copy.competitorReference} 0{index + 1}
                        </div>
                        <h3 className="mt-3 text-3xl md:text-4xl font-semibold tracking-[-0.05em]">
                          {item.brand}
                        </h3>
                      </div>
                      <div
                        className="inline-flex w-fit rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em]"
                        style={{
                          backgroundColor: index === 1 ? INK : "#fff7d6",
                          color: index === 1 ? "white" : INK,
                        }}
                      >
                        {item.focus}
                      </div>
                    </div>

                    <div className="mt-7 grid md:grid-cols-2 gap-4">
                      <div className="rounded-[1.5rem] bg-[#f7f8fb] p-5">
                        <div className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                          {copy.competitorInsight}
                        </div>
                        <p className="mt-3 leading-relaxed text-neutral-700">{item.insight}</p>
                      </div>
                      <div
                        className="rounded-[1.5rem] p-5"
                        style={{
                          backgroundColor: index === 1 ? YELLOW : INK,
                          color: index === 1 ? INK : "white",
                        }}
                      >
                        <div className="text-[10px] tracking-[0.2em] uppercase opacity-60">
                          {copy.competitorTakeaway}
                        </div>
                        <p className="mt-3 leading-relaxed opacity-85">{item.takeaway}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="comparison" className="px-6 md:px-12 py-16 md:py-24 bg-[#050816] text-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-12 items-end">
              <div>
                <div className="text-xs md:text-sm tracking-[0.24em] uppercase text-[#f4bd18] mb-3">
                  {copy.comparisonLabel}
                </div>
                <h2
                  className="tracking-[-0.04em] leading-[1]"
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontWeight: 500,
                    fontSize: "clamp(2.25rem, 4.2vw, 4.25rem)",
                  }}
                >
                  {copy.comparisonTitle}
                </h2>
              </div>
              <p className="max-w-[720px] text-base md:text-lg leading-relaxed text-white/65">
                {copy.comparisonIntro}
              </p>
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 md:p-6">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                {copy.journeyLabel}
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
                {copy.journeyStages.map((stage, index) => (
                  <div
                    key={stage}
                    className="relative rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-3.5"
                  >
                    <div
                      className="text-xs font-semibold"
                      style={{ color: index < 4 ? YELLOW : BLUE }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-2 text-xs leading-snug text-white/75">{stage}</div>
                    {index < copy.journeyStages.length - 1 && (
                      <ArrowUpRight
                        size={14}
                        className="absolute right-3 top-3 hidden text-white/20 lg:block"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14 space-y-16 md:space-y-20">
              {copy.comparisonChapters.map((chapter, index) => {
                const media = [
                  {
                    before: legacyHomeScreen,
                    after: homeScreen,
                    beforeAlt: "YaMe homepage before the MeMe redesign",
                    afterAlt: "MeMe redesigned YaMe homepage",
                  },
                  {
                    before: legacyGuScreen,
                    after: guScreen,
                    beforeAlt: "YaMe Gu page before the MeMe redesign",
                    afterAlt: "MeMe redesigned style discovery page",
                  },
                  {
                    before: legacyListingScreen,
                    after: shirtsScreen,
                    beforeAlt: "YaMe product listing before the MeMe redesign",
                    afterAlt: "MeMe redesigned product listing",
                  },
                  {
                    before: legacyProductDetailScreen,
                    after: productDetailScreen,
                    beforeAlt: "YaMe product detail before the MeMe redesign",
                    afterAlt: "MeMe redesigned product detail",
                  },
                ][index];
                const accent = [YELLOW, BLUE, "#ff6b6b", ROYAL][index];

                return (
                  <motion.article
                    key={chapter.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6 border-b border-white/10 pb-4 mb-6">
                      <div
                        className="text-xs font-semibold uppercase tracking-[0.2em]"
                        style={{ color: accent }}
                      >
                        {chapter.stage}
                      </div>
                      <h3
                        className="text-2xl sm:text-3xl md:text-4xl tracking-[-0.035em]"
                        style={{ fontFamily: "Fraunces, serif", fontWeight: 500 }}
                      >
                        {chapter.title}
                      </h3>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-2">
                      {[
                        {
                          label: copy.comparisonBefore,
                          image: media.before,
                          alt: media.beforeAlt,
                          background: "#151824",
                          foreground: "white",
                        },
                        {
                          label: copy.comparisonAfter,
                          image: media.after,
                          alt: media.afterAlt,
                          background: "white",
                          foreground: INK,
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="overflow-hidden rounded-[1.75rem] border border-white/10 shadow-lg"
                          style={{
                            backgroundColor: item.background,
                            color: item.foreground,
                          }}
                        >
                          <div className="flex h-10 items-center gap-2 border-b border-current/10 px-4">
                            <span className="h-2.5 w-2.5 rounded-full bg-current opacity-25" />
                            <span className="h-2.5 w-2.5 rounded-full bg-current opacity-15" />
                            <span className="h-2.5 w-2.5 rounded-full bg-current opacity-10" />
                            <span className="ml-auto text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
                              {item.label}
                            </span>
                          </div>
                          <div className="h-[260px] overflow-hidden bg-[#f2f3f5] sm:h-[340px] lg:h-[400px]">
                            <ImageWithFallback
                              src={item.image}
                              alt={item.alt}
                              className="h-full w-full object-cover object-top"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid overflow-hidden rounded-[1.5rem] bg-white text-[#050816] lg:grid-cols-3">
                      {[
                        [copy.observedLabel, chapter.observed],
                        [copy.responseLabel, chapter.response],
                        [copy.intentLabel, chapter.intent],
                      ].map(([label, text], detailIndex) => (
                        <div
                          key={label}
                          className={`p-5 md:p-6 ${
                            detailIndex > 0 ? "border-t border-black/10 lg:border-l lg:border-t-0" : ""
                          }`}
                        >
                          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                            {label}
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-black/75">{text}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                        {copy.evidenceLabel}
                      </div>
                      <div className="mt-5 grid gap-3 md:grid-cols-3">
                        {chapter.evidence.map((item, evidenceIndex) => (
                          <div
                            key={item}
                            className="flex gap-3 rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4 text-sm leading-relaxed text-white/70"
                          >
                            <span className="font-semibold" style={{ color: accent }}>
                              0{evidenceIndex + 1}
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-28 border-t border-white/10 pt-20">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#19bff0]">
                  {copy.continuationLabel}
                </div>
                <div>
                  <h3
                    className="text-4xl leading-[1.02] tracking-[-0.045em] md:text-5xl"
                    style={{ fontFamily: "Fraunces, serif", fontWeight: 500 }}
                  >
                    {copy.continuationTitle}
                  </h3>
                  <p className="mt-5 max-w-[780px] leading-relaxed text-white/60">
                    {copy.continuationIntro}
                  </p>
                </div>
              </div>

              <div className="mt-12 grid gap-5 lg:grid-cols-2">
                {copy.continuationStates.map((state, index) => {
                  const image = index === 0 ? searchScreen : cartScreen;
                  const accent = index === 0 ? BLUE : YELLOW;
                  return (
                    <motion.article
                      key={state.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="overflow-hidden rounded-[2rem] bg-white text-[#050816]"
                    >
                      <div className="h-[280px] overflow-hidden bg-[#f2f3f5] sm:h-[350px]">
                        <ImageWithFallback
                          src={image}
                          alt={state.title}
                          className={`h-full w-full object-top ${
                            index === 0 ? "object-contain" : "object-cover"
                          }`}
                        />
                      </div>
                      <div className="p-7 md:p-9">
                        <div
                          className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                          style={{ color: accent }}
                        >
                          {state.stage}
                        </div>
                        <h4 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em]">
                          {state.title}
                        </h4>
                        <p className="mt-4 leading-relaxed text-black/60">{state.description}</p>
                        <div className="mt-7 flex flex-wrap gap-2">
                          {state.points.map((point) => (
                            <span
                              key={point}
                              className="rounded-full border border-black/10 px-4 py-2 text-xs font-medium text-black/65"
                            >
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="system" className="px-6 md:px-12 py-24 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <SectionLabel>{lang === "vi" ? "( 05 · Hướng thiết kế hệ thống )" : "( 05 · Design System Direction )"}</SectionLabel>
                <h2
                  className="tracking-[-0.04em] leading-[1]"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(2.75rem, 6vw, 6rem)" }}
                >
                  {copy.systemTitle}
                </h2>
                <p className="mt-7 text-neutral-600 leading-relaxed text-lg">{copy.systemIntro}</p>
              </div>
              <div className="space-y-5">
                <div className="rounded-[2rem] bg-black text-white p-7">
                  <div className="flex items-center gap-3 text-yellow-300 mb-6">
                    <Sparkles size={18} />
                    <span className="text-xs tracking-[0.2em] uppercase">
                      {lang === "vi" ? "Nguyên tắc thiết kế" : "Principles"}
                    </span>
                  </div>
                  <div className="space-y-4">
                    {copy.principles.map((item) => (
                      <div key={item} className="flex gap-3 text-neutral-200">
                        <Check size={17} color={YELLOW} className="mt-1 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-16">
              <ColorSystemPresentation />
            </div>
          </div>
        </section>

        <section id="flow" className="px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto">
            <SectionLabel>{lang === "vi" ? "( 06 · Luồng mua hàng )" : "( 06 · Purchase Flow )"}</SectionLabel>
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16 items-start">
              <div>
                <h2
                  className="tracking-[-0.04em] leading-[1]"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(2.75rem, 5.4vw, 5.5rem)" }}
                >
                  {copy.flowTitle}
                </h2>
                <p className="mt-7 text-neutral-600 leading-relaxed text-lg">{copy.flowIntro}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {copy.flow.map((step, index) => (
                  <div key={step} className="rounded-[1.5rem] border border-neutral-200 bg-[#f7f8fb] p-5">
                    <div className="flex items-center justify-between gap-5">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      {index < copy.flow.length - 1 && <ArrowUpRight size={18} className="text-neutral-300" />}
                    </div>
                    <div className="mt-6 text-lg font-semibold tracking-[-0.02em]">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="ui" className="px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[940px] mb-10 md:mb-12">
              <SectionLabel>{lang === "vi" ? "( 07 · Giao diện hoàn chỉnh )" : "( 07 · Final UI Showcase )"}</SectionLabel>
              <h2
                className="tracking-[-0.04em] leading-[1]"
                style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(2.75rem, 6vw, 6.25rem)" }}
              >
                {copy.uiTitle}
              </h2>
              <p className="mt-6 text-neutral-600 leading-relaxed text-lg">{copy.uiIntro}</p>
            </div>

            {/* Filter Tabs */}
            <div className="sticky top-[80px] z-30 mb-10 flex flex-wrap gap-2.5 rounded-2xl border border-neutral-200/90 bg-white/90 p-2 shadow-lg backdrop-blur-md">
              {[
                { id: "all", label: lang === "en" ? "All Screens (6)" : "Tất cả màn hình (6)" },
                { id: "featured", label: lang === "en" ? "Home & GU" : "Trang chủ & GU" },
                { id: "catalog", label: lang === "en" ? "Catalog & Shirts" : "Sản phẩm & Danh mục" },
                { id: "checkout", label: lang === "en" ? "Cart & Search" : "Giỏ hàng & Search" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilterTab(tab.id as any)}
                  className={`rounded-xl px-5 py-2.5 text-xs font-semibold tracking-wide transition-all ${
                    filterTab === tab.id
                      ? "bg-neutral-900 text-white shadow-md"
                      : "bg-transparent text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Screens Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {UI_SCREENS.filter((s) => filterTab === "all" || s.category === filterTab).map((screen) => {
                const globalIndex = UI_SCREENS.findIndex((item) => item.key === screen.key);
                return (
                  <div key={screen.key}>
                    <BrowserMockupFrame
                      src={screen.image}
                      alt={screen.title}
                      title={screen.title}
                      type={screen.type}
                      url={screen.url}
                      maxHeight={screen.height}
                      onClick={() => setActiveScreen(globalIndex)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="reflection" className="px-6 md:px-12 py-20 bg-black text-white">
          <div className="max-w-[1200px] mx-auto">
            <SectionLabel>{lang === "vi" ? "( 08 · Điều em rút ra )" : "( 08 · Reflection )"}</SectionLabel>
            <h2
              className="tracking-[-0.04em] leading-[1]"
              style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              {copy.reflectionTitle}
            </h2>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-neutral-300 max-w-[980px]">
              {copy.reflection}
            </p>
          </div>
        </section>
      </main>

      <NextProjectFooter currentSlug="meme" />

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {activeScreen !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-md md:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveScreen(null)}
        >
          <button
            type="button"
            onClick={() => setActiveScreen(null)}
            className="fixed right-6 top-6 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-2xl transition-transform hover:scale-110"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
          <div 
            className="relative max-h-[90vh] max-w-[1200px] w-full overflow-hidden rounded-[2.2rem] bg-white border border-neutral-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4 bg-[#f6f7f9]">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
                  {UI_SCREENS[activeScreen].type}
                </div>
                <div className="text-xl font-bold tracking-tight text-neutral-900">
                  {UI_SCREENS[activeScreen].title}
                </div>
              </div>
              <div className="hidden sm:block text-xs text-neutral-500 font-mono">
                🔒 {UI_SCREENS[activeScreen].url}
              </div>
            </div>
            <div className="max-h-[calc(90vh-80px)] overflow-y-auto bg-[#f4f5f8] p-4 md:p-8">
              <ImageWithFallback
                src={UI_SCREENS[activeScreen].image}
                alt={UI_SCREENS[activeScreen].title}
                className="mx-auto block h-auto w-full max-w-[1000px] rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
