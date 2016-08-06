angular.module('pokeApp.controllers', [])
    .controller('mainCtrl', function($location) {
      var vm = this;
      vm.goTo = function(route){
        $location.path(route)
      }
    })
    .controller('loginCtrl', function($http, pokemonServices) {
        var vm = this;
        vm.message = "Este es el login";
    })
    .controller('userCtrl', function() {
        var vm = this;
        vm.message = "Este es el admin de usuario";
    })
    .controller('pokemonCtrl', function(pokemonServices) {
        var vm = this;
        vm.message = "Este es el admin de pokemon";

        pokemonServices.getPokemons().then(function(response){
          vm.pokemons = response;
          
        })
    })
