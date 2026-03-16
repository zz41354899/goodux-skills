# Good UX Skills

專業的 UX 設計技能包，符合 Agent Skills 標準。**5 大設計思考流程 + 內建 20 個 UI 風格**，一行指令安裝到 AI 工具中使用。

## 功能特色

- 📚 **5 大設計思考流程** - Empathize 同理洞察、Define 問題定義、Ideate 發想構思、Prototype 原型製作、Test 可用性驗證
- 🤖 **6 種 AI 工具支援** - Windsurf、Cursor、Claude Code、Continue、Cline、Aider
- 🎨 **20 個 UI 風格** - 內建精選視覺風格資料庫，涵蓋科技極簡、賽博龐克、日式和風等多種風格
- 🛡️ **避免錯亂機制** - 一次只推薦一個 skill、衝突解決規則、專案狀態檢測
- 💻 **開發選項** - Ideate/Prototype 階段可選 React + Shadcn/UI 直接實作測試
- ⚡ **強大 CLI** - 多工具支援、單一技能選裝、JSON 輸出、dry-run 模擬
- 🔧 **簡潔架構** - 11 個 references 檔案，易於維護和擴展
- 🌐 **現代化網站** - Next.js 14 + TypeScript + Tailwind CSS

## 技術棧

- **框架**: Next.js 14 (App Router)
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **圖示**: Lucide React
- **部署**: Vercel (推薦)

## 快速開始

### 安裝技能包到 AI 工具

```bash
# 安裝所有技能（預設支援當前工具）
npx goodux-ux-skills

# 支援多個 AI 工具（v2.2.0 新功能）
npx goodux-ux-skills --tool windsurf --tool cursor --tool claude-code

# 列出支援的 AI 工具
npx goodux-ux-skills --list-tools

# 只安裝指定技能
npx goodux-ux-skills -s empathize -s ideate -s prototype

# 強制覆蓋更新
npx goodux-ux-skills -f

# 列出所有可用技能
npx goodux-ux-skills --list

# 列出 UI 視覺風格庫（20 個風格）
npx goodux-ux-skills --list-styles

# JSON 格式輸出（適合 CI/CD）
npx goodux-ux-skills --json
```

### 本地開發網站

```bash
# 安裝依賴
npm install

# 開發模式
npm run dev

# 建置生產版本
npm run build
npm start
```

在瀏覽器中開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

## 專案結構

```
goodux-skills/
├── app/                      # Next.js App Router 頁面
│   ├── globals.css          # 全域樣式
│   ├── layout.tsx           # 根佈局
│   ├── page.tsx             # 首頁
│   ├── skills/              # 技能相關頁面
│   │   ├── page.tsx         # 技能列表頁
│   │   └── [id]/            # 技能詳細頁
│   └── getting-started/     # 開始學習頁面
├── components/              # React 元件
│   └── Navigation.tsx       # 導航元件
├── lib/                     # 工具函式和資料
│   ├── skills.ts           # 技能資料和類型定義
│   └── cn.ts               # 樣式工具函式
└── public/                  # 靜態資源
```

## 技能清單

### 設計思考五大流程

1. **Empathize 同理洞察** (`empathize`) - 使用者訪談、人物誌與研究洞察整理
2. **Define 問題定義** (`define`) - 問題界定、需求優先順序、限制與成功指標（含 a11y 規範）
3. **Ideate 發想構思** (`ideate`) - 概念發散、線框與視覺方向探索（含 20 種 UI 風格參考）
4. **Prototype 原型製作** (`prototype`) - 建立可操作的互動原型
5. **Test 可用性驗證** (`test`) - 可用性測試與回饋收斂（可涵蓋 a11y 驗證）

### References 參考資料（11 個）

位於 `.agents/skills/references/`，包含：

**使用指引（2 個）**：
- `SKILL_USAGE_GUIDE.md` - Skill 使用規則、避免錯亂、專案檢測、開發選項
- `KEYWORDS_LIBRARY.md` - 五大技能的觸發關鍵字與衝突解決規則

**詳細方法（9 個）**：
- `user-interview`, `persona-creation`, `information-architecture`, `wireframing`, `ui-visual-design`, `usability-testing`, `accessibility-design`, `design-system`, `prototyping`

各核心技能的 SKILL.md 內含對應 references 的引用說明。

## 如何貢獻

歡迎貢獻新的技能或改善現有內容!

1. Fork 此專案
2. 建立你的功能分支 (`git checkout -b feature/AmazingSkill`)
3. 提交你的修改 (`git commit -m 'Add some AmazingSkill'`)
4. 推送到分支 (`git push origin feature/AmazingSkill`)
5. 開啟 Pull Request

## 贊助支持

如果這個專案對你有幫助，歡迎請我喝杯咖啡 ☕

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-支持專案-orange?style=for-the-badge&logo=buy-me-a-coffee)](https://buymeacoffee.com/zz41354899y)

## 授權

MIT License

## 致謝

本專案靈感來自 [OpenAI Codex Skills](https://developers.openai.com/codex/skills/)
