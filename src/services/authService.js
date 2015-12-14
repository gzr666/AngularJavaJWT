(function()
{

	angular.module("routerApp").factory("authService",function($q,$http){

		var API_URL = "http://localhost:8080/api/login";
		var defer = $q.defer();

		var login = function(user)
		{
			
			$http({
				url:API_URL,
				method:"POST",
				data:user


			}).then(function(result){


				
				 defer.resolve(result.data);

			},function(error){

				defer.reject(error);

			});

			return defer.promise;

		}



		return {
			loginUser:login
		};

	})



}());