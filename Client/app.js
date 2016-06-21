
var myApp = angular.module("myApp", ["ngRoute"]);

//app.controller("booksCatalogServerController", ["$scope", "$http", booksCatalogServerController]);

myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: "views/home.html",
			controller: "homeController"
		})
		.when('/booksCatalog', {
			templateUrl: "views/booksCatalog.html",
			controller: "booksCatalogController"
		})
		.when('/contact', {
			templateUrl: "views/contact.html",
			controller: "contactController"
		})
		.when('/paintsCatalog', {
			templateUrl: "views/paintsCatalog.html",
			controller: "paintsCatalogController"
		})
		.when('/ReadingTasting', {
			templateUrl: "views/ReadingTasting.html",
			controller: "ReadingTastingController"
		})
		.when('/cart', {
			templateUrl: "views/cart.html",
			controller: "cartController"
		})
		.when('/signUp', {
			templateUrl: "views/signUp.html",
			controller: "signUpController"
		})
		.when('/signIn', {
			templateUrl: "views/signIn.html",
			controller: "signInController"
		})
		.when('/booksGraphic', {
			templateUrl: "views/booksGraphic.html",
			controller: "booksGraphicController"
		})
		.when('/booksPrint', {
			templateUrl: "views/booksPrint.html",
			controller: "booksPrintController"
		})
		.when('/booksPublish', {
			templateUrl: "views/booksPublish.html",
			controller: "booksPublishController"
		})
		.when('/taste', {
			templateUrl: "views/taste.html",
			controller: "tasteController"
		})
		.otherwise({redirectTo:'/home'});
}]);


