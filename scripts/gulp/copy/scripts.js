// Copy :: Scripts
'use strict';

var gulp = require('gulp');

gulp.task('copy-scripts', function(callback) {
  return gulp.src([
    ])
    .pipe(gulp.dest(global.config.dest + '/js'))
    .on('close', callback);
});
