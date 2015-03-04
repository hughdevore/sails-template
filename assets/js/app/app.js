angular.module('app',['app.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
		controller: 'homeCtrl'
	})
	.state('login', {
		url: '/user/login',
		templateUrl: 'templates/login.html',
		controller: 'loginCtrl'
	})
	.state('register', {
		url: '/user/register',
		templateUrl: 'templates/register.html',
		controller: 'registerCtrl'
	})
	$urlRouterProvider.otherwise('/');
});