// Pipes :: CSS Min
'use strict';

var lazypipe = require('lazypipe');
var gulp = require('gulp');
var cssmin = require('gulp-cssmin');

var pipe = lazypipe()
  .pipe(cssmin, {
    restructuring: false
  })
  .pipe(gulp.dest, global.config.dest + '/css');

module.exports = pipe;
