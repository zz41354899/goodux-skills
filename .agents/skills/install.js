#!/usr/bin/env node

const fs = require('fs');
const os = require('os');
const path = require('path');

// ---------------------------------------------------------------------------
// 常數
// ---------------------------------------------------------------------------

const PKG = require(path.join(__dirname, 'package.json'));

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

// ---------------------------------------------------------------------------
// 工具函式
// ---------------------------------------------------------------------------

/**
 * 動態掃描 __dirname 下所有含 SKILL.md 的子目錄，回傳技能 id 陣列。
 * 如果掃描失敗則回退到 SKILL_NAMES 的 key。
 */
function discoverSkills() {
  try {
    return fs.readdirSync(__dirname, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .filter((name) => {
        const skillFile = path.join(__dirname, name, 'SKILL.md');
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

function ensureDirectory(dirPath, dryRun) {
  if (fs.existsSync(dirPath)) {
    return;
  }

  if (!dryRun) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
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

// ---------------------------------------------------------------------------
// 參數解析
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const options = {
    force: false,
    dryRun: false,
    json: false,
    list: false,
    listStyles: false,
    help: false,
    version: false,
    targetDir: null,
    skills: []
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === '--force' || arg === '-f') { options.force = true; continue; }
    if (arg === '--dry-run' || arg === '-d') { options.dryRun = true; continue; }
    if (arg === '--json') { options.json = true; continue; }
    if (arg === '--list' || arg === '-l') { options.list = true; continue; }
    if (arg === '--list-styles') { options.listStyles = true; continue; }
    if (arg === '--help' || arg === '-h') { options.help = true; continue; }
    if (arg === '--version' || arg === '-v') { options.version = true; continue; }

    if (arg === '--target' || arg === '-t') {
      const next = argv[i + 1];
      if (next && !next.startsWith('-')) {
        options.targetDir = path.resolve(next);
        i += 1;
      }
      continue;
    }

    if (arg === '--skill' || arg === '-s') {
      const next = argv[i + 1];
      if (next && !next.startsWith('-')) {
        options.skills.push(next);
        i += 1;
      }
      continue;
    }
  }

  return options;
}

// ---------------------------------------------------------------------------
// 單一技能安裝
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

  ensureDirectory(destDir, options.dryRun);

  if (!options.dryRun) {
    fs.copyFileSync(sourceFile, destFile);
  }

  const templateSource = path.join(sourceDir, 'TEMPLATE.md');
  const templateDest = path.join(destDir, 'TEMPLATE.md');
  const examplesSource = path.join(sourceDir, 'examples.yaml');
  const examplesDest = path.join(destDir, 'examples.yaml');
  const stylepromptsSource = path.join(sourceDir, 'styleprompts.yaml');
  const stylepromptsDest = path.join(destDir, 'styleprompts.yaml');

  copyIfExists(templateSource, templateDest, options.dryRun);
  copyIfExists(examplesSource, examplesDest, options.dryRun);
  copyIfExists(stylepromptsSource, stylepromptsDest, options.dryRun);

  return { status: alreadyExists ? 'updated' : 'installed', skillName };
}

function copyRootFiles(targetDir, options) {
  const rootFiles = ['README.md', 'CONTRIBUTING.md'];

  rootFiles.forEach((fileName) => {
    const sourcePath = path.join(__dirname, fileName);
    const destPath = path.join(targetDir, fileName);
    copyIfExists(sourcePath, destPath, options.dryRun);
  });
}

// ---------------------------------------------------------------------------
// 子命令: help / version / list
// ---------------------------------------------------------------------------

function printHelp() {
  const lines = [
    '',
    `Good UX Skills v${PKG.version}`,
    '專業的 UX 設計技能包 — Agent Skills 標準安裝器',
    '',
    '用法:',
    '  goodux-skills [options]',
    '',
    '選項:',
    '  -t, --target <path>   指定技能安裝目錄 (預設: 當前目錄/.agents/skills)',
    '  -s, --skill <name>    只安裝指定技能 (可多次使用)',
    '  -f, --force           覆蓋已存在的技能',
    '  -d, --dry-run         僅顯示將執行的動作，不實際寫入',
    '  -l, --list            列出所有可安裝的技能',
    '      --list-styles     列出所有可用的 UI 視覺風格',
    '      --json            以 JSON 格式輸出結果',
    '  -v, --version         顯示版本號',
    '  -h, --help            顯示說明',
    '',
    '範例:',
    '  npx goodux-ux-skills                      安裝所有技能到當前專案',
    '  npx goodux-ux-skills -s wireframing        只安裝線框圖',
    '  npx goodux-ux-skills -f                    強制覆蓋更新',
    '  npx goodux-ux-skills -t ~/my-project/.agents/skills  安裝到指定路徑',
    '  npx goodux-ux-skills --list                列出所有技能',
    '  npx goodux-ux-skills --list-styles         列出 20 個 UI 風格',
    '  npx goodux-ux-skills --list-styles --json  JSON 格式列出風格',
    ''
  ];
  console.log(lines.join('\n'));
}

function printVersion() {
  console.log(PKG.version);
}

function listSkills(options) {
  const skills = discoverSkills();

  if (options.json) {
    const data = skills.map((id) => ({ id, name: getLabel(id) }));
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  console.log(`\n可安裝技能 (共 ${skills.length} 個):\n`);
  skills.forEach((id) => {
    console.log(`  • ${getLabel(id)}  (${id})`);
  });
  console.log('');
}

function listStyles(options) {
  const stylesFile = path.join(__dirname, 'ui-visual-design', 'styleprompts.yaml');
  
  if (!fs.existsSync(stylesFile)) {
    console.error('\n錯誤: 找不到 styleprompts.yaml 檔案\n');
    process.exitCode = 1;
    return;
  }

  const content = fs.readFileSync(stylesFile, 'utf-8');
  const styles = [];
  
  // 簡單解析 YAML 抓出風格資訊
  const lines = content.split('\n');
  let currentStyle = null;
  
  for (const line of lines) {
    if (line.trim().startsWith('- id:')) {
      if (currentStyle) styles.push(currentStyle);
      currentStyle = { id: '', code: '', name: '', summary: '' };
      currentStyle.id = line.split(':')[1].trim();
    } else if (currentStyle) {
      if (line.trim().startsWith('code:')) {
        currentStyle.code = line.split(':')[1].trim();
      } else if (line.trim().startsWith('name:')) {
        currentStyle.name = line.split(':')[1].trim();
      } else if (line.trim().startsWith('summary:')) {
        currentStyle.summary = line.substring(line.indexOf(':') + 1).trim();
      }
    }
  }
  if (currentStyle) styles.push(currentStyle);

  if (options.json) {
    console.log(JSON.stringify(styles, null, 2));
    return;
  }

  console.log(`\n可用的 UI 視覺風格 (共 ${styles.length} 個):\n`);
  styles.forEach((style) => {
    console.log(`  • ${style.code} ${style.name} - ${style.summary}`);
  });
  console.log('\n使用方式:');
  console.log('  安裝 ui-visual-design 技能後，AI 會自動從這些風格中推薦適合的方向\n');
}

// ---------------------------------------------------------------------------
// 主安裝流程
// ---------------------------------------------------------------------------

function install(rawOptions = {}) {
  const allSkills = discoverSkills();

  const options = {
    force: Boolean(rawOptions.force),
    dryRun: Boolean(rawOptions.dryRun),
    json: Boolean(rawOptions.json),
    silent: Boolean(rawOptions.silent),
    targetDir: rawOptions.targetDir || getDefaultSkillsDirectory()
  };

  // 決定要安裝哪些技能
  let skillsToInstall = allSkills;

  if (Array.isArray(rawOptions.skills) && rawOptions.skills.length > 0) {
    const invalid = rawOptions.skills.filter((s) => !allSkills.includes(s));
    if (invalid.length > 0 && !options.silent) {
      console.error(`\n❌ 找不到技能: ${invalid.join(', ')}`);
      console.error(`   使用 --list 查看可安裝的技能\n`);
      process.exitCode = 1;
      return { installed: 0, updated: 0, skipped: 0, missing: invalid.length };
    }
    skillsToInstall = rawOptions.skills.filter((s) => allSkills.includes(s));
  }

  const log = options.silent ? () => {} : console.log;
  const targetDir = options.targetDir;

  log('\n🎨 Good UX Skills 安裝程式');
  log(`   版本: v${PKG.version}\n`);
  log(options.dryRun
    ? '正在模擬安裝專業的 UX 設計技能...\n'
    : '正在安裝專業的 UX 設計技能...\n');

  if (!fs.existsSync(targetDir)) {
    ensureDirectory(targetDir, options.dryRun);
    log(`${options.dryRun ? '•' : '✓'} 建立技能目錄: ${targetDir}\n`);
  } else {
    log(`✓ 使用現有技能目錄: ${targetDir}\n`);
  }

  copyRootFiles(targetDir, options);

  const summary = { installed: 0, updated: 0, skipped: 0, missing: 0 };
  const results = [];

  skillsToInstall.forEach((skillName) => {
    const result = copySkill(skillName, targetDir, options);
    const label = getLabel(skillName);
    
    // 如果是 ui-visual-design，加上風格數量提示
    const extraInfo = skillName === 'ui-visual-design' ? ' - 含 20 個 UI 風格' : '';

    results.push({ id: skillName, name: label, status: result.status });

    switch (result.status) {
      case 'installed':
        log(`${options.dryRun ? '•' : '✓'} ${label}${extraInfo}`);
        summary.installed += 1;
        break;
      case 'updated':
        log(`${options.dryRun ? '•' : '↺'} ${label}${extraInfo} (${options.dryRun ? '將覆蓋' : '已覆蓋'})`);
        summary.updated += 1;
        break;
      case 'skipped':
        log(`⊘ ${label}${extraInfo} (已存在，跳過)`);
        summary.skipped += 1;
        break;
      default:
        log(`⚠️  ${label} (來源不存在)`);
        summary.missing += 1;
        break;
    }
  });

  // JSON 輸出
  if (options.json) {
    const output = {
      version: PKG.version,
      targetDir,
      dryRun: options.dryRun,
      summary,
      results
    };
    console.log(JSON.stringify(output, null, 2));
    if (summary.missing > 0) { process.exitCode = 1; }
    return summary;
  }

  // 人類可讀摘要
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  log(`\n✨ ${options.dryRun ? '模擬完成' : '安裝完成'}!`);
  log(`   新安裝: ${summary.installed} 個技能`);
  if (summary.updated > 0) { log(`   覆蓋更新: ${summary.updated} 個技能`); }
  if (summary.skipped > 0) { log(`   跳過: ${summary.skipped} 個技能 (已存在)`); }
  if (summary.missing > 0) { log(`   缺少來源: ${summary.missing} 個技能`); }
  log(`\n📁 技能位置: ${targetDir}`);
  log('\n使用方式:');
  log('  在支援 Agent Skills 的工具中，這些技能會自動被偵測到');
  log('  例如: Windsurf, Claude Code, 或其他相容工具\n');
  log('可用技能:');
  allSkills.forEach((skill) => {
    log(`  • ${getLabel(skill)} ($${skill})`);
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

  if (options.help) { printHelp(); process.exit(0); }
  if (options.version) { printVersion(); process.exit(0); }
  if (options.list) { listSkills(options); process.exit(0); }
  if (options.listStyles) { listStyles(options); process.exit(0); }

  // postinstall 時使用靜默模式，避免 npm install 輸出太冗長
  const silent = isPostInstall();

  install({
    force: options.force,
    dryRun: options.dryRun,
    json: options.json,
    silent,
    targetDir: options.targetDir,
    skills: options.skills
  });
}

module.exports = { install, discoverSkills };
