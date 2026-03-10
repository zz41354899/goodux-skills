---
name: accessibility-design
description: 評估與改善介面、內容與互動的無障礙品質,使產品更符合 WCAG 與包容性設計原則。當任務涉及對比度、鍵盤操作、語意化、表單可用性、螢幕閱讀器支援或 a11y 檢查時使用。
license: MIT
metadata:
  author: goodux
  version: "1.0.0"
  category: accessibility
  language: zh-TW
---

# 無障礙設計法則

## 核心價值

無障礙設計確保產品對所有使用者可用,包括視覺、聽覺、認知或肢體障礙者。有效的無障礙設計不是額外負擔,而是設計品質的基準,能擴大使用者群、降低法律風險,並提升整體產品體驗。

## 適用情境

- 任何數位產品的設計階段
- 需要符合法規要求時(如 WCAG 2.1)
- 擴大目標使用者群體時
- 改善產品整體可用性時

## 輸入資訊

- 介面畫面、元件或設計稿
- 主要操作流程與互動方式
- 目前已知的無障礙問題
- 目標法規或 WCAG 等級
- 裝置與使用情境限制

## 預期產出

- 無障礙風險清單
- 版面、內容與互動改善建議
- WCAG 對照檢查點
- 可驗證的測試清單
- 實作注意事項

## 觸發提示

- 使用者提到「無障礙」、「a11y」、「WCAG」、「鍵盤操作」、「對比度」、「螢幕閱讀器」
- 任務需要檢查表單、按鈕、焦點狀態或語意標記
- 任務需要把 UI 做得更包容、可及或符合法規

## 複雜情境觸發提示

- 任務涉及企業後台、資料密集表格、複雜表單、多步驟流程或高頻操作介面
- 使用者提到不同角色、不同裝置、不同使用能力或法規合規要求
- 問題包含鍵盤流程中斷、狀態提示不足、螢幕閱讀器難以理解、表單錯誤難以修正
- 團隊需要同時兼顧效率、合規、可操作性與大量資訊呈現

## 先問哪些澄清問題

- 這個介面最關鍵的任務是什麼?哪些使用者最常使用它?
- 是否有法規、企業採購或客戶合約要求特定 WCAG 等級?
- 使用者會使用哪些輔助技術?例如螢幕閱讀器、鍵盤操作、放大模式
- 哪些元件最複雜?例如資料表格、日期選擇器、拖曳、圖表或多步驟表單
- 目前已知的無障礙痛點是什麼?是看不見、聽不到、點不到還是難以理解?
- 這次要先做設計檢查、實作建議還是驗證測試清單?

## 可搭配哪些其他 skill

- `design-system`: 把無障礙規範沉澱到元件與 token 中
- `usability-testing`: 邀請不同能力的使用者驗證改善方案
- `wireframing`: 在早期就調整版面與流程避免後期返工
- `prototyping`: 模擬焦點流、錯誤回饋與狀態變化

## 複雜需求範例

### B2B 後台資料表格

- 情境: 營運人員每天需在大型表格中搜尋、篩選、批次編輯資料
- A11y 重點: 確保鍵盤可操作、欄位標題可讀、批次選取與狀態提示清楚

### 多步驟申請流程

- 情境: 企業使用者需要填寫大量欄位並跨部門送審
- A11y 重點: 提供清楚步驟結構、錯誤摘要、焦點導引與可理解的提示文案

### 多角色管理平台

- 情境: 管理者、操作員與客服使用同一平台,但看到的資訊與操作不同
- A11y 重點: 確保不同角色介面都具備一致導航、語意結構與回饋方式

## 工作流程

### 1. 了解標準

**WCAG 2.1 等級**
```markdown
A 級 (最低要求):
- 基本無障礙功能
- 法律最低標準

AA 級 (建議目標):
- 大多數組織的目標
- 涵蓋大部分障礙情境

AAA 級 (最高標準):
- 最嚴格的要求
- 某些標準難以達成
```

**四大原則 (POUR)**
```markdown
1. Perceivable (可感知)
   - 資訊和介面元件必須能被使用者感知

2. Operable (可操作)
   - 介面元件和導航必須可操作

3. Understandable (可理解)
   - 資訊和操作必須可理解

4. Robust (穩健)
   - 內容必須能被各種輔助技術解讀
```

### 2. 設計檢查

**視覺設計**

**色彩對比度**
```markdown
WCAG AA 標準:
- 一般文字: 4.5:1
- 大文字 (18pt+): 3:1
- 圖形和 UI 元件: 3:1

檢查工具:
- Contrast Checker
- WebAIM Contrast Checker
- Figma 插件: Stark

範例:
✅ 黑色文字 (#000000) on 白色背景 (#FFFFFF) = 21:1
✅ 深灰文字 (#595959) on 白色背景 = 7:1
❌ 淺灰文字 (#999999) on 白色背景 = 2.8:1
```

**不只依賴顏色**
```markdown
❌ 錯誤: 只用紅色表示錯誤
✅ 正確: 紅色 + 圖示 + 文字說明

❌ 錯誤: 只用顏色區分圖表
✅ 正確: 顏色 + 圖案 + 標籤
```

**字體大小**
```markdown
最小字體:
- 內文: 16px (1rem)
- 小字: 14px (0.875rem)

行距:
- 最小: 1.5 倍字體大小
- 段落間距: 2 倍字體大小

字體選擇:
✅ 清晰易讀的無襯線字體
✅ 字母間距適中
❌ 過於裝飾性的字體
❌ 全大寫長文字
```

**焦點指示器**
```markdown
要求:
- 所有可互動元素必須有明顯的焦點狀態
- 對比度至少 3:1
- 不能只依賴顏色變化

範例:
button:focus {
  outline: 2px solid #0066CC;
  outline-offset: 2px;
}
```

### 3. 互動設計

**鍵盤導航**
```markdown
必須支援:
- Tab: 前進到下一個元素
- Shift + Tab: 返回上一個元素
- Enter: 啟動連結或按鈕
- Space: 啟動按鈕或核取方塊
- 方向鍵: 在選單或選項中移動
- Esc: 關閉對話框或選單

焦點順序:
1. 邏輯且可預測
2. 從左到右,從上到下
3. 不會困在某個區域
```

**觸控目標大小**
```markdown
最小尺寸:
- 觸控目標: 44x44px (iOS)
- 觸控目標: 48x48px (Android)
- 間距: 至少 8px

範例:
✅ 按鈕: 48x48px
✅ 連結: 行高 44px+
❌ 小圖示: 24x24px (太小)
```

**時間限制**
```markdown
如果有時間限制:
- 提供關閉選項
- 提供調整選項
- 提供延長選項
- 至少給予 20 秒警告

範例:
「此頁面將在 60 秒後逾時。
[延長時間] [繼續]」
```

### 4. 內容設計

**替代文字 (Alt Text)**
```markdown
圖片類型與 alt 文字:

功能性圖片:
<img src="search.svg" alt="搜尋">

資訊性圖片:
<img src="chart.png" alt="2024年銷售成長圖表,顯示第一季成長15%">

裝飾性圖片:
<img src="decoration.svg" alt="">

複雜圖表:
<img src="complex.png" alt="詳細說明請見下方文字">
[提供完整的文字說明]
```

**標題結構**
```markdown
正確的標題層級:
<h1>頁面主標題</h1>
  <h2>主要章節</h2>
    <h3>子章節</h3>
    <h3>子章節</h3>
  <h2>主要章節</h2>

❌ 錯誤: 跳過層級 (h1 → h3)
❌ 錯誤: 只為了樣式使用標題
✅ 正確: 依照內容層級使用
```

**連結文字**
```markdown
❌ 不好: 點擊[這裡]查看更多
❌ 不好: [閱讀更多]
✅ 好: 查看[產品規格說明]
✅ 好: [下載 2024 年度報告 (PDF, 2MB)]

原則:
- 連結文字要有意義
- 避免「點這裡」「更多」
- 說明連結目的地
- 標示檔案類型和大小
```

### 5. 表單設計

**標籤和說明**
```markdown
✅ 正確:
<label for="email">電子郵件</label>
<input id="email" type="email" 
       aria-describedby="email-hint">
<span id="email-hint">我們不會分享您的電子郵件</span>

必填欄位:
<label for="name">
  姓名 <span aria-label="必填">*</span>
</label>

錯誤訊息:
<input aria-invalid="true" 
       aria-describedby="email-error">
<span id="email-error" role="alert">
  請輸入有效的電子郵件地址
</span>
```

**輸入提示**
```markdown
提供:
- 清楚的標籤
- 輸入格式說明
- 即時驗證回饋
- 明確的錯誤訊息

範例:
電話號碼
[__________]
格式: 09XX-XXX-XXX
```

### 6. 測試驗證

**自動化測試工具**
```markdown
瀏覽器擴充:
- axe DevTools
- WAVE
- Lighthouse

線上工具:
- WebAIM WAVE
- AChecker
- Pa11y

程式碼檢查:
- eslint-plugin-jsx-a11y
- axe-core
```

**手動測試**
```markdown
鍵盤測試:
□ 拔掉滑鼠,只用鍵盤操作
□ 檢查焦點順序是否合理
□ 確認所有功能都可用鍵盤操作

螢幕閱讀器測試:
□ NVDA (Windows, 免費)
□ JAWS (Windows)
□ VoiceOver (Mac/iOS)
□ TalkBack (Android)

視覺測試:
□ 放大至 200%
□ 使用高對比模式
□ 測試色盲模擬
```

## 最佳實踐

1. **對比度**: 色彩對比度至少達到 4.5:1(AA 級)
2. **鍵盤操作**: 所有功能都能用鍵盤操作
3. **焦點指示**: 提供清晰的焦點指示器
4. **語意化**: 使用語意化的 HTML 標籤
5. **表單標籤**: 表單欄位有明確的標籤
6. **不只顏色**: 避免僅用顏色傳達資訊
7. **可縮放**: 確保內容可縮放至 200% 仍可用

## 常見問題

**Q: 無障礙設計會影響美觀嗎?**
A: 不會。良好的無障礙設計可以很美觀,且能提升所有使用者的體驗。

**Q: 需要支援所有輔助技術嗎?**
A: 專注於主流的螢幕閱讀器和標準的 HTML/ARIA 即可。

**Q: 如何說服團隊投資無障礙設計?**
A: 強調法律要求、擴大使用者群體、提升 SEO、改善整體 UX。

## 檢查清單

```markdown
□ 色彩對比度符合 WCAG AA 標準
□ 所有功能可用鍵盤操作
□ 焦點指示器清晰可見
□ 圖片有適當的 alt 文字
□ 標題結構正確
□ 表單有明確標籤
□ 錯誤訊息清楚具體
□ 連結文字有意義
□ 觸控目標夠大 (44x44px+)
□ 內容可縮放至 200%
□ 通過自動化測試
□ 通過螢幕閱讀器測試
```

## 範例輸出

```html
<!-- 無障礙表單範例 -->
<form>
  <div class="form-group">
    <label for="username">
      使用者名稱 
      <span aria-label="必填" class="required">*</span>
    </label>
    <input 
      type="text" 
      id="username" 
      name="username"
      required
      aria-required="true"
      aria-describedby="username-hint"
      aria-invalid="false"
    >
    <span id="username-hint" class="hint">
      3-20 個字元,只能包含字母和數字
    </span>
  </div>

  <div class="form-group">
    <label for="email">電子郵件</label>
    <input 
      type="email" 
      id="email" 
      name="email"
      aria-describedby="email-error"
      aria-invalid="true"
    >
    <span id="email-error" class="error" role="alert">
      請輸入有效的電子郵件地址
    </span>
  </div>

  <button type="submit">
    註冊帳號
  </button>
</form>

<!-- 無障礙導航範例 -->
<nav aria-label="主導航">
  <ul>
    <li><a href="/" aria-current="page">首頁</a></li>
    <li><a href="/products">產品</a></li>
    <li><a href="/about">關於</a></li>
  </ul>
</nav>

<!-- 無障礙圖片範例 -->
<figure>
  <img 
    src="sales-chart.png" 
    alt="2024年第一季銷售成長圖表"
  >
  <figcaption>
    圖表顯示銷售額從1月的100萬成長至3月的150萬,
    成長率達50%。
  </figcaption>
</figure>
```

## 工具推薦

- **對比度檢查**: Stark, Contrast Checker
- **螢幕閱讀器**: NVDA, VoiceOver
- **自動化測試**: axe DevTools, Lighthouse
- **色盲模擬**: Colorblind Web Page Filter
- **鍵盤測試**: 只需要你的鍵盤!

## 相關技能

- `usability-testing`: 包含無障礙使用者的可用性測試
- `design-system`: 在設計系統中建立無障礙元件
- `wireframing`: 在線框圖階段就考慮無障礙性
