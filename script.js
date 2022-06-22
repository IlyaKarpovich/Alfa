const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1900,

    // If we need pagination
    // pagination: {
    // el: '.swiper-pagination',
    // },
    // grabCursor:'true' ,
    effect:'slide' ,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    // Navigation arrows
    // navigation: {
    // nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
    // },

});