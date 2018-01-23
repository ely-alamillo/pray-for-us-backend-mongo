const { User } = require('../models/userModel');
const { sendUserError } = require('../helpers/helpers');

const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.PROJECT_ID,
    clientEmail: process.env.CLIENT_EMAIL,
    privateKey: process.env.PRIVATE_KEY,
  })
});

const register = (req, res) => {

};

module.exports = {
  register,
};