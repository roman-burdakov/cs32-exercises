describe('postList directive', function(){
  var compiledDirective, controller, posts;
  var mockPost = {
    id: 1
  };
  beforeEach(function(){
    module('templates', 'directings');
    module(function($provide){
      $provide.service('posts', function(){
        this.get = function(){
        };
      });
    });

    inject(function($compile, $rootScope, $injector){
      var element = angular.element('<post-list></post-list>');
      var scope = $rootScope.$new();
      compiledDirective = $compile(element)(scope);
      scope.$digest();
      controller = compiledDirective.controller('postList');

      posts = $injector.get('posts');
    });

  });
  describe("controller", function(){
    describe("display", function(){
      it("should set a current post on the service", function(){
        expect(posts.current).toBeUndefined();
        controller.display(mockPost);
        expect(posts.current).not.toBeUndefined();
        expect(posts.current.id).toBe(mockPost.id);
      });
    });
  });

});
