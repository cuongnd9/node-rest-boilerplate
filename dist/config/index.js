'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _default = {
  port: process.env.PORT || 9000,
  jwt: {
    secretKey: process.env.SECRET_KEY || 'node_boilerplate',
    algorithm: process.env.ALGORITHM || 'HS256',
    expiresIn: process.env.EXPIRES_IN || '30m',
  },
};
exports.default = _default;
