# 關鍵字庫

五大核心技能的觸發關鍵字與衝突解決規則。

---

## Empathize 同理洞察

**關鍵字**：了解、探索、訪談、研究、使用者需求、痛點、人物誌、旅程圖

**排除**：已知問題 → Define | 設計方案 → Ideate

---

## Define 問題定義

**關鍵字**：定義、收斂、問題陳述、POV、成功指標、KPI、MVP、優先順序、範疇

**前置**：需要使用者洞察（Empathize）  
**排除**：不知需求 → Empathize | 設計畫面 → Ideate

---

## Ideate 發想構思

**關鍵字**：設計、發想、線框圖、視覺設計、UI、介面、草圖、設計方案、風格

**前置**：需要問題定義（Define）  
**排除**：可點擊互動 → Prototype | 測試驗證 → Test

---

## Prototype 原型製作

**關鍵字**：原型、互動、可點擊、流程、展示、模擬、狀態、分支

**前置**：需要設計稿（Ideate）  
**排除**：靜態畫面 → Ideate | 測試原型 → Test

---

## Test 可用性驗證

**關鍵字**：測試、驗證、可用性、使用者測試、問題、改善、無障礙、WCAG、a11y

**前置**：需要原型或產品（Prototype）  
**排除**：無原型 → Prototype | 探索原因 → Empathize

---

## 衝突解決規則

### 一次只推薦一個 Skill

當多個關鍵字匹配時：

1. **專案階段優先**：有研究無定義 → Define
2. **問題類型優先**："為什麼" → Empathize | "如何設計" → Ideate
3. **互斥規則**：不同時推薦 Empathize ⊗ Define、Define ⊗ Ideate、Ideate ⊗ Prototype、Prototype ⊗ Test

---

## 相關文件

- **使用指引**：`SKILL_USAGE_GUIDE.md`
- **核心技能**：`../empathize/SKILL.md` | `../define/SKILL.md` | `../ideate/SKILL.md` | `../prototype/SKILL.md` | `../test/SKILL.md`
