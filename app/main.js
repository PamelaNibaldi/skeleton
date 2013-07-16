/**
 * Rjs Configuration. At least we need it empty for the module grunt-bower-requirejs
 * @see https://github.com/yeoman/grunt-bower-requirejs
 *
 * global require
 */
require.config({
  paths: {
    'underscore' : 'vendor/underscore/underscore',
    'backbone'   : 'vendor/backbone/backbone',
    'jquery'     : 'vendor/jquery/jquery',
    'text'       : 'vendor/requirejs-text/text'
  },

  shim : {
    underscore: {
      exports: '_'
    },
    jquery: {
      exports: '$'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require([], function () {
  'use strict';

  console.log('hello world!');

});
