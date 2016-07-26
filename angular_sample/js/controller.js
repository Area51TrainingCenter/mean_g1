angular.module('myApp.controllers', [])
    .controller('mainCtrl', function($scope, $filter) {
        $scope.message = 'La aplicación ha sido creada';

        $scope.name = "Sergio Brito";

        $scope.toLowerCase = $filter('lowercase')($scope.name);

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
