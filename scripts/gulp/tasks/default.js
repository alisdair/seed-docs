// Tasks :: Default
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

// Default task
gulp.task('default', function(callback) {
  runSequence(
    'verify-dependencies',
    'clean-jekyll',
    'jekyll',
    [
      'styles-base'
    ],
    'browsersync',
    'watch'
  );
});

// Alias
gulp.task('serve', ['default']);
