'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _account = _interopRequireDefault(require('../services/account.service'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function register(req) {
  return _account.default.register(req.body);
}

function login(req) {
  return _account.default.login(req.body);
}

var _default = {
  register,
  login,
};
exports.default = _default;
