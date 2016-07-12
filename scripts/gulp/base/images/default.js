// Base :: Images :: Default
'use strict';

var gulp = require('gulp');
var runSequnce = require('run-sequence');

var images = require('../../pipes/images');

gulp.task('images', function(callback) {
  return gulp.src(global.config.src + '/images/**/*')
    .pipe(images())
    .on('close', callback);
});
