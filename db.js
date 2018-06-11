// CONNECTING TO mLab DATABASE
const mongoose = require('mongoose');
require('dotenv').config();

/*
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for
 * plenty of time in most operating environments.
 */

const options = {
  keepAlive: 300000,
  connectTimeoutMS: 30000,
};

const dbCredentials = process.env.DB_USERNAME && process.env.DB_PASSWORD
  ? `${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@`
  : '';
const dbPort = process.env.DB_PORT
  ? `:${process.env.DB_PORT}`
  : '';
const mongodbUri = `mongodb://${dbCredentials}${process.env.DB_HOST}${dbPort}/${process.env.DB_NAME}`;

mongoose.connect(mongodbUri, options)
  .then(() => {
    console.log('Connected to Orbits database');
  })
  .catch(err => {
    console.log('Connection error', err);
  })


// CONNECTING TO LOCAL DATABASE
// const mongoose = require('mongoose');
//
// mongoose.connect('mongodb://localhost/orbit-database')
//   .then(() => {
//     console.log('Connected to Orbits database');
//   })
//   .catch(err => {
//     console.log('Cannot connect, wrong path');
//   })
