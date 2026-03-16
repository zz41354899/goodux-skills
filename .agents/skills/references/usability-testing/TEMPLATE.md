# 可用性測試範例轉換模板

這個文件說明如何把測試情境、評估指標、測試方法與測試計畫模板整理成 `examples.yaml` 格式。

## 目標

讓 skill 能快速組合出可執行的測試方案，並對問題嚴重度做一致判斷。

## 對應檔案

- 目標資料檔：`examples.yaml`
- 適用 skill：`usability-testing`

## YAML 結構

```yaml
test_scenarios:
  {product_type}:
    - scenario: {情境名稱}
      task: {測試任務}
      success_criteria:
        - {成功條件1}
      metrics:
        - {指標1}

test_methods:
  {method_key}:
    name: {方法名稱}
    description: {摘要}
    pros:
      - {優點1}
    cons:
      - {缺點1}
    best_for: [{場景1}]

metrics:
  {metric_group}:
    - name: {指標名稱}
      description: {說明}
      benchmark: {基準}

test_plan_template:
  objectives:
    - {目標1}

severity_rating:
  {level_key}:
    level: {數字}
    description: {定義}
    action: {處理建議}
```

## 欄位規則

### `test_scenarios`

- 任務描述必須**像真實任務**，不是功能導覽
- `success_criteria` 要可觀察、可判定
- `metrics` 選擇 2-4 個最關鍵的觀測指標即可

### `test_methods`

- 明確寫出使用限制與適用情境
- `pros` / `cons` 要可幫助選擇，而不是空泛形容

### `metrics`

- 優先收錄在 UX 決策中常用的指標
- `benchmark` 若無固定數值，可用相對描述

### `severity_rating`

- 分級標準需穩定，避免同類問題被不同等級描述
- `action` 要能直接指導優先處理順序

## 最小必要欄位

```yaml
test_scenarios:
  saas_product:
    - scenario: 建立新專案
      task: 為團隊建立一個新的專案
      success_criteria:
        - 成功找到建立入口
        - 成功完成建立
      metrics:
        - 完成時間
        - 錯誤次數
```

## 高品質標準

- 任務要有情境，不是只有按鈕名稱
- 成功條件應避免模糊詞，例如「大致完成」
- 問題分級標準應能跨專案重用
- 測試計畫模板應足夠精簡，避免變成長篇研究文件

## 範例：新增嚴重程度等級說明

```yaml
severity_rating:
  blocker:
    level: 0
    description: 使用者無法完成核心任務
    action: 立即修復，暫停發布
```

## 驗證清單

- [ ] 任務描述自然且接近真實情境
- [ ] 成功標準可量化或明確觀察
- [ ] 指標與情境高度相關
- [ ] 方法優缺點有選擇價值
- [ ] 嚴重度等級無重疊
- [ ] YAML key 一致

## 維護原則

1. 優先補高頻產品型態的測試任務
2. 若任務只差產品名詞，優先抽象成可重用模板
3. 指標定義與分級標準應保持穩定
