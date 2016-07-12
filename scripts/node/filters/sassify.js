// Filters :: Sassify
'use strict';

var _ = require('lodash');
var findRoot = require('find-root');
var fs = require('fs');
var glob = require('glob');
var config = require('../../gulp/config');
var root = findRoot();

var dest = `${root}/${config.dest}/`;

var updateFile = function(file, css) {
  return new Promise(function(resolve, reject) {
    if (!file || !css) {
      return false;
    }

    var filePath = dest + file;

    fs.readFile(filePath, 'utf-8', function(err, data) {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      var templateData = {
        sassify: css
      };

      data = _.template(data)(templateData);

      fs.writeFile(filePath, data, 'utf-8', function(err) {
        if (err) {
          reject();
          return console.log(err);
        }
        resolve();
      });
    });
  });
};

var updateFiles = function(files, css) {
  if (!files) {
    return false;
  }

  return new Promise(function(resolve, reject) {
    var len = files.length;

    _.forEach(files, function(file, index) {
      updateFile(file, css)
      .then(function() {
        if (index + 1 === files.length) {
          resolve();
        }
      });
    });
  });
};

var sassify = function(callback) {
  var file = `${dest}css/main.css`;
  var css = fs.readFileSync(file, 'utf8');
  var options = {
    cwd: dest
  };

  return glob('**/*.html', options, function(err, files) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    updateFiles(files, css)
    .then(function() {
      if (callback) {
        callback();
      }
    });
  });
};
sassify();
module.exports = sassify;
