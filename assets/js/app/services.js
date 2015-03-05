angular.module('app.services', [])
.factory('Validate', function() {
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
			else if(!validator.isEmail(credentials.identifier)) {
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
			return false;
		},

		assignment: function(assignment) {
			var error = {
				name: '',
				url: '',
				dueDate: '',
				dueTime: ''
			};
			
			// If url property of credentials object above = falsey (null, undefined, 0)
			if(!assignment.name) {
				error.name = 'You must enter an assigment name.'
			}
			// If url property of credentials object above = falsey (null, undefined, 0)
			if(!assignment.url) {
				error.url = 'Enter a link to the assignment.';
			}
			// If url property of credentials object above is not an email 
			// (using validator.js method isEmail)
			else if(!validator.isURL(assignment.url)) {
				error.url = 'You must enter a valid URL.';
			}
			// If 
			if(!_.isDate(assignment.dueDate)) {
				error.dueDate = 'You must enter a valid due date.';
			}
			else {
				var dueDate = moment(assignment.dueDate);
				dueDate.hour(assignment.dueTime.getHours());
				dueDate.minute(assignment.dueTime.getMinutes());
				dueDate.second(assignment.dueTime.getSeconds());
				if(!dueDate.isValid()) {
					error.dueDate = 'Invalid due date or time.';
				}
			}
			return error;
		}
	};
});
