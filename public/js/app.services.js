angular.module('pokeApp.services', [])
    .service('pokemonServices', function(){
      var _pokemons = [];
      this.getPokemons = function(){
        return _pokemons;
      }
      this.setPokemons = function(pokemons){
        _pokemons = pokemons;
      }
    })
