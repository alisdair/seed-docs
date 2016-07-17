// Build :: Jekyll (Incremental)
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build-jekyll-incremental', function(callback) {
  runSequence(
    'jekyll-incremental',
    'styles-base',
    'scripts-base',
    'browsersync-reload',
    callback);
});
