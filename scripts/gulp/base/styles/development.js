// Base :: Styles :: Development
'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');

var sass = require('../../pipes/sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles-development', function(callback) {
  return gulp.src(global.config.src + '/_assets/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(global.config.dest + '/css'))
    .pipe(global.browserSyncReload({ stream: true }))
    .on('close', callback);
});

