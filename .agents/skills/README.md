# Good UX Skills

> 專業的 UX 設計技能包 - 符合 [Agent Skills](https://agentskills.io/) 標準的可安裝技能庫

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Agent Skills](https://img.shields.io/badge/Agent-Skills-blue.svg)](https://agentskills.io/)

## 📚 簡介

Good UX Skills 是一套完整的 UX 設計技能庫,涵蓋從使用者研究到設計系統的各個面向。每個技能都包含:

- ✅ 詳細的執行步驟
- ✅ 最佳實踐指南
- ✅ 實際範例
- ✅ 常見問題解答
- ✅ 相關工具推薦

所有技能都符合 [Agent Skills 標準](https://agentskills.io/specification),可在支援 Agent Skills 的工具中使用。

## 🎯 包含的技能

### 使用者研究
- **使用者訪談** (`user-interview`) - 透過深度訪談了解使用者需求和痛點
- **使用者人物誌** (`persona-creation`) - 創建代表性的使用者角色

### 介面設計
- **資訊架構設計** (`information-architecture`) - 組織和結構化資訊內容
- **線框圖設計** (`wireframing`) - 快速繪製低保真度介面草圖

### 測試與驗證
- **可用性測試** (`usability-testing`) - 觀察使用者互動,發現可用性問題

### 無障礙與系統
- **無障礙設計** (`accessibility-design`) - 確保產品符合 WCAG 標準
- **設計系統建立** (`design-system`) - 創建可重複使用的元件庫

### 原型製作
- **互動原型製作** (`prototyping`) - 創建可互動的高保真原型

## 🚀 安裝方式

### 方法 1: 使用 npx (推薦)

```bash
npx @goodux/skills
```

### 方法 2: 全域安裝

```bash
npm install -g @goodux/skills
goodux-skills
```

### 方法 3: 專案內安裝

```bash
npm install @goodux/skills
```

安裝後,技能會自動複製到 `.agents/skills` 目錄。

## 📖 使用方式

### 在 Windsurf / Claude Code 中使用

安裝後,技能會自動被偵測到。你可以:

1. **隱式調用**: 當你的任務匹配技能描述時,AI 會自動選擇合適的技能
2. **顯式調用**: 直接提及技能名稱或使用工具提供的技能選單

```
範例:
"請幫我規劃一個使用者訪談" → AI 會自動使用 user-interview 技能
"使用 wireframing 技能幫我設計購物車頁面的線框圖"
"在 Windsurf 中可以使用 /skills 選單或 $skill-name 語法"
```

### 在其他支援 Agent Skills 的工具中使用

只要工具支援 Agent Skills 標準,就會自動掃描 `.agents/skills` 目錄並載入技能。

## 📁 目錄結構

```
.agents/skills/
├── user-interview/
│   └── SKILL.md
├── persona-creation/
│   └── SKILL.md
├── information-architecture/
│   └── SKILL.md
├── wireframing/
│   └── SKILL.md
├── usability-testing/
│   └── SKILL.md
├── accessibility-design/
│   └── SKILL.md
├── design-system/
│   └── SKILL.md
└── prototyping/
    └── SKILL.md
```

## 💡 使用範例

### 範例 1: 規劃使用者訪談

```
提示: "我需要了解電商使用者的購物習慣,請幫我規劃使用者訪談"

AI 會使用 $user-interview 技能,提供:
- 訪談目標設定
- 受訪者招募建議
- 訪談大綱範本
- 執行步驟
- 分析方法
```

### 範例 2: 建立設計系統

```
提示: "$design-system 幫我建立一個設計系統的基礎架構"

AI 會提供:
- Design Tokens 定義
- 顏色系統
- 字體系統
- 間距系統
- 元件優先順序
```

### 範例 3: 進行可用性測試

```
提示: "我想測試新的結帳流程,請幫我設計可用性測試"

AI 會使用 $usability-testing 技能,協助:
- 定義測試目標
- 設計測試任務
- 招募參與者
- 執行測試
- 分析結果
```

## 🛠️ 技能詳細說明

每個技能都包含以下章節:

- **概述**: 技能的定義和重要性
- **何時使用**: 適用的情境和時機
- **執行步驟**: 詳細的操作指南
- **最佳實踐**: 專業設計師的經驗分享
- **範例輸出**: 實際的應用範例
- **常見問題**: 常見問題解答
- **相關技能**: 相關聯的其他技能

## 🌟 特色

- ✅ **正體中文**: 完整的繁體中文內容
- ✅ **實戰導向**: 可直接應用於實際專案
- ✅ **標準相容**: 符合 Agent Skills 規範
- ✅ **持續更新**: 定期更新最佳實踐
- ✅ **開源免費**: MIT 授權,自由使用

## 🤝 貢獻

歡迎貢獻新的技能或改善現有內容!

1. Fork 此專案
2. 建立你的功能分支 (`git checkout -b feature/amazing-skill`)
3. 提交你的修改 (`git commit -m 'Add some amazing skill'`)
4. 推送到分支 (`git push origin feature/amazing-skill`)
5. 開啟 Pull Request

### 技能格式規範

請參考 [Agent Skills 規範](https://agentskills.io/specification) 確保你的技能符合標準:

```markdown
---
name: skill-name
description: 技能描述,說明做什麼和何時使用
license: MIT
metadata:
  author: your-name
  version: "1.0.0"
  category: category-name
  language: zh-TW
---

# 技能標題

## 概述
...

## 何時使用
...

## 執行步驟
...
```

## 📄 授權

MIT License - 詳見 [LICENSE](LICENSE) 文件

## 🔗 相關資源

- [Agent Skills 官網](https://agentskills.io/)
- [Agent Skills 規範](https://agentskills.io/specification)
- [Windsurf](https://codeium.com/windsurf)
- [Good UX Skills 網站](https://goodux-skills.vercel.app/)

## 📮 聯絡方式

- GitHub Issues: [提出問題](https://github.com/zz41354899/goodux-skills/issues)
- Email: usefulvibecode@gmail.com

## 🙏 致謝

感謝 [Agent Skills](https://agentskills.io/) 提供的開放標準,讓技能可以跨工具使用。

---

Made with ❤️ by Good UX Team
