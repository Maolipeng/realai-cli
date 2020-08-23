"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// 主的流程控制
var apply = function apply(action) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  console.log('args', args);
  console.log('action', action); //babel-env

  require("./".concat(action))(...args);
};

var _default = apply;
exports.default = _default;