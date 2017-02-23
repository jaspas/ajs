

// var app = angular.module('detailApp', []);
// app.config (function($routeProvider){
//   $routeProvider.when('/', {
//
// });


angular.module('myApp', ['ngRoute'])

.config(function($routeProvider){
  $routeProvider.when("controller/detailpage/:id",
    {
      templateUrl: "/tauschangebot/tauschangebot.html",
      controller: "tauschangebot",
      controllerAs: "app"
    }
  );
})

.controller('tauschangebot', function($routeParams) {
  var self = this;
  self.id = $routeParams.id;
}
