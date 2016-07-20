// Main
'use strict';
var jQuery = require('jquery');
var Packs = require('./packs/index');
var greetings = require('./greetings');

(function($) {
  var packs = new Packs();
  greetings();
})(jQuery);
