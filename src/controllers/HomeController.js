(function(){

angular.module("routerApp")
.controller("HomeController",function($scope,$rootScope)

	{
		$rootScope.linker = 0;
		$rootScope.pageClass = 'page-home';
	});


}());