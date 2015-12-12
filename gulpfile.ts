/// <reference path="./typings/tsd.d.ts" />

// Import modules
import runSequence = require('run-sequence');
import del = require('del');
import gulp = require('gulp');
import ts = require('gulp-typescript');
import merge = require('merge2');


// Define directory paths
const srcDir = './src';
const testDir = './test';
const buildDir = './dist';

const tsProject = ts.createProject('tsconfig.json');


// Gulp tasks
gulp.task('clean', del.bind(null, buildDir));

gulp.task('build:ts', () => {
    let tsResult = gulp.src(`${srcDir}/**/*.ts`)
      .pipe(ts(tsProject));

    return merge([
        tsResult.dts.pipe(gulp.dest(`${buildDir}/definitions`)),
        tsResult.js.pipe(gulp.dest(`${buildDir}/js`))
    ]);
});

gulp.task('watch', ['default'], () => {
    gulp.watch(`${srcDir}/**/*.ts`, ['build:ts']);
});

gulp.task('default', cb => {
    runSequence('clean', 'build:ts', cb);
});
