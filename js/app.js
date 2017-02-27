var app = angular.module('cooper', ['ui.router', 'ngStorage', 'satellizer', 'fuelux.wizard', 'routeStyles', 'angular.filter', 'directive.g+signin', 'angular-loading-bar', 'toaster', 'angucomplete']);
app.run(function($rootScope){
    $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }); 
})
//var app = angular.module('cooper', ['ui.router', 'ngStorage','routeStyles', 'angular.filter', 'directive.g+signin','angular-loading-bar','toaster'])

// var apiBase = "http://localhost:8080/api/";
// app.value("appSetting", {
//     "apiBaseUrl": apiBase
// });
