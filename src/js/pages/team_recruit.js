'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const sliderConditions = new Swiper('.swiper-conditions', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 17,
        navigation: {
            nextEl: '.conditions-slider-nav-btn.next',
            prevEl: '.conditions-slider-nav-btn.prev',
        },
    });
});