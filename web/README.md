# 個人作品集 — Angular 22 + Tailwind CSS 4

由原本根目錄的單檔靜態頁 `index.html` 重構而成（該檔已於 Angular 版接手站台根目錄後刪除）。
版面、間距與斷點行為以原始頁為基準，已用無頭瀏覽器逐區塊比對驗證（見下方「與原始頁的差異」）。

## 開發

```bash
npm start          # 開發伺服器 http://localhost:4200
npm run build      # 產出到 dist/web/browser
npx prettier --write "src/**/*.{ts,html,css}"
```

## 部署與預先渲染

`angular.json` 的 `outputMode: "static"` 會在建置階段就把路由渲染成完整 HTML
（`@angular/ssr` 提供，但不需要 Node 伺服器），因此：

- 產出的 `index.html` 內含實際內容，**關閉 JavaScript 也看得到**
- 純靜態檔案即可部署，適用 GitHub Pages
- `provideClientHydration()` 讓瀏覽器端接管既有 DOM 而非重畫

`.github/workflows/deploy-pages.yml` 會在 push 到 `main` 時自動建置並發佈：

| 網址 | 內容 |
|---|---|
| `/` | 此 Angular 專案 |
| `/Taichung2D1N.html` | 既有靜態旅遊頁，原樣保留 |
| `/app/` | 轉址到 `/`（此路徑短暫使用過，留著避免死連結） |

workflow 中有一道檢查：若首頁 HTML 不含預期文字，代表預先渲染失效，建置會直接失敗，
避免靜默部署出空殼頁面。

## 結構

```
src/
├── index.html                        # 標題與 meta description
├── styles.css                        # Tailwind 匯入 + @theme 設計 token + 共用 .btn / .tag
└── app/
    ├── app.ts / app.html             # 組合各區塊
    ├── data/site-content.ts          # ★ 全站文案集中在此，改內容只需要動這個檔案
    ├── shared/section-heading/        # 各區塊共用的置中標題（eyebrow / 主標 / 分隔線 / 說明）
    └── sections/
        ├── site-header/              # 置頂導覽列 + 手機漢堡選單
        ├── hero-section/
        ├── about-section/
        ├── services-section/
        ├── tech-section/
        ├── highlights-section/
        ├── process-section/
        ├── contact-section/
        └── site-footer/
```

所有元件皆為 standalone、`OnPush`，專案以 zoneless 模式執行（無 zone.js）。

## 設計 token

原始頁的 `:root` CSS 變數改寫進 `styles.css` 的 `@theme`，因此可直接當 utility 使用：
`bg-primary`、`text-ink-soft`、`border-line`、`rounded-card`、`shadow-hero`、`max-w-page` 等。

自訂斷點 `mid:` = 960px，對應原始頁的 `@media (max-width: 960px)`。
**注意**：必須寫成 `60rem` 而非 `960px` — Tailwind 依數值排序斷點，混用單位會讓
`mid:` 排到 `sm:` 之前，導致 `sm:` 規則反過來覆蓋 `mid:`。

## 與原始頁的差異

1. **導覽列對齊**：原始頁的全域 `li + li { margin-top: 8px }` 會外洩到 nav，把第 2～5 個
   項目往下推 8px。此版本沒有這個問題（Tailwind preflight 已將清單邊距歸零）。
2. **斷點邊界**：原始頁在 `max-width: 640px` 顯示漢堡選單；此版本用 Tailwind 慣例的
   `sm:`（`min-width: 640px`）。差別僅在視窗寬度「正好 640px」時，原始頁顯示漢堡、
   此版本顯示桌機選單。
3. **贅空格**：原始頁因 prettier 換行，在全形逗號後留下多餘半形空格
   （`主導稽核員，␣Gemini`、`資安合規需求，␣歡迎`），此版本已移除。
   中英文交界處的空格（`我是一位擁有 20 年…`）則保留。
4. **漢堡選單實作**：原本的 checkbox + `:has()` 純 CSS 方案改為 signal 驅動，
   改用 `<button>` 並帶 `aria-expanded` / `aria-controls`，可存取性較佳。
