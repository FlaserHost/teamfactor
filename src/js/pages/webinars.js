'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const freeRecruiterSlider = new Swiper('.swiper-free-recruiter', {
        direction: 'horizontal',
        slidesPerView: 1.5,
        spaceBetween: 25,
        breakpoints: {
            10: {
                slidesPerView: 1,
                spaceBetween: 25
            },
            1200: {
                slidesPerView: 1.2,
            },
            1500: {
                slidesPerView: 1.5,
            }
        },
        navigation: {
            nextEl: '.free-recruiter-slider-nav-btn.next',
            prevEl: '.free-recruiter-slider-nav-btn.prev',
        },
    });

    // таймер

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());

        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        let clock = document.getElementById(id);
        let daysSpan = clock.querySelector('.days');
        let hoursSpan = clock.querySelector('.hours');
        let minutesSpan = clock.querySelector('.minutes');
        let secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            let t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
                const timer = document.querySelector('.timer');
                const registerBtns = document.querySelectorAll('button[data-property="register"]');

                const beforeClass = titles.timer[formTitleLang].before_class;
                timer.classList.add(beforeClass);

                registerBtns.forEach(btn => {
                    btn.innerText = titles.timer[formTitleLang].button;
                    btn.setAttribute('data-property', 'video');
                    btn.setAttribute('data-modal-property', 'video');
                });
            }
        }

        updateClock();
        let timeinterval = setInterval(updateClock, 1000);
    }

    const startTime = document.getElementById('webinar-start-date');
    const timestamp = startTime.dataset.timestamp;
    const interval = timestamp - (Date.parse(new Date()) / 1000);

    //let deadline = new Date(Date.parse(new Date()) +  interval * 1000);
    let deadline = new Date(Date.parse(new Date()) +  5 * 1000);
    initializeClock('countdown', deadline);
});