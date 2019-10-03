'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = request;

var _axios = _interopRequireDefault(require('axios'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 *
 * @param {string} url A url from a network.
 * @param {object} options Options to config request.
 * See more option here: https://github.com/axios/axios
 */
function request(url = '', options = {}) {
  const { method = 'get', responseType = 'json', data = {}, ...config } = options;
  return (0, _axios.default)({
    method,
    url,
    responseType,
    data,
    ...config,
  });
}
