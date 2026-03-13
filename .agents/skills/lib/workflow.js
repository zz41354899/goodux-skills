const fs = require('fs');
const path = require('path');
const TOOLS_CONFIG = require('../tools-config.json');

/**
 * Workflow 生成相關函數
 */

function ensureDirectory(dirPath, dryRun) {
  if (fs.existsSync(dirPath)) {
    return;
  }

  if (!dryRun) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function getWorkflowContent(toolId, skillName, label, skillPath) {
  const tool = TOOLS_CONFIG.tools[toolId];
  const prefix = tool.commandPrefix;
  
  return `---
description: ${label}
---

# ${prefix}${skillName}

這個 workflow 會觸發 **${label}** 技能。

## 使用方式

在對話中輸入 \`${prefix}${skillName}\` 即可觸發此技能。

## 執行步驟

1. 讀取技能定義檔案：\`${skillPath}\`
2. 根據技能指引執行對應的 UX 設計任務
3. 依照技能規範產出結果

## 技能說明

此技能位於 \`${skillPath}\`，包含完整的執行指引、輸入輸出規範與範例。

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
    
    ensureDirectory(workflowDir, options.dryRun);
    
    if (!options.dryRun) {
      const content = getWorkflowContent(toolId, skillName, label, skillPath);
      fs.writeFileSync(workflowFile, content, 'utf-8');
    }
    
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
