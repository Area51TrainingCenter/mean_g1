angular.module('myApp.directives', [])
.directive('yfxattr', function(){
  return {
    restrict: 'A',
    template: '<h1>Directiva attribute</h1>'
    //templateUrl: miarchivo.html
  }
})
.directive('yfxelem', function(){
  return {
    restrict: 'E',
    template: '<h1>Directiva element</h1>'
    //templateUrl: miarchivo.html
  }
})
