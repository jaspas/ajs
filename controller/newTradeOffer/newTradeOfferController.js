angular.module('mySwapper').controller('newTradeOfferController', newTradeOfferController);

function newTradeOfferController($scope) {

  var newTrade = {
    '_id' : '7',
    'owner' : $scope.user,
    'location' : $scope.ort,
    'time' : '17:35',
    'name' : $scope.gegenstand,
    'condition' : 'new',
    'details' : $scope.details,
    'tradewish' : $scope.tausch
  };

}
