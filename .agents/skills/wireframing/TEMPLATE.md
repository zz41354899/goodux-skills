# 線框圖範例轉換模板

這個文件說明如何把版面模式、元件庫、標註方式與常見頁面模式整理成 `examples.yaml` 格式。

## 目標

讓 skill 能快速輸出具體可執行的線框圖結構，而不是停留在抽象描述。

## 對應檔案

- 目標資料檔：`examples.yaml`
- 適用 skill：`wireframing`

## YAML 結構

```yaml
layout_patterns:
  {pattern_key}:
    name: {版面名稱}
    description: {摘要}
    components:
      - {元件1}
    variations:
      - {變體1}
    best_for: [{場景1}, {場景2}]

component_library:
  {group_key}:
    - {元件1}
    - {元件2}

annotation_guide:
  {type_key}:
    - {標註重點1}
    - {標註重點2}

fidelity_levels:
  {level_key}:
    name: {保真度名稱}
    characteristics:
      - {特徵1}
    when_to_use: {使用時機}
    tools: [{工具1}, {工具2}]

common_patterns:
  {page_key}:
    sections:
      - {區塊1}
      - {區塊2}
```

## 欄位規則

### `layout_patterns`

- `pattern_key` 使用英文 snake_case，例如 `hero_section`
- `components` 應列出畫面骨架所需最小組件
- `variations` 只保留常見且可實際落地的變化
- `best_for` 說明最適合的頁面類型

### `component_library`

- 依角色分群，例如 `navigation`、`content`、`input`
- 只放高頻元件，不放過度細碎的變化

### `annotation_guide`

- 聚焦「線框圖需要額外說清楚的地方」
- 優先列互動、狀態、內容限制、響應式差異

### `fidelity_levels`

- 說明保真度差異時，務必包含：
  - 何時使用
  - 常見工具
  - 適合的溝通場景

## 最小必要欄位

```yaml
layout_patterns:
  dashboard:
    name: 儀表板佈局
    description: 主導航搭配資料模組區塊
    components:
      - 頂部導航
      - KPI 卡片
      - 圖表區
    best_for: [後台, 分析工具]
```

## 高品質標準

- 模式要能直接轉成畫面骨架
- 元件命名要接近設計與開發的共同語言
- 標註內容需能降低誤解，例如：
  - 互動方式
  - 狀態切換
  - 響應式重排
- 頁面模式應支撐實際任務流，而不是只列行銷區塊

## 範例：新增頁面模式

```yaml
common_patterns:
  settings_page:
    sections:
      - 頁面標題
      - 分類側邊欄
      - 設定表單
      - 儲存與取消操作區
```

## 驗證清單

- [ ] 版面模式有清楚的使用場景
- [ ] 元件清單沒有重複分類
- [ ] 標註指南可直接應用在線框圖說明
- [ ] 保真度說明有明確邊界
- [ ] 常見頁面模式具備完整主要區塊
- [ ] YAML 結構一致

## 維護原則

1. 優先維護高頻頁面類型
2. 若只是同一版面的小差異，優先收進 `variations`
3. 避免把視覺風格混入線框圖資料
