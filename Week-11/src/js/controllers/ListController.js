angular.module('directings')
.controller('ListController', ['posts', function(posts){
  var lc = this;
  lc.posts = posts;
  if(posts.data.length === 0){
    posts.get();
  }
  
  lc.display = function(post){
    posts.current = post;
  };

}]);
