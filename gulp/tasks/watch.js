const { watch, series } = require('gulp')

module.exports = function watching() {
    watch('./src/html/pages/**/*.+(html)', series('pages'))
    watch('./src/fonts/src/', series('fontsConvert'))
    watch('./src/images/src/**/*', series('images'))
}
