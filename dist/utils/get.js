"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadLocal = void 0;

var _constants = require("./constants.js");

var _downloadGitRepo = _interopRequireDefault(require("download-git-repo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var downloadLocal = function downloadLocal() {
  var templateName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'react';
  var projectName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : './';
  var config = _constants.REGISTRYS_MAP[templateName];
  var api = "".concat(config.registry, "/").concat(config.template);
  return new Promise((resolve, reject) => {
    (0, _downloadGitRepo.default)(api, projectName, err => {
      if (err) {
        reject(err);
      }

      resolve();
    });
  });
};

exports.downloadLocal = downloadLocal;