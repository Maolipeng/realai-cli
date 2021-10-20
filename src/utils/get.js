const { REGISTRYS_MAP } = require('./constants.js')
const downloadGit = require('download-git-repo')

exports.downloadLocal = (templateName = 'react', projectName = './') => {
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
