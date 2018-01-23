const express = require('express');

const routes = (server) => {
  const user = require('../controllers/userControllers');

  const api = express.Router();

  api.route('/register')
    .post(user.register);
  api.route('/test')
    .post(user.test);

  server.use('/api', api);
};

module.exports = { routes };