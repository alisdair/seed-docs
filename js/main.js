(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Greetings
'use strict';

var greetings = function() {
  console.log('Hi there :D');
  console.log('If you\'re interested in the source code, you can check it out on Github:');
  console.log('https://github.com/helpscout/seed-docs');
};

module.exports = greetings;

},{}],2:[function(require,module,exports){
// Main
'use strict';
var greetings = require('./greetings');

greetings();

},{"./greetings":1}]},{},[2]);
