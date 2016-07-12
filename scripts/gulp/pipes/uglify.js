// Pipes :: Uglify
'use strict';

var lazypipe = require('lazypipe');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

var pipe = lazypipe()
  .pipe(uglify)
  .pipe(gulp.dest, global.config.dest + '/js')

module.exports = pipe;
