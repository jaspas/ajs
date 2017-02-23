angular.module('mySwapper').controller('detailController', detailController);

function detailController($scope, $css){
  $css.bind({

    href: 'controller/member/detail.css'
  }, $scope);

  $css.add('controller/member/detail.css');


}
