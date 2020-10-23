"use strict"

const sass = require('gulp-sass');
const del = require('del');
const { src , dest, watch, series } = require('gulp');
const SCSS_SRC = './dev/scss/**/*.scss';
const SCSS_DEST = './dist/assets/css/main.css';
sass.compiler = require('node-sass');

function compiler_SCSS(cb){
  return src (SCSS_SRC)
  .pipe(sass({outputStyle: 'expanded'})).on('error', sass.logError)
  .pipe(dest(SCSS_DEST));
  cb()
}

function watch_scss(cb){
  watch(SCSS_SRC, series(cleanCss, compiler_SCSS));
  cb()
}

function cleanCss (cb) {
  del(SCSS_DEST);
  cb()
}

exports.default = series( watch_scss);
 


