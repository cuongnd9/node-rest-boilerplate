'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _express = _interopRequireDefault(require('express'));

var _celebrate = require('celebrate');

var _withController = _interopRequireDefault(require('../helpers/withController'));

var _account = _interopRequireDefault(require('../controllers/account.controller'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const router = _express.default.Router();

router.post(
  '/register',
  (0, _celebrate.celebrate)({
    body: _celebrate.Joi.object().keys({
      username: _celebrate.Joi.string().required(),
      password: _celebrate.Joi.string().required(),
      role: _celebrate.Joi.string().default('STAFF'),
    }),
  }),
  (0, _withController.default)(_account.default.register),
);
router.post(
  '/login',
  (0, _celebrate.celebrate)({
    body: _celebrate.Joi.object().keys({
      username: _celebrate.Joi.string().required(),
      password: _celebrate.Joi.string().required(),
    }),
  }),
  (0, _withController.default)(_account.default.login),
);
var _default = router;
exports.default = _default;
