/** @format */

'use strict'

/**
 * Dymanic add padding
 * В зависимости от высоты меню
 */

const dymanicPadding = async () => {
    const header = document.querySelector('.header')
    const person = document.querySelector('.person')
    const main = document.querySelector('.block-main')
    const offsetTopHeigth = header.getBoundingClientRect().top + scrollY

    const dymanicPaddingFn = () => {
        const headerHeight = header.clientHeight
        person.style.paddingTop = headerHeight + offsetTopHeigth + 10 + 'px'
        main.style.paddingTop = headerHeight + offsetTopHeigth + 10 + 'px'
    }

    dymanicPaddingFn()

    window.addEventListener('resize', () => {
        dymanicPaddingFn()
    })
}

const startMenuEvent = () => {
    const header = document.querySelector('.header')

    const headerHeight = header.offsetHeight
    /**
     * Расстояние от начала документа
     */
    const offsetStart = header.getBoundingClientRect().top + scrollY

    toggleMenu(header, headerHeight, offsetStart)

    window.addEventListener('scroll', () => {
        toggleMenu(header, headerHeight, offsetStart)
    })
}

/**
 * Main controller for menu
 */
const toggleMenu = (elem, elemHeight, distanceOfStart) => {
    if (
        scrollY > distanceOfStart + elemHeight &&
        scrollY < distanceOfStart + elemHeight + 200 &&
        checkStatusMenu(elem) === 'hide'
    ) {
        scrolledMenu(elem)
    } else if (
        scrollY > distanceOfStart + elemHeight + 200 &&
        checkStatusMenu(elem) === 'hide'
    ) {
        showMenu(elem)
    } else if (scrollY === 0 && checkStatusMenu(elem) === 'show') {
        hideMenu(elem)
    }
}

/**
 * Scroll page
 */
const scrolledMenu = (elem) => {
    elem.classList.add('header-scrolled')
}

/**
 * Show menu
 */
const showMenu = (elem) => {
    elem.classList.add('fixed-menu')
}

/**
 * Hide menu
 */
const hideMenu = (elem) => {
    elem.classList.remove('fixed-menu', 'header-scrolled')
}

/**
 * Function check fixed menu
 * @returns String
 */
const checkStatusMenu = (elem) => {
    const elemPosition = window.getComputedStyle(elem).position
    switch (elemPosition) {
        case 'fixed':
            return 'show'
        case 'absolute':
            return 'hide'
        default:
            return 'hide'
    }
}

export { startMenuEvent, dymanicPadding }
