angular.module('app.controllers',[])
.controller('loginCtrl', function($scope, $state){
	$scope.goLogin = function() {


		console.log({
    		identifier: 'aaron@theironyard.com',
    		password: 'password123'
			});

		$state.go('login');
	}
})
.controller('registerCtrl', function($scope, $state){
	$scope.goRegister = function() {
		$state.go('register');
	}
})
.controller('homeCtrl', function($scope, $state){
	$scope.goHome = function() {
		$state.go('home');
	}
});