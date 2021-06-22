var mongoose = require('mongoose');
const requireDir = require ("require-dir");

var dbURI = ''

if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.DB_PROD;
} else if (process.env.NODE_ENV === 'development') {
  dbURI = process.env.DB_DEV;
}

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;
mongoose.set('useCreateIndex', true);


console.log("Your process env:" + process.env.NODE_ENV);


// CONNECTION EVENTS
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

//importe automatico de models
requireDir('../models');
