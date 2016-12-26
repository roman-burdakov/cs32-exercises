angular.module('directings')
.directive('postDisplay', function(){
  return {
    transclude: true,
    scope: {
      post: '=',
      body: '='
    },
    templateUrl: 'templates/post.html'
  };
});
