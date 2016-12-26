# Routes and Stuff
(Stuff first...)

## Add an active class to the clicked element
*together*

1. Use `ng-click` to add the css style `active-post` to the clicked element
  * do this by creating an `isActive` method in the service that takes an id and returns a boolean

## Transclude
*together*

1. Include the `post.title` in the body of the `<post-display>` tag
2. Remove the `post.title` expression from the directive's template
3. Add `ng-transclude` to the `<strong>` tag
4. Add `transclude: true` to the directive's return object

## Test our directive
*together*

1. Initialize the current module
  * `module('directings');`
2. Inject in the `$compile` and `$rootScope` services
  * `inject(function($compile, $rootScope){...`
3. Attach `$compile` to a variable we can use outside of the `inject` scope
4. Create a new localized scope from `$rootScope` and attach it to a variable outside the `inject` scope
  * `scope = $rootScope.$new();`
5. Create an element with  `angular.element` with the directive in it
  * `var element = angular.element('<div><post-display post="post">{{ post.title }}</post-display></div>');`
6. Compile the element and attach the new, localized scope to it
  * `compiledDirective = compile(element)(scope);`
7. Digest the scope
  * `scope.$digest();`
8. Try the following `it`
```
  it("should have put the title in bold", function(){
    var el = compiledDirective.find('strong');
    expect(el).toBeDefined();
    expect(el.text()).toBe(scope.post.title);
  });
```

## Controller / Directive
*together*

1. Create a new directive called "postList"
2. Add the new directive to the index after the ListController
  * `<post-list></post-list>`
3. Give that directive a class of `well` and `col-md-4`
4. Change the classes of the 2 divs with `col-md-6` to `col-md-4`
5. Create a new template for post-list.html
  * give it the contents of the ListController html in index.html
6. Add that template to the `templateUrl` of the directive
7. Add 'ListController' to the `postList` directive's DDO
 * `controller: 'ListController',`
8. Add a dependency to the `posts` service to the directive
9. Add a `controllerAs` to the DDO, give it a value of `lc`
  * or rename it to something more semantically meaningful *it is the variable name used in the template*
10. Test that
11. 

## Change the ListController to use an explicit, inline controller
*on your own*

1. Change the `controller` on the `postList` directive's DDO to an explicit, inline controller
  * `controller: function(){ ... },`
  * give that controller the same contents of the List Controller

## Unit test ListController
*on your own*

1. `beforeEach` and initialize the module
2. Use `module(function($provide){ ...` to mock the posts service
  * all you'll need is a `posts` var array and a get function that doesn't really have to do anything... but you can just set the value of the `posts` var to something (valid).
3. `inject` `$rootScope` `controller` and `$injector`
  * `$rootScope` to create a new scope
    * `var $scope = $rootScope.$new();`
  * `controller` to create the controller
    * `listController = $controller('ListController', {$scope: $scope});`
  * `$injector` to get an instance of the mocked `posts` service
    * `posts = $injector.get('posts');`
*Note: `listController` and `posts` will (probably) need to be used outside of the `inject` scope.*
4. Do a test for the controller's `display` function
  * it "should set a current post on the service"

## Unit test the postList directive
*together*

**Same as above, with the following differences**

1. The `module` initialization needs to initialize "templates" as well
  * *refer to the testing a directive of last class*
2. The `beforeEach` will have to create an angular element for the directive
  * `var element = angular.element('<post-list></post-list>');`
3. Use that element, and the new `scope` you got from `$rootScope` in the `inject`, to `compile()` the directive
  * `compiledDirective = compile(element)(scope);`
4. `$digest` the `scope`
5. Set a controller variable equal to the compiled directive's controller
  * `controller = compiledDirective.controller('postList');`
6. Now do the same test from above, using the controller you just set to execute the method

## Set up `ngRoute`

1. `bower install angular-route`
  * Make sure angular-route.min.js gets added after angular.min.js in gulp and karma
2. Import `ngRoute` into the module
3. Add `<div ng-view></div>` somewhere high up in the index.html template file
4. Create a "controller.html" file in the templates directory, just throw some text into it
5. In "app.js" create a config method that injects `$routeProvider` and then calls `$routeProvider` with a single `when()` like the following:
```
.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'templates/controller.html'
    });
}]);
```
**Make sure your text shows on the index**

## Move the controller and directive apps into different templates
*on your own*

1. Migrate everything having to do with the controller app into the controller.html
2. Migrate everything having to do with the directive half of the app into directive.html
  * and repeat the setup for that (*.when('/directive', { ... })*)

## Otherwise, go to list
*together*

1. Create an `otherwise` in the `$routeProvider`
2. Use `redirectTo:` to redirect to the controller template
```
.otherwise({
  redirectTo: '/controller'
});
```

## Add a bootstrap nav
*together*

1. Just add the following code for a basic bootstrap nav
```
<nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Directings</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a ng-href="#/controller">Controller</a></li>
            <li><a ng-href="#/directive">Directive</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
```

## Move `<nav>` to it's own template
*on your own*

1. Use `ng-include` to include a template file that will have the `<nav>` in it
  * Note: an `ng-include` expects an expression as the `src` so you need to wrap the template string in single quotes
  * `<ng-include src="..."></ng-include>`
  * `<div ng-include="..."></div>`

*Note on testing*: There's nothing that's unit testable with routes, unless you really want to check to make sure the variables in the routeProvider are set. But that's like testing a variable assignment. Don't go nuts with unit testing, it's for (listed in order of priority) services, directives and controllers. If you're going to test nothing else, test services. If you can do more testing, do directives. If you feel like you really want to, test controllers. But you can stop there. That's all angular is built to test. Anything else should be tested with e2e testing.

