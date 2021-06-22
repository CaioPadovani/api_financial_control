//import dependecias
require('dotenv').config()
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')
require('./config/db')

const app = express();

// HTTP Configurations
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var corsOptions = {
  exposedHeaders: ['Accept-Language',
    'Access-Control-Allow-Origin',
    'Connection', 'Content-Length', 'Content-Type', 'Date',
    'Etag', 'Server', 'Via', 'X-Powered-By']
};
app.use(cors(corsOptions))

//Chamando pasta public
app.use(express.static('./public'));

// Requisiçoes tipo urlencoded
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//morgan Configuration
app.use(morgan('dev'))


//Rotas
app.use("/api", require('./routes/index'))


app.listen(process.env.PORT)





module.exports = app