## Week 5: NPM and Gulp

## Set up Gulp
*we'll do this together*

1. Pull down this project
2. Install gulp globally: `npm install -g gulp` #PATH
3. Install gulp locally: `npm install gulp`
4. Create a gulpfile.js in the root of this project
5. Require Gulp: `var gulp = require('gulp');`
6. Create a new task, call it "copy": `gulp.task('copy', function(){ ... });`
7. Use `gulp.src` and `pipe` to `gulp.dest` to copy files from `js/*.js` to `dist/`
  * `gulp.src('js/app/*.js')`
  * `.pipe(gulp.dest('dist/'));`

## Install and Set up a jshint
*we'll do this together*

1. Install [jshinter](https://www.npmjs.com/package/gulp-jshint)
2. require the `gulp-jshint` module
3. Create a new "jshint" task
4. Use `gulp.src` to get the src files
5. pipe that to `jshint()`
6. pipe that to `jshint.reporter()`
7. Install [jshint-stylish](https://www.npmjs.com/package/jshint-stylish)
8. Change the reporter to `jshint.reporter('jshint-stylish')`
9. Add the new task to the `default` task
10. Run `gulp`
11. Fix the errors
  * add a `.jshintrc` file to your root directory [jshintrc example](https://github.com/jshint/jshint/blob/master/examples/.jshintrc)
 
## Install and set up concatenation
*do this on your own*

1. Install [concatenator](https://www.npmjs.com/package/gulp-concat)
2. require the `gulp-concat` module
3. Create a new "buildApp" task
4. Use `gulp.src` to get the src files
5. pipe that to `concat(app.js)`
6. pipe that to `gulp.dest` `./dist`
7. Check out the app.js file
8. Now that you have this new file, reference that instead of the app files in index.html

## Install and Set up Uglification
*do this on your own*

1. Install [minifier](https://www.npmjs.com/package/gulp-uglify)
2. require the `gulp-uglify` module
3. Add the `uglify()` function to the buildApp `pipe`s
4. Check out the app.js file

## Repeat for Vendor Files
*on your own*

1. Create a "buildVendor" task
2. concat and uglify the files found in there

## Combine App and Vendor Builds
*on your own*

1. Create a new "build" task
  `gulp.task('build', ['buildApp', 'buildVendor']);
2. Add the build task to the default task

## Install and set up karma
*do this one on your own*

1. Install via npm: `karma`, `karma-jasmine`, `karma-phantomjs-launcher` locally
2. Add a `Server` variable pointing to the karma dir: `var Server = require('karma').Server;`
3. Add the following task
```
gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});
```
4. Remove the singleRun line if you want it to run with autowatch
5. See [this](https://github.com/karma-runner/gulp-karma) for more information



## Combine jshint and karma
*on your own*

1. Create a new task "test" that will call both the jshint task and the karma task

## Install and set up a watch task
*we'll do this together*

1. Create a new task called "watch"
2. Use `gulp.watch()` to watch for changes to the `js/app` files and run "test" and "build" when changed
3. Use it again to watch for changes to `js/tests` and run "test" when changed
