new Vivus('svg1', { duration: 200, animTimingFunction: Vivus.EASE, file: '../img/basic_calendar.svg' })
new Vivus('svg2', { duration: 200, animTimingFunction: Vivus.EASE, file: '../img/ecommerce_ticket.svg' })
new Vivus('svg3', { duration: 200, animTimingFunction: Vivus.EASE, file: '../img/basic_chronometer.svg' })
new Vivus('svg4', { duration: 200, animTimingFunction: Vivus.EASE, file: '../img/basic_pin2.svg' })


window.onload = () => setTimeout(() => fixedCTA.classList.add('visible'), 1000)
window.onscroll = () => isInViewport(contact) ? fixedCTA.classList.remove('visible') : fixedCTA.classList.add('visible')

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

