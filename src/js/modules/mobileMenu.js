/** @format */

'use strict'

export default () => {
    const nav = document.querySelector('.nav')
    const body = document.body

    const menuBurgerButton = document.querySelector('.menu-burger')
    const linksMenu = document.querySelectorAll('.nav-item')
    const notScroll = 'body-overlay'

    const openMenu = () => {
        nav.classList.add('open-menu')
        body.classList.add(notScroll)
        menuBurgerButton.classList.add('active-mobile-menu')
    }

    const closeMenu = (fn) => {
        nav.classList.remove('open-menu')
        body.classList.remove(notScroll)
        menuBurgerButton.classList.remove('active-mobile-menu')
        nav.addEventListener('transitionend', viewAllItemMenu)
    }

    const existOpenMenu = () => {
        if (aside.classList.contains('open-menu')) {
            return true
        }
        return false
    }

    const menuEventor = [
        menuBurgerButton,
        document.querySelector('.overlay-nav'),
        ...linksMenu,
    ]

    /**
     * Функция определяет список пунктов меню для мобильной версии
     * Часть пунктов меню будет скрыта так как они будут отображаться
     * в другом боковом меню для сайдбара
     */
    const viewItemMenuInMobile = () => {
        linksMenu.forEach((item) => {
            const anchor = item.querySelector('a').getAttribute('href')
            if (document.querySelector(anchor)) {
                if (document.querySelector(anchor).closest('.block-aside'))
                    item.style.display = 'none'
            }
        })
    }
    /**
     * Функция возвращает отобращение всех пунктов при закрыти мобильной версии
     */

    const viewAllItemMenu = () => {
        nav.removeEventListener('transitionend', viewAllItemMenu)

        linksMenu.forEach((item) => {
            item.removeAttribute('style')
        })
    }

    menuEventor.forEach((item) => {
        item.addEventListener('click', (event) => {
            if (nav.classList.contains('open-menu')) {
                closeMenu()
            } else if (getComputedStyle(nav).position !== 'relative') {
                viewItemMenuInMobile()
                openMenu()
            }
        })
    })
}
