'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _bcrypt = _interopRequireDefault(require('bcrypt'));

var _jsonwebtoken = _interopRequireDefault(require('jsonwebtoken'));

var _lodash = _interopRequireDefault(require('lodash'));

var _boom = _interopRequireDefault(require('@hapi/boom'));

var _prismaClient = require('../generated/prisma-client');

var _config = _interopRequireDefault(require('../config'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

async function register(data) {
  const { password } = data;
  const hashPassword = await _bcrypt.default.hash(password, 10);
  const newData = { ...data, password: hashPassword };
  const newAccount = await _prismaClient.prisma.createAccount(newData);
  return _lodash.default.omit(newAccount, ['password']);
}

async function login(data) {
  const { username, password } = data;
  const account = await _prismaClient.prisma.account({
    username,
  });

  if (!account) {
    throw _boom.default.notFound('username does not exist');
  }

  const match = await _bcrypt.default.compare(password, account.password);

  if (!match) {
    throw _boom.default.unauthorized('password is incorrect');
  }

  const { id, role } = account;
  const { secretKey, expiresIn, algorithm } = _config.default.jwt;
  const payload = {
    id,
    role,
  };

  const token = _jsonwebtoken.default.sign(payload, secretKey, {
    algorithm,
    expiresIn,
  });

  return {
    token,
    account: _lodash.default.omit(account, ['password']),
  };
}

var _default = {
  register,
  login,
};
exports.default = _default;
