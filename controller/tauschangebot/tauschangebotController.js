angular.module('mySwapper').controller('tauschangebotController', tauschangebotController);

function tauschangebotController($scope) {
  $scope.tradelist = [{
      'name': 'Tasche',
      'owner': 'Vladislav',
      'description': 'Verkaufe meine originale Ledertasche aus Krokodilzähnen',
      'tradeWish': '1€',
      'time': 'As soon as possible',
      'location': 'Kreml'
    },
    {
      'name': 'Tasche2',
      'owner': 'Vladislav2',
      'description': 'Verkaufe meine originale Ledertasche aus Krokodilzähnen2',
      'tradeWish': '1€2',
      'time': 'As soon as possible2',
      'location': 'Kreml2'
    },
    {
      'name': 'Tasche3',
      'owner': 'Vladislav3',
      'description': 'Verkaufe meine originale Ledertasche aus Krokodilzähnen3',
      'tradeWish': '1€3',
      'time': 'As soon as possible3',
      'location': 'Kreml3'
    }
  ];

  $scope.tradelist.push({
    'name': 'Tasche3',
    'owner': 'Vladislav3',
    'description': 'Verkaufe meine originale Ledertasche aus Krokodilzähnen3',
    'tradeWish': '1€3',
    'time': 'As soon as possible3',
    'location': 'Kreml3'
  });
}



//$scope.addRow = function() {
/*  $scope.tradelist.push({
      'name': $scope.name,
      'owner': $scope.owner,
      'description': $scope.description,
      'tradeWish': $scope.tradeWish,
      'time': $scope.time,
      'location': $scope.location
    });
    $scope.name = '';
    $scope.owner = '';
    $scope.description = '';
    $scope.tradeWish = '';
    $scope.time = '';
    $scope.location = '';
  //};
}*/
