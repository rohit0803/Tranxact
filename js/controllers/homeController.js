app.controller('homeController', function ($scope, $rootScope, $state, $http, browser) {
    $rootScope.bodyVisible = true;
    console.log("In home");
    if ($rootScope.isloggedIn) {
        $state.go("user");
    }
    
});