angular.module('mySwapper',['ngRoute']);

angular.module('mySwapper').config (function($routeProvider){
  $routeProvider.when('/', {
    controller: "startController",
    templateUrl: "controller/startController.html"
  })
  .when('/detail', {
	  controller: "detailController",
	  templateUrl: "detailTemplate.html"
  });
});
