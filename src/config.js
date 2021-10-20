const { get, set, getAll, remove } = require('./utils/rc')

const config = async (action, key, value) => {
  console.log('action', action)
  switch (action) {
    case 'get':
      if (key) {
        let result = await get(key)
        console.log(result)
      } else {
        let obj = await getAll()
        Object.keys(obj).forEach((key) => {
          console.log(`${key}=${obj[key]}`)
        })
      }
      break
    case 'set':
      set(key, value)
      break
    case 'remove':
      remove(key)
      break
    default:
      break
  }
}
module.exports = config
