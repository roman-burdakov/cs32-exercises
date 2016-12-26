var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('copy', function(){
  gulp.src('./js/**/*.js')
    .pipe(gulp.dest('bist'));
});

gulp.task('jshint', function(){
  gulp.src('./js/app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter());
});
