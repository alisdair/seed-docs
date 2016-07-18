// Pipes :: Sass
'use strict';

var lazypipe = require('lazypipe');
var gulp = require('gulp');
var sass = require('gulp-sass');

var pathfinder = require('sass-pathfinder');

var includePaths = pathfinder(
  global.config.src + '/_assets/scss',
  require('seed-reset'),
  require('seed-breakpoints'),
  require('seed-color-fn'),
  require('seed-color-scheme-helpscout'),
  require('seed-display'),
  require('seed-flexy'),
  require('seed-floats'),
  require('seed-grid'),
  require('seed-opacity'),
  require('seed-props'),
  require('seed-spacing'),
  require('seed-typography'),
  require('seed-width'),
  require('seed-visibility')
);

var pipe = lazypipe()
  .pipe(function() {
    return sass({
      includePaths: includePaths
    })
    .on('error', sass.logError);
  });

module.exports = pipe;
