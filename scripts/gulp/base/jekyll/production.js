// Base :: Jekyll :: Production
'use strict';

var gulp = require('gulp');

// Staging: Jekyll build with configs
gulp.task('jekyll-production', function(callback) {
  var task = 'bundle exec jekyll build --config "_config.yml,config/_production.yml"';
  return global.exec(task, callback);
});
