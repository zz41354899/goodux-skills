# Good UX Skills

> 專業的 UX 設計技能包 — 符合 [Agent Skills](https://agentskills.io/) 標準的可安裝技能庫

[![npm version](https://img.shields.io/npm/v/goodux-ux-skills.svg)](https://www.npmjs.com/package/goodux-ux-skills)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Agent Skills](https://img.shields.io/badge/Agent-Skills-blue.svg)](https://agentskills.io/)

## 📚 簡介

Good UX Skills 是一套完整的 UX 設計技能庫，涵蓋從使用者研究到設計系統的各個面向。**9 個實戰技能 + 內建 20 個 UI 風格**，一行指令安裝到 AI 工具中使用。

### ✨ 特色

- 🎯 **9 個專業技能** - 使用者訪談、人物誌、資訊架構、線框圖、UI 視覺設計、可用性測試、無障礙設計、設計系統、原型製作
- 🤖 **Agent Skills 標準** - 直接整合到 Windsurf、Claude Code、Cursor 等 AI 工具
- 🎨 **20 個 UI 風格** - 內建精選視覺風格資料庫（UI 視覺設計技能）
- ⚡ **強大 CLI** - 支援單一技能選裝、JSON 輸出、dry-run 模擬
- 📦 **精簡規格** - 每個技能壓縮至 300 行內，專注可執行性
- 🌐 **正體中文** - 完整繁體中文內容

所有技能都符合 [Agent Skills 標準](https://agentskills.io/specification)，可在支援 Agent Skills 的工具中使用。

## 🎯 包含的技能

1. **使用者訪談** (`user-interview`) - 質性研究與需求探索
2. **使用者人物誌** (`persona-creation`) - 角色模型建立
3. **資訊架構** (`information-architecture`) - 內容結構與導航設計
4. **線框圖** (`wireframing`) - 低保真介面設計
5. **UI 視覺設計** (`ui-visual-design`) - 視覺風格與 20 個 UI 風格
6. **可用性測試** (`usability-testing`) - 使用者測試方法
7. **無障礙設計** (`accessibility-design`) - WCAG 標準與實踐
8. **設計系統** (`design-system`) - Design Tokens 與元件規範
9. **原型製作** (`prototyping`) - 高保真互動原型

## 🚀 快速開始

### 安裝所有技能

```bash
npx goodux-ux-skills
```

### CLI 進階用法

```bash
# 只安裝指定技能
npx goodux-ux-skills -s wireframing -s user-interview

# 強制覆蓋更新
npx goodux-ux-skills -f

# 列出所有可用技能
npx goodux-ux-skills --list

# JSON 格式輸出（適合 CI/CD）
npx goodux-ux-skills --json

# 模擬安裝（不實際寫入）
npx goodux-ux-skills --dry-run

# 指定安裝目錄
npx goodux-ux-skills -t ~/my-project/.agents/skills

# 顯示版本號
npx goodux-ux-skills --version

# 顯示說明
npx goodux-ux-skills --help
```

安裝後，技能會自動複製到 `.agents/skills` 目錄。

## 📖 使用方式

### 在 Windsurf / Claude Code / Cursor 中使用

安裝後，技能會自動被偵測到。你可以：

**隱式調用**（推薦）
```
"請幫我規劃一個使用者訪談"
→ AI 會自動使用 user-interview 技能
```

**顯式調用**
```
"$wireframing 幫我設計購物車頁面的線框圖"
"使用 ui-visual-design 技能，參考 Minimalist 風格設計一個登入頁"
```

### 支援的 AI 工具

- ✅ [Windsurf](https://codeium.com/windsurf) - Codeium 推出的 AI IDE
- ✅ [Claude Code](https://claude.ai/code) - Anthropic 官方開發工具
- ✅ [Cursor](https://cursor.sh/) - AI-first 程式碼編輯器
- ✅ [Continue](https://continue.dev/) - 開源 AI 編碼助手

只要工具支援 Agent Skills 標準，就會自動掃描 `.agents/skills` 目錄並載入技能。

## � 使用範例

### 範例 1: UI 視覺設計（含 20 個 UI 風格）

```
提示: "幫我設計一個 SaaS 產品的登入頁，風格要專業簡潔"

AI 會使用 ui-visual-design 技能，提供：
- 從 20 個 UI 風格中推薦適合的方向
- 色彩系統建議
- 字體排版規範
- 間距與佈局原則
- 元件視覺風格
```

### 範例 2: 完整 UX 流程

```
1. "$user-interview 規劃電商使用者訪談"
2. "$persona-creation 根據訪談建立使用者人物誌"
3. "$wireframing 設計購物車頁面線框圖"
4. "$ui-visual-design 選擇 Modern E-commerce 風格"
5. "$prototyping 建立可測試的互動原型"
6. "$usability-testing 驗證結帳流程"
```

## �📁 安裝後的目錄結構

```
.agents/skills/
├── user-interview/SKILL.md
├── persona-creation/SKILL.md
├── information-architecture/SKILL.md
├── wireframing/SKILL.md
├── ui-visual-design/SKILL.md          ← 含 20 個 UI 風格
├── usability-testing/SKILL.md
├── accessibility-design/SKILL.md
├── design-system/SKILL.md
└── prototyping/SKILL.md
```

## �️ 技能結構

每個技能都包含：

- **任務定義** - 技能的核心目標
- **必要輸入** - 執行技能需要的資訊
- **預期輸出** - 技能會產出的結果
- **完成條件** - 判斷技能執行成功的標準
- **不適用情境** - 不應使用此技能的場景
- **觸發條件** - AI 自動觸發此技能的關鍵字
- **必要澄清** - 執行前需要確認的問題
- **可搭配技能** - 相關聯的其他技能
- **執行步驟** - 具體操作流程
- **執行檢查** - 品質檢查清單
- **精簡範例輸出** - 實際應用範例

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
- Buy Me a Coffee: [贊助咖啡 ☕](https://buymeacoffee.com/zz41354899y)

## 🙏 致謝

感謝 [Agent Skills](https://agentskills.io/) 提供的開放標準,讓技能可以跨工具使用。

---

Made with ❤️ by Good UX Team
