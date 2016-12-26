angular.module('directings')
.service('users', ['$http', function($http){
  var svc = this;
  svc.data = [];
  svc.get = function(callback){
    $http.get('http://jsonplaceholder.typicode.com/users/')
      .then(function(response){
        if(Array.isArray(response.data)){
          svc.data = response.data;
        }
        if(callback){
          callback();
        }
      });
  };

}]);
