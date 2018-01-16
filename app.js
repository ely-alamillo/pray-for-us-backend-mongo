const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

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
    logger.log('Connected to Mongoose...');
    app.listen(process.env.PORT, () => {
      logger.log(`Server listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    logger.log('\n**********************');
    logger.log('ERROR: Failed to connect to MongoDB.');
    logger.log('\n**********************');
    logger.log(error);
  });