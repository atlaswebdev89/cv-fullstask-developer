/** @format */

export default function () {
    const skillsArray = [
        document.querySelector('.hard-skills'),
        document.querySelector('.soft-skills'),
    ]

    // видимая высота экрана
    const windowHeight = document.documentElement.clientHeight

    const sidebarScroll = document.querySelector('.block-aside')
    const arrayElementsEvents = [window, sidebarScroll]

    arrayElementsEvents.forEach((item) => {
        item.addEventListener('scroll', () => {
            if (skillsArray.length > 0) {
                skillsArray.forEach((item) => {
                    if (
                        scrollY >=
                        item.getBoundingClientRect().top +
                            scrollY -
                            windowHeight / 4
                    ) {
                        setTimeout(() => {
                            startProgressBar(item)
                        }, 300)
                        delete skillsArray[item]
                    }
                })
            }
        })
    })
}

function startProgressBar(elem) {
    // Get all the Meters
    const meters = elem.querySelectorAll('svg[data-value] .meter')

    meters.forEach((path) => {
        // Get the length of the path
        let length = path.getTotalLength()
        // console.log('leng ' + length)
        // console.log(length) once and hardcode the stroke-dashoffset and stroke-dasharray in the SVG if possible
        // or uncomment to set it dynamically
        // path.style.strokeDashoffset = length;
        // path.style.strokeDasharray = length;

        // Get the value of the meter
        let value = parseInt(path.parentNode.getAttribute('data-value'))
        // console.log('data ' + value)
        // Calculate the percentage of the total length
        let to = length * (value / 100)
        // console.log(to)
        // Trigger Layout in Safari hack https://jakearchibald.com/2013/animated-line-drawing-svg/
        path.getBoundingClientRect()
        let result = to + ' ' + (length - to)
        // Set the Offset
        path.style.strokeDasharray = result
    })
}
