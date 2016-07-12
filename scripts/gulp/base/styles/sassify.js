// Styles :: Sassify
'use strict';

var gulp = require('gulp');

gulp.task('styles-sassify', function(callback) {
  return global.sassify(callback);
});
