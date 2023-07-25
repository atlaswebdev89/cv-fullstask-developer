/** @format */

// Определяем константы Gulp
const { src, dest } = require('gulp')
const nunjucks = require('gulp-nunjucks')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

const sources = './src/html/pages/*.+(html)'
const destination = './src/html/complite'

module.exports = async function nunjucksHtml() {
    return src(sources)
        .pipe(plumber())
        .pipe(
            nunjucks.compile().on(
                'error',
                notify.onError({
                    message: '<%= error.message %>',
                    title: 'Sass Error!',
                })
            )
        )
        .pipe(dest(destination))
}
