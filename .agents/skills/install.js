#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const SKILLS = [
  'user-interview',
  'persona-creation',
  'information-architecture',
  'wireframing',
  'usability-testing',
  'accessibility-design',
  'design-system',
  'prototyping',
  'ui-visual-design'
];

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

function findSkillsDirectory() {
  let currentDir = process.cwd();
  
  // 嘗試找到 .agents/skills 目錄
  const possiblePaths = [
    path.join(currentDir, '.agents', 'skills'),
    path.join(currentDir, '..', '.agents', 'skills'),
    path.join(process.env.HOME || process.env.USERPROFILE, '.agents', 'skills')
  ];
  
  for (const skillsPath of possiblePaths) {
    if (fs.existsSync(path.dirname(skillsPath))) {
      return skillsPath;
    }
  }
  
  // 如果都找不到,在當前目錄建立
  return path.join(currentDir, '.agents', 'skills');
}

function copySkill(skillName, targetDir) {
  const sourceDir = path.join(__dirname, skillName);
  const destDir = path.join(targetDir, skillName);
  
  if (!fs.existsSync(sourceDir)) {
    console.log(`⚠️  找不到技能: ${skillName}`);
    return false;
  }
  
  // 建立目標目錄
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  // 複製 SKILL.md
  const sourceFile = path.join(sourceDir, 'SKILL.md');
  const destFile = path.join(destDir, 'SKILL.md');
  
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, destFile);
    return true;
  }
  
  return false;
}

function install() {
  console.log('\n🎨 Good UX Skills 安裝程式\n');
  console.log('正在安裝專業的 UX 設計技能...\n');
  
  const targetDir = findSkillsDirectory();
  
  // 確保目標目錄存在
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`✓ 建立技能目錄: ${targetDir}\n`);
  } else {
    console.log(`✓ 使用現有技能目錄: ${targetDir}\n`);
  }
  
  let installedCount = 0;
  let skippedCount = 0;
  
  SKILLS.forEach(skillName => {
    const destDir = path.join(targetDir, skillName);
    const destFile = path.join(destDir, 'SKILL.md');
    
    if (fs.existsSync(destFile)) {
      console.log(`⊘ ${SKILL_NAMES[skillName]} (已存在,跳過)`);
      skippedCount++;
    } else {
      if (copySkill(skillName, targetDir)) {
        console.log(`✓ ${SKILL_NAMES[skillName]}`);
        installedCount++;
      }
    }
  });
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`\n✨ 安裝完成!`);
  console.log(`   新安裝: ${installedCount} 個技能`);
  if (skippedCount > 0) {
    console.log(`   跳過: ${skippedCount} 個技能 (已存在)`);
  }
  console.log(`\n📁 技能位置: ${targetDir}`);
  console.log('\n使用方式:');
  console.log('  在支援 Agent Skills 的工具中,這些技能會自動被偵測到');
  console.log('  例如: Windsurf, Claude Code, 或其他相容工具\n');
  console.log('可用技能:');
  SKILLS.forEach(skill => {
    console.log(`  • ${SKILL_NAMES[skill]} ($${skill})`);
  });
  console.log('\n更多資訊: https://github.com/zz41354899/goodux-skills');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

// 執行安裝
if (require.main === module) {
  install();
}

module.exports = { install };
