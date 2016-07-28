angular.module('myApp.services', [])
    .service('cityService', function($filter) {
        var cities = [{
            abbr: 'sfo',
            name: 'San Francisco'
        }, {
            abbr: 'lim',
            name: 'Lima'
        }, {
            abbr: 'cdmx',
            name: 'Ciudad de México'
        }, {
            abbr: 'nyc',
            name: 'New York'
        }, {
            abbr: 'tyo',
            name: 'Tokyo'
        }, {
            abbr: 'grz',
            name: 'Graz'
        }, {
            abbr: 'rom',
            name: 'Roma'
        }, {
            abbr: 'mun',
            name: 'Munich'
        }, {
            abbr: 'sdq',
            name: 'Santo Domingo'
        }, {
            abbr: 'bog',
            name: 'Bogota'
        }];

        this.getCity = function(abr) {
            //buscar la ciudad
            var city = $filter('filter')(cities, {
                abbr: abr
            }, true)
            return city;
        };
        this.getCities = function() {
            return cities;
        }
    })
