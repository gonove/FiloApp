
const express       = require('express');
const path          = require('path');
const bodyParser    = require('body-parser');

const app = express();

// Config

app.set( 'port', process.env.PORT || '127.0.0.1:3306');
app.set( 'view engine', 'ejs' );
app.set('FiloApp', path.join(__dirname, '../FiloApp'));

// MiddleWare

app.use( bodyParser.urlencoded( {extended: false}));

module.exports = app;
