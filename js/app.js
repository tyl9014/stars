var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/home',{
			templateUrl: 'view/home.html',
			controller:'homeController'
		})
		.when('/littleCat',{
			templateUrl: 'view/littleCat.html',
			controller:'littleCatController'
		})
		.when('/case',{
			templateUrl: 'view/case.html',
			controller:'caseController'
		})
		
		.otherwise({
			redirectTo: '/home'
		});
}]);
