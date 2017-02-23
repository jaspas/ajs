angular.module('mySwapper',['ngRoute']);

angular.module('mySwapper').config (function($routeProvider){
  $routeProvider.when('/', {
    controller: "startController",
    templateUrl: "controller/startController.html"
  }).when('/tauschangebote', {
    controller: "tauschangebotController",
    templateUrl: "controller/tauschangebot/tauschangebot.html"
  });
});
