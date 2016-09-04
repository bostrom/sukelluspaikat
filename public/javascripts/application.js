var angular = require('angular');
var restangular = require('restangular');
var lodash = require('lodash');
var ngSimpleLogger = require('angular-simple-logger');
var ngGoogleMaps = require('angular-google-maps');

var app = angular.module('sukelluspaikat', ['restangular', 'uiGmapgoogle-maps'])
  .config(function (RestangularProvider, uiGmapGoogleMapApiProvider) {
    RestangularProvider.setBaseUrl('/api');
    uiGmapGoogleMapApiProvider.configure({
      key: process.env.GMAPS_API_KEY,
      libraries: 'weather,geometry,visualization'
    });
  })
  .controller('MainCtrl', function ($scope, Restangular, uiGmapGoogleMapApi) {

    $scope.map = {
      center: {
        latitude: 60,
        longitude: 24
      },
      zoom: 8
    };

    Restangular.all('locations').getList().then(function (locations) {
      $scope.locations = locations;
    });

    uiGmapGoogleMapApi.then(function (maps) {

    });
  });
