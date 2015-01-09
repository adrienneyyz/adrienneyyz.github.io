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

gulp.task('styles', ['styles-sass', 'styles-minify'], function() {
    return gulp.src([
            'dist/css/akit.min.css',
            'dist/css/normalize.min.css'
        ])
        .pipe(concat('akit.min.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('concat-page0', ['concat-page1', 'concat-page2', 'concat-page3', 'concat-page4', 'concat-page5'], function() {
    return gulp.src([
            '_header.html',
            'page0.html',
            '_footer.html'
        ])
        .pipe(concat('index.html'))
        .pipe(gulp.dest('.'));
});
gulp.task('concat-page1', function() {
    return gulp.src([
            '_header.html',
            'page1.html',
            '_footer.html'
        ])
        .pipe(concat('acute-repetitive-lumbar-syndrome'))
        .pipe(gulp.dest('.'));
});
gulp.task('concat-page2', function() {
    return gulp.src([
            '_header.html',
            'page2.html',
            '_footer.html'
        ])
        .pipe(concat('chiropractic-best-effective-personal-primary-healthcare-option'))
        .pipe(gulp.dest('.'));
});
gulp.task('concat-page3', function() {
    return gulp.src([
            '_header.html',
            'page3.html',
            '_footer.html'
        ])
        .pipe(concat('pregnancy-chiropractic-care'))
        .pipe(gulp.dest('.'));
});
gulp.task('concat-page4', function() {
    return gulp.src([
            '_header.html',
            'page4.html',
            '_footer.html'
        ])
        .pipe(concat('about'))
        .pipe(gulp.dest('.'));
});
gulp.task('concat-page5', function() {
    return gulp.src([
            '_header.html',
            'page5.html',
            '_footer.html'
        ])
        .pipe(concat('chiropractors-good-resource-nutrition-advice'))
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
    gulp.watch('src/*.scss', ['style']);
    gulp.watch('page*.html', ['concat-page0']);
    gulp.watch('_*.html', ['concat-page0']);
    // gulp.watch('page1.html', ['concat-page0']);
    // gulp.watch('page2.html', ['concat-page0']);
});