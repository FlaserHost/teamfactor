'use strict';
const html = document.querySelector('html');

document.addEventListener('DOMContentLoaded', () => {
    const freeRecruiterSlider = new Swiper('.swiper-free-recruiter', {
        direction: 'horizontal',
        slidesPerView: 1.5,
        spaceBetween: 25,
        navigation: {
            nextEl: '.free-recruiter-slider-nav-btn.next',
            prevEl: '.free-recruiter-slider-nav-btn.prev',
        },
    });

    // аккордеон
    const close = (sibling, arrow) => {
        sibling.classList.remove('showed');
        arrow.classList.remove('rotated');
        sibling.removeAttribute('style');
    }

    const questions = document.querySelectorAll('.question-title');
    questions.forEach((question, _, arr) => {
        question.addEventListener('click', e => {
            const arrow = e.target.children[1];
            const sibling = e.target.nextElementSibling;
            const container = sibling.children[0];
            const height = container.getBoundingClientRect().height;

            if (!sibling.classList.contains('showed')) {
                arr.forEach(item => {
                    const arrow = item.children[1];
                    const sibling = item.nextElementSibling;
                    close(sibling, arrow);
                });

                sibling.style.height = `${height}px`;
                sibling.classList.add('showed');
                arrow.classList.add('rotated');
            } else {
                close(sibling, arrow);
            }
        });
    });
});