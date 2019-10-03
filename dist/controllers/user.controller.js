'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _user = _interopRequireDefault(require('../services/user.service'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function list() {
  return _user.default.getUsers();
}

function retrieve(req) {
  const { id } = req.params;
  return _user.default.getUser(id);
}

function create(req) {
  return _user.default.createUser(req.body);
}

function update(req) {
  const { id } = req.params;
  return _user.default.updateUser(id, req.body);
}

function destroy(req) {
  const { id } = req.params;
  return _user.default.deleteUser(id);
}

var _default = {
  list,
  retrieve,
  create,
  update,
  destroy,
};
exports.default = _default;
