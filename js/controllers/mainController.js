app.controller('mainController', mainController);

function mainController($scope, $rootScope, $state, $http, userService, toaster, $stateParams, browser, $auth) {
    $rootScope.bodyVisible = false;
    $rootScope.resetPass = false;
    $rootScope.forgetPass = false;
    $rootScope.createacnt = false;
   $rootScope.isloggedIn = userService.isLoggedIn();

    
    $scope.showForgetPwdForm = false;
    $scope.showForgetBtn = true;
    console.log($rootScope.footerVisible);
    if ($rootScope.isloggedIn) {
        $scope.name = userService.getUserName();
    }

    $scope.authenticate = function (provider) {
        console.log("Google...");
        $auth.authenticate(provider).then(function (response) {
            console.log(response);
            saveUserData(response.data);
           $rootScope.isloggedIn = true;
            $state.go('user');
            toaster.pop("success", "Success", "User signed up");
        }).catch(function (err) {
            console.log(err);
            if (err.data.message) {
                toaster.pop("error", "Error", err.data.message);
            }
            else {
                toaster.pop("error", "Invalid Data", "Please try again after sometime");
            }
            
        });
    };

    $scope.login = function () {
        console.log("Pwd");
        userService.grantAccess($scope.loginData).success(function (response) {

            saveUserData(response);
            $rootScope.loggedOut = false;
           $rootScope.isloggedIn = true;
            $state.go("user.tranxaction");
            toaster.pop("success", "Success", "User Logged In");

        })
            .error(function (error) {
                toaster.pop("error", "Invalid Data", "Please try again after sometime");
            });
    };
    $scope.signup = function () {
        $scope.signupData['verified'] = false;
        if ($scope.errorMessage)
            return;
        userService.signup($scope.signupData).success(function (response) {
            saveUserData(response);
           $rootScope.isloggedIn = true;
            $state.go('user.tranxaction');
            toaster.pop("success", "Success", "User signed up");


        })
            .error(function (err) {
                if (err.message) {
                    toaster.pop("error", "Error", err.message);
                }
                else {
                    toaster.pop("error", "Invalid Data", "Please try again after sometime");
                }

            });

    }

    $scope.checkLength = function (value) {

        $scope.errorMessage = value.length < 6 ? "Password should have atleast 6 characters." : "";

    }
    $scope.forgetPwd = function(){
        $scope.forgetPass = true;

    }
    $scope.createacnt= function(){
        $scope.createAccount = true;
    }

    

    function saveUserData(response) {
        console.log(response);
        userService.setUserToken(response.token);
        var name = response.user.fname + " " + response.user.lname;
        $scope.name = name;
        userService.setUserName(name);
        userService.setEmail(response.user.email);
        if (response.user.phoneNumber) {
            userService.setPhoneNumber(response.user.phoneNumber);
        }
    }

    $scope.comparePassword = function (password) {
        $scope.errorMessage = $scope.signupData.password == password ? "" : "Password do not match";


    }

    $scope.compareNewPassword = function (password) {
        $scope.newPasswordErrMsg = $scope.newPassword.password == password ? "" : "Password do not match";


    }

    $scope.resetPassword = function () {
        userService.resetPassword($scope.forgetPassword).success(function (response) {
            toaster.pop("success", "Success", "Reset link has been sent.");
            $scope.forgetPasswordMsg = true;

        })
            .error(function (error) {
                toaster.pop("error", "Error", "Please try again after sometime");
            });
    };

    $scope.setNewPassword = function () {
        if (!$scope.newPasswordErrMsg) {
            if ($stateParams.token) {
                console.log($stateParams.token);
                $scope.newPassword.token = $stateParams.token;
                console.log($scope.newPassword);
                userService.setPassword($scope.newPassword).success(function (response) {
                    console.log(response);
                    toaster.pop("success", "Success", "Password has been changed.");
                    $scope.newPasswordSuccessMsg = "Password has been changed.";

                })
                    .error(function (error) {
                        console.log(error);
                        toaster.pop("error", "Error", "Please try again after sometime.");
                        $scope.newPasswordErrMsg = "Please try again after sometime";
                    });
            }
            else {
                $scope.newPasswordErrMsg = "Invalid Token.";
            }
        }
    }
}