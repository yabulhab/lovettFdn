var lovettApp = angular.module('lovettApp', []);

console.log("Hello, world!");

// start menu controller 
lovettApp.controller("MenuCtrl", function($scope) {

	$scope.visibleMenu = false;
	$scope.hamburger = angular.element(document.querySelectorAll("#s0, #s1, #s2"));
	//console.log($scope.hamburger);

	$scope.toggleFunc = function() {
		
		$scope.visibleMenu = !$scope.visibleMenu;
		console.log("I'm toggling");
		($scope.hamburger).toggleClass("open");
		//console.log(hamburger);
	
	}
			
		// $scope.open = !$scope.open;
		// console.log("menu toggle??")


});

//start Home controller

lovettApp.controller("HomeCtrl", function($scope) {


});
