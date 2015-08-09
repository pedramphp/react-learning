"use strict";

var gulp = require('gulp');
var gutil = require('gulp-util'); // for debugging
var source = require('vinyl-source-stream'); // touch file one to another
var browserify = require('browserify'); // fixes dependencies
var watchify = require('watchify'); // tool to automatically run gulp when code change in src
var reactify = require('reactify'); // converting jsx file to js


gulp.task('default', function(){
    var bundler = watchify(browserify({
        entries: ['./src/app.jsx'],
        transform: [reactify], // transform jsx to js
        extensions: ['.jsx'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    })); // the object that executes the build

    function build(file){
        if(file){
            gutil.log("Recompiling " + file)
        }

        return bundler
                .bundle()
                .on('error', gutil.log.bind(gutil, 'Browserify Error'))
                .pipe(source('main.js'))
                .pipe(gulp.dest('./'));
    }

    bundler.on('update', build);

    build();
});
