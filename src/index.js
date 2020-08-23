// 主的流程控制
let apply = (action, ...args) => {
  console.log('args', args)
  console.log('action', action)
  //babel-env
  require(`./${action}`)(...args)
}

export default apply
