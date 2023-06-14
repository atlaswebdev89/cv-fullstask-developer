const { src, dest, series } = require('gulp')
const imagemin = require('gulp-imagemin')
const imageminJpegRecompress = require('imagemin-jpeg-recompress')
const pngquant = require('imagemin-pngquant')
const webp = require('gulp-webp')
const del = require('del')

function imageMin() {
    return src('./src/images/src/compress/**/*')
        .pipe(
            imagemin([
                imageminJpegRecompress({
                    progressive: true,
                    min: 70,
                    max: 75,
                }),

                pngquant({
                    speed: 5,
                    quality: [0.6, 0.8],
                }),

                imagemin.svgo({
                    plugins: [
                        { removeViewBox: false },
                        { removeUnusedNS: false },
                        { removeUselessStrokeAndFill: false },
                        { cleanupIDs: false },
                        { removeComments: true },
                        { removeEmptyAttrs: true },
                        { removeEmptyText: true },
                        { collapseGroups: true },
                    ],
                }),
            ])
        )
        .pipe(dest('./src/images/dist/'))
}

async function clean() {
    del.sync('./dist/images/', { force: true })
}
// Конвертируем в webp формат
function webConverter() {
    return src('./src/images/src/decodeInWebp/**/*')
        .pipe(webp())
        .pipe(dest('./src/images/dist'))
}

function copyImages() {
    return src('./src/images/src/resourses/**/*').pipe(
        dest('./src/images/dist')
    )
}
const images = series(clean, imageMin, webConverter, copyImages)
module.exports = images
