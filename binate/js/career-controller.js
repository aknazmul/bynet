'use strict';


app.controller('careerController', [ '$rootScope', '$document', '$scope', function ($rootScope, $document, $scope) {
 
	$scope.jobCirculars = [
		{
			id: 1,
			name: "Software Engineer (Magento)",
			description: "We are currently seeking 5 full-time, on-site Magento developer to join our team for Minneapolis, MN. Duties would primarily consist of developing new projects built using the Magento platform, writing custom extensions, identifying quality community extensions, and architecting new Magento bids. Applicants will be expected to provide examples of work, if available, and may be asked to complete a coding challenge.",
			link: "magento.html",
			experience: "3 to 5 years",
			deadline: "Open"
		},
		{
			id: 2,
			name: "QA/ Software Developer",
			description: "We're looking for a Software Engineer (QA) to join our core team. Write extensive unit test covering corner cases. Need depth Knowledge in Python/Ruby/Javascript/Java",
			link: "qa.html",
			experience: "At least 2 year(s)",
			deadline: "Open"
		},
		{
			id: 3,
			name: "Software Engineer (Java)",
			description: "Interpreting the high level specification, defining the API's using XML schema (or JSON) and creating documentation. Implementing the API using Java, Spring, JAXRS, JAXB, JPA, etc",
			link: "java.html",
			experience: "At least 4 years ",
			deadline: "Open"
		},
		{
			id: 4,
			name: "Software Engineer (Python/Django)",
			description: "We're looking for a Python/Django developer to join our core team. Responsibilities include developing core components for our SaaS based e-commerce platform with Python web frameworks.",
			link: "python.html",
			experience: "At least 3 years ",
			deadline: "Open"
		}
	]


}]); 
