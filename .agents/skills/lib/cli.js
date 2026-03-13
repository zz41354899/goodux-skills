/**
 * CLI 參數解析
 */

function parseArgs(argv) {
  const options = {
    force: false,
    dryRun: false,
    json: false,
    list: false,
    listStyles: false,
    listTools: false,
    help: false,
    version: false,
    noWorkflows: false,
    targetDir: null,
    skills: [],
    tools: []
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === '--force' || arg === '-f') { options.force = true; continue; }
    if (arg === '--dry-run' || arg === '-d') { options.dryRun = true; continue; }
    if (arg === '--json') { options.json = true; continue; }
    if (arg === '--list' || arg === '-l') { options.list = true; continue; }
    if (arg === '--list-styles') { options.listStyles = true; continue; }
    if (arg === '--list-tools') { options.listTools = true; continue; }
    if (arg === '--help' || arg === '-h') { options.help = true; continue; }
    if (arg === '--version' || arg === '-v') { options.version = true; continue; }
    if (arg === '--no-workflows') { options.noWorkflows = true; continue; }

    if (arg === '--target' || arg === '-t') {
      const next = argv[i + 1];
      if (next && !next.startsWith('-')) {
        options.targetDir = require('path').resolve(next);
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

    if (arg === '--tool') {
      const next = argv[i + 1];
      if (next && !next.startsWith('-')) {
        options.tools.push(next);
        i += 1;
      }
      continue;
    }
  }

  return options;
}

module.exports = {
  parseArgs
};
