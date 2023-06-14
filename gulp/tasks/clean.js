const del = require('del')

async function clean() {
    del.sync('./src/html/complite', { force: true })
}
module.exports = clean
