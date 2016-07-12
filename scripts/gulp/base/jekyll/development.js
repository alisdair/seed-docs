// Base :: Jekyll :: Development
'use strict';

var gulp = require('gulp');

// Development: Jekyll build with configs
gulp.task('jekyll-development', function(callback) {
  var task = 'bundle exec jekyll build --config "_config.yml,config/_develop.yml"';
  return global.exec(task, callback);
});
