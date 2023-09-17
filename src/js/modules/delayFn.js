/** @format */

const delay = (ms) => {
    return new Promise((r) => setTimeout(() => r(), ms))
}

delay(3000).then(() => {
    console.log('delay: ', ms)
})
