const subSections = document.querySelectorAll('.sub-menu');
const navBtns = document.querySelectorAll('.nav-btn');
navBtns.forEach((btn, _, orig) => {
    btn.addEventListener('click', e => {
        const headerWrapper = e.target.closest('.header-wrapper');
        const subId = e.target.dataset.subId;
        const subSection = document.getElementById(subId);

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
currentLang.addEventListener('click', e => {
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