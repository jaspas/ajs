

var app = angular.module('detailApp', []);
app.controller('detailCtrl', function($scope) {
    $scope.count = 0;
    $scope.myFunction = function() {
        $scope.count++;
    }
});
