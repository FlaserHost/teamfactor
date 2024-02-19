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
    const mobileModal = document.querySelector('.mobile-menu-platform-wrapper');
    document.addEventListener('click', e => {
        const currentPath = e.composedPath();

        if (!currentPath.includes(header) && !currentPath.includes(mobileModal)) {
            subSections.forEach(sub => sub.classList.remove('showed'));
            navBtns.forEach(nav => nav.classList.remove('active-nav'));
        }
    });

    // функция создания дублей слайдов
    const dublicatesCreate = slider => {
        const viewport = window.innerWidth;
        const originalSlides = slider.slides;
        const amount = originalSlides.length;
        const width = originalSlides[0].getBoundingClientRect().width;
        const divider = width * amount;

        const dublicatesAmount = Math.round(viewport / divider);

        for (let i = 0; i < dublicatesAmount; i++) {
            originalSlides.forEach(slide => slider.appendSlide(slide.outerHTML));
        }
    }

    // Бегущие строки

    const swiperDeskMarquee = new Swiper('.desktop-marquee', {
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

    const mobileMarquee = () => {
        const viewport = window.innerWidth;
        let swiperMobMarquee = '';
        const mobile = document.querySelector('.mobile-marquee');

        if (viewport <= 425) {
            mobile.classList.remove('hide');
            swiperMobMarquee = new Swiper('.mobile-marquee', {
                direction: 'horizontal',
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 30,
                speed: 2000,
                watchOverflow: true,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: true,
                },
            });

            dublicatesCreate(swiperMobMarquee);
        } else {
            mobile.classList.add('hide');
        }
    }

    // слайдеры

    const thumbSwiper = new Swiper(".thumbs-slider", {
        spaceBetween: 17,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
    });

    const mainSwiper = new Swiper(".main-slider", {
        spaceBetween: 17,
        thumbs: {
            swiper: thumbSwiper,
        },
        breakpoints: {
            769: {
                slidesPerView: 1.5,
            },
            10: {
                slidesPerView: 1.07,
            }
        }
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

    const blogSlider = new Swiper(".swiper-blog", {
        spaceBetween: 20,
        breakpoints: {
            945: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            490: {
                slidesPerView: 2.1,
            },
            10: {
                slidesPerView: 1.1,
            }
        }
    });

    const sliders = [swiperDeskMarquee, messengers, jobSites, services];
    sliders.forEach(slider => dublicatesCreate(slider));

    mobileMarquee();

    const viewportChecker = () => {
        const sliders = [swiperDeskMarquee, messengers, jobSites, services];
        sliders.forEach(slider => dublicatesCreate(slider));
        mobileMarquee();
    }
    window.addEventListener('resize', viewportChecker);

    // мобильное меню

    const mobileMenuArticles = document.querySelectorAll('.mobile-menu-article');
    const mobileMenuBtns = document.querySelectorAll('.mobile-menu-btn');
    mobileMenuBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            const property = e.target.dataset.property;
            mobileMenuArticles.forEach(art => art.classList.remove('flex'));

            const parent = e.target.closest('.mobile-menu-platform');
            parent.classList.add('not-menu');

            const neededArticle = document.querySelector(`.mobile-menu-article#${property}`);
            neededArticle.classList.add('flex');
        });
    });

    // гамбургер

    const hamburgerBtn = document.querySelector('.hamburger-menu > .menu__btn');
    hamburgerBtn.addEventListener('click', e => {
        const parent = e.target.parentElement;
        const modal = parent.nextElementSibling;

        // открытие / закрытие модалки
        if (parent.classList.contains('closed')) {
            modal.classList.remove('hide');
            parent.classList.remove('closed');
        } else {
            modal.classList.add('hide');
            parent.classList.add('closed');
            mobileMenuArticles.forEach(art => art.classList.remove('flex'));
            modal.querySelector('.mobile-menu-platform').classList.remove('not-menu');
            modal.querySelector('#mobile-menu-article').classList.add('flex');
        }
    });

    // вкладки advantages

    const advantagesArticles = document.querySelectorAll('.advantages-article-item');
    const tabs = document.querySelectorAll('.advantages-tab');
    tabs.forEach((tab, _, orig) => {
        tab.addEventListener('click', e => {
            orig.forEach(item => item.classList.remove('active-tab'));
            e.target.classList.add('active-tab');
            advantagesArticles.forEach(art => art.classList.remove('show'));

            const property = e.target.dataset.property;
            document.getElementById(property).classList.add('show');
        });
    });
});
