# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.2.0] - 2026-03-13

### Added
- 🔧 **多工具支援**：新增 6 種 AI 工具支援（Windsurf、Cursor、Claude Code、Continue、Cline、Aider）
- ⚡ **斜線命令**：支援 `/skill` 和 `@skill` 命令格式，快速觸發技能
- 📋 **工具列表**：新增 `--list-tools` 命令，列出所有支援的 AI 工具
- 🎯 **多工具安裝**：支援 `--tool` 參數，可同時為多個工具生成 workflow
- 🔧 **工具配置系統**：新增 `tools-config.json`，集中管理工具配置
- 📦 **模組化架構**：將程式碼重構為 5 個模組（cli.js、display.js、workflow.js、utils.js）

### Changed
- 🎨 **全新 CLI 介面**：精美的邊框設計、清晰的功能分類、豐富的使用範例
- 📊 **改善的輸出格式**：技能分類顯示（研究、設計、系統）、工具列表表格化
- 📝 **更新的說明文件**：加入多工具支援和斜線命令的完整說明
- 🔄 **優化的安裝流程**：更清晰的進度提示和錯誤訊息

### Technical
- 📁 **程式碼重構**：從 617 行單一檔案重構為 234 行主檔案 + 4 個模組
- 🧪 **完整測試**：所有 6 種工具的 workflow 生成功能已驗證通過
- 📦 **套件優化**：更新 package.json，加入新的關鍵字和檔案清單

## [2.1.3] - 2024-XX-XX

### Added
- Initial release with 9 UX skills
- 20 UI visual styles
- CLI installation support
- Agent Skills standard compliance

[2.2.0]: https://github.com/zz41354899/goodux-skills/compare/v2.1.3...v2.2.0
[2.1.3]: https://github.com/zz41354899/goodux-skills/releases/tag/v2.1.3
