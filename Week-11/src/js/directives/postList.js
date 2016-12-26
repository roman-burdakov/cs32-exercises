angular.module('directings')
.directive('postList', ['posts', function(posts){
  return {
    templateUrl: "templates/post-list.html",
    controller: function(){
      var lc = this;
      lc.posts = posts;
      if(posts.data.length === 0){
        posts.get();
      }
      
      lc.display = function(post){
        posts.current = post;
      };
    },
    controllerAs: 'lc'
  };
}]);
