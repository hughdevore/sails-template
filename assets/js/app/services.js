angular.module('app.services', [])
.factory('Validate', function () {
	return {
		credentials: function(credentials) {
			var error = {
				identifier: '',
				password: ''
			};
			
			// If identifier property of credentials object above = falsey (null, undefined, 0)
			if(!credentials.identifier) {
				error.identifier = 'Enter your email address.';
			}
			// If identifier property of credentials object above is not an email 
			// (using validator.js method isEmail)
			else if(!validator.isEmail(credentials.identifier)){
				error.identifier = 'You must enter a valid email.';
			}
			// If identifier property of credentials object above = falsey (null, undefined, 0)
			if(!credentials.password) {
				error.password = 'You must enter a password.'
			}

			return error;
		},

		hasError: function(error) {
			for(var i in error) {
				if(error.hasOwnProperty(i) && error[i]) {
					return true;
				}
			}
			return true;
		}
	};
});