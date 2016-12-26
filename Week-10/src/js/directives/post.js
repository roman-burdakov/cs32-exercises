angular.module('directings')
.directive('postDisplay', function(){
  return {
    scope: {
      post: '=',
      body: '='
    },
    templateUrl: 'templates/post.html'
  };
});
