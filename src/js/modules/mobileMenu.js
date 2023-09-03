/** @format */

'use strict'

export default () => {
    const nav = document.querySelector('.nav')
    const body = document.body

    const menuBurgerButton = document.querySelector('.menu-burger')
    const linksMenu = document.querySelectorAll('.nav-item')
    const notScroll = 'body-overlay'

    const menuEventor = [
        menuBurgerButton,
        document.querySelector('.overlay-nav'),
        ...linksMenu,
    ]

    menuEventor.forEach((item) => {
        item.addEventListener('click', (event) => {
            if (nav.classList.contains('open-menu')) {
                closeMenu()
            } else if (getComputedStyle(nav).position !== 'relative') {
                openMenu()
            }
        })
    })

    const openMenu = () => {
        nav.classList.add('open-menu')
        body.classList.add(notScroll)
        menuBurgerButton.classList.add('active-mobile-menu')
    }

    const closeMenu = () => {
        nav.classList.remove('open-menu')
        body.classList.remove(notScroll)
        menuBurgerButton.classList.remove('active-mobile-menu')
    }

    const existOpenMenu = () => {
        if (aside.classList.contains('open-menu')) {
            return true
        }
        return false
    }
}
