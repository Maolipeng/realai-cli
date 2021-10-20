// 主的流程控制
const apply = (action, ...args) => {
  console.log('args', args)
  console.log('action', action)
  //babel-env
  require(`./${action}`)(...args)
}

module.exports = apply
