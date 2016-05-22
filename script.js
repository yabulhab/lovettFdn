var lovettApp = angular.module('lovettApp', []);

console.log("Hello, world!");

// start menu controller 
lovettApp.controller("MenuCtrl", function($scope) {


	$scope.visibleMenu = false;

	$scope.toggleFunc = function() {
		$scope.visibleMenu = !$scope.visibleMenu;
		console.log("I'm toggling");
	}

});

//start Home controller

lovettApp.controller("HomeCtrl", function($scope) {


});
