(function () {
    'use strict';

    angular.module('cooper').factory('userService', userService);

    function userService($http, $rootScope, $localStorage) {
        var url = "http://beta.tranxact.co/";
        // var baseUrl = appSetting.apiBaseUrl;
        function signup(signupData) {
            return $http.post(url + "api/signup", signupData);

        }

        function grantAccess(loginData) {
            var data = {
                "email": loginData.email,
                "password": loginData.password
            };
            return $http.post(url + "api/login", data);
        }


        function verify(confirmationCode, token) {
            return $http.get(url + "api/verify/" + confirmationCode + "/" + token);
        }

        function setUserName(user) {
            $localStorage.username = user;
        }
        function setEmail(email) {
            $localStorage.email = email;
        }
        function setPhoneNumber(phoneNumber) {
            $localStorage.phoneNumber = phoneNumber;
        }

        function getPhoneNumber(phoneNumber) {
            return $localStorage.phoneNumber;
        }

        function getEmail(email) {
            return $localStorage.email;
        }
        function getUserName() {
            return $localStorage.username;
        }
        function setUserToken(token) {
            $localStorage.token = token;
        }
        function getUserToken() {
            return $localStorage.token;
        }
        function isLoggedIn() {
            return Boolean($localStorage.username);
        }
        function logout() {
            //$localStorage.$reset();
            localStorage.clear();

        }
        function resendVerification() {
            return $http.post(url + "api/resendVerification", {}, { "headers": { "Authorization": "Bearer " + $localStorage.token } });
        }

        function resetPassword(forgetPasswordData) {
            return $http.post(url + "api/resetPassword", forgetPasswordData);
        }

        function setPassword(forgetPasswordData) {
            return $http.post(url + "api/setNewPassword", forgetPasswordData);
        }

        function checkVerificationStatus() {
            return $http.post(url + "api/checkStatus", {}, { "headers": { "Authorization": "Bearer " + $localStorage.token } });
        }



        var service = {
            signup: signup,
            grantAccess: grantAccess,
            setUserName: setUserName,
            getUserName: getUserName,
            getUserToken: getUserToken,
            isLoggedIn: isLoggedIn,
            logout: logout,
            setUserToken: setUserToken,
            setEmail: setEmail,
            getEmail: getEmail,
            resetPassword: resetPassword,
            setPassword: setPassword,
            checkVerificationStatus: checkVerificationStatus,
            resendVerification: resendVerification,
            verify: verify,
            setPhoneNumber: setPhoneNumber,
            getPhoneNumber: getPhoneNumber

        }
        return service;
    }
})();
