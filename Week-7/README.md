# Week 7: Angular Intro

## Create a new Angular App
*together*

1. Pull down this repository
2. `npm install`
3. `bower install`
4. `gulp`
5. `bower install angular`
6. Make sure it's all working
  * karma
  * gulp

## Declarative
*together*

1. `ng-app` to initialize the angular application
2. `ng-init` to set a variable named "buzzer" to an initial value
  * `buzzer = 1`
3. Use an `{{ expression }}` to output the value to the screen
4. `ng-click` to update the value, increment the value
  * `ng-click="buzzer = buzzer + 1"`
5. `ng-show` to print "Fizz" when `buzzer` is a multiple of 3
  * *and don't show it on 0*
6. Refresh it a few times
  * Use `ng-cloak` to control the "FOUT"

## Add more to it
*on your own*

1. `ng-hide` to print "Buzz" when `buzzer` is a multiple of 5 (and not 0)
  * `ng-hide` is just the opposite of `ng-show`
2. Add a subtract 1 button
3. `ng-if` to show a block of text if the value of buzzer is greater than 10
  * `ng-if` works the same as `ng-show`
4. `ng-class` to hide that same block of text if the value of buzzer is greater than 20
  * Use bootstrap's `hide` class
  * Use `ng-class` as an object literal that has the classname as a key and expression as a value: [ngClass](https://docs.angularjs.org/api/ng/directive/ngClass)
  * `ng-class="{cssclassname:true === true}"`

## `ng-repeat`
*together*

1. Define an array using `ng-init`
  * something simple, like `letters = ['a', 'b', 'c']`
2. Create an `<ul>` with a bootstrap class of `list-unstyled`
3. Create a `<li>`
4. Add `ng-repeat` to the `<li>`
  * `ng-repeat="letter in letters"`
  * similar to JavaScript's "for-in" `for(item in arr){...}` format
  * 

## ng-repetition
*on your own*

1. Define an array of objects with `ng-init`
  * if you're not creative: `names = [{fname: 'jazahn', lname: 'clevenger'}, ...]`
2. Create a `<table>` with a bootstrap class of `table`
  * *make sure you always [use headers! with `scope`s!](http://webaim.org/techniques/tables/data#headers)*
  * and a [caption](http://webaim.org/techniques/tables/data#caption) never hurts...
3. `ng-repeat` the row for the data in your array
4. Use `ng-class-even` and/or `ng-class-odd` to [stripe the rows](https://docs.angularjs.org/api/ng/directive/ngClassEven)

## `$index` and our limits
*together*

1. Create a new column for "Index"
2. Print out `$index` in an expression in that column for each element of the array
  * but `$index` is ugly and the context or scope may not be clear
  * use [this format](https://docs.angularjs.org/api/ng/directive/ngRepeat#iterating-over-object-properties) instead
  * `(index, name) in names`
3. Create a new column for "Actions"
4. Put a button in that column `<button class='btn'>Do something</button>`
5. Add an `ng-click` to the button that will do `names.slice($index)`
  * now try `alert($index)` or `window.alert('anything')`

**Angular expressions are limited by the scope they're in**

## What Scope are we in???
*together*

1. Add the `{{ buzzer }}` expression to `div2`
2. Make sure it's there and updating
3. Add this controller to your app.js: 
  * `angular.module('fizzbuzzer', []).controller('MyController', function(){});`
4. Add an `ng-controller` to `div1` with a name of "MyController"
5. Check to see where `buzzer` is updating
```
// kind of sort of works similar to this:
// $rootScope
var buzzer = 0;
function MyController(){
 // $scope
 var buzzer = 1;
 console.log(buzzer);
}
console.log(buzzer);
```
