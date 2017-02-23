angular.module('mySwapper',['ngRoute']);

angular.module('mySwapper').config (function($routeProvider){
  $routeProvider.when('/', {
    controller: "startController",
    templateUrl: "controller/startController.html"
  })
  .when('/detail', {
	  controller: "controller/member/detailController",
	  templateUrl: "controller/member/detailTemplate.html"
  });
});
