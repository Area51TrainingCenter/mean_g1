angular.module('pokeApp.mainCtrl', [])
    .controller('mainCtrl', function($location) {
        var vm = this;
        vm.goTo = function(route) {
            $location.path(route)
        }
    })
