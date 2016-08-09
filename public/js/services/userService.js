angular.module('pokeApp.userServices', [])
    .service('User', function($http, $q) {
        var _users = undefined;
        var _user = undefined;

        this.all = function(){
          if (!_users) {
              var deferred = $q.defer();

              $http.get("/api/users/")
                  .success(function(response) {
                      deferred.resolve(response);
                  })
                  .error(function(response) {
                      deferred.reject(response);
                  });
              _users = deferred.promise
          }
          return _users;
        }

        this.get = function(id){
          return _user;
        }
        this.create = function(){
          return _user;
        }
        this.update = function(id){
          return _user;
        }
        this.delete = function(id){
          return _user;
        }
    })
