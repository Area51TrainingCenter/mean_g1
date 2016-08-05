angular.module('pokeApp.routes', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/',{
    templateUrl : 'views/pages/login.html',
    controller  : 'loginCtrl',
    controllerAs: 'login'
  })
  .when('/login',{
    templateUrl : 'views/pages/login.html',
    controller  : 'loginCtrl',
    controllerAs: 'login'
  })
  .when('/users',{
    templateUrl : 'views/pages/user.html',
    controller  : 'userCtrl',
    controllerAs: 'user'
  })
  .when('/pokemons',{
    templateUrl : 'views/pages/pokemon.html',
    controller  : 'pokemonCtrl',
    controllerAs: 'pokemon'
  })
  .otherwise({
    redirectTo:'/'
  })
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
})
