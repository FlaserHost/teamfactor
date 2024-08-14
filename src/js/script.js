'use strict';

const html = document.querySelector('html');

const titles = {
    demo_modal: {
        english: {
            h2: 'Demo version',
            p: `In order to get a demo version provide the following information:`,
            button: 'Get a ready solution for your tasks',
        },
        turkish: {
            h2: 'Demo versiyonu',
            p: `Ücretsiz demo talep etmek için aşağıdaki bilgileri doldurun:`,
            button: 'İhtiyaçlarınız için hazır çözüm deneyin',
        }
    },
    register: {
        english: {
            h2: 'register for the webinar',
            p: `In order to register for the webinar provide the following information:`,
            button: 'Register',
        },
        turkish: {
            h2: 'Webİnara kayıt olun',
            p: `Webinara kayıt olmak için aşağıdaki bilgileri doldurun:`,
            button: 'Kayıt Olun',
        }
    },
    video: {
        english: {
            h2: 'get the webinar video',
            p: `In order to get the webinar video, the presentation, 
the gift and other useful information provide the following information:`,
            button: 'Get the webinar video',
        },
        turkish: {
            h2: 'Webİnarın kaydını İzleyİn',
            p: `Webinarın kaydına ulaşmak için aşağıdaki bilgileri doldurun:`,
            button: 'Webinarın kaydını izleyin',
        }
    },
    partners: {
        english: {
            h2: 'become a partner',
            p: `In order to send a request provide the following information:`,
            button: 'Send a request',
        },
        turkish: {
            h2: 'İş ortağımız olun',
            p: `Formu göndermek için
aşağıdaki bilgileri doldurun:`,
            button: 'Talep gönderin',
        }
    },
    contact_me: {
        english: {
            h2: 'order a callback',
            p: `In order for us to contact you provide the following information:`,
            button: 'Order a callback',
        },
        turkish: {
            h2: 'Gerİ arama talep et',
            p: `Sizinle iletişime geçebilmemiz için lütfen aşağıdaki bilgileri doldurun:`,
            button: 'Geri arama talep et',
        }
    },
    cookie: {
        english: {
            p: `In order to optimize the website functionality and improve your online experience TeamFactor uses cookies. You agree to the usage of cookies when you continue using this site. Further details can be found in our <a class="cookie-policy" href="#">Cookie Policy</a>`,
            button: 'Accept',
        },
        turkish: {
            p: `Web sitesi işlevselliğini optimize etmek ve çevrimiçi deneyiminizi geliştirmek için TeamFactor çerezleri kullanır. Bu siteyi kullanmaya devam ettiğinizde çerezlerin kullanımını kabul edersiniz. Daha fazla ayrıntı <a class="cookie-policy" href="#">Çerez Politikamızda</a> bulabilirsiniz`,
            button: 'Kabul et',
        },
    },
    timer: {
        english: {
            button: 'Get the webinar video',
            before_class: 'ended-en'
        },
        turkish: {
            button: 'Webinarın kaydını izleyin',
            before_class: 'ended-tr'
        }
    },
};

const formTitleLang = document.body.dataset.language;

document.addEventListener('DOMContentLoaded', () => {
    const subSections = document.querySelectorAll('.sub-menu');
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach((btn, _, orig) => {
        btn.addEventListener('click', e => {
            const headerWrapper = e.target.closest('.header-wrapper');
            const subId = e.target.dataset.subId;

            const subSection = document.getElementById(subId);

            console.log(e.target.classList.contains('active-nav'));

            if (!e.target.classList.contains('active-nav')) {
                subSections.forEach(sub => sub.classList.remove('showed'));
                orig.forEach(nav => nav.classList.remove('active-nav'));
                e.target.classList.add('active-nav');
                subSection.classList.add('showed');
                headerWrapper.classList.add('border-radius-top');
            } else {
                e.target.classList.remove('active-nav');
                subSection.classList.remove('showed');
                headerWrapper.classList.remove('border-radius-top');
            }
        });
    });

    const header = document.querySelector('.header-wrapper');
    const mobileModal = document.querySelector('.mobile-menu-platform-wrapper');

    // языковая панель

    const languagePanel = document.getElementById('language-panel');
    const currentLang = document.getElementById('current-lang');
    currentLang.addEventListener('click', () => {
        if (languagePanel.classList.contains('hide')) {
            const wrapper = languagePanel.children[0];
            const height = wrapper.getBoundingClientRect().height;

            languagePanel.style.height = `${height + 14}px`;
            languagePanel.classList.remove('hide');
        } else {
            languagePanel.style.height = '39px';
            languagePanel.classList.add('hide');
        }
    });

    // скрытие выпадашек при клике вовне

    document.addEventListener('click', e => {
        const currentPath = e.composedPath();

        if (!currentPath.includes(header) && !currentPath.includes(mobileModal)) {
            subSections.forEach(sub => sub.classList.remove('showed'));
            navBtns.forEach(nav => nav.classList.remove('active-nav'));
        }

        if (!currentPath.includes(languagePanel)) {
            languagePanel.style.height = '39px';
            languagePanel.classList.add('hide');
        }
    });

    // функция создания дублей слайдов
    const dublicatesCreate = slider => {
        try {
            const viewport = window.innerWidth;
            const originalSlides = slider.slides;
            const amount = originalSlides.length;
            const width = originalSlides[0].getBoundingClientRect().width;
            const divider = width * amount;

            const dublicatesAmount = Math.round(viewport / divider);

            for (let i = 0; i < dublicatesAmount; i++) {
                originalSlides.forEach(slide => slider.appendSlide(slide.outerHTML));
            }
        } catch (err) {}
    }

    // Бегущие строки

    let swiperDeskMarquee;

    try {
        swiperDeskMarquee = new Swiper('.desktop-marquee', {
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
    } catch (err) {}

    const mobileMarquee = () => {
        try {
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
        } catch (err) {}
    }

    // слайдеры

    let thumbSwiper;
    let messengers;
    let jobSites;
    let services;

    try {
        thumbSwiper = new Swiper(".thumbs-slider", {
            spaceBetween: 17,
            slidesPerView: 'auto',
            freeMode: true,
            watchSlidesProgress: true,
            allowTouchMove: false
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

        messengers = new Swiper(".swiper-messengers", {
            spaceBetween: 17,
            loop: true,
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.next-arrow.messengers-arrow',
                prevEl: '.prev-arrow.messengers-arrow',
            },
        });

        jobSites = new Swiper(".swiper-job-sites", {
            spaceBetween: 17,
            loop: true,
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.next-arrow.job-sites-arrow',
                prevEl: '.prev-arrow.job-sites-arrow',
            },
        });

        services = new Swiper(".swiper-services", {
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
    } catch (err) {}

    const sliders = [swiperDeskMarquee, messengers, jobSites, services];
    sliders.forEach(slider => dublicatesCreate(slider));

    mobileMarquee();

    const viewportChecker = () => {
        const sliders = [swiperDeskMarquee, messengers, jobSites, services];
        sliders.forEach(slider => dublicatesCreate(slider));
        mobileMarquee();
    }

    try {
        const tableWrapper = document.querySelector('.tariffs-and-costs');

        let tableWrapperPos = tableWrapper.offsetTop * -1;

        window.addEventListener('resize', () => {
            tableWrapperPos = tableWrapper.offsetTop * -1;
        });

        // расчет высоты выделения популярного тарифа
        const popularTariff = document.getElementById('popular-tariff');
        const tableHeight = document.querySelector('.table-wrapper').getBoundingClientRect().height;
        popularTariff.style.height = `calc(100% + ${tableHeight - 45}px)`;

        // появление липкой шапки
        const stickyHeader = document.querySelector('.table-sticky-header');

        document.addEventListener('scroll', e => {
            const scrollWindow = e.target.body.getBoundingClientRect().top;
            scrollWindow <= tableWrapperPos
                ? stickyHeader.classList.add('show-sticky-header')
                : stickyHeader.classList.remove('show-sticky-header');
        });
        
        //развернуть/свернуть таблицу
        const closeLangs = {
            'english': ['Show table', 'Hide table'],
            'turkish': ['Tablo aç (düğme)', 'Tabloyu gizle (düğme)']
        };

        const showFullTableBtn = document.getElementById('show-full-table-btn');
        showFullTableBtn.addEventListener('click', e => {
            const parent = e.target.parentElement;
            const grandParent = e.target.closest('.calculator');
            const table = grandParent.querySelector('.tariffs-and-costs');
            const tableContainer = table.querySelector('.table-container');
            const lang = e.target.dataset.pageLanguage;

            if (!e.target.classList.contains('showed-table')) {
                const tableHeight = tableContainer.children[0].getBoundingClientRect().height;
                tableContainer.style.maxHeight = `${tableHeight + 200}px`;
                e.target.classList.add('showed-table');
                e.target.innerText = closeLangs[lang][1];
                parent.classList.remove('mist');
            } else {
                document.querySelector('html').scroll({top: tableWrapperPos * -1 - 100, behavior: 'smooth'});
                setTimeout(() => {
                    tableContainer.style.maxHeight = `500px`;
                    e.target.classList.remove('showed-table');
                    e.target.innerText = closeLangs[lang][0];
                    parent.classList.add('mist');
                }, 450);
            }
        });

        //логика расчета
        const priceList = {
            one_recruiter: 4000,
            additional_recruiter: 1900,
            additional_connection: 950,
            allowance: 2000
        };

        const calculationForm = document.getElementById('calc-form');
        const calculateBtn = document.getElementById('calc-btn');
        const fastStartPrice = document.querySelectorAll('.fast-start > span');
        const advancedPrice = document.querySelectorAll('.advanced > span')
        calculateBtn.addEventListener('click', () => {
            const fieldValues = [...new FormData(calculationForm)];
            let number_of_recruiters = +fieldValues[0][1];
            let internal_customers = +fieldValues[1][1];

            if (number_of_recruiters <= 0) {
                number_of_recruiters = 1;
                calculationForm.querySelector(`input#${fieldValues[0][0]}`).value = 1;
            }

            if (internal_customers < 0) {
                internal_customers = 0;
                calculationForm.querySelector(`input#${fieldValues[1][0]}`).value = 0;
            }

            const tmpSumm = number_of_recruiters > 1
                ? (--number_of_recruiters) * priceList.additional_recruiter + priceList.one_recruiter
                : number_of_recruiters * priceList.one_recruiter;

            const formula = (tmpSumm + internal_customers * priceList.additional_connection);
            const fastStart = formula / 89 * 3;
            const advanced = (formula + priceList.allowance * (++number_of_recruiters)) / 89 * 3;

            fastStartPrice.forEach(item => item.innerText = `${Math.ceil(fastStart)} $`);
            advancedPrice.forEach(item => item.innerText = `${Math.ceil(advanced)} $`);
        });
    } catch (err) {}

    window.addEventListener('resize', () => {
        viewportChecker();
    });

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
    const html = document.querySelector('html');
    const hamburgerBtn = document.querySelector('.hamburger-menu > .menu__btn');
    hamburgerBtn.addEventListener('click', e => {
        const parent = e.target.parentElement;
        const modal = parent.nextElementSibling;

        // открытие / закрытие модалки
        if (parent.classList.contains('closed')) {
            modal.classList.remove('hide');
            parent.classList.remove('closed');
            html.style.overflowY = 'hidden';
        } else {
            modal.classList.add('hide');
            parent.classList.add('closed');
            mobileMenuArticles.forEach(art => art.classList.remove('flex'));
            modal.querySelector('.mobile-menu-platform').classList.remove('not-menu');
            modal.querySelector('#mobile-menu-article').classList.add('flex');
            html.style.overflowY = 'visible';
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

    // кнопка Назад (для мобильной версии)
    const mobileBackBtns = document.querySelectorAll('.mobile-back-btn');
    mobileBackBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            const platform = e.target.closest('.mobile-menu-platform');
            const mainMenu = platform.children[0];
            const parent = e.target.closest('.mobile-menu-article');
            platform.classList.remove('not-menu');
            parent.classList.remove('flex');
            mainMenu.classList.add('flex');
        });
    });

    if (!localStorage.acceptCookie) {
        const cookieBlock = `<div class="cookie-notice">
            <p>${titles.cookie[formTitleLang].p}</p>
            <button class="cookie-notice-btn cookie-notice-close" type="button"></button>
            <button class="cookie-notice-btn cookie-notice-accept" type="button">${titles.cookie[formTitleLang].button}</button>
        </div>`;

        document.querySelector('main').insertAdjacentHTML('afterend', cookieBlock);

        const cookieNoticeCloseBtns = document.querySelectorAll('.cookie-notice-btn');
        cookieNoticeCloseBtns.forEach(btn => {
            btn.addEventListener('click', e => {
                e.target.parentElement.remove();
                localStorage.acceptCookie = true;
            });
        });

        const cookiePolicy = document.querySelector('.cookie-policy');
        cookiePolicy.addEventListener('click', e => {
            e.preventDefault();
            const footerPolicy = document.querySelector('.priv-terms > a:first-child');
            footerPolicy.click();
        });
    }

    // баннер

    if (!sessionStorage.bannerWatched) {
        setTimeout(() => {
            const banner = document.querySelector('.banner');
            banner.style.display = 'flex';
            html.style.overflow = 'hidden';

            const closeBtn = banner.querySelector('#banner-close-btn');
            closeBtn.addEventListener('click', e => {
                banner.remove();
                sessionStorage.bannerWatched = true;
                html.style.overflow = 'visible';
            });

            const bannerBtns = banner.querySelectorAll('.banner-btn');
            bannerBtns.forEach(btn => {
                btn.addEventListener('click', e => {
                    e.preventDefault();
                    sessionStorage.bannerWatched = true;
                    const href = e.target.getAttribute('href');
                    location.href = href;
                });
            });
        }, 15000);
    }

    // Отправка почты

    const asyncFetch = async (path, data) => {
        const response = await fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data).toString()
        });

        if (response.ok) {
            return await response.json();
        }
    }

    const subscribeBtn = document.querySelector('.subscribe-btn');
    subscribeBtn.addEventListener('click', e => {
        e.preventDefault();
        const parent = e.target.parentElement;
        const path = parent.dataset.path;

        const formData = {
            email: parent.querySelector('#email-field').value,
            sessid: BX.bitrix_sessid()
        }

        asyncFetch(path, formData).then(response => {
            let messageColor = '#1DECEC';

            if (!response.success) {
                messageColor = '#F3A2A2';
            }

            parent.innerHTML = `<span style="color: ${messageColor}">${response.message}</span>`;
        });
    });
});
