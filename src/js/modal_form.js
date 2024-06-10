// открытие демо формы
const formTitleLang = document.body.dataset.language;
const pageTitle = document.body.dataset.title;
const demoModal = document.querySelector('.demo-page-modal');
const demoModalTitle = demoModal.querySelector('h2');
const demoModalDescription = demoModal.querySelector('p');
const demoModalForm = demoModal.querySelector('form');
const formBtn = demoModalForm.querySelector('button[type="submit"]');
const demoModalCloseBtn = demoModal.querySelector('.cross-close-btn')

const modalBtnProperty = document.getElementById('btn-property');

demoModalCloseBtn.addEventListener('click', () => {
    demoModal.classList.remove('flex');
    html.style.overflow = 'visible';
    modalBtnProperty.value = '';
});

const demoBtns = document.querySelectorAll('.demo-btn');
demoBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        const property = e.target.dataset.property;
        modalBtnProperty.value = `${pageTitle}__${e.target.dataset.modalProperty}`;
        demoModal.classList.add('flex');
        html.style.overflow = 'hidden';

        demoModalTitle.innerText = titles[property][formTitleLang].h2;
        demoModalDescription.innerText = titles[property][formTitleLang].p;
        formBtn.innerText = titles[property][formTitleLang].button;
    });
});

const formInputs = demoModal.querySelectorAll('.form-field');
formInputs.forEach(input => {
    input.addEventListener('focus', e => {
        const parent = e.target.parentElement;
        const label = parent.children[0];
        label.style.opacity = '0';
    });

    input.addEventListener('blur', e => {
        if (input.value === '') {
            const parent = e.target.parentElement;
            const label = parent.children[0];
            label.style.opacity = '1';
        }
    });
});