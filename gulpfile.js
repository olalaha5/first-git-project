const {
    src,
    dest,
    parallel,
    series,
    watch
} = require('gulp');



const csso = require('gulp-csso');
// const changed = require('gulp-changed');
const browsersync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');
const shorthand = require('gulp-shorthand');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const flatten = require('gulp-flatten');



function clear() {
    return src('./build/*', {
        read: false
    })
        .pipe(clean());
}



function fullCssCompilation() {
    return src('./src/blocks/**/*.sass')
        .pipe(concat('style.sass'))
        .pipe(sass())
        .pipe(autoprefixer({
            grid: true
        }))
        .pipe(shorthand({
        }))
        .pipe(csso())
        .pipe(dest('./build'))
        .pipe(browsersync.stream());
}



function img() {
    return src('./src/**/*.png') //Выберем наши картинки
        .pipe(flatten({ includeParents: 0 }))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(dest('./build/img'));
}



function fullHtmlCompilation() {
    return src('./src/pages/*.pug')
        .pipe(pug())
        .pipe(dest('./build'))
        .pipe(browsersync.stream());
}



function watchFiles() {
    watch('src/blocks/**/*.sass', fullCssCompilation);
    watch('./src/pages/*.pug', fullHtmlCompilation);
    watch('./src/blocks/**/*.png', img);
}



function browserSync() {
    browsersync.init({
        server: {
            baseDir: './build'
        },
        post: 3000
    });
}

exports.watch = parallel(watchFiles, browserSync);
exports.default = series(clear, parallel(fullHtmlCompilation, fullCssCompilation, img));