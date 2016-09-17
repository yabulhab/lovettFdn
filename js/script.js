var lovettApp = angular.module('lovettApp', []);

console.log("Hello, world!");

// start menu controller 
lovettApp.controller("MenuCtrl", function($scope) {

	$scope.visibleMenu = false;
	$scope.hamburger = angular.element(document.querySelectorAll("#s0, #s1, #s2"));
	$scope.menuWord = angular.element(document.querySelector("#menuWord"));
	//console.log($scope.hamburger);

	$scope.toggleFunc = function() {
		
		$scope.visibleMenu = !$scope.visibleMenu;
		console.log("I'm toggling");
		($scope.hamburger).toggleClass("open");
		($scope.menuWord).toggleClass("open");
		//console.log(hamburger);
	
	}			


});

function openCat(cat){
	var i; 
	var x = document.getElementsByClassName("successCat");
	for (i=0; i<x.length; i++) {
		x[i].style.display="none";
	}
	document.getElementById(cat).style.display="block";
}
