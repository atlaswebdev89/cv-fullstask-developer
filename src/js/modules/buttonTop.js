/** @format */

/**
 * Scroll to up page
 */

const buttonTopFn = () => {
    const buttonUp = document.querySelector('.button-scroll-top')

    window.addEventListener('scroll', () => {
        if (scrollY > 200) {
            if (!buttonUp.classList.contains('button-scroll-show')) {
                buttonUp.classList.add('button-scroll-show')
            }
        } else {
            buttonUp.classList.remove('button-scroll-show')
        }
    })

    buttonUp.addEventListener('click', (event) => {
        event.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    })
}

export default buttonTopFn
