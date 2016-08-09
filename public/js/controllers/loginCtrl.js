angular.module('pokeApp.loginCtrl', [])
    .controller('loginCtrl', function($http, pokemonServices) {
        var vm = this;
        vm.message = "Este es el login";
    })
