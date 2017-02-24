angular.module('mySwapper').controller('startController', startController);

function startController($scope, $resource, $timeout){

  var Member = $resource('https://intense-mesa-72431.herokuapp.com/members');
  var members = Member.query(function() {

  var member = members[0];

    $scope.membery = member;
});
}
