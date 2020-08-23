import { REGISTRYS_MAP } from './constants.js'
import downloadGit from 'download-git-repo'

export const downloadLocal = (templateName = 'react', projectName = './') => {
  const config = REGISTRYS_MAP[templateName]
  let api = `${config.registry}/${config.template}`
  return new Promise((resolve, reject) => {
    downloadGit(api, projectName, (err) => {
      if (err) {
        reject(err)
      }
      resolve()
    })
  })
}
