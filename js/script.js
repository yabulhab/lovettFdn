var lovettApp = angular.module('lovettApp', []);

lovettApp.controller("homeCtrl", function($scope) {
//this function is listening for the size of the window and doing an appropriate true: false situation
	$(window).resize(function(){
		console.log(window.innerWidth);
		$scope.mobile = window.innerWidth < 768 ?  true : false ;
		$scope.$apply(function(){
		});
	});
});//end homeCtrl

lovettApp.controller("MenuCtrl", function($scope) {

		$scope.burger = angular.element(document.querySelectorAll('#s0, #s1, #s2'));
		$scope.openMenu = function() {
			document.getElementById("myMenu").style.width = "360px";
			document.getElementById("menuWord").style.color = "white";
			document.getElementById("bodyOverlay").style.display = "block";
			($scope.burger).addClass('open');
			console.log("i'm open");
		}	
		$scope.closeMenu = function(){
			document.getElementById("myMenu").style.width = "0";
			document.body.style.backgroundColor = ("$background");
			document.getElementById("menuWord").style.color = "black";
			document.getElementById("bodyOverlay").style.display = "none";
			($scope.burger).removeClass('open');
			console.log("i'm closed");
		}

		var triggerClicked = false;
		$scope.triggerClick = function() {
			$scope[triggerClicked ? "closeMenu" : "openMenu"]();
			triggerClicked = !triggerClicked;
			console.log("triggerClick");
		};

		$("#bodyOverlay").on('click', function(event) {
			$scope.triggerClick();
			console.log("the overlay has been clicked");		
		});

		//adapted from Nick Ciliak's fade out on scroll https://codepen.io/nickcil/pen/sfutl
		$(window).scroll(function(){
			$("#menuWord").css("opacity", 1 -
				$(window).scrollTop()/250);
		});
});	


// var scrollDown = function(){
// 	$('html, body').animate({scrollTop: $('#about-mission').offset().top}, 100);
// };








