const { Command } = require('commander')
const { VERSION } = require('./utils/constants')
const apply = require('./index')
const chalk = require('chalk')

/**
 * cli commands
 *    - config
 *    - init
 */
const program = new Command()

const actionMap = {
  init: {
    description: 'generate a new project require() a template',
    usages: ['realai init templateName projectName'],
  },
  config: {
    alias: 'cfg',
    description: 'config .realairc',
    usages: [
      'realai config set <k> <v>',
      'realai config get <k>',
      'realai config remove <k>',
    ],
  },
  //other commands
}
program
  .command('init')
  .description('realai init')
  .action(() => {
    apply('init', ...process.argv.slice(3))
  })
program
  .command('config')
  .description('config .realairc')
  .alias('cfg')
  .action(() => {
    apply('config', ...process.argv.slice(3))
  })

function help() {
  console.log('\r\nUsage:')
  Object.keys(actionMap).forEach((action) => {
    actionMap[action].usages.forEach((usage) => {
      console.log('  - ' + usage)
    })
  })
  console.log('\r')
}

program.usage('<command> [options]')
program.on('-h', help)
program.on('--help', help)
program.version(VERSION, '-V --version')
program.parse(process.argv)

// realai 不带参数时
if (!process.argv.slice(2).length) {
  program.outputHelp(make_green)
}
function make_green(txt) {
  return chalk.green(txt)
}
