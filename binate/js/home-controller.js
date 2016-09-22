'use strict';


app.controller('homeController', ['$rootScope', '$document', '$scope', '$timeout', '$q', '$window', 'ngDialog', function ($rootScope, $document, $scope, $timeout, $q, $window, ngDialog) {



	//Toggle item
	$scope.$window = $window;
	$scope.open = false;
	$scope.openTwo = false;

	$window.onclick = function (event) {
		var fist_parent = angular.element(event.target).parent()[0];
		var second_parent = angular.element(fist_parent).parent()[0];
		var elementClasses = angular.element(second_parent).parent()[0].classList;

		if(angular.element(event.target)[0].classList.contains('custom-checkbox-squire') || angular.element(event.target)[0].classList.contains('ng-untouched'))
			return;
		if(elementClasses.contains('dropdown-panel') || fist_parent.classList.contains('dropdown-panel') || angular.element(event.target)[0].classList.contains('dropdown-custom')){
			return;
		}
		if(elementClasses.contains('dropdown-panel2') || fist_parent.classList.contains('dropdown-panel2') || angular.element(event.target)[0].classList.contains('dropdown-custom2')){
			return;
		}
	// 	$scope.open = false;
	// $scope.openTwo = false;
		//  console.log(elementClasses.contains('dropdown-panel2'));
	}

	// function closeSearchWhenClickingElsewhere(event, callbackOnClose) {
	// 	var clickedElement = event.target;
	// 	if (!clickedElement) return;

	// 	var elementClasses = clickedElement.classList;
	// 	console.log(elementClasses);
	// 	var clickedOnSearchDrawer = elementClasses.contains('dropdown-custom') || elementClasses.contains('dropdown-panel') || (clickedElement.parentElement !== null && clickedElement.parentElement.classList.contains('dropdown-panel'));

	// 	if (!clickedOnSearchDrawer) {
	// 		callbackOnClose();
	// 		return;
	// 	}
	// }


	// $scope.open = false;
	// $scope.toggleSearch = function () {
	// 	console.log('toggle')
	// 	$scope.open = !$scope.open;
	// 	$scope.openTwo = false;

	// 	if ($scope.open) {
	// 		$scope.$window.onclick = function (event) {
	// 			closeSearchWhenClickingElsewhere(event, $scope.toggleSearch);
	// 		};
	// 	} else {
	// 		$scope.open = false;
	// 		$scope.$window.onclick = null;
	// 		$scope.$apply();
	// 	}
	// };

	// $scope.toggleSearchTwo = function () {
	// 	console.log('toggle')
	// 	$scope.openTwo = !$scope.openTwo;
	// 	$scope.open = false;

	// 	if ($scope.openTwo) {
	// 		$scope.$window.onclick = function (event) {
	// 			closeSearchWhenClickingElsewhereTwo(event, $scope.toggleSearchTwo);
	// 		};
	// 	} else {
	// 		$scope.openTwo = false;
	// 		$scope.$window.onclick = null;
	// 		$scope.$apply();
	// 	}
	// };

	// function closeSearchWhenClickingElsewhereTwo(event, callbackOnClose) {

	// 	var clickedElement = event.target;
	// 	if (!clickedElement) return;

	// 	var elementClasses = clickedElement.classList;
	// 	var clickedOnSearchDrawer = elementClasses.contains('dropdown-custom2') || elementClasses.contains('dropdown-panel2') || (clickedElement.parentElement !== null && clickedElement.parentElement.classList.contains('dropdown-panel2'));

	// 	if (!clickedOnSearchDrawer) {
	// 		$scope.open = false;
	// 		callbackOnClose();
	// 		return;
	// 	}
	// }

	$scope.technologies = [
		{
			id: 1,
			name: "Python",
			model: "Python"
		},
		{
			id: 2,
			name: "Django",
			model: "Django"
		},
		{
			id: 3,
			name: "Angularjs",
			model: "Angularjs"
		},
		{
			id: 4,
			name: "Java",
			model: "Java"
		},
		{
			id: 5,
			name: "C",
			model: "C"
		},
		{
			id: 6,
			name: "C++",
			model: "C_plus_plus"
		},
		{
			id: 7,
			name: ".Net",
			model: "Net"
		},
		{
			id: 8,
			name: "PHP",
			model: "PHP"
		},
		{
			id: 9,
			name: "Magento",
			model: "Magento"
		},
	]


	$scope.bannerImages = [
		{
			img: "img/binate-banner-01.jpg",
			title1: "Entering a new era of transformations, we refocus energies towards “Creating memorable digital experiences everyday” for our customers.",
			captionAlign: "right-align"
		},
		{
			img: "img/binate-banner-02.jpg",
			title1: "Our client’s priorities drive our business focus. Binate's industry knowledge helps solve the toughest problems. For us, “good enough” is not enough.",
			captionAlign: "right-align"
		},
		{
			img: "img/binate-banner-03.jpg",
			title1: "we can deliver 25% - 30% efficiency gains in the first 6 to 12 months of a client relationship versus waiting for savings in the off years.",
			captionAlign: "left-align"
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
	$scope.changeAnimation = function () {

		var elements = document.getElementsByClassName('car-container');
		var $elements = angular.element(elements);

		$elements.removeClass('animated ' + $scope.animation.previous);
		$elements.addClass('not-visible');

		$scope.animation.previous = $scope.animation.current;
		$document[0].dispatchEvent(new CustomEvent('scroll'));
	};

	$scope.animateElementIn = function ($el) {
		$el.removeClass('not-visible');
		$el.addClass('animated ' + $scope.animation.current);
	};

	$scope.animateElementOut = function ($el) {
		$el.addClass('not-visible');
		$el.removeClass('animated ' + $scope.animation.current);
	};

	$scope.animateElementfadeInRight = function ($el) {
		$el.removeClass('not-visible');
		$el.addClass('animated fadeInRight');
	};

	$scope.animateElementfadeOutRight = function ($el) {
		$el.addClass('not-visible');
		$el.removeClass('animated fadeInRight');
	};



	//Application Form
    $scope.teamqueryModal = function () {
        ngDialog.open({
            template: 'queryModal',
            controller: 'homeController',
            className: 'ngdialog-theme-default'
        });
    };

}]); 
