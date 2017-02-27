(function () {
    'use strict';
    angular.module('cooper').factory('generalService', generalService);
    function generalService($http, $rootScope, $sessionStorage, userService) {
        

        function requestQuote(data) {
            return $http.post("api/getQuote/", data);
        }

        function sendFeedback(data) {
            return $http.post("api/sendFeedback/", data);
        }

        function getCities() {
            return $http.get("cities.json");
        }

        function sendOTP(data) {
            return $http.post("api/sendOtp/", data, { "headers": { "Authorization": "Bearer " + userService.getUserToken() } });
        }

        function updatePhoneNo(data) {
            return $http.post("api/updatePhoneNo/", data, { "headers": { "Authorization": "Bearer " + userService.getUserToken() } });
        }

       
        var service = {
            requestQuote: requestQuote,
            sendFeedback: sendFeedback,
            getCities: getCities,
            updatePhoneNo: updatePhoneNo,
            sendOTP: sendOTP
            
        };
        return service;
    }
})();
