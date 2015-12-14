(function(){

var routerApp = angular.module('routerApp', ["ui.router","ngAnimate","angular-storage","angular-jwt"]);

routerApp.config(function($stateProvider,$urlRouterProvider,$httpProvider, jwtInterceptorProvider){


      //check if user is having token in his localstorage
      jwtInterceptorProvider.tokenGetter = function(store)
      {

        return store.get("jwt");
      }

      $httpProvider.interceptors.push('jwtInterceptor');


       $urlRouterProvider.otherwise("/home");

       $stateProvider.state("home",{

			url:"/home",
			templateUrl:"templates/home.html",
			controller:"HomeController"

       });

       $stateProvider.state("login",{

      url:"/login",
      templateUrl:"templates/login.html",
      controller:"LoginController"

       });

       $stateProvider.state("map",{

      url:"/map",
      templateUrl:"templates/map.html",
      controller:"MapController",
      data:{requiresLogin:true
      }

       });

       $stateProvider.state("about",{

			url:"/about",
			templateUrl:"templates/about.html",
			controller:"AboutController"

       });

       //nested views

       $stateProvider.state("home.list",{

       		 	url: '/list',
        		templateUrl: 'templates/home-list.html',
        		controller: "BookListController"

       });


   });
routerApp.run(function($state,$rootScope,store){

  //changing route event
  $rootScope.$on("$stateChangeStart",function(e,to){

      if(to.data && to.data.requiresLogin)
      {
        console.log(to.data);
        if(!store.get("jwt"))
        {
            e.preventDefault();
            $state.go("login");
        }
      }

  });

  $rootScope.logMeOff = function()
  {
    store.remove("jwt");
  };


});




}());
  