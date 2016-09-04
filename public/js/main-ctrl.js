// @ngInject
module.exports = function ($scope, Restangular, uiGmapGoogleMapApi) {

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
};
