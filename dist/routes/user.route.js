'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _express = _interopRequireDefault(require('express'));

var _celebrate = require('celebrate');

var _authorize = _interopRequireDefault(require('../helpers/authorize'));

var _withController = _interopRequireDefault(require('../helpers/withController'));

var _constants = require('../config/constants');

var _user = _interopRequireDefault(require('../controllers/user.controller'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const router = _express.default.Router();

router.get(
  '/',
  (0, _authorize.default)(_constants.roles.admin, _constants.roles.manager, _constants.roles.staff),
  (0, _withController.default)(_user.default.list),
);
router.get(
  '/:id',
  (0, _authorize.default)(_constants.roles.admin, _constants.roles.manager, _constants.roles.staff),
  (0, _celebrate.celebrate)({
    params: _celebrate.Joi.object().keys({
      id: _celebrate.Joi.string()
        .guid()
        .required(),
    }),
  }),
  (0, _withController.default)(_user.default.retrieve),
);
router.post(
  '/',
  (0, _authorize.default)(_constants.roles.admin, _constants.roles.manager, _constants.roles.staff),
  (0, _celebrate.celebrate)({
    body: _celebrate.Joi.object().keys({
      name: _celebrate.Joi.string().required(),
      email: _celebrate.Joi.string().email(),
      phoneNumber: _celebrate.Joi.string(),
      address: _celebrate.Joi.string(),
      dob: _celebrate.Joi.string().isoDate(),
      sex: _celebrate.Joi.string().valid('MALE', 'FEMALE'),
    }),
  }),
  (0, _withController.default)(_user.default.create),
);
router.put(
  '/:id',
  (0, _authorize.default)(_constants.roles.admin, _constants.roles.manager, _constants.roles.staff),
  (0, _celebrate.celebrate)({
    params: _celebrate.Joi.object().keys({
      id: _celebrate.Joi.string()
        .guid()
        .required(),
    }),
    body: _celebrate.Joi.object().keys({
      name: _celebrate.Joi.string().required(),
      email: _celebrate.Joi.string().email(),
      phoneNumber: _celebrate.Joi.string(),
      address: _celebrate.Joi.string(),
      dob: _celebrate.Joi.string().isoDate(),
      sex: _celebrate.Joi.string().valid('MALE', 'FEMALE'),
    }),
  }),
  (0, _withController.default)(_user.default.update),
);
router.delete(
  '/:id',
  (0, _authorize.default)(_constants.roles.admin, _constants.roles.manager, _constants.roles.staff),
  (0, _celebrate.celebrate)({
    params: _celebrate.Joi.object().keys({
      id: _celebrate.Joi.string()
        .guid()
        .required(),
    }),
  }),
  (0, _withController.default)(_user.default.destroy),
);
var _default = router;
exports.default = _default;
