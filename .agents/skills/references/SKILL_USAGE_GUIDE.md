# Skill 使用指引

簡潔的 AI Agent Skills 使用規則，確保正確推薦與避免錯亂。

---

## 🎯 核心原則

### 1. 一次只推薦一個 Skill
避免同時推薦多個 skills 導致使用者困惑。

### 2. 確認專案狀態
詢問使用者是否已有專案，判斷目前階段。

### 3. 開發選項（可選）
Ideate 或 Prototype 階段可詢問是否要用程式碼實作。

---

## 🔄 Skill 推薦流程

```
使用者問題
  ↓
確認專案狀態（有無專案？哪個階段？）
  ↓
匹配關鍵字
  ↓
檢查衝突（多個 skills 符合？）
  ↓
推薦單一 Skill
```

---

## 📊 專案階段判斷

### 快速詢問
```markdown
請問您的專案目前狀態：
- [ ] 全新專案（還沒開始）
- [ ] 有想法但沒研究
- [ ] 有研究但沒定義問題
- [ ] 有問題定義但沒設計
- [ ] 有設計但沒原型
- [ ] 有原型但沒測試
```

### 推薦對應
| 狀態 | 推薦 Skill |
|------|-----------|
| 全新專案 | `/empathize` |
| 有研究無定義 | `/define` |
| 有定義無設計 | `/ideate` |
| 有設計無原型 | `/prototype` |
| 有原型無測試 | `/test` |

---

## 🛡️ 避免錯亂規則

### 衝突解決優先順序

**1. 專案階段優先**
```
有研究無定義 → Define（不推薦 Empathize）
有定義無設計 → Ideate（不推薦 Define）
```

**2. 問題類型優先**
```
"為什麼" → Empathize
"如何定義" → Define
"如何設計" → Ideate
"如何展示" → Prototype
"好不好用" → Test
```

**3. 互斥規則**
```
不同時推薦：
  Empathize ⊗ Define
  Define ⊗ Ideate
  Ideate ⊗ Prototype
  Prototype ⊗ Test
```

### 常見衝突處理

**Empathize + Test**
- 無原型 → Empathize（探索）
- 有原型 → Test（驗證）

**Define + Ideate**
- 無問題定義 → Define
- 有問題定義 → Ideate

**Ideate + Prototype**
- 無設計稿 → Ideate
- 有設計稿 → Prototype

---

## 💻 開發選項（Ideate/Prototype 階段）

### 何時詢問
- Ideate 完成設計後
- Prototype 要製作原型時

### 詢問話術
```markdown
完成設計後，您想要：

A. 用程式碼實作（React + Shadcn/UI）
   - 可立即測試真實互動
   
B. 先做設計工具原型（Figma/Axure）
   - 快速迭代，不需寫程式

C. 自訂技術架構
   - 告知您的技術偏好

D. 略過（繼續設計）

您偏好哪個選項？
```

### 使用者可略過
如果使用者不想開發，可直接繼續設計流程。

---

## 📋 測試後的迭代

### 問題分級
- **P0**：無法完成任務 → 立即修復
- **P1**：嚴重影響體驗 → 本週期修復
- **P2**：造成不便 → 下週期修復
- **P3**：優化項目 → 待辦清單

### 迭代決策
```
P0 問題 → 回 /ideate 重新設計
P1 問題 → 回 /prototype 調整互動
P2/P3 → 記錄待辦
```

---

## 📚 相關文件

- **核心技能**：`../empathize/SKILL.md` | `../define/SKILL.md` | `../ideate/SKILL.md` | `../prototype/SKILL.md` | `../test/SKILL.md`
- **關鍵字庫**：`KEYWORDS_LIBRARY.md`
