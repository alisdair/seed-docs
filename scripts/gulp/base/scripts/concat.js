// Base :: Scripts :: Concat
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var plumber = require('gulp-plumber');

var concat = require('../../pipes/concat');

gulp.task('scripts-concat', function(callback) {
  return gulp.src([
      global.config.src + '/_assets/js/main.js'
    ])
    .pipe(plumber())
    .pipe(concat())
    .pipe(global.browserSyncReload({ stream: true }))
    .on('close', callback);
});
