// Tasks :: Production
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('production', function(callback) {
  runSequence(
    'verify-dependencies',
    'clean-jekyll',
    'jekyll-production',
    'styles'
  );
});
