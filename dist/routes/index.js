'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _express = _interopRequireDefault(require('express'));

var _bodyParser = _interopRequireDefault(require('body-parser'));

var _cors = _interopRequireDefault(require('cors'));

var _morgan = _interopRequireDefault(require('morgan'));

var _celebrate = require('celebrate');

var _boom = _interopRequireDefault(require('@hapi/boom'));

var _authenticate = _interopRequireDefault(require('../helpers/authenticate'));

var _errorHandler = _interopRequireDefault(require('../helpers/errorHandler'));

var _user = _interopRequireDefault(require('./user.route'));

var _account = _interopRequireDefault(require('./account.route'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const router = _express.default.Router(); // Body parser.

router.use(
  _bodyParser.default.urlencoded({
    extended: false,
  }),
);
router.use(_bodyParser.default.json()); // Enable cors.

router.use((0, _cors.default)()); // Logger.

router.use((0, _morgan.default)('dev')); // API routes.

router.use('/user', _authenticate.default, _user.default);
router.use('/account', _account.default); // 404 not found.

router.use((req, res, next) => {
  next(_boom.default.notFound('API not found'));
}); // Celebrate validation errors.

router.use((0, _celebrate.errors)()); // Global errors.

router.use(_errorHandler.default);
var _default = router;
exports.default = _default;
