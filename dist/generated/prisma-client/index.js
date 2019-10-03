'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var prisma_lib_1 = require('prisma-client-lib');

var typeDefs = require('./prisma-schema').typeDefs;

var models = [
  {
    name: 'Sex',
    embedded: false,
  },
  {
    name: 'User',
    embedded: false,
  },
  {
    name: 'Role',
    embedded: false,
  },
  {
    name: 'Account',
    embedded: false,
  },
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env['PRISMA_ENDPOINT']}`,
});
exports.prisma = new exports.Prisma();
