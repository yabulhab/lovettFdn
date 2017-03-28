var lovettApp = angular.module('lovettApp', []);

console.log("Hello, world!");



// start menu controller 
	lovettApp.controller("MenuCtrl", function($scope) {

	$scope.visibleMenu = false;
	$scope.hamburger = angular.element(document.querySelectorAll("#s0, #s1, #s2"));
	$scope.menuWord = angular.element(document.querySelector("#menuWord"));
	$scope.body = angular.element(document.querySelector("body"));
	//we need this for when page loads to get the initial value of the window width so that 
	//we have either a true or a false on load instead of waiting for a click
	$scope.mobile = window.innerWidth < 768 ?  true : false ;
	//console.log(window.innerWidth);
	//console.log($scope.hamburger);


//this function is listening for the size of the window and doing an appropriate true: false situation
	$(window).resize(function(){
	    console.log(window.innerWidth);
	    $scope.mobile = window.innerWidth < 768 ?  true : false ;
	    $scope.$apply(function(){

	    });
	});

	$scope.toggleFunc = function() {
		
		$scope.visibleMenu = !$scope.visibleMenu;
		console.log("I'm toggling");
		($scope.hamburger).toggleClass("open");
		($scope.menuWord).toggleClass("open");
		console.log($scope.body.style)
		console.log($scope.body) 
		//$scope.body[0].style.overflow = "hidden" ;
		//console.log(hamburger);

		// if ($scope.visibleMenu) {
		// 	$scope.body[0].style.overflow = "hidden" ;
		// } else {
		// 	$scope.body[0].style.overflow = "scroll" ;
		// };

		$scope.body[0].style.overflow = $scope.visibleMenu ? "hidden" : "scroll";
	
	}


});




// 2.0

// function openCat(cat){
// 	var i; 
// 	var x = document.getElementsByClassName("successCat");
// 	for (i=0; i<x.length; i++) {
// 		x[i].style.display="none";
// 	}
// 	document.getElementById(cat).style.display="block";
// }






