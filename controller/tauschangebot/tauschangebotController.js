angular.module('mySwapper').controller('tauschangebotController', tauschangebotController);

function tauschangebotController($scope, $resource) {

  var Trade = $resource('https://intense-mesa-72431.herokuapp.com/swaps');
  $scope.tradelist = Trade.query(function() {
  /*  user_id = $scope.tradelist[0].owner;
    var listOfMembers = Member.get({id: user_id}, function() {
      $scope.username = listOfMembers;
    });*/

  });

  /*var Member = $resource('https://intense-mesa-72431.herokuapp.com/members/:id', {
    id: '@_id'

  });
  $scope.members = Member.query(function() {});*/
}

// get request -> trade
//save user_id from trade request in var
// get request -> user with user_id
