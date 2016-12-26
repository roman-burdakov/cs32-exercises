describe('posts service', function(){
  var posts, $httpBackend;
  var postsMock = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    }
  ];
  var usersMock = [
    {id: 1, username: "some1"},
    {id: 2, username: "some2"},
    {id: 3, username: "some3"},
    {id: 4, username: "some4"}
  ];
  beforeEach(function(){
    module('directings');

    module(function($provide){
      $provide.service('users', function(){
        this.data = [];
        this.get = function(callback){
          this.data = usersMock;
          if(callback){
            callback();
          }
        };
      });
    });

    inject(function($injector){
      posts = $injector.get('posts');
      users = $injector.get('users');
      $httpBackend = $injector.get('$httpBackend');
    });
    $httpBackend
      .when('GET', 'http://jsonplaceholder.typicode.com/posts/')
      .respond(200, postsMock);

  });

  describe('get', function(){
    it("should only have a few posts", function(){
        posts.get(function(){
          expect(posts.data.length).toBe(postsMock.length);
        });
    });
    it("should get some posts", function(){
      expect(posts.data.length).toBe(0);
      posts.get(function(){
        expect(posts.data.length).toBe(postsMock.length);
      });
    });
    it("should call users.get", function(){
      spyOn(users, 'get');
      posts.get(function(){
        expect(users.get).toHaveBeenCalled();
      });
    });
    it("should call posts.mapUsers", function(){
      spyOn(posts, 'mapUsers');
      posts.get(function(){
        expect(posts.mapUsers).toHaveBeenCalled();
      });
    });
  });




});
