// @ngInject
module.exports = function ($scope, Restangular, uiGmapGoogleMapApi, LocationService) {

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

  uiGmapGoogleMapApi.then(function (maps) {});

  $scope.markerClick = function (gMarker, event, location) {
    LocationService.locations.active = location;
  };
};
