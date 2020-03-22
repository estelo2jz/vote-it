var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require("gulp-open"),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    port = process.env.port || 3011;

gulp.task('browserify', function() {
  gulp.src('./src/index.js')
      .pipe(browserify({ transform, 'reactify' }))
      .pipe(gulp.dest('./app/dist/js'));
});