# Week 9: Services

## Value
*together*

1. Create a value service named "NameVal"
2. Give it a string value of your name
3. Inject it into both controllers
4. Output it in the template under both controllers

## Add a form element
*on your own*

1. Add an input field
2. Give it an ng-model with the same variable name as the variable you're using for the names
3. Note what happens when you change one

## Passing by reference
*together*

1. Change the value to an object
2. Assign the object directly to a variable on the controller
3. Use that object
  * and make sure you don't assign a primitive to the $scoped controller
  * assign the entire object
  * *"there should always be a dot in your model"*

## Users Value
*on your own*

1. Create a "Users" value service
2. Add the array included in `names.json` to it
3. Create an ng-repeat of all of the items in the users value
4. Output the name item in a list

## Put it in a separate file
*on your own*

1. Create a new file `users.js`
2. Move the `Users` service to that file
  * it will have to read: `angular.module('serviceapp').value(...`
  * Note the difference between the initialization of the application module and this
  
## Factory
*together*

1. Create a factory that uses the users value
2. Give the factory one function to remove a user
3. Add this one to ControllerOne

## Service
*together*

1. Create a service that will do the same exact thing as the factory
2. Add this one to ControllerTwo

## Testing the Factory
*mostly together*

1. Register the app with angular.mocks
  * `beforeEach(module('serviceapp'));`
2. Inject the `$injector`
3. Use the `$injector` to `get()` the UserFact
  * `userFact = $injector.get('UserFact');`
4. Do the same for `Users`
5. Make sure there are variables for `userFact` and `users` that are available in the `UserFact`'s describe scope
6. Write a test that checks `users`'s length and then removes the 0th element and then checks to make sure the length is one less than it was

## Mocking `Users`
*together*

1. Use `angular.mocks.module` to include `$provide`
2. Use `$provide` to create a `value` called "Users"
3. Give it some dummy values
```
module(function($provide){
 $provide.value('Users', [
  {name: "one"},
  {name: "two"}
 ]);
});
```

## Testing the Service
*on your own*

1. Do this, it's no different from the Factory test

## Data Service
*together*

1. Create a new service called "UserHttp"
2. Inject the $http service into our new service
3. Declare an empty array on the service 
4. Attach the following function onto it:
```
svc.getUsers = function(){
  $http.get('/users.json')
   .then(function(response){
    svc.users = response.data;
   });
```

## Data Service in the controller
*together*

1. Inject the new service into the controller (instead of the `Users` service)
2. Attach the new service's users variable to a controller variable
3. Try it
4. Attach the new service to a new service variable in the controller
  * something like `c1.usersHttp = UsersHttp;`
5. Change the template to reflect where the data is coming from

## Test this new service
*together*

1. Inject $injector beforeEach
2. Get $httpBackend with: `$httpBackend = $injector.get('$httpBackend');`
3. Use $httpBackend to reply with a 200 and some users whenever the URL we want to hit is accessed
```
$httpBackend
  .when('GET', '/users.json')
  .respond(200, [{name:"one"}, {name:"two"}]);
```
4. Make sure you also $injector.get the `UsersHttp` service
5. Test the returned function from the service
6. It should return some users
7. Add a callback function to the getUsers function
  * when it's in the app, we don't currently need it to do anything
  * when it's in the test, we'll need to use the callback to run our expect after it returns

## Change the value of the url
*on your own*

1. Just change `/users.json` to `http://jsonplaceholder.typicode.com/users`
  * that's fun, right?
2. Remember to change it in the test as well
