# Good UX Skills

一個現代化的 UX 設計技能學習平台,參考 OpenAI Codex Skills 的結構設計。

## 功能特色

- 📚 **結構化技能庫** - 涵蓋使用者研究、介面設計、原型製作、可用性測試、無障礙設計和設計系統等領域
- 🎯 **清晰的學習路徑** - 從初學者到專家的完整學習指引
- 💡 **實戰導向** - 每個技能都包含使用時機、執行步驟、最佳實踐和實際範例
- 🎨 **現代化 UI** - 使用 Next.js 14、TypeScript、Tailwind CSS 和 Lucide Icons 打造
- 📱 **響應式設計** - 完美支援桌面和行動裝置

## 技術棧

- **框架**: Next.js 14 (App Router)
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **圖示**: Lucide React
- **部署**: Vercel (推薦)

## 快速開始

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

在瀏覽器中開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

### 建置生產版本

```bash
npm run build
npm start
```

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

## 技能分類

1. **使用者研究** - 使用者訪談、人物誌等
2. **介面設計** - 資訊架構、線框圖等
3. **原型製作** - 互動原型設計
4. **可用性測試** - 使用者測試方法
5. **無障礙設計** - WCAG 標準和實踐
6. **設計系統** - 元件庫和設計規範

## 如何貢獻

歡迎貢獻新的技能或改善現有內容!

1. Fork 此專案
2. 建立你的功能分支 (`git checkout -b feature/AmazingSkill`)
3. 提交你的修改 (`git commit -m 'Add some AmazingSkill'`)
4. 推送到分支 (`git push origin feature/AmazingSkill`)
5. 開啟 Pull Request

## 授權

MIT License

## 致謝

本專案靈感來自 [OpenAI Codex Skills](https://developers.openai.com/codex/skills/)
