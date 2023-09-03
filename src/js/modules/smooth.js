/** @format */

'use strict'
export const smoothScroll = () => {
    const linksArray = document.querySelectorAll('a[href^="#"')

    linksArray.forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault()
            const href = this.getAttribute('href').substring(1)
            const scrollTarget = document.getElementById(href)

            const topOffset = document.querySelector('header').offsetHeight + 20
            const elementPosition = scrollTarget.getBoundingClientRect().top
            const offsetPosition = elementPosition - topOffset

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth',
            })
        })
    })
}
