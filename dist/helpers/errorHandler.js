'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = handleError;

var _boom = _interopRequireDefault(require('@hapi/boom'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function handleError(err, req, res, next) {
  console.log(e, 'error handler........');

  if (err.statusCode) {
    // Error for Celebrate(Joi validation).
    return res.status(err.statusCode).json(err);
  }

  if (err.isBoom) {
    // Error for Boom.
    const { statusCode, payload } = err.output;
    return res.status(statusCode).json(payload);
  }

  if (err.result && err.result.errors) {
    // Error for Prisma
    const prismaError = {
      statusCode: 500,
      err: 'An internal server error occurred',
      message: 'Prisma Error',
      errors: err.result.errors,
    };
    return res.status(500).json(prismaError);
  } // Default error.

  const defaultError = _boom.default.badImplementation('An internal server error occurred');

  const { statusCode, payload } = defaultError.output;
  res.status(statusCode).json(payload);
  next();
}
