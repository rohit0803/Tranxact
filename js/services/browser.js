angular.module('cooper').service('browser', ['$window', function ($window) {


    function checkMobile() {
        var userAgent = $window.navigator.userAgent;
        mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
        console.log(userAgent, mobile);
        return mobile;
    }

    var service = {
        checkMobile: checkMobile
    }
    return service;

}]);