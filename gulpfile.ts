/// <reference path="./typings/tsd.d.ts" />

// Import modules
import runSequence = require('run-sequence');
import del = require('del');
import gulp = require('gulp');
import gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();


// Define directory paths
const srcDir = './src';
const testDir = './test';
const buildDir = './dist';

gulp.task('clean', del.bind(null, buildDir));

gulp.task('build:js', () => {
    return gulp.src(`${srcDir}/**/*.js`)
        .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
        .pipe($.sourcemaps.init())
        .pipe($.babel())
        .pipe($.uglify())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(buildDir));
});

gulp.task('watch', ['default'], () => {
    gulp.watch(`${srcDir}/**/*.js`, ['build:js']);
});

gulp.task('default', cb => {
    runSequence('clean', 'build:js', cb);
});
