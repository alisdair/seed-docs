// Copy :: Images
'use strict';

var gulp = require('gulp');

gulp.task('copy-images', function(callback) {
  return gulp.src(global.config.src + '/images/**/*')
    .pipe(gulp.dest(global.config.dest + '/images'))
    .on('close', callback);
});
