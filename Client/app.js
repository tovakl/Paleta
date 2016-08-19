
var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider){
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
		.when('/cart', {
			templateUrl: "views/cart.html",
			controller: "cartController"
		})
		.when('/readingTasting', {
			templateUrl: "views/readingTasting.html",
			controller: "readingTastingController"
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
		.when('/taste/:id', {
			templateUrl: "views/taste.html",
			controller: "tasteController"
		})
		.when('/book/:id', {
			templateUrl: "views/book.html",
			controller: "bookController"
		})
		.when('/Buy', {
			templateUrl: "views/Buy.html",
			controller: "buyController"
		})
		.when('/verifyShop', {
			templateUrl: "views/verifyShop.html",
			controller: "verifyShopController"

		})
		.otherwise({redirectTo:'/home'});
});

myApp.controller("booksCatalogController", ["$scope", "$http", booksCatalogController]);
myApp.controller("readingTastingController", ["$scope", "$http", readingTastingController]);
myApp.controller("bookController", ["$scope",  "$routeParams", "$http", bookController]);
myApp.controller("homeController", ["$scope",  "$routeParams", "$http", homeController]);
myApp.controller("tasteController", ["$scope", "$routeParams", "$http", tasteController]);
myApp.controller("cartController", ["$scope","$routeParams", "$http", cartController]);
myApp.controller("signInController", ["$scope", "$routeParams", "$http", signInController]);
myApp.controller("signUpController", ["$scope","$routeParams", "$http", signUpController]);
myApp.controller("indexController", ["$scope","$routeParams", "$http", indexController]);
myApp.controller("contactController", ["$scope","$routeParams", "$http", contactController]);
