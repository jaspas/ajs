angular.module('mySwapper').controller('detailController', detailController);

function detailController($scope/*, $css*/){
	var member = {
		'_id': 5,
		'name': 'Obama',
		'firstname': 'Barack',
		'memberSince': 'today',
		'rating': 4.2,
		'trades': [
			{'name': 'Tasche'},
			{'name': 'Buch'}
		],
		'previousTrades': [
			{'name': 'Comic'},
			{'name': 'T-Shirt'}
		],
		'location': 'Washington D.C.',
		'email': 'former_potus@gmail'
	};
  /*$css.bind({

    href: 'controller/member/detail.css'
  }, $scope);
*/
  //$css.add('controller/member/detail.css');


}
