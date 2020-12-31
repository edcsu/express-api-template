let logger = require('morgan');
let express = require('express');
let cookieParser = require('cookie-parser');
let indexRouter = require('./routes/index');
let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/v1', indexRouter);

module.exports = app;
