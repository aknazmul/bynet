'use strict';


app.controller('homeController', [ '$rootScope', '$document', '$scope', function ($rootScope, $document, $scope) {

	  
	$scope.bannerImages = [
      {
        img: "img/binate-banner-01.jpg",
        title1: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
		captionAlign:"right-align"
      },
			{
        img: "img/binate-banner-02.jpg",
        title1: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
		captionAlign:"right-align"
      },
			{
        img: "img/binate-banner-03.jpg",
        title1: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
				captionAlign:"left-align"
      }      
    ];


	$scope.animation = {};
	$scope.animation.current = 'fadeInUp';
	$scope.animation.previous = $scope.animation.current;
	
	// only required for dynamic animations
	$scope.changeAnimation = function() {

		var elements = document.getElementsByClassName('car-container');
		var $elements = angular.element(elements);

		$elements.removeClass('animated ' + $scope.animation.previous);
		$elements.addClass('not-visible');

		$scope.animation.previous = $scope.animation.current;
		$document[0].dispatchEvent(new CustomEvent('scroll'));
	}; 

	$scope.animateElementIn = function($el) {
		$el.removeClass('not-visible');
		$el.addClass('animated ' + $scope.animation.current);
	};

	$scope.animateElementOut = function($el) {
		$el.addClass('not-visible');
		$el.removeClass('animated ' + $scope.animation.current);
	};

	$scope.animateElementfadeInRight = function($el) {
		$el.removeClass('not-visible');
		$el.addClass('animated fadeInRight');
	};

	$scope.animateElementfadeOutRight = function($el) {
		$el.addClass('not-visible');
		$el.removeClass('animated fadeInRight');
	};



}]); 
