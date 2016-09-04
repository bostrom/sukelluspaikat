var angular = require('angular');
var restangular = require('restangular');
var lodash = require('lodash');
var ngSimpleLogger = require('angular-simple-logger');
var ngGoogleMaps = require('angular-google-maps');

var app = angular.module('sukelluspaikatApp', ['restangular', 'uiGmapgoogle-maps'])
  .config(function (RestangularProvider, uiGmapGoogleMapApiProvider) {
    RestangularProvider.setBaseUrl('/api');
    uiGmapGoogleMapApiProvider.configure({
      key: process.env.GMAPS_API_KEY,
      libraries: 'weather,geometry,visualization'
    });
  })
  .controller('MainController', require('app/main-ctrl'));
