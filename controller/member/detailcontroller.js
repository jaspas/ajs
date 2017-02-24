angular.module('mySwapper').controller('detailController', detailController);


function detailController($scope, $resource, $routeParams){

  var Member = $resource('https://intense-mesa-72431.herokuapp.com/members/:id', {id: '@_id'});

  //var member = Member.get({id: "58aee817900d410d427d73df"}, function(){
  var member = Member.get({id: $routeParams.id}, function(){

    $scope.member = member;

    var Trades = $resource('https://intense-mesa-72431.herokuapp.com/swaps/:id', {id: '@_id'});
    var swaps = Trades.query(function() {
      $scope.member.trades = [];

      angular.forEach(swaps, function(swap){
        if(swap.owner === $scope.member._id){
          $scope.member.trades.push(swap);
        }
      });
    });
  });
}
