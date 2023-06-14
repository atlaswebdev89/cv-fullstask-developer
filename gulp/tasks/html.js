// Определяем константы Gulp
const { src, dest, parallel, series, watch } = require('gulp')
const fileinclude = require('gulp-file-include')

module.exports = async function pages() {
    return src('./src/html/pages/**/*.+(html)')
        .pipe(
            fileinclude({
                prefix: '@',
                basepath: '@file',
            })
        )
        .pipe(dest('./src/html/complite'))
}
