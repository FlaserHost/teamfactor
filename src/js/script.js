'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const subSections = document.querySelectorAll('.sub-menu');
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach((btn, _, orig) => {
        btn.addEventListener('click', e => {
            const subId = e.target.dataset.subId;
            const subSection = document.getElementById(subId);

            if (!e.target.classList.contains('active-nav')) {
                subSections.forEach(sub => sub.classList.remove('showed'));
                orig.forEach(nav => nav.classList.remove('active-nav'));
                e.target.classList.add('active-nav');
                subSection.classList.add('showed');
            } else {
                e.target.classList.remove('active-nav');
                subSection.classList.remove('showed');
            }
        });
    });

    const header = document.querySelector('.header-wrapper');
    document.addEventListener('click', e => {
        const currentPath = e.composedPath();

        if (!currentPath.includes(header)) {
            subSections.forEach(sub => sub.classList.remove('showed'));
            navBtns.forEach(nav => nav.classList.remove('active-nav'));
        }
    });

    // функция создания дублей слайдов
    const viewport = window.innerWidth;
    const dublicatesCreate = slider => {
        const originalSlides = slider.slides;
        const amount = originalSlides.length;
        const width = originalSlides[0].getBoundingClientRect().width;
        const divider = width * amount;

        const dublicatesAmount = Math.round(viewport / divider);

        for (let i = 0; i < dublicatesAmount; i++) {
            originalSlides.forEach(slide => slider.appendSlide(slide.outerHTML));
        }
    }

    // Бегущая строка

    const swiper = new Swiper('.swiper-marquee', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 2000,
        watchOverflow: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });

    // слайдеры

    const thumbSwiper = new Swiper(".thumbs-slider", {
        spaceBetween: 17,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
    });

    const mainSwiper = new Swiper(".main-slider", {
        spaceBetween: 17,
        slidesPerView: 1.5,
        thumbs: {
            swiper: thumbSwiper,
        },
    });

    const messengers = new Swiper(".swiper-messengers", {
        spaceBetween: 17,
        loop: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.next-arrow.messengers-arrow',
            prevEl: '.prev-arrow.messengers-arrow',
        },
    });

    const jobSites = new Swiper(".swiper-job-sites", {
        spaceBetween: 17,
        loop: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.next-arrow.job-sites-arrow',
            prevEl: '.prev-arrow.job-sites-arrow',
        },
    });

    const services = new Swiper(".swiper-services", {
        spaceBetween: 17,
        loop: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.next-arrow.services-arrow',
            prevEl: '.prev-arrow.services-arrow',
        },
    });

    const sliders = [swiper, messengers, jobSites, services];
    sliders.forEach(slider => dublicatesCreate(slider));
});
