/********************************/
/*           VARIABLES          */
/********************************/

var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require ('gulp-sass')

var paths = {
  appSaas: ['www/app/core/theme/**/*.scss']
};





/********************************/
/*          TASK                */
/********************************/

/**
* Local Server
*@desc This taks in the local server
*/

gulp.task('webserver',function() {
  connect.server({
    root: 'www',
    livereload:true
  })
});

/**
* Sass to Css
*@desc Task compile sass to css
*/
gulp.task('sass', function(){
  return gulp.src(paths.appSaas)
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(''));
});


/**
* Default Task
*@desc Default Task gulp
*/

gulp.task('default', ['sass', 'webserver']);
