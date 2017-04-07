var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var gutil = require('gulp-util');

gulp.task('lessCompile', function () {
  return gulp.src('./src/less/*.less')
    .pipe(less())
     .on('error', function(error){
        gutil.log(error);
     }).pipe(gulp.dest('./src/css/'));
});

gulp.task('watch',function(){
   gulp.watch('./src/less/*.less', ['lessCompile']);
});

gulp.task('default',['lessCompile','watch']);