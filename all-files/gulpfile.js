var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var pump = require('pump');
var uglify = require('gulp-uglify');
var srcImages = [ './src/images/*.png', './src/images/*.jpg' ];
var srcFonts = [ './src/fonts/*.woff', './src/fonts/*.woff2' ];

gulp.task('sass', function() {
    gulp.src('./src/css/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sass())
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest('./src/css'))
});
gulp.task('minify-css', function() {
    gulp.src('./src/css/*.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'));
});
gulp.task('minify-html', function() {
    gulp.src('./src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});
gulp.task('minify-js', function (cb) {
  pump([
        gulp.src('./src/js/*.js'),
        uglify(),
        gulp.dest('./dist/js')
    ],
    cb
  );
});
gulp.task('copy-images', function() {
    gulp.src(srcImages)
    .pipe(gulp.dest('./dist/images'));
});
gulp.task('copy-fonts', function() {
    gulp.src(srcFonts)
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('default',['sass', 'minify-css', 'minify-html', 'minify-js', 'copy-images', 'copy-fonts']);
