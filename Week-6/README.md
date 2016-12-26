## Week 6: Dependency Management

## Install Bower
*we'll do this part together*

1. Clone this project
2. Use NPM to install Gulp, and Bower
  * bower needs to be installed globally: `npm install -g bower`

## Use Bower for this project
*we'll do this part together*

1. Initialize Bower: `bower init`
2. Use Bower to install Bootstrap and jQuery
3. Change the references to use the bower version in `index.html`
  * `<script src="../bower_components/...`

## Set up Karma
*our favorite part*

1. `karma init`
2. Reference the `bower_components` versions of the vendor files
  * *make sure the vendor files are the first files listed for karma and that jquery comes before bootstrap*
3. `karma start`
4. Fix the inevitable errors

## Set up Gulp
*together*

1. Use Gulp to concat vendor js into one file
  * use a list to handle the jquery/bootstrap dependency
2. Use Gulp to run Karma
3. Concat and Uglify JS `gulp-concat`, `gulp-uglify`
4. Concat and minify CSS `gulp-concat`, `gulp-minify-css`
5. Make sure the pipe'd operations are run asynchronously, using "streams", `return`
6. Copy your index (and all other html files) into the dist folder
7. Fix references in `index.html` to point to the dist files
  * *in reference to where the `index.html` will be in the `dist` folder*

## Set up a LiveReload server
*together*

1. Install `gulp-connect`
  * `var connect = require('gulp-connect');`
2. Add the following task, where "build" is the directory you put your distribution build into
```
gulp.task('connect', function(){
  connect.server({
    root: 'build',
    livereload: true
  });
});
```
**You can now view your app at localhost:8080**

## Create some watches
*do this on your own* 

1. Watch all of your app's JS files and rebuild the app files when there's a change
2. Watch all of your app's CSS files and rebuild the css files when there's a change
3. Watch all of your app's HTML files and copy them to dist when there's a change

## Add Angular to the project
*do this on your own*

1. Install angular with Bower `bower install angular`
2. Add the following line to your app.js:
  * `angular.module('myApp', []);
3. Add the following attribute to the `<body>` tag
  * `<body ng-app="myApp">`
