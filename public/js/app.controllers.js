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

        vm.getPokemons = function() {
            $http
                .get("bd_pokemon/pokemons.json")
                .then(function(response) {
                    pokemonServices.setPokemons(response.data)
                        //console.log(response.data[0])
                })
        }

        vm.getPokemons();

    })
    .controller('userCtrl', function() {
        var vm = this;
        vm.message = "Este es el admin de usuario";
    })
    .controller('pokemonCtrl', function(pokemonServices) {
        var vm = this;
        vm.message = "Este es el admin de pokemon";
        vm.pokemons = pokemonServices.getPokemons();
    })
