describe('FormController', function(){
  var formController;
  beforeEach(angular.mock.module('logintrest'));
  beforeEach(angular.mock.inject(function($controller){
    formController = $controller('FormController');
  }));
  it('should clear the values of username and password', function(){
    formController.username = "something";
    formController.password = "somethingelse";
    formController.login();
    expect(formController.username).toBe('');
    expect(formController.password).toBe('');
  });

  it('should add the username and time to the logins array', function(){
    formController.username = "something";
    formController.password = "somethingelse";
    expect(formController.logins.length).toBe(0);
    formController.login();
    expect(formController.logins.length).toBe(1);
    expect(formController.logins[0].username).toBe("something");

  });

});
