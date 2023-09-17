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

import viewSidebarMenu from '../modules/sidebarMenu'
/**
 * Preloader
 */
import '../modules/preloader'

/**
 * Array import functions
 */
const fnArray = [
    lazyloadSkills,
    smoothScroll,
    dymanicPadding,
    startMenuEvent,
    lazyload,
    buttonTopFn,
    viewMobileMenu,
    viewSidebarMenu,
]

fnArray.forEach((fn) => {
    fn()
})
