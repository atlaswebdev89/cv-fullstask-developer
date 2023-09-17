/** @format */

'use strict'

const body = document.body
const notScroll = 'body-overlay'
const preloader = document.querySelector('.preloader')

body.classList.add(notScroll)

/**
 * Функция запускает асинхронно отключение Preloader
 *
 * @returns Promise
 */
const hidePreloader = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            body.classList.remove(notScroll)
            preloader.classList.remove('preloader-show')
            resolve(true)
        }, 1000)
    })
}

const disablePreloader = () => {
    setTimeout(() => {
        preloader.classList.remove('preloader-display')
    }, 1000)
}

window.addEventListener('load', () => {
    hidePreloader().then(() => disablePreloader())

    // const delPreloadr = await disablePreloader()
    // if (delPreloadr) {
    //     setTimeout(() => {
    //         preloader.classList.remove('preloader-display')
    //     }, 1000)
    // }
})

// Просто пример как может быть еще вызвано событие onload
// window.onload = () => {
//     console.log('site onload')
// }
