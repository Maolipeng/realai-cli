"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.set = exports.getAll = exports.get = void 0;

var _constants = require("./constants");

var _ini = require("ini");

var _util = require("util");

var _chalk = _interopRequireDefault(require("chalk"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var exits = (0, _util.promisify)(_fs.default.exists);
var readFile = (0, _util.promisify)(_fs.default.readFile);
var writeFile = (0, _util.promisify)(_fs.default.writeFile);

var get = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (key) {
    var exit = yield exits(_constants.RC);
    var opts;

    if (exit) {
      opts = yield readFile(_constants.RC, 'utf8');
      opts = (0, _ini.decode)(opts);
      return opts[key];
    }

    return '';
  });

  return function get(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.get = get;

var getAll = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* () {
    var exit = yield exits(_constants.RC);
    var opts;

    if (exit) {
      opts = yield readFile(_constants.RC, 'utf8');
      opts = (0, _ini.decode)(opts);
      return opts;
    }

    return {};
  });

  return function getAll() {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAll = getAll;

var set = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (key, value) {
    var exit = yield exits(_constants.RC);
    var opts;

    if (exit) {
      opts = yield readFile(_constants.RC, 'utf8');
      opts = (0, _ini.decode)(opts);

      if (!key) {
        console.log(_chalk.default.red(_chalk.default.bold('Error:')), _chalk.default.red('key is required'));
        return;
      }

      if (!value) {
        console.log(_chalk.default.red(_chalk.default.bold('Error:')), _chalk.default.red('value is required'));
        return;
      }

      Object.assign(opts, {
        [key]: value
      });
    } else {
      opts = {
        [key]: value
      };
    }

    yield writeFile(_constants.RC, (0, _ini.encode)(opts), 'utf8');
  });

  return function set(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.set = set;

var remove = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (key) {
    var exit = yield exits(_constants.RC);
    var opts;

    if (exit) {
      opts = yield readFile(_constants.RC, 'utf8');
      opts = (0, _ini.decode)(opts);
      delete opts[key];
      yield writeFile(_constants.RC, (0, _ini.encode)(opts), 'utf8');
    }
  });

  return function remove(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.remove = remove;