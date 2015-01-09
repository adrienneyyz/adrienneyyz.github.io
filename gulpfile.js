var gulp         = require('gulp'),
    shell        = require('gulp-shell'),
    sass         = require('gulp-sass'),
    rename       = require('gulp-rename'),
    minifycss    = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify');

gulp.task('style', function() {
  return gulp.src('src/style.scss')
    .pipe(sass({ style: 'compressed', }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('css'));
});

/*
gulp.task('foundation', function() {
  return gulp.src('public/css/src/foundation.scss')
    .pipe(sass({ style: 'compressed', }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('public/css/dist'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('public/css/dist'));
});

// Widgets
gulp.task('widgets', function() {
  return gulp.src('public/js/src/widgets/*.js')
    .pipe(concat('widgets.js'))
    .pipe(gulp.dest('public/js/dist'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('public/js/dist'));
});
*/

gulp.task('watch', function() {
    gulp.watch('src/*.scss', ['style']);
});