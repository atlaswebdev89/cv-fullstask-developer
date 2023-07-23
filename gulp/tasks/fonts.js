const { src, dest, series } = require('gulp')
const ttf2woff = require('gulp-ttf2woff')
const ttf2woff2 = require('gulp-ttf2woff2')

const sources = './src/fonts/src/**/*.+(ttf|eot|svg)'
const destinations = './src/fonts/dist/'
// Конвертация ttf в woff2
function ttf2woff2Converter() {
    return src(sources).pipe(ttf2woff2()).pipe(dest(destinations))
}
// Конвертация ttf в woff
function ttf2woffConverter() {
    return src(sources).pipe(ttf2woff()).pipe(dest(destinations))
}

// Корирование шрифтов в папку назначения
function copyfonts() {
    return src([sources]).pipe(dest(destinations))
}

const fontsConvert = series(ttf2woff2Converter, ttf2woffConverter)
module.exports = { copyfonts, fontsConvert }
