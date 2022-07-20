
// const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'horizontal',
    // loop: true,
    // speed: 1900,

    // If we need pagination
    // pagination: {
    // el: '.swiper-pagination',
    // },
    // grabCursor:'true' ,
    // effect:'slide' ,
    // autoplay: {
        // delay: 3500,
        // disableOnInteraction: false,
    // },
    // Navigation arrows
    // navigation: {
    // nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
    // },

// });

function x() {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');
    const menu = document.querySelector('.menu');
    const burger = document.querySelector('.btn-menu');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('menu_active');
        logo.classList.toggle('logo_hide');
        header.classList.toggle('header_active');
    })
};
x();