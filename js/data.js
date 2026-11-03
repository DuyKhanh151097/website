/**
 * ============================================================================
 * NGUYỄN DUY KHÁNH — CINEMATIC INTERACTIVE PORTFOLIO (2026)
 * MODULE 01: DATA & BILINGUAL CONTENT ENGINE (VI / EN)
 * Concept: "THE JOURNEY OF A SYSTEM THINKER"
 * Source of truth: general.md
 * ============================================================================
 */
window.TPL = window.TPL || {};

window.TPL.DATA = {
    meta: {
        ownerVi: "Nguyễn Duy Khánh",
        ownerEn: "Nguyen Duy Khanh",
        year: 2026,
        email: "ndkhanh484886@gmail.com",
        github: "https://github.com/duykhanhmedia",
        githubHandle: "@duykhanhmedia",
        facebook: "https://www.facebook.com/duykhanhit15/",
        seasUrl: "https://seas-cvn.com/home"
    },

    chapters: [
        { id: "home", code: "CH.00", labelVi: "Giới thiệu", labelEn: "Introduction" },
        { id: "publications", code: "CH.01", labelVi: "Nghiên cứu", labelEn: "Research" },
        { id: "projects", code: "CH.02", labelVi: "Dự án", labelEn: "Projects" },
        { id: "activities", code: "CH.03", labelVi: "Cột mốc", labelEn: "Milestones" },
        { id: "awards", code: "CH.04", labelVi: "Thành tích", labelEn: "Achievements" },
        { id: "contact", code: "CH.05", labelVi: "Kết nối", labelEn: "Next Connection" }
    ],

    systemPipeline: [
        { step: "01", titleVi: "Thu thập dữ liệu", titleEn: "Data Acquisition", descVi: "Kết nối dữ liệu y tế, nông nghiệp và dữ liệu không gian trong môi trường thực tế.", descEn: "Connecting health, agriculture, and spatial data in real-world environments." },
        { step: "02", titleVi: "Kiến trúc dữ liệu", titleEn: "Data Architecture", descVi: "Thiết kế PostgreSQL, PostGIS, pgvector, Neo4j và pipeline GraphRAG.", descEn: "Designing PostgreSQL, PostGIS, pgvector, Neo4j, and GraphRAG pipelines." },
        { step: "03", titleVi: "Suy luận Edge-AI", titleEn: "Edge-AI Inference", descVi: "Triển khai LLM mã nguồn mở và suy luận cục bộ cho bảo mật dữ liệu.", descEn: "Deploying open-source LLMs and local inference for data privacy." },
        { step: "04", titleVi: "Tác tử tự động hóa", titleEn: "Automation Agents", descVi: "Xây dựng tác tử AI, WebSocket, RPC và quy trình tự động an toàn.", descEn: "Building AI agents, WebSocket/RPC services, and safety-gated workflows." },
        { step: "05", titleVi: "Triển khai thực địa", titleEn: "Field Deployment", descVi: "Đưa giải pháp đến Cà Mau, Tây Ninh và các địa phương theo nhu cầu.", descEn: "Deploying solutions across Ca Mau, Tay Ninh, and partner locations." }
    ],

    projects: [
        {
            id: "project-01", index: "01", type: "EDGE-AI · Y TẾ", typeEn: "EDGE-AI · HEALTH",
            domain: "CHRONICCARE · LOCAL LLM · SAFETY", metric: "CDC CÀ MAU", title: "AI-BMT / ChronicCare AI",
            description: "Chatbot Edge-AI hỗ trợ quản lý bệnh mãn tính với Hybrid GraphRAG và quy trình bảo vệ dữ liệu sức khỏe.",
            descriptionEn: "Edge-AI chronic care chatbot using Hybrid GraphRAG and safety-gated health data workflows.",
            architectureVi: "Dữ liệu sức khỏe → Hybrid GraphRAG → Local LLM → Quy trình kiểm soát an toàn → Cảnh báo hỗ trợ chăm sóc.",
            architectureEn: "Health data → Hybrid GraphRAG → Local LLM → Safety-gated workflow → Care support alerts.",
            tags: ["GraphRAG", "Local LLM", "PostgreSQL", "pgvector"],
            url: "https://www.facebook.com/duykhanhit15/", vizType: "health"
        },
        {
            id: "project-02", index: "02", type: "AI · NÔNG NGHIỆP", typeEn: "AI · AGRICULTURE",
            domain: "MEGA CROP-COOP · DIGITAL PLATFORM", metric: "TÂY NINH", title: "MEGA CROP-COOP",
            description: "Nền tảng số hóa nông nghiệp và trợ lý ảo AI hỗ trợ chuyển đổi số tại Tây Ninh.",
            descriptionEn: "Agricultural digital platform and AI assistant supporting digital transformation in Tay Ninh.",
            architectureVi: "Dữ liệu hợp tác xã → PostgreSQL/PostGIS → AI assistant → Dashboard vận hành → Trình báo cáo thực địa.",
            architectureEn: "Co-op data → PostgreSQL/PostGIS → AI assistant → Operations dashboard → Field reporting.",
            tags: ["AI Assistant", "PostGIS", "Next.js", "Docker"],
            url: "https://www.facebook.com/duykhanhit15/", vizType: "agriculture"
        },
        {
            id: "project-03", index: "03", type: "LIVE TECH", typeEn: "LIVE TECH",
            domain: "TIKTOK LIVE · WEBSOCKET · RPC", metric: "REAL-TIME", title: "TikTok Live Interaction",
            description: "Hệ sinh thái công cụ tương tác livestream thời gian thực với Node.js WebSocket và RPC.",
            descriptionEn: "Real-time livestream interaction toolkit built with Node.js WebSocket and RPC.",
            architectureVi: "Sự kiện Live → WebSocket → Node.js RPC → Điều phối tương tác → Dashboard trạng thái.",
            architectureEn: "Live events → WebSocket → Node.js RPC → Interaction orchestration → Status dashboard.",
            tags: ["Node.js", "WebSocket", "RPC", "TikTok Live"],
            url: "https://www.facebook.com/duykhanhit15/", vizType: "live"
        },
        {
            id: "project-04", index: "04", type: "AI AUTOMATION", typeEn: "AI AUTOMATION",
            domain: "RAG · GRAPH RAG · AGENTS", metric: "LOCAL FIRST", title: "AI Automation Platform",
            description: "Tác tử AI và local RAG pipeline sử dụng TinyLlama, Qwen-VL, LLaVA-Med và Neo4j.",
            descriptionEn: "AI agents and local RAG pipelines powered by TinyLlama, Qwen-VL, LLaVA-Med, and Neo4j.",
            architectureVi: "Nguồn tri thức → Embedding & Neo4j → Hybrid retrieval → Local LLM → Agent tự động hóa.",
            architectureEn: "Knowledge sources → Embeddings & Neo4j → Hybrid retrieval → Local LLM → Automation agent.",
            tags: ["RAG", "GraphRAG", "Qwen-VL", "LLaVA-Med"],
            url: "https://github.com/duykhanhmedia", vizType: "llm"
        }
    ],

    awards: [
        {
            index: "01",
            medal: "5+",
            tone: "gold",
            title: "Năm kinh nghiệm trong CNTT",
            titleEn: "Years of IT Experience",
            note: "Từ 2019 tại Endava",
            noteEn: "Since 2019 at Endava"
        },
        {
            index: "02",
            medal: "PSM",
            tone: "silver",
            title: "Professional Scrum Master",
            titleEn: "Professional Scrum Master",
            note: "Chứng chỉ chuyên môn · 2022",
            noteEn: "Professional certificate · 2022"
        },
        {
            index: "03",
            medal: "AI",
            tone: "gold",
            title: "Gemini Certification",
            titleEn: "Gemini Certification",
            note: "Chứng nhận AI · 2025",
            noteEn: "AI certification · 2025"
        },
        {
            index: "04",
            medal: "LC",
            tone: "silver",
            title: "Leading With Questions",
            titleEn: "Leading With Questions",
            note: "Chứng chỉ lãnh đạo · 2024",
            noteEn: "Leadership certificate · 2024"
        },
        {
            index: "05",
            medal: "CC",
            tone: "silver",
            title: "Cross-Cultural Awareness",
            titleEn: "Cross-Cultural Awareness",
            note: "Làm việc hiệu quả với Úc · 2024",
            noteEn: "Working effectively with Australians · 2024"
        }
    ],

    translations: {
        'brand.name': { en: 'Nguyen Duy Khanh', vi: 'Nguyễn Duy Khánh' },
        'nav.home': { en: '00. Introduction', vi: '00. Giới thiệu' },
        'nav.pubs': { en: '01. Research', vi: '01. Nghiên cứu' },
        'nav.projects': { en: '02. Projects', vi: '02. Dự án' },
        'nav.activities': { en: '03. Milestones', vi: '03. Cột mốc' },
        'nav.awards': { en: '04. Achievements', vi: '04. Thành tích' },
        'nav.contact': { en: '05. Connect', vi: '05. Liên hệ' },

        'loader.status': { en: 'NGUYEN DUY KHANH · PORTFOLIO 2026', vi: 'NGUYỄN DUY KHÁNH · PORTFOLIO 2026' },
        'loader.sub': {
            en: 'SOFTWARE · DIGITAL MARKETING · PREMIUM SERVICES',
            vi: 'PHẦN MỀM · DIGITAL MARKETING · DỊCH VỤ PREMIUM'
        },

        'hud.scrollPrompt': { en: 'SCROLL TO TRACE THE SIGNAL', vi: 'CUỘN ĐỂ DẪN DẮT HÀNH TRÌNH' },
        'hud.chapterLabel': { en: 'ACTIVE CHAPTER', vi: 'CHƯƠNG HIỆN TẠI' },

        // PROLOGUE — 3D ROAD INTRO
        'intro.title': {
            en: 'From real-world data,<br>to useful <em>AI systems.</em>',
            vi: 'Từ dữ liệu đời thực,<br>đến những <em>hệ thống AI hữu ích.</em>'
        },
        'intro.scroll': { en: 'SCROLL TO BEGIN', vi: 'CUỘN ĐỂ BẮT ĐẦU' },
        'intro.skip': { en: 'SKIP ↓', vi: 'BỎ QUA ↓' },
        'intro.about.kicker': { en: 'Introduction', vi: 'Giới thiệu' },
        'intro.s1.kicker': { en: 'LINEAR REGRESSION', vi: 'HỒI QUY TUYẾN TÍNH' },
        'intro.s1.title': {
            en: 'Every deployment teaches<br>a clearer <em>path forward.</em>',
            vi: 'Mỗi lần triển khai<br>mở ra một <em>hướng đi rõ hơn.</em>'
        },
        'intro.s1.desc': {
            en: 'Healthcare, agriculture, and live interaction become measurable engineering outcomes through research, architecture, and field testing.',
            vi: 'Y tế, nông nghiệp và tương tác livestream trở thành kết quả kỹ thuật đo lường được qua nghiên cứu, kiến trúc và thử nghiệm thực địa.'
        },
        'intro.s2.title': {
            en: 'Bridge research with practice.<br><em>Build systems that serve people.</em>',
            vi: 'Kết nối nghiên cứu với thực hành.<br><em>Xây dựng hệ thống vì con người.</em>'
        },
        'intro.s5.title': {
            en: 'The next system starts<br>with a <em>new conversation.</em>',
            vi: 'Hệ thống tiếp theo bắt đầu<br>từ một <em>cuộc trò chuyện mới.</em>'
        },
        'intro.s6.kicker': { en: '01 · RESEARCH', vi: '01 · NGHIÊN CỨU' },
        'intro.s6.title': {
            en: 'Grounded AI.<br><em>Human-centered systems.</em>',
            vi: 'AI có cơ sở.<br><em>Hệ thống lấy con người làm trung tâm.</em>'
        },
        'intro.chart.title': { en: 'LINEAR REGRESSION · LEAST SQUARES', vi: 'HỒI QUY TUYẾN TÍNH · BÌNH PHƯƠNG TỐI THIỂU' },
        'intro.chart.x': { en: 'EFFORT · x', vi: 'NỖ LỰC · x' },
        'intro.chart.y': { en: 'y · GROWTH', vi: 'y · TIẾN BỘ' },
        'intro.chart.forecast': { en: 'FORECAST →', vi: 'DỰ BÁO →' },

        // CHAPTER 00 — HERO
        'hero.name': { en: 'NGUYEN DUY KHANH', vi: 'NGUYỄN DUY KHÁNH' },
        'hero.title': { en: 'Business Director | IT Project Executive | AI Strategist | Event MC', vi: 'Giám đốc kinh doanh | Điều phối viên dự án CNTT | Chuyên gia chiến lược AI | MC Sự kiện' },
        'hero.statement': {
            en: 'BUILDING DIGITAL <span class="editorial-serif">value</span> THROUGH TECHNOLOGY.',
            vi: 'KIẾN TẠO GIÁ TRỊ SỐ <span class="editorial-serif">bằng công nghệ.</span>'
        },
        'hero.desc': {
            en: 'Technology leader working across Edge-AI, full-stack systems, data architecture, automation, and event communication. Based in Long Xuyen, ready to work in Ho Chi Minh City and the Mekong Delta.',
            vi: 'Lãnh đạo công nghệ trong Edge-AI, hệ thống full-stack, kiến trúc dữ liệu, tự động hóa và truyền thông sự kiện. Làm việc tại Long Xuyên, sẵn sàng công tác tại TP.HCM, Cà Mau, Tây Ninh và khu vực lân cận.'
        },
        'hero.btnProjects': { en: 'Explore Projects', vi: 'Khám phá dự án' },
        'hero.btnContact': { en: 'Contact for Collaboration', vi: 'Liên hệ hợp tác' },
        'hero.portraitHint': {
            en: 'Click to inspect portrait',
            vi: 'Bấm để phóng to ảnh chân dung'
        },

        // CHAPTER 01 — ABOUT / THE WAY I THINK
        'about.eyebrow': { en: '01 · EXPERIENCE & TECHNOLOGY', vi: '01 · Kinh nghiệm & công nghệ' },
        'about.title': { en: 'Technology Expertise', vi: 'Chuyên môn công nghệ' },
        'about.lead': {
            en: 'Technology creates the most value when software, data, operations, and people work as one <span class="editorial-serif">connected system</span>.',
            vi: 'Công nghệ phát huy giá trị lớn nhất khi phần mềm, dữ liệu, vận hành và con người được kết nối thành một <span class="editorial-serif">hệ thống liền mạch</span>.'
        },
        'about.bio.title': { en: 'Technology & Growth', vi: 'Công nghệ & tăng trưởng' },
        'about.bio': {
            en: 'Beginning my software journey in 2019, I combine AI engineering, full-stack development, people management, public speaking, and disciplined Inner Engineering practice.',
            vi: 'Bắt đầu hành trình lập trình từ năm 2019, tôi kết hợp kỹ thuật AI, phát triển full-stack, quản lý con người, kỹ năng dẫn chương trình và thực hành Inner Engineering đều đặn.'
        },
        'about.edu.label': { en: 'EDUCATION JOURNEY', vi: 'HÀNH TRÌNH HỌC TẬP' },
        'about.edu.title': { en: 'Education & Foundations', vi: 'Đào tạo & Nền tảng' },
        'about.edu1.time': { en: '2025 — 2027', vi: '2025 — 2027' },
        'about.edu1.title': { en: 'An Giang University', vi: 'Trường Đại học An Giang' },
        'about.edu1.desc': {
            en: 'Master of Information Technology (in progress)',
            vi: 'Thạc sĩ Công nghệ Thông tin (đang theo học)'
        },
        'about.edu2.time': { en: '2015 — 2019', vi: '2015 — 2019' },
        'about.edu2.title': { en: 'An Giang University', vi: 'Trường Đại học An Giang' },
        'about.edu2.desc': {
            en: 'Bachelor of Information Technology',
            vi: 'Cử nhân Công nghệ Thông tin'
        },

        'skills.title': { en: 'Technical Capabilities', vi: 'Năng lực kỹ thuật' },
        'skills.g1.title': { en: 'Programming', vi: 'Lập trình' },
        'skills.g1.sub': { en: 'Languages & Tools', vi: 'Ngôn ngữ & Công cụ' },
        'skills.g1.desc': {
            en: 'Software development with Java, Angular, Node.js, MySQL, HTML, CSS, and Git.',
            vi: 'Phát triển phần mềm với Java, Angular, Node.js, MySQL, HTML, CSS và Git.'
        },
        'skills.g2.title': { en: 'Edge-AI & LLM Systems', vi: 'Edge-AI & hệ thống LLM' },
        'skills.g2.sub': { en: 'Models & Algorithms', vi: 'Mô hình & Thuật toán' },
        'skills.g2.desc': {
            en: 'Local RAG, Hybrid GraphRAG, TinyLlama, Qwen-VL, LLaVA-Med, Gemini API, and AI automation agents.',
            vi: 'Local RAG, Hybrid GraphRAG, TinyLlama, Qwen-VL, LLaVA-Med, Gemini API và tác tử tự động hóa AI.'
        },
        'skills.g3.title': { en: 'Systems & Operations', vi: 'Hệ thống & vận hành' },
        'skills.g3.sub': { en: 'Data & Deployment', vi: 'Dữ liệu & triển khai' },
        'skills.g3.desc': {
            en: 'PostgreSQL/PostGIS, Neo4j, Docker, Cloudflare Tunnels, system optimization, and field deployment.',
            vi: 'PostgreSQL/PostGIS, Neo4j, Docker, Cloudflare Tunnels, tối ưu hệ thống và triển khai thực địa.'
        },

        // CHAPTER 02 — EXPERIENCE / MILESTONES
        'act.eyebrow': { en: '03 · Milestones', vi: '03 · Cột mốc' },
        'act.title': { en: 'Milestones Over Time', vi: 'Cột mốc theo thời gian' },
        'act.subtitle': {
            en: 'Learning experiences, engineering operations, and scientific research orientation.',
            vi: 'Trải nghiệm học tập, vận hành hệ thống thực tế và định hướng nghiên cứu khoa học.'
        },
        'act.scrollHint': {
            en: 'SCROLL TO TRAVERSE MILESTONE STATIONS (01 → 03)',
            vi: 'CUỘN ĐỂ DI CHUYỂN QUA CÁC TRẠM CỘT MỐC (01 → 03)'
        },

        'act.infinite.time': { en: 'March 2019 — Present', vi: 'Tháng 3/2019 — Hiện tại' },
        'act.infinite.status': { en: 'Currently Working', vi: 'Đang làm việc' },
        'act.infinite.tag': { en: 'ENDAVA · IT DELIVERY & AUTOMATION', vi: 'ENDAVA · TRIỂN KHAI CNTT & TỰ ĐỘNG HÓA' },
        'act.infinite.title': { en: 'Endava', vi: 'Endava' },
        'act.infinite.role': {
            en: '<strong>Software Engineer · Automation Tester · Line Manager Apprentice</strong>',
            vi: '<strong>Kỹ sư phần mềm · Automation Tester · Line Manager Apprentice</strong>'
        },
        'act.infinite.desc': {
            en: 'Coordinate software delivery, testing, teams and automation workflows across complex IT environments, supported by structured reporting and cross-functional communication.',
            vi: 'Điều phối triển khai phần mềm, kiểm thử, nhóm và quy trình tự động hóa trong môi trường CNTT phức tạp, với báo cáo có cấu trúc và phối hợp liên chức năng.'
        },
        'act.infinite.spotlightBadge': { en: 'SOFTWARE & OPERATIONS', vi: 'PHẦN MỀM & VẬN HÀNH' },
        'act.infinite.spotlightTitle': { en: 'Building a Commercial Operations System', vi: 'Xây dựng Hệ thống Vận hành Thương mại' },
        'act.infinite.spotlightDesc': {
            en: 'Personally building and deploying all software solutions, automating business workflow chains to help the studio\'s business and product distribution system operate automatically and efficiently.',
            vi: 'Tự tay xây dựng và triển khai toàn bộ các giải pháp phần mềm, tự động hóa chuỗi quy trình nghiệp vụ, giúp hệ thống kinh doanh và phân phối sản phẩm của studio hoạt động tự động và hiệu quả.'
        },

        'act.seas.status': { en: 'Completed', vi: 'Đã hoàn thành' },
        'act.seas.tag': { en: 'MEGA CROP-COOP · AGRICULTURAL AI', vi: 'MEGA CROP-COOP · AI NÔNG NGHIỆP' },
        'act.seas.title': { en: 'MEGA CROP-COOP', vi: 'MEGA CROP-COOP' },
        'act.seas.role': {
            en: '<strong>Digital Transformation Operator</strong> · Tay Ninh field deployment',
            vi: '<strong>Người điều hành chuyển đổi số</strong> · Triển khai thực địa Tây Ninh'
        },
        'act.seas.spotlightTitle': { en: 'Agricultural digital transformation deployment in Tay Ninh', vi: 'Triển khai chuyển đổi số nông nghiệp tại Tây Ninh' },
        'act.seas.lead': { en: 'Project team lead', vi: 'Trưởng nhóm dự án' },
        'act.seas.noteKicker': { en: 'Program notes:', vi: 'Ghi chú chương trình:' },
        'act.seas.b1': {
            en: 'Conducted surveys, technical consulting, and AI platform deployment in Tay Ninh during August–October 2026.',
            vi: 'Khảo sát, tư vấn kỹ thuật và triển khai nền tảng AI trong các chuyến công tác tại Tây Ninh, tháng 8–10/2026.'
        },
        'act.seas.b2': {
            en: 'Applied local agricultural data, <strong>PostgreSQL/PostGIS</strong>, dashboards, and AI assistants for cooperative operations.',
            vi: 'Triển khai theo dữ liệu nông nghiệp địa phương, <strong>PostgreSQL/PostGIS</strong>, dashboard và trợ lý AI phục vụ hoạt động hợp tác xã.'
        },

        'act.schol.time': { en: '2025 — 2027', vi: '2025 — 2027' },
        'act.schol.tag': { en: 'MASTER\'S & ACADEMIC RESEARCH', vi: 'THẠC SĨ & NGHIÊN CỨU HỌC THUẬT' },
        'act.schol.title': { en: 'Master of Information Technology', vi: 'Thạc sĩ Công nghệ Thông tin' },
        'act.schol.badge': { en: 'Studying', vi: 'Đang học' },
        'act.schol.role': {
            en: 'An Giang University',
            vi: 'Trường Đại học An Giang'
        },
        'act.schol.content': {
            en: 'Master of Information Technology at An Giang University, in progress for 2025–2027.',
            vi: 'Theo học Thạc sĩ Công nghệ Thông tin tại Đại học An Giang, giai đoạn 2025–2027.'
        },
        'act.schol.note': {
            en: '<strong class="note-kicker">Research Direction:</strong> Collaborating with <strong>Assoc. Prof. Dr. Doan Thanh Nghi and Ton Thanh Tam</strong> on AI and digital platforms at An Giang University.',
            vi: '<strong class="note-kicker">Định hướng nghiên cứu:</strong> Hợp tác với <strong>PGS.TS Đoàn Thanh Nghị và Tôn Thanh Tâm</strong> trong các nghiên cứu AI và nền tảng số tại Đại học An Giang.'
        },

        // CHAPTER 03 — RESEARCH / EXPLORING THE UNKNOWN
        'pub.eyebrow': { en: '01 · Research & publications', vi: '01 · Nghiên cứu & công bố' },
        'pub.title': { en: 'Scientific Publications & Research Progress', vi: 'Công Bố Khoa Học & Tiến Độ Nghiên Cứu' },
        'pub.subtitle': {
            en: 'Safety-constrained Edge-AI in primary care and spatial, expert-validated intelligence for agricultural pest monitoring.',
            vi: 'Edge-AI an toàn trong chăm sóc sức khỏe ban đầu và trí tuệ không gian, có chuyên gia thẩm định, cho giám sát sâu bệnh nông nghiệp.'
        },
        'pub.question.vi': {
            en: 'When a Vietnamese prompt enters an LLM, across which hidden layers does it think — and where does it translate back?',
            vi: 'Khi một Prompt tiếng Việt đi vào LLM, mô hình suy luận ở tầng tiềm ẩn nào — và dịch ngược ở đâu, khi nào?'
        },
        'pub.p1.role': { en: 'Role: First Author', vi: 'Vai trò: Tác giả chính (First Author)' },
        'pub.p1.status': { en: 'Status: Under Review', vi: 'Trạng thái: Đang bình duyệt' },
        'pub.p1.venue': { en: '...', vi: '...' },
        'pub.p2.status': { en: 'Status: Presented at CV-S3 2026', vi: 'Trạng thái: Báo cáo tại CV-S3 2026' },
        'pub.role': { en: 'Web-GIS & Computer Vision Research', vi: 'Nghiên cứu Web-GIS & Computer Vision' },
        'pub.authorsLabel': { en: 'Authors:', vi: 'Tác giả:' },
        'pub.and': { en: 'and', vi: 'và' },
        'pub.wip.status': { en: 'Status: In Progress · Finalizing', vi: 'Trạng thái: Đang thực hiện · Đang hoàn thành' },
        'pub.wip.title': { en: 'Journals, conferences ...', vi: 'Tạp chí, hội nghị ...' },
        'pub.wip.progress': { en: 'Manuscripts being finalized.', vi: 'Bản thảo đang hoàn thiện.' },
        'pub.wip.desc': {
            en: 'Research is in the experimental stage, with manuscripts being finalized for submission to upcoming journals and conferences...',
            vi: 'Nghiên cứu đang trong giai đoạn thực nghiệm và hoàn thiện bản thảo để gửi tới các tạp chí, hội nghị tiếp theo...'
        },
        'pub.wip.jour': { en: 'Journal: In preparation...', vi: 'Tạp chí: Đang chuẩn bị...' },
        'pub.wip.conf': { en: 'Conference: In preparation...', vi: 'Hội nghị: Đang chuẩn bị...' },

        // CHAPTER 04 — PROJECTS / IDEAS INTO REALITY
        'projects.eyebrow': { en: '02 · Projects', vi: '02 · Dự án' },
        'projects.title': { en: 'Featured Projects', vi: 'Một số dự án nổi bật' },
        'projects.subtitle': {
            en: 'Four applied systems spanning Edge-AI healthcare, agricultural digital transformation, live interaction, and local AI automation.',
            vi: 'Bốn hệ thống thực tế từ Edge-AI chăm sóc sức khỏe, chuyển đổi số nông nghiệp, tương tác livestream đến tự động hóa AI tại máy.'
        },
        'projects.viewModeStage': { en: 'Spatial Theatre', vi: 'Không gian Trực quan' },
        'projects.viewModeLedger': { en: 'Full Index (06)', vi: 'Toàn bộ Danh mục (06)' },
        'projects.archLabel': { en: 'SYSTEM PIPELINE', vi: 'KIẾN TRÚC HỆ THỐNG' },
        'projects.techLabel': { en: 'TECHNOLOGY STACK', vi: 'CÔNG NGHỆ SỬ DỤNG' },
        'projects.gitBtn': { en: 'Explore Source on GitHub', vi: 'Xem mã nguồn trên GitHub' },

        // CHAPTER 05 — ACHIEVEMENTS / THE PROOF OF PROGRESS
        'awards.eyebrow': { en: '04 · Achievements', vi: '04 · Thành tích' },
        'awards.title': { en: 'Memorable Milestones', vi: 'Những cột mốc đáng nhớ' },
        'awards.subtitle': {
            en: 'Five competitive benchmarks across national STEM research, algorithmic programming, and physics olympiads.',
            vi: 'Năm dấu mốc khẳng định nỗ lực bền bỉ qua các kỳ thi nghiên cứu KHKT quốc gia, lập trình thuật toán và Olympic Vật lý.'
        },

        // CHAPTER 06 — CONTACT / THE NEXT CONNECTION
        'contact.eyebrow': { en: '05 · Connect', vi: '05 · Kết nối' },
        'contact.statement': {
            en: 'LET\'S BUILD <span class="editorial-serif">Something</span> MEANINGFUL.',
            vi: 'LET\'S BUILD <span class="editorial-serif">Something</span> MEANINGFUL.'
        },
        'contact.title': {
            en: 'Let\'s build <em class="accent-highlight not-italic">useful things together.</em>',
            vi: 'Cùng xây những <em class="accent-highlight not-italic">điều có ích.</em>'
        },
        'contact.desc': {
            en: 'If you have ideas about hardware, AI, or robotics, I am always open to discuss.',
            vi: 'Nếu bạn có ý tưởng về hardware, AI hoặc robotics, tôi luôn sẵn lòng trao đổi.'
        },
        'contact.facebookName': { en: 'Duy Khanh', vi: 'Duy Khánh' },
        'contact.copyEmail': { en: 'Copy Email', vi: 'Sao chép Email' },
        'contact.copied': { en: 'Copied to clipboard!', vi: 'Đã sao chép!' },

        // FOOTER
        'footer.tagline': { en: 'Human-centered AI Systems', vi: 'Hệ thống AI lấy con người làm trung tâm' },
        'footer.desc': {
            en: 'Designed with precision & a spirit of exploration.',
            vi: 'Thiết kế với sự chỉn chu & tinh thần khám phá.'
        },
        'footer.backTop': { en: 'RETURN TO ORIGIN ↑', vi: 'VỀ ĐIỂM KHỞI ĐẦU ↑' }
    }
};
