// import { version } from '../../package.json'
const {
  version
} = require('../../package.json');

const VERSION = version;
const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];
exports.RC = `${HOME}/.relairc`;
const REGISTRYS_MAP = {
  'admin-pro': {
    registry: 'realai-FE',
    template: 'admin-template',
    branch: 'main'
  },
  'umi-ts': {
    registry: 'realai-FE',
    template: 'umi-ts-template',
    branch: 'main'
  },
  'admin-pro': {
    registry: 'realai-FE',
    template: 'antd-pro-template',
    branch: 'main'
  },
  screen: {
    registry: 'realai-FE',
    template: 'data-visual-screen',
    branch: 'main'
  },
  react: {
    registry: 'realai-FE',
    template: 'config-template',
    branch: 'master'
  }
};
const ALLOW_TEMPLATES = Object.keys(REGISTRYS_MAP);
const TEMPLATE_CHOICES = ALLOW_TEMPLATES.map(item => ({
  name: item,
  checked: item === 'umi-ts'
}));
module.exports = {
  REGISTRYS_MAP,
  ALLOW_TEMPLATES,
  TEMPLATE_CHOICES,
  VERSION
};