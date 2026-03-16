# 無障礙範例轉換模板

這個文件說明如何把 WCAG 檢查項、ARIA 模式、螢幕閱讀器測試與常見問題整理成 `examples.yaml` 格式。

## 目標

讓 skill 能輸出高精準度的無障礙檢查與修正建議，而不是只給原則口號。

## 對應檔案

- 目標資料檔：`examples.yaml`
- 適用 skill：`accessibility-design`

## YAML 結構

```yaml
wcag_checklist:
  {principle_key}:
    - id: {check_id}
      requirement: {要求}
      level: {WCAG 等級}
      how_to_check: {檢查方式}

aria_patterns:
  {pattern_key}:
    html: {範例}
    attributes:
      - {屬性說明}
    keyboard:
      - {鍵盤規則}

screen_reader_testing:
  tools:
    - name: {工具名稱}
      platform: {平台}
      free: {true|false}

testing_tools:
  automated:
    - name: {工具名稱}
      type: {工具型態}
```

## 欄位規則

### `wcag_checklist`

- 依四大原則分組：`perceivable`、`operable`、`understandable`、`robust`
- `id` 要短且穩定，可供後續引用
- `requirement` 必須具體，不要只寫「符合 WCAG」
- `how_to_check` 要能被手動執行

### `aria_patterns`

- 只收錄常見且高風險的互動元件
- `html` 範例應盡量精簡，但語意完整
- `keyboard` 規則要與實際操作一致

### `common_issues`

- 應包含 `impact` 與 `solution`
- 優先收錄真實專案常出現的問題

## 最小必要欄位

```yaml
wcag_checklist:
  operable:
    - id: keyboard_access
      requirement: 所有功能都能用鍵盤操作
      level: A
      how_to_check: 使用 Tab、Enter、Space 逐一測試
```

## 高品質標準

- 每條檢查項都能回答：
  - 要求是什麼
  - 怎麼檢查
  - 為什麼重要
- ARIA 範例不可取代原生語意 HTML，除非必要
- 修正方案要可落地，不要停留在抽象原則

## 範例：新增常見問題

```yaml
common_issues:
  - issue: 錯誤訊息只用紅色呈現
    impact: 色覺差異使用者可能無法辨識錯誤
    solution: 加上圖示、文字與欄位描述關聯
```

## 驗證清單

- [ ] 檢查項已分配到正確 WCAG 原則
- [ ] `level` 標示正確
- [ ] `how_to_check` 可由設計/前端手動執行
- [ ] ARIA 範例沒有錯誤語意
- [ ] 解法足夠具體
- [ ] YAML 命名一致

## 維護原則

1. 優先維護高風險與高頻問題
2. 相似檢查項應整併，避免重複
3. 新增內容前先確認是否真的能幫助實際檢查或修正
