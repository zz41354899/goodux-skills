# StylePrompts 批次轉換模板

這個文件說明如何將原始 style prompt 轉換成 `styleprompts.yaml` 格式。

## 轉換規則

### 從原始檔抽取欄位

```yaml
# 基本識別
id: s{編號}           # 例如 s01, s02
code: S{編號}         # 例如 S01, S02
name: {中文名稱}      # 例如 科技極簡
slug: {英文slug}      # 例如 tech-minimal
summary: {一句描述}   # 30-50 字

# 分類
category: {主分類}    # saas / ecommerce / editorial / experimental
use_case: [{用途}]    # landing-page / dashboard / product-site
industry: [{產業}]    # saas / finance / healthcare / retail
audience: [{受眾}]    # b2b-teams / developers / consumers

# 標籤
tags:
  - {關鍵字1}
  - {關鍵字2}
  - {關鍵字3}

# 風格 DNA
style_dna:
  palette: {色彩策略描述}
  typography: {字體描述}
  radius: {圓角範圍}
  shadow: {陰影描述}
  border: {邊框描述}
  texture: {紋理描述}
  motion: {動效描述}
  tone:
    - {語氣1}
    - {語氣2}

# 適用場景
best_for:
  - {場景1}
  - {場景2}

# 避免事項
avoid:
  - {避免1}
  - {避免2}

# 提示詞
prompt:
  short: {精簡版提示詞，1-2 句話}
  full: {完整版提示詞，包含所有細節}

# 調度規則
dispatch:
  triggers:
    - {觸發關鍵字1}
    - {觸發關鍵字2}
  match_keywords:
    - {匹配詞1}
    - {匹配詞2}
  recommend_when:
    - {推薦情境1}
  avoid_when:
    - {不推薦情境1}

# 工程規格（選填）
spec:
  accessibility:
    contrast: WCAG AA
    focus_ring: true
    reduced_motion: true
    touch_target_min: 44
  
  engineering:
    stack: [React, Next.js, TypeScript, Tailwind CSS]
    theming: CSS variables
  
  tokens:
    color:
      bg_primary: "#FFFFFF"
      text_primary: "#1A1A1A"
      brand_primary: "#3B82F6"
    radius:
      sm: 4
      md: 8
    # ... 其他 tokens
```

## 欄位對應表

| 原始檔欄位 | YAML 欄位 | 說明 |
|-----------|----------|------|
| Style ID | `code` | S01, S02... |
| Style Name | `name` | 中文名稱 |
| Industry | `industry` | 產業分類 |
| Use Case | `use_case` | 使用場景 |
| Style DNA > Palette | `style_dna.palette` | 色彩策略 |
| Style DNA > Typography | `style_dna.typography` | 字體描述 |
| Style DNA > Radius | `style_dna.radius` | 圓角範圍 |
| Style DNA > Shadow | `style_dna.shadow` | 陰影描述 |
| Style DNA > Motion | `style_dna.motion` | 動效描述 |
| Tone | `style_dna.tone` | 語氣列表 |
| Do / Don't > Don't | `avoid` | 避免事項 |
| Objective | `prompt.full` | 完整提示詞 |
| tokens (YAML block) | `spec.tokens` | 工程規格 |

## 批次轉換步驟

### 1. 準備原始資料
將 S01-S20 的原始 prompt 整理成統一格式的 Markdown 檔案。

### 2. 抽取核心欄位
對每個 style，至少抽取：
- 編號、名稱、摘要
- 分類、標籤
- 風格 DNA
- 精簡提示詞

### 3. 加入 YAML
將抽取的資料按照上述格式加入 `styleprompts.yaml`。

### 4. 驗證
確認：
- 所有必填欄位都有值
- YAML 格式正確
- 沒有重複的 id

## 最小必要欄位

如果時間有限，至少要有這些欄位：

```yaml
- id: s01
  code: S01
  name: 科技極簡
  summary: 一句描述
  category: saas
  tags: [標籤1, 標籤2, 標籤3]
  prompt:
    short: 精簡提示詞
```

其他欄位可以後續補充。

## 範例：從原始檔到 YAML

### 原始檔
```markdown
# Tech Minimal SaaS Landing Page Prompt (S01)

## Style DNA
- Palette: Neutral grays with single accent
- Typography: Geometric sans-serif
- Radius: 4-8px
- Shadow: Subtle elevation
- Motion: 150-200ms, ease-out

Tone: confident, precise, non-hype
```

### 轉換後
```yaml
- id: s01
  code: S01
  name: 科技極簡
  slug: tech-minimal
  summary: 乾淨俐落的 SaaS 科技風格
  category: saas
  tags: [科技, 極簡, SaaS]
  style_dna:
    palette: 中性色搭配單一品牌主色
    typography: 幾何無襯線
    radius: 4-8px
    shadow: 輕微陰影
    motion: 150-200ms, ease-out
    tone: [理性, 專業, 精準]
  prompt:
    short: 設計科技極簡風格的 SaaS 落地頁
```

## 注意事項

1. **保持一致性**：所有 style 使用相同的欄位結構
2. **精簡優先**：先完成核心欄位，進階規格可後補
3. **中文優先**：name, summary, tags 使用正體中文
4. **英文保留**：slug, code 使用英文
5. **避免冗長**：summary 控制在 50 字內
6. **標籤精準**：每個 style 3-5 個關鍵 tag

## 後續維護

新增 style 時：
1. 複製模板
2. 填入對應欄位
3. 加入 `styleprompts.yaml`
4. 測試 skill 是否能正確調度
