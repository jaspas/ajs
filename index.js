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
  })
  .when('/new', {
    controller: "controller/newTradeOffer/newTradeOfferController",
    templateUrl: "controller/newTradeOffer/newTradeOffer.html",
    css: "controller/newTradeOffer/newTradeOffer.css"
  }).when('/detailpage', {
    controller: "controller/detailpage",
    templateUrl: "controller/detailpage.html"
  });
});
