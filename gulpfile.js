const gulp = require("gulp");
const jasmineBrowser = require('gulp-jasmine-browser');
const browserSync = require('browser-sync').create();

gulp.task("default", ["tests"], function() {
    gulp.watch("jasmine/*", ["tests"]);
    browserSync.init({
        server: "./"
      });
    
  });

gulp.task('tests', function() {
    return gulp
        .src('jasmine/spec/feedreader.js')
        .pipe(jasmineBrowser.specRunner())
        .pipe(jasmineBrowser.server({ port: 3001 }));
});