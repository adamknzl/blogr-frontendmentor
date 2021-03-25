const submenuTriggers = document.querySelectorAll('.submenu-trigger');
const submenuArrows = document.querySelectorAll('.menu-arrow');
const submenus = document.querySelectorAll('.submenu');

submenus.forEach((submenu) => {
    submenuTriggers.forEach((submenuTrigger) => {
        submenuTrigger.addEventListener('click', () => {
            submenu.classList.toggle('active')
        })
    })
})