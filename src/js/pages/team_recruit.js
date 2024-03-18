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

    const freeRecruiterSlider = new Swiper('.swiper-free-recruiter', {
        direction: 'horizontal',
        slidesPerView: 1.5,
        spaceBetween: 25,
        navigation: {
            nextEl: '.free-recruiter-slider-nav-btn.next',
            prevEl: '.free-recruiter-slider-nav-btn.prev',
        },
    });

    // установка z-index для строк (в текущей ситуации нужно делать именно через js)
    const calcTableRows = document.querySelectorAll('.calculator .table-row-title');
    let rowsLength = calcTableRows.length;
    calcTableRows.forEach(row => {
        row.style.zIndex = `${rowsLength}`;
        rowsLength--;
    });
});