/** @format */

// Стили для приложения
import '../../css/style.scss'

// import 'lazysizes'
// import '../modules/lazyload'

import lazyloadSkills from '../modules/progressBar'
import { lazyload, lazyscroll } from '../modules/lazyload'
import { startMenuEvent, dymanicPadding } from '../modules/fixedMenu'
import { smoothScroll } from '../modules/smooth'
import buttonTopFn from '../modules/buttonTop'
import '../modules/test'
import viewMobileMenu from '../modules/mobileMenu'
console.log(viewMobileMenu)

/**
 * Array import functions
 */
const fnArray = [
    viewMobileMenu,
    lazyloadSkills,
    smoothScroll,
    dymanicPadding,
    startMenuEvent,
    lazyload,
    buttonTopFn,
]

fnArray.forEach((fn) => {
    fn()
})
