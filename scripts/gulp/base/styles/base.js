// Base :: Styles :: Base
'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');

var sass = require('../../pipes/sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles-base', function(callback) {
  return gulp.src(global.config.src + '/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest(global.config.dest + '/css'))
    .pipe(global.browserSyncReload({ stream: true }))
    .on('close', callback);
});
