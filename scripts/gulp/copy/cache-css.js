// Copy :: CSS
'use strict';

var gulp = require('gulp');

gulp.task('copy-cache-css', function(callback) {
  return gulp.src(global.config.cache + '/css/**/*.css')
    .pipe(gulp.dest(global.config.dest + '/css'))
    .on('close', callback);
});
