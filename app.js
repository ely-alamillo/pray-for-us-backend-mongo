const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
// const admin = require('firebase-admin');
const { routes } = require('./api/routes');

// admin.initializeApp({
//   credential: admin.credential.cert({
//     type: process.env.TYPE,
//     project_id: process.env.PROJECT_ID,
//     private_key_id: process.env.PRIVATE_KEY_ID,
//     private_key: `${process.env.PRIVATE_KEY}`,
//     client_email: process.env.CLIENT_EMAIL,
//     client_id: process.env.CLIENT_ID,
//     auth_uri: process.env.AUTH_URI,
//     token_uri: process.env.TOKEN_URI,
//     auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
//     client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
//   })
// });

mongoose.Promise = global.Promise;

const logger = console;
const corsOptions = {
  'origin': true,
  'methods': 'GET, HEAD, PUT, PATCH, POST, DELETE',
  'preflightContinue': true,
  'optionsSuccessStatus': 204,
  'credentials': true // enable set cookie
};

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

const connect = mongoose.connect(
  process.env.MONGODB_URL,
  { useMongoClient: true }
);

connect
  .then(() => {
    logger.log('Connected to MongoDB...');
    routes(app);
    app.listen(process.env.PORT, () => {
      logger.log(`Server listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    logger.log('**********************');
    logger.log('ERROR: Failed to connect to MongoDB.');
    logger.log('**********************');
    logger.log(error);
  });