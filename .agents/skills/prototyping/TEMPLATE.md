# 原型製作範例轉換模板

這個文件說明如何把保真度層級、互動模式、流程範例、動畫規則與測試清單整理成 `examples.yaml` 格式。

## 目標

讓 skill 能快速產出可測試、可展示、可交接的原型規格，而不是只有工具建議。

## 對應檔案

- 目標資料檔：`examples.yaml`
- 適用 skill：`prototyping`

## YAML 結構

```yaml
fidelity_levels:
  {level_key}:
    name: {名稱}
    characteristics:
      - {特徵1}
    tools: [{工具1}, {工具2}]
    best_for:
      - {場景1}

interaction_patterns:
  {group_key}:
    - pattern: {模式名稱}
      description: {說明}
      trigger: {觸發方式}
      animation: {動畫型態}
      duration: {時間}

prototyping_flows:
  {flow_key}:
    screens:
      - {畫面1}
    interactions:
      - {互動1}
    states:
      - {狀態1}

animation_guidelines:
  duration:
    {duration_key}: {數值或區間}

tool_comparison:
  {tool_key}:
    strengths: [{優點1}]
    limitations: [{限制1}]
    best_for: {場景}
```

## 欄位規則

### `fidelity_levels`

- 每個層級都應說清楚：
  - 做到什麼程度
  - 適合什麼情境
  - 成本大概多高
- `best_for` 只保留最典型用途

### `interaction_patterns`

- 依互動類型分群，例如 `navigation`、`feedback`、`transitions`
- 每個模式至少有 `trigger` 與 `animation`
- `duration` 建議統一格式，例如 `200-300ms`

### `prototyping_flows`

- 必須是完整任務流，不是單頁面清單
- `screens`、`interactions`、`states` 至少擇二完整呈現
- 流程名稱應與真實產品任務一致

### `tool_comparison`

- 比較的是適用場景，不是單純排名
- `limitations` 要誠實具體

## 最小必要欄位

```yaml
prototyping_flows:
  login_flow:
    screens:
      - 登入頁
      - 忘記密碼
      - 驗證成功頁
    interactions:
      - 輸入帳號密碼後點擊登入
      - 忘記密碼後寄送重設信
```

## 高品質標準

- 流程要能支撐測試目標
- 互動模式應包含動作、回饋與時序
- 動畫規則需一致，避免每個案例都自訂一套
- 工具比較應有明確適用邊界

## 範例：新增互動模式

```yaml
interaction_patterns:
  feedback:
    - pattern: 表單驗證提示
      description: 在欄位輸入後即時提示是否有效
      trigger: blur 或 submit
      animation: 淡入
      duration: 150-200ms
```

## 驗證清單

- [ ] 保真度層級邊界清楚
- [ ] 互動模式包含觸發與回饋
- [ ] 流程範例可對應真實任務
- [ ] 狀態涵蓋正常、錯誤、載入等必要情境
- [ ] 工具比較具體且不空泛
- [ ] YAML 結構一致

## 維護原則

1. 優先維護常見高價值流程，如註冊、結帳、管理後台
2. 若是相似流程，優先抽成共通互動模式
3. 動畫與狀態規則應保持一致，避免資料庫失控
