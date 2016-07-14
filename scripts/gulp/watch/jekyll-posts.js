// Watch :: Jekyll Posts
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');
var path = require('path');

gulp.task('watch-jekyll-posts', function () {
  gulp.watch([
    global.config.src + '/_guides/**/*.{html,md}',
    global.config.src + '/_posts/**/*.{html,md}'
  ], ['build-jekyll-data'])
  .on('change', function(event) {
    var file = event.path
      .replace(global.path, '')
      .replace('/src', '');
    gutil.log(file + ' was', gutil.colors.green('updated'));
  });
});

