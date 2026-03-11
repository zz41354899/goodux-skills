# 設計系統範例轉換模板

這個文件說明如何把 Design Tokens、元件規格、命名規範與治理流程整理成 `examples.yaml` 格式。

## 目標

讓 skill 能輸出一致、可維護、可擴充的設計系統資料，而不是零散元件建議。

## 對應檔案

- 目標資料檔：`examples.yaml`
- 適用 skill：`design-system`

## YAML 結構

```yaml
design_tokens:
  color:
    {group_key}:
      {token_key}: {value}

component_library:
  {component_key}:
    variants:
      {variant_key}:
        {style_key}: {token_ref_or_value}
    states:
      - {state1}

naming_conventions:
  {group_key}:
    pattern: {命名規則}
    examples: [{例子1}, {例子2}]

documentation_structure:
  {doc_key}:
    sections:
      - {段落1}

governance:
  contribution_process:
    steps:
      - {步驟1}
```

## 欄位規則

### `design_tokens`

- Token key 命名需穩定且可延伸
- 若已有分組，就不要混入其他語意層級
- 建議優先維護：`color`、`typography`、`spacing`、`radius`、`shadow`

### `component_library`

- 每個元件至少要有：
  - `variants`
  - `states`
- 樣式值能引用 token 就不要硬編碼
- 變體命名要接近實際設計/前端語言

### `governance`

- 流程應可執行，而不是只有「審查」兩字
- 優先保留與擴充、版本、棄用最相關的流程

## 最小必要欄位

```yaml
design_tokens:
  color:
    brand:
      primary: "#3B82F6"

component_library:
  button:
    variants:
      primary:
        bg: brand.primary
    states:
      - default
      - hover
      - disabled
```

## 高品質標準

- Token 結構可支撐規模擴張
- 元件規格能直接轉換成文件或程式碼
- 命名規範需統一且可落地
- 治理流程應避免產生孤兒元件與重複 token

## 範例：新增元件文件結構

```yaml
documentation_structure:
  pattern_page:
    sections:
      - overview
      - anatomy
      - usage_guidelines
      - do_dont
      - accessibility
```

## 驗證清單

- [ ] Token 分類沒有混亂
- [ ] 元件變體與狀態命名一致
- [ ] 值能引用 token 時未重複硬寫
- [ ] 命名規範附有例子
- [ ] 治理流程具體可執行
- [ ] YAML 結構穩定

## 維護原則

1. 先維護基礎 token，再擴充複雜元件
2. 新增元件前先檢查能否由既有元件組合
3. 避免把專案特例直接變成系統規則
