(function(){

angular.module("routerApp")
.controller("BookListController",function($scope,$rootScope,bookService)

{
	$scope.books=[];
	
	 $rootScope.pageClass = 'page-about';

	 bookService.myBooks().then(function(result){

	 	console.log(result);
	 	$scope.books = result;

	 },
	 function(result){


	 		console.log(result);
	 });


});


}());