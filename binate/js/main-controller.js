'use strict';

app.controller('mainCtrl', ['$rootScope', '$document', '$timeout', '$scope', 'screenSize', function ($rootScope, $document, $timeout, $scope, screenSize) {
 
//Page scroll
    app.value('duScrollDuration', 800)
    app.value('duScrollBottomSpy', true);
    app.value('duScrollOffset', 30);


//Mobile screenSize
    $scope.isShow = false;
    $scope.isMobile = screenSize.is('xs, sm');
    $scope.isMobile = screenSize.onChange($scope, 'xs, sm', function (isMatch) {
        $scope.isMobile = isMatch;
    });

    console.log($scope.isMobile);

}]);
