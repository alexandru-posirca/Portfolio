const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const background_color = '#29323c';
const background_transparent = 'transparent';

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;
    if(scroll_position > 140) {
        header.style.backgroundColor = background_color
    } else {
        header.style.backgroundColor = background_transparent;
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
