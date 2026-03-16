# 人物誌範例轉換模板

這個文件說明如何把人物誌範本、人物誌案例與屬性清單整理成 `examples.yaml` 格式。

## 目標

建立可重複使用、結構清楚、能反映真實研究資料的人物誌資料庫。

## 對應檔案

- 目標資料檔：`examples.yaml`
- 適用 skill：`persona-creation`

## YAML 結構

```yaml
templates:
  {template_key}:
    name: {範本名稱}
    structure:
      {section_key}:
        - {欄位1}
        - {欄位2}

example_personas:
  - name: {人物誌名稱}
    age: {年齡或年齡範圍}
    occupation: {角色職業}
    goals:
      primary: {主要目標}
    pain_points:
      - {痛點1}
    quote: {代表引言}

persona_attributes:
  {group_key}:
    - {欄位1}
    - {欄位2}

best_practices:
  - {建議1}
```

## 欄位規則

### `templates`

- `template_key`：英文 snake_case，例如 `b2b_professional`
- `name`：正體中文名稱
- `structure`：只放**欄位骨架**，不要在這裡填具體內容
- 建議 section 保持穩定，如：`basic_info`、`goals`、`pain_points`、`behaviors`

### `example_personas`

- 每個案例應該是**濃縮後的典型角色**，不是單一受訪者逐字複製
- `quote` 必須自然、具辨識度，避免空泛口號
- `goals` 與 `pain_points` 需能直接支撐設計判斷

### `persona_attributes`

- 用來定義常見維度，方便 skill 建立標準化輸出
- 避免放入重複或模糊屬性

## 最小必要欄位

```yaml
example_personas:
  - name: 忙碌的營運主管
    occupation: 營運經理
    goals:
      primary: 快速掌握異常狀況
    pain_points:
      - 資訊分散
    quote: "我需要在 5 分鐘內知道今天哪裡出了問題。"
```

## 高品質標準

### 人物誌品質

- 以**研究證據**為基礎，而不是臆測
- 聚焦「行為差異」與「決策差異」，不是只有人口統計
- 一個人物誌應該能回答：
  - 他要完成什麼事？
  - 他如何做決策？
  - 他為何會卡住？

### 引言品質

- 應能代表角色核心心態
- 避免這類模糊句：
  - 不佳：我希望系統更好用
  - 較佳：我不想為了更新一筆資料切三個頁面

## 範例：新增人物誌範本

```yaml
templates:
  internal_ops:
    name: 內部營運角色範本
    structure:
      basic_info:
        - 姓名
        - 職位
        - 團隊
      goals:
        - 主要營運目標
      pain_points:
        - 流程阻礙
      behaviors:
        - 使用工具
        - 協作方式
      quote: 代表引言
```

## 驗證清單

- [ ] 範本欄位有清楚分組
- [ ] 案例人物誌不是單一受訪者原文照抄
- [ ] 主要目標與痛點足夠具體
- [ ] 引言具辨識度且能支撐角色特性
- [ ] 屬性清單沒有重複命名
- [ ] YAML 縮排與 key 命名一致

## 維護原則

1. 新增人物誌前，先判斷是否與既有角色重疊
2. 若只是同一類角色的細微差異，優先補充既有案例
3. 保持範本少而精，避免每個專案都新增一套新格式
