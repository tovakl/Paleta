
var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: "Client/views/home.html",
			controller: "homeController"
		})
		.when('/booksCatalog', {
			templateUrl: "Client/views/booksCatalog.html",
			controller: "booksCatalogController"
		})
		.when('/contact', {
			templateUrl: "Client/views/contact.html",
			controller: "contactController"
		})
		.when('/paintsCatalog', {
			templateUrl: "Client/views/paintsCatalog.html",
			controller: "paintsCatalogController"
		})
		.when('/ReadingTasting', {
			templateUrl: "Client/views/ReadingTasting.html",
			controller: "ReadingTastingController"
		})
		.when('/cart', {
			templateUrl: "Client/views/cart.html",
			controller: "cartController"
		})
		.when('/signUp', {
			templateUrl: "Client/views/signUp.html",
			controller: "signUpController"
		})
		.when('/signIn', {
			templateUrl: "Client/views/signIn.html",
			controller: "signInController"
		})
		.when('/booksGraphic', {
			templateUrl: "Client/views/booksGraphic.html",
			controller: "booksGraphicController"
		})
		.when('/booksPrint', {
			templateUrl: "Client/views/booksPrint.html",
			controller: "booksPrintController"
		})
		.when('/booksPublish', {
			templateUrl: "Client/views/booksPublish.html",
			controller: "booksPublishController"
		})
		.when('/taste', {
			templateUrl: "Client/views/taste.html",
			controller: "tasteController"
		})
		.otherwise({redirectTo:'/home'});
});


