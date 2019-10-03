'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = authorize;

var _boom = _interopRequireDefault(require('@hapi/boom'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function authorize(...allowed) {
  const isAllowed = role => allowed.indexOf(role) > -1;

  return (req, res, next) => {
    if (req.user && isAllowed(req.user.role)) {
      next();
    } else {
      throw _boom.default.forbidden('Your role is not allowed');
    }
  };
}
