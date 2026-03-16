const fs = require('fs');
const path = require('path');

/**
 * 工具函數
 */

// 核心技能：設計思考五大流程
const SKILL_NAMES = {
  empathize: 'Empathize 同理洞察',
  define: 'Define 問題定義',
  ideate: 'Ideate 發想構思',
  prototype: 'Prototype 原型製作',
  test: 'Test 可用性驗證'
};

// References 參考資料（不安裝，僅供查閱）
// 位於 references/ 目錄：user-interview, persona-creation, information-architecture,
// wireframing, ui-visual-design, usability-testing, accessibility-design,
// design-system, prototyping

function discoverSkills(baseDir) {
  const coreSkills = Object.keys(SKILL_NAMES);
  const allowList = new Set(coreSkills);
  try {
    return fs.readdirSync(baseDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && allowList.has(entry.name))
      .map((entry) => entry.name)
      .filter((name) => {
        const skillFile = path.join(baseDir, name, 'SKILL.md');
        return fs.existsSync(skillFile);
      })
      .sort((a, b) => coreSkills.indexOf(a) - coreSkills.indexOf(b)); // 依流程順序排列
  } catch {
    return coreSkills;
  }
}

function getCoreSkills() {
  return Object.keys(SKILL_NAMES);
}

function getLabel(skillName) {
  return SKILL_NAMES[skillName] || skillName;
}

function getDefaultSkillsDirectory() {
  const initCwd = process.env.INIT_CWD || process.cwd();
  const currentDir = process.cwd();
  const possiblePaths = [
    path.join(initCwd, '.agents', 'skills'),
    path.join(currentDir, '.agents', 'skills'),
    path.join(currentDir, '..', '.agents', 'skills')
  ];

  for (const skillsPath of possiblePaths) {
    if (fs.existsSync(skillsPath)) {
      return skillsPath;
    }
  }

  return possiblePaths[0];
}

function copyIfExists(sourcePath, destPath, dryRun) {
  if (!fs.existsSync(sourcePath)) {
    return false;
  }

  if (!dryRun) {
    fs.copyFileSync(sourcePath, destPath);
  }

  return true;
}

function isPostInstall() {
  return (
    process.env.npm_lifecycle_event === 'postinstall' ||
    process.env.INIT_CWD !== undefined
  );
}

module.exports = {
  SKILL_NAMES,
  discoverSkills,
  getCoreSkills,
  getLabel,
  getDefaultSkillsDirectory,
  copyIfExists,
  isPostInstall
};
