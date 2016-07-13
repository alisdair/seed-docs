// Base :: Inline :: CSS
'use strict';

var gulp = require('gulp');
var inline = require('gulp-inline-source');

var options = {
  compress: true
};

gulp.task('inline-css', function(callback) {
  return gulp.src(global.config.dest + '/**/*.html')
    .pipe(inline(options))
    .pipe(gulp.dest(global.config.dest + '/'))
    .on('close', callback);
});
