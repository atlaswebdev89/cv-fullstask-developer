// Определяем константы Gulp
const { src, dest } = require('gulp')
const nunjucks = require('gulp-nunjucks')

const sources = './src/html/pages/**/*.+(html)'
const destination = './src/html/complite'

module.exports = async function nunjucksHtml() {
    return src(sources).pipe(nunjucks.compile()).pipe(dest(destination))
}
