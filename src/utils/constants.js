import { version } from '../../package.json'

export const VERSION = version

const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME']

export const RC = `${HOME}/.relairc`

export const REGISTRYS_MAP = {
  react: {
    registry: 'Maolipeng',
    template: 'config-template',
    branch: 'master',
  },
  screen: {
    registry: 'Maolipeng',
    template: 'data-visual-screen',
    branch: 'main',
  },
}

export const ALLOW_TEMPLATES = ['react', 'screen']
