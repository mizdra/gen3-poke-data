/// <reference path="./typings/tsd.d.ts" />

// Import modules
import runSequence = require('run-sequence');
import del = require('del');
import gulp = require('gulp');
import ts = require('gulp-typescript');
import sourcemaps = require('gulp-sourcemaps');
import merge = require('merge2');

const tsProject = ts.createProject('tsconfig.json');


// Gulp tasks
gulp.task('clean', del.bind(null, 'lib'));

gulp.task('build:ts', () => {
    let tsResult = gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    return merge([
        tsResult.dts.pipe(gulp.dest('lib')),
        tsResult.js
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('lib'))
    ]);
});

gulp.task('watch', ['default'], () => {
    gulp.watch('src/**/*.ts', ['build:ts']);
});

gulp.task('default', cb => {
    runSequence('clean', 'build:ts', cb);
});
