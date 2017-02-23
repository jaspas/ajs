angular.module('mySwapper',['ngRoute']);

angular.module('mySwapper').config (function($routeProvider){
  $routeProvider.when('/', {
    controller: "startController",
    templateUrl: "controller/startController.html"
  }).when('/tauschangebote', {
    controller: "tauschangebotController",
    templateUrl: "controller/tauschangebot/tauschangebot.html"
  })
  .when('/detail', {
	  controller: "controller/member/detailController",
	  templateUrl: "controller/member/detail.html",
	  css: "controller/member/detail.css"
  });
});
