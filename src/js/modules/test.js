/** @format */

'use strict'
const header = document.querySelector('.header')

// Высота элемента header
console.log(header.offsetHeight)
console.log(header.clientHeight)
console.log(header.scrollHeight)

console.group('Height')
console.log(document.body.offsetHeight)
console.log(document.documentElement.scrollHeight)

console.log(window.innerHeight)
console.log(document.documentElement.clientHeight)

console.log(document.documentElement.scrollTop)
console.log(scrollY)

document.addEventListener('scroll', function () {})
console.groupEnd()

/**
 * Надо за комитить в note
 */
const buttonBackTop = document.querySelector('.other-skills-list')

buttonBackTop.childNodes.forEach((element) => {
    console.log(element)
})
console.log(buttonBackTop.children)

const elemArray = [...buttonBackTop.childNodes]
console.log(elemArray)

const arraS = [...buttonBackTop.children]
arraS.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        if (event.target.tagName.toLowerCase() === 'li') {
            console.log(event.target.tagName.toLowerCase())

            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
    })
})
