/**
 * Created by tianhang on 1/9/2016.
 */

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('scripts',function () {
    gulp.src('src/app/**/*.js')
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('html',function () {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'))
        .pipe(reload({stream:true}));
});

gulp.task('watch',function () {
    gulp.watch('src/app/**/*.js',['scripts']);
    gulp.watch('src/index.html',['html']);
});

gulp.task('browser-sync',function () {
    browserSync({
        server:{
            baseDir:'./dist/'
        }
    });
});

gulp.task('default', ['scripts','html','browser-sync','watch']);