'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = authenticate;

var _jsonwebtoken = _interopRequireDefault(require('jsonwebtoken'));

var _boom = _interopRequireDefault(require('@hapi/boom'));

var _config = _interopRequireDefault(require('../config'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function authenticate(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (!token) {
    throw _boom.default.unauthorized('No token provided');
  }

  const { secretKey } = _config.default.jwt;

  try {
    const decoded = _jsonwebtoken.default.verify(token, secretKey);

    req.user = decoded;
  } catch (err) {
    throw _boom.default.unauthorized('Invalid access token');
  }

  next();
}
