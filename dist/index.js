'use strict';

require('dotenv/config');

var _express = _interopRequireDefault(require('express'));

var _signale = _interopRequireDefault(require('signale'));

var _routes = _interopRequireDefault(require('./routes'));

var _config2 = _interopRequireDefault(require('./config'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Initialize app.
const app = (0, _express.default)(); // Routes.

app.get('/', (req, res) => res.send('<p>👋 Xin chào</p>'));
app.use('/api', _routes.default); // Start server.

app.listen(_config2.default.port, () =>
  _signale.default.debug(`Server started on http://localhost:${_config2.default.port}`),
);
