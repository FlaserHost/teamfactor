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
        html.style.overflow = 'hidden';
    } else {
        modal.classList.add('hide');
        parent.classList.add('closed');
        mobileMenuArticles.forEach(art => art.classList.remove('flex'));
        modal.querySelector('.mobile-menu-platform').classList.remove('not-menu');
        modal.querySelector('#mobile-menu-article').classList.add('flex');
        html.style.overflow = 'visible';
    }
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

// открытие демо формы
const demoModal = document.querySelector('.demo-page-modal');
const demoModalCloseBtn = demoModal.querySelector('.cross-close-btn')
const demoBtns = document.querySelectorAll('.demo-btn');
demoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        demoModal.classList.add('flex');
        html.style.overflow = 'hidden';
    });
});

demoModalCloseBtn.addEventListener('click', () => {
    demoModal.classList.remove('flex');
    html.style.overflow = 'visible';
});

const formInputs = demoModal.querySelectorAll('.form-field');
formInputs.forEach(btn => {
    btn.addEventListener('focus', e => {
        const parent = e.target.parentElement;
        const label = parent.children[0];
        label.style.opacity = '0';
    });

    btn.addEventListener('blur', e => {
        const parent = e.target.parentElement;
        const label = parent.children[0];
        label.style.opacity = '1';
    });
});
