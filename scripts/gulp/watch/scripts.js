// Watch :: Scripts
'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');

var concat = require('../pipes/concat');

gulp.task('watch-scripts', function (callback) {
  gulp.watch([
    global.config.src + '_assets/js/**/*.js'
  ], ['scripts-base']);
});
