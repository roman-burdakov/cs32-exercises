angular.module('directings')
.controller('DisplayController', ['posts', function(posts){
  var lc = this;
  lc.posts = posts;

}]);
