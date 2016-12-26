var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');

gulp.task('moveHTML', function(){
  return gulp.src('src/**/*.html')
  .pipe(gulp.dest('build'));
});

gulp.task('buildApp', function(){
  return gulp.src('src/js/**/*.js')
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/js'));
});

gulp.task('buildVendor', function(){
  return gulp.src(['bower_components/angular/angular.min.js',
                    'bower_components/angular-resource/angular-resource.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                    'bower_components/angular-bootstrap/ui-bootstrap.js',
                    'bower_components/angular-xeditable/dist/js/xeditable.min.js'])
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('build/js'));
});

gulp.task('buildVendorCSS', function(){
  return gulp.src(['bower_components/angular/angular-csp.css',
                    'bower_components/angular-bootstrap/ui-bootstrap-csp.css',
                    'bower_components/bootstrap/dist/css/bootstrap.min.css',
                    'bower_components/angular-xeditable/dist/css/xeditable.css'])
  .pipe(concat('vendor.css'))
  .pipe(gulp.dest('build/css'));
});

gulp.task('moveVendorFonts', function(){
  return gulp.src(['bower_components/bootstrap/dist/fonts/*'])
  .pipe(gulp.dest('build/fonts'));
});

gulp.task('build', ['moveHTML', 'buildApp', 'buildVendor', 'buildVendorCSS', 'moveVendorFonts']);

gulp.task('connect', function(){
  connect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('watch', function(){
  gulp.watch('src/js/**/*.js', ['buildApp']);
  gulp.watch('src/**/*.html', ['moveHTML']);
});

gulp.task('default', ['build', 'connect', 'watch']);
