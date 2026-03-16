/**
 * CLI 參數解析
 */

function parseArgs(argv) {
  const options = {
    force: false,
    listTools: false,
    help: false,
    version: false,
    noWorkflows: false,
    tools: []
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === '--force' || arg === '-f') { options.force = true; continue; }
    if (arg === '--list-tools') { options.listTools = true; continue; }
    if (arg === '--help' || arg === '-h') { options.help = true; continue; }
    if (arg === '--version' || arg === '-v') { options.version = true; continue; }
    if (arg === '--no-workflows') { options.noWorkflows = true; continue; }

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
