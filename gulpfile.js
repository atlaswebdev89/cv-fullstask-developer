// const gulp = require('gulp')
const { parallel, series } = require('gulp')
// Для доступа к папке с тасками. Чтоб не подключать каждый отдельный файл с таском
const requireDir = require('require-dir')
const tasks = requireDir('./gulp/tasks')

exports.pages = tasks.nunjucks
exports.html = tasks.html
exports.watching = tasks.watch
exports.start = tasks.start
exports.clean = tasks.clean
exports.copyfonts = tasks.fonts.copyfonts
exports.fontsConvert = tasks.fonts.fontsConvert
exports.images = tasks.images

// Сборка для developer
exports.default = series(
    // exports.clean,
    exports.start,
    // exports.fontsConvert,
    exports.images,
    parallel(exports.pages, exports.copyfonts),
    parallel(exports.watching)
)
// Сборка для продакшена
exports.build = series(
    exports.start,
    exports.clean,
    exports.pages,
    exports.images,
    exports.fontsConvert,
    exports.copyfonts
)
