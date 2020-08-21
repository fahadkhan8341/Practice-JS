const hamBurger = document.querySelector('.ham-burger')
const navBar = document.querySelector('.navlinks')
const navLinks = document.querySelectorAll('.navlinks li')

hamBurger.addEventListener('click', () => {
    navBar.classList.toggle('showNavbar')
    hamBurger.classList.toggle('toggle')

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `slide .4s ease forwards ${(index / 7) + 0.3}s`
        }


    })
})