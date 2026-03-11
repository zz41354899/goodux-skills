# 資訊架構範例轉換模板

這個文件說明如何把架構模式、導航類型、網站地圖與命名原則整理成 `examples.yaml` 格式。

## 目標

讓 skill 能精準引用可用的 IA 模式，而不是輸出抽象建議。

## 對應檔案

- 目標資料檔：`examples.yaml`
- 適用 skill：`information-architecture`

## YAML 結構

```yaml
ia_patterns:
  {pattern_key}:
    name: {模式名稱}
    description: {摘要}
    best_for: [{場景1}, {場景2}]

navigation_types:
  {nav_key}:
    name: {導航名稱}
    description: {摘要}
    best_practices:
      - {建議1}

card_sorting_guide:
  {method_key}:
    description: {方法摘要}
    when_to_use: {使用時機}
    steps:
      - {步驟1}

sitemap_examples:
  {example_key}:
    name: {範例名稱}
    structure:
      {主層級}: null

labeling_principles:
  - principle: {原則}
    description: {說明}
    good: {正例}
    bad: {反例}
```

## 欄位規則

### `ia_patterns`

- 每個 pattern 必須回答：**這種架構適合什麼情境？**
- `description` 應描述結構特性，而非空泛優點
- `best_for` 限 2-4 個典型情境

### `navigation_types`

- 重點不是定義術語，而是說明「何時該用」與「如何避免誤用」
- `best_practices` 保留最可執行的規則

### `sitemap_examples`

- `structure` 用於表達層級，不需塞入過度細節
- 只收錄有代表性的站點型態，例如：`ecommerce`、`saas_product`

### `labeling_principles`

- 每條原則建議提供 `good` / `bad` 對照
- 命名例子要接近真實產品語境

## 最小必要欄位

```yaml
ia_patterns:
  hierarchy:
    name: 階層式架構
    description: 從總覽到細節的樹狀層級
    best_for: [企業網站, 內容型網站]
```

## 高品質標準

- 架構模式需有**場景邊界**，不能所有產品都適用
- 網站地圖應能支撐主要任務，不只是把內容全部列出
- 命名原則必須貼近使用者語言，而不是內部部門語言
- 導航建議應能區分「主要導覽」與「輔助導覽」

## 範例：新增網站地圖

```yaml
sitemap_examples:
  knowledge_base:
    name: 知識庫平台
    structure:
      首頁: null
      主題分類:
        - 新手入門
        - 進階設定
        - API 文件
      搜尋: null
      支援中心:
        - 常見問題
        - 聯絡支援
```

## 驗證清單

- [ ] pattern 與導航類型沒有概念重疊
- [ ] `best_for` 足夠聚焦
- [ ] 網站地圖層級不混亂
- [ ] 命名原則含正反例
- [ ] 內容可直接被 skill 拿來組裝輸出
- [ ] YAML key 命名一致

## 維護原則

1. 優先新增高頻產品型態，不要先追求全面覆蓋
2. 同類型架構若只有命名不同，應合併整理
3. 所有範例都應能對應真實使用者任務
