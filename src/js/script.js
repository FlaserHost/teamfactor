'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const subSections = document.querySelectorAll('.sub-menu');
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach((btn, _, orig) => {
        btn.addEventListener('click', e => {
            subSections.forEach(sub => sub.classList.remove('showed'));

            const subId = e.target.dataset.subId;
            const subSection = document.getElementById(subId);

            if (!e.target.classList.contains('active-nav')) {
                e.target.classList.add('active-nav');
                subSection.classList.add('showed');
            } else {
                orig.forEach(nav => nav.classList.remove('active-nav'));
            }
        });
    });
});