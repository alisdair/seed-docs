// Packs :: Index
'use strict';

var $ = require('jquery');
var _ = require('lodash');

var app = function() {
  // Defaults
  this.app = '#app-seed-packs';
  this.$app = $(this.app);
  this.el = '#seed-pack-list';
  this.url = 'https://api.github.com/users/helpscout/repos';
  this.template = $('#template-pack-item').html();

  if (!this.$app.length) {
    return false;
  }

  this.initialize();
};

app.prototype.fetch = function() {
  var self = this;

  return $.ajax({
    url: self.url,
    success: function(response) {
      return self.parse(response);
    }
  });
};

app.prototype.parse = function(response) {
  if (!response) {
    return false;
  }

  response = _.filter(response, function(repo) {
    if(repo.name.indexOf('seed-cli') >= 0) {
      return false;
    }
    else if (repo.name.indexOf('seed') >= 0) {
      return true;
    }
    else {
      return false;
    }
  });

  if (response.length) {
    this.render(response);
  };

  return this;
};

app.prototype.render = function(response) {
  var self = this;

  _.forEach(response, function(repo, index) {
    var template = _.template(self.template)(repo);

    // Animate each repo into the DOM after three frames!
    setTimeout(function() {
      self.$el.append(template);
    }, index * 50);
  });

  return this;
};

app.prototype.initialize = function() {
  console.log('Go go seed packs!');

  this.$el = $(this.el);
  this.fetch();
};

module.exports = app;
