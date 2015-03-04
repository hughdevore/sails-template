angular.module('app.controllers', ['app.services'])
.controller('HomeCtrl', function($scope) {

})
.controller('RegisterCtrl', function($scope, $state, $http, Validate){
	$scope.error = {
		identifier: '',
		password: ''
	};
	$scope.credentials = {
		identifier: '',
		password: ''
	};

	$scope.register = function(credentials) {
		$scope.error = Validate.credentials(credentials);

		if(!Validate.hasError($scope.error)) {
			var registerObj = {
				username: credentials.identifier,
				email: credentials.identifier,
				password: credentials.password
			};
			console.log(registerObj);
			
			$http.post('/auth/local/register', registerObj)
			.success(function(response) {
				console.log('Success!');
				console.log(response);

				if(res.success){
					$state.go('home');
				} else {
					$scope.error.generic = res.errors;
				}
			})
			.error(function(err){
				console.log('ERROR!!!');
				console.log(err);
			})
		}
	};
})
.controller('LoginCtrl', function($scope, $state, $http, Validate) {
	$scope.error = {
		identifier: '',
		password: ''
	};
	$scope.credentials = {
		identifier: '',
		password: ''
	};

	$scope.login = function(htmlCredentials) {
		$scope.error = Validate.credentials(htmlCredentials);

		if(!Validate.hasError($scope.error)) {
			$http.post('/auth/local', htmlCredentials)
			.success(function(response) {
				console.log('Success!');
				console.log(response);

				if(response.success){
					$state.go('home');
				} else {
					$scope.error.generic = response.errors;
				}
			})
			.error(function(err){
				console.log('ERROR!!!');
				console.log(err);
			})
		}
	};
})
.controller('CreateAssignmentCtrl', function($scope, $state, $http, Validate) {
	$scope.error = {
		name: '',
		url: ''
	};
	$scope.assignment = {
		name: '',
		url: ''
	};

	$scope.assign = function(assignment) {
		$scope.error = Validate.assigned(assignment);

		if(!Validate.hasError($scope.error)) {
			$http.post('/auth/local', assignment)
			.success(function(response) {
				console.log('Success!');
				console.log(response);

				if(response.success){
					$state.go('home');
				} else {
					$scope.error.generic = response.errors;
				}
			})
			.error(function(err){
				console.log('ERROR!!!');
				console.log(err);
			})
		}
	};
});