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

    // открытие демо формы
    const demoModal = document.querySelector('.demo-page-modal');
    const demoModalTitle = demoModal.querySelector('h2');
    const demoModalDescription = demoModal.querySelector('p');
    const demoModalForm = demoModal.querySelector('form');
    const formBtn = demoModalForm.querySelector('button[type="submit"]');
    const demoModalCloseBtn = demoModal.querySelector('.cross-close-btn')

    const demoBtns = document.querySelectorAll('.demo-btn');
    demoBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            demoModal.classList.add('flex');
            html.style.overflow = 'hidden';
            demoModalTitle.innerText = 'Demo version';
            demoModalDescription.innerText = 'In order to get a demo version provide the following information:';
            formBtn.innerText = 'Get a ready solution for your tasks';
        });
    });

    demoModalCloseBtn.addEventListener('click', () => {
        demoModal.classList.remove('flex');
        html.style.overflow = 'visible';
    });

    const partnersBtns = document.querySelectorAll('.partners-btn');
    partnersBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            const property = e.target.dataset.property;
            demoModal.classList.add('flex');
            html.style.overflow = 'hidden';

            const titles = {
                partners: {
                    h2: 'become a partner',
                    p: `In order to send a request provide the following information:`,
                    form_action: '#',
                    button: 'Send a request',
                },
            };
            
            demoModalTitle.innerText = titles[property].h2;
            demoModalDescription.innerText = titles[property].p;
            demoModalForm.setAttribute('action', titles[property].form_action);
            formBtn.innerText = titles[property].button;
        });
    });
});