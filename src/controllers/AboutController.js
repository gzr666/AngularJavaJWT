(function(){

angular.module("routerApp")
.controller("AboutController",function($scope,$rootScope)

{
	$rootScope.linker = 1;
	 $rootScope.pageClass = 'page-about';
});


}());