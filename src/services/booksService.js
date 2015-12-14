(function()
{

	angular.module("routerApp").factory("bookService",function($q,$http){

		var API_URL = "http://localhost:8080/api/books";
		var defer = $q.defer();

		var getBooks = function()
		{
			
			$http({
				url:API_URL,
				method:"GET"
				


			}).then(function(result){


				
				 defer.resolve(result.data);

			},function(error){

				defer.reject(error);

			});

			return defer.promise;

		}



		return {
			myBooks:getBooks
		};

	})



}());