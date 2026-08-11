/**
 * 全站文案集中在這裡。要改內容只需要動這個檔案，不必碰任何 template。
 */

export type TagTone = 'blue' | 'teal' | 'gold';

/** 段落中的一小段文字；strong 為 true 時以主色粗體呈現 */
export interface RichSpan {
  readonly text: string;
  readonly strong?: boolean;
}

export interface NavLink {
  readonly href: string;
  readonly label: string;
}

export interface ActionLink {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
}

export interface Stat {
  readonly value: string;
  /** 接在數字後面的小字，例如 20 後面的 "+" */
  readonly suffix?: string;
  readonly label: string;
}

export interface IconItem {
  readonly icon: string;
  readonly title: string;
  readonly desc: string;
}

export interface TechGroup {
  readonly label: string;
  readonly tone: TagTone;
  readonly items: readonly string[];
}

export interface ProcessStep {
  readonly step: number;
  readonly title: string;
  readonly desc: string;
}

export interface ContactInfo {
  readonly icon: string;
  readonly label?: string;
  readonly value: string;
  /** true 時 value 以白色粗體強調（對應原始頁的 <strong>） */
  readonly emphasize?: boolean;
}

export interface SectionIntro {
  readonly eyebrow: string;
  readonly title: string;
  readonly lead?: string;
}

/* ── 基本資料 ───────────────────────────────────────────────── */

export const SITE = {
  brand: '游至皓 Yu Chih Hao',
  title: '游至皓 Yu Chih Hao｜資深全端工程師 × AI 賦能開發',
  description:
    '20 年學術機構資訊系統開發經驗，ISO 27001 主導稽核員，Gemini / Claude 協作開發，提供穩定、精準、準時交付的專業技術支援。',
  email: '930229@gmail.com',
  lineId: 'crane.yu',
  lineUrl: 'https://line.me/ti/p/~crane.yu',
  copyright: '© 2026 游至皓 Yu Chih Hao · 資深全端工程師 · All rights reserved.',
} as const;

export const NAV_LINKS: readonly NavLink[] = [
  { href: '#about', label: '關於我' },
  { href: '#services', label: '服務項目' },
  { href: '#tech', label: '技術棧' },
  { href: '#highlights', label: '專案亮點' },
  { href: '#contact', label: '洽詢合作' },
];

/* ── Hero ──────────────────────────────────────────────────── */

export const HERO = {
  eyebrow: 'Senior Full-Stack Engineer & Consultant',
  headline: '讓每個系統',
  headlineEmphasis: '穩定、安全、準時上線',
  tagline:
    '20 年學術機構資訊系統開發經驗，ISO 27001 主導稽核員，Gemini / Claude AI 協作開發，從設計到交付，全程專業護航。',
  actions: [
    { label: '📧 Email 洽詢', href: `mailto:${SITE.email}` },
    { label: '💬 LINE 聯繫', href: SITE.lineUrl, external: true },
  ] as readonly ActionLink[],
  badges: [
    '🤖 AI 賦能開發',
    '🔐 ISO 27001 認證',
    '⚡ 全端整合',
    '🏛️ 學術機構深耕',
  ] as readonly string[],
  stats: [
    { value: '20', suffix: '+', label: '年開發經驗' },
    { value: 'AI', label: '協作開發' },
    { value: 'ISO', label: '27001 稽核員' },
    { value: '全端', label: '系統整合' },
  ] as readonly Stat[],
} as const;

/* ── About ─────────────────────────────────────────────────── */

export const ABOUT_INTRO: SectionIntro = {
  eyebrow: 'About Me',
  title: '個人價值主張',
  lead: '兼顧技術深度、資安合規與交付效率的資深全端工程師',
};

// 註：粗體前後的半形空格刻意保留，與原始靜態頁的斷行渲染結果一致。
// 原頁的空格分布本身並不一致（「開發經驗」「主導稽核員」後面沒有空格，
// 「Claude」後面有），這裡照實移植，未擅自統一。
export const ABOUT_PARAGRAPHS: readonly (readonly RichSpan[])[] = [
  [
    { text: '我是一位擁有 ' },
    { text: '20 年學術機構資訊系統開發經驗', strong: true },
    {
      text: '的資深全端工程師，專注於複雜業務邏輯整合、舊系統現代化重構，以及兼顧效率與安全的系統設計。',
    },
  ],
  [
    { text: '為提供接案客戶最高效的服務，我已將 ' },
    { text: 'Gemini 與 Claude', strong: true },
    {
      text: ' 深度融入日常開發與架構設計流程，大幅加速交付週期並確保程式碼品質。同時，我持有 ',
    },
    { text: 'ISO 27001 主導稽核員', strong: true },
    { text: '資格，能在開發初期即建立嚴格的資安防護網。' },
  ],
  [
    {
      text: '無論是企業內部系統建置、外部平台串接或外包專案開發，我皆能提供穩定、精準、準時交付的專業技術支援。',
    },
  ],
];

export const VALUE_PROPS: readonly IconItem[] = [
  {
    icon: '🎯',
    title: '精準估時・高效交付',
    desc: '20 年實戰經驗 + AI 輔助開發，透明進度、如期上線',
  },
  {
    icon: '🔐',
    title: '資安合規・從源頭防護',
    desc: 'ISO 27001 稽核員資格，系統設計初期即納入安全需求',
  },
  {
    icon: '🤖',
    title: 'AI 賦能・提升開發品質',
    desc: 'Gemini / Claude 協作架構規畫、程式碼輔助與效能重構',
  },
  {
    icon: '💬',
    title: '流暢溝通・長期維運後盾',
    desc: '熟悉接案節奏，彈性配合時程，提供持續可靠的技術支撐',
  },
];

/* ── Services ──────────────────────────────────────────────── */

export const SERVICES_INTRO: SectionIntro = {
  eyebrow: 'Services',
  title: '核心服務項目',
  lead: '從需求分析到系統上線，提供端到端的全端工程支援',
};

export const SERVICES: readonly IconItem[] = [
  {
    icon: '🏗️',
    title: '企業內部系統建置',
    desc: '從資料庫設計、後端邏輯到前端整合，具備獨立完成全端作戰的能力，涵蓋行政、學術、財務等多元業務場景。',
  },
  {
    icon: '🔄',
    title: '舊系統現代化重構',
    desc: '將傳統 WebForm / ASP 系統全面升級重構為 Angular + Web API 現代化架構，提升維護性、擴充性與使用者體驗。',
  },
  {
    icon: '🔗',
    title: '跨系統整合與 API 串接',
    desc: '具備門禁與停車場系統介接、信用卡與 Taiwan Pay 等多元繳費金流整合、虛擬帳號查驗、第三方 API 串接與校務流程整合的豐富實戰經驗。',
  },
  {
    icon: '🛡️',
    title: '資安合規導向開發',
    desc: '以 ISO 27001 視角進行系統設計，整合 Token 驗證、FIDO2 身分認證，從源頭降低稽核風險。',
  },
  {
    icon: '🤖',
    title: 'AI 輔助架構規畫',
    desc: '運用 Gemini / Claude 進行需求拆解、架構設計與程式碼輔助生成，大幅縮短開發週期並確保品質。',
  },
  {
    icon: '⚙️',
    title: '自動化流程與系統維運',
    desc: '主導帳號申請自動化、排程備份、報表系統、門禁控制整合，以及虛擬化環境的日常維運。',
  },
];

/* ── Tech stack ────────────────────────────────────────────── */

export const TECH_INTRO: SectionIntro = {
  eyebrow: 'Tech Stack',
  title: '技術棧 & 關鍵字',
};

export const TECH_GROUPS: readonly TechGroup[] = [
  {
    label: '前端',
    tone: 'blue',
    items: ['Angular', 'Vue', 'AG Grid', 'Tailwind CSS'],
  },
  {
    label: '後端 & API',
    tone: 'blue',
    items: ['.NET Core', 'C#', 'Web API', 'EF Core', 'Node.js', 'PHP'],
  },
  {
    label: '資料庫 & 基礎建設',
    tone: 'teal',
    items: ['SQL Server', 'MySQL', 'Git'],
  },
  {
    label: '資安 & 認證',
    tone: 'gold',
    items: ['ISO 27001', 'FIDO2', 'Taiwan Pay'],
  },
  { label: 'AI 協作', tone: 'gold', items: ['Gemini', 'Claude'] },
];

/* ── Highlights ────────────────────────────────────────────── */

export const HIGHLIGHTS_INTRO: SectionIntro = {
  eyebrow: 'Expertise',
  title: '專案能力亮點',
  lead: '深耕學術與行政機構多年，理解各處室的真實運作痛點',
};

export const HIGHLIGHTS: readonly IconItem[] = [
  {
    icon: '🔄',
    title: '舊系統現代化重構',
    desc: '將傳統 WebForm 系統重構為 Angular + Web API 架構，提升維護性、擴充性與使用體驗。',
  },
  {
    icon: '💳',
    title: '跨系統整合與金流串接',
    desc: '門禁與停車場系統介接，信用卡、Taiwan Pay 與虛擬帳號查驗等多元繳費整合，確保交易資料即時性與高安全性。',
  },
  {
    icon: '🛡️',
    title: '資安與稽核導向設計',
    desc: '從系統設計初期納入 ISO 27001 與身分驗證需求，降低後續稽核與漏洞修補成本。',
  },
  {
    icon: '📋',
    title: '校務流程自動化',
    desc: '主導校務資訊入口網建置，將帳號申請、排課、客製化報表與人事線上考核等流程自動化，並整合停車場租賃、場地借用與門禁控制管理。',
  },
  {
    icon: '🤖',
    title: 'AI 協作開發流程',
    desc: '運用 Gemini 與 Claude 進行架構規畫、程式碼輔助生成與效能重構，大幅提升交付效率。',
  },
  {
    icon: '🗄️',
    title: '資料庫設計與維運',
    desc: '精通 SQL Server / MySQL 正規化設計、效能調校、自動化備份排程與異地備援（DR）。',
  },
];

/* ── Process ───────────────────────────────────────────────── */

export const PROCESS_INTRO: SectionIntro = {
  eyebrow: 'Workflow',
  title: '合作流程',
  lead: '清晰透明的合作節奏，從需求到交付全程可追蹤',
};

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    step: 1,
    title: '需求訪談',
    desc: '深入了解業務痛點、系統現況與目標，釐清範圍與優先順序',
  },
  {
    step: 2,
    title: '架構規畫',
    desc: '提出技術方案、資料庫設計草圖與 API 規格，確認可行性與成本',
  },
  {
    step: 3,
    title: '開發交付',
    desc: 'AI 輔助開發加速迭代，階段性交付可測試版本，透明回報進度',
  },
  {
    step: 4,
    title: '上線維運',
    desc: '協助部署、資安稽核配合、教育訓練，並提供長期維運支援',
  },
];

/* ── Contact / CTA ─────────────────────────────────────────── */

export const CONTACT = {
  title: '準備好開始合作了嗎？',
  desc: '無論是新系統建置、舊系統重構、API 串接或資安合規需求，歡迎直接聯繫，我會在 24 小時內回覆。',
  actions: [
    { label: '📧 發送 Email', href: `mailto:${SITE.email}` },
    { label: '💬 LINE 洽詢', href: SITE.lineUrl, external: true },
  ] as readonly ActionLink[],
  info: [
    { icon: '📧', value: SITE.email, emphasize: true },
    { icon: '💬', label: 'LINE：', value: SITE.lineId, emphasize: true },
    { icon: '🕐', value: '通常 24 小時內回覆' },
  ] as readonly ContactInfo[],
} as const;
