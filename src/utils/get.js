import { REGISTRYS_MAP } from './constants.js'
import downloadGit from 'download-git-repo'

export const downloadLocal = (templateName = 'react', projectName = './') => {
  const { registry, template, branch } = REGISTRYS_MAP[templateName]
  let api = `${registry}/${template}#${branch}`
  return new Promise((resolve, reject) => {
    downloadGit(api, projectName, (err) => {
      if (err) {
        reject(err)
      }
      resolve()
    })
  })
}
