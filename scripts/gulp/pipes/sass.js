// Pipes :: Sass
'use strict';

var lazypipe = require('lazypipe');
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

var pathfinder = require('sass-pathfinder');

var includePaths = pathfinder(
  global.config.src + '/_assets/scss',
  require('seed-reset'),
  require('seed-breakpoints'),
  require('seed-flexy'),
  require('seed-floats'),
  require('seed-grid'),
  require('seed-props'),
  require('seed-spacing'),
  require('seed-typography'),
  require('seed-width'),
  require('seed-visibility')
);

var pipe = lazypipe()
  .pipe(sourcemaps.init)
  .pipe(function() {
    return sass({
      includePaths: includePaths
    })
    .on('error', sass.logError);
  })
  .pipe(sourcemaps.write)
  .pipe(gulp.dest, global.config.cache + '/css')
  .pipe(gulp.dest, global.config.dest + '/css');

module.exports = pipe;
