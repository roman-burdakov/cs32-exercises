describe('users service', function(){
  var users, $httpBackend;
  var usersMock = [
    {id: 1, username: "some1"},
    {id: 2, username: "some2"},
    {id: 3, username: "some3"},
    {id: 4, username: "some4"}
  ];
  beforeEach(function(){
    module('directings');

    inject(function($injector){
      users = $injector.get('users');
      $httpBackend = $injector.get('$httpBackend');
    });
    $httpBackend
      .when('GET', 'http://jsonplaceholder.typicode.com/users/')
      .respond(200, usersMock);


  });


  describe('get', function(){
    it("should get some users", function(){
      expect(users.data.length).toBe(0);
      users.get(function(){
        expect(users.data.length).toBe(usersMock.length);        
      });
    });
  });
});
