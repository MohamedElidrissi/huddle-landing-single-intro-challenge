const { src, dest, watch } = require("gulp");
const minifyCSS = require("gulp-csso");
const sass = require("gulp-sass");

function css() {
  return src("scss/main.scss")
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest("dist/css"));
}

exports.watch = function() {
  watch(["scss/*.scss"], function(cb) {
    css();
    cb();
  });
};

exports.default = exports.css = css;
