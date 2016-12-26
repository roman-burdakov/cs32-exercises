# Week 10: Directives

## Look at what we're starting with
*together*

1. Pull down the repository
2. Try it
3. Look at the template
4. Look at the controller
5. Look at post service

## Refresher - user service
*together*

1. Create a users service that will get the users
  * from `http://jsonplaceholder.typicode.com/users`
2. Give it a `get` method that uses `$http`
3. Put the `response.data` into a "data" variable on the service
4. *Make sure it has a callback*
**Test these now**

## Map the usernames to the posts
*together*

1. Add a function to the `posts` service called "mapUsers"
2. Call the `users` service
3. When the `userId` from `posts.data` is equal to the `users.id`, add a `userName` field to the `posts.data`

## Refresher - testing services
*on your own -ish*

1. Write tests for the users service and posts service
2. Mock the `$http.get` with `$httpBackend`
3. Services are mocked with `module(function($provide){...`
  * `users` needs to be mocked
  * it might feel like duplicating the function, but just simplify it to its base
  * all it needs is a `data` var and a `get` function
4. Services are included with `inject(function($injector){...`
 * `$httpBackend = $injector.get('$httpBackend');`
 *  `users = $injector.get('users');`

## `template` directive
*together*

1. Add a new directive file
2. Create a new directive called 'post'
  * `angular.module('directings').directive('post', function(){...`
3. Return an object literal with one key-value: `template: "asdf"`
4. Add a `<post>` element to the template inside of the `<li>`
5. Check it out

## `template` with a `scope`
*together*

1. Add the `<div` that's currently in the `<li>` to the `template` value
  * `template: "<div><strong>Title:</strong> {{ post.title }}</div>"`
2. Add an attribute of `title` to the `post` element and give it a value of `post.title`
  * *Note: any attribute of a directive is going to take an experession*
3. Change `post.title` to just `title` since that's the attribute we're using to pass in the value
4. Add a `scope` to the directive
```
return {
  scope: {
    title: '=title'
  },
  template: ...
```

## Test the directive
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

## Move the `template` to a `templateUrl`
*on your own*

1. Add a `post.html` to a `templates` directory
2. Give it the HTML currently in your `template` value
3. Replace `template` with `templateUrl` and give it the value of your new html
  * `templateUrl: '/templates/post.html'`

## Compare with `ng-include`
*on your own*

1. Add another `<div>` to the `<li>` in index.html
2. Give it the `ng-include` attribute with a value of the template file you just created
  * *Note: `ng-include` expects an expression, not a string, so make sure you pass it a string
  * `ng-include="'/templates/post.html'"`
3. Look at what you have
4. Change `title` to `post.title` (what it was originally)
5. Check it out

## `post` in `post`
*together*

1. Instead of adding `title`, just add the `post` variable
  * `<post post="post"></post>`
  * That's so cool looking right?
2. Look at that error
3. Rename the `post` directive to `post-display`
  * in both index.html and post.js
4. Look at the result
5. Change the directive registration to `postDisplay`
  * but leave the index.html the same

## Display Controller
*on your own*

1. Add a new controller "DisplayController"
2. Put it into the index.html template in a `<div>` after the list controller
3. Inject `posts`

## Set Current Post
*on your own*

1. Write a method in the `posts` service to set the current post
2. Call that method whenever a post is clicked in the list
  * you should wrap it in an `<a>` for accessibility
  * convenience class of `unlink` is available in the css
3. Now you can include the `<post-display>` directive in the `DisplayController`

## `body` and `ng-if`
*together*

1. Wrap the directive template in a `<div>`
2. Use `ng-if` to only show that div if `post` exists
3. Add a `body` attribute to the directive, give it a boolean `true` value
4. Add it to the `scope`
5. Add a `<div>` to the directive's template and have it contain an expression for `{{ post.body }}`
6. Use `ng-if` to only show that if the `body` attribute is true

## Transclude title through
*together*

1. Include the `post.title` in the body of the `<post-display>` tag
2. Remove the `post.title` expression from the directive's template
3. Add `ng-transclude` to the `<strong>` tag
4. Add `transclude: true` to the directive's return object

## Test our directive
*together*

1. Adjust our tests...

## Adding to Karma...
*together*

1. `npm install --save-dev karma-ng-html2js-preprocessor`
2. Add all of your .html files to the list of Karma files
3. Add the following lines to your karma config
```
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
      moduleName: 'templates',
      stripPrefix: 'src/'
    },
```
**And add the moduleName you just put there to the `angular.mocks.module` call in your directive test**
  * `module('templates', 'directings');`

## Now try finish the tests
*on your own*

## Blink tag
*the real reason Google developed Angular*
*together*

1. Create a new directive called "blink"
2. Inject `$timeout` into the directive
  * `$timeout` is just an angular wrapper around `window.setTimeout()`
3. Create a function in the directive that, when taking an element as a parameter will hide that element using css's `visibility`
  * `element.css("visibility", "hidden");`
4. Create another function that's does the opposite of that
  * `element.css("visibility", "visible");`
5. Use `$timeout` at the end of each of those functions to call the other function
  * `$timeout(function(){ showElement(element); }, 500);`
6. Add a "promise" variable to the directive at the highest scope on the directive
7. Assign the `$timeout`s to that variable so they overwrite each other
8. Return a `link` function with the directive
  * `link` `controller` and `compile` all take 3 parameters
  * `link: function(scope, element, attrs){...`
9. Add `showElement(element);` to the `link` function
