angular.module('directings')
.service('posts', ['$http', 'users', function($http, users){
  var svc = this;

  svc.data = [];
  svc.get = function(callback){
    $http.get('http://jsonplaceholder.typicode.com/posts/')
      .then(function(response){
        if(Array.isArray(response.data)){
          svc.data = response.data;
          svc.mapUsers();
        }
        if(callback){
          callback();
        }
      });
  };

  svc.mapUsers = function(){
    users.get(function(){
      users.data.forEach(function(user){
        svc.data.forEach(function(post){
          if(user.id == post.userId){
            post.userName = user.name;
          }
        });
      });
    });
  };

  svc.isActive = function(id){
    if(svc.current !== undefined){
      if(svc.current.id == id){
        return true;
      }
    }
    return false;
  };

}]);
