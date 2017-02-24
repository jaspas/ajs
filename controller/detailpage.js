

// var app = angular.module('detailApp', []);
// app.config (function($routeProvider){
//   $routeProvider.when('/', {
//
// });


angular.module('mySwapper')
/*
.config(function($routeProvider){
  $routeProvider.when("controller/detailpage/:id",
    {
      templateUrl: "/tauschangebot/tauschangebot.html",
      controller: "tauschangebot",
      controllerAs: "app"
    }
  );
})*/

.controller('detailpage', function($scope,$resource,$routeParams) {
var Trade = $resource('https://intense-mesa-72431.herokuapp.com/swaps/:id', {id: '@_id'});

  // var currentTrade = Trade.get({id: $routeParams.id}, function(){
  //
  //   $scope.trade = currentTrade;
  // });
  var currentTrade = Trade.get({ id: $routeParams.id }, function() {
   $scope.trade = currentTrade;
 }); // get() returns a single entry

  // $scope.trade = {id: 111,
  //     	        owner: "Jack",
  //               location: "San Francisco",
  //               time: "10:00" ,
  //               name: "Regenschirm",
  //               condition: "new" ,
  //               description: "You'll never get wet! Even if it rains hard.",
  //               tradeWish: "Ferrari"};

});
