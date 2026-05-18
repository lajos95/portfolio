const gyikName = document.querySelectorAll('.gyik-name');

gyikName.forEach((item) => {
    item.addEventListener('click', () => {
        const isVisible = item.nextElementSibling.classList.contains('visible');
        const answer = item.nextElementSibling;
        gyikName.forEach((conitem) => {
            conitem.nextElementSibling.classList.add('hidden');
            conitem.nextElementSibling.classList.remove('visible');
            conitem.querySelector('span').textContent = '+';
        });
        if (!isVisible) {
            answer.classList.remove('hidden');
            answer.classList.add('visible');
            item.querySelector('span').textContent = '-';
        }
    });
});






