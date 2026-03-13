const fs = require('fs');
const path = require('path');

/**
 * 工具函數
 */

const SKILL_NAMES = {
  'user-interview': '使用者訪談',
  'persona-creation': '使用者人物誌',
  'information-architecture': '資訊架構設計',
  'wireframing': '線框圖設計',
  'usability-testing': '可用性測試',
  'accessibility-design': '無障礙設計',
  'design-system': '設計系統建立',
  'prototyping': '互動原型製作',
  'ui-visual-design': 'UI 視覺設計'
};

function discoverSkills(baseDir) {
  try {
    return fs.readdirSync(baseDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .filter((name) => {
        const skillFile = path.join(baseDir, name, 'SKILL.md');
        return fs.existsSync(skillFile);
      });
  } catch {
    return Object.keys(SKILL_NAMES);
  }
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
  getLabel,
  getDefaultSkillsDirectory,
  copyIfExists,
  isPostInstall
};
