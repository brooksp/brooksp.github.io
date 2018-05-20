"use strict";

const gulp = require("gulp");
const less = require("gulp-less");
const path = require("path");
const browserSync = require("browser-sync");
const uglify = require("gulp-uglify");
const pump = require("pump");
const cleanCSS = require("gulp-clean-css");

const reload = browserSync.reload;

gulp.task("less", function() {
  return gulp
    .src("./less/**/*.less")
    .pipe(
      less({
        paths: [path.join(__dirname, "less", "includes")]
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("./css"))
    .pipe(reload({ stream: true }));
});

gulp.task("uglify", function(cb) {
  pump([gulp.src("scripts/*.js"), uglify(), gulp.dest("js")], cb);
});

// watch files for changes and reload
gulp.task(
  "serve",
  gulp.series("less", "uglify", function() {
    browserSync({
      server: {
        baseDir: "."
      }
    });

    gulp.watch(
      ["*.html", "less/*.less", "scripts/*.js"],
      gulp.series("less", "uglify", reload)
    );
  })
);
