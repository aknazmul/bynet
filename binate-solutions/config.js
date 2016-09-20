
app.config(['$routeProvider', function($routeProvider){
$routeProvider
    .when('/',{
        templateUrl: 'template/landing.html',
        controller: 'mainCtrl'
    })
    .when ('/career',{
        templateUrl: 'template/career.html',
        controller: 'mainCtrl'
    })
    .otherwise({
        redirectTo: '#/'
    })
}]);