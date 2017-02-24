angular.module('mySwapper').controller('startController', startController);

function startController($scope, $resource){

  var Member = $resource('https://intense-mesa-72431.herokuapp.com/members/:id', {id: '@_id'});
  var members = Member.get(function() {

  var member = members[1];

    $scope.membery = member;
});

  var listOfMembers = Member.get({id: "58aee817900d410d427d73df"}, function(){
      console.log(listOfMembers);
  })
}
