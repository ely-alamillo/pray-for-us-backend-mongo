const { Post } = require('../models/postModel');
const { User } = require('../models/userModel');
const { Comment } = require('../models/commentModel');
const { sendUserError } = require('../helpers/helpers');

const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: `${process.env.PRIVATE_KEY}`,
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
  })
});

const register = (req, res) => {
  const { email, screenName, password } = req.body;
  if (!email || !screenName || password) return sendUserError('please enter all information', res);
  admin.auth().createUser({
    email: 'test2@test.email',
    password: 'secret2',
    displayName: 'elyalamillo2'
  })
    .then((user) => {
      res.json(user);
    })
    .catch(err =>  res.json(err));
};

const test = (req, res) => {
  res.json({ msg: 'online' });
};

module.exports = {
  register,
  test,
};