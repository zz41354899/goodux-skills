const TOOLS_CONFIG = require('../tools-config.json');

/**
 * 顯示相關的工具函數
 */

function printHelp(PKG) {
  const lines = [
    '',
    '╔═══════════════════════════════════════════════════════════════╗',
    `║  Good UX Skills v${PKG.version}`.padEnd(64) + '║',
    '║  專業的 UX 設計技能包 — Agent Skills 標準安裝器              ║',
    '╚═══════════════════════════════════════════════════════════════╝',
    '',
    '📖 用法:',
    '  npx goodux-ux-skills [選項]',
    '',
    '🎯 選項:',
    '  -h, --help            顯示此說明訊息',
    '  -v, --version         顯示版本號',
    '      --list-tools      列出所有支援的 AI 工具',
    '      --tool <name>     指定要支援的 AI 工具 (可多次使用)',
    '                        可用工具: windsurf, cursor, continue, cline, aider, claude-code',
    '  -f, --force           強制更新到最新版本（清除所有舊檔案）',
    '      --no-workflows    不建立任何工具的 workflow 命令',
    '',
    '💡 使用範例:',
    '  # 安裝所有 5 個設計思考流程技能（預設支援當前工具）',
    '  npx goodux-ux-skills',
    '',
    '  # 支援多個 AI 工具',
    '  npx goodux-ux-skills --tool cursor --tool claude-code',
    '',
    '  # 查看支援的 AI 工具',
    '  npx goodux-ux-skills --list-tools',
    '',
    '🔗 更多資訊:',
    `  網站: ${PKG.homepage || 'https://goodux-skills.vercel.app/'}`,
    '  文件: https://github.com/zz41354899/goodux-skills',
    '  問題回報: https://github.com/zz41354899/goodux-skills/issues',
    ''
  ];
  console.log(lines.join('\n'));
}

function printVersion(PKG) {
  console.log(PKG.version);
}

function listSkills(skills, getLabel, options) {
  if (options.json) {
    const data = skills.map((id) => ({ id, name: getLabel(id) }));
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  console.log('\n╔═══════════════════════════════════════════════════════════════╗');
  console.log(`║  可安裝的 UX 設計技能 (共 ${skills.length} 個)`.padEnd(64) + '║');
  console.log('╚═══════════════════════════════════════════════════════════════╝\n');

  const flow = [
    'empathize',
    'define',
    'ideate',
    'prototype',
    'test',
  ];

  console.log('🎯 設計思考流程:');
  flow.forEach((id) => {
    if (skills.includes(id)) {
      const label = getLabel(id);
      const extra = id === 'ideate' ? ' (含 20 個 UI 風格參考)' : '';
      console.log(`  • ${label.padEnd(20)} ($${id})${extra}`);
    }
  });
  console.log('');

  console.log('💡 使用方式:');
  console.log('  安裝所有技能:  npx goodux-ux-skills');
  console.log('  安裝指定技能:  npx goodux-ux-skills -s empathize -s prototype');
  console.log('  查看詳細說明:  npx goodux-ux-skills --help\n');
}

function listTools(options) {
  const tools = Object.entries(TOOLS_CONFIG.tools)
    .filter(([_, tool]) => tool.supported)
    .map(([id, tool]) => ({
      id,
      name: tool.name,
      description: tool.description,
      commandPrefix: tool.commandPrefix,
      workflowDir: tool.workflowDir
    }));

  if (options.json) {
    console.log(JSON.stringify(tools, null, 2));
    return;
  }

  console.log('\n╔═══════════════════════════════════════════════════════════════╗');
  console.log(`║  支援的 AI 編碼工具 (共 ${tools.length} 個)`.padEnd(64) + '║');
  console.log('╚═══════════════════════════════════════════════════════════════╝\n');

  console.log('工具名稱'.padEnd(20) + '命令格式'.padEnd(15) + 'Workflow 目錄');
  console.log('─'.repeat(63));

  tools.forEach((tool) => {
    const isDefault = TOOLS_CONFIG.defaultTools.includes(tool.id);
    const marker = isDefault ? '✓' : ' ';
    console.log(`${marker} ${tool.name.padEnd(18)}${tool.commandPrefix}skill`.padEnd(15) + tool.workflowDir);
  });

  console.log('\n✓ = 預設安裝\n');

  console.log('📝 工具說明:');
  tools.forEach((tool) => {
    console.log(`  ${tool.name}: ${tool.description}`);
  });

  console.log('\n💡 使用方式:');
  console.log('  # 使用預設工具 (Windsurf)');
  console.log('  npx goodux-ux-skills');
  console.log('');
  console.log('  # 指定單一工具');
  console.log('  npx goodux-ux-skills --tool cursor');
  console.log('');
  console.log('  # 支援多個工具');
  console.log('  npx goodux-ux-skills --tool windsurf --tool cursor --tool claude-code');
  console.log('');
  console.log('  # 支援所有工具');
  console.log('  npx goodux-ux-skills --tool windsurf --tool cursor --tool continue --tool cline --tool aider --tool claude-code\n');
}

function listStyles(stylesFile, options) {
  const fs = require('fs');
  
  if (!fs.existsSync(stylesFile)) {
    console.error('\n錯誤: 找不到 styleprompts.yaml 檔案\n');
    process.exitCode = 1;
    return;
  }

  const content = fs.readFileSync(stylesFile, 'utf-8');
  const styles = [];
  
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
  console.log('  這些風格資料位於 references/ui-visual-design/styleprompts.yaml');
  console.log('  安裝 ideate 技能後，AI 會自動引用這些風格進行視覺方向推薦\n');
}

module.exports = {
  printHelp,
  printVersion,
  listSkills,
  listTools,
  listStyles
};
