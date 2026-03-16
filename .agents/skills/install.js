#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 載入模組
const PKG = require(path.join(__dirname, 'package.json'));
const TOOLS_CONFIG = require(path.join(__dirname, 'tools-config.json'));
const { parseArgs } = require('./lib/cli');
const { printHelp, printVersion, listTools } = require('./lib/display');
const { createWorkflowFiles, ensureDirectory } = require('./lib/workflow');
const { discoverSkills, getLabel, getDefaultSkillsDirectory, copyIfExists, isPostInstall } = require('./lib/utils');

// ---------------------------------------------------------------------------
// 技能安裝
// ---------------------------------------------------------------------------

function copySkill(skillName, targetDir, options) {
  const sourceDir = path.join(__dirname, skillName);
  const destDir = path.join(targetDir, skillName);

  if (!fs.existsSync(sourceDir)) {
    return { status: 'missing', skillName };
  }

  const sourceFile = path.join(sourceDir, 'SKILL.md');
  const destFile = path.join(destDir, 'SKILL.md');

  if (!fs.existsSync(sourceFile)) {
    return { status: 'missing', skillName };
  }

  const alreadyExists = fs.existsSync(destFile);

  if (alreadyExists && !options.force) {
    return { status: 'skipped', skillName };
  }

  ensureDirectory(destDir);

  fs.copyFileSync(sourceFile, destFile);

  const templateSource = path.join(sourceDir, 'TEMPLATE.md');
  const templateDest = path.join(destDir, 'TEMPLATE.md');
  const examplesSource = path.join(sourceDir, 'examples.yaml');
  const examplesDest = path.join(destDir, 'examples.yaml');
  const stylepromptsSource = path.join(sourceDir, 'styleprompts.yaml');
  const stylepromptsDest = path.join(destDir, 'styleprompts.yaml');

  copyIfExists(templateSource, templateDest);
  copyIfExists(examplesSource, examplesDest);
  copyIfExists(stylepromptsSource, stylepromptsDest);

  return { status: alreadyExists ? 'updated' : 'installed', skillName };
}

function copyRootFiles(targetDir, options) {
  const rootFiles = ['README.md', 'CONTRIBUTING.md'];

  rootFiles.forEach((fileName) => {
    const sourcePath = path.join(__dirname, fileName);
    const destPath = path.join(targetDir, fileName);
    copyIfExists(sourcePath, destPath);
  });
}

function copyReferencesDirectory(targetDir) {
  const sourceReferencesDir = path.join(__dirname, 'references');
  const destReferencesDir = path.join(targetDir, 'references');

  if (!fs.existsSync(sourceReferencesDir)) {
    return;
  }

  ensureDirectory(destReferencesDir);

  // 複製 references 目錄中的所有檔案和子目錄
  const copyRecursive = (src, dest) => {
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    entries.forEach((entry) => {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      
      if (entry.isDirectory()) {
        ensureDirectory(destPath);
        copyRecursive(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    });
  };

  copyRecursive(sourceReferencesDir, destReferencesDir);
}

// ---------------------------------------------------------------------------
// 主安裝流程
// ---------------------------------------------------------------------------

function install(rawOptions = {}) {
  const allSkills = discoverSkills(__dirname);

  const options = {
    force: Boolean(rawOptions.force),
    silent: Boolean(rawOptions.silent),
    targetDir: rawOptions.targetDir || getDefaultSkillsDirectory(),
    createWorkflows: rawOptions.createWorkflows !== false,
    tools: rawOptions.tools || null
  };

  // 安裝所有技能
  const skillsToInstall = allSkills;

  const log = options.silent ? () => {} : console.log;
  const targetDir = options.targetDir;

  if (!options.silent) {
    log('\n╔═══════════════════════════════════════════════════════════════╗');
    log(`║  Good UX Skills 安裝程式 v${PKG.version}`.padEnd(64) + '║');
    log('╚═══════════════════════════════════════════════════════════════╝\n');
  }

  if (!fs.existsSync(targetDir)) {
    ensureDirectory(targetDir);
    log(`✅ 建立技能目錄: ${targetDir}\n`);
  } else {
    log(`✅ 使用現有技能目錄: ${targetDir}\n`);
    
    // 如果使用 force 選項，清除所有舊檔案以強制更新到最新版本
    if (options.force) {
      log('🔄 強制更新模式：清除所有舊檔案...\n');
      
      // 清除所有技能目錄
      allSkills.forEach(skillName => {
        const skillPath = path.join(targetDir, skillName);
        if (fs.existsSync(skillPath)) {
          fs.rmSync(skillPath, { recursive: true, force: true });
          log(`🗑️  移除舊版本: ${skillName}`);
        }
      });
      
      // 清除 references 目錄
      const referencesPath = path.join(targetDir, 'references');
      if (fs.existsSync(referencesPath)) {
        fs.rmSync(referencesPath, { recursive: true, force: true });
        log(`🗑️  移除舊版本: references`);
      }
      
      // 清除舊版本的 references 子目錄（如果存在）
      const oldReferenceDirs = [
        'user-interview', 'persona-creation', 'information-architecture',
        'wireframing', 'ui-visual-design', 'usability-testing',
        'accessibility-design', 'design-system', 'prototyping'
      ];
      
      oldReferenceDirs.forEach(dirName => {
        const oldPath = path.join(targetDir, dirName);
        if (fs.existsSync(oldPath)) {
          fs.rmSync(oldPath, { recursive: true, force: true });
          log(`🗑️  移除舊版本目錄: ${dirName}`);
        }
      });
      
      log('');
    } else {
      // 非 force 模式，只清理舊版本的 references 子目錄
      const oldReferenceDirs = [
        'user-interview', 'persona-creation', 'information-architecture',
        'wireframing', 'ui-visual-design', 'usability-testing',
        'accessibility-design', 'design-system', 'prototyping'
      ];
      
      oldReferenceDirs.forEach(dirName => {
        const oldPath = path.join(targetDir, dirName);
        if (fs.existsSync(oldPath)) {
          fs.rmSync(oldPath, { recursive: true, force: true });
          log(`🗑️  移除舊版本目錄: ${dirName}`);
        }
      });
      
      if (oldReferenceDirs.some(dir => fs.existsSync(path.join(targetDir, dir)))) {
        log('');
      }
    }
  }

  copyRootFiles(targetDir, options);
  copyReferencesDirectory(targetDir);

  const summary = { installed: 0, updated: 0, skipped: 0, missing: 0 };
  const workflowSummary = { created: 0, updated: 0, skipped: 0 };
  const results = [];
  const workflowResults = [];

  const projectRoot = path.resolve(targetDir, '..', '..');

  skillsToInstall.forEach((skillName) => {
    const result = copySkill(skillName, targetDir, options);
    const label = getLabel(skillName);
    
    const extraInfo = skillName === 'ideate' ? ' - 含 20 個 UI 風格參考' : '';

    results.push({ id: skillName, name: label, status: result.status });

    switch (result.status) {
      case 'installed':
        log(`✅ ${label}${extraInfo}`);
        summary.installed += 1;
        break;
      case 'updated':
        log(`🔄 ${label}${extraInfo} (已更新)`);
        summary.updated += 1;
        break;
      case 'skipped':
        log(`⏭️  ${label}${extraInfo} (已存在)`);
        summary.skipped += 1;
        break;
      default:
        log(`❌ ${label} (來源不存在)`);
        summary.missing += 1;
        break;
    }

    if (options.createWorkflows && result.status !== 'missing') {
      const workflowResult = createWorkflowFiles(skillName, projectRoot, options, getLabel);
      workflowResults.push({ 
        id: skillName, 
        name: label, 
        tools: workflowResult.tools 
      });
      
      workflowSummary.created += workflowResult.created;
      workflowSummary.updated += workflowResult.updated;
      workflowSummary.skipped += workflowResult.skipped;
    }
  });

  // 人類可讀摘要
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  log(`\n✨ 安裝完成!`);
  log(`   新安裝: ${summary.installed} 個技能`);
  if (summary.updated > 0) { log(`   覆蓋更新: ${summary.updated} 個技能`); }
  if (summary.skipped > 0) { log(`   跳過: ${summary.skipped} 個技能 (已存在)`); }
  if (summary.missing > 0) { log(`   缺少來源: ${summary.missing} 個技能`); }
  log(`\n📁 技能位置: ${targetDir}`);
  
  if (options.createWorkflows) {
    const targetTools = options.tools || TOOLS_CONFIG.defaultTools;
    const toolNames = targetTools.map(id => TOOLS_CONFIG.tools[id]?.name).filter(Boolean);
    
    log(`\n⚡ Workflow 命令支援:`);
    log(`   新建立: ${workflowSummary.created} 個`);
    if (workflowSummary.updated > 0) { log(`   更新: ${workflowSummary.updated} 個`); }
    if (workflowSummary.skipped > 0) { log(`   跳過: ${workflowSummary.skipped} 個 (已存在)`); }
    log(`   支援工具: ${toolNames.join(', ')}`);
    
    targetTools.forEach(toolId => {
      const tool = TOOLS_CONFIG.tools[toolId];
      if (tool) {
        log(`   ${tool.name}: ${path.join(projectRoot, tool.workflowDir)}`);
      }
    });
  }
  
  log('\n使用方式:');
  log('  在支援 Agent Skills 的工具中，這些技能會自動被偵測到');
  log('  例如: Windsurf, Cursor, Continue, Cline 等\n');
  
  log('可用技能與命令:');
  const targetTools = options.tools || TOOLS_CONFIG.defaultTools;
  const commandExamples = targetTools.map(toolId => {
    const tool = TOOLS_CONFIG.tools[toolId];
    return tool ? `${tool.commandPrefix}skill` : null;
  }).filter(Boolean).join(' 或 ');
  
  allSkills.forEach((skill) => {
    log(`  • ${getLabel(skill)} ($${skill} 或 ${commandExamples.replace('skill', skill)})`);
  });
  log(`\n更多資訊: ${PKG.homepage || 'https://github.com/zz41354899/goodux-skills'}`);
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  if (summary.missing > 0) { process.exitCode = 1; }

  return summary;
}

// ---------------------------------------------------------------------------
// CLI 進入點
// ---------------------------------------------------------------------------

if (require.main === module) {
  const options = parseArgs(process.argv.slice(2));

  if (options.help) { printHelp(PKG); process.exit(0); }
  if (options.version) { printVersion(PKG); process.exit(0); }
  if (options.listTools) { listTools(options); process.exit(0); }

  const silent = isPostInstall();

  // 驗證指定的工具是否有效
  if (options.tools.length > 0) {
    const invalidTools = options.tools.filter(t => !TOOLS_CONFIG.tools[t]);
    if (invalidTools.length > 0) {
      console.error(`\n❌ 不支援的工具: ${invalidTools.join(', ')}`);
      console.error(`   使用 --list-tools 查看支援的工具\n`);
      process.exit(1);
    }
  }

  install({
    force: options.force,
    silent,
    createWorkflows: !options.noWorkflows,
    tools: options.tools.length > 0 ? options.tools : null
  });
}

module.exports = { install, discoverSkills };
