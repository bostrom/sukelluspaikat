// @ngInject
module.exports = function ($scope, LocationService) {

  $scope.locations = LocationService.locations;

};
