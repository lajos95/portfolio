import engText from './eng.json' with { type: 'json' };
import hunText from './hun.json' with { type: 'json' };

let currentLang = 'hu';

function updateText() {
    const elements = document.querySelectorAll('[data-i18n]');
    const currentDictionary = currentLang === 'en' ? engText : hunText;
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (currentDictionary[key]) {
            el.textContent = currentDictionary[key];
        }
    });
}

const toggleButton = document.querySelector('[data-i18n="langToggle"]');
toggleButton.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'hu' : 'en';
    updateText();
});

updateText();

const gyikName = document.querySelectorAll('.gyik-name');

gyikName.forEach((item) => {
    item.addEventListener('click', () => {
        const isVisible = item.nextElementSibling.classList.contains('visible');
        const answer = item.nextElementSibling;
        gyikName.forEach((conitem) => {
            conitem.nextElementSibling.classList.add('hidden');
            conitem.nextElementSibling.classList.remove('visible');
        });
        if (!isVisible) {
            answer.classList.remove('hidden');
            answer.classList.add('visible');
        }
    });
});






