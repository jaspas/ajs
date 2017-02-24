

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

.controller('detailpage', function($scope) {
//   var self = this;
//   self.id = $routeParams.id;
  $scope.trade = {id: 111,
      	        owner: "Jack",
                location: "San Francisco",
                time: "10:00" ,
                name: "Regenschirm",
                condition: "new" ,
                description: "You'll never get wet! Even if it rains hard.",
                tradeWish: "Ferrari"};

});
