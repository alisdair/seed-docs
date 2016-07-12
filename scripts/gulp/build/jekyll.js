// Build :: Jekyll
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build-jekyll', function(callback) {
  runSequence(
    'jekyll-incremental',
    [
      'styles-base',
      'images'
    ],
    'scripts-base',
    'browsersync-reload',
    callback);
});
