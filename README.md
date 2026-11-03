# Interactive AI Portfolio

<div align="center">

[![Website](https://img.shields.io/badge/Website-Live-111827?style=for-the-badge&logo=githubpages&logoColor=22d3ee)](https://duykhanh151097.github.io/website/)
Website portfolio tương tác về Edge AI, Full-stack, quản trị dữ liệu, nghiên cứu khoa học và chuyển đổi số thực địa.

</div>

---

## Giới thiệu

Portfolio này được thiết kế theo phong cách hệ thống công nghệ tương lai, kết hợp motion tiếp tục, hiệu ứng tương tác theo chuột, canvas animation và trải nghiệm song ngữ Việt — Anh.

## Điểm nổi bật

- Tương tác canvas, parallax và hiệu ứng theo pointer
- Animation liên tục với `prefers-reduced-motion`
- Tối ưu riêng cho desktop, tablet và thiết bị cảm ứng
- Chuyển đổi ngôn ngữ Việt — Anh
- Nội dung được quản lý tập trung trong `js/data.js`
- Tùy biến giao diện và showcase dự án bằng JavaScript thuần
- Giao diện responsive, không phụ thuộc framework frontend

## Chuyên môn

| Lĩnh vực | Công nghệ & nền tảng |
|---|---|
| AI & Edge Computing | Gemini API, GitHub Copilot, TinyLlama, Qwen-VL, LLaVA-Med |
| Retrieval & Knowledge | RAG, Hybrid GraphRAG, Neo4j, embeddings |
| Backend | Python, Node.js, FastAPI, WebSocket, RPC |
| Database | PostgreSQL, PostGIS, pgvector |
| DevOps | Docker, Cloudflare Tunnels |
| Frontend | Next.js, Tailwind CSS, JavaScript, HTML, CSS |

## Các dự án tiêu biểu

### AI-BMT / ChronicCare AI
Hệ thống chatbot Edge AI hỗ trợ quản lý bệnh mãn tính, được triển khai tại CDC Cà Mau với Hybrid GraphRAG, local LLM inference và quy trình bảo vệ dữ liệu y tế.

### MEGA CROP-COOP
Nền tảng chuyển đổi số và trợ lý AI phục vụ hợp tác xã, vận hành dữ liệu nông nghiệp tại Tây Ninh.

### TikTok Live Interaction AI
Hệ sinh thái tương tác livestream thời gian thực xây dựng bằng Node.js WebSocket và RPC.

### AI Automation Platform
Tác tử AI và local RAG pipeline kết hợp Neo4j, TinyLlama, Qwen-VL và LLaVA-Med.

## Công nghệ dự án web

- **HTML5** — cấu trúc trang và nội dung fallback
- **CSS3** — thiết kế cinematic, animation và responsive layout
- **JavaScript thuần** — routing tương tác, animation và quản lý ngôn ngữ
- **Canvas API** — hero/không gian tương tác và hiệu ứng chuyển động
- **Intersection Observer** — tối ưu render theo vùng hiển thị
- **GitHub Pages** — triển khai website

## Cấu trúc thư mục

```text
website/
├── index.html          # Entry point của website
├── styles.css          # Theme, layout và motion system
├── script.js           # Script hỗ trợ và tương tác
├── README.md           # Tài liệu dự án
├── images/             # Ảnh PNG và JPG của portfolio
├── docs/               # CV, chứng nhận và tài liệu nghiên cứu
└── js/
    ├── data.js         # Nội dung song ngữ và dữ liệu website
    ├── main.js         # Điều phối giao diện chính
    ├── chapters.js     # Cấu trúc section
    ├── visuals.js      # Visualization và showcase dự án
    ├── road-intro.js   # Canvas hero
    ├── after-space.js  # Canvas và hiệu ứng không gian
    ├── motion-path.js  # Motion path
    └── skill-viz.js    # Visualization kỹ năng
```

## Chạy local

Không cần cài dependency hoặc build. Mở trực tiếp `index.html` hoặc chạy một static server:

```bash
cd personal-website-main
python -m http.server 3000
```

Sau đó truy cập:

```text
http://localhost:3000
```

## Triển khai GitHub Pages

1. Chọn repository `website`.
2. Mở **Settings → Pages**.
3. Trong **Build and deployment**, chọn `Deploy from a branch`.
4. Chọn nhánh `main` và thư mục `/ (root)`.
5. Lưu cấu hình để kích hoạt GitHub Pages.

URL dự kiến:

```text
https://duykhanh151097.github.io/website/
```

## Cập nhật nội dung và hình ảnh

- Nội dung bilingual: `js/data.js`
- Nội dung/section cố định: `index.html`
- Giao diện và responsive: `styles.css`
- Animation và tương tác: thư mục `js/`
- Hồ sơ/hình ảnh dự án: thư mục `images/`
- Tài liệu CV/chứng nhận: thư mục `docs/`

README của dự án được tối ưu để hiển thị trên GitHub, nhưng website không sử dụng SVG làm asset chính; hình ảnh portfolio được lưu ở định dạng PNG/JPG.
