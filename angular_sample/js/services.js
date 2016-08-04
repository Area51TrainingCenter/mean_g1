angular.module('myApp.services', [])
    .service('cityService', function($filter) {
        var cities = [{
            abbr: 'sfo',
            name: 'San Francisco',
            status: false
        }, {
            abbr: 'lim',
            name: 'Lima',
            status: false
        }, {
            abbr: 'cdmx',
            name: 'Ciudad de México',
            status: false
        }, {
            abbr: 'nyc',
            name: 'New York',
            status: false
        }, {
            abbr: 'tyo',
            name: 'Tokyo',
            status: false
        }, {
            abbr: 'grz',
            name: 'Graz',
            status: false
        }, {
            abbr: 'rom',
            name: 'Roma',
            status: false
        }, {
            abbr: 'mun',
            name: 'Munich',
            status: false
        }, {
            abbr: 'sdq',
            name: 'Santo Domingo',
            status: false
        }, {
            abbr: 'bog',
            name: 'Bogota',
            status: false
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
