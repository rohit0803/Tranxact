app.controller('tranxaction', function ($scope, $compile, $rootScope, $state, $http,projectService, $stateParams, toaster, userService, generalService){
	console.log("rohit");
	function getProjects(name) {
    console.log(name);
        projectService.getProjects(name).success(function (response) {
            console.log(response);
            $rootScope.bodyVisible = true;
            $scope.tranxactions = response;
            $scope.showType = name;
        })
   .error(function (err) {
       console.log(err);
   })	
}
 getProjects("All")
});
