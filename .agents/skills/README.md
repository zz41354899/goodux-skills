# Good UX Skills

> 專業的 UX 設計技能包 — 符合 [Agent Skills](https://agentskills.io/) 標準的可安裝技能庫

[![npm version](https://img.shields.io/npm/v/goodux-ux-skills.svg)](https://www.npmjs.com/package/goodux-ux-skills)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Agent Skills](https://img.shields.io/badge/Agent-Skills-blue.svg)](https://agentskills.io/)

## 📚 簡介

Good UX Skills 是一套完整的 UX 設計技能庫，涵蓋從使用者研究到設計系統的各個面向。**5 大設計思考流程 + 內建 20 個 UI 風格**，一行指令安裝到 AI 工具中使用。

### ✨ 特色

- 🎯 **5 大設計思考流程** - Empathize 同理洞察、Define 問題定義、Ideate 發想構思、Prototype 原型製作、Test 可用性驗證
- 🤖 **6 種 AI 工具支援** - Windsurf、Cursor、Claude Code、Continue、Cline、Aider
- 🎨 **20 個 UI 風格** - 內建精選視覺風格資料庫（UI 視覺設計技能）
- ⚡ **強大 CLI** - 多工具支援、單一技能選裝、JSON 輸出、dry-run 模擬
- 🔧 **模組化架構** - 清晰的程式碼結構，易於維護和擴展
- 📦 **精簡規格** - 每個技能壓縮至 300 行內，專注可執行性
- 🌐 **正體中文** - 完整繁體中文內容

所有技能都符合 [Agent Skills 標準](https://agentskills.io/specification)，可在支援 Agent Skills 的工具中使用。

## 🎯 包含的技能

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

## 🚀 快速開始

### 安裝所有技能

```bash
# 安裝所有 5 個設計思考流程技能（預設支援當前工具）
npx goodux-ux-skills

# 支援多個 AI 工具
npx goodux-ux-skills --tool cursor --tool claude-code

# 列出所有支援的 AI 工具
npx goodux-ux-skills --list-tools

# 強制覆蓋更新
npx goodux-ux-skills -f

# 顯示版本號
npx goodux-ux-skills --version

# 顯示說明
npx goodux-ux-skills --help
```

安裝後，技能會自動複製到當前專案的 `.agents/skills` 目錄。

## 📖 使用方式

### 在 AI 工具中使用

安裝後，技能會自動被偵測到。你可以用三種方式觸發：

**1. 斜線命令**
```
Windsurf/Cursor: /empathize, /define, /ideate, /prototype, /test
Continue: @empathize, @define, @ideate, @prototype, @test
```

**2. 隱式調用**（推薦）
```
"請幫我規劃使用者訪談並整理洞察"
→ AI 會自動使用 empathize 技能
```

**3. 顯式調用**
```
"$ideate 幫我做購物車頁面的線框與視覺方向"
"使用 ideate 技能，參考 Minimalist 風格設計一個登入頁"
```

### 支援的 AI 工具（v2.2.0）

- ✅ [Windsurf](https://codeium.com/windsurf) - Codeium 推出的 AI IDE（命令：`/skill`）
- ✅ [Cursor](https://cursor.sh/) - AI-first 程式碼編輯器（命令：`/skill`）
- ✅ [Claude Code](https://claude.ai/code) - Anthropic 官方開發工具（命令：`/skill`）
- ✅ [Continue](https://continue.dev/) - 開源 AI 編碼助手（命令：`@skill`）
- ✅ [Cline](https://github.com/cline/cline) - VS Code AI 助手擴充功能（命令：`/skill`）
- ✅ [Aider](https://aider.chat/) - 命令列 AI 編碼工具（命令：`/skill`）

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
1. "$empathize 規劃電商使用者訪談並整理人物誌"
2. "$define 界定結帳流程的關鍵問題與成功指標"
3. "$ideate 設計購物車頁面的線框與視覺方向"
4. "$prototype 建立可測試的互動原型"
5. "$test 驗證結帳流程，收集可用性與 a11y 回饋"
```

## 📁 安裝後的目錄結構

```
.agents/skills/
├── empathize/SKILL.md
├── define/SKILL.md
├── ideate/SKILL.md                    ← 含 20 個 UI 風格
├── prototype/SKILL.md
├── test/SKILL.md
└── references/                        ← 11 個參考資料
    ├── SKILL_USAGE_GUIDE.md
    ├── KEYWORDS_LIBRARY.md
    ├── user-interview/
    ├── persona-creation/
    ├── information-architecture/
    ├── wireframing/
    ├── ui-visual-design/
    ├── usability-testing/
    ├── accessibility-design/
    ├── design-system/
    └── prototyping/
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

歡迎貢獻新的技能或改善現有內容！

在修改或新增任何 skill 內容前，請先閱讀 [CONTRIBUTING.md](./CONTRIBUTING.md)。
這份文件定義了 `SKILL.md`、`TEMPLATE.md`、YAML 資料檔的角色分工，以及新增資料時必須遵守的格式、命名與審查規則。

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
