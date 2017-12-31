'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('less', function () {
  return gulp.src('./app/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./app/css'))
    .pipe(reload({ stream:true }));
});

// watch files for changes and reload
gulp.task('serve', ['less'], function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch(['app/*.html', 'app/less/*.less', 'app/scripts/*.js'], ['less', reload]);
});
