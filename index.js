angular.module('mySwapper',['ngRoute']);

angular.module('mySwapper').config (function($routeProvider){
  $routeProvider.when('/', {
    controller: "startController",
    templateUrl: "controller/startController.html"
  }).when('/tauschangebote', {
    controller: "tauschangebotController",
    templateUrl: "controller/tauschangebot/tauschangebot.html",
    css: "controller/tauschangebot/tauschangebotController.js"
  })
  .when('/detail', {
	  controller: "detailController",
	  templateUrl: "controller/member/detail.html",
	  /*css: "controller/member/detail.css"*/
  })
  .when('/new', {
    controller: "newTradeOfferController",
    templateUrl: "controller/newTradeOffer/newTradeOffer.html",
    css: "controller/newTradeOffer/newTradeOffer.css"
  }).when('/detailpage/:id', {
    controller: "detailpage",
    templateUrl: "controller/detailpage.html"
  });
});



//ngResource
