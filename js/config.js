app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $authProvider) {

    $locationProvider.html5Mode(true);
    $authProvider.google({
        clientId: "297053271974-b1tovvb4l2k6jdfp0a5q2am4pd8fe3l6.apps.googleusercontent.com"
    });

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state("user.tranxaction",{
            url: "/tranxactions",
            templateUrl: "/templates/mytranxactions.html",
            controller: "tranxaction"
            
        })
        .state('home',{
            url: '/home',
            templateUrl: '/templates/home.html',
            controller: 'homeController'
        })
        .state('createinvoice', {
            url: '/createinvoice',
            templateUrl: '/templates/invoice/invoice.html',
            controller: 'invoiceController'
        })
        .state('verify', {
            url: '/verify/:confirmation_code/:token',
            templateUrl: '/templates/home.html',
            controller: 'verifyController'
        })
        .state('mobile', {
            url: '/mobile/signup',
            templateUrl: '/templates/mobile/signup.html',
            controller: 'mobileController'
        })
        .state('pricing', {
            url: '/pricing',
            templateUrl: '/templates/pricing.html',
            controller: 'pricingController'
        })
        .state('project', {
            url: '/project',
            templateUrl: '/templates/project/project.html',
            controller: 'projectController'
        })
        .state('invoice', {
            url: '/project/invoice',
            templateUrl: '/templates/project/invoice.html',
            controller: 'invoiceController'
        })
         .state('reset', {
             url: '/reset/:token',
             templateUrl: '/index.html',
             controller: 'mainController',
             onEnter: function () {
                 $('#resetPasswordModal').modal('show');

             }
         })
        .state('createcontract', {
            url: '/createcontract',
            templateUrl: '/templates/question.html',
            controller: 'contractController',
            onEnter: function () {
                $('body').removeClass("modal-open");
                $('body').css("padding-right", "0px");
            }
        })
        
        .state('createnda', {
            url: '/createnda',
            templateUrl: '/templates/nda/question.html',
            controller: 'ndaController',
            onEnter: function () {
                $('body').removeClass("modal-open");
                $('body').css("padding-right", "0px");
            }
        })
        .state("viewInvoice", {
            url: '/viewInvoice/:id',
            templateUrl: '/templates/project/viewInvoice.html',
            controller: 'viewInvoiceController',
            onEnter: function () {
                $('body').removeClass("modal-open");
                $('body').css("padding-right", "0px");
            }
        })
        .state('createemployeeagreement', {
            url: '/createemployeeagreement',
            templateUrl: '/templates/employeeAgreement/question.html',
            controller: 'employeeAgreementController',
            onEnter: function () {
                $('body').removeClass("modal-open");
                $('body').css("padding-right", "0px");
            }
        })
        .state('createappointmentLetter', {
            url: '/createappointmentLetter',
            templateUrl: '/templates/appointmentLetter/question.html',
            controller: 'appointmentLetterController',
            onEnter: function () {
                $('body').removeClass("modal-open");
                $('body').css("padding-right", "0px");
            }
        })
        .state('reviewAppointmentLetter', {
            url: '/reviewAppointmentLetter/:id',
            templateUrl: '/templates/appointmentLetter/review.html',
            controller: 'appointmentLetterReviewController',
            onEnter: function () {
                $('body').removeClass("modal-open");
                $('body').css("padding-right", "0px");
            }
        })
        .state('reviewEmployeeAgreement', {
            url: '/reviewEmployeeAgreement/:id',
            templateUrl: '/templates/employeeAgreement/review.html',
            controller: 'employeeAgreementReviewController',
            onEnter: function () {
                $('body').removeClass("modal-open");
                $('body').css("padding-right", "0px");
            }
        })
        .state('privacy', {
            url: '/privacy',
            templateUrl: '/templates/privacy.html',
            controller: function ($rootScope) {
                $rootScope.bodyVisible = true;
                $rootScope.footerVisible = false;
            }
        })
        .state('validity', {
            url: '/validity',
            templateUrl: '/templates/validity.html',
            controller: function ($rootScope) {
                $rootScope.bodyVisible = true;
                $rootScope.footerVisible = false;
            }
        })
        .state('disclaimer', {
            url: '/disclaimer',
            templateUrl: '/templates/disclaimer.html',
            controller: function ($rootScope) {
                $rootScope.bodyVisible = true;
                $rootScope.footerVisible = false;
            }
        })
       .state('contractReview', {
           url: '/contractReview/:id',
           templateUrl: '/templates/contracts/reviewContract.html',
           controller: 'contractReviewController',
           resolve: {
               isVerified: function (userService, $state, $rootScope) {
                   $rootScope.bodyVisible = false;
                   return userService.checkVerificationStatus().then(function (response) {
                       $rootScope.bodyVisible = true;
                       return response.data.status;

                   }).catch(function (err) {
                       userService.logout();
                       $rootScope.bodyVisible = true;
                       $state.go('home');
                   });
               }

           }
       })
        .state('ndaReview', {
            url: '/ndaReview/:id',
            templateUrl: '/templates/nda/reviewNda.html',
            controller: 'ndaReviewController',
            resolve: {
                isVerified: function (userService, $state, $rootScope) {
                    $rootScope.bodyVisible = false;
                    return userService.checkVerificationStatus().then(function (response) {
                        $rootScope.bodyVisible = true;
                        return response.data.status;

                    }).catch(function (err) {
                        userService.logout();
                        $rootScope.bodyVisible = true;
                        $state.go('home');
                    });
                }

            }
        })

    .state('viewContract', {
        url: '/contract/:id',
        templateUrl: '/templates/contracts/contractView.html',
        controller: 'viewContractController'
    })
    .state('signContract', {
        url: '/signContract/:id',
        templateUrl: '/templates/contracts/signContract.html',
        controller: 'signContractController'
    })
    .state('signappointmentLetter', {
        url: '/signappointmentLetter/:id',
        templateUrl: '/templates/appointmentLetter/sign.html',
        controller: 'signAppointmentLetterController'
    })
    .state('signemployeeAgreement', {
        url: '/signemployeeAgreement/:id',
        templateUrl: '/templates/employeeAgreement/signemployeeAgreement.html',
        controller: 'signAgreementController'
    })

    .state('signNDA', {
        url: '/signNda/:id',
        templateUrl: '/templates/nda/signNDA.html',
        controller: 'signNDAController'
    })
    .state('team', {
        url: '/team',
        templateUrl: '/templates/team.html',
        controller: function ($rootScope) {
            $rootScope.bodyVisible = true;
            $rootScope.footerVisible = false;
        }
    })
    .state('user', {
        url: '/userdashboard',
        templateUrl: '/templates/dashboard/dashboard.html',
        controller: 'dashboardController',
        onEnter: function ($rootScope) {
            $rootScope.loginPage = true ;
        },
        resolve: {
            isVerified: function (userService, $state, $rootScope) {
                $rootScope.bodyVisible = false;
                return userService.checkVerificationStatus().then(function (response) {
                    $rootScope.bodyVisible = true;
                    console.log(response);
                    $rootScope.hasPhone = response.data.hasPhone;
                    $rootScope.projectCount = response.data.projectCount;
                    return response.data.status;
                }).catch(function (err) {
                    userService.logout();
                    $rootScope.bodyVisible = true;
                    $state.go('home');
                });
            }

        }

    })
});