var angular = require('angular');
var restangular = require('restangular');
var lodash = require('lodash');
var ngSimpleLogger = require('angular-simple-logger');
var ngGoogleMaps = require('angular-google-maps');

// var bootstrap = require('bootstrap/dist/js/bootstrap.min');
var bootstrapCss = require("bootstrap/dist/css/bootstrap.min.css");
var css = require('../css/style.css');

var app = angular.module('sukelluspaikatApp', ['restangular', 'uiGmapgoogle-maps'])
  .config(function (RestangularProvider, uiGmapGoogleMapApiProvider) {
    RestangularProvider.setBaseUrl('/api');
    uiGmapGoogleMapApiProvider.configure({
      key: process.env.GMAPS_API_KEY,
      libraries: 'weather,geometry,visualization'
    });
  })
  .controller('MapController', require('./map-ctrl'))
  .controller('LocationInfoController', require('./location-info-ctrl'))
  .service('LocationService', require('./location-service'))
  ;

