// Pipes :: Images
'use strict';

var lazypipe = require('lazypipe');
var gulp = require('gulp');

var pipe = lazypipe()
  .pipe(gulp.dest, global.config.dest + '/images/');

module.exports = pipe;
