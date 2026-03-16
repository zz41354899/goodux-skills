import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Skill {
  id: string;
  name: string;
  description: string;
  category: string;
  icon?: string;
  content: {
    overview: string;
    whenToUse: string[];
    howToUse: string[];
    bestPractices: string[];
    examples?: string[];
  };
}

export interface SkillMetadata {
  name: string;
  description: string;
  license: string;
  metadata: {
    author: string;
    version: string;
    category: string;
    language: string;
  };
}

export interface SkillContent {
  taskDefinition: string;
  whenToUse: string[];
  requiredInput: string[];
  expectedOutput: string[];
  completionCriteria: string[];
  notApplicable: string[];
  triggerConditions: string[];
  clarificationNeeded: string[];
  relatedSkills: string[];
  references: string[];
  executionSteps: string[];
  executionChecklist: string[];
  exampleOutput: string;
}

export const skillCategories = [
  { id: "empathize", name: "Empathize 同理", color: "bg-white text-gray-900 border border-gray-200" },
  { id: "define", name: "Define 定義", color: "bg-white text-gray-900 border border-gray-200" },
  { id: "ideate", name: "Ideate 發想", color: "bg-white text-gray-900 border border-gray-200" },
  { id: "prototype", name: "Prototype 原型", color: "bg-white text-gray-900 border border-gray-200" },
  { id: "test", name: "Test 測試", color: "bg-white text-gray-900 border border-gray-200" },
];

export const skills: Skill[] = [
  {
    id: "empathize",
    name: "Empathize 同理洞察",
    description: "蒐集使用者洞察、執行訪談並萃取人物誌與需求背景，建立對目標族群的同理心。",
    category: "empathize",
    content: {
      overview:
        "Empathize 聚焦理解使用者：透過訪談、觀察與資料彙整，萃取痛點、動機與情境，形成後續定義的依據。",
      whenToUse: [
        "專案初期需要確認真實使用者需求",
        "需要建立人物誌、旅程與情境圖以對齊團隊認知",
        "重新檢視既有產品的核心痛點與動機",
      ],
      howToUse: [
        "**規劃研究**: 明確目標、招募對象、撰寫訪談/觀察大綱",
        "**執行研究**: 訪談或實地觀察，蒐集語錄、行為與情緒訊號",
        "**整理洞察**: 轉錄、分組、標註主題，形成人物誌與關鍵痛點",
        "**對齊共識**: 與團隊分享洞察牆/旅程圖，確認後續定義方向",
      ],
      bestPractices: [
        "使用開放式問題並追問「為什麼」",
        "避免引導，保持中立並觀察非語言訊號",
        "至少訪談 5-8 位目標使用者以捕捉模式",
        "研究後立即整理筆記，與團隊共讀形成共識",
      ],
      examples: [
        "電商結帳流程的使用者訪談與痛點牆",
        "SaaS 管理員的日常情境旅程圖",
      ],
    },
  },
  {
    id: "define",
    name: "Define 問題定義",
    description: "收斂洞察、界定問題、優先順序與成功指標，並確認限制條件（含可及性/a11y）。",
    category: "define",
    content: {
      overview:
        "Define 將研究洞察轉為明確問題敘述：對齊目標、範疇、限制與成功指標，為後續構思與驗證奠基。",
      whenToUse: [
        "完成研究後需要收斂關鍵問題與需求",
        "多方利害關係人需要共識與優先排序",
        "需要定義成功指標與驗收標準（含 a11y）",
      ],
      howToUse: [
        "**彙整洞察**: 聚合痛點/目標，繪製問題陳述與 POV",
        "**界定範疇**: 明確角色、場景、限制（技術/法規/可及性）",
        "**優先排序**: 以影響力×可行性排序需求，確定 MVP 範圍",
        "**設定指標**: 定義成效衡量與驗收標準（如完成率、錯誤率、WCAG 等級）",
      ],
      bestPractices: [
        "以使用者目標撰寫問題敘述，避免解法先行",
        "同時紀錄已知限制與假設，降低落地風險",
        "將 a11y/法規要求視為範疇的一部分",
        "對齊利害關係人並記錄決策依據",
      ],
      examples: [
        "行動銀行轉帳的核心問題陳述與成功指標",
        "企業後台資料表易讀性與 WCAG AA 對齊的需求列表",
      ],
    },
  },
  {
    id: "ideate",
    name: "Ideate 發想構思",
    description: "發散解法、繪製線框並探索視覺方向；內含 20 種 UI 風格參考以快速收斂。",
    category: "ideate",
    content: {
      overview:
        "Ideate 透過發散與收斂將問題轉為候選解法，涵蓋流程草圖、線框、資訊架構與視覺方向探索。",
      whenToUse: [
        "問題定義完成，需要多個解法選項時",
        "需要快速產出線框驗證流程與結構",
        "需要挑選合適的視覺風格與設計語言",
      ],
      howToUse: [
        "**發散想法**: Crazy 8s / 雙鑽等方法產生多個概念",
        "**線框與流程**: 繪製關鍵路徑線框，標註互動與狀態",
        "**視覺方向**: 參考 20 種 UI 風格，建立 2-3 個候選樣式",
        "**收斂評估**: 以可行性、可用性、一致性與 a11y 為準則選擇方案",
      ],
      bestPractices: [
        "保持低保真快速迭代，再逐步提高保真度",
        "用真實內容取代 Lorem，避免資訊密度錯判",
        "使用一致的間距/排版系統，方便後續原型與系統化",
        "考慮深色模式與對比度需求，及早納入 a11y",
      ],
      examples: [
        "B2B 儀表板線框與資料密度策略",
        "電商結帳流程的兩版視覺方向（Minimalist vs. Tech）",
      ],
    },
  },
  {
    id: "prototype",
    name: "Prototype 原型製作",
    description: "將優選解法轉成可操作原型，設定互動、轉場與狀態，為測試與示範做準備。",
    category: "prototype",
    content: {
      overview:
        "Prototype 著重把線框/視覺稿變成可互動的體驗，涵蓋流程串接、狀態、動畫與分享設定，用於可用性與利益關係人驗證。",
      whenToUse: [
        "需要讓使用者或利害關係人實際操作體驗時",
        "在開發前驗證關鍵互動/技術可行性",
        "需要對外展示概念並收集回饋",
      ],
      howToUse: [
        "**組裝畫面**: 將線框/高保真畫面串接完整流程",
        "**設定互動**: 點擊、滑動、鍵盤導覽、狀態/錯誤分支",
        "**補足情境**: 加入 loading/empty/error，模擬真實資料",
        "**分享與說明**: 設定可測試連結、說明限制與假設",
      ],
      bestPractices: [
        "以測試任務為主線，只做必要畫面與分支",
        "保持互動一致性，避免隱藏的跳轉與無回饋狀態",
        "加入焦點順序與鍵盤操作，預留 a11y 驗證",
        "記錄原型限制與假設，避免誤判可行性",
      ],
      examples: [
        "行動支付綁卡流程高保真原型",
        "B2B 報表篩選與下載體驗原型",
      ],
    },
  },
  {
    id: "test",
    name: "Test 可用性驗證",
    description: "規劃與執行可用性測試，蒐集行為與回饋，整理優先修正清單（可含 a11y 驗證）。",
    category: "test",
    content: {
      overview:
        "Test 透過任務操作觀察使用者行為，量化/質化回饋並排序問題，為迭代提供明確修正方向。",
      whenToUse: [
        "原型或產品釋出前需要驗證體驗",
        "比對多個方案或追蹤迭代成效",
        "需要同時檢視可用性與可及性風險",
      ],
      howToUse: [
        "**定義目標**: 設定任務、成功標準、評估指標",
        "**招募與安排**: 找 5-8 位目標使用者，安排錄影/紀錄",
        "**執行測試**: 出聲思考、觀察行為/卡點，標記嚴重度",
        "**整理輸出**: 問題清單、影響層級、建議修正與 a/b 後續計畫",
      ],
      bestPractices: [
        "以任務完成率、時間、錯誤率搭配質性觀察",
        "保持中立，不替使用者解題，專注觀察",
        "用統一格式記錄問題與嚴重度，方便排序",
        "若包含 a11y，記錄對比度、鍵盤流程、朗讀與替代文字",
      ],
      examples: [
        "企業後台表格操作的可用性測試報告",
        "行動 App 註冊流程的 5 人快速測試與修正建議",
      ],
    },
  },
];

export const getSkillsByCategory = (categoryId: string): Skill[] => {
  return skills.filter((skill) => skill.category === categoryId);
};

export const getSkillById = (skillId: string): Skill | undefined => {
  return skills.find((skill) => skill.id === skillId);
};

/**
 * 從 .agents/skills/{skillId}/SKILL.md 動態讀取完整技能內容
 */
export function getSkillContentFromFile(skillId: string): {
  metadata: SkillMetadata;
  content: SkillContent;
  rawMarkdown: string;
} | null {
  try {
    const skillPath = path.join(
      process.cwd(),
      '.agents',
      'skills',
      skillId,
      'SKILL.md'
    );

    if (!fs.existsSync(skillPath)) {
      console.warn(`Skill file not found: ${skillPath}`);
      return null;
    }

    const fileContent = fs.readFileSync(skillPath, 'utf-8');
    const { data, content: markdown } = matter(fileContent);

    const parsedContent = parseSkillMarkdown(markdown);

    return {
      metadata: data as SkillMetadata,
      content: parsedContent,
      rawMarkdown: markdown,
    };
  } catch (error) {
    console.error(`Error reading skill file for ${skillId}:`, error);
    return null;
  }
}

/**
 * 解析 SKILL.md 的 Markdown 內容為結構化資料
 */
function parseSkillMarkdown(markdown: string): SkillContent {
  const sections: Record<string, string> = {};
  const lines = markdown.split('\n');
  let currentSection = '';
  let currentContent: string[] = [];

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (currentSection) {
        sections[currentSection] = currentContent.join('\n').trim();
      }
      currentSection = line.replace('## ', '').trim();
      currentContent = [];
    } else if (currentSection) {
      currentContent.push(line);
    }
  }

  if (currentSection) {
    sections[currentSection] = currentContent.join('\n').trim();
  }

  const parseList = (text: string): string[] => {
    return text
      .split('\n')
      .filter((line) => line.trim().startsWith('-'))
      .map((line) => line.replace(/^-\s*/, '').trim())
      .filter((line) => line.length > 0);
  };

  return {
    taskDefinition: sections['任務定義'] || '',
    whenToUse: parseList(sections['何時使用'] || ''),
    requiredInput: parseList(sections['必要輸入'] || ''),
    expectedOutput: parseList(sections['預期輸出'] || ''),
    completionCriteria: parseList(sections['完成條件'] || ''),
    notApplicable: parseList(sections['不適用情境'] || ''),
    triggerConditions: parseList(sections['觸發條件'] || ''),
    clarificationNeeded: parseList(sections['必要澄清'] || ''),
    relatedSkills: parseList(sections['可搭配技能'] || ''),
    references: parseList(sections['參考資料 (References)'] || ''),
    executionSteps: parseList(sections['執行步驟'] || ''),
    executionChecklist: parseList(sections['執行檢查'] || ''),
    exampleOutput: sections['精簡範例輸出'] || '',
  };
}

/**
 * 取得所有技能的完整內容（用於 SSG/SSR）
 */
export function getAllSkillsContent(): Map<string, ReturnType<typeof getSkillContentFromFile>> {
  const skillsMap = new Map();
  const skillIds = ['empathize', 'define', 'ideate', 'prototype', 'test'];

  for (const skillId of skillIds) {
    const content = getSkillContentFromFile(skillId);
    if (content) {
      skillsMap.set(skillId, content);
    }
  }

  return skillsMap;
}
