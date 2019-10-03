'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _prismaClient = require('../generated/prisma-client');

function getUsers() {
  return _prismaClient.prisma.users();
}

function getUser(id) {
  return _prismaClient.prisma.user({
    id,
  });
}

function createUser(data) {
  return _prismaClient.prisma.createUser(data);
}

function updateUser(id, data) {
  return _prismaClient.prisma.updateUser({
    where: {
      id,
    },
    data,
  });
}

function deleteUser(id) {
  return _prismaClient.prisma.deleteUser({
    id,
  });
}

var _default = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
exports.default = _default;
