// Pipes :: Concat
'use strict';

var lazypipe = require('lazypipe');
var gulp = require('gulp');
var concat = require('gulp-concat');

var pipe = lazypipe()
  .pipe(function() {
    return concat('main.js', {
      newLine: ';'
    });
  })
  .pipe(gulp.dest, global.config.dest + '/js')

module.exports = pipe;
