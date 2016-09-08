'use strict';


app.controller('careerController', [ '$rootScope', '$document', '$scope', function ($rootScope, $document, $scope) {
 
	$scope.jobCirculars = [
		{
			id: 1,
			name: "Software Engineer (Android/iOS)",
			description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
			experience: "3 to 5 years",
			deadline: " 30 September 2016"
		},
		{
			id: 2,
			name: "Software Engineer (Python)",
			description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
			experience: "1 to 3 years",
			deadline: " 10 October 2016"
		},
		{
			id: 3,
			name: "Software Engineer (AngularJS)",
			description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
			experience: "5 to 10 years",
			deadline: " 20 September 2016"
		},
	]


}]); 
