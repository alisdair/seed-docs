// Build :: Jekyll Data
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build-jekyll-data', function(callback) {
  runSequence(
    'jekyll',
    [
      'copy-cache-css',
      'images'
    ],
    'scripts-base',
    'browsersync-reload',
    callback);
});
