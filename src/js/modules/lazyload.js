/** @format */

'use strict'

const lazyImages = document.querySelectorAll(
    'img[data-src], source[data-srcset]'
)
const loadMapBlock = document.querySelector('._load-map')

// видимая высота экрана
const windowHeight = document.documentElement.clientHeight

let lazyImagesPosition = []
if (lazyImages.length > 0) {
    lazyImages.forEach((img) => {
        if (img.dataset.src || img.dataset.srcset) {
            lazyImagesPosition.push(
                img.getBoundingClientRect().top + pageYOffset
            )
            lazyScrollCheck()
        }
    })
}

// pageYOffset - количество прокрученных пикселей от начала страницы

function lazyscroll() {
    if (
        document.querySelectorAll('img[data-src], source[data-srcset]').length >
        0
    ) {
        lazyScrollCheck()
    }
}

// Функция отображения изображений
function lazyScrollCheck() {
    let imgIndex = lazyImagesPosition.findIndex(
        (item) => pageYOffset > item - windowHeight
    )
    if (imgIndex >= 0) {
        if (lazyImages[imgIndex].dataset.src) {
            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src
            lazyImages[imgIndex].removeAttribute('data-src')
        } else if (lazyImages[imgIndex].dataset.srcset) {
            lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset
            lazyImages[imgIndex].removeAttribute('data-srcset')
        }
    }
    delete lazyImagesPosition[imgIndex]
}

const lazyload = () => {
    window.addEventListener('scroll', lazyscroll)
}

export { lazyload, lazyscroll }
