"use strict";

var _commander = require("commander");

var _constants = require("./utils/constants");

var _index = _interopRequireDefault(require("./index"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const program = new Command()

/**
 * cli commands
 *    - config
 *    - init
 */
var program = new _commander.Command();
var actionMap = {
  init: {
    description: 'generate a new project from a template',
    usages: ['realai init templateName projectName']
  },
  config: {
    alias: 'cfg',
    description: 'config .realairc',
    usages: ['realai config set <k> <v>', 'realai config get <k>', 'realai config remove <k>']
  } //other commands

};
program.command('init').description('realai init').action(() => {
  (0, _index.default)('init', ...process.argv.slice(3));
});
program.command('config').description('config .realairc').alias('cfg').action(() => {
  (0, _index.default)('config', ...process.argv.slice(3));
});

function help() {
  console.log('\r\nUsage:');
  Object.keys(actionMap).forEach(action => {
    actionMap[action].usages.forEach(usage => {
      console.log('  - ' + usage);
    });
  });
  console.log('\r');
}

program.usage('<command> [options]');
program.on('-h', help);
program.on('--help', help);
program.version(_constants.VERSION, '-V --version').parse(process.argv); // realai 不带参数时

if (!process.argv.slice(2).length) {
  program.outputHelp(make_green);
}

function make_green(txt) {
  return _chalk.default.green(txt);
}