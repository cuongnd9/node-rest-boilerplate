'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = withController;

function withController(action) {
  return async (req, res, next) => {
    try {
      const data = await action(req, res, next);
      res.json(data);
    } catch (err) {
      console.log(err, 'controller............');
      next(err);
    }
  };
}
