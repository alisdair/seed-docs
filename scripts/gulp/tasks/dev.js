// Tasks :: Development
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

// Default task
gulp.task('development', function(callback) {
  runSequence(
    'clean-jekyll',
    'jekyll',
    [
      'styles-base'
    ],
    'browsersync',
    'open-development',
    'watch'
  );
});

// Alias
gulp.task('dev', ['development']);
