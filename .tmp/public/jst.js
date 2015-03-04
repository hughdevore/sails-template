this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/createAssignment.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section id="create-assignment">\n\t<h1>Create an Assignment</h1>\n\t\t<form class="form" ng-submit="assign(assignment)" novalidate>\n\t\t<p class="error" ng-repeat="errorMessage in error.generic" ng-bind="errorMessage"></p>\n\t\t\t<label ng-class="error.name ? \'error\' : \'\'">\n\t\t\t\t<input class="input" type="text" placeholder="Assignment Name" ng-model="assignment.name">\n\t\t\t\t<p class="error" ng-bind="error.name"></p>\n\t\t\t</label>\n\n\t\t\t<label ng-class="error.url ? \'error\' : \'\'">\n\t\t\t\t<input class="input" type="url" placeholder="Assignment URL" ng-model="assignment.url">\n\t\t\t\t<p class="error" ng-bind="error.url"></p>\n\t\t\t</label>\n\t\t\t\n\t\t\t<button type="submit">Create</button>\n\t\t\t\n\t\t</form>\n</section>';

}
return __p
};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Home</h1>';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="user-form">\n\t<div class="avatar"></div>\n\t<h1>Login</h1>\n\t<form class="form" ng-submit="login(credentials)">\n\t\t<p class="error" ng-repeat="errorMessage in error.generic" ng-bind="errorMessage"></p>\n\t\t<label ng-class="error.identifier ? \'error\' : \'\'">\n\t\t\t<input type="text" placeholder="Email" ng-model="credentials.identifier">\n\t\t\t<p class="error" ng-bind="error.identifier"></p>\n\t\t</label>\n\n\t\t<label ng-class="error.password ? \'error\' : \'\'">\n\t\t\t<input type="password" placeholder="Password" ng-model="credentials.password">\n\t\t\t<p class="error" ng-bind="error.password"></p>\n\t\t</label>\n\t\t\n\t\t<button type="submit">Login</button>\n\t\t\n\t</form>\n</section>';

}
return __p
};

this["JST"]["assets/templates/register.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section ng-controller="RegisterCtrl">\n\t<h1>Register</h1>\n\t\t<form class="form" ng-submit="register(credentials)" novalidate>\n\t\t<p class="error" ng-repeat="errorMessage in error.generic" ng-bind="errorMessage"></p>\n\t\t\t<label ng-class="error.identifier ? \'error\' : \'\'">\n\t\t\t\t<input class="input" type="text" placeholder="Email" ng-model="credentials.identifier">\n\t\t\t\t<p class="error" ng-bind="error.identifier"></p>\n\t\t\t</label>\n\n\t\t\t<label ng-class="error.password ? \'error\' : \'\'">\n\t\t\t\t<input class="input" type="password" placeholder="Password" ng-model="credentials.password">\n\t\t\t\t<p class="error" ng-bind="error.password"></p>\n\t\t\t</label>\n\t\t\t\n\t\t\t<button type="submit">Register</button>\n\t\t\t\n\t\t</form>\n</section>';

}
return __p
};