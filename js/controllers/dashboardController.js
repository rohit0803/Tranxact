app.controller('dashboardController', function ($scope, $state, toaster, $http, generalService, $rootScope, userService,  isVerified ) {
    console.log(isVerified);
    $rootScope.bodyVisible = false;
    $rootScope.footerVisible = false;
    $scope.contractForSettingEndDate = {};
    console.log($rootScope.footerVisible);
    $scope.name = userService.getUserName();
    angular.element(document.getElementsByClassName("modal-backdrop fade in")).remove();
    console.log($rootScope.hasPhone);
    if (!$rootScope.hasPhone) {
        $('#updatePhoneNoModal').modal({ show: true, backdrop: 'static', keyboard: false });
    }
    $scope.activeTab = 1;
    $scope.project = {};
    $scope.project.documentType = "GeneralServiceAgreement";
    // $scope.contractandinvoice = function () {
    //     if ($scope.userConfirmed) {
    //         $scope.project.documentType = "GeneralServiceAgreement";
    //         $scope.invoiceModal = false;
    //         $("#chooseTemplateModal").modal("show");
    //         $scope.invoiceRequired = true;
    //         // $state.go('createcontract');
    //     }
    //     else
    //         $("#notVerifiedModal").modal("show");
    // }

    // $scope.sendInvoiceReminder = function (invoice) {
    //     invoiceService.sendReminder(invoice).success(function (response) {
    //         toaster.pop("success", "Sent", "The other party will receive the reminder");
    //     }).error(function (error) {
    //         toaster.pop("error", "Reminder not sent", "An error has occured while sending reminder");
    //     })
    // }

    // $scope.editOrCreateProject = function () {
    //     //if ($scope.showUpdateButton) {
    //     //    $("#projectModal").modal("hide");
    //     //}
    //     //else if ($scope.showCreateButton) {

    //     if ($scope.invoiceModal) {
    //         //  console.log($scope.project);
    //         $scope.project.documentType = "Invoice";
    //     }

    //     //console.log($scope.project.name, $scope.project.info)

    //     if (!$scope.showInvoiceProjects) {
    //         if (!$scope.project.name || !$scope.project.info) {
    //             return;
    //         }
    //         $scope.project.createdDate = new Date();
    //         projectService.create($scope.project).success(function (response) {
    //             toaster.pop("success", "Created", "Project Added");
    //             $("#projectModal").modal("hide");
    //             $rootScope.project = response._id;
    //             var stateName = "create" + response.documentType;
    //             console.log(stateName);
    //             //$scope.project = {};
    //             $("#chooseTemplateModal").modal("hide");
    //             if (!$scope.invoiceModal) {

    //                 if (!$scope.invoiceRequired)
    //                     $state.go(stateName, { action: 'Get', invoice: false, project: $rootScope.project });
    //                 else {
    //                     $state.go(stateName, { action: 'Get', invoice: true, project: $rootScope.project });
    //                 }
    //             }
    //             else {
    //                 //    if ($scope.showInvoiceProjects) {
    //                 //        console.log($scope.invoiceProject)
    //                 //        $rootScope.project = $scope.invoiceProject;
    //                 //    }
    //                 $state.go("invoice", { projectId: $rootScope.project });
    //                 //}
    //                 //   $scope.contract();
    //             }
    //         })
    //             .error(function (err) {
    //                 console.log(err);
    //             })
    //     }
    //     else {
    //         if (!$scope.invoiceProject) {
    //             return
    //         }
    //         console.log($scope.invoiceProject)
    //         $rootScope.project = $scope.invoiceProject;
    //         $state.go("invoice", { projectId: $rootScope.project });
    //     }
    // }

    // $scope.details = function (id) {
    //     $state.go('details', { id: id });
    // }
    // $scope.viewInvoice = function (id) {
    //     //invoiceService.getById(id).success(function (response) {
    //     //    invoiceService.invoice = response;
    //     //    $state.go("invoice");
    //     //}).error(function () {
    //     //    console.log(error);
    //     //});

    //     $state.go("invoice", { id: id });
    // }


    // $scope.deleteInvoice = function (id) {
    //     invoiceService.deleteInvoice(id).success(function () {
    //         toaster.pop("success", "Auto save", "Invoice Deleted");
    //         for (var i = 0; i < $scope.invoices.length; i++) {
    //             if ($scope.invoices[i]._id == id) {
    //                 $scope.invoices.pop(i);
    //             }
    //         }
    //         getInvoices();

    //     })
    //     .catch(function (error) {
    //         toaster.pop("error", "Error", "An error has occured");
    //         console.log(error);
    //     })
    // }

    // $scope.invoice = function () {
    //     //if (!$rootScope.projectCount) {
    //     //    $("#createProjectModal").modal("show");
    //     //}
    //     //else {
    //     //$state.go("project");
    //     //}
    //     $scope.invoiceModal = true;
    //     $("#chooseTemplateModal").modal("show");
    // }
    // $scope.sendFeedback = function () {
    //     var data = { "feedback": $scope.feedback, "email": $scope.name };
    //     generalService.sendFeedback(data).success(function () {
    //         //$scope.showSuccessMsg = true;
    //         //$scope.showErrorMsg = false;
    //         $scope.feedback = "";
    //         //$scope.showSuccessMsg = "We have received your feedback."
    //         $("#feedbackModal").modal("hide");
    //         toaster.pop("success", "Feedback", "We have received your feedback.");
    //     }).error(function () {
    //         $scope.showErrorMsg = true;
    //         $scope.showSuccessMsg = false;
    //         // toaster.pop("error", "Error", "An error has occured.");
    //     })
    // }
    // $scope.contract = function () {
    //     if ($scope.userConfirmed) {
    //         $scope.project.documentType = "GeneralServiceAgreement";
    //         $scope.invoiceModal = false;
    //         $("#chooseTemplateModal").modal("show");
    //         // $state.go('createcontract');
    //     }
    //     else
    //         $("#notVerifiedModal").modal("show");
    // }


    userService.checkVerificationStatus().success(function (response) {
        console.log(response);
        if (!response.status) {
            $scope.userConfirmed = false;
        }
        else
            $scope.userConfirmed = true;
    }).error(function (err) {

    })


    

    //getProjects();

   //  getInvoices();

   //  getProjectWithInvoices();

   //  function getProjectWithInvoices() {
   //      projectService.getProjectWithInvoices().success(function (response) {
   //          console.log(response);
   //          //$rootScope.bodyVisible = true;
   //          $scope.projectWithInvoices = response;
   //          //$scope.showType = name;
   //      })
   // .error(function (err) {
   //     console.log(err);
   // })
   //  }

   //  //getContracts();
   //  //function getContracts() {

   //  //}
   //  function getInvoices() {
   //      invoiceService.get().success(function (response) {
   //          console.log(response);
   //          $scope.invoices = response;
   //      })
   //      .error(function (err) {
   //          console.log(err);
   //      })
   //  }

   //  $scope.openModalForInvoice = function () {
   //      $scope.invoiceModal = true;
   //      $("#chooseTemplateModal").modal("show");

   //  }

   //  $scope.deleteProject = function (id) {
   //      console.log(id);
   //      projectService.deleteProject(id).success(function (res) {
   //          //alert("Contract Deleted Successfully");
   //          toaster.pop("success", "Deleted", "Project Deleted Successfully");
   //          getProjects($scope.showType);
   //      }).error(function (err) {
   //          console.log(err);
   //          toaster.pop("error", "Error", "An error has occured");
   //      });

   //  }

   //  $scope.reviewContract = function (contract) {
   //      if (contract) {
   //          console.log(contract);
   //          var state = "review" + contract.documentType[0].toUpperCase() + contract.documentType.substring(1);
   //          $state.go(state, { id: contract._id });
   //      }
   //  }
   //  $scope.viewContract = function (contractId) {
   //      console.log(contractId);
   //      $state.go('viewContract', { id: contractId });
   //  }


   //  $scope.sendNotification = function (contract) {
   //      if (contract.status == 'Sent to other party') {
   //          contractService.sendNotification(contract).success(function () {
   //              toaster.pop("success", "Sent", "The other party will receive the reminder");
   //          }).error(function () {
   //              toaster.pop("error", "Reminder not sent", "An error has occured while sending reminder");
   //          });
   //      }
   //  }

   //  $scope.setModalData = function (contract) {
   //      console.log("here");
   //      if (contract.document) {
   //          $scope.contractForSettingEndDate.id = contract.document._id;
   //          $scope.contractForSettingEndDate.type = contract.document.contractType;
   //          $scope.contractForSettingEndDate.description = contract.document.workStatement;
   //          $scope.contractForSettingEndDate.startDate = contract.document.startDate;
   //      }
   //  }

   //  $scope.setEndDate = function () {
   //      console.log(new Date($scope.contractForSettingEndDate.startDate), $scope.contractEndDate);
   //      //console.log($scope.contractForSettingEndDate.startDate > $scope.contractEndDate);
   //      if (!(new Date($scope.contractForSettingEndDate.startDate) > $scope.contractEndDate)) {
   //          $scope.dateErrorMsg = "";
   //          var data = { id: $scope.contractForSettingEndDate.id, endDate: $scope.contractEndDate };
   //          documentService.setEndDate(data).success(function (response) {
   //              console.log(response);
   //              toaster.pop("success", "Sent", "End date has been set.");
   //              $("#setDateModal").modal("hide");
   //              $scope.contractForSettingEndDate = {};
   //              getProjects($scope.showType);
   //          }).error(function () {
   //              toaster.pop("error", "Failure", "An error has occured while setting end date.");
   //          });
   //      }
   //      else {
   //          //console.log(here);
   //          $scope.dateErrorMsg = "End date can not be less than start date.Please choose a valid date."
   //      }

   //  }

   //  $scope.sendVerification = function () {
   //      userService.resendVerification().success(function (response) {
   //          if (!response.sent) {
   //              toaster.pop("success", "Not sent", "You are verified please refresh the page.");
   //          }
   //          else
   //              toaster.pop("success", "Sent", "Verification email has been sent again.");
   //      }).error(function (err) {
   //          toaster.pop("error", "Not sent", "An error has occured while sending email");
   //      });
   //  }

    // function getContracts() {
    //     contractService.getAllContracts().success(function (response) {
    //         $scope.contracts = response;
    //         $scope.ndas = [];
    //         $scope.docCount = $scope.contracts.length;
    //         console.log($scope.docCount);
    //         console.log(response);
    //     }).error(function (err) {
    //         console.log(err);
    //     });
    // }

    // function getNDAs() {
    //     ndaService.getAllNDA().success(function (response) {
    //         $scope.ndas = response;
    //         $scope.contracts = [];
    //         $scope.documents = [];
    //         $scope.docCount = $scope.ndas.length;
    //         console.log($scope.docCount);
    //     }).error(function (err) {
    //         console.log(err);
    //     });
    // }

    // function getAllDocuments(name) {
    //     documentService.getAllDocument(name).success(function (response) {
    //         $scope.documents = response;

    //         $scope.docCount = $scope.documents.length;
    //     }).error(function (err) {
    //         console.log(err);
    //     });
    // }

    // $scope.deleteDocument = function (document) {
    //     console.log(document);
    //     documentService.deleteDocument(document._id).success(function () {
    //         toaster.pop("success", "Deleted", document.documentName + " Deleted Successfully");
    //         getAllDocuments(document.documentType);
    //     }).error(function () {
    //         toaster.pop("error", "Error", "An error has occured.");
    //     });
    // }

    // $scope.reviewDocument = function (document) {

    //     if (document.documentType == "appointmentLetter")
    //         $state.go("reviewAppointmentLetter", { id: document._id });
    //     else if (document.documentType == "employeeAgreement")
    //         $state.go("reviewEmployeeAgreement", { id: document._id })
    // }


    // $scope.sendDocumentReminder = function (document) {
    //     if (document.status == 'Sent to other party') {
    //         documentService.sendNotification(document).success(function () {
    //             toaster.pop("success", "Sent", "The other party will receive the reminder");
    //         }).error(function () {
    //             toaster.pop("error", "Reminder not sent", "An error has occured while sending reminder");
    //         });
    //     }
    // }

    // $scope.$watch("docType", function (newValue, oldValue) {
    //     console.log(newValue, oldValue);
    //     getProjects(newValue);
    //     //if (newValue == "Contract") {
    //     //    getContracts();
    //     //}
    //     //else if (newValue == "NDA") {
    //     //    getNDAs();
    //     //}
    //     //else {
    //     //    getAllDocuments(newValue);
    //     //}
    // })

    // $scope.reviewNDA = function (id) {
    //     $state.go("ndaReview", { id: id });
    // }

    // $scope.deleteNDA = function (id) {
    //     ndaService.deleteNDA(id).success(function () {
    //         toaster.pop("success", "Deleted", "NDA Deleted Successfully");
    //         getNDAs();
    //     }).error(function () {
    //         toaster.pop("error", "Error", "An error has occured.");
    //     });
    // }

    // $scope.sendNDAReminder = function (nda) {
    //     if (nda.status == 'Sent to other party') {
    //         ndaService.sendNotification(nda).success(function () {
    //             toaster.pop("success", "Sent", "The other party will receive the reminder");
    //         }).error(function () {
    //             toaster.pop("error", "Reminder not sent", "An error has occured while sending reminder");
    //         });
    //     }
    // }

    // $scope.sendOTP = function () {
    //     console.log("hrer", $scope.phoneNo);
    //     if ($scope.phoneNo) {

    //         var data = { "phoneNo": $scope.phoneNo };
    //         generalService.sendOTP(data).success(function () {
    //             $scope.otpSent = true;
    //             $scope.showOtpMsg = true;
    //             $scope.otpMsg = "OTP has been sent."
    //         })
    //         .error(function () {
    //             toaster.pop("error", "Error", "An error has occured.");
    //         })
    //     }
    // }

    // $scope.updatePhoneNo = function () {
    //     var data = { "phoneNo": $scope.phoneNo, "otp": $scope.otp };
    //     generalService.updatePhoneNo(data).success(function () {
    //         $scope.otpMsg = "Phone Number verified."
    //         $scope.phoneNoVerified = true;
    //         userService.setPhoneNumber($scope.phoneNo);
    //     })
    //    .error(function () {
    //        toaster.pop("error", "Error", "An error has occured.");
    //    })
    // }

    // $scope.setActiveTab = function (tabNo) {
    //     $scope.activeTab = tabNo;
    // }
    $scope.logout = function () {
        userService.logout();
        console.log("Logged out !!")
       $rootScope.isloggedIn = false;
        $state.go('home');
    }
    
});