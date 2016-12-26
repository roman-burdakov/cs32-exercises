describe("ListController", function(){
  var listController, posts;
  var mockPost = {
    id: 1
  };
  beforeEach(function(){
    module('directings');
    module(function($provide){
      $provide.service('posts', function(){
        this.get = function(){

        };
      });
    });

    inject(function($controller, $rootScope, $injector){
      listController = $controller('ListController', {$scope: $rootScope.$new()});
      posts = $injector.get('posts');
    });

  });
  describe("display", function(){
    it("should set a current post on the service", function(){
      expect(posts.current).toBeUndefined();
      listController.display(mockPost);
      expect(posts.current).not.toBeUndefined();
      expect(posts.current.id).toBe(mockPost.id);
    });
  });
});
