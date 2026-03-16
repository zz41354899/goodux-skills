# 使用者訪談範例轉換模板

這個文件說明如何將新的訪談題庫、訪談框架與最佳實踐整理成 `examples.yaml` 可用格式。

## 目標

建立可被 skill 穩定引用、易於維護、能快速匹配研究情境的訪談資料。

## 對應檔案

- 目標資料檔：`examples.yaml`
- 適用 skill：`user-interview`

## YAML 結構

```yaml
question_templates:
  {category_key}:
    - id: q{編號}
      question: {開放式問題}
      purpose: {提問目的}
      follow_up:
        - {追問1}
        - {追問2}
      tags: [{標籤1}, {標籤2}]

interview_frameworks:
  - name: {框架名稱}
    description: {框架摘要}
    steps:
      - {步驟1}
      - {步驟2}

best_practices:
  - category: {階段}
    tips:
      - {建議1}
      - {建議2}
```

## 欄位規則

### `question_templates`

- `category_key`：使用英文 snake_case，例如 `discovery`、`pain_points`
- `id`：唯一識別碼，格式固定為 `q01`、`q02`
- `question`：必須是**開放式問題**，避免 yes/no 問法
- `purpose`：一句話說明這題要驗證什麼
- `follow_up`：保留 2-4 個高價值追問，不要過多
- `tags`：2-4 個即可，聚焦研究意圖

### `interview_frameworks`

- 用於補充 skill 在不同研究深度下的提問策略
- 優先收錄**可操作**的方法，而不是理論名詞堆疊
- 若有範例對話，可放在 `example` 內

### `best_practices`

- 建議依階段拆分：`準備階段`、`執行階段`、`分析階段`
- 每個階段 3-6 條即可，避免冗長

## 最小必要欄位

如果只想快速新增一題，至少要有：

```yaml
question_templates:
  discovery:
    - id: q09
      question: 您最近一次完成這個任務時，實際是怎麼做的？
      purpose: 了解真實流程
      tags: [流程, 行為]
```

## 高品質標準

### 問題設計

- 問題聚焦**真實行為**，不是抽象偏好
- 優先問「最近一次」「實際如何做」
- 避免引導式問法，例如：
  - 不佳：您是不是覺得這功能很難用？
  - 較佳：您使用這個功能時，有遇到什麼困難？

### 標籤品質

- 標籤要能幫助後續檢索
- 建議從這些面向選：
  - 行為：`流程`、`頻率`、`工具切換`
  - 動機：`目標`、`驅動因素`
  - 問題：`痛點`、`阻礙`、`例外情境`
  - 決策：`比較`、`評估標準`

## 範例：新增一組問題

```yaml
question_templates:
  decision_making:
    - id: q10
      question: 當您要決定是否採用這個工具時，通常會比較哪些條件？
      purpose: 了解決策標準
      follow_up:
        - 哪一項最重要？
        - 誰會影響這個決定？
      tags: [決策, 評估標準, 利害關係人]
```

## 驗證清單

- [ ] `id` 沒有重複
- [ ] 問題是開放式而非封閉式
- [ ] `purpose` 可以清楚說明研究意圖
- [ ] `tags` 足夠精準但不過量
- [ ] 追問能幫助深入，不是重複同一句話
- [ ] YAML 缩排一致

## 維護原則

1. 優先沿用既有 category，避免建立過多近似分類
2. 相似問題若只是語氣不同，應合併而非重複新增
3. 每次新增後，確認該題在真實訪綱中是否有使用價值
