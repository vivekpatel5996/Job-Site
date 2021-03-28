var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var companyRouter = require('./routes/company');
var studentRouter = require('./routes/students');
var jobRouter = require('./routes/jobs');
var jobApplicantRouter = require('./routes/jobApplicant');
var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/company', companyRouter);
app.use('/student', studentRouter);
app.use('/job', jobRouter);
app.use('/job_applicant', jobApplicantRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({
    "error": "ServerError",
    "message": "Something went wrong!!Please try again"
  })
  // res.render('error');
});

module.exports = app;
