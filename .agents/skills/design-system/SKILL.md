---
name: design-system
description: 建立與維護設計系統、Design Tokens、元件規範與文件結構,提升產品一致性與跨團隊協作效率。當任務涉及元件庫、樣式規範、token、文件化、系統治理或跨產品一致性時使用。
license: MIT
metadata:
  author: goodux
  version: "1.0.0"
  category: design-systems
  language: zh-TW
---

# 設計系統建立法則

## 核心價值

設計系統是產品一致性的基礎建設,整合可重複使用的元件、設計規範與開發指南。有效的設計系統不只提升效率,更能確保跨團隊、跨產品的體驗一致性,降低設計債與維護成本。它包含視覺風格、UI 元件、互動模式和使用指南。

## 適用情境

- 產品規模擴大,需要保持一致性時
- 多個團隊協作開發時
- 需要提升設計和開發效率時
- 品牌需要統一視覺語言時

## 輸入資訊

- 現有產品畫面、元件或設計檔
- 品牌風格與視覺方向
- 團隊規模與協作模式
- 目前重複問題或不一致問題
- 目標平台與技術棧

## 預期產出

- 設計系統範圍與原則
- Design Tokens 規劃
- 元件優先順序與規範草案
- 文件架構與治理方式
- 導入與維護建議

## 觸發提示

- 使用者提到「設計系統」、「元件庫」、「design token」、「UI 規範」、「component library」
- 任務需要統一按鈕、表單、色彩、間距或排版規則
- 任務需要把零散畫面整理成可複用的系統

## 複雜情境觸發提示

- 任務涉及多產品線、B2B 平台、後台模組或多角色共用的複雜系統
- 使用者提到跨團隊協作、元件不一致、不同模組各自發展、缺乏治理機制
- 問題包含權限差異、資料密集介面、複雜表單、狀態不一致或品牌延伸需求
- 團隊不只是要整理視覺,還要建立元件規則、文件與維護流程

## 先問哪些澄清問題

- 現在最痛的系統性問題是什麼?樣式不一致、元件重複還是跨團隊協作失控?
- 這個設計系統要服務哪些產品、平台與角色?是否包含後台與前台?
- 哪些元件是最高頻且最需要先標準化的?
- 目前是否已經有 token、元件庫、文件站或治理流程?哪些缺口最大?
- 設計與開發團隊如何協作?誰負責審查、發布與維護?
- 這次的目標是建立基礎系統、整併現有元件,還是導入新的治理模式?

## 可搭配哪些其他 skill

- `accessibility-design`: 把無障礙要求納入元件與規範基準
- `wireframing`: 用一致元件快速組裝頁面骨架
- `prototyping`: 驗證元件在真實流程中的互動完整性
- `information-architecture`: 若系統涵蓋大型後台,同步整理頁面與模組結構

## 複雜需求範例

### B2B SaaS 多模組平台

- 情境: 同一產品包含 CRM、報表、帳務與權限模組,各自畫風不同
- Design System 重點: 統一 token、表單模式、資料表格與狀態元件,建立跨模組一致性

### 後台管理介面整併

- 情境: 多個內部工具逐步整合成單一平台,但元件命名與互動規則混亂
- Design System 重點: 建立命名規範、元件優先序與治理流程,避免重複建設

### 多角色企業產品

- 情境: 管理者、操作員、客服與審核者共用同一套產品基礎元件
- Design System 重點: 定義可延伸的版型、資料展示模式與角色差異化元件策略

## 工作流程

### 1. 審查現況

**設計審計**
```markdown
盤點清單:
□ 現有的顏色使用
□ 字體和排版
□ 間距和佈局
□ 按鈕樣式
□ 表單元件
□ 圖示集
□ 動畫效果
□ 互動模式

發現問題:
- 同一個按鈕有 15 種不同樣式
- 使用了 8 種不同的藍色
- 間距沒有統一標準
- 缺少一致的錯誤處理模式
```

**建立審計報告**
```markdown
# 設計審計報告

## 顏色使用
- 發現 23 種不同的顏色
- 主色調不一致
- 建議: 建立統一的色彩系統

## 按鈕樣式
- 發現 15 種按鈕變體
- 大小、圓角、陰影不一致
- 建議: 定義 3-4 種標準按鈕

## 間距
- 使用隨機數值 (7px, 13px, 22px)
- 建議: 建立 8px 基礎間距系統
```

### 2. 定義原則

**設計原則範例**
```markdown
我們的設計原則:

1. 清晰優先
   - 資訊清楚易懂
   - 避免不必要的複雜性

2. 一致性
   - 相同的操作有相同的表現
   - 建立可預測的體驗

3. 效率
   - 減少使用者的操作步驟
   - 快速完成任務

4. 包容性
   - 符合無障礙標準
   - 適用於所有使用者
```

### 3. 建立基礎

**Design Tokens**
```markdown
顏色系統:
colors:
  primary:
    50: '#E3F2FD'
    100: '#BBDEFB'
    500: '#2196F3'  # 主要
    700: '#1976D2'
    900: '#0D47A1'
  
  neutral:
    0: '#FFFFFF'
    100: '#F5F5F5'
    500: '#9E9E9E'
    900: '#212121'
  
  semantic:
    success: '#4CAF50'
    warning: '#FF9800'
    error: '#F44336'
    info: '#2196F3'

間距系統 (8px 基礎):
spacing:
  xs: 4px    # 0.5x
  sm: 8px    # 1x
  md: 16px   # 2x
  lg: 24px   # 3x
  xl: 32px   # 4x
  2xl: 48px  # 6x
  3xl: 64px  # 8x

字體系統:
typography:
  fontFamily:
    sans: 'Inter, system-ui, sans-serif'
    mono: 'Fira Code, monospace'
  
  fontSize:
    xs: 12px
    sm: 14px
    base: 16px
    lg: 18px
    xl: 20px
    2xl: 24px
    3xl: 30px
    4xl: 36px
  
  fontWeight:
    normal: 400
    medium: 500
    semibold: 600
    bold: 700

圓角:
borderRadius:
  none: 0
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px

陰影:
shadow:
  sm: '0 1px 2px rgba(0,0,0,0.05)'
  md: '0 4px 6px rgba(0,0,0,0.1)'
  lg: '0 10px 15px rgba(0,0,0,0.1)'
```

### 4. 創建元件

**元件優先順序**
```markdown
第一階段 (核心元件):
- Button
- Input
- Label
- Checkbox
- Radio
- Select

第二階段 (表單元件):
- Textarea
- Switch
- Slider
- Date Picker

第三階段 (複雜元件):
- Modal
- Dropdown
- Tooltip
- Alert
- Card
- Table
```

**元件規範範例**
```markdown
# Button 元件

## 變體 (Variants)
- Primary: 主要操作
- Secondary: 次要操作
- Tertiary: 第三層級操作
- Danger: 危險操作

## 尺寸 (Sizes)
- Small: 32px 高度
- Medium: 40px 高度 (預設)
- Large: 48px 高度

## 狀態 (States)
- Default: 預設狀態
- Hover: 滑鼠懸停
- Active: 點擊時
- Disabled: 禁用狀態
- Loading: 載入中

## 使用規範

✅ 正確使用:
- 每個頁面只有一個 Primary 按鈕
- 使用清楚的動詞 (儲存、刪除、取消)
- 危險操作使用 Danger 變體

❌ 錯誤使用:
- 不要使用「點這裡」作為按鈕文字
- 不要在一個頁面使用太多 Primary 按鈕
- 不要用按鈕當作連結

## 程式碼範例

Figma:
[元件連結]

React:
<Button variant="primary" size="medium">
  儲存變更
</Button>

<Button variant="danger" size="medium" disabled>
  刪除帳號
</Button>
```

### 5. 撰寫文件

**文件結構**
```markdown
設計系統文件/
├── 開始使用/
│   ├── 簡介
│   ├── 安裝指南
│   └── 快速開始
├── 基礎/
│   ├── 顏色
│   ├── 字體
│   ├── 間距
│   ├── 圓角
│   └── 陰影
├── 元件/
│   ├── Button
│   ├── Input
│   ├── Card
│   └── ...
├── 模式/
│   ├── 表單
│   ├── 導航
│   ├── 搜尋
│   └── ...
└── 資源/
    ├── Figma 檔案
    ├── 程式碼庫
    └── 更新日誌
```

**元件文件範本**
```markdown
# [元件名稱]

## 概述
[簡短描述元件的用途]

## 何時使用
- [使用情境 1]
- [使用情境 2]

## 變體
[展示所有變體]

## 屬性
| 屬性 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| variant | string | 'primary' | 按鈕樣式 |
| size | string | 'medium' | 按鈕大小 |
| disabled | boolean | false | 是否禁用 |

## 範例
[互動式範例]

## 無障礙性
- 鍵盤操作: [說明]
- 螢幕閱讀器: [說明]
- ARIA 屬性: [說明]

## 最佳實踐
✅ 正確
❌ 錯誤

## 程式碼
[Figma / React / Vue 範例]
```

### 6. 工具整合

**Figma 設計系統**
```markdown
結構:
📁 Design System
  📁 Foundations
    🎨 Colors
    📝 Typography
    📏 Spacing
  📁 Components
    🔘 Buttons
    📝 Inputs
    📋 Cards
  📁 Templates
    📄 Dashboard
    📄 Form Page

使用:
- 建立元件庫 (Component Library)
- 使用 Auto Layout
- 定義 Variants
- 建立 Styles
- 發布為 Team Library
```

**程式碼實作**
```markdown
技術棧選擇:
- React: Styled Components / Tailwind
- Vue: Vue 3 + Composition API
- Web Components: Lit
- CSS: CSS Variables

範例 (React + Tailwind):
// Button.tsx
export const Button = ({ 
  variant = 'primary',
  size = 'medium',
  children,
  ...props 
}) => {
  const baseStyles = 'font-medium rounded-md transition-colors';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  };
  
  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};
```

### 7. 持續維護

**版本管理**
```markdown
語意化版本:
- Major (1.0.0): 重大變更,不向後相容
- Minor (0.1.0): 新功能,向後相容
- Patch (0.0.1): Bug 修復

更新日誌範例:
# v2.1.0 (2024-03-10)

## 新增
- 新增 Toast 通知元件
- Button 支援 loading 狀態

## 改善
- 優化 Modal 動畫效果
- 提升 Input 無障礙性

## 修復
- 修復 Dropdown 在 Safari 的顯示問題
```

**治理流程**
```markdown
提案流程:
1. 提出需求或問題
2. 設計團隊評估
3. 建立原型
4. 團隊審查
5. 實作
6. 測試
7. 發布
8. 文件更新

審查標準:
□ 符合設計原則
□ 解決真實需求
□ 可重複使用
□ 無障礙性
□ 效能考量
□ 文件完整
```

## 流程檢查清單

使用此清單確保設計系統建立流程完整執行:

### 盤點階段 ✓
- [ ] 已盤點現有設計元件
- [ ] 已識別重複與不一致之處
- [ ] 已收集團隊需求
- [ ] 已研究業界設計系統範例

### 定義階段 ✓
- [ ] 已建立 Design Tokens(色彩、字體、間距)
- [ ] 已定義視覺風格指南
- [ ] 已建立元件命名規範
- [ ] 已確定設計系統範圍
- [ ] 已設定版本控制機制

### 建立階段 ✓
- [ ] 已創建基礎元件(按鈕、表單、卡片等)
- [ ] 已建立複合元件
- [ ] 已撰寫使用文件
- [ ] 已提供程式碼範例
- [ ] 已建立元件展示頁面

### 推廣階段 ✓
- [ ] 已培訓設計與開發團隊
- [ ] 已建立貢獻流程
- [ ] 已設定更新機制
- [ ] 已收集使用回饋
- [ ] 已持續優化與擴充

## 快速執行指南

**1 週 MVP 版**
1. 盤點與定義核心元件 (1 天)
2. 建立 Design Tokens (1 天)
3. 創建 5-8 個基礎元件 (2 天)
4. 撰寫基本文件 (1 天)

**完整版 (建議)**
1. 研究與規劃 (2 週)
2. 建立 Design Tokens 與風格指南 (1 週)
3. 創建基礎元件庫 (4 週)
4. 建立複合元件 (3 週)
5. 撰寫完整文件 (2 週)
6. 團隊培訓與推廣 (2 週)
7. 持續維護與優化 (ongoing)

**決策樹: 何時使用哪個版本?**
- 小團隊 + 快速建立一致性 → MVP 版
- 大型組織或多產品線 → 完整版
- 已有部分元件需整合 → 完整版 + 漸進式遷移

## 最佳實踐

1. **從小開始**: 從小規模開始,逐步擴展
2. **優先處理**: 優先處理最常用的元件
3. **保持彈性**: 保持元件的靈活性和可組合性
4. **清楚命名**: 提供清晰的命名規範
5. **包含範例**: 包含使用範例和反例
6. **設計開發協作**: 設計和開發緊密協作
7. **建立治理**: 建立治理流程管理變更

## 範例輸出

```markdown
# Good UX 設計系統

## 顏色系統

### 主色調
- Primary 500: #2196F3 (主要操作)
- Primary 700: #1976D2 (Hover 狀態)

### 語意色彩
- Success: #4CAF50 (成功訊息)
- Warning: #FF9800 (警告訊息)
- Error: #F44336 (錯誤訊息)

## 間距系統 (8px 基礎)
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px

## 核心元件

### Button
變體: Primary, Secondary, Tertiary, Danger
尺寸: Small (32px), Medium (40px), Large (48px)
狀態: Default, Hover, Active, Disabled, Loading

### Input
類型: Text, Email, Password, Number
狀態: Default, Focus, Error, Disabled
附加: Label, Hint Text, Error Message

### Card
變體: Default, Elevated, Outlined
組成: Header, Body, Footer, Actions

## 使用指南

### 按鈕使用
✅ 每頁只有一個 Primary 按鈕
✅ 使用清楚的動詞 (儲存、刪除、取消)
❌ 不要使用「點這裡」

### 顏色使用
✅ 使用定義的色彩變數
✅ 確保對比度符合 WCAG AA
❌ 不要創建新的顏色

## 資源
- Figma 元件庫: [連結]
- React 元件庫: [連結]
- 文件網站: [連結]
```

## 知名設計系統

- **Material Design** (Google)
- **Human Interface Guidelines** (Apple)
- **Ant Design** (Alibaba)
- **Carbon Design System** (IBM)
- **Polaris** (Shopify)
- **Lightning Design System** (Salesforce)

## 工具推薦

- **設計**: Figma, Sketch
- **文件**: Storybook, Zeroheight
- **程式碼**: Styled Components, Tailwind CSS
- **管理**: GitHub, Notion

## 相關技能

- `wireframing`: 使用設計系統元件快速建立線框圖
- `prototyping`: 使用設計系統建立高保真原型
- `accessibility-design`: 確保設計系統符合無障礙標準
