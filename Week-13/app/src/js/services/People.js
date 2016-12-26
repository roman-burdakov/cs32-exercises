angular.module('resthitter').factory('People', ['$resource', function($resource){
  return $resource('http://localhost:7000/people/:id');
}]);
