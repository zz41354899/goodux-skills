const fs = require('fs');
const path = require('path');
const TOOLS_CONFIG = require('../tools-config.json');

/**
 * Workflow 生成相關函數
 */

function ensureDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    return;
  }

  fs.mkdirSync(dirPath, { recursive: true });
}

function getWorkflowContent(toolId, skillName, label, skillPath) {
  const tool = TOOLS_CONFIG.tools[toolId];
  const prefix = tool.commandPrefix;
  
  const skillDescriptions = {
    empathize: {
      summary: '透過訪談、觀察與資料彙整，萃取痛點、動機與情境，為後續 Define 奠定依據。',
      when: '專案初期需要確認真實使用者需求、建立人物誌與旅程圖',
      outputs: '研究原始資料、痛點與動機整理、人物誌、旅程圖或情境圖',
      references: ['user-interview', 'persona-creation']
    },
    define: {
      summary: '將研究洞察轉為明確問題敘述，對齊範疇、限制與成功指標。',
      when: '完成研究後需要收斂關鍵問題與需求、定義成功指標',
      outputs: '問題敘述（POV/HMW）、需求清單與優先順序、成功指標、MVP 範圍',
      references: ['information-architecture', 'accessibility-design']
    },
    ideate: {
      summary: '發散解法、繪製線框並探索視覺方向。',
      when: '需要探索多種解決方案、繪製線框或選擇視覺風格',
      outputs: '解法草圖、線框圖、視覺風格方向',
      references: ['wireframing', 'ui-visual-design']
    },
    prototype: {
      summary: '將優選解法轉成可操作原型，設定互動、轉場與狀態。',
      when: '需要建立可互動的原型以展示設計或進行測試',
      outputs: '高保真原型、互動流程說明、轉場與狀態設計',
      references: ['prototyping']
    },
    test: {
      summary: '規劃與執行可用性測試，蒐集行為與回饋，整理優先修正清單。',
      when: '需要驗證設計方案、發現可用性問題或收集使用者回饋',
      outputs: '測試計畫、測試結果報告、問題清單與優先順序',
      references: ['usability-testing']
    }
  };

  const skillInfo = skillDescriptions[skillName] || {
    summary: '執行 UX 設計任務',
    when: '需要執行相關設計工作時',
    outputs: '設計產出',
    references: []
  };

  let referencesSection = '';
  if (skillInfo.references.length > 0) {
    referencesSection = `\n## 參考資料

本技能整合以下詳細方法，可在 \`${skillPath}\` 中查看完整參考：
${skillInfo.references.map(ref => `- \`references/${ref}/SKILL.md\``).join('\n')}
`;
  }
  
  return `---
description: ${label}
---

# ${prefix}${skillName}

${skillInfo.summary}

## 使用方式

在對話中輸入 \`${prefix}${skillName}\` 即可觸發此技能。

## 何時使用

${skillInfo.when}

## 預期輸出

${skillInfo.outputs}

## 執行步驟

1. 讀取技能定義：\`${skillPath}\`
2. 確認必要輸入與限制條件
3. 根據技能指引執行 UX 設計任務
4. 產出符合規範的設計成果
5. 執行完成檢查清單
${referencesSection}
## 技能檔案

完整的執行指引、輸入輸出規範、範例與檢查清單位於：
\`${skillPath}\`

---
*此 workflow 由 Good UX Skills 自動生成，支援 ${tool.name}*
`;
}

function createWorkflowFiles(skillName, projectRoot, options, getLabel) {
  const label = getLabel(skillName);
  const skillPath = path.join('.agents', 'skills', skillName, 'SKILL.md');
  const results = { created: 0, updated: 0, skipped: 0, tools: [] };
  
  const targetTools = options.tools || TOOLS_CONFIG.defaultTools;
  
  targetTools.forEach((toolId) => {
    const tool = TOOLS_CONFIG.tools[toolId];
    if (!tool || !tool.supported) {
      return;
    }
    
    const workflowDir = path.join(projectRoot, tool.workflowDir);
    const workflowFile = path.join(workflowDir, `${skillName}${tool.fileExtension}`);
    
    if (fs.existsSync(workflowFile) && !options.force) {
      results.skipped += 1;
      results.tools.push({ tool: toolId, status: 'skipped' });
      return;
    }
    
    ensureDirectory(workflowDir);
    
    const content = getWorkflowContent(toolId, skillName, label, skillPath);
    fs.writeFileSync(workflowFile, content, 'utf-8');
    
    const status = fs.existsSync(workflowFile) ? 'updated' : 'created';
    results[status] += 1;
    results.tools.push({ tool: toolId, status });
  });
  
  return results;
}

module.exports = {
  createWorkflowFiles,
  ensureDirectory
};
