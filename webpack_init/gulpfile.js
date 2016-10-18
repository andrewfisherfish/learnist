var gulp = require('gulp');
var webpack = require('webpack-stream');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');

gulp.task('scripts', function() {
    return gulp.src('./src/app/index.js')
        .pipe(plumber())
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./build'))
        .pipe(livereload());
})

gulp.task('html', function() {
    return gulp.src('./src/**/*.html')
        .pipe(plumber())
        .pipe(gulp.dest('./build'))
        .pipe(livereload());
})

gulp.task('server', function() {
    connect.server({
        name: 'VIP Server',
        root: ['./build'],
        port: 8000,
        livereload: false
    });
})

gulp.task('livereload', function() {
    livereload.listen();
})

gulp.task('default', ['server', 'livereload', 'scripts', 'html'], function() {
    gulp.watch('./src/**/*.js', ['scripts'])
    gulp.watch('./src/**/*.html', ['html'])
})
