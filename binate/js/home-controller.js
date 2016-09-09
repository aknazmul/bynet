'use strict';


app.controller('homeController', [ '$rootScope', '$document', '$scope', function ($rootScope, $document, $scope) {

	  
	$scope.bannerImages = [
      {
        img: "img/binate-banner-01.jpg",
        title1: "Entering a new era of transformations, we refocus energies towards ‘Creating memorable digital experiences everyday for our customers. ",
		captionAlign:"right-align"
      },
			{
        img: "img/binate-banner-02.jpg",
        title1: "Our client’s priorities drive our business focus. They depend on Binate's industry knowledge to help  solve the toughest of problems. For us, “good enough” is not enough.",
		captionAlign:"right-align"
      },
			{
        img: "img/binate-banner-03.jpg",
        title1: "we can deliver 25% efficiency gains in the first 12 to 18 months of a client relationship versus waiting for savings in the off years.",
		captionAlign:"left-align"
      }      
    ];


	$scope.services = [
		{
			id: 1,
			icon: "li-target",
			name: "Agile process",
			description: "It is a long established fact that. It is a fact that a reader will be distracted by the readable content of a page when.  It is a long established fact that. It is a fact that a reader will be distracted by the readable content of a page when."
		},
		{
			id: 2,
			icon: "li-paper-plane",
			name: "low Cost",
			description: "Amazing new frustration. New infer anger or amazing new frustration. The color red can infer amazing new frustration. Amazing new frustration. New infer anger or amazing new frustration. The color red can infer amazing new frustration."
		},
		{
			id: 3,
			icon: "li-graph",
			name: "Your Controll",
			description: "With Binate Solutions you have your own people that are working exclusively for you. It's your work, your team hence your instruction."
		},
	]

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
