angular.module('myApp.controllers', [])
    .run(function($rootScope, $timeout) {
        $timeout(function() {
            $rootScope.myLink = 'http://google.com';
        }, 10000);
    })
    .controller('mainCtrl', function($scope, $filter, cityService) {
        $scope.message = 'La aplicación ha sido creada';

        $scope.name = "Sergio Brito";

        $scope.toLowerCase = $filter('lowercase')($scope.name);

        $scope.isCapitalized = function(str) {
            return str[0] == str[0].toUpperCase()
        }

        console.log(cityService.getCity('SFO'))

        console.log($scope.message);
    })
    .controller('clockCtrl', function($scope) {
        $scope.clock = {
            now: new Date()
        }

        var updateClock = function() {
            $scope.clock.now = new Date();
        }

        $scope.changeClock = function() {
            updateClock();
        }

        setInterval(function() {
            //updateClock();
            $scope.$apply(updateClock)
        }, 1000);
    })
    .controller('citiesCtrl', function($scope, cityService) {
        $scope.cities = cityService.getCities();

        $scope.fields = [
          {placeholder: 'Abreviatura', isRequired:true},
          {placeholder: 'Ciudad', isRequired:true}
        ]

        $scope.searchCity = function(cityAbbr) {
            $scope.city = cityService.getCity(cityAbbr)[0];
            $scope.city.status = true;
        }
        $scope.calculate = function() {
            $scope.result = Number($scope.myNumber) * 5;
        }

        $scope.generateNumber = function() {
            return Math.floor((Math.random() * 10) + 1)
        }

    })
