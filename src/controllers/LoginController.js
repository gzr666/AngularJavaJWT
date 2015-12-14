(function(){

angular.module("routerApp")
.controller("LoginController",function($scope,$rootScope,authService,$state,store)

{
	$rootScope.linker = 3;
	 $rootScope.pageClass = 'page-about';

	$scope.user={};
	 
	 

	 $scope.postForm = function()
	 {


	 	

	 	authService.loginUser($scope.user).then(
	 		function(result){
	 			

	 			store.set("jwt",result.token)
	 			$state.go("home");

	 			



	 	},function(error){
	 		console.log(error);

	 		

	 	}).then(function(){$scope.user={};

	 	 $scope.userForm.$setPristine();

	 });
	 }

	

	
});


}());