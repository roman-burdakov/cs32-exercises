# Week 4: Testing and Karma
*In Class*

## Adding Karma
*we'll do this part together*

1. Clone this repository
2. Run `karma init`
  1. Choose "Jasmine"
  2. Choose yes to use RequireJS
  3. Choose Chrome
  4. Locations of the source files:
    * `js/vendors/**/*.js`
    * `js/app/**/*.js`
    * `js/tests/**/*Spec.js`
  5. Jasmine should be excluded `js/vendors/jasmine-core`
  6. Choose yes to get a sample config file
  7. Choose yes to watch all the files

## Add some tests on the fly
*this is something you'll do*

1. Split your screen so you can see the editor and the console at the same time
2. Add a new spec file for the Song model
3. Add a test that makes sure the first character is uppercase
4. Add that functionality to the Song constructor, just make sure the first character is uppercase
5. Watch the magic!

## Make some changes to the config
*this is something you'll do*

1. Change the default running browser to PhantomJS
  * you'll need to `npm install karma-phantomjs` I'd suggest doing it globally
2. Comment out the jasmine exclude and restart karma
3. Turn off autowatch
  1. Restart karma: `karma start`
  2. Open a different terminal window
  3. Run `karma run`, the tests should have run, and you'll see the results in the other window
    * *We don't always want Karma to control when the tests are run, like next week*
 
