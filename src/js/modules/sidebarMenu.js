/** @format */

export default function () {
    const sidebarBurger = document.querySelector('.aside-burger')
    const buttonClose = document.querySelector('.close-mobile-sidebar')
    const body = document.body
    const aside = document.querySelector('.block-aside')
    const notScrollClass = 'body-overlay'
    const overlaySidebar = document.querySelector('.overlay-sidebar-body')
    const overlayOpenClass = 'overlay-sidebar-open'

    const openSidebar = () => {
        aside.style.transform = 'translateX(0)'
        sidebarBurger.classList.add('active-mobile-menu')
        body.classList.add(notScrollClass)
        overlaySidebar.classList.add(overlayOpenClass)
    }

    const closeSidebar = () => {
        overlaySidebar.classList.remove(overlayOpenClass)
        body.classList.remove(notScrollClass)
        aside.style.removeProperty('transform')
        sidebarBurger.classList.remove('active-mobile-menu')
    }

    buttonClose.addEventListener('click', () => {
        closeSidebar()
    })

    overlaySidebar.addEventListener('click', () => {
        closeSidebar()
    })

    sidebarBurger.addEventListener('click', () => {
        openSidebar()
    })
}
