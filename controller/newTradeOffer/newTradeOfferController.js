angular.module('mySwapper').controller('newTradeOfferController', newTradeOfferController);

function newTradeOfferController($scope,$resource) {

  $scope.insertNewTrade = function() {

    var current_date = Date.now();
    var newTrade = {
      'owner' : $scope.user,
      'location' : $scope.ort,
      'time' : $scope.time,
      'name' : $scope.gegenstand,
      'condition' : $scope.zustand,
      'description' : $scope.details,
      'tradewish' : $scope.tausch,
      'createDate' : $scope.datum,
      '_id' : current_date
    };

    var Trade = $resource('https://intense-mesa-72431.herokuapp.com/swaps/:id', {id: '@_id'});

    Trade.save({newTrade : newTrade, name: $scope.name}, function() {

      });
    }
}
